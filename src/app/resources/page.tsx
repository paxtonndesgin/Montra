
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function ResourcesPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <h1 className={styles.title}>Resources</h1>
        <p className={styles.description}>
          Clinical resources, guides, and supporting information can live here
        </p>
      </main>

    </div>
  );
}