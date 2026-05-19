
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ScrollAnimator>
          <section className={styles.heroSection}>
            <div className={styles.heroShell}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>Contact</p>
                <h1 className={styles.title}>Speak With Our Clinical Intake Team.</h1>
                <p className={styles.description}>
                  Reach out to Montra Therapy for referrals, service enquiries, collaboration requests,
                  and clinical planning conversations. We keep communication clear, timely, and practical.
                </p>
                <div className={styles.actions}>
                  <ButtonLink href="/referral">Make a Referral</ButtonLink>
                  <ButtonLink href="/about" variant="variant3" showArrowOnHover={false}>About Montra</ButtonLink>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageCard}>
                  <Image
                    src="/images/source_photo/about-2.jpg"
                    alt="Montra Therapy clinical team collaboration"
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
                <h2 className={styles.cardTitle}>Referrals and Service Enquiries</h2>
                <p className={styles.cardText}>
                  For new participant referrals, service suitability questions, or support coordination discussions,
                  use our referral workflow so the right clinical information reaches the intake team immediately.
                </p>
              </article>

              <article className={styles.contentCard}>
                <h2 className={styles.cardTitle}>What We Can Help With</h2>
                <ul className={styles.cardList}>
                  <li className={styles.cardListItem}>Service scope questions across aged care, paediatric, ATA, FCA, HMA, and ongoing OT.</li>
                  <li className={styles.cardListItem}>Clinical collaboration with coordinators, providers, and allied health teams.</li>
                  <li className={styles.cardListItem}>Clarifying documentation, assessment pathways, and next-step planning.</li>
                </ul>
              </article>

              <article className={styles.contentCard}>
                <h2 className={styles.cardTitle}>Response Standard</h2>
                <p className={styles.cardText}>
                  We aim to respond promptly with a clear intake pathway, required details, and the most suitable next step for the participant or referrer.
                </p>
              </article>
            </div>
          </section>
        </ScrollAnimator>
      </main>
    </div>
  );
}