
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function CareerPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ScrollAnimator>
          <section className={styles.heroSection}>
            <div className={styles.heroShell}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>Career</p>
                <h1 className={styles.title}>Build Your Career With Clinical Rigor.</h1>
                <p className={styles.description}>
                  Montra Therapy is designed for practitioners who value precision, strong documentation,
                  collaborative care, and evidence-based occupational therapy delivered with consistency.
                </p>
                <div className={styles.actions}>
                  <ButtonLink href="/contact">Start a Conversation</ButtonLink>
                  <ButtonLink href="/about" variant="variant3" showArrowOnHover={false}>Our Practice</ButtonLink>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageCard}>
                  <Image
                    src="/images/source_photo/about-1.jpg"
                    alt="Montra Therapy team members"
                    fill
                    className={styles.heroImage}
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimator>

        <ScrollAnimator>
          <section className={styles.contentSection}>
            <div className={styles.contentGrid}>
              <article className={`${styles.contentCard} ${styles.highlightCard}`}>
                <h2 className={styles.cardTitle}>Who Thrives Here</h2>
                <p className={styles.cardText}>
                  Clinicians who enjoy structured reasoning, accountable documentation, and practical interventions tend to do their best work here.
                </p>
              </article>

              <article className={styles.contentCard}>
                <h2 className={styles.cardTitle}>Practice Environment</h2>
                <ul className={styles.cardList}>
                  <li className={styles.cardListItem}>Evidence-based decision making across all service streams.</li>
                  <li className={styles.cardListItem}>High standards for communication, reporting, and follow-through.</li>
                  <li className={styles.cardListItem}>Collaborative workflows with referrers, families, and care teams.</li>
                </ul>
              </article>

              <article className={styles.contentCard}>
                <h2 className={styles.cardTitle}>Career Pathways</h2>
                <p className={styles.cardText}>
                  If you are interested in future clinical, administrative, or leadership opportunities, use the contact page to introduce yourself and outline your experience.
                </p>
              </article>
            </div>
          </section>
        </ScrollAnimator>
      </main>
    </div>
  );
}