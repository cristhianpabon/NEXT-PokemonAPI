import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function PokeItem({ url, setLoader }) {
  const [pokemon, setPokemon] = useState({});
  const { id, name, sprites, types } = pokemon;

  useEffect(() => {
    const getPokemon = async () => {
      try {
        setLoader(true);
        const data = await fetch(url);
        const jsonData = await data.json();
        setLoader(false);
        setPokemon(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon();
  }, []);

  return <Pokemon id={id} name={name} sprites={sprites} types={types} />;
}
