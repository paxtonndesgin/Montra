import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/ata/ATABannerSection.module.scss';
import { IMAGES } from '../../../assets/images';
import ButtonLink from '@/components/ButtonLink';

const ATABannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={IMAGES.ATA_BANNER}
            alt="Assistive Technology Assessments"
            width={1200}
            height={630}
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Assistive Technology Assessments
          </h1>
          <p className={styles.description}>
            Evidence-based technology recommendations that transform daily living.<br />
            Precisely matched to NDIS funding requirements and individual needs.
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

export default ATABannerSection;
