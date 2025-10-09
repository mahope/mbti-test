export type Personality = {
  type: string;
  title: string;
  description: string;
  strengths: string[];
  careers: string[];
  emoji: string;
};

export const personalities: Record<string, Personality> = {
  ISTJ: {
    type: "ISTJ",
    title: "Inspektøren",
    emoji: "📋",
    description: "Du er pålidelig, organiseret og holder hvad du lover. Du kan lide struktur og traditioner, og folk kan altid regne med dig.",
    strengths: ["Ansvarlig", "Organiseret", "Loyal", "Praktisk"],
    careers: ["Lærer", "Revisor", "Læge", "Politibetjent"]
  },
  ISFJ: {
    type: "ISFJ",
    title: "Beskytteren",
    emoji: "🛡️",
    description: "Du er omsorgsfuld og hjælpsom, og kan godt lide at støtte andre. Du husker detaljer om dine venner og gør gerne folk glade.",
    strengths: ["Loyal", "Omsorgsfuld", "Pålidelig", "Detaljeret"],
    careers: ["Sygeplejerske", "Lærer", "Socialrådgiver", "Biblioteker"]
  },
  INFJ: {
    type: "INFJ",
    title: "Rådgiveren",
    emoji: "🔮",
    description: "Du er kreativ og idealistisk med stærk intuition. Du vil gerne gøre verden til et bedre sted og forstår mennesker dybt.",
    strengths: ["Empatisk", "Kreativ", "Idealistisk", "Indsigtsfuld"],
    careers: ["Psykolog", "Forfatter", "Rådgiver", "Kunstner"]
  },
  INTJ: {
    type: "INTJ",
    title: "Mesteren",
    emoji: "🧠",
    description: "Du er strategisk, selvstændig og elsker at løse komplekse problemer. Du har store planer og arbejder målrettet for at nå dem.",
    strengths: ["Strategisk", "Selvstændig", "Logisk", "Visionær"],
    careers: ["Ingeniør", "Programmør", "Forsker", "Arkitekt"]
  },
  ISTP: {
    type: "ISTP",
    title: "Håndværkeren",
    emoji: "🔧",
    description: "Du er praktisk og hands-on, og elsker at forstå hvordan ting fungerer. Du er god til at løse problemer i nuet.",
    strengths: ["Praktisk", "Analytisk", "Rolig", "Fleksibel"],
    careers: ["Mekaniker", "Pilot", "Ingeniør", "Fotograf"]
  },
  ISFP: {
    type: "ISFP",
    title: "Kunstneren",
    emoji: "🎨",
    description: "Du er kreativ, følsom og værdsætter skønhed. Du lever i nuet og udtrykker dig gennem kunst eller andre kreative måder.",
    strengths: ["Kreativ", "Følsom", "Spontan", "Loyal"],
    careers: ["Designer", "Musiker", "Fotograf", "Dyrepasser"]
  },
  INFP: {
    type: "INFP",
    title: "Idealistens",
    emoji: "💭",
    description: "Du er drømmende, idealistisk og følger dine værdier. Du vil gerne hjælpe andre og gøre en forskel i verden.",
    strengths: ["Empatisk", "Kreativ", "Idealistisk", "Loyal"],
    careers: ["Forfatter", "Psykolog", "Grafisk designer", "Lærer"]
  },
  INTP: {
    type: "INTP",
    title: "Tænkeren",
    emoji: "🤔",
    description: "Du er analytisk, nysgerrig og elsker at lære nye ting. Du tænker dybt og kan lide at forstå hvordan alting hænger sammen.",
    strengths: ["Logisk", "Kreativ", "Nysgerrig", "Objektiv"],
    careers: ["Forsker", "Programmør", "Filosof", "Matematiker"]
  },
  ESTP: {
    type: "ESTP",
    title: "Iværksætteren",
    emoji: "⚡",
    description: "Du er energisk, spontan og elsker action. Du lever i nuet og er god til at tage hurtige beslutninger.",
    strengths: ["Energisk", "Pragmatisk", "Modig", "Spontan"],
    careers: ["Iværksætter", "Sælger", "Paramediciner", "Brandmand"]
  },
  ESFP: {
    type: "ESFP",
    title: "Underholderen",
    emoji: "🎭",
    description: "Du er udadvendt, spontan og elsker at underholde andre. Du bringer glæde til folk omkring dig og lever livet fuldt ud.",
    strengths: ["Udadvendt", "Venlig", "Spontan", "Entusiastisk"],
    careers: ["Skuespiller", "Eventplanlægger", "Lærer", "Guide"]
  },
  ENFP: {
    type: "ENFP",
    title: "Forkæmperen",
    emoji: "🌟",
    description: "Du er entusiastisk, kreativ og fuld af idéer. Du inspirerer andre og kan se potentiale i alt og alle.",
    strengths: ["Entusiastisk", "Kreativ", "Empatisk", "Optimistisk"],
    careers: ["Journalist", "Skuespiller", "Rådgiver", "Iværksætter"]
  },
  ENTP: {
    type: "ENTP",
    title: "Debatten",
    emoji: "💡",
    description: "Du er skarp, nysgerrig og elsker at diskutere idéer. Du kan se sammenhænge andre ikke ser og udfordrer status quo.",
    strengths: ["Skarp", "Innovativ", "Nysgerrig", "Karismatisk"],
    careers: ["Iværksætter", "Advokat", "Ingeniør", "Strateg"]
  },
  ESTJ: {
    type: "ESTJ",
    title: "Direktøren",
    emoji: "👔",
    description: "Du er organiseret, beslutsom og en naturlig leder. Du kan godt lide at få ting gjort og at organisere mennesker.",
    strengths: ["Organiseret", "Beslutsom", "Dedikeret", "Praktisk"],
    careers: ["Leder", "Dommer", "Lærer", "Projektleder"]
  },
  ESFJ: {
    type: "ESFJ",
    title: "Værten",
    emoji: "🤝",
    description: "Du er varm, hjælpsom og elsker at tage dig af andre. Du skaber harmoni og sørger for at alle har det godt.",
    strengths: ["Omsorgsfuld", "Social", "Loyal", "Organiseret"],
    careers: ["Sygeplejerske", "Lærer", "Eventplanlægger", "HR"]
  },
  ENFJ: {
    type: "ENFJ",
    title: "Læreren",
    emoji: "✨",
    description: "Du er karismatisk, inspirerende og hjælper gerne andre med at vokse. Du er en naturlig leder der får folk til at føle sig værdsat.",
    strengths: ["Karismatisk", "Empatisk", "Inspirerende", "Organiseret"],
    careers: ["Lærer", "Coach", "Politiker", "HR-chef"]
  },
  ENTJ: {
    type: "ENTJ",
    title: "Kommandanten",
    emoji: "👑",
    description: "Du er selvsikker, strategisk og en born leder. Du kan se det store billede og er god til at motivere andre til at nå fælles mål.",
    strengths: ["Strategisk", "Selvsikker", "Effektiv", "Visionær"],
    careers: ["CEO", "Advokat", "Iværksætter", "Projektleder"]
  }
};
