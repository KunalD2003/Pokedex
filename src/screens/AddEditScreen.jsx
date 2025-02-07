import React, { useState } from 'react';
import { View, TextInput, Alert, Pressable, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPokemon, updatePokemon } from '../store/pokemonSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles/screens/AddEditScreenStyles';

const AddEditScreen = ({ route }) => {
  const dispatch = useDispatch();
  const existingPokemon = route.params?.pokemon;
  const title = route.params.title;
  const navigation = useNavigation();

  const [form, setForm] = useState({
    id: existingPokemon?.id || Date.now().toString(),
    pokemonImage: existingPokemon?.pokemonImage || '',
    name: existingPokemon?.name || '',
    breed: existingPokemon?.breed || '',
    description: existingPokemon?.description || '',
  });

  const handleSave = () => {
    if (!form.name || !form.breed) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (existingPokemon) {
      dispatch(updatePokemon(form));
    } else {
      dispatch(addPokemon(form));
    }

    if(title === "Add Your Pokemon!"){
      navigation.replace("PokemonList");
    } else {
      navigation.replace("PokemonDetail", { pokemon: form });
    }
  };

  const selectImageFromLibrary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
        includeBase64: true,
        quality: 0.7,
      });
      if (!result.didCancel && result.assets && result.assets.length > 0) {
        setForm({
          ...form,
          pokemonImage: `data:image/png;base64,${result.assets[0].base64}`,
        });
      }
    } catch (error) {
      console.error('Error selecting image from library:', error);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} enableOnAndroid={true} keyboardOpeningTime={0}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.imageContainer} onPress={selectImageFromLibrary}>
        {form.pokemonImage ? (
          <Image source={{ uri: form.pokemonImage }} style={styles.image} />
        ) : (
          <Ionicons name="camera" size={50} color={"#ffffff"} />
        )}
      </Pressable>
      <TextInput
        placeholder="Name*"
        placeholderTextColor={"#c6c6c6"}
        value={form.name}
        onChangeText={text => setForm({ ...form, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Breed*"
        placeholderTextColor={"#c6c6c6"}
        value={form.breed}
        onChangeText={text => setForm({ ...form, breed: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        placeholderTextColor={"#c6c6c6"}
        value={form.description}
        onChangeText={text => setForm({ ...form, description: text })}
        multiline
        style={styles.descriptionInput}
      />
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Pokemon</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default AddEditScreen;
