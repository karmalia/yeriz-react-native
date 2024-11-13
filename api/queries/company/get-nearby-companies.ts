import { GET_ALL_COMPANIES, GET_NEARBY_COMPANIES } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

const fetchCompanies = async (
  lat: number,
  long: number,
  distance: number
): Promise<Company[] | null> => {
  try {
    const response = await api.get(
      `/Company/get-nearby-companies?latitude=${lat}&longitude=${long}&distance=${
        distance * 1000
      }`
    );
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

export const useGetNearbyCompanies = (
  lat: number,
  long: number,
  distance: number
) => {
  return useQuery({
    queryKey: [GET_NEARBY_COMPANIES, lat, long, distance],
    queryFn: () => fetchCompanies(lat, long, distance),
  });
};
