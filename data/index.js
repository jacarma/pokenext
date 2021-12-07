import { parse } from "papaparse";
import fs from "fs";

const data = fs.readFileSync("data/pokemon.csv", { encoding: "utf-8" });
const parsed = parse(data, { header: true });
const pokemons = parsed.data
  .filter((pokemon) => pokemon.name)
  .map((pokemon) => ({
    ...pokemon,
    abilities: JSON.parse(pokemon.abilities.replace(/'/g, '"')),
  }));
const pokemonNames = pokemons.map((pokemon) => pokemon.name);

export const getPokemons = () => pokemons;
export const getPokemonNames = () => pokemonNames;
export const getPokemon = (name) =>
  pokemons.find((pokemon) => pokemon.name === name);
export const getRandomName = () =>
  pokemons[Math.floor(Math.random() * pokemons.length)].name;
