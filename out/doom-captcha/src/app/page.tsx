import styles from "./page.module.css";
import Doom from "./doom";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Doom />
      </main>
    </div>
  );
}
