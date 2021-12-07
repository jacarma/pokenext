import { useState } from "react";
import { getPokemonNames } from "../data";
import Link from "next/link";

export default function Pokemons({ pokemonNames }) {
  const [search, setSearch] = useState("");
  const shown = pokemonNames.filter((p) =>
    p.toUpperCase().includes(search.toUpperCase())
  );
  // .slice(0, 100);
  const isLimited = shown.length === 100;

  return (
    <main>
      <h1>PokeNext</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        placeholder="Search..."
      />
      <ul>
        {shown.map((p) => (
          <li key={p}>
            <Link href={"./" + p} prefetch={false}>
              <a>{p}</a>
            </Link>
          </li>
        ))}
        {/* {isLimited && <li>...</li>} */}
      </ul>
    </main>
  );
}

export function getStaticProps() {
  return { props: { pokemonNames: getPokemonNames() } };
}
