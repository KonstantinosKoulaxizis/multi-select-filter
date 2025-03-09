import { create } from "zustand";

interface MultiSelectFilterStoreState {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export const useMultiSelectFilterStore = create<MultiSelectFilterStoreState>((set) => ({
    searchQuery: '',
    setSearchQuery: (value: string) =>
        set({ searchQuery: value }),

}));