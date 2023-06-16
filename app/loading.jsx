import styles from "./page.module.css";

export default function loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}
