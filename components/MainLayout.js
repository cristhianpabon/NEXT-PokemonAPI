import styles from "@/styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  return <main className={styles.mainLayout}>{children}</main>;
}
