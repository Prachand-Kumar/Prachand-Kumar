const app = document.querySelector("#app");
const toast = document.querySelector(".toast");
const submitDialog = document.querySelector("#submit-dialog");
const exitDialog = document.querySelector("#exit-dialog");
const resumeButton = document.querySelector('[data-action="resume"]');

const STORAGE_KEY = "exam-hall-class9-attempt-v1";
const EXAM_SECONDS = 120 * 60;
const SECTION_ORDER = ["Physics", "Chemistry", "Biology", "Mathematics", "Mental Ability"];

let pack = null;
let state = null;
let currentView = "home";
let selectedStudySubject = "Physics";
let timerInterval = null;
let toastTimer = null;

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

async function loadPack() {
  const response = await fetch("study-pack.md");
  if (!response.ok) throw new Error("Unable to load study-pack.md");
  return parsePack(await response.text());
}

function parsePack(markdown) {
  const lines = markdown.split(/\r?\n/);
  const notes = {};
  const plan = [];
  const questions = [];
  const answerMap = {};

  const notesStart = lines.findIndex((line) => line === "## High-yield study material");
  const planStart = lines.findIndex((line) => line === "## 21-day plan");
  const testStart = lines.findIndex((line) => line === "## Practice test");
  const keyStart = lines.findIndex((line) => line === "## Answer key");
  const scoringStart = lines.findIndex((line) => line === "## Scoring and review");

  let subject = "";
  for (let i = notesStart + 1; i < planStart; i += 1) {
    const line = lines[i];
    if (line.startsWith("### ")) {
      subject = line.slice(4).trim();
      notes[subject] = [];
      continue;
    }
    const noteMatch = line.match(/^\*\*(.+?):\*\*\s+(.+)/);
    if (noteMatch && subject) {
      notes[subject].push({ title: noteMatch[1], text: noteMatch[2] });
    }
  }

  for (let i = planStart + 1; i < testStart; i += 1) {
    const row = lines[i].match(/^\|\s*(Day \d+)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/);
    if (row) plan.push({ day: row[1], focus: row[2], output: row[3] });
  }

  subject = "";
  let currentQuestion = null;
  for (let i = testStart + 1; i < keyStart; i += 1) {
    const line = lines[i];
    if (line.startsWith("### ")) {
      subject = line.slice(4).trim();
      continue;
    }

    const questionMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (questionMatch) {
      currentQuestion = {
        number: Number(questionMatch[1]),
        subject,
        prompt: questionMatch[2],
        options: [],
      };
      questions.push(currentQuestion);
      continue;
    }

    const optionMatch = line.match(/^\s+(\d+)\.\s+(.+)/);
    if (optionMatch && currentQuestion) {
      currentQuestion.options.push(optionMatch[2]);
    }
  }

  for (let i = keyStart + 1; i < scoringStart; i += 1) {
    for (const match of lines[i].matchAll(/(\d+)-([1-4])/g)) {
      answerMap[Number(match[1])] = Number(match[2]);
    }
  }

  for (const question of questions) {
    question.answer = answerMap[question.number];
  }

  if (questions.length !== 80 || questions.some((question) => question.options.length !== 4 || !question.answer)) {
    throw new Error("The study pack could not be parsed into a complete 80-question test.");
  }

  return { notes, plan, questions };
}

function defaultState(candidate = "Candidate") {
  return {
    status: "active",
    candidate,
    answers: Array(80).fill(null),
    marked: Array(80).fill(false),
    visited: Array(80).fill(false),
    current: 0,
    deadline: Date.now() + EXAM_SECONDS * 1000,
    submittedAt: null,
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== 80) return null;
    return saved;
  } catch {
    return null;
  }
}

function saveState() {
  if (state) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateResumeButton();
}

