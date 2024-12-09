import { GET_GEOLOCATION } from "@/api/constants";
import api from "@/api/http";
import { ICompany } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

//write the an interface for the response

export interface ILocation {
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[];
  formatted_address: string;
  geometry: {
    bounds: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  place_id: string;
  types: string[];
}
interface ILocationResponse {
  results: ILocation[];
}

const fetchLocationById = async (
  placeId: string
): Promise<ILocationResponse> => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_PLACES_API; // Replace with your actual API key
  const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${apiKey}`;
  console.log("url", url);
  if (!apiKey) {
    throw new Error("API key is required");
  }

  try {
    const response: AxiosResponse<ILocationResponse> = await axios.get(url);
    //İnput and api key needed

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch location: ${error}`);
  }
};

export const useGetLocationById = (placeId: string) => {
  console.log("useGetLocationById placeId", placeId);
  return useQuery({
    queryKey: [GET_GEOLOCATION, placeId],
    queryFn: () => fetchLocationById(placeId),
    enabled: placeId.length > 0,
  });
};
