import { useState } from "react";
import { getPokemonNames } from "./api/pokemon/_index.js";
import Link from "next/link";

export default function Pokemons({ pokemonNames }) {
  const [search, setSearch] = useState("");
  const shown = pokemonNames.filter((p) =>
    p.toUpperCase().includes(search.toUpperCase())
  );

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
            <Link href={"/" + p} prefetch={false}>
              <a>{p}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function getStaticProps() {
  return { props: { pokemonNames: getPokemonNames() } };
}
