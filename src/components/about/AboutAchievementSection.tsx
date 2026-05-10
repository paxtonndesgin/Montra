import React from 'react';
import styles from '../../assets/style/scss/components/about/AboutAchievementSection.module.scss';
import Image from 'next/image';
import { IMAGES } from '../../assets/images';
import ScrollAnimator from '../animation/ScrollAnimator';

import { aboutContent } from '@/content/about';

const AboutAchievementSection = () => {
  const content = aboutContent.achievement;

  if (!content) return null;

  return (
    <section className={styles.aboutAchievementSection}>
      <ScrollAnimator className={styles.backgroundTextContainer} delay={0} yOffset={20}>
        <h2 className={styles.backgroundText}>{content.title}</h2>
      </ScrollAnimator>

      <ScrollAnimator delay={0.2} yOffset={40}>
        <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {[...content.items, ...content.items].map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.card}>
              <Image 
                src={IMAGES.ABOUT_ACHIEVEMENT} 
                alt={item.title} 
                fill 
                className={styles.cardImage} 
              />
              <div 
                className={styles.cardGradient} 
                style={{ background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, ${item.color} 85%)` }}
              ></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </ScrollAnimator>
    </section>
  );
};

export default AboutAchievementSection;
