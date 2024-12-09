import { TFood } from "@/types";

export type TKitchenCard = {
  id: string;
  imageUrl: string;
  title: string;
};

export type TProductCard = {
  data: TFood;
  variant: "small" | "large";
};

export type TNewProductCard = {
  data: TFood;
};

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
