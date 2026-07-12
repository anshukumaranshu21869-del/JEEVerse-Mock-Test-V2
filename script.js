"use strict";

/* =========================================================
   JEEVERSE MOCK TEST V2
   COMPLETE EXAM ENGINE
========================================================= */

const EXAM_DURATION_SECONDS = 3 * 60 * 60;
const QUESTIONS_PER_SUBJECT = 25;
const MARKS_CORRECT = 4;
const MARKS_WRONG_MCQ = -1;
const MARKS_WRONG_NUMERICAL = 0;

const SUBJECTS = ["Physics", "Chemistry", "Mathematics"];

/* =========================================================
   QUESTION BANK — 75 QUESTIONS
   answer = MCQ option index starting from 0
========================================================= */

const questions = [
  /* ========================= PHYSICS ========================= */

  {
    id: "P01",
    subject: "Physics",
    chapter: "Units and Dimensions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The dimensional formula of Planck's constant is:",
    options: ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "M⁰L²T⁻¹"],
    answer: 0,
    explanation:
      "Planck's constant has dimensions of energy × time = ML²T⁻² × T = ML²T⁻¹."
  },
  {
    id: "P02",
    subject: "Physics",
    chapter: "Kinematics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "A particle starts from rest with constant acceleration 2 m/s². The distance travelled in 3 seconds is:",
    options: ["3 m", "6 m", "9 m", "12 m"],
    answer: 2,
    explanation: "s = ut + ½at² = 0 + ½ × 2 × 3² = 9 m."
  },
  {
    id: "P03",
    subject: "Physics",
    chapter: "Laws of Motion",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "A force of 10 N acts on a body of mass 2 kg. Its acceleration is:",
    options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
    answer: 1,
    explanation: "Using F = ma, a = 10/2 = 5 m/s²."
  },
  {
    id: "P04",
    subject: "Physics",
    chapter: "Work, Energy and Power",
    difficulty: "Easy",
    type: "Numerical Value",
    question:
      "A body of mass 2 kg has kinetic energy 100 J. Enter its speed in m/s.",
    answer: "10",
    explanation: "½mv² = 100 gives v² = 100 and v = 10 m/s."
  },
  {
    id: "P05",
    subject: "Physics",
    chapter: "Rotational Motion",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The moment of inertia of a thin ring about an axis passing through its centre and perpendicular to its plane is:",
    options: ["MR²", "½MR²", "⅔MR²", "¼MR²"],
    answer: 0,
    explanation: "For a thin ring about its central perpendicular axis, I = MR²."
  },
  {
    id: "P06",
    subject: "Physics",
    chapter: "Gravitation",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The value of acceleration due to gravity at the centre of the Earth is:",
    options: ["g", "g/2", "2g", "Zero"],
    answer: 3,
    explanation:
      "At the centre, gravitational attraction from all directions cancels."
  },
  {
    id: "P07",
    subject: "Physics",
    chapter: "Properties of Matter",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The SI unit of surface tension is:",
    options: ["N m", "N/m", "J/m", "Pa m²"],
    answer: 1,
    explanation: "Surface tension is force per unit length, so its unit is N/m."
  },
  {
    id: "P08",
    subject: "Physics",
    chapter: "Thermodynamics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "For an isochoric process, the work done by an ideal gas is:",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    answer: 2,
    explanation: "W = ∫P dV. Since volume is constant, dV = 0."
  },
  {
    id: "P09",
    subject: "Physics",
    chapter: "Kinetic Theory",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The RMS speed of gas molecules is proportional to:",
    options: ["T", "√T", "1/T", "1/√T"],
    answer: 1,
    explanation: "vᵣₘₛ = √(3RT/M), so it is proportional to √T."
  },
  {
    id: "P10",
    subject: "Physics",
    chapter: "Oscillations",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The time period of a simple pendulum is proportional to:",
    options: ["√l", "l", "1/l", "l²"],
    answer: 0,
    explanation: "T = 2π√(l/g)."
  },
  {
    id: "P11",
    subject: "Physics",
    chapter: "Waves",
    difficulty: "Easy",
    type: "Numerical Value",
    question:
      "A wave has frequency 50 Hz and wavelength 2 m. Enter its speed in m/s.",
    answer: "100",
    explanation: "Wave speed v = fλ = 50 × 2 = 100 m/s."
  },
  {
    id: "P12",
    subject: "Physics",
    chapter: "Electrostatics",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The electric field inside a conductor in electrostatic equilibrium is:",
    options: ["Maximum", "Zero", "Infinite", "Shape dependent"],
    answer: 1,
    explanation:
      "Free charges rearrange until the net electric field inside becomes zero."
  },
  {
    id: "P13",
    subject: "Physics",
    chapter: "Capacitance",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Two capacitors of 3 μF and 6 μF are connected in parallel. Their equivalent capacitance is:",
    options: ["2 μF", "3 μF", "6 μF", "9 μF"],
    answer: 3,
    explanation: "For parallel capacitors, C = C₁ + C₂ = 9 μF."
  },
  {
    id: "P14",
    subject: "Physics",
    chapter: "Current Electricity",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Two resistors of 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",
    options: ["1 Ω", "2 Ω", "3 Ω", "9 Ω"],
    answer: 1,
    explanation: "R = (6 × 3)/(6 + 3) = 2 Ω."
  },
  {
    id: "P15",
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "A charged particle moving parallel to a uniform magnetic field experiences:",
    options: [
      "Maximum force",
      "Minimum non-zero force",
      "Zero force",
      "A force opposite to velocity"
    ],
    answer: 2,
    explanation: "F = qvB sinθ. For θ = 0°, force is zero."
  },
  {
    id: "P16",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "Lenz's law is a consequence of conservation of:",
    options: ["Charge", "Energy", "Momentum", "Mass"],
    answer: 1,
    explanation:
      "The induced current opposes the change causing it, ensuring energy conservation."
  },
  {
    id: "P17",
    subject: "Physics",
    chapter: "Alternating Current",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The RMS value of an alternating voltage with peak value V₀ is:",
    options: ["V₀", "V₀/2", "V₀/√2", "√2V₀"],
    answer: 2,
    explanation: "For sinusoidal AC, Vᵣₘₛ = V₀/√2."
  },
  {
    id: "P18",
    subject: "Physics",
    chapter: "Electromagnetic Waves",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Which electromagnetic radiation has the highest frequency?",
    options: ["Radio waves", "Microwaves", "Visible light", "Gamma rays"],
    answer: 3,
    explanation: "Gamma rays have the highest frequency in the EM spectrum."
  },
  {
    id: "P19",
    subject: "Physics",
    chapter: "Ray Optics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The power of a convex lens of focal length 50 cm is:",
    options: ["+1 D", "+2 D", "-1 D", "-2 D"],
    answer: 1,
    explanation: "P = 1/f(m) = 1/0.5 = +2 D."
  },
  {
    id: "P20",
    subject: "Physics",
    chapter: "Wave Optics",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "In Young's double-slit experiment, fringe width is proportional to:",
    options: ["Slit separation", "1/wavelength", "Screen distance", "1/screen distance"],
    answer: 2,
    explanation: "Fringe width β = λD/d."
  },
  {
    id: "P21",
    subject: "Physics",
    chapter: "Dual Nature",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The de Broglie wavelength of a particle is inversely proportional to its:",
    options: ["Mass only", "Velocity only", "Momentum", "Kinetic energy directly"],
    answer: 2,
    explanation: "λ = h/p."
  },
  {
    id: "P22",
    subject: "Physics",
    chapter: "Atoms",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "According to Bohr's model, the angular momentum of an electron is:",
    options: ["Continuous", "Quantised", "Always zero", "Independent of orbit"],
    answer: 1,
    explanation: "Angular momentum is quantised as mvr = nh/2π."
  },
  {
    id: "P23",
    subject: "Physics",
    chapter: "Nuclei",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The number of neutrons in ²³₁₁Na is:",
    options: ["11", "12", "23", "34"],
    answer: 1,
    explanation: "Neutrons = mass number − atomic number = 23 − 11 = 12."
  },
  {
    id: "P24",
    subject: "Physics",
    chapter: "Semiconductors",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "In an intrinsic semiconductor, the number of electrons is:",
    options: [
      "Greater than holes",
      "Less than holes",
      "Equal to holes",
      "Always zero"
    ],
    answer: 2,
    explanation:
      "In an intrinsic semiconductor, electron and hole concentrations are equal."
  },
  {
    id: "P25",
    subject: "Physics",
    chapter: "Experimental Physics",
    difficulty: "Medium",
    type: "Numerical Value",
    question:
      "A vernier calliper has 10 vernier divisions equal to 9 main-scale divisions. If one main-scale division is 1 mm, enter the least count in mm.",
    answer: "0.1",
    tolerance: 0.001,
    explanation: "Least count = 1 MSD − 1 VSD = 1 − 0.9 = 0.1 mm."
  },

  /* ======================== CHEMISTRY ======================== */

  {
    id: "C01",
    subject: "Chemistry",
    chapter: "Some Basic Concepts",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The number of particles present in one mole of a substance is:",
    options: ["6.022 × 10²³", "3.011 × 10²³", "9.8 × 10²³", "1.0 × 10²³"],
    answer: 0,
    explanation: "One mole contains Avogadro's number, 6.022 × 10²³ particles."
  },
  {
    id: "C02",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The maximum number of electrons in the n = 3 shell is:",
    options: ["8", "18", "32", "9"],
    answer: 1,
    explanation: "Maximum electrons = 2n² = 2 × 3² = 18."
  },
  {
    id: "C03",
    subject: "Chemistry",
    chapter: "Periodic Table",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Across a period, atomic radius generally:",
    options: ["Increases", "Decreases", "Remains constant", "First decreases then increases"],
    answer: 1,
    explanation:
      "Effective nuclear charge increases across a period, reducing atomic radius."
  },
  {
    id: "C04",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The hybridisation of the central atom in SF₆ is:",
    options: ["sp³", "sp³d", "sp³d²", "d²sp³"],
    answer: 2,
    explanation: "SF₆ has octahedral geometry and sp³d² hybridisation."
  },
  {
    id: "C05",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "For an exothermic reaction, the value of ΔH is:",
    options: ["Positive", "Negative", "Zero", "Always one"],
    answer: 1,
    explanation: "Heat is released, therefore enthalpy change is negative."
  },
  {
    id: "C06",
    subject: "Chemistry",
    chapter: "Equilibrium",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "A catalyst affects the equilibrium constant of a reaction by:",
    options: [
      "Increasing it",
      "Decreasing it",
      "Not changing it",
      "Making it zero"
    ],
    answer: 2,
    explanation:
      "A catalyst speeds both forward and reverse reactions equally and does not change K."
  },
  {
    id: "C07",
    subject: "Chemistry",
    chapter: "Redox Reactions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The oxidation number of sulphur in H₂SO₄ is:",
    options: ["+2", "+4", "+6", "-2"],
    answer: 2,
    explanation: "2(+1) + S + 4(-2) = 0, so S = +6."
  },
  {
    id: "C08",
    subject: "Chemistry",
    chapter: "Solutions",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "Which concentration term is independent of temperature?",
    options: ["Molarity", "Molality", "Normality", "Formality"],
    answer: 1,
    explanation:
      "Molality depends on masses, which do not change with temperature."
  },
  {
    id: "C09",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "In a galvanic cell, oxidation takes place at the:",
    options: ["Cathode", "Anode", "Salt bridge", "Electrolyte only"],
    answer: 1,
    explanation: "Oxidation always occurs at the anode."
  },
  {
    id: "C10",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The unit of rate constant for a first-order reaction is:",
    options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
    answer: 1,
    explanation: "For first order, k has dimensions of time⁻¹."
  },
  {
    id: "C11",
    subject: "Chemistry",
    chapter: "Surface Chemistry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The scattering of light by colloidal particles is called:",
    options: ["Brownian movement", "Tyndall effect", "Peptisation", "Coagulation"],
    answer: 1,
    explanation: "Colloidal particles scatter light, producing the Tyndall effect."
  },
  {
    id: "C12",
    subject: "Chemistry",
    chapter: "Hydrogen",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The oxidation state of oxygen in hydrogen peroxide is:",
    options: ["-2", "-1", "0", "+1"],
    answer: 1,
    explanation: "In peroxides, oxygen has oxidation state -1."
  },
  {
    id: "C13",
    subject: "Chemistry",
    chapter: "s-Block Elements",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Which alkali metal has the smallest atomic radius?",
    options: ["Li", "Na", "K", "Rb"],
    answer: 0,
    explanation: "Atomic radius increases down the group, so lithium is smallest."
  },
  {
    id: "C14",
    subject: "Chemistry",
    chapter: "p-Block Elements",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The shape of NH₃ molecule is:",
    options: ["Trigonal planar", "Tetrahedral", "Trigonal pyramidal", "Linear"],
    answer: 2,
    explanation:
      "NH₃ contains three bond pairs and one lone pair, giving trigonal pyramidal shape."
  },
  {
    id: "C15",
    subject: "Chemistry",
    chapter: "d- and f-Block Elements",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Transition metal compounds are often coloured because of:",
    options: [
      "s-s transitions",
      "d-d transitions",
      "Nuclear transitions",
      "Proton transfer"
    ],
    answer: 1,
    explanation: "Partially filled d orbitals permit d-d electronic transitions."
  },
  {
    id: "C16",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The coordination number of cobalt in [Co(NH₃)₆]³⁺ is:",
    options: ["3", "4", "6", "9"],
    answer: 2,
    explanation: "Six monodentate NH₃ ligands are attached to cobalt."
  },
  {
    id: "C17",
    subject: "Chemistry",
    chapter: "General Organic Chemistry",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "Which effect involves permanent displacement of sigma electrons?",
    options: ["Inductive effect", "Electromeric effect", "Resonance only", "Hyperconjugation only"],
    answer: 0,
    explanation:
      "The inductive effect is permanent polarization through sigma bonds."
  },
  {
    id: "C18",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The general formula of open-chain alkanes is:",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
    answer: 1,
    explanation: "Acyclic saturated hydrocarbons have formula CₙH₂ₙ₊₂."
  },
  {
    id: "C19",
    subject: "Chemistry",
    chapter: "Haloalkanes and Haloarenes",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "An SN1 reaction proceeds through the formation of a:",
    options: ["Carbanion", "Carbocation", "Free radical only", "Carbene"],
    answer: 1,
    explanation: "The slow step of SN1 forms a carbocation intermediate."
  },
  {
    id: "C20",
    subject: "Chemistry",
    chapter: "Alcohols, Phenols and Ethers",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Phenol is more acidic than ethanol mainly because:",
    options: [
      "Phenol has greater molar mass",
      "Phenoxide ion is resonance stabilised",
      "Ethanol has hydrogen bonding",
      "Phenol is saturated"
    ],
    answer: 1,
    explanation: "The phenoxide ion is stabilised by resonance."
  },
  {
    id: "C21",
    subject: "Chemistry",
    chapter: "Aldehydes and Ketones",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Tollens' reagent is commonly used to distinguish:",
    options: [
      "Aldehydes from ketones",
      "Alkanes from alkenes",
      "Alcohols from ethers",
      "Amines from amides"
    ],
    answer: 0,
    explanation: "Aldehydes generally give the silver mirror test."
  },
  {
    id: "C22",
    subject: "Chemistry",
    chapter: "Carboxylic Acids",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "Carboxylic acids react with sodium bicarbonate to release:",
    options: ["O₂", "H₂", "CO₂", "N₂"],
    answer: 2,
    explanation: "Acid + bicarbonate gives salt, water and carbon dioxide."
  },
  {
    id: "C23",
    subject: "Chemistry",
    chapter: "Amines",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "Aniline is less basic than ammonia because the lone pair on nitrogen is:",
    options: [
      "Absent",
      "Delocalised into the benzene ring",
      "Involved in hydrogen bonding only",
      "Positively charged"
    ],
    answer: 1,
    explanation:
      "Resonance delocalisation makes the nitrogen lone pair less available."
  },
  {
    id: "C24",
    subject: "Chemistry",
    chapter: "Biomolecules",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "Glucose is classified as a:",
    options: ["Ketohexose", "Aldohexose", "Aldopentose", "Ketopentose"],
    answer: 1,
    explanation: "Glucose contains an aldehyde group and six carbon atoms."
  },
  {
    id: "C25",
    subject: "Chemistry",
    chapter: "Mole Concept",
    difficulty: "Easy",
    type: "Numerical Value",
    question:
      "Enter the number of moles present in 18 g of water. Molar mass of water is 18 g/mol.",
    answer: "1",
    explanation: "Moles = given mass/molar mass = 18/18 = 1."
  },

  /* ======================= MATHEMATICS ======================= */

  {
    id: "M01",
    subject: "Mathematics",
    chapter: "Sets",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B is:",
    options: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"],
    answer: 1,
    explanation: "The common element of A and B is 3."
  },
  {
    id: "M02",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The domain of f(x) = 1/(x - 2) is:",
    options: ["All real numbers", "R - {2}", "x > 2", "x < 2"],
    answer: 1,
    explanation: "The denominator cannot be zero, so x ≠ 2."
  },
  {
    id: "M03",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The value of i² is:",
    options: ["1", "-1", "i", "-i"],
    answer: 1,
    explanation: "By definition, i = √(-1), therefore i² = -1."
  },
  {
    id: "M04",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The roots of x² - 5x + 6 = 0 are:",
    options: ["1 and 6", "2 and 3", "-2 and -3", "3 and 5"],
    answer: 1,
    explanation: "x² - 5x + 6 = (x - 2)(x - 3)."
  },
  {
    id: "M05",
    subject: "Mathematics",
    chapter: "Matrices",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The determinant of the identity matrix of order 3 is:",
    options: ["0", "1", "3", "-1"],
    answer: 1,
    explanation: "The determinant of every identity matrix is 1."
  },
  {
    id: "M06",
    subject: "Mathematics",
    chapter: "Permutations and Combinations",
    difficulty: "Easy",
    type: "Numerical Value",
    question:
      "Enter the number of ways in which 3 distinct objects can be arranged.",
    answer: "6",
    explanation: "Number of arrangements = 3! = 6."
  },
  {
    id: "M07",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The coefficient of x² in (1 + x)⁴ is:",
    options: ["4", "6", "8", "12"],
    answer: 1,
    explanation: "The coefficient is ⁴C₂ = 6."
  },
  {
    id: "M08",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The 10th term of the arithmetic progression 2, 5, 8, ... is:",
    options: ["27", "29", "30", "32"],
    answer: 1,
    explanation: "a₁₀ = 2 + 9 × 3 = 29."
  },
  {
    id: "M09",
    subject: "Mathematics",
    chapter: "Trigonometry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The value of sin²θ + cos²θ is:",
    options: ["0", "1", "2", "Depends on θ"],
    answer: 1,
    explanation: "This is the fundamental trigonometric identity."
  },
  {
    id: "M10",
    subject: "Mathematics",
    chapter: "Straight Lines",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The slope of the line 2x + 3y - 6 = 0 is:",
    options: ["2/3", "-2/3", "3/2", "-3/2"],
    answer: 1,
    explanation: "y = (-2/3)x + 2, so slope = -2/3."
  },
  {
    id: "M11",
    subject: "Mathematics",
    chapter: "Circles",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The radius of the circle x² + y² = 25 is:",
    options: ["5", "25", "10", "√5"],
    answer: 0,
    explanation: "Comparing with x² + y² = r² gives r = 5."
  },
  {
    id: "M12",
    subject: "Mathematics",
    chapter: "Conic Sections",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The eccentricity of a parabola is:",
    options: ["0", "1", "Less than 1", "Greater than 1"],
    answer: 1,
    explanation: "The eccentricity of a parabola is exactly 1."
  },  
  {
    id: "M13",
    subject: "Mathematics",
    chapter: "Limits",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The value of lim(x→0) sin x / x is:",
    options: ["0", "1", "∞", "-1"],
    answer: 1,
    explanation: "This is a standard fundamental limit."
  },
  {
    id: "M14",
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The derivative of x³ with respect to x is:",
    options: ["x²", "2x", "3x²", "3x"],
    answer: 2,
    explanation: "Using the power rule, d(x³)/dx = 3x²."
  },
  {
    id: "M15",
    subject: "Mathematics",
    chapter: "Applications of Derivatives",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "A differentiable function is increasing where:",
    options: ["f'(x) > 0", "f'(x) < 0", "f'(x) = ∞", "f(x) = 0"],
    answer: 0,
    explanation: "A positive derivative indicates an increasing function."
  },
  {
    id: "M16",
    subject: "Mathematics",
    chapter: "Indefinite Integration",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The integral of x with respect to x is:",
    options: ["x + C", "x² + C", "x²/2 + C", "1/x + C"],
    answer: 2,
    explanation: "∫x dx = x²/2 + C."
  },
  {
    id: "M17",
    subject: "Mathematics",
    chapter: "Definite Integration",
    difficulty: "Medium",
    type: "Numerical Value",
    question: "Enter the value of the definite integral ∫₀¹ 2x dx.",
    answer: "1",
    explanation: "[x²]₀¹ = 1."
  },
  {
    id: "M18",
    subject: "Mathematics",
    chapter: "Differential Equations",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question:
      "The order of the differential equation d²y/dx² + dy/dx + y = 0 is:",
    options: ["1", "2", "3", "0"],
    answer: 1,
    explanation: "The highest derivative present is the second derivative."
  },
  {
    id: "M19",
    subject: "Mathematics",
    chapter: "Vectors",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The dot product of two perpendicular non-zero vectors is:",
    options: ["1", "-1", "Zero", "Infinity"],
    answer: 2,
    explanation: "A·B = |A||B|cos90° = 0."
  },
  {
    id: "M20",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The distance between points (0, 0, 0) and (1, 2, 2) is:",
    options: ["2", "3", "4", "√5"],
    answer: 1,
    explanation: "Distance = √(1² + 2² + 2²) = √9 = 3."
  },
  {
    id: "M21",
    subject: "Mathematics",
    chapter: "Probability",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The probability of obtaining a head in one toss of a fair coin is:",
    options: ["0", "1/4", "1/2", "1"],
    answer: 2,
    explanation:
      "There are two equally likely outcomes and one favourable outcome."
  },
  {
    id: "M22",
    subject: "Mathematics",
    chapter: "Statistics",
    difficulty: "Easy",
    type: "Numerical Value",
    question:
      "Enter the arithmetic mean of the numbers 2, 4, 6 and 8.",
    answer: "5",
    explanation: "Mean = (2 + 4 + 6 + 8)/4 = 5."
  },
  {
    id: "M23",
    subject: "Mathematics",
    chapter: "Mathematical Reasoning",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question:
      "The negation of the statement 'All students are present' is:",
    options: [
      "No student is present",
      "At least one student is not present",
      "All students are absent",
      "Some students are present"
    ],
    answer: 1,
    explanation: "The negation of 'all' is 'at least one is not'."
  },
  {
    id: "M24",
    subject: "Mathematics",
    chapter: "Inverse Trigonometric Functions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The principal value of sin⁻¹(1) is:",
    options: ["0", "π/4", "π/2", "π"],
    answer: 2,
    explanation:
      "sin(π/2) = 1 and π/2 lies in the principal value range."
  },
  {
    id: "M25",
    subject: "Mathematics",
    chapter: "Determinants",
    difficulty: "Medium",
    type: "Numerical Value",
    question:
      "Enter the determinant of the matrix [[2, 1], [3, 4]].",
    answer: "5",
    explanation: "Determinant = 2 × 4 − 1 × 3 = 5."
  }
];

