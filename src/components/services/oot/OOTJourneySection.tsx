import React from 'react';
import styles from '../../../assets/style/scss/components/services/oot/OOTJourneySection.module.scss';

const OOTJourneySection = () => {
  const steps = [
    {
      id: 1,
      title: "Referral",
      description: "Digital submission of participant details and preliminary goals via our secure portal."
    },
    {
      id: 2,
      title: "Assessment",
      description: "Clinical triage to in-depth functional capacity assessment to establish clinical baseline and intervention scope."
    },
    {
      id: 3,
      title: "Implementation",
      description: "Delivery of structured therapy sessions focused on targeted functional domains.",
      isHighlighted: true
    }
  ];

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Clinical Journey</h2>
          <p className={styles.subtitle}>Submission of details via our secure intake portal.</p>
        </div>
        
        <div className={styles.stepsWrapper}>
          {steps.map((step, index) => (
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
