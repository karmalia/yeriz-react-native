//get-all-company-foods
export interface CompanyFood {
  id: number;
  category: string;
  data: {
    id: number;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    availableTime: string;
    imageUrl: string;
  }[];
}
