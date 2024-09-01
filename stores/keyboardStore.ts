import { create } from "zustand";

interface keyboardState {
  isCovered: {
    on: boolean;
    space: number;
  };
  setIsCovered: (val: keyboardState["isCovered"]) => void;
}

const useKeyboardStore = create<keyboardState>((set) => ({
  isCovered: {
    on: false,
    space: 0,
  },
  setIsCovered: (val) =>
    set({
      isCovered: {
        on: val.on,
        space: val.space,
      },
    }),
}));

export default useKeyboardStore;
