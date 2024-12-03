import { TFood } from "@/types";
import { create } from "zustand";
import uuid from "react-native-uuid";
import { GetAllFiltersResponse } from "@/api/queries/filters/get-all-filters";

type TFilterData = {
  filterName: string;
  isMultiSelect: boolean;

  data: { id: number; name: string; imgUrl?: string }[];
};

export interface IFilterItem {
  name: string;
  value: number | null;
  defaultItem: boolean;
  isActive: boolean;
  imgUrl?: null | string;
  action: (filterItem: IFilterItem) => void;
}

function generateFilterItems(
  filterData: TFilterData | null,
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

  const items = filterData?.data.map((item) => ({
    name: item.name,
    value: item.id,
    defaultItem: false,
    isActive: false,
    imgUrl: item?.imgUrl || null,
    action,
  }));

  return [defaultItem, ...(items || [])];
}

interface FilterCategory {
  name: string;
  isDefault: boolean;
  isMultiSelect: boolean;
  data: IFilterItem[];
}
interface FilterState {
  refetchId: string;
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
  initializeFilters: (data: GetAllFiltersResponse) => void;
  handleSearchTerm: (value: string) => void;
  changeRefetchId: () => void;
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

  const handleSearchTerm = (value: string) => {
    set({ searchTerm: value });
  };

  const changeKitchens = (filterItem: IFilterItem) => {
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

  const changeRefetchId = () => {
    set({ refetchId: uuid.v4() });
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

  const initializeFilters = (data: GetAllFiltersResponse) => {
    set({
      orderings: {
        name: "Sıralama Dummy",
        isDefault: true,
        isMultiSelect: false,
        data: generateFilterItems(null, changeOrdering),
      },
      kitchens: {
        name: data.byCuisineCategory.filterName,
        isDefault: true,
        isMultiSelect: data.byCuisineCategory.isMultiSelect,
        data: generateFilterItems(data.byCuisineCategory, changeKitchens),
      },
      paymentTypes: {
        name: data.byPaymentType.filterName,
        isDefault: true,
        isMultiSelect: data.byPaymentType.isMultiSelect,
        data: generateFilterItems(data.byPaymentType, changePaymentTypes),
      },
      minOrderAmounts: {
        name: data.byPriceRange.filterName,
        isDefault: true,
        isMultiSelect: data.byPriceRange.isMultiSelect,
        data: generateFilterItems(data.byPriceRange, changeMinOrderAmounts),
      },
      filterByPoint: {
        name: data.byPoint.filterName,
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
    refetchId: uuid.v4(),
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
    handleSearchTerm,
    changeRefetchId,
  };
});

export default useFilterStore;
