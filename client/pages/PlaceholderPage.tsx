import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestedPrompt: string;
}

export default function PlaceholderPage({
  title,
  description,
  suggestedPrompt,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yatri-blue-50 to-yatri-yellow-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm p-4">
        <Link
          to="/dashboard"
          className="flex items-center space-x-2 text-yatri-dark-500 hover:text-yatri-teal-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-md">
          {/* Construction Icon */}
          <div className="w-20 h-20 bg-yatri-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-yatri-dark-500 mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

          {/* Suggestion Box */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yatri-teal-500">
            <h3 className="font-semibold text-yatri-dark-500 mb-2">
              Want this page built?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Continue prompting to have this section implemented:
            </p>
            <div className="bg-gray-50 p-3 rounded text-left">
              <code className="text-sm text-yatri-dark-500">
                "{suggestedPrompt}"
              </code>
            </div>
          </div>

          {/* Action Button */}
          <Link to="/dashboard">
            <button className="mt-6 bg-yatri-yellow-500 hover:bg-yatri-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md">
              Return to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
