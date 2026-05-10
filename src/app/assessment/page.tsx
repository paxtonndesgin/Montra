
import styles from "../../assets/style/scss/pages/static-page.module.scss";
import ScrollAnimator from "@/components/animation/ScrollAnimator";



export default function AssessmentPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <ScrollAnimator>
          <h1 className={styles.title}>Assessment</h1>
          <p className={styles.description}>
            This page can be used for assessment bookings or intake guidance.
            It now exists so all current call-to-action links resolve correctly after export.
          </p>
        </ScrollAnimator>
      </main>

    </div>
  );
}