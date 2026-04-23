import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.description}>
          Reach out to Montra Therapy for referrals, service enquiries, and collaboration requests.
          This page is now available for static deployment and can be expanded with your final contact details.
        </p>
      </main>
      <Footer />
    </div>
  );
}