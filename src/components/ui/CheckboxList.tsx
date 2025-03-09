import { FC } from "react";

interface Props {
    /** An array of strings representing the checkbox items. */
    data: string[];
    /** A callback function that will be called when a checkbox is selected. */
    onSelect: (item: string) => void;
}

/** 
 * The `CheckboxList` component renders a list of checkboxes based on the `data` prop.
 * Each checkbox represents an item, and when clicked, the `onSelect` callback is fired.
 */
export const CheckboxList: FC<Props> = ({ data, onSelect }) =>
(
    <ul className="filter-list">
        {data.map((item) => (
            <li key={item}>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => onSelect(item)}
                    />
                    {item}
                </label>
            </li>
        ))}
    </ul>
)