/* =========================================================
   APPLICATION STATE
========================================================= */

let currentQuestionIndex = 0;
let currentSubject = "Physics";

let responses = Array(questions.length).fill(null);
let statuses = Array(questions.length).fill("not-visited");
let bookmarks = Array(questions.length).fill(false);
let visitedQuestions = Array(questions.length).fill(false);

let timeRemaining = EXAM_DURATION_SECONDS;
let examStartedAt = null;
let timerInterval = null;
let toastTimer = null;
let testSubmitted = false;
/* =========================================================
   DOM REFERENCES
========================================================= */

const $ = (id) => document.getElementById(id);

const loadingScreen = $("loadingScreen");
const instructionsScreen = $("instructionsScreen");
const agreementCheckbox = $("agreementCheckbox");
const startTestBtn = $("startTestBtn");
const examApp = $("examApp");
const resultScreen = $("resultScreen");

const timerElement = $("timer");
const mobileTimerElement = $("mobileTimer");

const questionNumber = $("questionNumber");
const questionType = $("questionType");
const questionDifficulty = $("questionDifficulty");
const chapterName = $("chapterName");
const questionText = $("questionText");
const questionImageContainer = $("questionImageContainer");
const questionImage = $("questionImage");
const optionsContainer = $("options");
const numericalAnswerBox = $("numericalAnswerBox");
const numericalInput = $("numericalInput");

