"use client"
import { useState } from "react"

export default function CartCounter() {

    const [counter, setCounter] = useState(0)

    const handleIncrement = (value: number = 1) => {
        setCounter(counter + value)
    }

    const handleDecrement = (value: number = 1) => {
        setCounter(counter - value)
    }

    return (
        <>
            <span className="text-9xl">
                {counter} 
            </span>

            <div
                className="flex"
            >
                <button
                    onClick={() => handleIncrement()}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                >
                    +1
                </button>

                <button
                    onClick={() => handleDecrement()}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
                >
                    -1
                </button>
            </div>
        </>
    )
}
