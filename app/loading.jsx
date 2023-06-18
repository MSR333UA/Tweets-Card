import styles from "./page.module.css";

export default function loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}
