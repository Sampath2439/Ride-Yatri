import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageSquare,
  AlertTriangle,
  Shield,
  Phone,
  CloudRain,
  Star,
  ThumbsUp,
  Upload,
  Users,
  PhoneCall,
  Heart,
  Umbrella,
  Camera,
  FileText,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

export default function Support() {
  const [activeTab, setActiveTab] = useState("feedback");
  const [complaintCategory, setComplaintCategory] = useState("ride-quality");
  const [complaintText, setComplaintText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const feedbackData = [
    {
      id: 1,
      customerName: "Priya Sharma",
      date: "Dec 15, 2024",
      rideId: "YTR-2024-1215",
      rating: 5,
      comment:
        "Excellent service! Driver was very professional and the ride was smooth.",
      likes: 12,
    },
    {
      id: 2,
      customerName: "Rahul Kumar",
      date: "Dec 14, 2024",
      rideId: "YTR-2024-1214",
      rating: 4,
      comment:
        "Good experience overall. Driver arrived on time and vehicle was clean.",
      likes: 8,
    },
    {
      id: 3,
      customerName: "Sneha Patel",
      date: "Dec 13, 2024",
      rideId: "YTR-2024-1213",
      rating: 5,
      comment:
        "Amazing app! Very user-friendly and the safety features are great.",
      likes: 15,
    },
    {
      id: 4,
      customerName: "Amit Singh",
      date: "Dec 12, 2024",
      rideId: "YTR-2024-1212",
      rating: 4,
      comment: "Quick booking and fair pricing. Will definitely use again.",
      likes: 6,
    },
  ];

  const complaintCategories = [
    { value: "ride-quality", label: "Ride Quality" },
    { value: "safety", label: "Safety Issues" },
    { value: "payment", label: "Payment Issues" },
    { value: "other", label: "Other" },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yatri-yellow-500 text-yatri-yellow-500"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 text-yatri-dark-500 hover:text-yatri-teal-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold text-yatri-dark-500">
            Support & Safety
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Support Tabs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setActiveTab("feedback")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "feedback"
                      ? "bg-yatri-teal-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Customer Feedback</span>
                </button>
                <button
                  onClick={() => setActiveTab("complaint")}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "complaint"
                      ? "bg-yatri-teal-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <AlertTriangle className="w-5 h-5" />
                  <span>Raise Complaint</span>
                </button>
              </div>

              {/* Feedback Tab Content */}
              {activeTab === "feedback" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                    Customer Feedback
                  </h2>

                  {/* New Feedback Form */}
                  <div className="p-4 bg-yatri-teal-50 rounded-lg border-2 border-dashed border-yatri-teal-300">
                    <h3 className="font-semibold text-yatri-dark-500 mb-3">
                      Share Your Experience
                    </h3>
                    <div className="space-y-3">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-6 h-6 text-gray-300 hover:text-yatri-yellow-500 cursor-pointer"
                          />
                        ))}
                      </div>
                      <textarea
                        placeholder="Tell us about your ride experience..."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yatri-teal-500 focus:border-yatri-teal-500"
                        rows={3}
                      />
                      <button className="bg-yatri-teal-500 hover:bg-yatri-teal-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Submit Feedback</span>
                      </button>
                    </div>
                  </div>

                  {/* Feedback List */}
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {feedbackData.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="p-4 bg-white border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-yatri-dark-500">
                              {feedback.customerName}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {feedback.date} • Ride ID: {feedback.rideId}
                            </p>
                          </div>
                          <div className="flex space-x-1">
                            {renderStars(feedback.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{feedback.comment}</p>
                        <button className="flex items-center space-x-2 text-yatri-teal-500 hover:text-yatri-teal-600">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{feedback.likes} likes</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complaint Tab Content */}
              {activeTab === "complaint" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                    Raise a Complaint
                  </h2>

                  <div className="space-y-4">
                    {/* Category Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Complaint Category
                      </label>
                      <select
                        value={complaintCategory}
                        onChange={(e) => setComplaintCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yatri-teal-500 focus:border-yatri-teal-500"
                      >
                        {complaintCategories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Complaint Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Describe Your Issue
                      </label>
                      <textarea
                        placeholder="Please provide detailed information about your complaint..."
                        value={complaintText}
                        onChange={(e) => setComplaintText(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yatri-teal-500 focus:border-yatri-teal-500"
                        rows={5}
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Proof/Screenshots (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yatri-teal-500 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">
                          Click to upload files or drag and drop
                        </p>
                        <p className="text-sm text-gray-400">
                          PNG, JPG, PDF up to 10MB
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Submit Complaint</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Safety Features */}
          <div className="space-y-6">
            {/* Women Safety */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Users className="w-6 h-6 text-pink-500" />
                </div>
                <h2 className="text-xl font-bold text-yatri-dark-500">
                  Women Ride Safety
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <Shield className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-700">
                    Female driver preference
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-700">
                    Safety companion feature
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <Camera className="w-5 h-5 text-pink-500" />
                  <span className="text-sm text-gray-700">
                    Live ride tracking
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Enable Women Safety Mode
              </button>
            </div>

            {/* SOS Emergency */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-red-100 rounded-full animate-pulse">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-xl font-bold text-yatri-dark-500">
                  Emergency SOS
                </h2>
              </div>

              <p className="text-gray-700 mb-4 text-sm">
                In case of emergency, press the SOS button to immediately
                contact emergency services and share your location.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <PhoneCall className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-700">
                    Instant emergency call
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <Shield className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-700">
                    Location sharing with contacts
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-lg transition-colors shadow-lg">
                🚨 EMERGENCY SOS
              </button>
            </div>

            {/* Rainy Season Safety */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <CloudRain className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold text-yatri-dark-500">
                  Rainy Season Safety
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Umbrella className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-700">
                    Weather-aware routing
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-700">
                    Extended arrival times
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-700">
                    Verified covered vehicles
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Rain Alert:</strong> Heavy rainfall expected in your
                  area. Consider using covered vehicles and allow extra travel
                  time.
                </p>
              </div>
            </div>

            {/* Additional Help */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                Additional Help
              </h2>

              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:border-yatri-teal-500 transition-colors">
                  <FileText className="w-5 h-5 text-yatri-teal-500" />
                  <span>FAQ & Help Center</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:border-yatri-teal-500 transition-colors">
                  <PhoneCall className="w-5 h-5 text-yatri-teal-500" />
                  <span>Call Customer Support</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:border-yatri-teal-500 transition-colors">
                  <MessageSquare className="w-5 h-5 text-yatri-teal-500" />
                  <span>Live Chat Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
