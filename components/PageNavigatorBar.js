import styles from "@/styles/PageNavigatorBar.module.css";

export default function PageNavigatorBar({ page, setPage }) {
  const handleBackPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.pageNavigator}>
      <p className={styles.pageNavigatorButton} onClick={handleBackPage}>Back</p>
      <p className={styles.pageNavigatorButton} onClick={handleNextPage}>Next</p>
    </div>
  );
}
