export default function PokemonDetails(props) {
  const pokemon = props.pokemon;
  const opponent = props.opponent || {};

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        style={{ float: "left" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokedex_number}.png`}
      />
      <dl>
        <dt>Pokedex</dt>
        <Value value={pokemon.pokedex_number} />
        <dt>Class</dt>
        <Value value={pokemon.classfication} />
        <dt>Type</dt>
        <dd>
          {pokemon.type1}, {pokemon.type2}
        </dd>
        <dt>Attack</dt>
        <Value value={pokemon.attack} opponentValue={opponent.attack} />
        <dt>Defense</dt>
        <Value value={pokemon.defense} opponentValue={opponent.defense} />
        <dt>speed</dt>
        <Value value={pokemon.speed} opponentValue={opponent.speed} />
        <dt>hp</dt>
        <Value value={pokemon.hp} opponentValue={opponent.hp} />
        <dt>Height</dt>
        <Value
          value={pokemon.height_m}
          opponentValue={opponent.height_m}
          units="m"
        />
        <dt>Weight</dt>
        <Value
          value={pokemon.weight_kg}
          opponentValue={opponent.weight_kg}
          units="kg"
        />
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
    </div>
  );
}

function Value({ value, opponentValue, units }) {
  if (!opponentValue || value === opponentValue) return <dd>{value}</dd>;
  return (
    <dd className={+value > +opponentValue ? "win" : "lose"}>
      {value}
      {units || ""}
    </dd>
  );
}
