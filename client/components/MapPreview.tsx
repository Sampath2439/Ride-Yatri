import { useMapPreview } from '@/hooks/use-map-preview';
import { MapPin } from 'lucide-react';

interface MapPreviewProps {
  location: string;
  type: 'source' | 'destination';
}

export function MapPreview({ location, type }: MapPreviewProps) {
  const { imageUrl, error, loading, placeDetails } = useMapPreview(location);

  console.log(`MapPreview render - type: ${type}, location: ${location}`, { imageUrl, error, loading });

  if (loading) {
    return (
      <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-yatri-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-gray-500">Loading map preview for {type}...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full bg-red-50 flex items-center justify-center">
        <div className="text-center p-4">
          <MapPin className="w-8 h-8 text-red-500 mx-auto mb-2" />
          <p className="text-red-500 font-medium mb-1">Failed to load map preview</p>
          <p className="text-sm text-red-400">{error}</p>
          <p className="text-xs text-gray-500 mt-2">Location: {location}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt={`${type === 'source' ? 'Pickup' : 'Destination'} location preview`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-30">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <MapPin className={`w-5 h-5 ${type === 'source' ? 'text-yatri-teal-500' : 'text-red-500'}`} />
                  <span className="text-sm font-medium text-gray-800">
                    {type === 'source' ? 'Pickup Location' : 'Destination'}
                  </span>
                </div>
                {placeDetails ? (
                  <>
                    <p className="text-sm text-gray-800 font-medium">{placeDetails.name}</p>
                    <p className="text-xs text-gray-500">{placeDetails.formatted_address}</p>
                  </>
                ) : (
                  <p className="text-xs text-gray-500">{location}</p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Enter a valid location</p>
            <p className="text-xs text-gray-400 mt-1">{location || 'No location specified'}</p>
          </div>
        </div>
      )}
    </div>
  );
}
