// No api.js
export const fetchAllCharacters = async () => {
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  if (!res.ok) throw new Error("Erro de rede");
  return res.json(); 
};

export const fetchCharacterByName = async (name) => {
  const all = await fetchAllCharacters();
  const q = name.trim().toLowerCase();
  return all.filter((p) => p.name.toLowerCase().includes(q));
};
