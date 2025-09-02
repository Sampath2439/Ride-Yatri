import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Car, MapPin, Clock, IndianRupee, Star } from "lucide-react";

type Ride = {
  id: string;
  date: string; // ISO date
  from: string;
  to: string;
  distanceKm: number;
  durationMin: number;
  fare: number;
  driver: string;
  rating?: number;
  status: "completed" | "cancelled" | "ongoing";
};

export default function History() {
  const rides = useMemo<Ride[]>(
    () => [
      {
        id: "YTR-2025-0301-001",
        date: "2025-03-01T18:45:00Z",
        from: "DLF Cyber City, Gurgaon",
        to: "Connaught Place, New Delhi",
        distanceKm: 28.4,
        durationMin: 54,
        fare: 532,
        driver: "Anil Verma",
        rating: 5,
        status: "completed",
      },
      {
        id: "YTR-2025-0226-004",
        date: "2025-02-26T09:20:00Z",
        from: "HSR Layout, Bengaluru",
        to: "Kempegowda Intl. Airport",
        distanceKm: 41.2,
        durationMin: 75,
        fare: 865,
        driver: "Kiran Kumar",
        rating: 4,
        status: "completed",
      },
      {
        id: "YTR-2025-0218-013",
        date: "2025-02-18T22:05:00Z",
        from: "Hinjewadi Phase 2, Pune",
        to: "MG Road, Pune",
        distanceKm: 12.6,
        durationMin: 29,
        fare: 229,
        driver: "Ravi Patil",
        rating: 5,
        status: "completed",
      },
      {
        id: "YTR-2025-0210-021",
        date: "2025-02-10T15:10:00Z",
        from: "Banjara Hills, Hyderabad",
        to: "Hitech City, Hyderabad",
        distanceKm: 9.1,
        durationMin: 24,
        fare: 188,
        driver: "Syed Imran",
        rating: 4,
        status: "completed",
      },
      {
        id: "YTR-2025-0202-031",
        date: "2025-02-02T07:30:00Z",
        from: "Salt Lake Sector V, Kolkata",
        to: "Howrah Junction",
        distanceKm: 13.7,
        durationMin: 36,
        fare: 256,
        driver: "Debasish Roy",
        status: "cancelled",
      },
    ],
    [],
  );

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
          <h1 className="text-2xl font-bold text-yatri-dark-500">Ride History</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-yatri-dark-500">Your past rides</h2>
              <p className="text-sm text-gray-500">Showing {rides.length} records</p>
            </div>
          </div>

          <div className="divide-y">
            {rides.map((r) => (
              <div key={r.id} className="py-5 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yatri-yellow-50 rounded-lg border border-yatri-yellow-200">
                      <Car className="w-5 h-5 text-yatri-yellow-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-yatri-dark-500">{new Date(r.date).toLocaleString()}</div>
                      <div className="text-xs text-gray-500">{r.id}</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-yatri-dark-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-yatri-teal-500" />
                      <span>{r.from}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>{r.to}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>{r.durationMin} min</span>
                  </div>
                  <div className="text-sm text-gray-700">{r.distanceKm.toFixed(1)} km</div>
                  <div className="flex items-center gap-1 font-semibold text-yatri-dark-500">
                    <IndianRupee className="w-4 h-4" />
                    <span>{r.fare}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-3">
                  <div className="text-sm text-gray-700">{r.driver}</div>
                  {r.status === "completed" ? (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <span className="text-sm font-medium">{r.rating ?? 5}.0</span>
                    </div>
                  ) : (
                    <span className="text-xs px-2 py-1 rounded bg-red-50 text-red-600 border border-red-200">Cancelled</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


