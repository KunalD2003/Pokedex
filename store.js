import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  pokemons: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    case 'UPDATE_POKEMON':
      return {
        ...state,
        pokemons: state.pokemons.map(p => 
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'DELETE_POKEMON':
      return {
        ...state,
        pokemons: state.pokemons.filter(p => p.id !== action.payload),
      };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, pokemonReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);