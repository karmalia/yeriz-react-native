import { TFood } from "@/types";
import { create } from "zustand";

export interface IFilterItem {
  name: string;
  value: string;
  defaultItem: boolean;
  isActive: boolean;
  action: (filterItem: IFilterItem) => void;
}

function createFilterItem(
  name: string,
  value: string,
  defaultItem = false,
  isActive = false,
  action: (filterItem: IFilterItem) => void
): IFilterItem {
  return { name, value, defaultItem, isActive, action };
}

function generateFilterItems<T extends Record<string, string>>(
  enumType: T,
  action: (filterItem: IFilterItem) => void
): IFilterItem[] {
  return Object.entries(enumType).map(([key, value], index) => {
    return createFilterItem(
      value,
      key,
      index === 0 ? true : false,
      index === 0 ? true : false,
      action
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
  "all" = "Tümü",
  "dessert" = "Pasta/Tatlı",
  "appetizers" = "Aperatifler",
  "bakery" = "Fırın Pastahane",
  "homeCooking" = "Ev Yemekleri",
  "soup" = "Çorba",
  "cigKofte" = "Çiğ Köfte",
  "salad" = "Salata",
  "meze" = "Meze",
  "worldCuisine" = "Dünya Mutfağı",
}

export enum EPaymentTypes {
  "all" = "Tümü",
  "Cash" = "Nakit",
  "CreditCard" = "Kredi Kartı",
}

export enum EMinOrderAmounts {
  "all" = "Tümü",
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

export enum EFilterContents {
  "orderings" = "Sıralama",
  "kitchens" = "Mutfaklar",
  "paymentTypes" = "Ödeme Türleri",
  "minOrderAmounts" = "Minimum Sipariş Tutarı",
  "filterByPoint" = "Puan",
  "filters" = "Filtreler",
}

type FilterContents = keyof typeof EFilterContents;

const ex1 = {
  location: {
    lat: 12,
    long: 12,
    distance: 25,
  },
  searchTerm: "Bur",
  filteringOptions: {
    order: "smartOrder",
    kitchens: ["all"],
    paymentTypes: ["all"],
    minOrderAmount: "all",
    filterByPoint: "all",
  },
  _username: "Burak",
  _surname: "Kaya",
  _email: "BurakKaya@gmail.com",
};

const ex2 = {
  location: {
    lat: 12,
    long: 12,
    distance: 20,
  },
  searchTerm: "Piz",
  filteringOptions: {
    order: "smartOrder",
    kitchens: ["all"],
    paymentTypes: ["all"],
    minOrderAmount: "all",
    filterByPoint: "all",
  },
  username: "Burak",
  surname: "Kaya",
  email: "BurakKaya@gmail.com",
};

interface FilterState {
  isFilterBarOpen: boolean;
  isActive: boolean;
  content: FilterContents;
  orderings: {
    isDefault: boolean;
    data: IFilterItem[];
  };
  kitchens: {
    isDefault: boolean;
    data: IFilterItem[];
  };
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
  toogleActionBar: (value: boolean) => void;
  changeOrdering: (filterItem: IFilterItem) => void;
  changeKitchens: (filterItem: IFilterItem) => void;
  changePaymentTypes: (filterItem: IFilterItem) => void;
  changeMinOrderAmounts: (filterItem: IFilterItem) => void;
  changeFilterByPoint: (filterItem: IFilterItem) => void;
  changeContent: (value: FilterContents) => void;
  resetFilter: () => void;
  toggleFilterBar: (value: boolean) => void;
}

const useFilterStore = create<FilterState>((set, get) => {
  // Define your actions first
  const changeContent = (value: FilterContents) => {
    set({ content: value });
  };

  const toogleActionBar = (value: boolean) => {
    set({ isActive: value });
  };

  const changeOrdering = (filterItem: IFilterItem) => {
    set((state) => ({
      orderings: {
        isDefault: filterItem.defaultItem,
        data: state.orderings.data.map((item) => ({
          ...item,
          isActive: item.value === filterItem.value,
        })),
      },
    }));
  };

  const changeKitchens = (filterItem: IFilterItem) => {
    if (filterItem.value === "all") {
      set((state) => ({
        kitchens: {
          isDefault: true,
          data: generateFilterItems(EKitchens, changeKitchens),
        },
      }));
    }

    if (filterItem.value !== "all") {
      const newKitchens = get().kitchens.data.map((item) => {
        if (item.value === filterItem.value) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        } else {
          return item;
        }
      });
      const isSomeActive = newKitchens
        .filter((item) => item.value !== "all")
        .some((item) => item.isActive);
      set(() => ({
        kitchens: {
          isDefault: filterItem.defaultItem,
          data: isSomeActive
            ? newKitchens.map((item) =>
                item.value === "all" ? { ...item, isActive: false } : item
              )
            : newKitchens.map((item) => ({
                ...item,
                isActive: item.value == "all",
              })),
        },
      }));
    }
  };

  const changePaymentTypes = (filterItem: IFilterItem) => {
    set((state) => ({
      paymentTypes: {
        isDefault: filterItem.defaultItem,
        data: state.paymentTypes.data.map((item) => ({
          ...item,
          isActive: item.value === filterItem.value,
        })),
      },
    }));
  };

  const changeMinOrderAmounts = (filterItem: IFilterItem) => {
    set((state) => ({
      minOrderAmounts: {
        isDefault: filterItem.defaultItem,
        data: state.minOrderAmounts.data.map((item) => ({
          ...item,
          isActive: item.value === filterItem.value,
        })),
      },
    }));
  };

  const changeFilterByPoint = (filterItem: IFilterItem) => {
    set((state) => ({
      filterByPoint: {
        isDefault: filterItem.defaultItem,
        data: state.filterByPoint.data.map((item) => ({
          ...item,
          isActive: item.value === filterItem.value,
        })),
      },
    }));
  };

  const toggleFilterBar = (value: boolean) => {
    set({ isFilterBarOpen: value });
  };

  const resetFilter = () => {
    set({
      orderings: {
        isDefault: true,
        data: generateFilterItems(EOrderingTypes, changeOrdering),
      },
      kitchens: {
        isDefault: true,
        data: generateFilterItems(EKitchens, changeKitchens),
      },
      paymentTypes: {
        isDefault: true,
        data: generateFilterItems(EPaymentTypes, changePaymentTypes),
      },
      minOrderAmounts: {
        isDefault: true,
        data: generateFilterItems(EMinOrderAmounts, changeMinOrderAmounts),
      },
      filterByPoint: {
        isDefault: true,
        data: generateFilterItems(EFilterByPoint, changeFilterByPoint),
      },
    });
  };

  // Now return your initial state and actions
  return {
    isFilterBarOpen: false,
    isActive: false,
    content: "orderings",
    orderings: {
      isDefault: true,
      data: generateFilterItems(EOrderingTypes, changeOrdering),
    },
    kitchens: {
      isDefault: true,
      data: generateFilterItems(EKitchens, changeKitchens),
    },
    paymentTypes: {
      isDefault: true,
      data: generateFilterItems(EPaymentTypes, changePaymentTypes),
    },
    minOrderAmounts: {
      isDefault: true,
      data: generateFilterItems(EMinOrderAmounts, changeMinOrderAmounts),
    },
    filterByPoint: {
      isDefault: true,
      data: generateFilterItems(EFilterByPoint, changeFilterByPoint),
    },
    // Include your actions in the returned object
    changeContent,
    toogleActionBar,
    changeOrdering,
    changeKitchens,
    changePaymentTypes,
    changeMinOrderAmounts,
    changeFilterByPoint,
    resetFilter,
    toggleFilterBar,
  };
});

export default useFilterStore;
