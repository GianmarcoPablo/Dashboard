"use client"
import { SimplePokemon } from "@/interfaces"
import { useAppDispatch, useAppSelector } from "@/store"
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice"
import Image from "next/image"
import Link from "next/link"
import { IoHeart, IoHeartOutline } from "react-icons/io5"

interface Props {
    pokemon: SimplePokemon
}

export default function PokemonCard({ pokemon }: Props) {

    const { id, name } = pokemon
    const isFavorite = useAppSelector(state => !!state.pokemons[id])
    const dispatch = useAppDispatch()

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }


    return (
        <>
            <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white flex flex-col rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                        <Image
                            key={pokemon.id}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            width={100}
                            height={100}
                            alt={name}
                            priority={false}
                        />
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
                            {name}
                        </p>
                        <p className="text-sm text-gray-100">John@Doe.com</p>
                        <div className="mt-5">
                            <Link
                                href={`/dashboard/pokemons/${name}`}
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            >
                                Más Informacion
                            </Link>
                        </div>
                    </div>
                    <div className="border-b">
                        <div
                            onClick={onToggle}
                            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >
                            <div className="text-red-600">
                                {isFavorite ? <IoHeart /> : <IoHeartOutline />}
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {isFavorite ? "Remove from favorites" : "Add to favorites"}
                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
