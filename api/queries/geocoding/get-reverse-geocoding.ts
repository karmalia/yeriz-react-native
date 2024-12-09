import { GET_AUTO_COMPLETE, GET_REVERSE_GEOLOCATION } from "@/api/constants";
import api from "@/api/http";
import { ICompany } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchReverseGeolocation = async (
  lat: number,
  long: number
): Promise<any> => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_PLACES_API; // Replace with your actual API key
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;

  if (!apiKey) {
    throw new Error("Session token and API key are required");
  }

  try {
    const response = await axios.get(url);
    //İnput and api key needed

    return response;
  } catch (error) {
    return error;
  }
};

export const useGetReverseGeolocation = (lat: number, long: number) => {
  return useQuery({
    queryKey: [GET_REVERSE_GEOLOCATION, lat, long],
    queryFn: () => fetchReverseGeolocation(lat, long),
  });
};
