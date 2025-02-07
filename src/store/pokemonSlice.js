import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemons: [],
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemons.push(action.payload);
        },
        updatePokemon: (state, action) => {
            const index = state.pokemons.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.pokemons[index] = action.payload;
            }
        },
        deletePokemon: (state, action) => {
            state.pokemons = state.pokemons.filter(p => p.id !== action.payload);
        },
    },
});

export const { addPokemon, updatePokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;