const previousBtn = $("previousBtn");
const clearBtn = $("clearBtn");
const reviewBtn = $("reviewBtn");
const saveBtn = $("saveBtn");
const bookmarkBtn = $("bookmarkBtn");
const reportBtn = $("reportBtn");

const questionPalette = $("questionPalette");
const paletteSubjectName = $("paletteSubjectName");

const answeredCount = $("answeredCount");
const notAnsweredCount = $("notAnsweredCount");
const reviewCount = $("reviewCount");
const notVisitedCount = $("notVisitedCount");

const overallProgressText = $("overallProgressText");
const overallProgressBar = $("overallProgressBar");

const physicsProgress = $("physicsProgress");
const chemistryProgress = $("chemistryProgress");
const mathematicsProgress = $("mathematicsProgress");

const submitBtn = $("submitBtn");
const mobileSubmitBtn = $("mobileSubmitBtn");
const submitModal = $("submitModal");
const cancelSubmitBtn = $("cancelSubmitBtn");
const confirmSubmitBtn = $("confirmSubmitBtn");

const modalAnsweredCount = $("modalAnsweredCount");
const modalUnansweredCount = $("modalUnansweredCount");
const modalReviewCount = $("modalReviewCount");

const calculatorBtn = $("calculatorBtn");
const calculatorModal = $("calculatorModal");
const closeCalculatorBtn = $("closeCalculatorBtn");
const calculatorDisplay = $("calculatorDisplay");
const calculatorKeys = $("calculatorKeys");

