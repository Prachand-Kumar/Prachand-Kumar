window.STUDY_MATERIAL = {
  Physics: [
    {
      title: "Electricity: Magnetic and Heating Effects",
      level: "Class 8 bridge",
      summary: "Connect electric current with heat, magnetism, safety devices and everyday appliances.",
      concepts: [
        "Electric current is the rate at which charge flows through a conductor. Conventional current is taken from positive to negative terminal outside a cell.",
        "A current-carrying wire produces a magnetic field. Around a straight wire, the field lines are concentric circles; the right-hand thumb rule gives their direction.",
        "An electromagnet becomes stronger with more coil turns, greater current and a soft-iron core. It loses most magnetism when current stops.",
        "Heating occurs because moving electrons collide with particles of the conductor. Heating is useful in irons, heaters and toasters but unwanted in transmission wires.",
        "A fuse or MCB protects a circuit from excessive current. A fuse is connected in series and uses a low-melting-point wire."
      ],
      formulas: ["I = Q/t", "H = I^2 R t", "P = VI", "Electrical energy = P x t"],
      example: {
        question: "A 5 ohm heating coil carries 2 A for 10 minutes. Find the heat produced.",
        steps: [
          "Convert time: 10 min = 600 s.",
          "Use H = I^2 R t.",
          "H = 2^2 x 5 x 600 = 12,000 J."
        ],
        answer: "12 kJ of heat is produced."
      },
      checks: [
        ["Why is fuse wire thin and made from a low-melting-point alloy?", "It heats and melts quickly when current exceeds the safe value, breaking the circuit."],
        ["Why is soft iron preferred in an electromagnet?", "It becomes strongly magnetised with current and loses magnetism quickly when current is switched off."],
        ["A current of 3 A flows for 2 minutes. How much charge passes?", "Q = It = 3 x 120 = 360 C."]
      ]
    },
    {
      title: "Pressure, Winds, Storms and Cyclones",
      level: "Class 8 bridge",
      summary: "Understand pressure in solids and fluids, atmospheric motion and cyclone safety.",
      concepts: [
        "Pressure depends on force and contact area. The same force produces greater pressure on a smaller area.",
        "Liquids exert pressure on the bottom and walls of a container; liquid pressure increases with depth.",
        "Air has weight and exerts atmospheric pressure in every direction.",
        "Uneven solar heating creates pressure differences. Warm air expands, becomes less dense and rises; cooler air moves in to replace it, producing wind.",
        "Cyclones form over warm oceans when moist air rises rapidly. Condensation releases energy, pressure falls further and spiralling winds strengthen.",
        "During a cyclone, follow official warnings, secure loose objects, avoid floodwater and electrical lines, and move to a safe shelter if advised."
      ],
      formulas: ["Pressure = Force/Area", "1 Pa = 1 N/m^2"],
      example: {
        question: "A 600 N person stands on shoes with a total contact area of 0.03 m^2. Find the pressure on the floor.",
        steps: [
          "Use P = F/A.",
          "P = 600/0.03.",
          "P = 20,000 Pa."
        ],
        answer: "The pressure is 2.0 x 10^4 Pa."
      },
      checks: [
        ["Why do camels have broad feet?", "A larger contact area reduces pressure on sand, so the feet sink less."],
        ["Why are cyclone winds attracted toward the centre?", "The centre has very low pressure, so surrounding air moves toward it and is deflected into a spiral."],
        ["Why does a sharp knife cut better than a blunt one?", "Its smaller edge area creates greater pressure for the same applied force."]
      ]
    },
    {
      title: "Light: Mirrors and Lenses",
      level: "Class 8 bridge",
      summary: "Use reflection rules and image properties to reason about mirrors, lenses and the human eye.",
      concepts: [
        "The angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in one plane.",
        "A plane mirror forms a virtual, erect, same-size image as far behind the mirror as the object is in front. It is laterally inverted.",
        "A concave mirror converges parallel rays and can form real or virtual images. A convex mirror always forms a virtual, erect and diminished image with a wide field of view.",
        "A convex lens converges light; a concave lens diverges it. A convex lens gives a magnified virtual image when the object is inside its focal length.",
        "The eye lens focuses light on the retina. The iris controls light entering through the pupil; the optic nerve carries signals to the brain."
      ],
      formulas: ["Angle of incidence = angle of reflection", "Plane mirror: object distance = image distance"],
      example: {
        question: "A student stands 2.5 m in front of a plane mirror. How far is the student from the image?",
        steps: [
          "The image forms 2.5 m behind the mirror.",
          "Distance from student to mirror = 2.5 m.",
          "Distance from mirror to image = 2.5 m.",
          "Total separation = 5.0 m."
        ],
        answer: "The student and image are 5 m apart."
      },
      checks: [
        ["Why are convex mirrors used as rear-view mirrors?", "They form erect, diminished images and show a wider field of view."],
        ["Can a virtual image be caught on a screen?", "No. The rays only appear to meet; they do not actually converge at the image position."],
        ["What changes when a plane mirror is moved 1 m toward a fixed object?", "The image moves 2 m closer to the object because both object-mirror and mirror-image distances change by 1 m."]
      ]
    },
    {
      title: "Describing Motion Around Us",
      level: "Class 9",
      summary: "Describe motion with distance, displacement, speed, velocity, acceleration and graphs.",
      concepts: [
        "Distance is total path length; displacement is the shortest directed change in position. Distance is never less than displacement magnitude.",
        "Speed is scalar; velocity includes direction. Average speed uses total distance, while average velocity uses displacement.",
        "Acceleration is the rate of change of velocity. It can result from a change in speed, direction or both.",
        "The slope of a distance-time graph gives speed. The slope of a velocity-time graph gives acceleration. The area under a velocity-time graph gives displacement.",
        "Uniform circular motion has constant speed but changing velocity because direction changes continuously."
      ],
      formulas: ["Speed = distance/time", "Velocity = displacement/time", "a = (v-u)/t", "v = u + at", "s = ut + 1/2 at^2", "v^2-u^2 = 2as"],
      example: {
        question: "A car starts at 10 m/s and accelerates uniformly at 2 m/s^2 for 5 s. Find final velocity and displacement.",
        steps: [
          "Final velocity: v = u + at = 10 + 2 x 5 = 20 m/s.",
          "Displacement: s = ut + 1/2 at^2.",
          "s = 10 x 5 + 1/2 x 2 x 5^2 = 50 + 25 = 75 m."
        ],
        answer: "Final velocity = 20 m/s; displacement = 75 m."
      },
      checks: [
        ["A runner completes one 400 m lap and stops at the start. Distance and displacement?", "Distance = 400 m; displacement = 0."],
        ["Can acceleration be non-zero when speed is constant?", "Yes. In circular motion, velocity direction changes, so acceleration is non-zero."],
        ["A velocity-time graph is horizontal above the time axis. What does it mean?", "Constant positive velocity and zero acceleration."]
      ]
    },
    {
      title: "How Forces Affect Motion",
      level: "Class 9",
      summary: "Apply Newton's laws, inertia, momentum and conservation of momentum.",
      concepts: [
        "A balanced force does not change the state of motion; an unbalanced force causes acceleration.",
        "Newton's first law explains inertia: an object resists changes in rest or uniform straight-line motion.",
        "Newton's second law connects force with rate of change of momentum. For constant mass, F = ma.",
        "Newton's third-law forces are equal and opposite, act simultaneously and act on different bodies.",
        "In an isolated system, total momentum before interaction equals total momentum after interaction.",
        "Increasing collision time reduces force for the same momentum change; this is why airbags and padded surfaces help."
      ],
      formulas: ["p = mv", "F = ma", "F = change in momentum/time", "m1u1 + m2u2 = m1v1 + m2v2"],
      example: {
        question: "A 2 kg trolley moving at 4 m/s collides and sticks to a 3 kg trolley at rest. Find their common velocity.",
        steps: [
          "Initial momentum = 2 x 4 + 3 x 0 = 8 kg m/s.",
          "Combined mass = 2 + 3 = 5 kg.",
          "By momentum conservation, 5v = 8.",
          "v = 1.6 m/s."
        ],
        answer: "The joined trolleys move at 1.6 m/s in the original direction."
      },
      checks: [
        ["Why does a passenger move forward when a bus stops suddenly?", "The body tends to continue moving because of inertia of motion."],
        ["Why does a gun recoil?", "The forward momentum of the bullet is balanced by equal backward momentum of the gun."],
        ["A 10 N force acts on 2 kg. Find acceleration.", "a = F/m = 10/2 = 5 m/s^2."]
      ]
    },
    {
      title: "Work and Energy",
      level: "Class 9",
      summary: "Calculate work, kinetic and potential energy, power and energy transformations.",
      concepts: [
        "Work is done only when a force causes displacement. Work is positive when force and displacement agree, negative when opposite and zero when perpendicular.",
        "Kinetic energy depends on mass and the square of speed; doubling speed makes kinetic energy four times.",
        "Gravitational potential energy depends on chosen reference level, mass, gravitational acceleration and height.",
        "Power measures how quickly work is done. Two machines may do the same work but have different power.",
        "Energy changes form, but total energy of an isolated system remains constant."
      ],
      formulas: ["W = Fs cos(theta)", "KE = 1/2 mv^2", "PE = mgh", "Power = Work/time", "1 W = 1 J/s"],
      example: {
        question: "A 5 kg object is lifted 4 m in 2 s. Take g = 10 m/s^2. Find work done and power.",
        steps: [
          "Work against gravity = mgh = 5 x 10 x 4 = 200 J.",
          "Power = work/time = 200/2.",
          "Power = 100 W."
        ],
        answer: "Work done = 200 J; power = 100 W."
      },
      checks: [
        ["A porter carries a load horizontally at constant height. Work by the upward support force?", "Zero, because support force is perpendicular to horizontal displacement."],
        ["If speed triples, how does kinetic energy change?", "It becomes 3^2 = 9 times."],
        ["What happens to PE as a falling object loses height?", "PE decreases and is mainly converted into KE, neglecting air resistance."]
      ]
    }
  ],
  Chemistry: [
    {
      title: "Particulate Nature of Matter",
      level: "Class 8 bridge",
      summary: "Explain states, diffusion, changes of state and latent heat using particles.",
      concepts: [
        "Matter is made of tiny particles with spaces between them. Particles move continuously and attract one another.",
        "Solids have closely packed particles vibrating about fixed positions; liquids flow; gases have large spaces and move freely.",
        "Diffusion is spontaneous intermixing of particles and is fastest in gases. Higher temperature increases particle kinetic energy and diffusion rate.",
        "Melting, freezing, boiling, condensation and sublimation are physical changes. During a state change, supplied heat changes particle arrangement rather than temperature.",
        "Evaporation occurs at the surface at all temperatures and causes cooling. It is faster with higher temperature, larger surface area, lower humidity and stronger wind."
      ],
      formulas: ["K = degree C + 273", "degree C = K - 273"],
      example: {
        question: "Why does 100 degree C steam cause more severe burns than 100 degree C water?",
        steps: [
          "Both begin at the same temperature.",
          "Steam condenses on skin.",
          "During condensation it releases latent heat in addition to cooling."
        ],
        answer: "Steam transfers extra latent heat, so it can cause more severe burns."
      },
      checks: [
        ["Why does perfume smell spread across a room?", "Gas particles diffuse through spaces between air particles."],
        ["Why does sweating cool the body?", "Higher-energy water particles evaporate, taking heat from the skin."],
        ["Convert 27 degree C to kelvin.", "27 + 273 = 300 K."]
      ]
    },
    {
      title: "Elements, Compounds and Mixtures",
      level: "Class 8 bridge",
      summary: "Classify substances by composition, properties and methods of separation.",
      concepts: [
        "An element contains one type of atom and cannot be broken into simpler substances by ordinary chemical methods.",
        "A compound contains elements chemically combined in a fixed mass ratio. Its properties differ from those of its constituent elements.",
        "A mixture has variable composition. Components retain many properties and can be separated physically.",
        "Homogeneous mixtures have uniform composition; heterogeneous mixtures do not.",
        "A physical change usually forms no new substance; a chemical change forms one or more new substances and often involves energy change."
      ],
      formulas: ["Compound: fixed composition", "Mixture: variable composition"],
      example: {
        question: "Iron powder and sulfur are mixed, then strongly heated to form iron sulfide. Compare before and after heating.",
        steps: [
          "Before heating, it is a mixture; iron can be removed with a magnet.",
          "After heating, a new compound forms in a fixed ratio.",
          "The product has new properties and cannot be separated with a magnet."
        ],
        answer: "Mixing is physical; formation of iron sulfide is a chemical change."
      },
      checks: [
        ["Is air an element, compound or mixture?", "A homogeneous mixture of gases with variable composition."],
        ["Why is water a compound rather than a mixture?", "Hydrogen and oxygen are chemically combined in a fixed ratio and water has new properties."],
        ["Classify soil.", "A heterogeneous mixture."]
      ]
    },
    {
      title: "Solutes, Solvents and Solutions",
      level: "Class 8 bridge",
      summary: "Work with solutions, concentration, saturation and solubility.",
      concepts: [
        "A solution is a homogeneous mixture. The solvent is generally the component in larger amount; the solute is dissolved in it.",
        "A saturated solution cannot dissolve more solute at a specified temperature. An unsaturated solution can.",
        "Solubility is the maximum solute that dissolves in a given solvent amount at a stated temperature.",
        "For many solids, solubility in water rises with temperature; gas solubility usually falls as temperature rises.",
        "Concentration describes how much solute is present relative to solution or solvent."
      ],
      formulas: ["Mass percent = mass of solute/mass of solution x 100", "Mass of solution = solute + solvent"],
      example: {
        question: "A solution contains 20 g salt and 180 g water. Find mass percent of salt.",
        steps: [
          "Mass of solution = 20 + 180 = 200 g.",
          "Mass percent = 20/200 x 100.",
          "Mass percent = 10%."
        ],
        answer: "The solution is 10% salt by mass."
      },
      checks: [
        ["Why do cold soft drinks retain more dissolved carbon dioxide?", "Gases are generally more soluble at lower temperatures."],
        ["Can a saturated solution dissolve more solute after heating?", "Often yes for solid solutes because solubility usually increases with temperature."],
        ["In salt water, identify solute and solvent.", "Salt is the solute; water is the solvent."]
      ]
    },
    {
      title: "Mixtures and Their Separation",
      level: "Class 9",
      summary: "Select separation methods from particle size, solubility, density, magnetism and boiling point.",
      concepts: [
        "Handpicking, sieving and winnowing separate solids using visible size or density differences.",
        "Filtration separates an insoluble solid from a liquid; centrifugation speeds separation of fine suspended particles.",
        "Evaporation recovers a dissolved solid, while crystallisation produces purer crystals and avoids strong heating.",
        "A separating funnel separates immiscible liquids by density. Distillation separates a solvent or miscible liquids with suitable boiling-point differences.",
        "Sublimation separates a sublimable solid. Chromatography separates soluble components that move at different rates."
      ],
      formulas: ["Method choice = property difference + desired product"],
      example: {
        question: "Design steps to separate iron filings, sand and common salt.",
        steps: [
          "Use a magnet to remove iron filings.",
          "Add water to dissolve salt; sand remains insoluble.",
          "Filter to collect sand as residue.",
          "Evaporate or crystallise the filtrate to recover salt."
        ],
        answer: "Magnetic separation, dissolution, filtration and crystallisation are used in sequence."
      },
      checks: [
        ["How would you separate kerosene and water?", "Use a separating funnel because they are immiscible and have different densities."],
        ["Why is crystallisation better than complete evaporation for some solids?", "It gives purer crystals and prevents decomposition by excessive heating."],
        ["How can dyes in ink be separated?", "Paper chromatography."]
      ]
    },
    {
      title: "Journey Inside the Atom",
      level: "Class 9",
      summary: "Use atomic structure, electronic configuration, valency, ions and isotopes.",
      concepts: [
        "Protons are positive and neutrons neutral in the nucleus; electrons are negative and occupy shells.",
        "Atomic number Z equals protons. In a neutral atom, electrons equal protons. Mass number A equals protons plus neutrons.",
        "For the first 18 elements, shells are commonly filled 2, 8, 8. The outermost electrons influence valency.",
        "Atoms form ions by losing or gaining electrons. Metals often form positive ions; non-metals often form negative ions.",
        "Isotopes have the same atomic number but different mass numbers. Isobars have the same mass number but different atomic numbers."
      ],
      formulas: ["Z = protons", "A = protons + neutrons", "neutrons = A-Z", "neutral atom: electrons = protons"],
      example: {
        question: "An atom has atomic number 17 and mass number 35. Find protons, electrons, neutrons, configuration and valency.",
        steps: [
          "Protons = Z = 17.",
          "Neutral atom, so electrons = 17.",
          "Neutrons = A-Z = 35-17 = 18.",
          "Electronic configuration = 2, 8, 7.",
          "It needs one electron to complete the outer shell, so valency = 1."
        ],
        answer: "17 p, 17 e, 18 n; configuration 2,8,7; valency 1."
      },
      checks: [
        ["What does Na+ indicate?", "A sodium atom has lost one electron and formed a +1 ion."],
        ["Why do isotopes show similar chemical properties?", "They have the same atomic number and electronic configuration."],
        ["For A = 23 and Z = 11, find neutrons.", "23-11 = 12 neutrons."]
      ]
    }
  ],
  Biology: [
    {
      title: "Health: The Ultimate Treasure",
      level: "NCERT aligned",
      summary: "Connect health, disease causes, transmission, prevention, immunity and public health.",
      concepts: [
        "Health is physical, mental and social well-being, not merely absence of disease.",
        "Disease may be acute or chronic, infectious or non-infectious. Infectious agents include viruses, bacteria, fungi, protozoa and worms.",
        "Transmission can occur through air, water, food, vectors, contact or body fluids. Prevention must break the relevant route.",
        "Vaccination prepares immune memory. Antibiotics act against bacteria, not viruses, and misuse encourages resistance.",
        "Clean water, sanitation, nutrition, exercise, sleep and community disease control are as important as individual treatment."
      ],
      formulas: ["Prevention = remove source + block transmission + strengthen host"],
      example: {
        question: "A town reports diarrhoeal disease after flooding. Suggest a multi-step response.",
        steps: [
          "Provide boiled or treated drinking water and oral rehydration.",
          "Repair sewage contamination and improve waste disposal.",
          "Promote handwashing and safe food handling.",
          "Identify cases quickly and monitor the water source."
        ],
        answer: "Control both immediate dehydration and the contaminated-water transmission route."
      },
      checks: [
        ["Why do antibiotics not cure influenza?", "Influenza is viral; antibiotics target bacterial structures or processes."],
        ["Why can chronic disease affect learning?", "Long duration, weakness and repeated absence reduce physical and mental performance."],
        ["Give one individual and one community prevention measure.", "Example: handwashing; safe municipal water supply."]
      ]
    },
    {
      title: "How Nature Works in Harmony",
      level: "NCERT aligned",
      summary: "Study ecosystems, food chains, energy flow, cycles and ecological balance.",
      concepts: [
        "An ecosystem contains biotic components and abiotic factors such as light, water, air, soil and temperature.",
        "Producers capture solar energy; consumers transfer it through feeding; decomposers return nutrients to the environment.",
        "Food chains interconnect as food webs, making ecosystems more stable than a single chain.",
        "Energy flow is one-way and decreases at higher trophic levels, while matter is recycled through biogeochemical cycles.",
        "Removing one population can cause cascading effects through competition, predation and resource availability."
      ],
      formulas: ["Producer -> primary consumer -> secondary consumer", "Energy available decreases at each trophic level"],
      example: {
        question: "Grass -> grasshopper -> frog -> snake. Predict effects of a sharp fall in frogs.",
        steps: [
          "Grasshopper predation decreases, so grasshopper numbers may rise.",
          "More grasshoppers consume more grass.",
          "Snakes lose an important food source and may decline or switch prey."
        ],
        answer: "A change at one trophic level can affect levels above and below it."
      },
      checks: [
        ["Why are decomposers essential?", "They recycle nutrients and prevent dead matter from accumulating."],
        ["Why are food webs more stable than single chains?", "Organisms may use alternative food sources if one link declines."],
        ["Is energy recycled in an ecosystem?", "No. It flows through and is eventually dissipated as heat."]
      ]
    },
    {
      title: "Earth: A Life-Sustaining Planet",
      level: "NCERT aligned",
      summary: "Understand atmosphere, water, soil, cycles, pollution and conditions supporting life.",
      concepts: [
        "Earth supports life through liquid water, suitable temperature, atmosphere, sunlight and nutrient cycles.",
        "The atmosphere moderates temperature, supplies gases and protects from harmful radiation and many meteoroids.",
        "Water cycles through evaporation, condensation, precipitation, runoff and groundwater.",
        "Soil forms slowly through weathering and biological activity. Topsoil supports most terrestrial food production.",
        "The ozone layer absorbs much ultraviolet radiation; greenhouse gases warm Earth, but excess emissions disturb climate.",
        "Conservation requires reducing pollution, protecting habitats and using water, soil and energy responsibly."
      ],
      formulas: ["Water cycle: evaporation -> condensation -> precipitation -> collection"],
      example: {
        question: "Explain why large-scale removal of vegetation can reduce local water availability.",
        steps: [
          "Transpiration and moisture recycling decrease.",
          "Runoff rises and infiltration into soil falls.",
          "Soil erosion increases and groundwater recharge declines."
        ],
        answer: "Vegetation supports rainfall recycling, infiltration and soil water storage."
      },
      checks: [
        ["Why is the atmosphere important for temperature?", "It reduces extreme day-night changes and retains some outgoing heat."],
        ["How does ozone differ from greenhouse gases in role?", "Stratospheric ozone blocks UV; greenhouse gases absorb outgoing infrared radiation."],
        ["Why is topsoil precious?", "It is nutrient-rich, supports roots and forms very slowly."]
      ]
    },
    {
      title: "Cell",
      level: "Class 9",
      summary: "Relate cell structures to functions, transport and differences between cell types.",
      concepts: [
        "The cell is the structural and functional unit of life. Organisms may be unicellular or multicellular.",
        "The plasma membrane is selectively permeable. Diffusion moves particles down a concentration gradient; osmosis is water movement through a selectively permeable membrane.",
        "The nucleus contains genetic material and controls cell activities. Ribosomes make proteins; mitochondria release usable energy.",
        "Endoplasmic reticulum helps synthesis and transport; Golgi apparatus modifies and packages; lysosomes digest materials.",
        "Plant cells have a cellulose wall, plastids and usually a large central vacuole. Prokaryotes lack a true membrane-bound nucleus."
      ],
      formulas: ["Hypotonic: water enters cell", "Hypertonic: water leaves cell", "Isotonic: no net water movement"],
      example: {
        question: "A plant cell is placed first in pure water and then in concentrated salt solution. Predict changes.",
        steps: [
          "Pure water is hypotonic, so water enters by osmosis and the cell becomes turgid; the wall prevents bursting.",
          "Salt solution is hypertonic, so water leaves.",
          "The cell membrane may pull away from the wall: plasmolysis."
        ],
        answer: "The cell changes from turgid to plasmolysed because the direction of osmosis reverses."
      },
      checks: [
        ["Why are mitochondria numerous in muscle cells?", "Muscle contraction needs large amounts of ATP."],
        ["Why do plant cells not burst easily in pure water?", "The rigid cell wall resists expansion and develops turgor pressure."],
        ["Which organelle packages secretions?", "Golgi apparatus."]
      ]
    },
    {
      title: "Tissues in Action",
      level: "Class 9",
      summary: "Compare plant and animal tissues through structure, location and function.",
      concepts: [
        "Meristematic cells divide actively. Apical meristem increases length; lateral meristem increases girth.",
        "Parenchyma stores and may photosynthesise; collenchyma gives flexible support; sclerenchyma gives rigid strength.",
        "Xylem transports water and minerals; phloem transports food. These complex tissues contain several cell types.",
        "Epithelial tissue covers surfaces. Connective tissue supports and links. Muscular tissue contracts. Nervous tissue carries impulses.",
        "Structure matches function: thin squamous epithelium allows diffusion, long neurons transmit signals and striated muscle supports rapid voluntary movement."
      ],
      formulas: ["Xylem: water/minerals", "Phloem: food", "Tendon: muscle to bone", "Ligament: bone to bone"],
      example: {
        question: "A plant stem bends in wind without breaking. Which tissue helps, and why?",
        steps: [
          "Young stems and leaf stalks need support with flexibility.",
          "Collenchyma cells have unevenly thickened corners.",
          "They strengthen the organ while allowing bending."
        ],
        answer: "Collenchyma provides flexible mechanical support."
      },
      checks: [
        ["Why is blood called connective tissue?", "Its fluid matrix transports substances and links body systems."],
        ["Which tissue lines lung air sacs?", "Thin squamous epithelium, allowing rapid gas diffusion."],
        ["Differentiate tendon and ligament.", "Tendon joins muscle to bone; ligament joins bone to bone."]
      ]
    }
  ],
  Mathematics: [
    {
      title: "Coordinates",
      level: "Class 9",
      summary: "Locate points, identify quadrants and reason about simple coordinate distances.",
      concepts: [
        "The horizontal x-axis and vertical y-axis meet at origin (0,0). A point is written (x,y), never reversed.",
        "Quadrants: I (+,+), II (-,+), III (-,-), IV (+,-). Points on axes belong to no quadrant.",
        "On the x-axis y = 0; on the y-axis x = 0.",
        "For points on the same horizontal or vertical line, distance is the absolute difference of changing coordinates."
      ],
      formulas: ["Horizontal distance = |x2-x1|", "Vertical distance = |y2-y1|"],
      example: {
        question: "A(-3,4), B(5,4) and C(5,-2). Find AB and BC.",
        steps: [
          "A and B have the same y-coordinate, so AB = |5-(-3)| = 8.",
          "B and C have the same x-coordinate, so BC = |-2-4| = 6."
        ],
        answer: "AB = 8 units and BC = 6 units."
      },
      checks: [
        ["Where is (-4,-7)?", "Quadrant III."],
        ["A point lies on the positive y-axis. What is known?", "x = 0 and y > 0."],
        ["Reflect (3,-2) across the y-axis.", "(-3,-2)."]
      ]
    },
    {
      title: "Linear Polynomials",
      level: "Class 9",
      summary: "Recognise polynomials, use zeros and apply the factor theorem.",
      concepts: [
        "A polynomial uses non-negative integer powers of variables. A linear polynomial has degree 1.",
        "A zero of p(x) is a value k for which p(k)=0.",
        "For ax+b, a non-zero a, the zero is -b/a.",
        "The factor theorem states that (x-k) is a factor of p(x) exactly when p(k)=0."
      ],
      formulas: ["Zero of ax+b = -b/a", "p(k)=0 <=> (x-k) is a factor"],
      example: {
        question: "Find k if (x-2) is a factor of p(x)=x^2+kx-6.",
        steps: [
          "By factor theorem, p(2)=0.",
          "2^2 + 2k - 6 = 0.",
          "4 + 2k - 6 = 0, so 2k = 2.",
          "k = 1."
        ],
        answer: "k = 1."
      },
      checks: [
        ["Is 1/x + 2 a polynomial?", "No, because x has exponent -1."],
        ["Find the zero of 3x-12.", "x = 4."],
        ["If p(5)=0, name a factor.", "(x-5)."]
      ]
    },
    {
      title: "The World of Numbers",
      level: "Class 9",
      summary: "Classify real numbers and work with rational and irrational forms.",
      concepts: [
        "Natural, whole and integer sets are nested inside rational numbers. Rational numbers have form p/q, q non-zero.",
        "Irrational numbers cannot be expressed as p/q and have non-terminating, non-repeating decimal expansions.",
        "Real numbers include rational and irrational numbers and can be represented on a number line.",
        "A rational number in lowest form has a terminating decimal only when the denominator has prime factors 2 and/or 5.",
        "Use rationalisation to remove a surd from a denominator when required."
      ],
      formulas: ["Rational + rational = rational", "Non-zero rational x irrational = irrational", "(a+b)(a-b)=a^2-b^2"],
      example: {
        question: "Without division, decide whether 13/160 has a terminating decimal and state the number of decimal places.",
        steps: [
          "160 = 2^5 x 5.",
          "Only factors 2 and 5 occur, so the decimal terminates.",
          "Make powers equal: denominator divides 10^5, so at most 5 decimal places."
        ],
        answer: "It terminates; it can be written within 5 decimal places."
      },
      checks: [
        ["Is sqrt(49) irrational?", "No. sqrt(49)=7, which is rational."],
        ["Classify 0.1010010001...", "Irrational because it is non-terminating and non-repeating."],
        ["Rationalise 1/sqrt(3).", "sqrt(3)/3."]
      ]
    },
    {
      title: "Algebraic Identities",
      level: "Classes 8-9",
      summary: "Expand, factorise and calculate quickly using standard identities.",
      concepts: [
        "An identity is true for all permitted variable values, unlike an equation true only for selected values.",
        "Choose an identity by recognising sum, difference, square or product structure.",
        "Identities support mental calculation, expansion and factorisation.",
        "Always retain the middle term 2ab in square identities."
      ],
      formulas: ["(a+b)^2 = a^2+2ab+b^2", "(a-b)^2 = a^2-2ab+b^2", "a^2-b^2 = (a-b)(a+b)", "(x+a)(x+b)=x^2+(a+b)x+ab"],
      example: {
        question: "Calculate 103^2 without long multiplication.",
        steps: [
          "Write 103 = 100+3.",
          "(100+3)^2 = 100^2 + 2 x 100 x 3 + 3^2.",
          "10,000 + 600 + 9 = 10,609."
        ],
        answer: "103^2 = 10,609."
      },
      checks: [
        ["Factorise x^2-81.", "(x-9)(x+9)."],
        ["Expand (2x-3)^2.", "4x^2-12x+9."],
        ["Find 98 x 102 quickly.", "(100-2)(100+2)=10000-4=9996."]
      ]
    },
    {
      title: "Exponents and Powers",
      level: "Classes 8-9",
      summary: "Simplify powers, negative exponents and scientific notation.",
      concepts: [
        "When multiplying same bases, add exponents; when dividing, subtract exponents.",
        "A power raised to a power multiplies exponents. A product raised to a power applies the exponent to every factor.",
        "For non-zero a, a^0=1 and a^-n=1/a^n.",
        "Scientific notation writes a number as m x 10^n where 1 <= m < 10."
      ],
      formulas: ["a^m a^n=a^(m+n)", "a^m/a^n=a^(m-n)", "(a^m)^n=a^(mn)", "a^-n=1/a^n"],
      example: {
        question: "Simplify (3^4 x 3^-2)/3 and write with a positive exponent.",
        steps: [
          "Combine powers in numerator: 3^(4-2)=3^2.",
          "Divide by 3^1: 3^(2-1)=3^1."
        ],
        answer: "3."
      },
      checks: [
        ["Simplify 2^5 x 2^3.", "2^8 = 256."],
        ["Write 0.00072 in scientific notation.", "7.2 x 10^-4."],
        ["Evaluate 5^0.", "1."]
      ]
    },
    {
      title: "Perimeter and Area",
      level: "Classes 8-9",
      summary: "Select formulas, convert units and solve composite-shape problems.",
      concepts: [
        "Perimeter measures boundary length; area measures covered surface. Their units are linear and square units respectively.",
        "Break a composite figure into known shapes or subtract missing regions.",
        "Use perpendicular height, not slant side, for triangle and parallelogram area.",
        "Convert all measurements to the same unit before calculating."
      ],
      formulas: ["Rectangle: A=lb, P=2(l+b)", "Triangle: A=1/2 bh", "Parallelogram: A=bh", "Circle: A=pi r^2, C=2pi r", "Trapezium: A=1/2(a+b)h"],
      example: {
        question: "A 20 m by 14 m rectangular garden has a 2 m wide path inside along all edges. Find path area.",
        steps: [
          "Outer area = 20 x 14 = 280 m^2.",
          "Inner dimensions = (20-4) by (14-4) = 16 by 10.",
          "Inner area = 160 m^2.",
          "Path area = 280-160 = 120 m^2."
        ],
        answer: "The path covers 120 m^2."
      },
      checks: [
        ["Why subtract 4 m from each dimension for a 2 m inner path?", "The path occupies 2 m on both opposite sides."],
        ["Area of triangle, b=12 cm, h=7 cm?", "42 cm^2."],
        ["Circumference for r=7 cm, pi=22/7?", "44 cm."]
      ]
    },
    {
      title: "Probability",
      level: "Class 9",
      summary: "Describe experiments, outcomes and probabilities for equally likely cases.",
      concepts: [
        "A random experiment has known possible outcomes but an uncertain individual result.",
        "The sample space lists all possible outcomes. An event is a selection of outcomes.",
        "For equally likely outcomes, probability is favourable outcomes divided by total outcomes.",
        "Probability ranges from 0 to 1. Impossible events have probability 0 and certain events probability 1.",
        "Experimental probability approaches theoretical probability over many trials but may differ in a small sample."
      ],
      formulas: ["P(E)=favourable outcomes/total outcomes", "P(not E)=1-P(E)"],
      example: {
        question: "Two coins are tossed. Find the probability of exactly one head.",
        steps: [
          "Sample space: HH, HT, TH, TT.",
          "Exactly one head occurs in HT and TH.",
          "Probability = 2/4 = 1/2."
        ],
        answer: "P(exactly one head)=1/2."
      },
      checks: [
        ["Probability of rolling a number greater than 4 on a fair die?", "2/6 = 1/3."],
        ["If P(rain)=0.3, find P(no rain).", "0.7."],
        ["Can probability be 1.2?", "No. Probability must lie from 0 to 1."]
      ]
    },
    {
      title: "Class 8 Mixed Mathematics",
      level: "Class 8 revision",
      summary: "Revise fractions, proportion, algebra, powers, quadrilaterals and area in mixed problems.",
      concepts: [
        "For fractions, use a common denominator for addition and subtraction; multiply by the reciprocal when dividing.",
        "In direct proportion, both quantities change in the same ratio. In inverse proportion, their product remains constant.",
        "Translate words into algebra before solving and check the result in the original statement.",
        "A quadrilateral's interior angles total 360 degrees. Use parallel-line and angle properties for special quadrilaterals.",
        "Percentage change = change/original x 100; distinguish percentage points from percent change."
      ],
      formulas: ["Direct: y/x=k", "Inverse: xy=k", "Quadrilateral angle sum=360 degrees", "Percent change=change/original x 100"],
      example: {
        question: "Eight workers finish a job in 15 days at the same rate. How many days for 12 workers?",
        steps: [
          "Workers and days are inversely proportional.",
          "8 x 15 = 12 x d.",
          "d = 120/12 = 10."
        ],
        answer: "12 workers need 10 days."
      },
      checks: [
        ["Solve 3/4 of x = 18.", "x = 18 x 4/3 = 24."],
        ["Three angles of a quadrilateral are 80, 95 and 110 degrees. Fourth?", "360-285=75 degrees."],
        ["Price rises from 200 to 250. Percent increase?", "50/200 x 100 = 25%."]
      ]
    }
  ],
  "Mental Ability": [
    {
      title: "Alphabet, Coding, Series and Missing Characters",
      level: "Reasoning",
      summary: "Detect consistent letter and number rules quickly and verify them against every term.",
      concepts: [
        "Write A=1 to Z=26 when positions matter. Check forward/backward shifts, opposite letters and alternating operations.",
        "For number series, test differences, second differences, ratios, squares, cubes and interleaved patterns.",
        "For coding, compare every letter or word, not only the first pair. Reject a rule that fails any example.",
        "Missing-character grids often use row-wise or column-wise arithmetic with letter positions."
      ],
      formulas: ["Opposite letter positions sum to 27", "Nth square=n^2", "Nth cube=n^3"],
      example: {
        question: "Find the next letter: A, C, F, J, O, ?",
        steps: [
          "Letter jumps are +2, +3, +4, +5.",
          "Next jump is +6.",
          "O + 6 = U."
        ],
        answer: "U."
      },
      checks: [
        ["Next number: 2, 6, 12, 20, 30, ?", "42; terms follow n(n+1)."],
        ["If CAT becomes DBU, DOG becomes?", "EPH; each letter moves forward once."],
        ["Opposite letter of D?", "W, because positions 4 and 23 sum to 27."]
      ]
    },
    {
      title: "Blood Relations, Directions, Ranking and Sequence",
      level: "Reasoning",
      summary: "Convert verbal clues into diagrams, coordinates and rank equations.",
      concepts: [
        "For blood relations, draw generations on separate levels and mark gender only when stated.",
        "For directions, use coordinates: north +y, south -y, east +x and west -x.",
        "Total people = rank from top + rank from bottom - 1.",
        "In sequence problems, distinguish immediate neighbour, somewhere before/after and fixed position."
      ],
      formulas: ["Total=top rank+bottom rank-1", "Final displacement=sqrt(x^2+y^2)"],
      example: {
        question: "A person walks 6 m east, 8 m north, then 6 m west. Find final distance and direction from start.",
        steps: [
          "East and west movements cancel.",
          "Only 8 m north remains."
        ],
        answer: "8 m north of the starting point."
      },
      checks: [
        ["12th from top and 9th from bottom: total?", "12+9-1=20."],
        ["P is Q's sister; Q is R's father. P is R's?", "Aunt."],
        ["Facing north, turn right, right, then left. Final direction?", "East."]
      ]
    },
    {
      title: "Mathematical Operations and Puzzles",
      level: "Reasoning",
      summary: "Translate symbol rules exactly and organise multi-clue puzzles without guessing.",
      concepts: [
        "When operators are redefined, replace symbols first and then apply normal order of operations.",
        "In puzzles, build a table of people versus attributes and mark confirmed, impossible and unresolved cells.",
        "Start with the strongest clues: fixed positions, direct equalities and unique conditions.",
        "Check the completed arrangement against every clue before selecting an answer."
      ],
      formulas: ["Replace symbols -> apply BODMAS", "One clue must not contradict another"],
      example: {
        question: "If + means multiplication and x means subtraction, evaluate 8 + 3 x 2.",
        steps: [
          "Replace symbols: 8 x 3 - 2.",
          "Apply normal operations: 24-2."
        ],
        answer: "22."
      },
      checks: [
        ["If a*b=a+b^2, find 3*4.", "3+16=19."],
        ["Why should puzzle options be checked after solving?", "An overlooked clue may invalidate an apparently complete arrangement."],
        ["What is the first step in a scheduling puzzle?", "Create slots and place fixed-time clues."]
      ]
    },
    {
      title: "Dice, Cubes, Images and Figure Counting",
      level: "Spatial reasoning",
      summary: "Use invariants and systematic counting for spatial questions.",
      concepts: [
        "On a standard cube net, faces sharing an edge are adjacent; opposite faces never meet along an edge.",
        "For a painted cube cut into n^3 pieces: corners have 3 painted faces, non-corner edge cubes have 2, face-interior cubes have 1 and internal cubes have 0.",
        "A vertical mirror reverses left-right; a water image reverses top-bottom.",
        "Count figures from smallest to largest and record each size to avoid double counting.",
        "For embedded figures, trace direction changes and relative lengths rather than relying on visual rotation alone."
      ],
      formulas: ["3 painted faces=8", "2 painted faces=12(n-2)", "1 painted face=6(n-2)^2", "0 painted faces=(n-2)^3"],
      example: {
        question: "A cube painted on all faces is cut into 4 x 4 x 4 small cubes. How many have exactly two painted faces?",
        steps: [
          "Exactly two painted faces occur on edges, excluding corners.",
          "There are 12 edges.",
          "Each edge contributes n-2 = 2 cubes.",
          "12 x 2 = 24."
        ],
        answer: "24 small cubes."
      },
      checks: [
        ["For a 3 x 3 x 3 painted cube, cubes with no paint?", "(3-2)^3=1."],
        ["What changes in a water image?", "Top and bottom reverse; left and right remain in place."],
        ["Why count composite figures after small figures?", "It prevents missing larger shapes formed by combining smaller ones."]
      ]
    },
    {
      title: "Venn Diagrams and Sitting Arrangement",
      level: "Reasoning",
      summary: "Translate category relationships and positional clues into clear diagrams.",
      concepts: [
        "Use one circle inside another for a subset, overlapping circles for partial common membership and separate circles for mutually exclusive sets.",
        "Do not assume 'some' means 'all' or that a relationship reverses.",
        "In linear seating, define whose left/right is used. In circular seating, inward-facing and outward-facing people reverse left/right.",
        "Place fixed and immediate-neighbour clues first, then relative-position clues."
      ],
      formulas: ["Subset: all A are B", "Overlap: some A are B", "Disjoint: no A is B"],
      example: {
        question: "Represent women, mothers and doctors.",
        steps: [
          "All mothers are women, so the mothers circle lies inside women.",
          "Some doctors may be women or mothers, so the doctors circle overlaps the women circle.",
          "Do not place all doctors inside women unless stated."
        ],
        answer: "Mothers are a subset of women; doctors partially overlap women."
      },
      checks: [
        ["A is immediately left of B and C immediately right of B. Order?", "A-B-C."],
        ["All roses are flowers; some flowers are red. Must some roses be red?", "No. The statements do not force that conclusion."],
        ["Facing the centre in a circle, where is a person's left?", "Clockwise from that person."]
      ]
    }
  ]
};
