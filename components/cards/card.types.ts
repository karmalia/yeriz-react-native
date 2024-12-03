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

export type TCompanyCard = {
  averageRating: number;
  companyTypeName: string;
  createdDate: string;
  deletedDate: null;
  distance: number;
  environmentallyFriendly: boolean;
  id: string;
  imageUrl: string;
  isActive: boolean;
  isDelete: boolean;
  isTrustworthy: boolean;
  lat: number;
  long: number;
  name: string;
  ratingCount: number;
  starRating: number;
  updatedDate: null;
};

export type TCompany = {
  addressDetail: string;
  city: string;
  companyPhone: string;
  companyTypeDescription: string;
  companyTypeImageUrl: string;
  companyTypeName: string;
  district: string;
  email: string;
  environmentallyFriendly: boolean;
  id: string;
  imageUrl: string;
  isActive: boolean;
  isDelete: boolean;
  isTrustworthy: boolean;
  lat: number;
  long: number;
  mapUrl: string;
  mobilePhone: string;
  name: string;
  neighborhood: string;
  ratingCount: number;
  starRating: number;
  street: string;
};

export type TNewProductCard = {
  data: TFood;
};

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