const fullscreenBtn = $("fullscreenBtn");

const reportModal = $("reportModal");
const closeReportBtn = $("closeReportBtn");
const sendReportBtn = $("sendReportBtn");
const reportComment = $("reportComment");

const mobilePaletteBtn = $("mobilePaletteBtn");
const examSidebar = $("examSidebar");
const closeSidebarBtn = $("closeSidebarBtn");

const toast = $("toast");
const toastMessage = $("toastMessage");

/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", initialiseApp);

function initialiseApp() {
  validateQuestionBank();
  attachEventListeners();

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    instructionsScreen.classList.remove("hidden");
  }, 1200);
}

function validateQuestionBank() {
  if (questions.length !== 75) {
    console.warn(
      `Expected 75 questions but found ${questions.length}.`
    );
  }

  SUBJECTS.forEach((subject) => {
    const total = questions.filter(
      (question) => question.subject === subject
    ).length;

    if (total !== QUESTIONS_PER_SUBJECT) {
      console.warn(
        `${subject} contains ${total} questions instead of 25.`
      );
    }
  });
}

/* =========================================================
   EVENT LISTENERS
========================================================= */

function attachEventListeners() {
  agreementCheckbox.addEventListener("change", () => {
    startTestBtn.disabled = !agreementCheckbox.checked;
  });

  startTestBtn.addEventListener("click", startExamination);

  document.querySelectorAll(".subject-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchSubject(tab.dataset.subject);
    });
  });

  previousBtn.addEventListener("click", goToPreviousQuestion);
  clearBtn.addEventListener("click", clearCurrentResponse);
  reviewBtn.addEventListener("click", markForReviewAndNext);
  saveBtn.addEventListener("click", saveAndNext);

  bookmarkBtn.addEventListener("click", toggleBookmark);
  reportBtn.addEventListener("click", openReportModal);

  submitBtn.addEventListener("click", openSubmitModal);
  mobileSubmitBtn.addEventListener("click", openSubmitModal);

  cancelSubmitBtn.addEventListener("click", closeSubmitModal);
  confirmSubmitBtn.addEventListener("click", () => {
    submitTest(false);
  });

  calculatorBtn.addEventListener("click", () => {
    calculatorModal.classList.remove("hidden");
  });

  closeCalculatorBtn.addEventListener("click", () => {
    calculatorModal.classList.add("hidden");
  });

  calculatorKeys.addEventListener(
    "click",
    handleCalculatorInput
  );

  fullscreenBtn.addEventListener(
    "click",
    toggleFullscreen
  );

  closeReportBtn.addEventListener(
    "click",
    closeReportModal
  );

  sendReportBtn.addEventListener(
    "click",
    submitQuestionReport
  );

  mobilePaletteBtn.addEventListener("click", () => {
    examSidebar.classList.add("open");
  });

  closeSidebarBtn.addEventListener("click", () => {
    examSidebar.classList.remove("open");
  });

  $("retakeTestBtn").addEventListener(
    "click",
    retakeTest
  );

  $("reviewAnswersBtn").addEventListener(
    "click",
    reviewAnswers
  );

  $("downloadResultBtn").addEventListener(
    "click",
    downloadScorecard
  );

  document.addEventListener(
    "keydown",
    handleKeyboardShortcuts
  );

  window.addEventListener("beforeunload", (event) => {
    if (examStartedAt && !testSubmitted) {
      event.preventDefault();
      event.returnValue = "";
    }
  });

  [
    calculatorModal,
    submitModal,
    reportModal
  ].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
}

/* =========================================================
   START EXAMINATION
========================================================= */

function startExamination() {
  instructionsScreen.classList.add("hidden");
  examApp.classList.remove("hidden");

  examStartedAt = Date.now();
  testSubmitted = false;

  currentQuestionIndex = 0;
  currentSubject = "Physics";

  visitedQuestions[0] = true;
  statuses[0] = "not-answered";

  startTimer();
  renderQuestion();
  updateAllUI();

  showToast(
    "Examination started. All the best!"
  );
}

/* =========================================================
   TIMER
========================================================= */

function startTimer() {
  clearInterval(timerInterval);

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeRemaining -= 1;

    updateTimerDisplay();

    if (timeRemaining === 15 * 60) {
      showToast(
        "Only 15 minutes remaining."
      );
    }

    if (timeRemaining === 5 * 60) {
      showToast(
        "Only 5 minutes remaining."
      );
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);

      timeRemaining = 0;
      updateTimerDisplay();

      showToast(
        "Time is over. Test submitted automatically."
      );

      submitTest(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const formattedTime = formatTime(timeRemaining);

  timerElement.textContent = formattedTime;
  mobileTimerElement.textContent = formattedTime;

  const isUrgent = timeRemaining <= 5 * 60;

  timerElement.style.color =
    isUrgent ? "#fca5a5" : "";

  mobileTimerElement.style.color =
    isUrgent ? "#dc2626" : "";
}

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(
    0,
    totalSeconds
  );

  const hours = Math.floor(
    safeSeconds / 3600
  );

  const minutes = Math.floor(
    (safeSeconds % 3600) / 60
  );

  const seconds = safeSeconds % 60;

  return [hours, minutes, seconds]
    .map((value) =>
      String(value).padStart(2, "0")
    )
    .join(":");
}
/* =========================================================
   QUESTION RENDERING
========================================================= */

function renderQuestion() {
  const question = questions[currentQuestionIndex];

  currentSubject = question.subject;
  visitedQuestions[currentQuestionIndex] = true;

  if (statuses[currentQuestionIndex] === "not-visited") {
    statuses[currentQuestionIndex] = "not-answered";
  }

  questionNumber.textContent =
    `Question ${getSubjectQuestionNumber(currentQuestionIndex)}`;

  questionType.textContent = question.type;
  chapterName.textContent = question.chapter;
  questionText.innerHTML = formatQuestionText(question.question);

  questionDifficulty.textContent = question.difficulty;
  questionDifficulty.className =
    `difficulty-badge ${question.difficulty.toLowerCase()}`;

  if (question.image) {
    questionImage.src = question.image;
    questionImageContainer.classList.remove("hidden");
  } else {
    questionImage.src = "";
    questionImageContainer.classList.add("hidden");
  }

  renderQuestionInput(question);
  updateSubjectTabs();
  renderPalette();
  updateBookmarkButton();
  updateActionButtons();
  updateAllUI();
}

function formatQuestionText(text) {
  return String(text).replace(/\n/g, "<br>");
}

function renderQuestionInput(question) {
  optionsContainer.innerHTML = "";
  numericalAnswerBox.classList.add("hidden");

  if (question.type === "Numerical Value") {
    numericalAnswerBox.classList.remove("hidden");

    numericalInput.value =
      responses[currentQuestionIndex] ?? "";

    numericalInput.oninput = () => {
      const value = numericalInput.value.trim();

      responses[currentQuestionIndex] =
        value === "" ? null : value;

      statuses[currentQuestionIndex] =
        value === ""
          ? "not-answered"
          : "answered";

      updateAllUI();
    };

    return;
  }

  question.options.forEach((option, optionIndex) => {
    const optionLabel =
      document.createElement("label");

    const selected =
      responses[currentQuestionIndex] === optionIndex;

    optionLabel.className =
      `option-item${selected ? " selected" : ""}`;

    optionLabel.innerHTML = `
      <input
        type="radio"
        name="questionOption"
        value="${optionIndex}"
        ${selected ? "checked" : ""}
      />

      <span class="option-radio"></span>

      <span class="option-letter">
        ${String.fromCharCode(65 + optionIndex)}.
      </span>

      <span class="option-text">
        ${escapeHTML(option)}
      </span>
    `;

    optionLabel.addEventListener("click", () => {
      selectMCQOption(optionIndex);
    });

    optionsContainer.appendChild(optionLabel);
  });
}

