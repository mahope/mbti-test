"use client";

import { useState } from "react";
import { questions, type Question } from "@/lib/questions";
import { Progress } from "@/components/Progress";

type Answer = {
  questionId: number;
  value: number;
};

type QuizProps = {
  onComplete: (answers: Answer[]) => void;
  onRestart: () => void;
};

export function Quiz({ onComplete, onRestart }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = [
      ...answers,
      { questionId: question.id, value }
    ];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto max-h-[calc(100vh-8rem)] overflow-y-auto">
      <Progress value={progress} className="mb-6" />

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Spørgsmål {currentQuestion + 1} af {questions.length}
          </span>
          <button
            onClick={onRestart}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Start forfra
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left bg-gray-50 hover:bg-indigo-50 hover:border-indigo-300 border-2 border-gray-200 rounded-lg transition-all"
            >
              {option.label}
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="mt-6 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Tilbage
          </button>
        )}
      </div>
    </div>
  );
}
