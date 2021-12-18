import { getPokemon, getPokemonNames } from "../../api/pokemon";
import Link from "next/link";

export default function Pokemon({ pokemon }) {
  return (
    <main>
      <Link href="/">
        <a className="close"></a>
      </Link>
      <h1>{pokemon.name}</h1>
      <img
        style={{ float: "left" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedex_number}.png`}
      />
      <dl>
        <dt>Pokedex</dt>
        <dd>{pokemon.pokedex_number}</dd>
        <dt>Class</dt>
        <dd>{pokemon.classfication}</dd>
        <dt>Type</dt>
        <dd>
          {pokemon.type1}, {pokemon.type2}
        </dd>
        <dt>Attack</dt>
        <dd>{pokemon.attack}</dd>
        <dt>Defense</dt>
        <dd>{pokemon.defense}</dd>
        <dt>speed</dt>
        <dd>{pokemon.speed}</dd>
        <dt>hp</dt>
        <dd>{pokemon.hp}</dd>
        <dt>Height</dt>
        <dd>{pokemon.height_m}m</dd>
        <dt>Weight</dt>
        <dd>{pokemon.weight_kg}kg</dd>
      </dl>
      <fieldset>
        <legend>Abilities</legend>
        {pokemon.abilities.map((ability, i) => (
          <label key={ability}>
            <input type="radio" name="abilities" defaultChecked={i === 0} />
            <span>{ability}</span>
          </label>
        ))}
      </fieldset>

      <Link href={`/${pokemon.name}/vs/random`}>
        <a className="fight-btn">Random fight!!</a>
      </Link>
    </main>
  );
}

export function getStaticProps({ params: { name } }) {
  const pokemon = getPokemon(name);
  return { props: { pokemon } };
}

export function getStaticPaths() {
  return {
    paths: getPokemonNames().map((name) => ({ params: { name } })),
    fallback: false,
  };
}
