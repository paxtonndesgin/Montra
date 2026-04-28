import React from 'react';
import Image from 'next/image';
import styles from '../../assets/style/scss/components/about/AboutBannerSection.module.scss';
import { IMAGES } from '../../assets/images';
import ButtonLink from '../ButtonLink';
import ScrollAnimator from '../animation/ScrollAnimator';

const AboutBannerSection = () => {
  return (
    <section className={styles.aboutBannerSection}>
      <div className={styles.imageGallery}>
        <ScrollAnimator className={styles.imageLeft} delay={0.1} yOffset={30}>
          <Image src={IMAGES.BANNER_LEFT || IMAGES.BANNER_1} alt="Therapist with patient" width={424} height={318} className={styles.image} />
        </ScrollAnimator>
        
        <ScrollAnimator className={styles.imageCenter} delay={0} yOffset={40}>
          <Image src={IMAGES.BANNER_CENTER || IMAGES.BANNER_1} alt="Medical team" width={872} height={486} className={styles.image} />
        </ScrollAnimator>
        
        <ScrollAnimator className={styles.imageRight} delay={0.2} yOffset={30}>
          <Image src={IMAGES.BANNER_RIGHT || IMAGES.BANNER_1} alt="Nurse with elderly patient" width={424} height={318} className={styles.image} />
        </ScrollAnimator>
      </div>

      <div className={styles.container}>
        <ScrollAnimator className={styles.textContent} delay={0.4} yOffset={30}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>About</span> Montra Therapy
          </h1>
          <p className={styles.description}>
            A warm, person-centred occupational therapy practice focused on practical outcomes and meaningful progress.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnReferral} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/assessment" variant="variant3" className={styles.btnAssessment} showArrowOnHover={false}>
              Book an Assessment
            </ButtonLink>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default AboutBannerSection;