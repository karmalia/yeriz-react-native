import { GET_COMPANY_FOOD } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import DummyData from "./dummyCompanyFoods.json";
import { CompanyFood } from "./companies.types";

const fetchCompanies = async (id: string): Promise<CompanyFood[]> => {
  //   const response = await api.get("/Companies/getall");
  //   return response.data;
  return DummyData;
};

export const useGetCompanyFoods = (id: string) => {
  return useQuery({
    queryKey: [GET_COMPANY_FOOD],
    queryFn: () => fetchCompanies(id),
  });
};
