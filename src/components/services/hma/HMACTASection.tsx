import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/hma/HMACTASection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const HMACTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.backgroundWrapper}>
          <Image
            src="/images/services/hma/cta.png"
            alt="CTA Background"
            fill
            className={styles.bgImage}
          />
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>Need a home modification assessment?</h2>
            <p className={styles.description}>
              Contact our clinical intake team today to discuss your specific requirements 
              or start the referral process immediately.
            </p>
          </div>

          <div className={styles.actionsCol}>
            <div className={styles.actions}>
              <ButtonLink href="/referral" className={styles.btnPrimary} showArrowOnHover={true}>
                Make a Referral
              </ButtonLink>
              <ButtonLink href="/contact" variant="variant3" className={styles.btnSecondary} showArrowOnHover={false}>
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMACTASection;
