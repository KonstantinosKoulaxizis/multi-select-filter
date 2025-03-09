import { useShallow } from "zustand/shallow";
import { useMultiSelectFilterStore } from "../../state";
import { SearchBar } from "../ui";

/** 
 * The `MultiSelectSearchFilter` component handles the search functionality for the multi-select filter.
 * It connects to the global state using Zustand and passes the search query and its setter to the `SearchBar` component.
 */
export const MultiSelectSearchFilter = () => {
    const { searchQuery, setSearchQuery } = useMultiSelectFilterStore(
        useShallow((state) => ({ searchQuery: state.searchQuery, setSearchQuery: state.setSearchQuery })),
    )

    return (
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
    )
};