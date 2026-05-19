import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/paediatric/PaediatricBanner.module.scss';
import { PUBLIC_IMAGES } from '../../../assets/images';
import ButtonLink from '@/components/ButtonLink';

const PaediatricBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={PUBLIC_IMAGES.PAEDIATRIC_BANNER}
            alt="Paediatric Occupational Therapy"
            width={1200}
            height={600}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textContent}>
          <h1 data-service-heading className={styles.title}>
            Paediatric Occupational Therapy
          </h1>
          <p className={styles.description}>
            We provide a structured roadmap from initial contact to measurable progress, ensuring your child receives the comprehensive care they deserve at home.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnPrimary} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/about" variant="variant3" className={styles.btnSecondary} showArrowOnHover={false}>
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaediatricBanner;
