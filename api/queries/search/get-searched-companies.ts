import { GET_SEARCH_COMPANIES } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

const fetchFilters = async (options): Promise<Company[]> => {
  console.log("Fetching Data: Fetch Filters", options);
  const response = await api.post("/Companies/filter-companies", options);
  console.log("response", response.data);
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

  if (filterOptions.searchTerm && filterOptions.searchTerm.length > 2) {
    return useQuery({
      queryKey: [GET_SEARCH_COMPANIES, pageKey, filterOptions.searchTerm],
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