import { TFood } from "@/types";
import { create } from "zustand";

export interface IFilterItem {
  name: string;
  value: string;
  defaultItem: boolean;
  isActive: boolean;
}

function createFilterItem(
  name: string,
  value: string,
  defaultItem = false,
  isActive = false
): IFilterItem {
  return { name, value, defaultItem, isActive };
}

function generateFilterItems<T extends Record<string, string>>(
  enumType: T
): IFilterItem[] {
  return Object.entries(enumType).map(([key, value], index) => {
    return createFilterItem(
      value,
      key,
      index === 0 ? true : false,
      index === 0 ? true : false
    );
  });
}

export enum EOrderingTypes {
  "SmartOrder" = "Akıllı Sıralama",
  "MostPopular" = "En Çok Değerlendirilenler",
  "RestoranPoint" = "Restoran Puanı",
  "DeliveryTime" = "Teslimat Süresi",
  "Alfabetic" = "Alfabetik Sıralama",
  "DiscountRate" = "İndirim Oranı",
  "Distance" = "Yakınlık",
}

export enum EKitchens {
  "All" = "Tümü",
  "Dessert" = "Pasta/Tatlı",
  "Appetizers" = "Aperatifler",
  "Bakery" = "Fırın Pastahane",
  "HomeCooking" = "Ev Yemekleri",
  "Soup" = "Çorba",
  "CigKofte" = "Çiğ Köfte",
  "Salad" = "Salata",
  "Meze" = "Meze",
  "WorldCuisine" = "Dünya Mutfağı",
}

export enum EPaymentTypes {
  "All" = "Tümü",
  "Cash" = "Nakit",
  "CreditCard" = "Kredi Kartı",
}

export enum EMinOrderAmounts {
  "All" = "Tümü",
  "100" = "100 TL ve altı",
  "150" = "150 TL ve altı",
  "200" = "200 TL ve altı",
  "250" = "250 TL ve altı",
  "300" = "300 TL ve altı",
}

export enum EFilterByPoint {
  "All" = "Tümü",
  "4.5" = "4.5 ve üzeri",
  "4.0" = "4.0 ve üzeri",
  "3.5" = "3.5 ve üzeri",
  "3.0" = "3.0 ve üzeri",
}

export type TContents =
  | "orderings"
  | "kitchens"
  | "paymentTypes"
  | "minOrderAmounts"
  | "filterByPoint";

interface FilterState {
  isActive: boolean;
  content: TContents;
  orderings: { isDefault: boolean; data: IFilterItem[] };
  kitchens: { isDefault: boolean; data: IFilterItem[] };
  paymentTypes: {
    isDefault: boolean;
    data: IFilterItem[];
  };
  minOrderAmounts: {
    isDefault: boolean;
    data: IFilterItem[];
  };
  filterByPoint: {
    isDefault: boolean;
    data: IFilterItem[];
  };
  changeFilterStatus: (value: boolean) => void;
  changeOrdering: (filterItem: IFilterItem) => void;
  changeContent: (value: TContents) => void;
  resetFilter: () => void;
}

const useFilterStore = create<FilterState>((set, get) => ({
  isActive: false,
  content: "orderings",
  orderings: { isDefault: true, data: generateFilterItems(EOrderingTypes) },
  kitchens: { isDefault: true, data: generateFilterItems(EKitchens) },
  paymentTypes: { isDefault: true, data: generateFilterItems(EPaymentTypes) },
  minOrderAmounts: {
    isDefault: true,
    data: generateFilterItems(EMinOrderAmounts),
  },
  filterByPoint: { isDefault: true, data: generateFilterItems(EFilterByPoint) },
  changeContent: (value: TContents) => {
    set({ content: value });
  },
  changeFilterStatus: (value: boolean) => {
    set({ isActive: value });
  },
  changeOrdering: (filterItem: IFilterItem) => {
    set((state) => ({
      orderings: {
        isDefault: filterItem.defaultItem,
        data: state.orderings.data.map((item) => ({
          ...item,
          isActive: item.value === filterItem.value,
        })),
      },
    }));
  },
  changingKitchens: (value: string) => {
    set((state) => ({
      kitchens: state.kitchens.map((item) => ({
        ...item,
        isActive: item.value === value,
      })),
    }));
  },
  changingPaymentTypes: (value: string) => {
    set((state) => ({
      paymentTypes: state.paymentTypes.map((item) => ({
        ...item,
        isActive: item.value === value,
      })),
    }));
  },
  resetFilter: () => {
    set((state) => ({
      orderings: state.orderings.map((item) => ({
        ...item,
        isActive: item.isDefault,
      })),
      kitchens: state.kitchens.map((item) => ({
        ...item,
        isActive: item.isDefault,
      })),
      paymentTypes: state.paymentTypes.map((item) => ({
        ...item,
        isActive: item.isDefault,
      })),
      minOrderAmounts: state.minOrderAmounts.map((item) => ({
        ...item,
        isActive: item.isDefault,
      })),
      filterByPoint: state.filterByPoint.map((item) => ({
        ...item,
        isActive: item.isDefault,
      })),
    }));
  },
}));

export default useFilterStore;
