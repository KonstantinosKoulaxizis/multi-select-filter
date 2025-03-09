import { useQuery } from "@tanstack/react-query"
import { useMultiSelectFilterStore } from "../../state"
import { CheckboxList } from "../ui"
import { getMockData } from "../../api/mockResponses"

export const MultiSelectList = () => {
    const searchQuery = useMultiSelectFilterStore((state) => state.searchQuery)

    const { data } = useQuery<string[]>({ queryKey: ['multi-select-items', searchQuery], queryFn: () => getMockData(searchQuery) })

    if (!data) {
        return null
    }


    return (
        <div>
            {/* <CheckboxList data={data?.pages}/> */}
            <div className="list-container">
                <CheckboxList data={data} onSelect={() => console.log('Select')} />
            </div>
        </div>
    )
}