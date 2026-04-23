import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/fca/FCABannerSection.module.scss';
import { IMAGES } from '../../../assets/images';
import ButtonLink from '@/components/ButtonLink';

const FCABannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src={IMAGES.BANNER_1} 
            alt="Functional Capacity Assessments" 
            width={1200}
            height={630}
            className={styles.image} 
          />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Functional Capacity Assessments
          </h1>
          <p className={styles.description}>
            Clear, evidence-based assessments that support informed decisions and meaningful outcomes.<br />
            Precisely aligned with NDIS requirements for justification.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnPrimary} showArrowOnHover={true}>
              Submit a Referral
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

export default FCABannerSection;