function updateResumeButton() {
  const active = state?.status === "active" && state.deadline > Date.now();
  resumeButton.hidden = !active || currentView === "exam";
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

function secondsLeft() {
  if (!state?.deadline) return EXAM_SECONDS;
  return Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
}

function ensureTimer() {
  window.clearInterval(timerInterval);
  if (state?.status !== "active") return;

  const tick = () => {
    const remaining = secondsLeft();
    const timer = document.querySelector("#exam-timer");
    if (timer) {
      timer.textContent = formatTime(remaining);
      timer.classList.toggle("warning", remaining <= 10 * 60);
    }
    if (remaining <= 0) {
      window.clearInterval(timerInterval);
      submitExam(true);
    }
  };

  tick();
  timerInterval = window.setInterval(tick, 1000);
}

function renderHome() {
  currentView = "home";
  document.body.classList.remove("exam-active");
  updateResumeButton();
  const hasAttempt = state?.status === "active" && state.deadline > Date.now();
  const lastScore = state?.status === "submitted" ? calculateResults().score : null;

  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Class IX · Full-length mock</p>
        <h1>Enter the<br><em>exam hall.</em></h1>
        <p class="hero-deck">
          A focused 120-minute simulation built from your syllabus: 80 single-correct questions,
          section navigation, negative marking, review flags and an OMR-style answer palette.
        </p>
        <div class="hero-actions">
          <button class="button primary" type="button" data-action="${hasAttempt ? "resume" : "start"}">
            ${hasAttempt ? `Resume · ${formatTime(secondsLeft())} left` : "Begin mock examination"}
          </button>
          <button class="button secondary" type="button" data-action="study">Open study desk</button>
          ${lastScore !== null ? `<button class="button ghost" type="button" data-action="results">Last result: ${lastScore}/320</button>` : ""}
        </div>
      </div>
      <aside class="hero-ticket" aria-label="Exam admission card">
        <div class="ticket-inner">
          <span class="ticket-kicker">Admission card · Practice series 01</span>
          <h2>Talent<br>Mock '26</h2>
          <div class="ticket-grid">
            <div class="ticket-stat"><span>Questions</span><strong>80</strong></div>
            <div class="ticket-stat"><span>Duration</span><strong>120 min</strong></div>
            <div class="ticket-stat"><span>Correct</span><strong>+4</strong></div>
            <div class="ticket-stat"><span>Incorrect</span><strong>−1</strong></div>
          </div>
          <hr class="ticket-rule">
          <div class="candidate-form">
            <label for="candidate-name">Candidate name</label>
            <input id="candidate-name" maxlength="40" autocomplete="name" value="${escapeHtml(state?.candidate && state.candidate !== "Candidate" ? state.candidate : "")}" placeholder="Write your name">
          </div>
        </div>
      </aside>
    </section>
    <section class="instruction-strip" aria-label="Exam instructions">
      <div class="instruction-item"><b>01 · Three passes</b><span>Direct answers first, calculations second, review last.</span></div>
      <div class="instruction-item"><b>02 · Negative marks</b><span>Do not guess unless you can eliminate choices.</span></div>
      <div class="instruction-item"><b>03 · Keyboard ready</b><span>Keys 1–4 answer, arrows navigate and M marks review.</span></div>
      <div class="instruction-item"><b>04 · Autosaved</b><span>Your answers and remaining time survive a refresh.</span></div>
    </section>
  `;
  app.focus();
}

function renderStudy() {
  currentView = "study";
  document.body.classList.remove("exam-active");
  updateResumeButton();
  const material = window.STUDY_MATERIAL || {};
  const subjects = Object.keys(material);
  if (!subjects.includes(selectedStudySubject)) selectedStudySubject = subjects[0];
  const chapters = material[selectedStudySubject] || [];

  app.innerHTML = `
    <section class="study-page">
      <div class="page-heading">
        <div>
          <p class="eyebrow">Revision room</p>
          <h1>Study desk</h1>
        </div>
        <button class="button primary" type="button" data-action="${state?.status === "active" ? "resume" : "start"}">
          ${state?.status === "active" ? "Resume exam" : "Start the mock"}
        </button>
      </div>
      <nav class="study-tabs" aria-label="Study subjects">
        ${subjects.map((subject) => `
          <button class="study-tab ${subject === selectedStudySubject ? "active" : ""}" type="button" data-study-subject="${escapeHtml(subject)}">
            ${escapeHtml(subject)}
          </button>
        `).join("")}
      </nav>
      <div class="study-guidance">
        <b>How to study:</b>
        Read the concepts, close the chapter and recall them, redo the solved example without looking,
        then answer every reasoning check before opening its solution.
      </div>
      <div class="chapter-list" id="chapter-material">
        ${chapters.map((chapter, chapterIndex) => `
          <details class="chapter-module" ${chapterIndex === 0 ? "open" : ""}>
            <summary>
              <span class="chapter-index">${String(chapterIndex + 1).padStart(2, "0")}</span>
              <span class="chapter-heading">
                <small>${escapeHtml(chapter.level)}</small>
                <strong>${escapeHtml(chapter.title)}</strong>
                <em>${escapeHtml(chapter.summary)}</em>
              </span>
              <span class="chapter-toggle" aria-hidden="true">+</span>
            </summary>
            <div class="chapter-content">
              <section class="concept-panel">
                <p class="study-label">Core concepts</p>
                <ul>
                  ${chapter.concepts.map((concept) => `<li>${escapeHtml(concept)}</li>`).join("")}
                </ul>
              </section>
              <section class="formula-panel">
                <p class="study-label">Formula and recall desk</p>
                <div class="formula-list">
                  ${chapter.formulas.map((formula) => `<code>${escapeHtml(formula)}</code>`).join("")}
                </div>
              </section>
              <section class="worked-example">
                <p class="study-label">Solved multi-step example</p>
                <h3>${escapeHtml(chapter.example.question)}</h3>
                <ol>
                  ${chapter.example.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
                </ol>
                <p class="worked-answer"><b>Answer:</b> ${escapeHtml(chapter.example.answer)}</p>
              </section>
              <section class="reasoning-panel">
                <p class="study-label">Reasoning checks</p>
                <div class="check-list">
                  ${chapter.checks.map(([question, answer], checkIndex) => `
                    <details class="check-item">
                      <summary><span>Q${checkIndex + 1}</span>${escapeHtml(question)}</summary>
                      <p>${escapeHtml(answer)}</p>
                    </details>
                  `).join("")}
                </div>
              </section>
            </div>
          </details>
        `).join("")}
      </div>
      <div class="page-heading" style="margin-top:72px">
        <div>
          <p class="eyebrow">Preparation rhythm</p>
          <h1>21-day plan</h1>
        </div>
        <button class="button secondary" type="button" data-action="jump-chapters">↑ Back to chapter material</button>
      </div>
      <div class="plan-grid">
        ${pack.plan.map((item) => `
          <div class="plan-row">
            <strong>${escapeHtml(item.day)}</strong>
            <span>${escapeHtml(item.focus)}</span>
            <span>${escapeHtml(item.output)}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function sectionCounts() {
  return SECTION_ORDER.map((subject) => {
    const indexes = pack.questions
      .map((question, index) => ({ question, index }))
      .filter((item) => item.question.subject === subject);
    return {
      subject,
      indexes,
      answered: indexes.filter(({ index }) => state.answers[index] !== null).length,
    };
  });
}

function renderExam() {
  if (!state || state.status !== "active") {
    startExam();
    return;
  }
  if (secondsLeft() <= 0) {
    submitExam(true);
    return;
  }

  currentView = "exam";
  document.body.classList.add("exam-active");
  state.visited[state.current] = true;
  saveState();

  const question = pack.questions[state.current];
  const counts = sectionCounts();

  app.innerHTML = `
    <section class="exam-shell">
      <header class="exam-topbar">
        <span class="candidate-id">Candidate · ${escapeHtml(state.candidate)}</span>
        <span class="exam-title">Class IX Talent Mock</span>
        <time class="timer" id="exam-timer">${formatTime(secondsLeft())}</time>
      </header>
      <nav class="section-nav" aria-label="Question sections">
        ${counts.map(({ subject, indexes, answered }) => `
          <button class="section-button ${question.subject === subject ? "active" : ""}" type="button" data-section="${escapeHtml(subject)}">
            <b>${escapeHtml(subject)}</b>
            <small>${answered}/${indexes.length} answered</small>
          </button>
        `).join("")}
      </nav>
      <div class="exam-workspace">
        <section class="question-stage">
          <article class="question-paper">
            <div class="question-meta">
              <span class="question-number">Question ${question.number} of 80</span>
              <span>${escapeHtml(question.subject)}</span>
            </div>
            <h1 class="question-text">${escapeHtml(question.prompt)}</h1>
            <div class="options" role="radiogroup" aria-label="Answer choices">
              ${question.options.map((option, index) => {
                const choice = index + 1;
                const selected = state.answers[state.current] === choice;
                return `
                  <label class="option ${selected ? "selected" : ""}" data-option="${choice}">
                    <input type="radio" name="answer" value="${choice}" ${selected ? "checked" : ""}>
                    <span class="omr-circle">${choice}</span>
                    <span>${escapeHtml(option)}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </article>
          <div class="question-actions">
            <button class="button ghost" type="button" data-action="previous" ${state.current === 0 ? "disabled" : ""}>← Previous</button>
            <button class="button ghost" type="button" data-action="clear-answer">Clear response</button>
            <button class="button ghost" type="button" data-action="mark-review">${state.marked[state.current] ? "Unmark review" : "Mark for review"}</button>
            <button class="button ghost mobile-palette-toggle" type="button" data-action="toggle-palette">Question map</button>
            <button class="button primary next" type="button" data-action="next">${state.current === 79 ? "Review sheet" : "Save & next →"}</button>
          </div>
        </section>
        <aside class="palette-panel" id="palette-panel" aria-label="Question palette">
          <div class="palette-header">
            <h2>Answer sheet</h2>
            <div class="palette-legend">
              <span class="legend-item"><i class="status-dot answered"></i>Answered</span>
              <span class="legend-item"><i class="status-dot review"></i>Review</span>
              <span class="legend-item"><i class="status-dot current"></i>Current</span>
              <span class="legend-item"><i class="status-dot"></i>Not answered</span>
            </div>
          </div>
          <div class="palette-scroll">
            ${counts.map(({ subject, indexes }) => `
              <section class="palette-section">
                <h3>${escapeHtml(subject)}</h3>
                <div class="number-grid">
                  ${indexes.map(({ question: item, index }) => {
                    const classes = [
                      state.answers[index] !== null ? "answered" : "",
                      state.marked[index] ? "review" : "",
                      index === state.current ? "current" : "",
                    ].filter(Boolean).join(" ");
                    return `<button class="number-button ${classes}" type="button" data-question-index="${index}" aria-label="Question ${item.number}">${item.number}</button>`;
                  }).join("")}
                </div>
              </section>
            `).join("")}
          </div>
          <div class="palette-footer">
            <button class="button danger" type="button" data-action="open-submit">Submit examination</button>
            <button class="text-button" type="button" data-action="open-exit" style="width:100%;margin-top:8px">Save & exit</button>
          </div>
        </aside>
      </div>
    </section>
  `;

  ensureTimer();
  app.focus();
}

function startExam() {
  const nameInput = document.querySelector("#candidate-name");
  const candidate = nameInput?.value.trim() || state?.candidate || "Candidate";
  state = defaultState(candidate);
  saveState();
  document.documentElement.requestFullscreen?.().catch(() => {});
  renderExam();
}

function resumeExam() {
  if (!state || state.status !== "active" || secondsLeft() <= 0) {
    state = null;
    renderHome();
    return;
  }
  renderExam();
}

function navigateQuestion(index) {
  if (!state || index < 0 || index >= pack.questions.length) return;
  state.current = index;
  state.visited[index] = true;
  saveState();
  renderExam();
}

function openSubmitDialog() {
  const answered = state.answers.filter((answer) => answer !== null).length;
  const marked = state.marked.filter(Boolean).length;
  document.querySelector("#submit-summary").innerHTML = `
    <div><strong>${answered}</strong><span>Answered</span></div>
    <div><strong>${80 - answered}</strong><span>Not answered</span></div>
    <div><strong>${marked}</strong><span>For review</span></div>
  `;
  submitDialog.showModal();
}

function calculateResults() {
  let correct = 0;
  let incorrect = 0;
  const subjectResults = {};

  for (const subject of SECTION_ORDER) {
    subjectResults[subject] = { correct: 0, incorrect: 0, unattempted: 0, total: 0 };
  }

  pack.questions.forEach((question, index) => {
    const selected = state.answers[index];
    const section = subjectResults[question.subject];
    section.total += 1;
    if (selected === null) {
      section.unattempted += 1;
    } else if (selected === question.answer) {
      correct += 1;
      section.correct += 1;
    } else {
      incorrect += 1;
      section.incorrect += 1;
    }
  });

  const attempted = correct + incorrect;
  return {
    correct,
    incorrect,
    unattempted: 80 - attempted,
    attempted,
    score: correct * 4 - incorrect,
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0,
    subjectResults,
  };
}

function submitExam(autoSubmitted = false) {
  if (!state || state.status !== "active") return;
  state.status = "submitted";
  state.submittedAt = Date.now();
  saveState();
  window.clearInterval(timerInterval);
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  if (autoSubmitted) showToast("Time is up. Your answer sheet was submitted.");
  renderResults();
}

function renderResults() {
  if (!state || state.status !== "submitted") {
    renderHome();
    return;
  }
  currentView = "results";
  document.body.classList.remove("exam-active");
  updateResumeButton();
  const result = calculateResults();
  const performance =
    result.attempted < 40 ? "Simulation incomplete" :
    result.accuracy >= 85 ? "Excellent control" :
    result.accuracy >= 70 ? "Strong attempt" :
    result.accuracy >= 55 ? "Promising base" :
    "Build accuracy first";

  app.innerHTML = `
    <section class="results-page">
      <div class="results-inner">
        <div class="result-hero">
          <div>
            <p class="eyebrow">Answer sheet evaluated</p>
            <h1>${escapeHtml(performance)},<br>${escapeHtml(state.candidate)}.</h1>
          </div>
          <div class="score-stamp">
            <strong>${result.score}</strong>
            <span>out of 320</span>
          </div>
        </div>
        <div class="result-metrics">
          <div class="metric"><span>Correct</span><strong>${result.correct}</strong></div>
          <div class="metric"><span>Incorrect</span><strong>${result.incorrect}</strong></div>
          <div class="metric"><span>Unattempted</span><strong>${result.unattempted}</strong></div>
          <div class="metric"><span>Accuracy</span><strong>${result.accuracy}%</strong></div>
        </div>
        <div class="breakdown">
          <section class="result-card">
            <h2>Section performance</h2>
            ${SECTION_ORDER.map((subject) => {
              const section = result.subjectResults[subject];
              const percentage = Math.round((section.correct / section.total) * 100);
              return `
                <div class="subject-result">
                  <span>${escapeHtml(subject)}</span>
                  <div class="bar-track"><div class="bar-fill" style="width:${percentage}%"></div></div>
                  <b>${section.correct}/${section.total}</b>
                </div>
              `;
            }).join("")}
          </section>
          <section class="result-card">
            <h2>Exam diagnosis</h2>
            <p class="dialog-note">${diagnosisText(result)}</p>
            <p class="dialog-note"><b>Score rule:</b> ${result.correct} × 4 − ${result.incorrect} × 1 = ${result.score}.</p>
            <p class="dialog-note"><b>Next target:</b> Review every incorrect or skipped question, then retake after 48 hours.</p>
          </section>
        </div>
        <div class="result-actions">
          <button class="button primary" type="button" data-action="retake">Start fresh attempt</button>
          <button class="button secondary" type="button" data-action="study">Revise weak areas</button>
          <button class="button ghost" type="button" data-action="toggle-review">Show answer review</button>
        </div>
        <section id="answer-review" hidden>
          <div class="page-heading" style="margin-top:60px;margin-bottom:24px">
            <div><p class="eyebrow">Question-by-question</p><h1>Answer review</h1></div>
          </div>
          <div class="review-list">
            ${pack.questions.map((question, index) => {
              const selected = state.answers[index];
              const status = selected === null ? "skipped" : selected === question.answer ? "correct" : "wrong";
              return `
                <details class="review-item ${status}">
                  <summary>Q${question.number} · ${escapeHtml(question.subject)} · ${status === "correct" ? "Correct" : status === "wrong" ? "Incorrect" : "Not attempted"}</summary>
                  <p class="review-answer">${escapeHtml(question.prompt)}</p>
                  <p class="review-answer">
                    Your answer: <b>${selected === null ? "Not attempted" : `${selected}. ${escapeHtml(question.options[selected - 1])}`}</b><br>
                    Correct answer: <b>${question.answer}. ${escapeHtml(question.options[question.answer - 1])}</b>
                  </p>
                </details>
              `;
            }).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function diagnosisText(result) {
  if (result.attempted < 40) {
    return "Too few questions were attempted for a reliable diagnosis. Complete the full paper under timed conditions before judging your readiness.";
  }
  if (result.accuracy >= 85 && result.unattempted <= 8) {
    return "Your accuracy and attempt rate are both exam-ready. Focus on speed and protecting this accuracy under pressure.";
  }
  if (result.accuracy >= 75) {
    return "Your concepts are largely secure. Improve question selection and calculation speed before increasing risky attempts.";
  }
  if (result.incorrect > result.unattempted) {
    return "Negative marking is the main score leak. Slow down, eliminate options and leave low-confidence questions unanswered.";
  }
  return "The attempt was cautious. Use the study desk to strengthen weak sections, then gradually increase attempts while tracking accuracy.";
}

function handleAction(action) {
  switch (action) {
    case "home":
      if (currentView === "exam") {
        exitDialog.showModal();
      } else {
        renderHome();
      }
      break;
    case "study":
      if (currentView === "exam") {
        exitDialog.showModal();
      } else {
        renderStudy();
      }
      break;
    case "start":
      startExam();
      break;
    case "resume":
      resumeExam();
      break;
    case "results":
      renderResults();
      break;
    case "previous":
      navigateQuestion(state.current - 1);
      break;
    case "next":
      if (state.current === 79) openSubmitDialog();
      else navigateQuestion(state.current + 1);
      break;
    case "clear-answer":
      state.answers[state.current] = null;
      saveState();
      renderExam();
      showToast("Response cleared.");
      break;
    case "mark-review":
      state.marked[state.current] = !state.marked[state.current];
      saveState();
      renderExam();
      showToast(state.marked[state.current] ? "Marked for review." : "Review mark removed.");
      break;
    case "toggle-palette":
      document.querySelector("#palette-panel")?.classList.toggle("open");
      break;
    case "open-submit":
      openSubmitDialog();
      break;
    case "open-exit":
      exitDialog.showModal();
      break;
    case "retake":
      localStorage.removeItem(STORAGE_KEY);
      state = null;
      renderHome();
      break;
    case "toggle-review": {
      const review = document.querySelector("#answer-review");
      review.hidden = !review.hidden;
      if (!review.hidden) review.scrollIntoView({ behavior: "smooth" });
      break;
    }
    case "jump-chapters":
      document.querySelector("#chapter-material")?.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    default:
      break;
  }
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    event.preventDefault();
    handleAction(actionTarget.dataset.action);
    return;
  }

  const option = event.target.closest("[data-option]");
  if (option && state?.status === "active") {
    state.answers[state.current] = Number(option.dataset.option);
    saveState();
    renderExam();
    return;
  }

  const questionButton = event.target.closest("[data-question-index]");
  if (questionButton) {
    navigateQuestion(Number(questionButton.dataset.questionIndex));
    return;
  }

  const sectionButton = event.target.closest("[data-section]");
  if (sectionButton) {
    const index = pack.questions.findIndex((question) => question.subject === sectionButton.dataset.section);
    navigateQuestion(index);
    return;
  }

  const studyTab = event.target.closest("[data-study-subject]");
  if (studyTab) {
    selectedStudySubject = studyTab.dataset.studySubject;
    renderStudy();
  }
});

document.addEventListener("keydown", (event) => {
  if (currentView !== "exam" || state?.status !== "active" || submitDialog.open || exitDialog.open) return;
  if (["1", "2", "3", "4"].includes(event.key)) {
    state.answers[state.current] = Number(event.key);
    saveState();
    renderExam();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    navigateQuestion(Math.min(79, state.current + 1));
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigateQuestion(Math.max(0, state.current - 1));
  } else if (event.key.toLowerCase() === "m") {
    state.marked[state.current] = !state.marked[state.current];
    saveState();
    renderExam();
  }
});

submitDialog.addEventListener("close", () => {
  if (submitDialog.returnValue === "confirm") submitExam(false);
});

exitDialog.addEventListener("close", () => {
  if (exitDialog.returnValue !== "confirm") return;
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  renderHome();
  ensureTimer();
});

window.addEventListener("beforeunload", saveState);

(async function init() {
  try {
    pack = await loadPack();
    state = loadState();
    if (state?.status === "active" && secondsLeft() <= 0) {
      state.status = "submitted";
      state.submittedAt = Date.now();
      saveState();
    }
    renderHome();
    ensureTimer();
  } catch (error) {
    console.error(error);
    app.innerHTML = `
      <section class="loading-screen">
        <p class="eyebrow">Question booklet unavailable</p>
        <h1 style="font-family:var(--display);max-width:600px;text-align:center">The exam content could not be opened.</h1>
        <p>${escapeHtml(error.message)}</p>
      </section>
    `;
  }
})();
