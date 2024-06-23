import {useStore} from "@/state/store";
import RemoveColorModal from "@/components/RemoveColorModal";
import {useState} from "react";
import AddColorModal from "@/components/AddColorModal";

const ColorList = () => {
    const { colors, filteredColors, setDetailsModalColor } = useStore();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [colorToDelete, setColorToDelete] = useState(null);
    const [showAddColorModal, setShowAddColorModal] = useState(false);

    const handleDelete = (hex) => {
        const color = colors.find(color => color.hex === hex);
        setColorToDelete(color);
        setConfirmDelete(true);
    };

    const handleDetails = (hex) => {
        const color = colors.find(color => color.hex === hex);
        setDetailsModalColor(color);
    };

    return (
        <div>
            <button
                onClick={() => setShowAddColorModal(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
                Add new color
            </button>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredColors.map(color => (
                    <li
                        key={color.hex + '-' + color.name}
                        className="p-10 rounded shadow-md relative group"
                        style={{backgroundColor: `#${color.hex}`}}
                    >
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 bg-black bg-opacity-25 p-4 rounded">
                            <div className="text-white text-center mb-2">{color.name}</div>
                            <div className="flex justify-evenly items-center space-x-2">
                                <button
                                    onClick={() => handleDelete(color.hex)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleDetails(color.hex)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <RemoveColorModal
                isOpen={confirmDelete}
                onCancel={() => setConfirmDelete(false)}
                color={colorToDelete ? colorToDelete : ''}
            />

            <AddColorModal
                isOpen={showAddColorModal}
                onClose={() => setShowAddColorModal(false)}
            />
        </div>
    );
};

export default ColorList;
