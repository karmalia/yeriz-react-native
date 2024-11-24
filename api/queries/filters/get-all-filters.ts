import { GET_ALL_FILTERS } from "@/api/constants";
import api from "@/api/http";
import { Company } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

type TDummyData = {
  byKitchens: {
    name: string;
    isMultiSelect: boolean;
    data: { id: string; name: string }[];
  };
  byOrdering: {
    name: string;
    isMultiSelect: boolean;
    data: { id: string; name: string }[];
  };
  byPaymentTypes: {
    name: string;
    isMultiSelect: boolean;
    data: { id: string; name: string }[];
  };
  byMinOrderAmounts: {
    name: string;
    isMultiSelect: boolean;
    data: { id: string; name: string }[];
  };
  byPoint: {
    name: string;
    isMultiSelect: boolean;
    data: { id: string; name: string }[];
  };
};

const byKitchens = [
  {
    id: "8",
    name: "Pasta/Tatlı",
    imgUrl: "dessert",
  },
  {
    id: "9",
    name: "Aperatifler",
    imgUrl: "appetizers",
  },
  {
    id: "10",
    name: "Fırın Pastahane",
    imgUrl: "bakery",
  },
  {
    id: "11",
    name: "Ev Yemekleri",
    imgUrl: "homeCooking",
  },
  {
    id: "12",
    name: "Çorba",
    imgUrl: "soup",
  },
  {
    id: "13",
    name: "Çiğ Köfte",
    imgUrl: "cigKofte",
  },
  {
    id: "14",
    name: "Salata",
    imgUrl: "salad",
  },
  {
    id: "15",
    name: "Meze",
    imgUrl: "meze",
  },
  {
    id: "16",
    name: "Dünya Mutfağı",
    imgUrl: "worldCuisine",
  },
];
const byOrdering = [
  {
    id: "1",
    name: "Akıllı Sıralama",
  },
  {
    id: "2",
    name: "En Çok Değerlendirilenler",
  },
  {
    id: "3",
    name: "Restoran Puanı",
  },
  {
    id: "4",
    name: "Teslimat Süresi",
  },
  {
    id: "5",
    name: "Alfabetik Sıralama",
  },
  {
    id: "6",
    name: "İndirim Oranı",
  },
  {
    id: "7",
    name: "Yakınlık",
  },
];

const byPaymentTypes = [
  {
    id: "1",
    name: "Nakit",
  },
  {
    id: "2",
    name: "Kredi Kartı",
  },
];

const byMinOrderAmounts = [
  {
    id: "1",
    name: "100 TL ve altı",
  },
  {
    id: "2",
    name: "150 TL ve altı",
  },
  {
    id: "3",
    name: "200 TL ve altı",
  },
  {
    id: "4",
    name: "250 TL ve altı",
  },
  {
    id: "5",
    name: "300 TL ve altı",
  },
];

const byPoint = [
  {
    id: "1",
    name: "4.5 ve üzeri",
  },
  {
    id: "2",
    name: "4.0 ve üzeri",
  },
  {
    id: "3",
    name: "3.5 ve üzeri",
  },
  {
    id: "4",
    name: "3.0 ve üzeri",
  },
];

const dummyData: TDummyData = {
  byKitchens: { name: "Mutfaklar", isMultiSelect: true, data: byKitchens },
  byOrdering: { name: "Sıralama", isMultiSelect: false, data: byOrdering },
  byPaymentTypes: {
    name: "Ödeme Türleri",
    isMultiSelect: false,
    data: byPaymentTypes,
  },
  byMinOrderAmounts: {
    name: "Minimum Sipariş Tutarı",
    isMultiSelect: false,
    data: byMinOrderAmounts,
  },
  byPoint: { name: "Puan", isMultiSelect: false, data: byPoint },
};

const fetchFilters = async (): Promise<TDummyData> => {
  // const response = await api.get("/Companies/getall");
  // return response.data;
  return dummyData;
};

export const useGetAllFilters = () => {
  return useQuery({ queryKey: [GET_ALL_FILTERS], queryFn: fetchFilters });
};
