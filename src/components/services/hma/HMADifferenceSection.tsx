import React from 'react';
import styles from '../../../assets/style/scss/components/services/hma/HMADifferenceSection.module.scss';

const HMADifferenceSection = () => {
  const pillars = [
    {
      title: "Real-life Context",
      description: "We don't just assess rooms; we assess your daily flow, habits, and community interactions within the home environment.",
      color: "#1CA364"
    },
    {
      title: "Future-proofing",
      description: "Our clinical foresight accounts for progressive conditions, ensuring modifications remain functional for years, not just months.",
      color: "#28E68D"
    },
    {
      title: "Detail-oriented Documentation",
      description: "Detailed measurements and clear clinical reasoning facilitate smoother approvals through the NDIS funding portal.",
      color: "#78EFB7"
    }
  ];

  return (
    <section className={styles.differenceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Montra Difference</h2>
        
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
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
