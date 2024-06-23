import { create } from 'zustand'
import axios from 'axios';

const useStore = create((set) => ({
    colors: [],
    filteredColors: [],
    modalColor: null,
    fetchColors: async () => {
        const response = await axios.get('http://localhost:8080/https://csscolorsapi.com/api/colors');
        set({ colors: response.data.colors, filteredColors: response.data.colors});
    },
    addColor: (color) => set((state) => ({
        colors: [...state.colors, color],
        filteredColors: [...state.colors, color],
    })),
    deleteColor: (hex) => set((state) => ({
        colors: state.colors.filter(color => color.hex !== hex),
        filteredColors: state.colors.filter(color => color.hex !== hex),
    })),
    filterColors: (colors, query) => {
        set(() => ({
            filteredColors: colors.filter(color =>
                color.name.toLowerCase().includes(query.toLowerCase())
            ),
        }))
    },
    setDetailsModalColor: async (color) => {
        if (color.userCreated) {
            set({modalColor: color});
            return;
        }
        await axios.get(`http://localhost:8080/https://csscolorsapi.com/api/colors/${color.name}`)
            .then(response => {
                set({modalColor: response.data.data});
            });

    },
    closeDetailsModal: () => set({ modalColor: null }),
}));

export { useStore };