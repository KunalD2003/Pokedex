import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../styles/components/PokeCard';
import { useNavigation } from '@react-navigation/native';

const PokeCard = ({pokemon}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            key={pokemon.id}
            style={styles.pokemonCard}
            onPress={() => navigation.navigate('PokemonDetail', { pokemon: pokemon })}
        >
            <Image
                source={{ uri: pokemon.pokemonImage }}
                style={styles.pokemonImage}
            />
            <View style={styles.pokemonDetails}>
                <View>
                    <Text style={styles.pokemonName}>{pokemon.name}</Text>
                    <Text style={styles.pokemonBreed}>{pokemon.breed}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PokeCard