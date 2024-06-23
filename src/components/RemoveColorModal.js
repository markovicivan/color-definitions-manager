import React from 'react';
import {useStore} from "@/state/store";

const RemoveColorModal = ({ isOpen, onCancel, color }) => {
    const { deleteColor } = useStore();

    if (!isOpen || !color) return null;

    const handleConfirmDelete = () => {
        if (color) {
            deleteColor(color.hex);
            onCancel();
        }
    };

    const handleCancelDelete = () => {
        onCancel();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="flex items-center text-2xl font-bold">
                        {color.name}
                        &nbsp;
                        {
                            <span
                                className="inline-block h-5 w-5 border border-gray-30"
                                style={{backgroundColor: `#${color.hex}`}}
                            ></span>
                        }
                    </h2>
                    <button
                        onClick={handleCancelDelete}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                <p className="text-lg mb-4">Are you sure you want to delete this color?</p>
                <div className="flex justify-end">
                    <button
                        onClick={handleCancelDelete}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirmDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RemoveColorModal;
