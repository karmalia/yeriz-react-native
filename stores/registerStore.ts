import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  resetAuth: () => void;
}

const useRegisterStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  resetAuth: () => set({ email: "", password: "" }),
}));

export default useRegisterStore;