function selectMCQOption(optionIndex) {
  responses[currentQuestionIndex] = optionIndex;
  statuses[currentQuestionIndex] = "answered";

  document.querySelectorAll(".option-item")
    .forEach((option, index) => {
      const selected = index === optionIndex;

      option.classList.toggle(
        "selected",
        selected
      );

      const radio = option.querySelector("input");

      if (radio) {
        radio.checked = selected;
      }
    });

  updateAllUI();
}

/* =========================================================
   SUBJECT SWITCHING
========================================================= */

function switchSubject(subject) {
  const firstQuestionIndex =
    questions.findIndex(
      (question) =>
        question.subject === subject
    );

  if (firstQuestionIndex === -1) {
    return;
  }

  currentQuestionIndex = firstQuestionIndex;
  currentSubject = subject;

  renderQuestion();
  closeMobileSidebar();
}

function updateSubjectTabs() {
  document
    .querySelectorAll(".subject-tab")
    .forEach((tab) => {
      tab.classList.toggle(
        "active",
        tab.dataset.subject === currentSubject
      );
    });

  paletteSubjectName.textContent =
    currentSubject;
}

/* =========================================================
   QUESTION NAVIGATION
========================================================= */

function goToPreviousQuestion() {
  saveCurrentNumericalResponse();

  const subjectIndexes =
    getSubjectIndexes(currentSubject);

  const position =
    subjectIndexes.indexOf(currentQuestionIndex);

  if (position > 0) {
    currentQuestionIndex =
      subjectIndexes[position - 1];

    renderQuestion();
  } else {
    showToast(
      "This is the first question of the subject."
    );
  }
}

function saveAndNext() {
  saveCurrentNumericalResponse();

  const response =
    responses[currentQuestionIndex];

  statuses[currentQuestionIndex] =
    response !== null && response !== ""
      ? "answered"
      : "not-answered";

  moveToNextQuestion();
}

function markForReviewAndNext() {
  saveCurrentNumericalResponse();

  const response =
    responses[currentQuestionIndex];

  statuses[currentQuestionIndex] =
    response !== null && response !== ""
      ? "answered-reviewed"
      : "reviewed";

  moveToNextQuestion();
}

function moveToNextQuestion() {
  const subjectIndexes =
    getSubjectIndexes(currentSubject);

  const position =
    subjectIndexes.indexOf(currentQuestionIndex);

  if (position < subjectIndexes.length - 1) {
    currentQuestionIndex =
      subjectIndexes[position + 1];
  } else {
    const subjectPosition =
      SUBJECTS.indexOf(currentSubject);

    if (subjectPosition < SUBJECTS.length - 1) {
      const nextSubject =
        SUBJECTS[subjectPosition + 1];

      currentQuestionIndex =
        questions.findIndex(
          (question) =>
            question.subject === nextSubject
        );

      showToast(
        `${currentSubject} completed. Opening ${nextSubject}.`
      );
    } else {
      showToast(
        "You have reached the last question."
      );
    }
  }

  renderQuestion();
}

function jumpToQuestion(index) {
  if (
    !Number.isInteger(index) ||
    !questions[index]
  ) {
    return;
  }

  saveCurrentNumericalResponse();

  currentQuestionIndex = index;
  currentSubject =
    questions[index].subject;

  renderQuestion();
  closeMobileSidebar();
}

function clearCurrentResponse() {
  responses[currentQuestionIndex] = null;
  statuses[currentQuestionIndex] =
    "not-answered";

  renderQuestion();

  showToast(
    "Response cleared."
  );
}

function saveCurrentNumericalResponse() {
  const question =
    questions[currentQuestionIndex];

  if (
    question.type !== "Numerical Value"
  ) {
    return;
  }

  const value =
    numericalInput.value.trim();

  responses[currentQuestionIndex] =
    value === "" ? null : value;
}

/* =========================================================
   QUESTION NUMBER HELPERS
========================================================= */

function getSubjectIndexes(subject) {
  return questions
    .map((question, index) => ({
      question,
      index
    }))
    .filter(
      (item) =>
        item.question.subject === subject
    )
    .map((item) => item.index);
}

function getSubjectQuestionNumber(index) {
  const subject =
    questions[index].subject;

  const subjectIndexes =
    getSubjectIndexes(subject);

  return (
    subjectIndexes.indexOf(index) + 1
  );
}

/* =========================================================
   QUESTION PALETTE
========================================================= */

function renderPalette() {
  questionPalette.innerHTML = "";

  const subjectIndexes =
    getSubjectIndexes(currentSubject);

  subjectIndexes.forEach(
    (questionIndex, position) => {
      const button =
        document.createElement("button");

      let status =
        statuses[questionIndex];

      if (!visitedQuestions[questionIndex]) {
        status = "not-visited";
      }

      button.type = "button";
      button.textContent = position + 1;
      button.className =
        `palette-question ${status}`;

      if (
        questionIndex === currentQuestionIndex
      ) {
        button.classList.add("current");
      }

      button.title =
        `${questions[questionIndex].chapter} — ${status}`;

      button.addEventListener(
        "click",
        () => {
          jumpToQuestion(questionIndex);
        }
      );

      questionPalette.appendChild(button);
    }
  );
}

/* =========================================================
   ACTION BUTTON STATES
========================================================= */

function updateActionButtons() { 
  const subjectIndexes =
    getSubjectIndexes(currentSubject);

  const position =
    subjectIndexes.indexOf(currentQuestionIndex);

  const isFirst =
    position === 0;

  previousBtn.disabled = isFirst;
  previousBtn.style.opacity =
    isFirst ? "0.45" : "1";
}
/* =========================================================
   PROGRESS AND SUMMARY
========================================================= */

function updateAllUI() {
  updateSummaryCounts();
  updateSubjectProgress();
  updateOverallProgress();
  renderPalette();
}

function getSummaryData() {
  const answered = statuses.filter(
    (status) =>
      status === "answered" ||
      status === "answered-reviewed"
  ).length;

  const reviewed = statuses.filter(
    (status) =>
      status === "reviewed" ||
      status === "answered-reviewed"
  ).length;

  const notVisited = visitedQuestions.filter(
    (visited) => !visited
  ).length;

  const notAnswered =
    questions.length - answered;

  return {
    answered,
    reviewed,
    notVisited,
    notAnswered
  };
}

function updateSummaryCounts() {
  const summary = getSummaryData();

  answeredCount.textContent =
    summary.answered;

  reviewCount.textContent =
    summary.reviewed;

  notVisitedCount.textContent =
    summary.notVisited;

  notAnsweredCount.textContent =
    summary.notAnswered;
}

function updateSubjectProgress() {
  const subjectElements = {
    Physics: physicsProgress,
    Chemistry: chemistryProgress,
    Mathematics: mathematicsProgress
  };

  SUBJECTS.forEach((subject) => {
    const indexes =
      getSubjectIndexes(subject);

    const attempted =
      indexes.filter((index) => {
        return (
          responses[index] !== null &&
          responses[index] !== ""
        );
      }).length;

    subjectElements[subject].textContent =
      `${attempted} / ${indexes.length}`;
  });
}

function updateOverallProgress() {
  const attempted = responses.filter(
    (response) =>
      response !== null &&
      response !== ""
  ).length;

  const progress = Math.round(
    (attempted / questions.length) * 100
  );

  overallProgressText.textContent =
    `${progress}%`;

  overallProgressBar.style.width =
    `${progress}%`;
}

/* =========================================================
   BOOKMARK
========================================================= */

function toggleBookmark() {
  bookmarks[currentQuestionIndex] =
    !bookmarks[currentQuestionIndex];

  updateBookmarkButton();

  showToast(
    bookmarks[currentQuestionIndex]
      ? "Question bookmarked."
      : "Bookmark removed."
  );
}

function updateBookmarkButton() {
  const bookmarked =
    bookmarks[currentQuestionIndex];

  bookmarkBtn.textContent =
    bookmarked
      ? "♥ Bookmarked"
      : "♡ Bookmark";

  bookmarkBtn.style.color =
    bookmarked ? "#dc2626" : "";
}

/* =========================================================
   SUBMIT MODAL
========================================================= */

