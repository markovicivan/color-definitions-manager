import { useStore } from '@/state/store';

const DetailsColorModal = () => {
    const modalColor = useStore(state => state.modalColor);
    const closeModal = useStore(state => state.closeDetailsModal);

    if (!modalColor) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{modalColor.name}</h2>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                <div className="mb-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Color:</span>
                        <span className="inline-block h-5 w-5 border border-gray-300" style={{backgroundColor: `#${modalColor.hex}`}}></span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Hex:</span>
                        <span className="text-lg">#{modalColor.hex}</span>
                    </div>
                    { !modalColor.userCreated &&
                        <>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium">Theme:</span>
                                <span className="text-lg">{modalColor.theme}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium">Group:</span>
                                <span className="text-lg">{modalColor.group}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium">RGB:</span>
                                <span className="text-lg">{modalColor.rgb}</span>
                            </div>
                        </>
                    }
                </div>
                <button
                    onClick={closeModal}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default DetailsColorModal;
