"use client"

import DetailsColorModal from "@/components/DetailsColorModal";
import ColorFilter from "@/components/ColorFilter";
import ColorList from "@/components/ColorList";
import ColorForm from "@/components/ColorForm";
import {useEffect} from "react";
import {useStore} from "@/state/store";

export default function HomeClient() {
    const fetchColors = useStore(state => state.fetchColors);

    useEffect(() => {
        fetchColors();
    }, []);

    return (
        <div className="container mx-auto p-4 text-black">
            <h1 className="text-2xl font-bold mb-4">Color Manager</h1>
            <ColorFilter/>
            <ColorList/>
            <ColorForm/>
            <DetailsColorModal/>
        </div>
    );
}
