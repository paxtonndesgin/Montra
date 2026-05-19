import React from 'react';
import styles from '../../../assets/style/scss/components/services/paediatric/ClinicalPathwaySection.module.scss';
import { servicesContent } from '@/content/services';

const ClinicalPathwaySection = () => {
  const content = servicesContent.paediatric.pathway;

  if (!content) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>
        
        <div className={styles.pathway}>
          {content.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.numberBox}>
                <span>{step.number}</span>
              </div>
              <div className={styles.stepContent}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalPathwaySection;
