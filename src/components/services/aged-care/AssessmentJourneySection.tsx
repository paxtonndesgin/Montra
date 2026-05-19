import React from 'react';
import styles from '../../../assets/style/scss/components/services/aged-care/AssessmentJourneySection.module.scss';
import { servicesContent } from '@/content/services';

const AssessmentJourneySection = () => {
  const content = servicesContent.agedCare.journey;

  if (!content) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
        </div>

        <div className={styles.timeline}>
          {content.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentJourneySection;
