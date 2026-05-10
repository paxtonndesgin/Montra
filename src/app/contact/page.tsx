
import styles from "../../assets/style/scss/pages/static-page.module.scss";
import ScrollAnimator from "@/components/animation/ScrollAnimator";

export default function ContactPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <ScrollAnimator>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.description}>
            Reach out to Montra Therapy for referrals, service enquiries, and collaboration requests.
            This page is now available for static deployment and can be expanded with your final contact details.
          </p>
        </ScrollAnimator>
      </main>

    </div>
  );
}