import styles from "@/styles/StatBar.module.css";

export default function StatBar({ label, amount }) {
  const amountBar = amount > 100 ? 100 : amount;
  return (
    <div className={styles.stat}>
      <h2 className={styles.statTitle}>
         {`${label} (${amount})`}:
      </h2>
      <div className={styles.statBar}>
        <div
          className={styles.statBarQuantity}
          style={{
            width: `${amountBar}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
