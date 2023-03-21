import styles from "@/styles/PokeTypes.module.css";

const getPokemonTypeColor = (type) => {
  switch (type) {
    case "grass":
      return styles.grass;
      break;
    case "fire":
      return styles.fire;
      break;
    case "water":
      return styles.water;
      break;
    case "normal":
      return styles.normal;
      break;
    case "flying":
      return styles.flying;
      break;
    case "bug":
      return styles.bug;
      break;
    case "poison":
      return styles.poison;
      break;
    case "electric":
      return styles.electric;
      break;
    case "ground":
      return styles.ground;
      break;
    case "fighting":
      return styles.fighting;
      break;
    case "psychic":
      return styles.psychic;
      break;
    case "rock":
      return styles.rock;
      break;
    case "ice":
      return styles.ice;
      break;
    case "ghost":
      return styles.ghost;
      break;
    case "dragon":
      return styles.dragon;
      break;
    case "dark":
      return styles.dark;
      break;
    case "steel":
      return styles.steel;
      break;
    case "fairy":
      return styles.fairy;
      break;
    default:
      return styles.default;
      break;
  }
};

export default function PokeTypes ({ types }) {
  return (
    <div className={styles.pokeTypes}>
      {types &&
        types.map(({ type }, index) => (
          <p
            key={index}
            className={`${styles.pokeType} + ${getPokemonTypeColor(type.name)}`}
          >
            {type.name}
          </p>
        ))}
    </div>
  );
};
