import create from "zustand";

const useCurrencies = create((set) => ({
  currencies: ["AED", "AED"],
  setCurrencie: (payload) => {
    set((state) => {state.currencies[payload.index] = payload.currency})
  }
}));

export default useCurrencies;