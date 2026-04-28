import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/hma/HMABannerSection.module.scss';
import ButtonLink from '@/components/ButtonLink';

const HMABannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/services/hma/banner.png"
            alt="Home Modification Assessments"
            width={1200}
            height={630}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Home Modification Assessments
          </h1>
          <p className={styles.description}>
            Our assessments ensure safe and sustainable changes aligned with NDIS funding requirements, 
            focusing on functional longevity and clinical precision.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnPrimary} showArrowOnHover={true}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/standards" variant="variant3" className={styles.btnSecondary} showArrowOnHover={false}>
              View Clinical Standards
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMABannerSection;
