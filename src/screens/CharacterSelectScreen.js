import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import CharacterSearchBar from "../components/CharacterSearchBar";
import CharacterList from "../components/CharacterList";
import { fetchCharacters, fetchCharacterByName } from "../services/api";
import { saveSelectedCharacter, getSelectedCharacter } from "../storage/userPreferences";

export default function CharacterSelectScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const list = await fetchCharacters(1);
      setCharacters(list);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    (async () => {
      const c = await getSelectedCharacter();
    })();
  }, []);

  const onSearch = async (term) => {
    if (!term?.trim()) {
      load();
      return;
    }
    setLoading(true);
    try {
      const list = await fetchCharacterByName(term);
      setCharacters(list);
    } catch {
      Alert.alert("Erro", "Falha na busca.");
    } finally {
      setLoading(false);
    }
  };

  const onSelectCharacter = async (character) => {
    await saveSelectedCharacter(character);
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione seu personagem</Text>

      <CharacterSearchBar onSearch={onSearch} />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CharacterList characters={characters} onSelectCharacter={onSelectCharacter} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12,},
});
