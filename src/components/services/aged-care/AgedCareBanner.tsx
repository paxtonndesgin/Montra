import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/aged-care/AgedCareBanner.module.scss';
import { PUBLIC_IMAGES } from '../../../assets/images';
import ButtonLink from '@/components/ButtonLink';

const AgedCareBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={PUBLIC_IMAGES.AGED_CARE_BANNER}
            alt="Aged Care Occupational Therapy"
            width={1200}
            height={600}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textContent}>
          <h1 data-service-heading className={styles.title}>
            Aged Care Occupational Therapy
          </h1>
          <p className={styles.description}>
            Empowering older adults to live safely and independently at home through expert functional assessments and tailored clinical interventions.
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

export default AgedCareBanner;
