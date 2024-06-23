import { useState } from 'react';
import { useStore } from '@/state/store';

const ColorFilter = () => {
    const [query, setQuery] = useState('');
    const filterColors = useStore(state => state.filterColors);
    const colors = useStore(state => state.colors);

    const handleFilter = (e) => {
        const value = e.target.value;
        setQuery(value);
        filterColors(colors, value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleFilter}
                placeholder="Search by color name..."
                className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};

export default ColorFilter;
