import { WidgetsGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Visualizacion de datos"
}

export default function MainPage() {
    return (
        <div className='text-black p-2'>
            <h1 className='mt-2 text-3xl'>Dashboard</h1>
            <span className='text-xl'>Informacion general</span>

            <WidgetsGrid />
        </div>
    )
}