import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTCTASection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const OOTCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.backgroundWrapper}>
          <Image
            src="/images/services/oot/banner.png" // Using the same banner image for consistency or generate a new one
            alt="CTA Background"
            fill
            className={styles.bgImage}
          />
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>Ready to Begin Therapy?</h2>
            <p className={styles.description}>
              Start your journey with a customized clinical plan tailored to your specific goals and independence needs.
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

export default OOTCTASection;