function openSubmitModal() {
  saveCurrentNumericalResponse();

  const summary = getSummaryData();

  modalAnsweredCount.textContent =
    summary.answered;

  modalUnansweredCount.textContent =
    questions.length - summary.answered;

  modalReviewCount.textContent =
    summary.reviewed;

  submitModal.classList.remove("hidden");
}

function closeSubmitModal() {
  submitModal.classList.add("hidden");
}

/* =========================================================
   FINAL SUBMISSION
========================================================= */

function submitTest(autoSubmit = false) {
  if (testSubmitted) {
    return;
  }

  saveCurrentNumericalResponse();

  testSubmitted = true;

  clearInterval(timerInterval);

  submitModal.classList.add("hidden");
  examSidebar.classList.remove("open");
  examApp.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const result = calculateResult();

  renderResult(result);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (!autoSubmit) {
    showToast(
      "Test submitted successfully."
    );
  }
}

/* =========================================================
   RESULT CALCULATION
========================================================= */

function calculateResult() {
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
  let score = 0;

  const subjectData = {};
  const difficultyData = {};
  const chapterData = {};

  SUBJECTS.forEach((subject) => {
    subjectData[subject] = {
      total: 0,
      attempted: 0,
      correct: 0,
      wrong: 0,
      score: 0
    };
  });

  ["Easy", "Medium", "Hard"].forEach(
    (difficulty) => {
      difficultyData[difficulty] = {
        total: 0,
        attempted: 0,
        correct: 0
      };
    }
  );

  questions.forEach((question, index) => {
    const response =
      responses[index];

    const attempted =
      response !== null &&
      response !== "";

    subjectData[question.subject].total += 1;

    difficultyData[
      question.difficulty
    ].total += 1;

    if (!chapterData[question.chapter]) {
      chapterData[question.chapter] = {
        total: 0,
        attempted: 0,
        correct: 0
      };
    }

    chapterData[question.chapter].total += 1;

    if (!attempted) {
      unattempted += 1;
      return;
    }

    subjectData[
      question.subject
    ].attempted += 1;

    difficultyData[
      question.difficulty
    ].attempted += 1;

    chapterData[
      question.chapter
    ].attempted += 1;

    const isCorrect =
      checkAnswer(question, response);

    if (isCorrect) {
      correct += 1;
      score += MARKS_CORRECT;

      subjectData[
        question.subject
      ].correct += 1;

      subjectData[
        question.subject
      ].score += MARKS_CORRECT;

      difficultyData[
        question.difficulty
      ].correct += 1;

      chapterData[
        question.chapter
      ].correct += 1;
    } else {
      wrong += 1;

      subjectData[
        question.subject
      ].wrong += 1;

      const negativeMark =
        question.type === "Numerical Value"
          ? MARKS_WRONG_NUMERICAL
          : MARKS_WRONG_MCQ;

      score += negativeMark;

      subjectData[
        question.subject
      ].score += negativeMark;
    }
  });

  const attempted =
    correct + wrong;

  const accuracy =
    attempted > 0
      ? Math.round(
          (correct / attempted) * 100
        )
      : 0;

  const percentage = Math.max(
    0,
    Math.min(
      100,
      (score / 300) * 100
    )
  );

  const percentile =
    estimatePercentile(score);

  const rank =
    estimateRank(percentile);

  const usedSeconds =
    EXAM_DURATION_SECONDS -
    timeRemaining;

  return {
    correct,
    wrong,
    unattempted,
    attempted,
    score,
    accuracy,
    percentage,
    percentile,
    rank,
    usedSeconds,
    subjectData,
    difficultyData,
    chapterData
  };
}

/* =========================================================
   ANSWER CHECKING
========================================================= */

function checkAnswer(question, response) {
  if (
    question.type === "Numerical Value"
  ) {
    const userValue =
      Number.parseFloat(
        String(response).trim()
      );

    const correctValue =
      Number.parseFloat(
        String(question.answer).trim()
      );

    if (
      !Number.isFinite(userValue) ||
      !Number.isFinite(correctValue)
    ) {
      return (
        String(response)
          .trim()
          .toLowerCase() ===
        String(question.answer)
          .trim()
          .toLowerCase()
      );
    }

    const tolerance =
      question.tolerance ?? 0.01;

    return (
      Math.abs(
        userValue - correctValue
      ) <= tolerance
    );
  }

  return (
    Number(response) ===
    Number(question.answer)
  );
}
/* =========================================================
   RESULT SCREEN RENDERING
========================================================= */

function renderResult(result) {
  $("scoreValue").textContent =
    result.score;

  $("maximumScore").textContent =
    "/ 300";

  $("correctCount").textContent =
    result.correct;

  $("wrongCount").textContent =
    result.wrong;

  $("unattemptedCount").textContent =
    result.unattempted;

  $("accuracyValue").textContent =
    `${result.accuracy}%`;

  $("percentileValue").textContent =
    result.percentile.toFixed(2);

  $("rankValue").textContent =
    formatEstimatedRank(result.rank);

  $("totalTimeUsed").textContent =
    formatTime(result.usedSeconds);

  const averageSeconds =
    result.attempted > 0
      ? Math.round(
          result.usedSeconds /
          result.attempted
        )
      : 0;

  $("averageQuestionTime").textContent =
    formatMinutesAndSeconds(
      averageSeconds
    );

  renderSubjectAnalysis(
    result.subjectData
  );

  renderDifficultyAnalysis(
    result.difficultyData
  );

  renderChapterInsights(
    result.chapterData
  );

  const subjectPerformance =
    Object.entries(
      result.subjectData
    ).map(([subject, data]) => ({
      subject,
      accuracy:
        data.attempted > 0
          ? Math.round(
              (data.correct /
                data.attempted) *
                100
            )
          : 0,
      score: data.score
    }));

  const strongestSubject =
    subjectPerformance
      .slice()
      .sort((a, b) => {
        if (
          b.accuracy !==
          a.accuracy
        ) {
          return (
            b.accuracy -
            a.accuracy
          );
        }

        return b.score - a.score;
      })[0]?.subject ?? "--";

  const weakestSubject =
    subjectPerformance
      .slice()
      .sort((a, b) => {
        if (
          a.accuracy !==
          b.accuracy
        ) {
          return (
            a.accuracy -
            b.accuracy
          );
        }

        return a.score - b.score;
      })[0]?.subject ?? "--";

  $("fastestSubject").textContent =
    strongestSubject;

  $("slowestSubject").textContent =
    weakestSubject;

  $("performanceMessage").textContent =
    createPerformanceMessage(
      result
    );

  $("aiRecommendation").textContent =
    createRecommendation(
      result
    );

  updateScoreCircle(
    result.percentage
  );
}

/* =========================================================
   SUBJECT-WISE ANALYSIS
========================================================= */

function renderSubjectAnalysis(subjectData) {
  const container =
    $("subjectAnalysis");

  container.innerHTML = "";

  Object.entries(subjectData)
    .forEach(([subject, data]) => {
      const accuracy =
        data.attempted > 0
          ? Math.round(
              (data.correct /
                data.attempted) *
                100
            )
          : 0;

      const row =
        document.createElement("div");

      row.className =
        "subject-row";

      row.innerHTML = `
        <strong>
          ${subject}
        </strong>

        <div class="analysis-bar">
          <span
            style="width: ${accuracy}%"
          ></span>
        </div>

        <small>
          ${accuracy}%
        </small>

        <div
          style="
            grid-column: 1 / -1;
            margin-top: -7px;
            color: #64748b;
            font-size: 11px;
          "
        >
          Score:
          ${data.score} /
          ${data.total * 4}

          · Correct:
          ${data.correct}

          · Incorrect:
          ${data.wrong}

          · Attempted:
          ${data.attempted}
        </div>
      `;

      container.appendChild(row);
    });
}

/* =========================================================
   DIFFICULTY ANALYSIS
========================================================= */

function renderDifficultyAnalysis(
  difficultyData
) {
  const container =
    $("difficultyAnalysis");

  container.innerHTML = "";

  Object.entries(difficultyData)
    .forEach(
      ([difficulty, data]) => {
        const accuracy =
          data.attempted > 0
            ? Math.round(
                (data.correct /
                  data.attempted) *
                  100
              )
            : 0;

        const row =
          document.createElement(
            "div"
          );

        row.className =
          "subject-row";

        row.innerHTML = `
          <strong>
            ${difficulty}
          </strong>

          <div class="analysis-bar">
            <span
              style="width: ${accuracy}%"
            ></span>
          </div>

          <small>
            ${accuracy}%
          </small>

          <div
            style="
              grid-column: 1 / -1;
              margin-top: -7px;
              color: #64748b;
              font-size: 11px;
            "
          >
            Correct:
            ${data.correct}

            · Attempted:
            ${data.attempted}

            · Total:
            ${data.total}
          </div>
        `;

        container.appendChild(row);
      }
    );
}

