import { getPokemon } from "../../../data";
import Link from "next/link";
import PokemonDetails from "../../../component/PokemonDetails";

export default function Pokemon({ pokemon, pokemonVs }) {
  return (
    <main>
      <div style={{ textAlign: "right" }}>
        <Link href="../..">
          <a className="close"></a>
        </Link>
      </div>
      <div class="columns">
        <div className="left">
          <PokemonDetails pokemon={pokemon} opponent={pokemonVs} />
        </div>
        <PokemonDetails pokemon={pokemonVs} opponent={pokemon} />
      </div>
    </main>
  );
}

export function getStaticProps({ params: { name, oponent } }) {
  const pokemon = getPokemon(name);
  const pokemonVs = getPokemon(oponent);
  return { props: { pokemon, pokemonVs } };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
