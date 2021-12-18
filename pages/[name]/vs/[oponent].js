import Link from "next/link";
import PokemonDetails from "../../../component/PokemonDetails";
import { server } from "./_server";

export default function Pokemon({ pokemon, pokemonVs }) {
  return (
    <main>
      <div>
        <Link href="/">
          <a className="close"></a>
        </Link>
      </div>
      <div className="columns">
        <div className="left">
          <PokemonDetails pokemon={pokemon} opponent={pokemonVs} />
        </div>
        <PokemonDetails pokemon={pokemonVs} opponent={pokemon} />
      </div>
    </main>
  );
}

export async function getStaticProps({ params: { name, oponent } }) {
  const pokemon = await (
    await fetch(`${server}/api/pokemon/getPokemon?name=${name}`)
  ).json();
  const pokemonVs = await (
    await fetch(`${server}/api/pokemon/getPokemon?name=${oponent}`)
  ).json();
  return { props: { pokemon, pokemonVs } };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
