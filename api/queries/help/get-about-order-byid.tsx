import { GET_ABOUT_ORDER_BYID } from "@/api/constants";
import api from "@/api/http";
import { ICompany, TAboutMyOrder } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";
import AboutOrderList from "./about-my-order.json";
const fetchAboutOrderById = async (id): Promise<TAboutMyOrder | null> => {
  //   const response = await api.get("/Companies/getall");
  //   return response.data;

  return new Promise((res) => {
    const help = AboutOrderList.find((item) => item.id == id);

    res(help || null);
  });
};

export const useGetAboutOrderById = (id: string) => {
  return useQuery({
    queryKey: [GET_ABOUT_ORDER_BYID, id],
    queryFn: () => fetchAboutOrderById(id),
  });
};
