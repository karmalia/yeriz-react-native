export enum EBoxType {
  "Lezzet Kutusu",
  "İzmir Kutusu",
}

export type TFoodCard = {
  title: string;
  id: string;
  image: string;
  boxType: string;
  time: string;
  price: string;
  point: string;
};