/* =========================================================
   CHAPTER INSIGHTS
========================================================= */

function renderChapterInsights(
  chapterData
) {
  const attemptedChapters =
    Object.entries(chapterData)
      .filter(
        ([, data]) =>
          data.attempted > 0
      )
      .map(
        ([chapter, data]) => ({
          chapter,
          accuracy:
            Math.round(
              (data.correct /
                data.attempted) *
                100
            ),
          attempted:
            data.attempted,
          correct:
            data.correct
        })
      );

  if (
    attemptedChapters.length === 0
  ) {
    $("strongestChapter")
      .textContent =
      "No chapter attempted";

    $("weakestChapter")
      .textContent =
      "No chapter attempted";

    return;
  }

  const strongest =
    attemptedChapters
      .slice()
      .sort((a, b) => {
        if (
          b.accuracy !==
          a.accuracy
        ) {
          return (
            b.accuracy -
            a.accuracy
          );
        }

        if (
          b.correct !==
          a.correct
        ) {
          return (
            b.correct -
            a.correct
          );
        }

        return (
          b.attempted -
          a.attempted
        );
      })[0];

  const weakest =
    attemptedChapters
      .slice()
      .sort((a, b) => {
        if (
          a.accuracy !==
          b.accuracy
        ) {
          return (
            a.accuracy -
            b.accuracy
          );
        }

        return (
          b.attempted -
          a.attempted
        );
      })[0];

  $("strongestChapter")
    .textContent =
    `${strongest.chapter} (${strongest.accuracy}%)`;

  $("weakestChapter")
    .textContent =
    `${weakest.chapter} (${weakest.accuracy}%)`;
}

/* =========================================================
   SCORE CIRCLE
========================================================= */

function updateScoreCircle(
  percentage
) {
  const circle =
    document.querySelector(
      ".score-circle"
    );

  if (!circle) {
    return;
  }

  const degree =
    Math.max(
      0,
      Math.min(
        360,
        percentage * 3.6
      )
    );

  circle.style.background = `
    conic-gradient(
      #ffffff 0deg,
      #ffffff ${degree}deg,
      rgba(
        255,
        255,
        255,
        0.18
      ) ${degree}deg
    )
  `;
}

/* =========================================================
   PERFORMANCE MESSAGE
========================================================= */

function createPerformanceMessage(
  result
) {
  if (result.score >= 240) {
    return (
      "Outstanding performance. " +
      "Your accuracy and concept control are excellent."
    );
  }

  if (result.score >= 180) {
    return (
      "Strong performance. " +
      "Focus on reducing avoidable errors to move higher."
    );
  }

  if (result.score >= 120) {
    return (
      "Good attempt. Improve weak chapters and question-selection strategy."
    );
  }

  if (result.score >= 60) {
    return (
      "Your foundation is developing. Prioritise revision and regular timed practice."
    );
  }

  return (
    "Start with concept revision and chapter-wise tests before attempting another full mock."
  );
}

/* =========================================================
   AI RECOMMENDATION
========================================================= */

function createRecommendation(
  result
) {
  const subjectEntries =
    Object.entries(
      result.subjectData
    ).map(([subject, data]) => ({
      subject,
      accuracy:
        data.attempted > 0
          ? Math.round(
              (data.correct /
                data.attempted) *
                100
            )
          : 0,
      attempted:
        data.attempted,
      wrong:
        data.wrong
    }));

  const weakestSubject =
    subjectEntries
      .slice()
      .sort((a, b) => {
        if (
          a.accuracy !==
          b.accuracy
        ) {
          return (
            a.accuracy -
            b.accuracy
          );
        }

        return (
          b.wrong -
          a.wrong
        );
      })[0];

  if (result.attempted < 25) {
    return (
      "Your attempt rate is low. " +
      "Practise faster question selection and complete more timed chapter tests before the next full mock."
    );
  }

  if (result.accuracy < 60) {
    return (
      `Accuracy needs improvement, especially in ${weakestSubject.subject}. ` +
      "Analyse every incorrect answer and revise the exact concept before taking another mock."
    );
  }

  if (result.wrong > 15) {
    return (
      `Avoid aggressive guessing. In ${weakestSubject.subject}, ` +
      "solve only after verifying the method, sign and units."
    );
  }

  if (result.unattempted > 25) {
    return (
      `Your accuracy is stable, but many questions were left unattempted. ` +
      `Improve speed in ${weakestSubject.subject} and use the first round for easy questions.`
    );
  }

  return (
    `Your overall strategy is stable. ` +
    `Give extra revision time to ${weakestSubject.subject} and practise medium-to-hard questions under a timer.`
  );
}

/* =========================================================
   PERCENTILE ESTIMATION
   Rough mock-test estimate only
========================================================= */

function estimatePercentile(score) {
  if (score >= 285) {
    return 99.99;
  }

  if (score >= 270) {
    return 99.95;
  }

  if (score >= 250) {
    return 99.85;
  }

  if (score >= 230) {
    return 99.60;
  }

  if (score >= 210) {
    return 99.20;
  }

  if (score >= 190) {
    return 98.50;
  }

  if (score >= 170) {
    return 97.20;
  }

  if (score >= 150) {
    return 95.20;
  }

  if (score >= 130) {
    return 92.50;
  }

  if (score >= 110) {
    return 88.50;
  }

  if (score >= 90) {
    return 82.00;
  }

  if (score >= 70) {
    return 72.00;
  }

  if (score >= 50) {
    return 60.00;
  }

  if (score >= 30) {
    return 45.00;
  }

  if (score >= 10) {
    return 25.00;
  }

  return 10.00;
}

/* =========================================================
   RANK ESTIMATION
========================================================= */

function estimateRank(percentile) {
  const assumedCandidates =
    1500000;

  const rank = Math.round(
    (
      (100 - percentile) /
      100
    ) *
    assumedCandidates
  );

  return Math.max(
    1,
    rank
  );
}

function formatEstimatedRank(rank) {
  if (rank <= 1) {
    return "≈ 1";
  }

  return (
    `≈ ${rank.toLocaleString(
      "en-IN"
    )}`
  );
}
/* =========================================================
   CALCULATOR
========================================================= */

function handleCalculatorInput(event) {
  const key =
    event.target.closest("button");

  if (!key) {
    return;
  }

  const value =
    key.dataset.value;

  if (value === "clear") {
    calculatorDisplay.value = "0";
    return;
  }

  if (value === "backspace") {
    const current =
      calculatorDisplay.value;

    calculatorDisplay.value =
      current.length > 1
        ? current.slice(0, -1)
        : "0";

    return;
  }

  if (value === "calculate") {
    calculateExpression();
    return;
  }

  if (
    calculatorDisplay.value ===
    "Error"
  ) {
    calculatorDisplay.value = "0";
  }

  if (
    calculatorDisplay.value === "0"
  ) {
    calculatorDisplay.value = "";
  }

  calculatorDisplay.value += value;
}

function calculateExpression() {
  try {
    const rawExpression =
      calculatorDisplay.value.trim();

    if (!rawExpression) {
      calculatorDisplay.value = "0";
      return;
    }

    if (
      !/^[0-9+\-*/().\sA-Za-z]+$/.test(
        rawExpression
      )
    ) {
      throw new Error(
        "Invalid characters"
      );
    }

    const expression =
      rawExpression
        .replaceAll(
          "sin(",
          "Math.sin("
        )
        .replaceAll(
          "cos(",
          "Math.cos("
        )
        .replaceAll(
          "tan(",
          "Math.tan("
        )
        .replaceAll(
          "sqrt(",
          "Math.sqrt("
        );

    const result =
      Function(
        `"use strict"; return (${expression});`
      )();

    if (!Number.isFinite(result)) {
      throw new Error(
        "Invalid result"
      );
    }

    calculatorDisplay.value =
      Number.isInteger(result)
        ? String(result)
        : String(
            Number(
              result.toFixed(8)
            )
          );
  } catch (error) {
    calculatorDisplay.value =
      "Error";
  }
}

/* =========================================================
   FULLSCREEN
========================================================= */

async function toggleFullscreen() {
  try {
    if (
      !document.fullscreenElement
    ) {
      await document
        .documentElement
        .requestFullscreen();

      showToast(
        "Fullscreen mode enabled."
      );
    } else {
      await document.exitFullscreen();

      showToast(
        "Fullscreen mode disabled."
      );
    }
  } catch (error) {
    showToast(
      "Fullscreen is not supported by this browser."
    );
  }
}

