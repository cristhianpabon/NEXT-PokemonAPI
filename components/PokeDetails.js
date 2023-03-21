import styles from "@/styles/PokemonDetails.module.css";

import { getValidPokemonNumber } from "@/utils/pokemon";
import PokeTypes from "./PokeTypes";
import StatBar from "./statBar";

const getAbilities = (abilities) => {
  let abilitiesString = "";

  abilities.forEach(
    (abilityObject) => (abilitiesString += abilityObject.ability.name + ", ")
  );
  return abilitiesString;
};

export default function PokeDetails({
  id,
  name,
  sprites,
  types,
  height,
  weight,
  abilities,
  stats,
}) {
  const pokemonNumber = getValidPokemonNumber(id);
  const { front_default: pokemonImage } = sprites !== undefined && sprites;
  const currentAbilities = getAbilities(abilities);

  return (
    <div className={styles.pokemonDetails}>
      <div className={styles.leftContent}>
        <div>
          <div>
            <img src={pokemonImage} alt="Pokemon image sprite" />
          </div>
          <p className={styles.pokemonNumber}>{pokemonNumber}</p>
          <h2 className={styles.pokemonTitle}>{name}</h2>
          <PokeTypes types={types} />
        </div>
      </div>
      <div className={styles.middleContent}>
        <div className={styles.aboutData}>
          <p className={styles.aboutDataTitle}>Height:</p>
          <p>{height}</p>
        </div>
        <div className={styles.aboutData}>
          <p className={styles.aboutDataTitle}>Weight:</p>
          <p>{weight}</p>
        </div>
        <div className={styles.aboutAbilities}>
          <p className={styles.aboutAbilitiesTitle}>Abilities: </p>
          <p>{currentAbilities}</p>
        </div>
      </div>
      <div className={styles.rightContent}>
        {stats &&
          stats.map((stat, index) => (
            <StatBar
              key={index}
              label={stat.stat.name}
              amount={stat.base_stat}
            />
          ))}
      </div>
    </div>
  );
}
