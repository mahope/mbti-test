export type Question = {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    value: number;
    label: string;
  }[];
};

export const questions: Question[] = [
  // Extrovert (E) vs Introvert (I)
  {
    id: 1,
    text: "På en fest, hvad foretrækker du?",
    dimension: "EI",
    options: [
      { value: -2, label: "At være i centrum og snakke med mange" },
      { value: -1, label: "At snakke med flere, men også tage pauser" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "At have dybe samtaler med få personer" },
      { value: 2, label: "At være i baggrunden og observere" }
    ]
  },
  {
    id: 2,
    text: "Hvad giver dig mest energi?",
    dimension: "EI",
    options: [
      { value: -2, label: "At være sammen med mange mennesker" },
      { value: -1, label: "At være social, men med pauser" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "At være alene eller med få nære venner" },
      { value: 2, label: "At være helt alene med mig selv" }
    ]
  },
  {
    id: 3,
    text: "Når du har fri, hvad gør du oftest?",
    dimension: "EI",
    options: [
      { value: -2, label: "Laver aftaler og møder mange" },
      { value: -1, label: "Blander sociale ting med alene-tid" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Hyg med 1-2 gode venner" },
      { value: 2, label: "Lader op alene med mine hobbyer" }
    ]
  },

  // Sensing (S) vs iNtuition (N)
  {
    id: 4,
    text: "Hvordan lærer du bedst noget nyt?",
    dimension: "SN",
    options: [
      { value: -2, label: "Ved at få konkrete instruktioner og øve det" },
      { value: -1, label: "Ved at følge en trin-for-trin guide" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Ved at forstå det store billede først" },
      { value: 2, label: "Ved at eksperimentere og finde egne måder" }
    ]
  },
  {
    id: 5,
    text: "Når du tænker på fremtiden:",
    dimension: "SN",
    options: [
      { value: -2, label: "Fokuserer jeg på konkrete planer" },
      { value: -1, label: "Laver jeg realistiske planer" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Drømmer jeg om mulighederne" },
      { value: 2, label: "Forestiller jeg mig vilde scenarier" }
    ]
  },
  {
    id: 6,
    text: "Hvad lægger du mest mærke til?",
    dimension: "SN",
    options: [
      { value: -2, label: "Konkrete detaljer og fakta" },
      { value: -1, label: "Det praktiske i situationen" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Mønstre og sammenhænge" },
      { value: 2, label: "Symboler og skjulte betydninger" }
    ]
  },

  // Thinking (T) vs Feeling (F)
  {
    id: 7,
    text: "Når du skal træffe en svær beslutning:",
    dimension: "TF",
    options: [
      { value: -2, label: "Analyserer jeg logisk hvad der giver mening" },
      { value: -1, label: "Vejer fakta tungt" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Tænker på hvordan det påvirker andre" },
      { value: 2, label: "Går efter hvad der føles rigtigt" }
    ]
  },
  {
    id: 8,
    text: "Hvad er vigtigst når du giver feedback?",
    dimension: "TF",
    options: [
      { value: -2, label: "At være ærlig, selv om det kan såre" },
      { value: -1, label: "At være direkte men respektfuld" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "At tage hensyn til følelser" },
      { value: 2, label: "At være omsorgsfuld og støttende" }
    ]
  },
  {
    id: 9,
    text: "Hvad sætter du højest?",
    dimension: "TF",
    options: [
      { value: -2, label: "Retfærdighed og principper" },
      { value: -1, label: "Logik og effektivitet" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Harmoni og empati" },
      { value: 2, label: "At alle har det godt" }
    ]
  },

  // Judging (J) vs Perceiving (P)
  {
    id: 10,
    text: "Hvordan håndterer du opgaver?",
    dimension: "JP",
    options: [
      { value: -2, label: "Planlægger alt i detaljer på forhånd" },
      { value: -1, label: "Laver en liste og følger den" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Håndterer ting som de kommer" },
      { value: 2, label: "Improviserer og finder løsninger løbende" }
    ]
  },
  {
    id: 11,
    text: "Dit værelse er typisk:",
    dimension: "JP",
    options: [
      { value: -2, label: "Meget organiseret og ryddeligt" },
      { value: -1, label: "Mest organiseret" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Kreativt kaos jeg kan finde rundt i" },
      { value: 2, label: "Roddet, men det generer mig ikke" }
    ]
  },
  {
    id: 12,
    text: "Når I planlægger noget i spejdergruppen:",
    dimension: "JP",
    options: [
      { value: -2, label: "Vil jeg gerne have en fast plan" },
      { value: -1, label: "Vil jeg gerne have struktur" },
      { value: 0, label: "Begge dele lige meget" },
      { value: 1, label: "Vil jeg gerne være fleksibel" },
      { value: 2, label: "Vil jeg helst se hvad der sker" }
    ]
  }
];
