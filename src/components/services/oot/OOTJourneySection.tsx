import React from 'react';
import styles from '../../../assets/style/scss/components/services/oot/OOTJourneySection.module.scss';

import { servicesContent } from '@/content/services';

const OOTJourneySection = () => {
  const content = servicesContent.oot.journey;

  if (!content) return null;

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          {content.subtitle && <p className={styles.subtitle}>{content.subtitle}</p>}
        </div>
        
        <div className={styles.stepsWrapper}>
          {content.steps.map((step, index) => (
            <div key={index} className={styles.step}>
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

export default OOTJourneySection;
