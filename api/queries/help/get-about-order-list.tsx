import { GET_ABOUT_ORDER } from "@/api/constants";
import api from "@/api/http";
import { ICompany, TAboutMyOrder } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import AboutOrderList from "./about-my-order.json";
const fetchAboutOrderList = async (): Promise<TAboutMyOrder[]> => {
  //   const response = await api.get("/Companies/getall");
  //   return response.data;

  return new Promise((res) => {
    res(AboutOrderList);
  });
};

export const useGetAboutOrderList = () => {
  return useQuery({
    queryKey: [GET_ABOUT_ORDER],
    queryFn: fetchAboutOrderList,
  });
};
