import { TFood } from "@/types";
import { create } from "zustand";

type TFilterData = {
  name: string;
  isMultiSelect: boolean;

  data: { id: string; name: string; imgUrl?: string }[];
};

type TDummyData = {
  byKitchens: TFilterData;
  byOrdering: TFilterData;
  byPaymentTypes: TFilterData;
  byMinOrderAmounts: TFilterData;
  byPoint: TFilterData;
};

export interface IFilterItem {
  name: string;
  value: string | null;
  defaultItem: boolean;
  isActive: boolean;
  imgUrl: null | string;
  action: (filterItem: IFilterItem) => void;
}

function generateFilterItems(
  filterData: TFilterData,
  action: (filterItem: IFilterItem) => void
): IFilterItem[] {
  const defaultItem: IFilterItem = {
    name: "Tümü",
    value: null, // Representing the default option
    defaultItem: true,
    imgUrl: null,
    isActive: true,
    action,
  };

  const items = filterData.data.map((item) => ({
    name: item.name,
    value: item.id,
    defaultItem: false,
    isActive: false,
    imgUrl: item?.imgUrl || null,
    action,
  }));

  return [defaultItem, ...items];
}

interface FilterCategory {
  name: string;
  isDefault: boolean;
  isMultiSelect: boolean;
  data: IFilterItem[];
}
interface FilterState {
  searchTerm: string;
  isFilterBarOpen: boolean;
  isActive: boolean;
  content: string;
  orderings: FilterCategory;
  kitchens: FilterCategory;
  paymentTypes: FilterCategory;
  minOrderAmounts: FilterCategory;
  filterByPoint: FilterCategory;
  // Actions
  toogleActionBar: (value: boolean) => void;
  changeOrdering: (filterItem: IFilterItem) => void;
  changeKitchens: (filterItem: IFilterItem) => void;
  changePaymentTypes: (filterItem: IFilterItem) => void;
  changeMinOrderAmounts: (filterItem: IFilterItem) => void;
  changeFilterByPoint: (filterItem: IFilterItem) => void;
  changeContent: (value: string) => void;
  resetFilter: () => void;
  toggleFilterBar: (value: boolean) => void;
  initializeFilters: (data: TDummyData) => void;
}

