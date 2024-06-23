import React, { useState } from 'react';

const AddColorModal = ({ isOpen, onClose, onSubmit }) => {
    const [colorName, setColorName] = useState('');
    const [colorHex, setColorHex] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: colorName, hex: colorHex });
        setColorName('');
        setColorHex('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Add New Color</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="colorName" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="colorName"
                            value={colorName}
                            onChange={(e) => setColorName(e.target.value)}
                            placeholder="Enter color name"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="colorHex" className="block text-sm font-medium text-gray-700">Hex</label>
                        <input
                            type="text"
                            id="colorHex"
                            value={colorHex}
                            onChange={(e) => setColorHex(e.target.value)}
                            placeholder="Enter color hex code"
                            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                            pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                            title="Hex color code must be in the format #RRGGBB or #RGB"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                        >
                            Add Color
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddColorModal;
