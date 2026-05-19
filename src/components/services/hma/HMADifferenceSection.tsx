import React from 'react';
import styles from '../../../assets/style/scss/components/services/hma/HMADifferenceSection.module.scss';

import { servicesContent } from '@/content/services';

const HMADifferenceSection = () => {
  const content = servicesContent.hma.difference;

  if (!content) return null;

  return (
    <section className={styles.differenceSection}>
      <div className={styles.container}>
        <h2 data-service-heading className={styles.title}>{content.title}</h2>
        
        <div className={styles.pillarsGrid}>
          {content.pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={styles.pillarCard} 
              style={{ borderTopColor: pillar.color }}
            >
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HMADifferenceSection;
