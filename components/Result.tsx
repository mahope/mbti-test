"use client";

import { personalities } from "@/lib/personalities";

type ResultProps = {
  personalityType: string;
  onRestart: () => void;
};

export function Result({ personalityType, onRestart }: ResultProps) {
  const personality = personalities[personalityType];

  if (!personality) {
    return (
      <div className="text-center">
        <p className="text-red-600 mb-4">Der skete en fejl. Prøv venligst igen.</p>
        <button
          onClick={onRestart}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Start forfra
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{personality.emoji}</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {personality.title}
          </h2>
          <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold text-lg">
            {personality.type}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {personality.description}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Dine styrker:
          </h3>
          <div className="flex flex-wrap gap-2">
            {personality.strengths.map((strength, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Passende karrierer:
          </h3>
          <div className="flex flex-wrap gap-2">
            {personality.careers.map((career, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <button
            onClick={onRestart}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Tag testen igen
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `Jeg er en ${personality.title}!`,
                  text: `Jeg tog MBTI testen og fik ${personality.type} - ${personality.title}!`,
                });
              }
            }}
            className="flex-1 bg-purple-100 text-purple-700 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
          >
            Del resultat
          </button>
        </div>

        <a
          href="/typer"
          className="block text-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Se alle 16 personlighedstyper →
        </a>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Husk: Dette er bare for sjov! Alle personlighedstyper er lige gode.</p>
      </div>
    </div>
  );
}
