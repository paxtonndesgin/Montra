import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCACTASection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const OOTCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Ready to<br />
              Begin<br />
              Therapy?
            </h2>
            <p className={styles.subtitle}>
              Start your journey toward lasting independence with our clinician-led approach.
            </p>
          </div>

          <div className={styles.rightCol}>
            <ButtonLink href="/referral" className={styles.btnReferral} showArrowOnHover={true}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/contact" variant="variant2" className={styles.btnContact} showArrowOnHover={false}>
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOTCTASection;
