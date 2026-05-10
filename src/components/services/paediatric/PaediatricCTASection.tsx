import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/paediatric/PaediatricCTASection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const PaediatricCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.bgImage}>
        <Image
          src="/images/services/paediatric/cta_bg.png"
          alt="Ready to Begin Therapy"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Begin Therapy?</h2>
          <p className={styles.description}>
            Start your journey toward lifelong independence with our clinical approach.
          </p>
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

export default PaediatricCTASection;
