import { parse } from "papaparse";
import fs from "fs";

const data = fs.readFileSync("data/pokemon.csv", { encoding: "utf-8" });
const parsed = parse(data, {
  header: true,
  skipEmptyLines: true,
  transform: (value, column) => {
    if (column !== "abilities") return value;
    return JSON.parse(value.replace(/'/g, '"'));
  },
});
const pokemons = parsed.data;
const pokemonNames = pokemons.map((p) => p.name);

export const getPokemons = () => pokemons;
export const getPokemonNames = () => pokemonNames;
export const getPokemon = (name) =>
  pokemons.find((pokemon) => pokemon.name === name);
export const getRandomName = () =>
  pokemons[Math.floor(Math.random() * pokemons.length)].name;
