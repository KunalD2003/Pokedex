import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AddEditScreen, Welcome, PokemonDetail, PokemonList } from '../screens';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' >
          <Stack.Screen name="PokemonList" component={PokemonList} options={{ headerShown: false }}/>
          <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{ headerShown: false }}/>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
          <Stack.Screen name="AddEdit" component={AddEditScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}