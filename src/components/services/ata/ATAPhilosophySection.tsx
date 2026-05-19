import React from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAPhilosophySection.module.scss';

const pillars = [
  {
    title: 'Real-world focus',
    description: 'We assess you where life happens—at home, work, and in the community.',
  },
  {
    title: 'Long-term suitability',
    description: 'Equipment that grows with you, considering future needs and maintenance.',
  },
  {
    title: 'Structured justification',
    description: 'Every recommendation is backed by peer-reviewed evidence and clinical data.',
  },
  {
    title: 'Collaborative work',
    description: 'Working with your therapists and families to ensure a unified approach.',
  },
];

const ATAPhilosophySection = () => {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-service-heading className={styles.title}>Our Clinical Philosophy</h2>
        </div>

        <div className={styles.pillarsRow}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillar}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ATAPhilosophySection;
