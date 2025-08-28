import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function RegistrationForm({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }
    onRegister?.({ name: name.trim(), email: email.trim() });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Seu nome"
        returnKeyType="next"
      />
      <Text style={[styles.label, { marginTop: 12 }]}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="seu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.btn} onPress={submit} activeOpacity={0.9}>
        <Text style={styles.btnText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 6 },
  label: { fontWeight: "600",marginLeft: 8 },
  input: {
    height: 44, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  btn: { marginTop: 16, height: 46, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#111" },
  btnText: { color: "#fff", fontWeight: "700" },
});
