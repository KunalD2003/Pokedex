import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { deletePokemon } from '../store/pokemonSlice'
import { useDispatch } from 'react-redux'
import styles from '../styles/screens/PokemonDetailStyles' // Import the styles

const PokemonDetail = ({ route }) => {
    const { pokemon } = route.params
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletePokemon(id));
        navigation.replace("PokemonList")
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={{ uri: pokemon.pokemonImage }} style={styles.imageBackground}>
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>{pokemon.name}</Text>
                        <Text style={styles.breedText}>{pokemon.breed}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.replace('AddEdit', { pokemon: pokemon, title: "Edit Your Pokemon!" })}>
                            <Image source={require('../assets/Edit.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(pokemon.id)}>
                            <Image source={require('../assets/Delete.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>{pokemon.description}</Text>
            </View>
        </ScrollView>
    )
}

export default PokemonDetail
