import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CharacterSearchBar({ onSearch }) {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const [msg, setMsg] = useState("");

  const handleSearch = () => {
    if (!term.trim()) {
      setMsg("Digite no campo vazio para pesquisar");
      return;
    }
    setMsg("");
    onSearch?.(term);
  };

  return (
    <View>
      <View style={styles.row}>

        <TextInput
          style={styles.input}
          value={term}
          onChangeText={setTerm}
          placeholder="Luke, Vader, Leia..."
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSearch}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.btnProfile]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="user" size={34} color="#fff" />
        </TouchableOpacity>
      </View>

      {msg ? <Text style={styles.msg}>{msg}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, marginBottom: 12, },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  btn: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", fontWeight: "700" },
  msg: { color: "red", fontSize: 13, marginTop: -8, marginBottom: 8 },

  btnProfile: { position: "absolute",
  top: 580,
  right: 10, 
  zIndex: 10, 
  backgroundColor: "#111",
  borderRadius: 100,
  width: 68,
  height: 68,
  }

});
