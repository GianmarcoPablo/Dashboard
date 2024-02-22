"use client"
import { useAppSelector, useAppDispatch } from "@/store"
import { decrement, increment, initCounterState, resetCount } from "@/store/counter/counterSlice"
import { useEffect } from "react"

interface Props {
    value?: number
}

interface CounterResponse {
    method: string,
    count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch("/api/counter")
    const json = await data.json()
    return json
}

export default function CartCounter({ value = 0 }: Props) {

    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiCounter()
            .then((res) => {
                dispatch(initCounterState(res.count))
            })
    }, [dispatch])


    return (
        <>
            <span className="text-9xl">
                {count}
            </span>

            <div
                className="flex"
            >
                <button
                    onClick={() => dispatch(increment())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                >
                    +1
                </button>

                <button
                    onClick={() => dispatch(decrement())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
                >
                    -1
                </button>
            </div>
        </>
    )
}
