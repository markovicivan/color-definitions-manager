"use client"

import DetailsColorModal from "@/components/DetailsColorModal";
import ColorFilter from "@/components/ColorFilter";
import ColorList from "@/components/ColorList";
import ColorForm from "@/components/ColorForm";
import {useEffect, useState} from "react";
import {useStore} from "@/state/store";
import Spinner from "@/components/Spinner";

export default function HomeClient() {
    const fetchColors = useStore(state => state.fetchColors);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchColors()
            .then(() => setLoading(false))
            .catch(error => {
                console.error('Error fetching colors:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto p-4 text-black">
            <h1 className="text-2xl font-bold mb-4">Color Manager</h1>
            <ColorFilter/>
            {loading ? <Spinner/> : <ColorList/>}
            <ColorForm/>
            <DetailsColorModal/>
        </div>
    );
}
