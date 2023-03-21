import styles from "@/styles/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ setValue }) {
  return (
    <div className={styles.searchBar}>
      <p className={styles.searchButton}>Search</p>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="by number or name.."
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
