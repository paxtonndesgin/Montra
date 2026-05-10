import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/aged-care/AgedCareCTA.module.scss';
import ButtonLink from '@/components/ButtonLink';

const AgedCareCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.bgImage}>
        <Image
          src="/images/services/aged-care/cta_bg.png"
          alt="Aged Care Support"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Looking for aged care occupational therapy support?</h2>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnGreen} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/about" variant="variant3" className={styles.btnWhite} showArrowOnHover={false}>
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgedCareCTA;
