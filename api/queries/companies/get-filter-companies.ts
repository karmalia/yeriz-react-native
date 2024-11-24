import { GET_ALL_COMPANIES } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

type TFilterOptions = {
  location: {
    latitude: number;
    longitude: number;
    distance: number;
  };
  filters: {
    cuisineCategoryIds: string[];
  };
};

const fetchCompanies = async (): Promise<Company[]> => {
  const response = await api.post("/Companies/filter", {
    location: {
      latitude: 27.142826,
      longitude: 38.44261,
      distance: 8000,
    },
    filters: {
      cuisineCategoryIds: [],
    },
  });
  return response.data;
};

export const useGetFilteredCompanies = (filterOptions: TFilterOptions) => {
  return useQuery({ queryKey: [GET_ALL_COMPANIES], queryFn: fetchCompanies });
};
