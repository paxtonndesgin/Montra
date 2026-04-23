import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAJourneySection.module.scss';

const journeySteps = [
  { num: 1, title: 'Referral', description: 'Submission of details via our secure intake portal.' },
  { num: 2, title: 'Review', description: 'Clinical triage to ensure clinician client alignment.' },
  { num: 3, title: 'Schedule', description: 'Booking the home visit or telehealth consultation.' },
  { num: 4, title: 'Conduct', description: '3-4 hour comprehensive assessment session.' },
  { num: 5, title: 'Prepare', description: 'Clinical drafting, analysis, and quality assurance.' },
  { num: 6, title: 'Deliver', description: 'Final clinical report issued to the participant.' },
];

const FCAJourneySection = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Assessment Journey</h2>
          <p className={styles.subtitle}>Submission of details via our secure intake portal.</p>
        </div>

        <div className={styles.journeyWrapper}>
          {/* Đường kẻ màu xanh mint đặt phía trên */}
          <div className={styles.line}></div>
          
          <div className={styles.steps}>
            {journeySteps.map((step) => (
              <div key={step.num} className={styles.stepItem}>
                <div className={styles.stepBox}>
                  <div className={styles.stepNumber}>{step.num}</div>
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