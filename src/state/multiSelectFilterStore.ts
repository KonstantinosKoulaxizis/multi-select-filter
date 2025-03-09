import { create } from "zustand";

const SELECTED_ITEMS_KEY = 'selectedItems';

interface MultiSelectFilterStoreState {
    searchQuery: string;
    selectedItems: string[];
    setSearchQuery: (value: string) => void;
    updateSelectedItems: (item: string) => void;
    fetchSelectedItems: () => void;
}

export const useMultiSelectFilterStore = create<MultiSelectFilterStoreState>((set) => ({
    searchQuery: '',
    selectedItems: [],
    setSearchQuery: (value: string) =>
        set({ searchQuery: value }),
    updateSelectedItems: (item: string) => {
        set((state) => {
            const isSelected = state.selectedItems.includes(item);
            const updatedItems = isSelected
                ? state.selectedItems.filter((selectedItem) => selectedItem !== item)
                : [...state.selectedItems, item];

            localStorage.setItem(SELECTED_ITEMS_KEY, JSON.stringify(updatedItems));
            return { selectedItems: updatedItems };
        })
    },
    fetchSelectedItems: () => {
        const selectedItems = localStorage.getItem(SELECTED_ITEMS_KEY);
        if (selectedItems) {
            set({ selectedItems: JSON.parse(selectedItems) });
        }
    }
}));