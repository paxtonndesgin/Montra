import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCACTASection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const FCACTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Need a<br />
              Functional<br />
              Capacity<br />
              Assessment?
            </h2>
            <p className={styles.subtitle}>
              Our clinicians are currently accepting referrals for adult and adolescent assessments nationwide.
            </p>
          </div>
          
          <div className={styles.rightCol}>
            <ButtonLink href="/referral" className={styles.btnReferral} showArrowOnHover={true}>
              Submit a Referral
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

export default FCACTASection;
