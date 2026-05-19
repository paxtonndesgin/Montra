import React from 'react';
import Image from 'next/image';
import styles from '../../assets/style/scss/components/about/AboutIntroSection.module.scss';
import ScrollAnimator from '../animation/ScrollAnimator';

import { aboutContent } from '@/content/about';

const AboutIntroSection = () => {
  const content = aboutContent.intro;

  if (!content) return null;

  return (
    <section className={styles.aboutIntroSection}>
      <div className={styles.container}>
        <ScrollAnimator className={styles.header} delay={0} yOffset={30}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </ScrollAnimator>

        <div className={styles.cardsContainer}>
          {content.cards.map((card, index) => {
            const cardClasses = [styles.cardLeft, styles.cardCenter, styles.cardRight];
            const delays = [0.1, 0.25, 0.4];
            
            return (
              <ScrollAnimator key={index} className={styles.cardAnimator} delay={delays[index] || 0.1} yOffset={40}>
                <div className={`${styles.card} ${cardClasses[index] || styles.cardCenter}`}>
                  <Image src={card.image} alt="About Card" width={320} height={320} sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 320px" className={styles.cardImage} />
                  <div className={styles.cardContent}>
                    <p>{card.content}</p>
                  </div>
                </div>
              </ScrollAnimator>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
