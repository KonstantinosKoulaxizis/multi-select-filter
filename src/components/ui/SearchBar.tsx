import { FC } from "react";
import searchIcon from "../../assets/search.svg";

const DEFAULT_PLACEHOLDER = "Zoek op ...";

interface Props {
    /** Current search query */
    query: string;
    /** Optional placeholder text for the input field (if not provided it will default to the fallback one) */
    placeholder?: string;
    /** Optional test id for the container element */
    testId?: string;
    /** Callback function to update the search query */
    setQuery: (query: string) => void;
}

/** 
* The `SearchBar` component renders an input field for the user to type in a search query.
* It displays a search icon beside the input, and updates the query using the `setQuery` callback.
*/
export const SearchBar: FC<Props> = ({ query, placeholder, testId, setQuery }) => {
    return (
        <div className="search-bar" data-testid={testId ?? "search-filter-input-container"}>
            <input
                type="text"
                placeholder={placeholder || DEFAULT_PLACEHOLDER}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-testid="search-filter-input"
            />

            <img src={searchIcon} alt="Zoeken" className="search-icon" />
        </div>
    );
};
