import { parse } from "papaparse";
import fs from "fs";
import { join } from "path";
const path = join("data", "pokemon.csv");
console.log(path);

const data = fs.readFileSync(path, {
  encoding: "utf-8",
});
const parsed = parse(data, {
  header: true,
  skipEmptyLines: true,
  transform: (value, column) => {
    if (column !== "abilities") return value;
    const abilities = JSON.parse(value.replace(/'/g, '"'));
    return [...new Set(abilities)];
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

export const getP = (req, res) => res.send(pokemons);
export const getQ = (req, res) => res.send("pokemons");
