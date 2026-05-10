import React from 'react';
import styles from '../../../assets/style/scss/components/services/hma/HMAJourneySection.module.scss';

import { servicesContent } from '@/content/services';

const HMAJourneySection = () => {
  const content = servicesContent.hma.journey;

  if (!content) return null;

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        
        <div className={styles.stepsGrid}>
          {content.steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={`${styles.numberBox} ${step.isHighlighted ? styles.highlighted : ''}`}>
                <span>{step.id}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HMAJourneySection;
