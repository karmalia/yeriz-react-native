import { GET_ALL_COMPANIES, GET_COMPANY_BYID } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

const fetchCompanies = async (id: string): Promise<Company[]> => {
  const response = await api.get("/Company/getbyid/" + id);
  return response.data;
};

export const useGetCompanyById = (id: string) => {
  return useQuery({
    queryKey: [GET_COMPANY_BYID],
    queryFn: () => fetchCompanies(id),
  });
};
