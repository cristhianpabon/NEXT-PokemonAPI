import styles from "@/styles/Header.module.css";

export default function Header(props) {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.pokeScanner}>
          <div className={styles.pokeScannerBlue}></div>
          <div className={styles.pokeScannerRed}></div>
          <div className={styles.pokeScannerYellow}></div>
          <div className={styles.pokeScannerGreen}></div>
        </div>
      </nav>
    </header>
  );
}
