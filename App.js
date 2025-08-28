import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "./src/screens/RegisterScreen";
import CharacterSelectScreen from "./src/screens/CharacterSelectScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CharacterSelect" component={CharacterSelectScreen} options={{ title: "Selecionar Personagem" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Buscar Personagem" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
