import { SimplePokemon } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonState = {
   
}

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon
            if (!!state[id]) { // el doble !! es para que no sea undefined
                delete state[id] // elimina del objeto
                return
            }

            state[id] = pokemon
        }
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer