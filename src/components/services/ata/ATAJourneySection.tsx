import React from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAJourneySection.module.scss';

const journeySteps = [
  {
    num: 1,
    title: 'Referral & Intake',
    description: 'We review your NDIS goals and current funding to ensure suitability.',
  },
  {
    num: 2,
    title: 'Clinical Consultation',
    description: 'An in-depth session to understand your functional capacity and challenges.',
  },
  {
    num: 3,
    title: 'Equipment Trials',
    description: 'Hands-on testing with suppliers to find the optimal technological solution.',
  },
  {
    num: 4,
    title: 'Report & Lodgement',
    description: 'Delivery of a high-quality report for NDIS submission and equipment ordering.',
  },
];

const ATAJourneySection = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>
            The<br />
            Assessment<br />
            Journey
          </h2>
        </div>

        <div className={styles.rightCol}>
          {journeySteps.map((step) => (
            <div key={step.num} className={styles.stepItem}>
              <div className={styles.stepNumberBox}>
                <span className={styles.stepNumber}>{step.num}</span>
              </div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ATAJourneySection;
