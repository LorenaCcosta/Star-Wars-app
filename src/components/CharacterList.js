import React from "react";
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function CharacterList({ characters = [], onSelectCharacter }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => onSelectCharacter?.(item)}>
      <Text style={styles.name}>{item?.name || "Sem nome"}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={characters}
      keyExtractor={(item, id) => item?.url ?? item?.name ?? String(id)}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      contentContainerStyle={{ paddingBottom: 60 }}
    />
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: "#eee", borderRadius: 10, padding: 12, backgroundColor: "#fff" },
  name: { fontWeight: "700" },
});
