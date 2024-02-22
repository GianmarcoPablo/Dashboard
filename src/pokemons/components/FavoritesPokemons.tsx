"use client"
import { useAppSelector } from "@/store"
import { PokemonGrid } from ".."
import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"

export default function FavoritesPokemons() {

    const favorites = useAppSelector(state => Object.values(state.pokemons))

    return (
        <>
            {
                favorites.length
                    ? <PokemonGrid pokemons={favorites} />
                    : <NotFavorites />
            }

        </>
    )
}


export const NotFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center ">
            <IoHeartOutline
                size={100}
                className="text-red-700"
            />
            <span>
                No hay pokemons favoritos
            </span>
        </div>
    )
}
