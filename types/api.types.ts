export interface Company {
  companyTypeName: string;
  createdDate: string;
  deletedDate: null;
  distance: number;
  environmentallyFriendly: boolean;
  id: string;
  imageUrl: string;
  isTrustworthy: boolean;
  lat: number;
  long: number;
  name: string;
  ratingCount: number;
  starRating: number;
  updatedDate: null;
}

export interface CompanyDetail {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  mobilePhone: string;
  companyPhone: string;
  starRating: number;
  ratingCount: number;
  city: string;
  district: string;
  neighborhood: string;
  street: string;
  addressDetail: string;
  mapUrl: string;
  lat: number;
  long: number;
  companyTypeName: string;
  companyTypeDescription: string;
  companyTypeImageUrl: string;
  isActive: boolean;
  isDelete: boolean;
  environmentallyFriendly: boolean;
  isTrustworthy: boolean;
}
