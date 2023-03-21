import Head from "next/head";
import { getAllPokemonIds } from "@/utils/pokemon";

import Header from "@/components/Header";
import PokeContainer from "@/components/PokeContainer";
import BackButtonBar from "@/components/BackButtonBar";
import MainLayout from "@/components/MainLayout";
import PokeDetails from "@/components/PokeDetails";

export default function pokemonDetailsId({ pokemonDetails }) {
  return (
    <>
      <Head>
        <title>Pokemon Detail </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainLayout>
        <BackButtonBar />
        <PokeContainer>
          <PokeDetails {...pokemonDetails} />
        </PokeContainer>
      </MainLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPokemonIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const jsonData = await data.json();

    return {
      props: {
        pokemonDetails: jsonData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
