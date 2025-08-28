import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getUser, getSelectedCharacter } from "../storage/userPreferences";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      setUser(await getUser());
      setCharacter(await getSelectedCharacter());
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="user-circle" size={100} color="#a5a5a5ff" style={{ alignSelf: "center", marginBottom: 6 }} />
      <Text style={styles.title}>Perfil</Text>

      <Text style={styles.item}>Nome: {user?.name ?? "-"}</Text>
      <Text style={styles.item}>Email: {user?.email ?? "-"}</Text>

      <View style={{ height: 12 }} />

      <Text style={styles.item}>Personagem: {character?.name ?? "-"}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("CharacterSelect")}>
        <Text style={styles.btnText}>Alterar Personagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 32, alignSelf: 'center' },
  item: { fontSize: 16, marginBottom: 6 },
  btn: { marginTop: 16, height: 46, borderRadius: 10, backgroundColor: "#111", alignItems: "center", justifyContent: "center" },
  btnText: { color: "#fff", fontWeight: "700" },
});
