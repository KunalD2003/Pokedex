import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/screens/WelcomeStyles';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/PikachuBack.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Your Pokemon Collection!</Text>
                <View style={styles.content}>
                    <Text style={styles.description}>
                        Manage your Pokémon effortlessly—add new ones, edit details, and build your ultimate collection.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PokemonList')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Welcome;
