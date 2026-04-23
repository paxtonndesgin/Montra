import React from 'react';
import Image from 'next/image';
import styles from '../../assets/style/scss/components/about/AboutIntroSection.module.scss';
import { IMAGES } from '../../assets/images';
import ScrollAnimator from '../animation/ScrollAnimator';

const AboutIntroSection = () => {
  return (
    <section className={styles.aboutIntroSection}>
      <div className={styles.container}>
        <ScrollAnimator className={styles.header} delay={0} yOffset={30}>
          <h2 className={styles.title}>
            Occupational <span className={styles.pillBlue}>therapy</span> in grounded <span className={styles.pillGreen}>everyday life</span>
          </h2>
          <p className={styles.subtitle}>
            Supporting people to participate more confidently and independently in the activities that matter most.
          </p>
        </ScrollAnimator>

        <div className={styles.cardsContainer}>
          <ScrollAnimator className={styles.cardAnimator} delay={0.1} yOffset={40}>
            <div className={`${styles.card} ${styles.cardLeft}`}>
              <Image src={IMAGES.BANNER_1} alt="Community" width={320} height={320} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <p>Montra Therapy is a community-based occupational therapy practice committed to providing high-quality, personalised support. We work with children, adults and older people across a range of settings, helping them navigate challenges, build capacity and improve their everyday function.</p>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator className={styles.cardAnimator} delay={0.25} yOffset={40}>
            <div className={`${styles.card} ${styles.cardCenter}`}>
              <Image src={IMAGES.BANNER_1} alt="Collaborative" width={320} height={320} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <p>Our approach is warm, collaborative and grounded in real life. We understand that meaningful therapy is not just about assessment and recommendations — it is about listening well, understanding each person’s goals and creating practical strategies that genuinely support daily living.</p>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator className={styles.cardAnimator} delay={0.4} yOffset={40}>
            <div className={`${styles.card} ${styles.cardRight}`}>
              <Image src={IMAGES.BANNER_1} alt="Functional" width={320} height={320} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <p>Whether we are completing a functional assessment, providing ongoing therapy, recommending assistive technology or supporting safer living at home, we aim to deliver services that are thoughtful, responsive and clinically sound.</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
