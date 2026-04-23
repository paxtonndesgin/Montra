import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/fca/FCABannerSection.module.scss';
import { IMAGES } from '../../../assets/images';
import ButtonLink from '@/components/ButtonLink';

const OOTBannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={IMAGES.BANNER_1}
            alt="Ongoing Occupational Therapy"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Ongoing Occupational Therapy
          </h1>
          <p className={styles.description}>
            Sustainable, goal-oriented clinical intervention designed to foster independence and enhance quality of life through consistent, professional engagement.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnPrimary} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/assessment" variant="variant3" className={styles.btnSecondary} showArrowOnHover={false}>
              Book an Assessment
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOTBannerSection;
