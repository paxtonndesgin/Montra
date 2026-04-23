import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function AssessmentPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Assessment</h1>
        <p className={styles.description}>
          This page can be used for assessment bookings or intake guidance.
          It now exists so all current call-to-action links resolve correctly after export.
        </p>
      </main>
      <Footer />
    </div>
  );
}