import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "@user";
const CHARACTER_KEY = "@selected_character";

export async function saveUser(user) {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}
export async function getUser() {
  const v = await AsyncStorage.getItem(USER_KEY);
  return v ? JSON.parse(v) : null;
}

export async function saveSelectedCharacter(character) {
  await AsyncStorage.setItem(CHARACTER_KEY, JSON.stringify(character));
}
export async function getSelectedCharacter() {
  const v = await AsyncStorage.getItem(CHARACTER_KEY);
  return v ? JSON.parse(v) : null;
}
