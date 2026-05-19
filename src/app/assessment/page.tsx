
import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import OurApproachSection from "@/components/OurApproachSection";
import ReferralEnquirySection from "@/components/ReferralEnquirySection";
import styles from "../../assets/style/scss/pages/static-page.module.scss";

export default function AssessmentPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ScrollAnimator>
          <section className={styles.heroSection}>
            <div className={styles.heroShell}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>Assessment Pathway</p>
                <h1 className={styles.title}>Precision clinical intake and evidence-based assessment.</h1>
                <p className={styles.description}>
                  We gather the right context early, assess with rigour, and translate findings into practical next steps for therapy, equipment, support, and reporting.
                </p>
                <div className={styles.actions}>
                  <ButtonLink href="/referral" showArrowOnHover={false}>Make a Referral</ButtonLink>
                  <ButtonLink href="/contact" variant="variant3" showArrowOnHover={false}>Contact Us</ButtonLink>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageCard}>
                  <Image
                    src="/images/source_photo/oot-1.jpg"
                    alt="Montra Therapy clinical assessment session"
                    fill
                    className={styles.heroImage}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    priority
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
                <h2 className={styles.cardTitle}>Structured Clinical Intake</h2>
                <p className={styles.cardText}>
                  Every assessment begins with a structured intake process that captures participant goals, functional history, and referral context — so the right clinician can act quickly and accurately.
                </p>
              </article>

              <article className={styles.contentCard}>
                <h2 className={styles.cardTitle}>What We Assess</h2>
                <ul className={styles.cardList}>
                  <li className={styles.cardListItem}>Functional capacity across daily living, mobility, and cognition.</li>
                  <li className={styles.cardListItem}>Home modification needs and environmental barriers.</li>
                  <li className={styles.cardListItem}>Assistive technology suitability and equipment prescription.</li>
                  <li className={styles.cardListItem}>Paediatric developmental milestones and therapy readiness.</li>
                </ul>
              </article>

              <article className={styles.contentCard}>
                <h2 className={styles.cardTitle}>After Your Assessment</h2>
                <p className={styles.cardText}>
                  Findings are translated into clear, evidence-based reports with actionable recommendations for therapy, equipment, supports, and follow-up care pathways.
                </p>
              </article>
            </div>
          </section>
        </ScrollAnimator>

        <ScrollAnimator>
          <OurApproachSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <ReferralEnquirySection
            title={<>Book an<br />Assessment</>}
            subtitle="Start with a structured intake and let our clinicians guide the next step with clarity."
            primaryBtnText="Submit a Referral"
            secondaryBtnText="Contact Us"
          />
        </ScrollAnimator>
      </main>
    </div>
  );
}