import React from 'react';
import styles from '../../../assets/style/scss/components/services/hma/HMAJourneySection.module.scss';

const HMAJourneySection = () => {
  const steps = [
    {
      id: 1,
      title: "Referral",
      description: "Submit your initial request through our digital portal."
    },
    {
      id: 2,
      title: "Triage",
      description: "Clinical review to match you with the right specialist."
    },
    {
      id: 3,
      title: "Home Visit",
      description: "In-depth on-site assessment and measurements."
    },
    {
      id: 4,
      title: "Collab",
      description: "Consultation with builders and stakeholders."
    },
    {
      id: 5,
      title: "Drafting",
      description: "Developing the clinical report and justification."
    },
    {
      id: 6,
      title: "Delivery",
      description: "Submission to NDIS and final report handover.",
      isHighlighted: true
    }
  ];

  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Assessment Journey</h2>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
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
