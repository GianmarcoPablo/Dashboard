import { PokemonResponse, SimplePokemon } from "@/interfaces"
import { PokemonGrid } from "@/pokemons"

export const metadata = {
    title: "Listado de pokemons",
    description: "Listado de pokemons de la primera generacion"
}

const getPokemons = async (limit = 150, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    return pokemons
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons()

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de pokemons <small className="text-blue-500">Estatico</small></span>

            <PokemonGrid
                pokemons={pokemons}
            />
        </div>
    )
}
