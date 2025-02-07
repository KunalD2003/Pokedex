import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Feather';
import styles from '../styles/screens/PokemonListStyles';
import PokeCard from '../components/PokeCard';

const PokemonList = () => {
    const pokemons = useSelector(state => state.pokemons);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image source={require('../assets/Pikachu.png')} style={styles.backgroundImage} />
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Entypo name="menu" size={30} color="#FFCC00" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.addButton} 
                        onPress={() => navigation.navigate('AddEdit', { title: "Add Your Pokemon!" })}
                    >
                        <Text style={styles.addButtonText}>Add Pokemon</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Your</Text>
                    <Text style={styles.title}>Pokemon</Text>
                    <Text style={styles.title}>Collection!</Text>
                </View>

                <ScrollView 
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {pokemons.map((index) => (
                        <PokeCard pokemon={index} key={index.id}/>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default PokemonList;
