import { PokemonResponse, SimplePokemon } from "@/interfaces"
import { PokemonGrid } from "@/pokemons"

export const metadata = {
    title: "Pokemons favoritos",
    description: "Listado de pokemons de la primera generacion"
}



export default async function FavoritesPage() {


    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>

            <PokemonGrid
                pokemons={[]}
            />
        </div>
    )
}
