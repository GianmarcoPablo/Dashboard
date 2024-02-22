
import FavoritesPokemons from "../../../pokemons/components/FavoritesPokemons"

export default async function FavoritesPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>

            <FavoritesPokemons />
        </div>
    )
}

