import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator, Alert } from "react-native";
import CharacterSearchBar from "../components/CharacterSearchBar";
import CharacterList from "../components/CharacterList";
import { fetchCharacterByName } from "../services/api";

export default function SearchScreen({ navigation }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (term) => {
    if (!term?.trim()) {
      setList([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetchCharacterByName(term);
      setList(res);
    } catch {
      Alert.alert("Erro", "Falha na busca.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CharacterSearchBar onSearch={onSearch} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <CharacterList characters={list} onSelectCharacter={() => {}} />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, },
  btn: {
    marginTop: 16,
    height: 46,
    borderRadius: 10,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", fontWeight: "700" },
});
