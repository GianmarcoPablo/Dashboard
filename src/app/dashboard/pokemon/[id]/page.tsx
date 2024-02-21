import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Pokemon } from "@/interfaces"

interface Props {
    params: { id: string },
}

export async function generateStaticParams() { // esto es para generar las rutas estaticas la funcion debe llamarse generateStaticParams
    const static151Pokemons = Array.from({ length: 151 }, (_, i) => `${i + 1}`)
    return static151Pokemons.map(id => ({
        id: id
    }))
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {

    try {
        const { id, name } = await getPokemon(params.id)

        return {
            title: `#${id} - ${name} - Pokedex`,
            description: `Pagina del pokemon ${name} con id ${id} en la pokedex de pokemon.`
        }
    } catch (error) {
        return {
            title: "Pokemon no encontrado",
            description: "El pokemon que buscas no se encuentra en la pokedex"
        }
    }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            cache: "force-cache"
        })
        const data = await res.json()
        return data
    } catch (error) {
        notFound()
    }
}

export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemon(params.id)

    console.log(pokemon)
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className=" flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-navy-700 text-black">
                        #{pokemon.id} - {pokemon.name}
                    </h1>
                    <div
                        className="flex flex-col justify-center items-center"
                    >
                        <Image
                            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                            alt={pokemon.name}
                            width={150}
                            height={150}
                            className="mb-5"
                        />

                        <div className="flex flex-wrap">
                            {
                                pokemon.moves.map(move => (
                                    <p key={move.move.name} className="mr-2 capitalize text-black">
                                        {move.move.name}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
