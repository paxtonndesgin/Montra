
import styles from "../../assets/style/scss/pages/static-page.module.scss";
import ScrollAnimator from "@/components/animation/ScrollAnimator";

export default function CareerPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <ScrollAnimator>
          <h1 className={styles.title}>Career</h1>
          <p className={styles.description}>
            Opportunities to work with Montra Therapy can be published here.
            The route is now generated during static export so navigation works on Surge.
          </p>
        </ScrollAnimator>
      </main>

    </div>
  );
}