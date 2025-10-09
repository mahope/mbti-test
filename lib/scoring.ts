import { questions } from "./questions";

type Answer = {
  questionId: number;
  value: number;
};

export function calculatePersonalityType(answers: Answer[]): string {
  // Initialize scores for each dimension
  const scores = {
    EI: 0, // Extrovert vs Introvert (negative = E, positive = I)
    SN: 0, // Sensing vs iNtuition (negative = S, positive = N)
    TF: 0, // Thinking vs Feeling (negative = T, positive = F)
    JP: 0  // Judging vs Perceiving (negative = J, positive = P)
  };

  // Sum up scores for each dimension
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      scores[question.dimension] += answer.value;
    }
  });

  // Determine personality type based on scores
  let personalityType = "";

  // E vs I: negative sum means Extrovert
  personalityType += scores.EI >= 0 ? "I" : "E";

  // S vs N: negative sum means Sensing
  personalityType += scores.SN >= 0 ? "N" : "S";

  // T vs F: negative sum means Thinking
  personalityType += scores.TF >= 0 ? "F" : "T";

  // J vs P: negative sum means Judging
  personalityType += scores.JP >= 0 ? "P" : "J";

  return personalityType;
}

export function getPersonalityScores(answers: Answer[]) {
  const scores = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  };

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      scores[question.dimension] += answer.value;
    }
  });

  return {
    extraversion: Math.max(0, -scores.EI),
    introversion: Math.max(0, scores.EI),
    sensing: Math.max(0, -scores.SN),
    intuition: Math.max(0, scores.SN),
    thinking: Math.max(0, -scores.TF),
    feeling: Math.max(0, scores.TF),
    judging: Math.max(0, -scores.JP),
    perceiving: Math.max(0, scores.JP)
  };
}
