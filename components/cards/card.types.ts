export type TKitchenCard = {
  data: {
    imageUrl: string;
    title: string;
  };
};

export type TProductCard = {
  data: {
    id: number | string;
    restaurantName: string;
    imageUrl: string;
    isFavorite: boolean;
    originalPrice: string;
    newPrice: string;
    time: string;
    foodName: string;
  };
  variant: "small" | "large";
};

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
