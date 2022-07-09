import create from "zustand";
import axios from "axios";

const API_URL = "https://openexchangerates.org/api/";
const ID = "7ed766c303f4457e8b0aa567384201f9";

const useStore = create((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  fetch: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(`${API_URL}latest.json?app_id=${ID}`);
      set((state) => ({ data: (state.data = response.data), loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  }
}));

export default useStore;