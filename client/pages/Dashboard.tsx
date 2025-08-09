import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Car,
  HelpCircle,
  LogOut,
  User,
  Star,
  Shield,
  MapPin,
  TrendingUp,
  Users,
  Route,
  Phone,
  CloudRain,
} from "lucide-react";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");

  const summaryCards = [
    {
      id: 1,
      title: "Ride Stats",
      subtitle: "Existing or New Joinee",
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-yatri-dark-500">Rides Completed</span>
            <span className="font-bold text-yatri-dark-500">47</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-yatri-yellow-500 h-2 rounded-full"
              style={{ width: "78%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-600">78% to next milestone</p>
        </div>
      ),
      icon: <TrendingUp className="w-6 h-6 text-yatri-yellow-500" />,
    },
    {
      id: 2,
      title: "Common Routes",
      subtitle: "Daily used routes",
      content: (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-yatri-teal-500" />
            <span>Home → Office</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-yatri-teal-500" />
            <span>Mall → Airport</span>
          </div>
          <div className="w-full h-20 bg-gradient-to-br from-yatri-teal-50 to-yatri-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-xs text-gray-500">Interactive mini-map</div>
          </div>
        </div>
      ),
      icon: <Route className="w-6 h-6 text-yatri-teal-500" />,
    },
    {
      id: 3,
      title: "Safety Features",
      subtitle: "Your protection matters",
      content: (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-pink-50 p-3 rounded-lg text-center">
            <Users className="w-5 h-5 text-pink-500 mx-auto mb-1" />
            <p className="text-xs text-pink-700">Women Safety</p>
          </div>
          <div className="bg-red-50 p-3 rounded-lg text-center">
            <Phone className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <p className="text-xs text-red-700">SOS</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <CloudRain className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <p className="text-xs text-blue-700">Rainy Tips</p>
          </div>
        </div>
      ),
      icon: <Shield className="w-6 h-6 text-yatri-blue-500" />,
    },
    {
      id: 4,
      title: "Reviews & Ratings",
      subtitle: "Customer feedback",
      content: (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yatri-yellow-500 text-yatri-yellow-500"
                />
              ))}
            </div>
            <span className="font-bold text-yatri-dark-500">4.8</span>
          </div>
          <p className="text-sm text-gray-600">Average driver rating</p>
          <div className="text-xs text-yatri-teal-600 bg-yatri-teal-50 px-2 py-1 rounded">
            "Excellent service!" - Recent review
          </div>
        </div>
      ),
      icon: <Star className="w-6 h-6 text-yatri-yellow-500" />,
    },
  ];

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "rides", label: "Rides", icon: Car },
    { id: "support", label: "Support", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Navigation - 20% */}
      <div className="w-1/5 bg-white shadow-lg">
        <div className="p-6">
          {/* User Profile */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-yatri-yellow-500 to-yatri-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-yatri-dark-500">John Doe</h3>
            <p className="text-sm text-gray-500">Premium Member</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const linkPath =
                item.id === "home" ? "/dashboard" : `/${item.id}`;

              return (
                <Link
                  key={item.id}
                  to={linkPath}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-yatri-yellow-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Back to Home Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content Area - 60% */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-yatri-dark-500 mb-2">
              Welcome back, John!
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your rides today.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {summaryCards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-yatri-dark-500 group-hover:text-yatri-teal-500 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500">{card.subtitle}</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-yatri-yellow-50 transition-colors">
                    {card.icon}
                  </div>
                </div>
                {card.content}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/rides">
                <button className="w-full bg-yatri-yellow-500 hover:bg-yatri-yellow-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Book a Ride
                </button>
              </Link>
              <Link to="/support">
                <button className="w-full bg-yatri-teal-500 hover:bg-yatri-teal-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Get Support
                </button>
              </Link>
              <button className="w-full bg-white border-2 border-yatri-dark-500 text-yatri-dark-500 hover:bg-yatri-dark-500 hover:text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                View History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Stats Panel - 20% */}
      <div className="w-1/5 bg-white shadow-lg p-6">
        <h2 className="text-lg font-bold text-yatri-dark-500 mb-6">
          Quick Stats
        </h2>

        <div className="space-y-6">
          <div className="text-center p-4 bg-yatri-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yatri-yellow-600">47</div>
            <div className="text-sm text-yatri-dark-500">Total Rides</div>
          </div>

          <div className="text-center p-4 bg-yatri-teal-50 rounded-lg">
            <div className="text-2xl font-bold text-yatri-teal-600">₹2,340</div>
            <div className="text-sm text-yatri-dark-500">This Month</div>
          </div>

          <div className="text-center p-4 bg-yatri-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-yatri-blue-600">4.8★</div>
            <div className="text-sm text-yatri-dark-500">Avg Rating</div>
          </div>

          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">₹234</div>
            <div className="text-sm text-yatri-dark-500">Saved</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="font-semibold text-yatri-dark-500 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="text-sm p-3 bg-gray-50 rounded">
              <div className="font-medium">Ride to Airport</div>
              <div className="text-gray-500">2 hours ago</div>
            </div>
            <div className="text-sm p-3 bg-gray-50 rounded">
              <div className="font-medium">Mall Trip</div>
              <div className="text-gray-500">Yesterday</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
