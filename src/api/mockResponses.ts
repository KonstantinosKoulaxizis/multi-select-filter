import mockJsonData from '../assets/data/items.json';

const MOCK_DATA = mockJsonData.data;

/** 
 * The `getMockData` function simulates fetching filtered data based on a search query.
 * @param {string} searchQuery - The search term used to filter the items.
 * @returns {Promise<string[]>} - A promise that resolves to a filtered array of strings.
 */
export const getMockData = async (searchQuery: string): Promise<string[]> => {
    const filteredData = MOCK_DATA.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));

    return new Promise((resolve) => {
        // Add a small delay to simulate network latency
        setTimeout(() => {
            resolve(filteredData);
        }, 500); 
    });
};