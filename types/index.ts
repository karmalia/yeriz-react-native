export interface TFood {
  id: string;
  companyName: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  availableFrom: number;
  availableUntil: number;
  stock: number;
  starRating: number;
  ratingCount: number;
  isActive: boolean;
  isDeleted: boolean;
  foodImage: Array<TFoodImage>;
  foodCategory: string;
  isFavorite: boolean;
}

type TFoodImage = {
  name: string;
  imageUrl: string;
  isCoverPhoto: boolean;
  isActive: boolean;
  isDeleted: boolean;
};
