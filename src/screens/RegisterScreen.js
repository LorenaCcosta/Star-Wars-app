import React from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import RegistrationForm from "../components/RegistrationForm";
import { saveUser } from "../storage/userPreferences";

export default function RegisterScreen({ navigation }) {
  const handleRegister = async (user) => {
    await saveUser(user);
    Alert.alert("Sucesso", `Bem-vinda, ${user.name}!`);
    navigation.navigate("CharacterSelect");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Star_wars2.png")}
        style={styles.img}
      />
      <RegistrationForm onRegister={handleRegister} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  img: { 
    width: "100%",
    height: "50%",
    justifyContent: "center",
    resizeMode: "contain",
    marginTop: -50,
    marginBottom: -98,
  }
});
