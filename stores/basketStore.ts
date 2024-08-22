import { TFood } from "@/types";
import { create } from "zustand";

interface BasketItem extends TFood {
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
  addItem: (item: any) => void;
  increaseItem: (item: any) => void;
  decreaseItem: (item: any) => void;
  resetBasket: () => void;
}

const useBasketStore = create<BasketState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const index = state.items.findIndex(
        (i) => i.companyId === item.companyId
      );

      // Check if item is from a different company
      const hasDifferentCompany = state.items.some(
        (i) => i.companyId !== item.companyId
      );
      console.log("index", index);
      if (index === -1 && !hasDifferentCompany) {
        return { items: [...state.items, item] };
      } else {
        return { items: [...state.items] };
      }
    }),
  resetBasket: () => set({ items: [] }),
  increaseItem: (item) =>
    set((state) => {
      const index = state.items.findIndex(
        (i) => i.companyId === item.companyId
      );
      if (index === -1) {
        return { items: [...state.items, item] };
      }
      const newItems = [...state.items];
      newItems[index].quantity += 1;
      return { items: newItems };
    }),
  decreaseItem: (item) =>
    set((state) => {
      const index = state.items.findIndex(
        (i) => i.companyId === item.companyId
      );
      if (index === -1) {
        return { items: [...state.items] };
      }
      const newItems = [...state.items];
      newItems[index].quantity -= 1;
      if (newItems[index].quantity === 0) {
        newItems.splice(index, 1);
      }
      return { items: newItems };
    }),
}));

export default useBasketStore;
