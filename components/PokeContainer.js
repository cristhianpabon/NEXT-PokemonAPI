import { useEffect, useState } from "react";
import styles from "@/styles/PokeContainer.module.css";
import PokeItems from "./PokeItems";
import Pokemon from "./Pokemon";

export default function PokeContainer({ children }) {
  return (
    <div className={styles.pokeContainer}>
      <div className={styles.pokeItems}>{children}</div>
    </div>
  );
}
