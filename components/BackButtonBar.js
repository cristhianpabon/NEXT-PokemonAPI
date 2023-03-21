import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/BackButtonBar.module.css";

export default function BackButtonBar({ setValue }) {
    const router = useRouter();

    const handleOnClick = (e) => {
      e.preventDefault();
      router.push(`/`);
    };
  
  return (
    <div className={styles.backButtonBar}>
      <a onClick={handleOnClick}>Back</a>
    </div>
  );
}
