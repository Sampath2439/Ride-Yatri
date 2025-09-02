import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  Car,
  Bike,
  Truck,
  Navigation,
  Calculator,
  Zap,
  User,
  Phone,
  Shield,
} from "lucide-react";

export default function Rides() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("car");
  const [distance, setDistance] = useState(12.5);
  const [estimatedTime, setEstimatedTime] = useState(25);

  const vehicleTypes = [
    {
      id: "bike",
      name: "Bike",
      icon: Bike,
      pricePerKm: 8,
      availableDrivers: 15,
      activeDrivers: 12,
      eta: "3-5 min",
    },
    {
      id: "car",
      name: "Car",
      icon: Car,
      pricePerKm: 12,
      availableDrivers: 8,
      activeDrivers: 6,
      eta: "5-8 min",
    },
    {
      id: "suv",
      name: "SUV",
      icon: Truck,
      pricePerKm: 18,
      availableDrivers: 4,
      activeDrivers: 3,
      eta: "8-12 min",
    },
  ];

  const availableDrivers = [
    {
      id: 1,
      name: "Rahul Kumar",
      rating: 4.8,
      totalRides: 1250,
      vehicleType: "car",
      vehicleNumber: "MH 12 AB 1234",
      distance: "2.1 km away",
      eta: "5 min",
      image: "RK",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4.9,
      totalRides: 890,
      vehicleType: "bike",
      vehicleNumber: "MH 14 CD 5678",
      distance: "1.5 km away",
      eta: "3 min",
      image: "PS",
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 4.7,
      totalRides: 2100,
      vehicleType: "suv",
      vehicleNumber: "MH 16 EF 9012",
      distance: "3.2 km away",
      eta: "8 min",
      image: "AS",
    },
    {
      id: 4,
      name: "Sneha Patel",
      rating: 4.9,
      totalRides: 1450,
      vehicleType: "car",
      vehicleNumber: "MH 18 GH 3456",
      distance: "1.8 km away",
      eta: "6 min",
      image: "SP",
    },
  ];

  const calculatePrice = () => {
    const selectedVehicleData = vehicleTypes.find(
      (v) => v.id === selectedVehicle,
    );
    const basePrice = distance * (selectedVehicleData?.pricePerKm || 12);
    const discount = basePrice * 0.1;
    return {
      base: basePrice,
      discount: discount,
      final: basePrice - discount,
    };
  };

  const price = calculatePrice();

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
            Book a Ride
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Booking Form */}
          <div className="space-y-6">
            {/* Location Inputs */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                Where to?
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-yatri-teal-500" />
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yatri-teal-500 focus:border-yatri-teal-500"
                  />
                </div>

                <div className="relative">
                  <Navigation className="absolute left-3 top-3 w-5 h-5 text-yatri-yellow-500" />
                  <input
                    type="text"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yatri-teal-500 focus:border-yatri-teal-500"
                  />
                </div>
              </div>

              {/* Trip Details */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center space-x-2">
                    <Navigation className="w-4 h-4 text-gray-500" />
                    <span>Distance: {distance} km</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>ETA: {estimatedTime} min</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                Choose Vehicle
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {vehicleTypes.map((vehicle) => {
                  const Icon = vehicle.icon;
                  return (
                    <div
                      key={vehicle.id}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedVehicle === vehicle.id
                          ? "border-yatri-teal-500 bg-yatri-teal-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-6 h-6 text-yatri-dark-500" />
                          <div>
                            <h3 className="font-semibold text-yatri-dark-500">
                              {vehicle.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              ₹{vehicle.pricePerKm}/km • ETA {vehicle.eta}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-yatri-dark-500">
                            {vehicle.availableDrivers} available
                          </div>
                          <div className="text-sm text-green-600">
                            {vehicle.activeDrivers} active now
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Estimate */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-yatri-dark-500 mb-4 flex items-center space-x-2">
                <Calculator className="w-5 h-5" />
                <span>Price Estimate</span>
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base fare ({distance} km)</span>
                  <span>₹{price.base.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span className="flex items-center space-x-2">
                    <span>Discount (10%)</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      DISCOUNT APPLIED
                    </span>
                  </span>
                  <span>-₹{price.discount.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold text-yatri-dark-500">
                  <span>Total</span>
                  <span>₹{price.final.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-yatri-yellow-500 hover:bg-yatri-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Book Ride Now</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Map and Driver Details */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                Route Preview
              </h2>
              <div className="w-full h-64 bg-gradient-to-br from-yatri-teal-50 to-yatri-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Google Maps</p>
                  <p className="text-sm text-gray-400">
                    Dynamic routing visualization
                  </p>
                </div>
              </div>
            </div>

            {/* Available Drivers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-yatri-dark-500 mb-4">
                Available Drivers
              </h2>

              <div className="space-y-4">
                {availableDrivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-yatri-teal-500 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Driver Avatar */}
                      <div className="w-12 h-12 bg-gradient-to-br from-yatri-yellow-500 to-yatri-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        {driver.image}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-yatri-dark-500">
                            {driver.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yatri-yellow-500 text-yatri-yellow-500" />
                            <span className="font-semibold">
                              {driver.rating}
                            </span>
                          </div>
                        </div>

                        <div className="text-sm text-gray-600 mt-1">
                          <p>
                            {driver.vehicleNumber} • {driver.totalRides} rides
                          </p>
                          <p className="text-yatri-teal-600">
                            {driver.distance} • Arrives in {driver.eta}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <button className="p-2 bg-yatri-teal-50 hover:bg-yatri-teal-100 rounded-lg transition-colors">
                          <Phone className="w-4 h-4 text-yatri-teal-500" />
                        </button>
                        <button className="p-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                          <Shield className="w-4 h-4 text-green-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Driver Stats Summary */}
              <div className="mt-6 p-4 bg-yatri-blue-50 rounded-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yatri-blue-600">
                      31
                    </div>
                    <div className="text-sm text-yatri-dark-500">
                      Total Available
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">21</div>
                    <div className="text-sm text-yatri-dark-500">
                      Active Now
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yatri-yellow-600">
                      4.8★
                    </div>
                    <div className="text-sm text-yatri-dark-500">
                      Avg Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
