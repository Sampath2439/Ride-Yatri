import { useState, useEffect } from 'react';

const RAPID_API_KEY = '409abf1951mshc3f5fed9f1c0117p105ae4jsnc51a5db0a5cc';
const RAPID_API_HOST = 'google-map-places.p.rapidapi.com';

interface PlaceDetails {
  location: {
    lat: number;
    lng: number;
  };
  formatted_address: string;
  name: string;
}

export function useMapPreview(location: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);

  useEffect(() => {
    if (!location) return;

    let mounted = true;
    let objectUrl: string | null = null;

    const fetchLocationDetails = async () => {
      if (!mounted) return;
      setLoading(true);
      setError(null);

      try {
        // First, get place details from RapidAPI
        const placeUrl = `https://google-map-places.p.rapidapi.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
          location
        )}&inputtype=textquery&fields=formatted_address,name,geometry&language=en`;

        const placeResponse = await fetch(placeUrl, {
          headers: {
            'x-rapidapi-host': RAPID_API_HOST,
            'x-rapidapi-key': RAPID_API_KEY,
          },
        });

        if (!placeResponse.ok) {
          throw new Error('Failed to fetch location details');
        }

        const placeData = await placeResponse.json();

        if (!placeData.candidates || placeData.candidates.length === 0) {
          throw new Error('Location not found');
        }

        const place = placeData.candidates[0];
        const details = {
          location: place.geometry.location,
          formatted_address: place.formatted_address || place.name,
          name: place.name,
        };
        
        if (!mounted) return;
        setPlaceDetails(details);

        // Get static map image from RapidAPI
        const mapRequestUrl = `https://google-map-places.p.rapidapi.com/maps/api/staticmap?center=${details.location.lat},${details.location.lng}&zoom=14&size=600x400&scale=2&maptype=roadmap&markers=color:red%7C${details.location.lat},${details.location.lng}`;
        
        const mapResponse = await fetch(mapRequestUrl, {
          headers: {
            'x-rapidapi-host': RAPID_API_HOST,
            'x-rapidapi-key': RAPID_API_KEY,
          },
        });

        if (!mapResponse.ok) {
          throw new Error('Failed to fetch map image');
        }

        const mapBlob = await mapResponse.blob();
        if (!mounted) return;

        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
        
        objectUrl = URL.createObjectURL(mapBlob);
        setImageUrl(objectUrl);
      } catch (err) {
        console.error('Map preview error:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load location preview');
          setImageUrl(null);
          setPlaceDetails(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchLocationDetails();

    return () => {
      mounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [location]);

  return { 
    imageUrl, 
    error, 
    loading,
    placeDetails 
  };
}
