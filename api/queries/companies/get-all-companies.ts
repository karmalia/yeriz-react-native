import { GET_ALL_COMPANIES } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

const fetchCompanies = async (): Promise<Company[]> => {
  const response = await api.get("/Companies/getall");
  return response.data;
};

export const useGetAllCompanies = () => {
  return useQuery({ queryKey: [GET_ALL_COMPANIES], queryFn: fetchCompanies });
};