/* =========================================================
   QUESTION REPORT
========================================================= */

function openReportModal() {
  reportModal.classList.remove(
    "hidden"
  );
}

function closeReportModal() {
  reportModal.classList.add(
    "hidden"
  );
}

function submitQuestionReport() {
  const selectedReason =
    document.querySelector(
      'input[name="reportReason"]:checked'
    );

  if (!selectedReason) {
    showToast(
      "Select a report reason."
    );
    return;
  }

  const report = {
    questionId:
      questions[
        currentQuestionIndex
      ].id,

    reason:
      selectedReason.value,

    comment:
      reportComment.value.trim(),

    createdAt:
      new Date().toISOString()
  };

  let savedReports = [];

  try {
    savedReports =
      JSON.parse(
        localStorage.getItem(
          "jeeverseReports"
        ) || "[]"
      );
  } catch (error) {
    savedReports = [];
  }

  savedReports.push(report);

  localStorage.setItem(
    "jeeverseReports",
    JSON.stringify(savedReports)
  );

  selectedReason.checked = false;
  reportComment.value = "";

  reportModal.classList.add(
    "hidden"
  );

  showToast(
    "Question report saved successfully."
  );
}

/* =========================================================
   RETAKE TEST
========================================================= */

function retakeTest() {
  const confirmed =
    window.confirm(
      "Do you want to restart the complete test?"
    );

  if (!confirmed) {
    return;
  }

  responses =
    Array(
      questions.length
    ).fill(null);

  statuses =
    Array(
      questions.length
    ).fill("not-visited");

  bookmarks =
    Array(
      questions.length
    ).fill(false);

  visitedQuestions =
    Array(
      questions.length
    ).fill(false);

  currentQuestionIndex = 0;
  currentSubject = "Physics";

  timeRemaining =
    EXAM_DURATION_SECONDS;

  examStartedAt =
    Date.now();

  testSubmitted = false;

  resultScreen.classList.add(
    "hidden"
  );

  examApp.classList.remove(
    "hidden"
  );

  visitedQuestions[0] = true;
  statuses[0] =
    "not-answered";

  clearInterval(
    timerInterval
  );

  startTimer();
  renderQuestion();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  showToast(
    "New test attempt started."
  );
}

/* =========================================================
   REVIEW ANSWERS
========================================================= */

function reviewAnswers() {
  currentQuestionIndex = 0;
  currentSubject = "Physics";

  resultScreen.classList.add(
    "hidden"
  );

  examApp.classList.remove(
    "hidden"
  );

  renderQuestion();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  showToast(
    "Review mode opened. Your saved responses are visible."
  );
}

/* =========================================================
   SCORECARD DOWNLOAD
========================================================= */

function downloadScorecard() {
  const result =
    calculateResult();

  const subjectRows =
    Object.entries(
      result.subjectData
    )
      .map(
        ([subject, data]) => {
          const accuracy =
            data.attempted > 0
              ? Math.round(
                  (
                    data.correct /
                    data.attempted
                  ) * 100
                )
              : 0;

          return `
            <tr>
              <td>${subject}</td>
              <td>${data.attempted}</td>
              <td>${data.correct}</td>
              <td>${data.wrong}</td>
              <td>${data.score}</td>
              <td>${accuracy}%</td>
            </tr>
          `;
        }
      )
      .join("");

  const scorecardHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <title>
        JEEVerse Pro Scorecard
      </title>

      <style>
        * {
          box-sizing: border-box;
        }

        body {
          padding: 35px;
          color: #0f172a;
          background: #ffffff;
          font-family:
            Arial,
            sans-serif;
        }

        h1 {
          margin-bottom: 5px;
        }

        p {
          color: #475569;
        }

        .summary {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
          margin: 25px 0;
        }

        .card {
          padding: 18px;
          border:
            1px solid #cbd5e1;
          border-radius: 12px;
          text-align: center;
        }

        .card strong {
          display: block;
          margin-bottom: 5px;
          font-size: 28px;
        }

        table {
          width: 100%;
          margin-top: 20px;
          border-collapse:
            collapse;
        }

        th,
        td {
          padding: 12px;
          border:
            1px solid #cbd5e1;
          text-align: left;
        }

        th {
          background: #eff6ff;
        }

        .notice {
          margin-top: 25px;
          padding: 14px;
          border-radius: 10px;
          background: #fef3c7;
        }

        @media (
          max-width: 700px
        ) {
          body {
            padding: 18px;
          }

          .summary {
            grid-template-columns:
              repeat(2, 1fr);
          }

          table {
            font-size: 12px;
          }

          th,
          td {
            padding: 8px;
          }
        }

        @media print {
          button {
            display: none;
          }
        }
      </style>
    </head>

    <body>
      <h1>
        JEEVerse Pro Scorecard
      </h1>

      <p>
        JEE Main Full Syllabus Mock Test
      </p>

      <p>
        Date:
        ${new Date().toLocaleString(
          "en-IN"
        )}
      </p>

      <div class="summary">
        <div class="card">
          <strong>
            ${result.score}/300
          </strong>
          Score
        </div>

        <div class="card">
          <strong>
            ${result.correct}
          </strong>
          Correct
        </div>

        <div class="card">
          <strong>
            ${result.wrong}
          </strong>
          Incorrect
        </div>

        <div class="card">
          <strong>
            ${result.accuracy}%
          </strong>
          Accuracy
        </div>
      </div>

      <h2>
        Subject-wise Performance
      </h2>

      <table>
        <thead>
          <tr>
            <th>
              Subject
            </th>

            <th>
              Attempted
            </th>

            <th>
              Correct
            </th>

            <th>
              Incorrect
            </th>

            <th>
              Score
            </th>

            <th>
              Accuracy
            </th>
          </tr>
        </thead>

        <tbody>
          ${subjectRows}
        </tbody>
      </table>

      <div class="notice">
        Estimated percentile and rank are mock-test indicators only.
        They are not official NTA results.
      </div>

      <script>
        window.onload = () => {
          window.print();
        };
      <\/script>
    </body>
    </html>
  `;

  const scorecardWindow =
    window.open(
      "",
      "_blank"
    );

  if (!scorecardWindow) {
    showToast(
      "Allow pop-ups to download the scorecard."
    );
    return;
  }

  scorecardWindow
    .document
    .open();

  scorecardWindow
    .document
    .write(scorecardHTML);

  scorecardWindow
    .document
    .close();
}

/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

function handleKeyboardShortcuts(
  event
) {
  if (
    examApp.classList.contains(
      "hidden"
    )
  ) {
    return;
  }

  const anyModalOpen =
    !calculatorModal.classList.contains(
      "hidden"
    ) ||
    !submitModal.classList.contains(
      "hidden"
    ) ||
    !reportModal.classList.contains(
      "hidden"
    );

  if (anyModalOpen) {
    if (
      event.key === "Escape"
    ) {
      calculatorModal.classList.add(
        "hidden"
      );

      submitModal.classList.add(
        "hidden"
      );

      reportModal.classList.add(
        "hidden"
      );
    }

    return;
  }

  const question =
    questions[
      currentQuestionIndex
    ];

  if (
    question.type !==
      "Numerical Value" &&
    ["1", "2", "3", "4"].includes(
      event.key
    )
  ) {
    const optionIndex =
      Number(event.key) - 1;

    if (
      question.options[
        optionIndex
      ] !== undefined
    ) {
      selectMCQOption(
        optionIndex
      );
    }
  }

  if (
    event.key ===
    "ArrowLeft"
  ) {
    goToPreviousQuestion();
  }

  if (
    event.key ===
    "ArrowRight"
  ) {
    saveAndNext();
  }
}

/* =========================================================
   HELPERS
========================================================= */

function closeMobileSidebar() {
  examSidebar.classList.remove(
    "open"
  );
}

function formatMinutesAndSeconds(
  totalSeconds
) {
  const safeSeconds =
    Math.max(
      0,
      totalSeconds
    );

  const minutes =
    Math.floor(
      safeSeconds / 60
    );

  const seconds =
    safeSeconds % 60;

  return (
    `${String(minutes).padStart(
      2,
      "0"
    )}:` +
    `${String(seconds).padStart(
      2,
      "0"
    )}`
  );
}

function escapeHTML(value) {
  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}

function showToast(message) {
  clearTimeout(
    toastTimer
  );

  toastMessage.textContent =
    message;

  toast.classList.add(
    "show"
  );

  toastTimer =
    setTimeout(() => {
      toast.classList.remove(
        "show"
      );
    }, 2600);
}
