import { GET_SEARCH_COMPANIES } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

const exampleData = {
  location: {
    latitude: 38.423734,
    longitude: 27.142826,
    distance: 8000,
  },
  searchTerm: "",
  filters: {
    cuisineCategoryIds: [8, 9],
  },
};

const fetchFilters = async (options): Promise<Company[]> => {
  console.log("options", options);
  const response = await api.post(
    "/Companies/filter-companies",
    options || exampleData
  );
  return response.data;
};

type TSearchOptions = {
  filters: {
    cuisineCategoryIds: number[] | null;
  };
  searchTerm?: string;
  location: {
    latitude: number;
    longitude: number;
    distance: number;
  };
};

export const useSearchedCompanies = (
  filterOptions: TSearchOptions,
  pageKey: string = ""
) => {
  console.log("filterOptions", filterOptions);
  console.log("pageKey", pageKey);
  if (!filterOptions.searchTerm)
    return useQuery({
      queryKey: [GET_SEARCH_COMPANIES, pageKey],
      queryFn: () => fetchFilters(filterOptions),
    });

  if (filterOptions.searchTerm && filterOptions.searchTerm.length > 3) {
    return useQuery({
      queryKey: [GET_SEARCH_COMPANIES, pageKey],
      queryFn: () => fetchFilters(filterOptions),
      enabled: true,
    });
  } else {
    return useQuery({
      queryKey: [GET_SEARCH_COMPANIES, pageKey],
      queryFn: () => fetchFilters(filterOptions),
      enabled: false,
    });
  }
};
