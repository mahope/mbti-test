import { personalities } from "@/lib/personalities";
import Link from "next/link";

export default function TyperPage() {
  const personalityList = Object.values(personalities);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-block text-indigo-600 hover:text-indigo-700 font-medium mb-4"
          >
            ← Tilbage til testen
          </Link>
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            De 16 Personlighedstyper
          </h1>
          <p className="text-gray-600">
            Udforsk alle MBTI personlighedstyper og find ud af hvilken der passer bedst til dig
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-16">
          {personalityList.map((personality) => (
            <div
              key={personality.type}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{personality.emoji}</div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {personality.title}
                </h2>
                <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-bold text-sm">
                  {personality.type}
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {personality.description}
              </p>

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-800 mb-2">Styrker:</h3>
                <div className="flex flex-wrap gap-1">
                  {personality.strengths.map((strength, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">Karrierer:</h3>
                <div className="flex flex-wrap gap-1">
                  {personality.careers.slice(0, 3).map((career, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
