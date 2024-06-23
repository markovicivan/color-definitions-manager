import React, { useState } from 'react';
import {useStore} from "@/state/store";

const AddColorModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [hex, setHex] = useState('');
    const [error, setError] = useState(null);
    const { colors, addColor } = useStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !hex) {
            setError('Please enter both name and hex value.');
            return;
        }

        const existingColor = colors.find(color => color.hex.toLowerCase() === hex.toLowerCase());
        if (existingColor) {
            setError(`Color with hex #${hex} already exists.`);
            return;
        }

        // If no errors, add the color
        addColor({ name, hex, userCreated: true});
        setName('');
        setHex('');
        setError(null);
        onClose();
    };

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Add New Color</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-medium">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter color name"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hex" className="block text-lg font-medium">Hex:</label>
                        <input
                            type="text"
                            id="hex"
                            value={hex}
                            onChange={(e) => setHex(e.target.value)}
                            placeholder="Enter hex value"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Color
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddColorModal;
