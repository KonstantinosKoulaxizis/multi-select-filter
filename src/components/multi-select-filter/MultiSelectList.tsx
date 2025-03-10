import { useQuery } from "@tanstack/react-query"
import { useMultiSelectFilterStore } from "../../state"
import { CheckboxList } from "../ui"
import { getMockData } from "../../api/mockResponses"
import { useShallow } from "zustand/shallow"
import { useEffect } from "react"

/**
 * MultiSelectList Component
 * 
 * This component manages a multi-select list with search functionality. 
 * It fetches and displays a list of selectable items while keeping track of selected ones.
 * Selected items are shown separately, and the available options dynamically update based on user input.
 */
export const MultiSelectList = () => {
    const { selectedItems, searchQuery, updateSelectedItems, fetchSelectedItems } = useMultiSelectFilterStore(
        useShallow((state) => ({
            searchQuery: state.searchQuery,
            selectedItems: state.selectedItems,
            updateSelectedItems: state.updateSelectedItems,
            fetchSelectedItems: state.fetchSelectedItems,
        })),
    )

    const { data, isLoading, error } = useQuery<string[]>({ queryKey: ['multi-select-items', searchQuery], queryFn: () => getMockData(searchQuery) })

    const filteredData = data?.filter((item) => !selectedItems.includes(item)) || []

    useEffect(() => {
        fetchSelectedItems()
    }, [fetchSelectedItems])


    if (error) return <div className="empty-list" data-testid="multi-select-list-error">{error.message}</div>

    return (
        <div className="list-container" data-testid="multi-select-list">
            {selectedItems.length > 0 && (
                <div className="items-list" data-testid="multi-select-list-selected-items-list">
                    <CheckboxList defaultChecked data={selectedItems} onSelect={updateSelectedItems} />
                </div>
            )}
            {isLoading ?
                (<div className="empty-list" data-testid="multi-select-list-loading">Loading...</div>)
                : (
                    <div className={`items-list ${selectedItems.length > 0 && 'list-without-margin'}`} data-testid="multi-select-list-filtered-items-list">
                        <CheckboxList data={filteredData} onSelect={updateSelectedItems} />
                    </div>

                )}
        </div>
    )
}