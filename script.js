"use strict";

/* =========================================================
   JEEVERSE PRO — CONFIGURATION
========================================================= */

const EXAM_DURATION_SECONDS = 3 * 60 * 60;
const MARKS_CORRECT = 4;
const MARKS_WRONG_MCQ = -1;
const MARKS_WRONG_NUMERICAL = 0;

const SUBJECTS = [
  "Physics",
  "Chemistry",
  "Mathematics"
];

/* =========================================================
   QUESTION BANK
========================================================= */

const questions = [

  /* ==================== PHYSICS ==================== */

  {
    id: "P01",
    subject: "Physics",
    chapter: "Units and Dimensions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The dimensional formula of Planck's constant is:",
    options: ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "M⁰L²T⁻¹"],
    answer: 0,
    explanation: "Planck's constant has dimensions of energy multiplied by time."
  },

  {
    id: "P02",
    subject: "Physics",
    chapter: "Kinematics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "A particle starts from rest with acceleration 2 m/s². The distance travelled in 3 seconds is:",
    options: ["3 m", "6 m", "9 m", "12 m"],
    answer: 2,
    explanation: "Using s = ut + 1/2 at² gives s = 9 m."
  },

  {
    id: "P03",
    subject: "Physics",
    chapter: "Laws of Motion",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "A force of 10 N acts on a body of mass 2 kg. Its acceleration is:",
    options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
    answer: 1,
    explanation: "Using F = ma, acceleration = 10/2 = 5 m/s²."
  },

  {
    id: "P04",
    subject: "Physics",
    chapter: "Work, Energy and Power",
    difficulty: "Easy",
    type: "Numerical Value",
    question: "A body of mass 2 kg has kinetic energy 100 J. Enter its speed in m/s.",
    answer: "10",
    explanation: "Using K = 1/2 mv² gives v = 10 m/s."
  },

  {
    id: "P05",
    subject: "Physics",
    chapter: "Rotational Motion",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The moment of inertia of a thin ring about its central perpendicular axis is:",
    options: ["MR²", "1/2 MR²", "2/3 MR²", "1/4 MR²"],
    answer: 0,
    explanation: "For a thin ring about its central perpendicular axis, I = MR²."
  },

  {
    id: "P06",
    subject: "Physics",
    chapter: "Gravitation",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The acceleration due to gravity at the centre of the Earth is:",
    options: ["g", "g/2", "2g", "Zero"],
    answer: 3,
    explanation: "At the centre, gravitational forces from all directions cancel."
  },

  {
    id: "P07",
    subject: "Physics",
    chapter: "Properties of Matter",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The SI unit of surface tension is:",
    options: ["N m", "N/m", "J/m", "Pa m²"],
    answer: 1,
    explanation: "Surface tension is force per unit length."
  },

  {
    id: "P08",
    subject: "Physics",
    chapter: "Thermodynamics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "For an isochoric process, the work done by an ideal gas is:",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    answer: 2,
    explanation: "In an isochoric process, volume remains constant, so work is zero."
  },

  {
    id: "P09",
    subject: "Physics",
    chapter: "Kinetic Theory",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The RMS speed of gas molecules is proportional to:",
    options: ["T", "√T", "1/T", "1/√T"],
    answer: 1,
    explanation: "RMS speed is proportional to the square root of absolute temperature."
  },

  {
    id: "P10",
    subject: "Physics",
    chapter: "Oscillations",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The time period of a simple pendulum is proportional to:",
    options: ["Length", "Square root of length", "Inverse of length", "Square of length"],
    answer: 1,
    explanation: "T = 2π√(l/g)."
  },

  {
    id: "P11",
    subject: "Physics",
    chapter: "Waves",
    difficulty: "Easy",
    type: "Numerical Value",
    question: "A wave has frequency 50 Hz and wavelength 2 m. Enter its speed in m/s.",
    answer: "100",
    explanation: "Wave speed v = fλ = 50 × 2 = 100 m/s."
  },

  {
    id: "P12",
    subject: "Physics",
    chapter: "Electrostatics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The electric field inside a conductor in electrostatic equilibrium is:",
    options: ["Maximum", "Minimum", "Zero", "Infinite"],
    answer: 2,
    explanation: "The electric field inside a conductor in electrostatic equilibrium is zero."
  },

  {
    id: "P13",
    subject: "Physics",
    chapter: "Capacitance",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Two identical capacitors of capacitance C are connected in series. Their equivalent capacitance is:",
    options: ["2C", "C", "C/2", "C/4"],
    answer: 2,
    explanation: "For two identical capacitors in series, equivalent capacitance is C/2."
  },

  {
    id: "P14",
    subject: "Physics",
    chapter: "Current Electricity",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Two resistors of 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",
    options: ["1 Ω", "2 Ω", "3 Ω", "9 Ω"],
    answer: 1,
    explanation: "1/R = 1/6 + 1/3 = 1/2, therefore R = 2 Ω."
  },

  {
    id: "P15",
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "A charged particle moving parallel to a uniform magnetic field experiences:",
    options: ["Maximum force", "Minimum non-zero force", "Zero force", "Infinite force"],
    answer: 2,
    explanation: "Magnetic force qvB sin θ becomes zero when θ = 0°."
  },

  {
    id: "P16",
    subject: "Physics",
    chapter: "Magnetism and Matter",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The magnetic field lines outside a bar magnet move from:",
    options: ["South to north", "North to south", "East to west", "West to east"],
    answer: 1,
    explanation: "Outside a magnet, field lines emerge from north and enter south."
  },

  {
    id: "P17",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "According to Faraday's law, induced emf is proportional to:",
    options: ["Magnetic flux", "Rate of change of magnetic flux", "Resistance", "Current"],
    answer: 1,
    explanation: "Induced emf equals the negative rate of change of magnetic flux."
  },

  {
    id: "P18",
    subject: "Physics",
    chapter: "Alternating Current",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The RMS value of alternating current with peak value I₀ is:",
    options: ["I₀", "I₀/2", "I₀/√2", "√2 I₀"],
    answer: 2,
    explanation: "For sinusoidal current, Irms = I₀/√2."
  },

  {
    id: "P19",
    subject: "Physics",
    chapter: "Electromagnetic Waves",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Electromagnetic waves can travel through:",
    options: ["Solids only", "Liquids only", "Vacuum", "Conductors only"],
    answer: 2,
    explanation: "Electromagnetic waves do not require a material medium."
  },

  {
    id: "P20",
    subject: "Physics",
    chapter: "Ray Optics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The power of a convex lens of focal length 50 cm is:",
    options: ["+1 D", "+2 D", "-1 D", "-2 D"],
    answer: 1,
    explanation: "Power P = 1/f in metres = 1/0.5 = +2 D."
  },

  {
    id: "P21",
    subject: "Physics",
    chapter: "Wave Optics",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Young's double-slit experiment demonstrates:",
    options: ["Polarisation only", "Interference of light", "Photoelectric effect", "Compton effect"],
    answer: 1,
    explanation: "The experiment demonstrates interference and the wave nature of light."
  },

  {
    id: "P22",
    subject: "Physics",
    chapter: "Dual Nature",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The energy of a photon is given by:",
    options: ["mc²", "hν", "qV only", "1/2 mv²"],
    answer: 1,
    explanation: "Photon energy is E = hν."
  },

  {
    id: "P23",
    subject: "Physics",
    chapter: "Atoms",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "In Bohr's model, the angular momentum of an electron is:",
    options: ["Continuous", "Zero", "Quantised", "Infinite"],
    answer: 2,
    explanation: "Bohr proposed that electron angular momentum is quantised."
  },

  {
    id: "P24",
    subject: "Physics",
    chapter: "Nuclei",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The number of neutrons in the nucleus ²³₁₁Na is:",
    options: ["11", "12", "23", "34"],
    answer: 1,
    explanation: "Number of neutrons = mass number − atomic number = 23 − 11 = 12."
  },

  {
    id: "P25",
    subject: "Physics",
    chapter: "Semiconductor Electronics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "A p-n junction diode conducts easily when it is:",
    options: ["Reverse biased", "Forward biased", "Unbiased only", "Heavily cooled"],
    answer: 1,
    explanation: "Forward bias reduces the depletion barrier and permits current flow."
  },
     /* ==================== CHEMISTRY ==================== */

  {
    id: "C01",
    subject: "Chemistry",
    chapter: "Some Basic Concepts of Chemistry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "One mole contains:",
    options: [
      "6.022 × 10²³ particles",
      "3.011 × 10²³ particles",
      "1 × 10²³ particles",
      "12 × 10²³ particles"
    ],
    answer: 0,
    explanation: "One mole contains Avogadro number of particles."
  },

  {
    id: "C02",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Maximum number of electrons in M-shell is:",
    options: ["8", "18", "32", "16"],
    answer: 1,
    explanation: "Maximum electrons = 2n² = 2 × 3² = 18."
  },

  {
    id: "C03",
    subject: "Chemistry",
    chapter: "Periodic Table",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Which element has the highest electronegativity?",
    options: [
      "Fluorine",
      "Chlorine",
      "Oxygen",
      "Nitrogen"
    ],
    answer: 0,
    explanation: "Fluorine is the most electronegative element."
  },

  {
    id: "C04",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Water molecule has:",
    options: [
      "Linear shape",
      "Trigonal planar shape",
      "Bent shape",
      "Tetrahedral shape"
    ],
    answer: 2,
    explanation: "Due to two lone pairs, water has a bent geometry."
  },

  {
    id: "C05",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The SI unit of enthalpy is:",
    options: [
      "Joule",
      "Pascal",
      "Kelvin",
      "Mole"
    ],
    answer: 0,
    explanation: "Enthalpy is a form of energy."
  },
     {
    id: "C06",
    subject: "Chemistry",
    chapter: "Equilibrium",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "For an exothermic reaction at equilibrium, increasing temperature shifts the equilibrium:",
    options: [
      "In the forward direction",
      "In the backward direction",
      "It does not shift",
      "First forward, then backward"
    ],
    answer: 1,
    explanation: "Heat behaves like a product in an exothermic reaction, so increasing temperature shifts equilibrium backward."
  },

  {
    id: "C07",
    subject: "Chemistry",
    chapter: "Redox Reactions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Oxidation is defined as:",
    options: [
      "Gain of electrons",
      "Loss of electrons",
      "Gain of neutrons",
      "Loss of protons"
    ],
    answer: 1,
    explanation: "Oxidation means loss of electrons and an increase in oxidation number."
  },

  {
    id: "C08",
    subject: "Chemistry",
    chapter: "Solutions",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Which concentration term is independent of temperature?",
    options: [
      "Molarity",
      "Molality",
      "Normality",
      "Volume percentage"
    ],
    answer: 1,
    explanation: "Molality depends on the mass of solvent, which does not change with temperature."
  },

  {
    id: "C09",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "In a galvanic cell, oxidation occurs at the:",
    options: [
      "Cathode",
      "Anode",
      "Salt bridge",
      "Electrolyte only"
    ],
    answer: 1,
    explanation: "Oxidation always occurs at the anode."
  },

  {
    id: "C10",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The unit of rate constant for a first-order reaction is:",
    options: [
      "mol L⁻¹ s⁻¹",
      "s⁻¹",
      "L mol⁻¹ s⁻¹",
      "mol² L⁻² s⁻¹"
    ],
    answer: 1,
    explanation: "For a first-order reaction, the rate constant has the dimension of inverse time."
  },
     {
    id: "C11",
    subject: "Chemistry",
    chapter: "Surface Chemistry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Which phenomenon is responsible for adsorption?",
    options: [
      "Surface attraction",
      "Gravity",
      "Magnetic force",
      "Nuclear force"
    ],
    answer: 0,
    explanation: "Adsorption occurs due to attractive forces on the surface."
  },

  {
    id: "C12",
    subject: "Chemistry",
    chapter: "Hydrogen",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Heavy water is represented by:",
    options: [
      "H₂O",
      "D₂O",
      "H₂O₂",
      "DOH"
    ],
    answer: 1,
    explanation: "Heavy water is deuterium oxide (D₂O)."
  },

  {
    id: "C13",
    subject: "Chemistry",
    chapter: "s-Block Elements",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Which alkali metal shows the highest reactivity?",
    options: [
      "Lithium",
      "Sodium",
      "Potassium",
      "Cesium"
    ],
    answer: 3,
    explanation: "Reactivity increases down the group, so cesium is the most reactive."
  },

  {
    id: "C14",
    subject: "Chemistry",
    chapter: "p-Block Elements",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Which of the following is a noble gas?",
    options: [
      "Nitrogen",
      "Oxygen",
      "Argon",
      "Sulphur"
    ],
    answer: 2,
    explanation: "Argon belongs to Group 18 (noble gases)."
  },

  {
    id: "C15",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The coordination number of [Co(NH₃)₆]³⁺ is:",
    options: [
      "3",
      "4",
      "6",
      "8"
    ],
    answer: 2,
    explanation: "Six ammonia ligands are directly attached to cobalt."
  },
     {
    id: "C16",
    subject: "Chemistry",
    chapter: "d- and f-Block Elements",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Which of the following is a transition element?",
    options: [
      "Sodium",
      "Calcium",
      "Iron",
      "Aluminium"
    ],
    answer: 2,
    explanation: "Iron has a partially filled d-subshell and is a transition element."
  },

  {
    id: "C17",
    subject: "Chemistry",
    chapter: "General Organic Chemistry",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Which effect involves permanent displacement of sigma electrons due to electronegativity difference?",
    options: [
      "Inductive effect",
      "Resonance effect",
      "Electromeric effect",
      "Hyperconjugation only"
    ],
    answer: 0,
    explanation: "The inductive effect is the permanent displacement of sigma electrons along a carbon chain."
  },

  {
    id: "C18",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The general formula of alkanes is:",
    options: [
      "CₙH₂ₙ",
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₋₂",
      "CₙHₙ"
    ],
    answer: 1,
    explanation: "Open-chain saturated hydrocarbons have the general formula CₙH₂ₙ₊₂."
  },

  {
    id: "C19",
    subject: "Chemistry",
    chapter: "Haloalkanes and Haloarenes",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Which alkyl halide generally undergoes the SN1 reaction most easily?",
    options: [
      "Methyl halide",
      "Primary alkyl halide",
      "Secondary alkyl halide",
      "Tertiary alkyl halide"
    ],
    answer: 3,
    explanation: "A tertiary alkyl halide forms the most stable carbocation and generally favours the SN1 mechanism."
  },

  {
    id: "C20",
    subject: "Chemistry",
    chapter: "Alcohols, Phenols and Ethers",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Which compound is more acidic?",
    options: [
      "Ethanol",
      "Phenol",
      "Ethane",
      "Diethyl ether"
    ],
    answer: 1,
    explanation: "Phenol is more acidic because the phenoxide ion is stabilised by resonance."
  },

  {
    id: "C21",
    subject: "Chemistry",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Tollens' reagent is commonly used to distinguish between:",
    options: [
      "Alkanes and alkenes",
      "Aldehydes and ketones",
      "Alcohols and ethers",
      "Acids and bases"
    ],
    answer: 1,
    explanation: "Aldehydes generally give a silver mirror test with Tollens' reagent, while ordinary ketones do not."
  },

  {
    id: "C22",
    subject: "Chemistry",
    chapter: "Amines",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The functional group present in primary amines is:",
    options: [
      "-OH",
      "-CHO",
      "-NH₂",
      "-COOH"
    ],
    answer: 2,
    explanation: "Primary amines contain the amino functional group, -NH₂."
  },

  {
    id: "C23",
    subject: "Chemistry",
    chapter: "Biomolecules",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "Which of the following is a monosaccharide?",
    options: [
      "Sucrose",
      "Starch",
      "Glucose",
      "Cellulose"
    ],
    answer: 2,
    explanation: "Glucose is a monosaccharide, whereas sucrose is a disaccharide and starch and cellulose are polysaccharides."
  },

  {
    id: "C24",
    subject: "Chemistry",
    chapter: "Polymers",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The monomer used to prepare polythene is:",
    options: [
      "Ethene",
      "Ethyne",
      "Benzene",
      "Methane"
    ],
    answer: 0,
    explanation: "Polythene is formed by addition polymerisation of ethene molecules."
  },

  {
    id: "C25",
    subject: "Chemistry",
    chapter: "Mole Concept",
    difficulty: "Easy",
    type: "Numerical Value",
    question: "Enter the number of moles present in 18 g of water. The molar mass of water is 18 g/mol.",
    answer: "1",
    explanation: "Number of moles equals given mass divided by molar mass, so 18 divided by 18 equals 1."
  },
     /* ==================== MATHEMATICS ==================== */

  {
    id: "M01",
    subject: "Mathematics",
    chapter: "Sets",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B is:",
    options: [
      "{1, 2}",
      "{3}",
      "{4, 5}",
      "{1, 2, 3, 4, 5}"
    ],
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
    options: [
      "All real numbers",
      "All real numbers except 2",
      "x greater than 2",
      "x less than 2"
    ],
    answer: 1,
    explanation: "The denominator cannot be zero, so x cannot be equal to 2."
  },

  {
    id: "M03",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The value of i² is:",
    options: [
      "1",
      "-1",
      "i",
      "-i"
    ],
    answer: 1,
    explanation: "By definition, i is the square root of -1, therefore i² equals -1."
  },

  {
    id: "M04",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The roots of x² - 5x + 6 = 0 are:",
    options: [
      "1 and 6",
      "2 and 3",
      "-2 and -3",
      "3 and 5"
    ],
    answer: 1,
    explanation: "x² - 5x + 6 can be factorised as (x - 2)(x - 3)."
  },

  {
    id: "M05",
    subject: "Mathematics",
    chapter: "Matrices",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The determinant of the identity matrix of order 3 is:",
    options: [
      "0",
      "1",
      "3",
      "-1"
    ],
    answer: 1,
    explanation: "The determinant of every identity matrix is 1."
  },

  {
    id: "M06",
    subject: "Mathematics",
    chapter: "Permutations and Combinations",
    difficulty: "Easy",
    type: "Numerical Value",
    question: "Enter the number of ways in which 3 distinct objects can be arranged.",
    answer: "6",
    explanation: "The number of arrangements is 3 factorial, which equals 6."
  },

  {
    id: "M07",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The coefficient of x² in the expansion of (1 + x)⁴ is:",
    options: [
      "4",
      "6",
      "8",
      "12"
    ],
    answer: 1,
    explanation: "The coefficient of x² is 4C2, which equals 6."
  },

  {
    id: "M08",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The 10th term of the arithmetic progression 2, 5, 8, ... is:",
    options: [
      "27",
      "29",
      "30",
      "32"
    ],
    answer: 1,
    explanation: "The 10th term is 2 + 9 multiplied by 3, which equals 29."
  },

  {
    id: "M09",
    subject: "Mathematics",
    chapter: "Trigonometry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The value of sin²θ + cos²θ is:",
    options: [
      "0",
      "1",
      "2",
      "It depends on θ"
    ],
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
    options: [
      "2/3",
      "-2/3",
      "3/2",
      "-3/2"
    ],
    answer: 1,
    explanation: "Rearranging gives y = (-2/3)x + 2, so the slope is -2/3."
  },
     {
    id: "M11",
    subject: "Mathematics",
    chapter: "Circles",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The radius of the circle x² + y² = 25 is:",
    options: [
      "5",
      "25",
      "10",
      "√5"
    ],
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
    options: [
      "0",
      "1",
      "Less than 1",
      "Greater than 1"
    ],
    answer: 1,
    explanation: "The eccentricity of every parabola is 1."
  },

  {
    id: "M13",
    subject: "Mathematics",
    chapter: "Limits",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The value of lim(x→0) sin x / x is:",
    options: [
      "0",
      "1",
      "Infinity",
      "-1"
    ],
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
    options: [
      "x²",
      "2x",
      "3x²",
      "3x"
    ],
    answer: 2,
    explanation: "Using the power rule, d(x³)/dx = 3x²."
  },

  {
    id: "M15",
    subject: "Mathematics",
    chapter: "Applications of Derivatives",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "A differentiable function is increasing in an interval where:",
    options: [
      "f'(x) is greater than 0",
      "f'(x) is less than 0",
      "f'(x) is infinite",
      "f(x) is equal to 0"
    ],
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
    options: [
      "x + C",
      "x² + C",
      "x²/2 + C",
      "1/x + C"
    ],
    answer: 2,
    explanation: "The integral of x is x²/2 + C."
  },

  {
    id: "M17",
    subject: "Mathematics",
    chapter: "Definite Integration",
    difficulty: "Medium",
    type: "Numerical Value",
    question: "Enter the value of the definite integral of 2x from 0 to 1.",
    answer: "1",
    explanation: "The integral equals [x²] from 0 to 1, which is 1."
  },

  {
    id: "M18",
    subject: "Mathematics",
    chapter: "Differential Equations",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "The order of the differential equation d²y/dx² + dy/dx + y = 0 is:",
    options: [
      "1",
      "2",
      "3",
      "0"
    ],
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
    options: [
      "1",
      "-1",
      "Zero",
      "Infinity"
    ],
    answer: 2,
    explanation: "A·B = |A||B|cos90°, so the result is zero."
  },

  {
    id: "M20",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The distance between the points (0, 0, 0) and (1, 2, 2) is:",
    options: [
      "2",
      "3",
      "4",
      "√5"
    ],
    answer: 1,
    explanation: "Distance = √(1² + 2² + 2²) = √9 = 3."
  },
     {
    id: "M21",
    subject: "Mathematics",
    chapter: "Probability",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The probability of getting a head on tossing a fair coin is:",
    options: [
      "0",
      "1/4",
      "1/2",
      "1"
    ],
    answer: 2,
    explanation: "A fair coin has two equally likely outcomes."
  },

  {
    id: "M22",
    subject: "Mathematics",
    chapter: "Statistics",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "The arithmetic mean of 2, 4, 6, 8 is:",
    options: [
      "4",
      "5",
      "6",
      "8"
    ],
    answer: 1,
    explanation: "Mean = (2 + 4 + 6 + 8) / 4 = 5."
  },

  {
    id: "M23",
    subject: "Mathematics",
    chapter: "Mathematical Reasoning",
    difficulty: "Easy",
    type: "Single Correct MCQ",
    question: "If 'All squares are rectangles' is true, then:",
    options: [
      "All rectangles are squares",
      "Some rectangles are squares",
      "No rectangle is a square",
      "Squares are circles"
    ],
    answer: 1,
    explanation: "Every square is a rectangle, so some rectangles are squares."
  },

  {
    id: "M24",
    subject: "Mathematics",
    chapter: "Linear Programming",
    difficulty: "Medium",
    type: "Single Correct MCQ",
    question: "Linear Programming Problems are solved graphically for:",
    options: [
      "One variable",
      "Two variables",
      "Three variables",
      "Four variables"
    ],
    answer: 1,
    explanation: "The graphical method is applicable for two decision variables."
  },

  {
    id: "M25",
    subject: "Mathematics",
    chapter: "Numerical Value",
    difficulty: "Easy",
    type: "Numerical Value",
    question: "Enter the value of 12².",
    answer: "144",
    explanation: "12 × 12 = 144."
  }

];