const useFilterStore = create<FilterState>((set, get) => {
  // Define your actions first
  const changeContent = (value: string) => {
    set({ content: value });
  };

  const toogleActionBar = (value: boolean) => {
    set({ isActive: value });
  };

  const changeOrdering = (filterItem: IFilterItem) => {
    set((state) => ({
      orderings: {
        name: state.orderings.name,
        isMultiSelect: state.orderings.isMultiSelect,
        isDefault: filterItem.defaultItem,
        data: state.orderings.data.map((item) => ({
          ...item,
          isActive: item.value === filterItem.value,
        })),
      },
    }));
  };

  const changeKitchens = (filterItem: IFilterItem) => {
    const currentKitchens = get().kitchens;
    if (!filterItem.value) {
      console.log("phase 1");
      set((state) => ({
        kitchens: {
          name: state.kitchens.name,
          isMultiSelect: state.kitchens.isMultiSelect,
          isDefault: true,
          data: state.kitchens.data.map((item) => ({
            ...item,
            isActive: item.value === null,
          })),
        },
      }));
    }

    if (filterItem.value !== null) {
      console.log("phase 2");
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
        .filter((item) => item.value !== null)
        .some((item) => item.isActive);

      console.log("isSomeActive", isSomeActive);
      set(() => ({
        kitchens: {
          name: get().kitchens.name,
          isMultiSelect: get().kitchens.isMultiSelect,
          isDefault: filterItem.defaultItem,
          data: isSomeActive
            ? newKitchens.map((item) =>
                item.value === null ? { ...item, isActive: false } : item
              )
            : newKitchens.map((item) => ({
                ...item,
                isActive: item.value === null,
              })),
        },
      }));
    }
  };

  const changePaymentTypes = (filterItem: IFilterItem) => {
    set((state) => ({
      paymentTypes: {
        name: state.paymentTypes.name,
        isMultiSelect: state.paymentTypes.isMultiSelect,
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
        name: state.minOrderAmounts.name,
        isMultiSelect: state.minOrderAmounts.isMultiSelect,
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
        name: state.filterByPoint.name,
        isMultiSelect: state.filterByPoint.isMultiSelect,
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

  const initializeFilters = (data: TDummyData) => {
    set({
      orderings: {
        name: data.byOrdering.name,
        isDefault: true,
        isMultiSelect: data.byOrdering.isMultiSelect,
        data: generateFilterItems(data.byOrdering, changeOrdering),
      },
      kitchens: {
        name: data.byKitchens.name,
        isDefault: true,
        isMultiSelect: data.byKitchens.isMultiSelect,
        data: generateFilterItems(data.byKitchens, changeKitchens),
      },
      paymentTypes: {
        name: data.byPaymentTypes.name,
        isDefault: true,
        isMultiSelect: data.byPaymentTypes.isMultiSelect,
        data: generateFilterItems(data.byPaymentTypes, changePaymentTypes),
      },
      minOrderAmounts: {
        name: data.byMinOrderAmounts.name,
        isDefault: true,
        isMultiSelect: data.byMinOrderAmounts.isMultiSelect,
        data: generateFilterItems(
          data.byMinOrderAmounts,
          changeMinOrderAmounts
        ),
      },
      filterByPoint: {
        name: data.byPoint.name,
        isDefault: true,
        isMultiSelect: data.byPoint.isMultiSelect,
        data: generateFilterItems(data.byPoint, changeFilterByPoint),
      },
    });
  };

  const resetFilter = () => {
    set((state) => ({
      orderings: {
        name: state.orderings.name,
        isDefault: true,
        isMultiSelect: state.orderings.isMultiSelect,
        data: state.orderings.data.map((item) => ({
          ...item,
          isActive: item.defaultItem,
        })),
      },
      kitchens: {
        name: state.kitchens.name,
        isDefault: true,
        isMultiSelect: state.kitchens.isMultiSelect,
        data: state.kitchens.data.map((item) => ({
          ...item,
          isActive: item.defaultItem,
        })),
      },
      paymentTypes: {
        name: state.paymentTypes.name,
        isDefault: true,
        isMultiSelect: state.paymentTypes.isMultiSelect,
        data: state.paymentTypes.data.map((item) => ({
          ...item,
          isActive: item.defaultItem,
        })),
      },
      minOrderAmounts: {
        name: state.minOrderAmounts.name,
        isDefault: true,
        isMultiSelect: state.minOrderAmounts.isMultiSelect,
        data: state.minOrderAmounts.data.map((item) => ({
          ...item,
          isActive: item.defaultItem,
        })),
      },
      filterByPoint: {
        name: state.filterByPoint.name,
        isDefault: true,
        isMultiSelect: state.filterByPoint.isMultiSelect,
        data: state.filterByPoint.data.map((item) => ({
          ...item,
          isActive: item.defaultItem,
        })),
      },
    }));
  };

  return {
    isFilterBarOpen: false,
    searchTerm: "",
    isActive: false,
    content: "orderings",
    orderings: { name: "", isDefault: true, isMultiSelect: false, data: [] },
    kitchens: { name: "", isDefault: true, isMultiSelect: false, data: [] },
    paymentTypes: { name: "", isDefault: true, isMultiSelect: false, data: [] },
    minOrderAmounts: {
      name: "",
      isDefault: true,
      isMultiSelect: false,
      data: [],
    },
    filterByPoint: {
      name: "",
      isDefault: true,
      isMultiSelect: false,
      data: [],
    },

    // Include your actions in the returned object
    changeContent,
    toogleActionBar,
    changeOrdering,
    changeKitchens,
    changePaymentTypes,
    changeMinOrderAmounts,
    changeFilterByPoint,
    initializeFilters,
    toggleFilterBar,
    resetFilter,
  };
});

export default useFilterStore;
