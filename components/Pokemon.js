import { useRouter } from "next/router";
import styles from "@/styles/Pokemon.module.css";
import { getValidPokemonNumber } from "@/utils/pokemon";

import PokeTypes from "./PokeTypes";

export default function Pokemon({ id, name, sprites, types }) {
  const router = useRouter();
  const { front_default: pokemonImage } = sprites !== undefined && sprites;
  const pokemonNumber = getValidPokemonNumber(id);

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push(`/pokemon/${id}`);
  };

  return (
    <a className={styles.pokeItem} onClick={handleOnClick}>
      <div>
        <div className={styles.pokeItemHeader}>
          <img src={pokemonImage} alt="Pokemon image sprite" />
          {/* <Image
            src={pokemonImage}
            alt="Pokemon image sprite"
            width={100}
            height={100}
            priority
          /> */}
        </div>
        <div className={styles.pokeItemNumber}>
          <p>{pokemonNumber}</p>
        </div>
        <div className={styles.pokeItemTitle}>
          <h2>{name}</h2>
        </div>
        <div className={styles.pokeItemTypes}>
          <PokeTypes types={types} />
        </div>
      </div>
    </a>
  );
}
