import React from 'react';
import styles from '../../assets/style/scss/components/about/AboutAchievementSection.module.scss';
import Image from 'next/image';
import { IMAGES } from '../../assets/images';
import ScrollAnimator from '../animation/ScrollAnimator';

const achievements = [
  {
    id: 1,
    title: 'Warm and professional approach',
    description: 'We aim to make the therapy process feel supportive, respectful and easy to navigate.',
    color: '#FF61CD',
  },
  {
    id: 2,
    title: 'Clear recommendations',
    description: 'Our reports and recommendations are practical, well-reasoned and focused on meaningful outcomes.',
    color: '#337AF6',
  },
  {
    id: 3,
    title: 'Evidence-informed practice',
    description: 'Our work is guided by clinical reasoning, best practice principles and real-world function.',
    color: '#FF9D2E',
  },
  {
    id: 4,
    title: 'Thoughtful assessments',
    description: 'We take a thorough and functional approach to understanding each person’s strengths, challenges and support needs.',
    color: '#22C478',
  },
  {
    id: 5,
    title: 'Broad community experience',
    description: 'We support individuals across disability, paediatrics, aged care and complex community settings.',
    color: '#FF7272',
  },
  {
    id: 6,
    title: 'Functional focus',
    description: 'We keep everyday participation, independence and quality of life at the centre of what we do.',
    color: '#8D8D8D',
  }
];

const AboutAchievementSection = () => {
  return (
    <section className={styles.aboutAchievementSection}>
      <ScrollAnimator className={styles.backgroundTextContainer} delay={0} yOffset={20}>
        <h2 className={styles.backgroundText}>Achievement</h2>
      </ScrollAnimator>

      <ScrollAnimator delay={0.2} yOffset={40}>
        <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {[...achievements, ...achievements].map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.card}>
              <Image 
                src={IMAGES.BANNER_1} 
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
