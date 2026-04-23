import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function CareerPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Career</h1>
        <p className={styles.description}>
          Opportunities to work with Montra Therapy can be published here.
          The route is now generated during static export so navigation works on Surge.
        </p>
      </main>
      <Footer />
    </div>
  );
}