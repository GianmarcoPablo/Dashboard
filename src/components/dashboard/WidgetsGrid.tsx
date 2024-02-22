"use client"
import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export default function WidgetsGrid() {

    const inCart = useAppSelector(state => state.counter.count)

    return (
        <div className='flex flex-wrap p-2 items-center justify-center'>
            <SimpleWidget
                title={`${inCart}`}
                subtitle="Productos agregados"
                label="Contador"
                icon={<IoCartOutline size={70} className='text-blue-600' />}
                href="/dashboard/counter"
            />
        </div>
    )
}
