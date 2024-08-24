import { TFood } from "@/types";
import { create } from "zustand";

interface BasketItem extends TFood {
  quantity: number;
}

interface BasketState {
  basketItems: BasketItem[];
  addItem: (item: any) => void;
  deleteItem: (item: any) => void;
  increaseItem: (item: any) => void;
  decreaseItem: (item: any) => void;
  resetBasket: () => void;
}

const useBasketStore = create<BasketState>((set) => ({
  basketItems: [],
  addItem: (item) =>
    set((state) => {
      const index = state.basketItems.findIndex((i) => i.id === item.id);

      // Check if item is from a different company
      const hasDifferentCompany = state.basketItems.some(
        (i) => i.id !== item.id
      );
      console.log("index", index);
      if (index === -1 && !hasDifferentCompany) {
        return {
          basketItems: [...state.basketItems, { ...item, quantity: 1 }],
        };
      } else {
        return { basketItems: [...state.basketItems] };
      }
    }),
  deleteItem: (item) =>
    set((state) => {
      const index = state.basketItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        return { basketItems: [...state.basketItems] };
      }
      const newItems = [...state.basketItems];
      newItems.splice(index, 1);
      return { basketItems: newItems };
    }),
  resetBasket: () => set({ basketItems: [] }),
  increaseItem: (item) =>
    set((state) => {
      const index = state.basketItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        return {
          basketItems: [...state.basketItems, { ...item, quantity: 1 }],
        };
      }
      const newItems = [...state.basketItems];
      newItems[index].quantity += 1;
      return { items: newItems };
    }),
  decreaseItem: (item) =>
    set((state) => {
      const index = state.basketItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        return { basketItems: [...state.basketItems] };
      }
      const newItems = [...state.basketItems];
      newItems[index].quantity -= 1;
      if (newItems[index].quantity === 0) {
        newItems.splice(index, 1);
      }
      return { items: newItems };
    }),
}));

export default useBasketStore;
