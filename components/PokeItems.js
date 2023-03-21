import { useEffect, useState } from "react";
import Image from "next/image";
import PokeItem from "./PokeItem";
import loadergif from "@/public/img/loading.gif";

export default function PokeItems({ pageNumber }) {
  const [pokeData, setPokeData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getPokeData = async () => {
      const maxNumber = 12;
      const minNumber = (pageNumber - 1) * 12;

      setLoader(true);
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${maxNumber}&offset=${minNumber}`
      );
      const jsonData = await data.json();

      setLoader(false);
      setPokeData(jsonData.results);
    };

    getPokeData();
  }, [pageNumber]);

  if (loader) {
    return (
      <div>
        <Image
          src={loadergif}
          alt="Loading spinner gif"
          width={100}
          height={100}
        />
      </div>
    );
  }

  return (
    <>
      {pokeData &&
        pokeData.map((pokemon, index) => (
          <PokeItem key={index} url={pokemon.url} setLoader={setLoader} />
        ))}
    </>
  );
}
