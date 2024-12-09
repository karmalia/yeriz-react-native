import { GET_AUTO_COMPLETE } from "@/api/constants";
import api from "@/api/http";
import { ICompany, ISuggestion } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAutoComplete = async (
  input: string,
  sessionToken: string | null
): Promise<{
  suggestions: ISuggestion[];
}> => {
  const url = "https://places.googleapis.com/v1/places:autocomplete";
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_PLACES_API; // Replace with your actual API key

  if (!sessionToken || !apiKey) {
    throw new Error("Session token and API key are required");
  }

  const payload = {
    input,
    sessionToken,
    locationBias: {
      circle: {
        center: {
          latitude: 38.4192,
          longitude: 27.1287,
        },
        radius: 50000.0,
      },
    },
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
      },
    });
    //İnput and api key needed
    console.log("response", response);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const useGetAutoComplete = (
  input: string,
  sessionToken: string | null
) => {
  return useQuery({
    queryKey: [GET_AUTO_COMPLETE, input],
    queryFn: () => fetchAutoComplete(input, sessionToken),
    enabled: input.length > 3,
  });
};
