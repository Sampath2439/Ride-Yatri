import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yatri-blue-500 via-yatri-blue-500 to-yatri-yellow-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Animated clouds */}
        <div className="absolute top-10 left-10 w-20 h-12 bg-white/10 rounded-full animate-pulse" />
        <div
          className="absolute top-32 right-20 w-16 h-8 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-20 left-1/3 w-24 h-10 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* City skyline silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32">
          <svg viewBox="0 0 1200 200" className="w-full h-full fill-black/20">
            <rect x="0" y="120" width="60" height="80" />
            <rect x="70" y="100" width="50" height="100" />
            <rect x="130" y="140" width="40" height="60" />
            <rect x="180" y="90" width="55" height="110" />
            <rect x="245" y="130" width="45" height="70" />
            <rect x="300" y="110" width="60" height="90" />
            <rect x="370" y="80" width="50" height="120" />
            <rect x="430" y="125" width="40" height="75" />
            <rect x="480" y="95" width="55" height="105" />
            <rect x="545" y="135" width="45" height="65" />
            <rect x="600" y="105" width="60" height="95" />
            <rect x="670" y="115" width="50" height="85" />
            <rect x="730" y="85" width="55" height="115" />
            <rect x="795" y="140" width="40" height="60" />
            <rect x="845" y="100" width="50" height="100" />
            <rect x="905" y="120" width="60" height="80" />
            <rect x="975" y="90" width="55" height="110" />
            <rect x="1040" y="130" width="45" height="70" />
            <rect x="1095" y="110" width="50" height="90" />
          </svg>
        </div>

        {/* Vehicle illustrations */}
        <div className="absolute top-1/3 left-20 transform -translate-y-1/2">
          <div
            className="w-16 h-16 relative animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <svg viewBox="0 0 64 64" className="w-full h-full fill-white/30">
              {/* Simple bike illustration */}
              <circle
                cx="16"
                cy="48"
                r="12"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="12"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M16 48 L32 32 L48 48 M32 32 L32 20 M28 20 L36 20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="32" cy="16" r="6" />
            </svg>
          </div>
        </div>

        <div className="absolute top-2/3 right-32 transform -translate-y-1/2">
          <div
            className="w-20 h-12 relative animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <svg viewBox="0 0 80 48" className="w-full h-full fill-white/30">
              {/* Simple car illustration */}
              <rect x="8" y="24" width="64" height="16" rx="4" />
              <rect x="16" y="16" width="48" height="16" rx="8" />
              <circle cx="20" cy="40" r="6" />
              <circle cx="60" cy="40" r="6" />
              <rect x="24" y="20" width="12" height="8" fill="white/50" />
              <rect x="44" y="20" width="12" height="8" fill="white/50" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Animated logo */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F4A261" />
                    <stop offset="100%" stopColor="#2A9D8F" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="35" fill="url(#logoGradient)" />
                <text
                  x="40"
                  y="48"
                  textAnchor="middle"
                  className="fill-white font-bold text-xl"
                >
                  Y
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Brand name */}
        <div
          className={`mb-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center tracking-tight">
            Yatri
          </h1>
        </div>

        {/* Tagline */}
        <div
          className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "0.9s" }}
        >
          <p className="text-xl md:text-2xl text-white/90 text-center font-medium">
            Your Ride, Your Way.
          </p>
        </div>

        {/* Google Sign-in Button */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <Link to="/dashboard">
            <button className="group bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 text-lg min-w-[280px] justify-center hover:glow">
              <span>Enter Dashboard</span>
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex space-x-8 text-white/70 text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Support
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
