import { GET_COMPANY_COMMENTS } from "@/api/constants";
import api from "@/api/http";
import { ICompany, ICompanyComment } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import dummyComments from "./dummyCompanyComments.json";

const fetchCompanyComments = async (companyId): Promise<ICompanyComment[]> => {
  //   const response = await api.get("/Companies/getall");
  //   return response.data;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyComments);
    }, 500);
  });
};

export const useGetCompanyComments = (companyId: string) => {
  return useQuery({
    queryKey: [GET_COMPANY_COMMENTS],
    queryFn: () => fetchCompanyComments(companyId),
  });
};
