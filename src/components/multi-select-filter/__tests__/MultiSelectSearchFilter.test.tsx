import '@testing-library/jest-dom'
import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from '@testing-library/user-event'

import { MultiSelectSearchFilter } from "../MultiSelectSearchFilter";
import { renderWithQueryClient } from "../../../tests/utils";

const MOCK_SEARCH_QUERY = "test query";
const setSearchQuery = vi.fn();

vi.mock("../../../state", () => ({
    useMultiSelectFilterStore: () => ({
        setSearchQuery: setSearchQuery,
        searchQuery: MOCK_SEARCH_QUERY,
    }),
}));

describe("MultiSelectSearchFilter", () => {

    it("renders the SearchBar component", () => {
        renderWithQueryClient(<MultiSelectSearchFilter />);
        const searchBar = screen.getByTestId("multi-select-search-filter");
        expect(searchBar).toBeInTheDocument();
    });

    it("passes the correct query to the SearchBar", () => {
        renderWithQueryClient(<MultiSelectSearchFilter />);
        const searchBarInput = screen.getByTestId("search-filter-input");
        expect(searchBarInput).toHaveValue(MOCK_SEARCH_QUERY);
    });

    it("calls setSearchQuery when the query changes", async () => {
        renderWithQueryClient(<MultiSelectSearchFilter />);
        const searchBarInput = screen.getByTestId("search-filter-input");

        userEvent.clear(searchBarInput);
        await userEvent.type(searchBarInput, "N");

        expect(setSearchQuery).toHaveBeenCalledWith(`${MOCK_SEARCH_QUERY}N`);
    });
});
