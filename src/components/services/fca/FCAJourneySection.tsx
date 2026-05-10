import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAJourneySection.module.scss';

import { servicesContent } from '@/content/services';

const FCAJourneySection = () => {
  const content = servicesContent.fca.journey;

  if (!content) return null;

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          {content.subtitle && <p className={styles.subtitle}>{content.subtitle}</p>}
        </div>

        <div className={styles.journeyWrapper}>
          {/* Đường kẻ màu xanh mint đặt phía trên */}
          <div className={styles.line}></div>
          
          <div className={styles.steps}>
            {content.steps.map((step) => (
              <div key={step.number} className={styles.stepItem}>
                <div className={styles.stepBox}>
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FCAJourneySection;