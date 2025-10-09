"use client";

import { useState } from "react";
import { Quiz } from "@/components/Quiz";
import { Result } from "@/components/Result";
import { calculatePersonalityType } from "@/lib/scoring";

type Answer = {
  questionId: number;
  value: number;
};

type AppState = "start" | "quiz" | "result";

export default function Home() {
  const [state, setState] = useState<AppState>("start");
  const [personalityType, setPersonalityType] = useState<string>("");

  const handleStart = () => {
    setState("quiz");
  };

  const handleComplete = (answers: Answer[]) => {
    const result = calculatePersonalityType(answers);
    setPersonalityType(result);
    setState("result");
  };

  const handleRestart = () => {
    setPersonalityType("");
    setState("start");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 overflow-hidden">
      {state === "start" && (
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center mb-4 text-indigo-600">
            MBTI Personlighedstest
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Velkommen til personlighedstesten! Find ud af hvilken af de 16 personlighedstyper du er.
          </p>
          <p className="text-center text-gray-500 text-sm mb-6">
            Det tager kun 2-3 minutter at svare på 12 spørgsmål.
          </p>
          <button
            onClick={handleStart}
            className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-3"
          >
            Start testen
          </button>
          <a
            href="/typer"
            className="block text-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            Se alle 16 personlighedstyper →
          </a>
        </div>
      )}

      {state === "quiz" && <Quiz onComplete={handleComplete} onRestart={handleRestart} />}

      {state === "result" && (
        <Result personalityType={personalityType} onRestart={handleRestart} />
      )}
    </div>
  );
}
