import React from 'react';
import { Check } from 'lucide-react';
import styles from '../../../assets/style/scss/components/services/hma/HMARedefiningSection.module.scss';

const HMARedefiningSection = () => {
  const factors = [
    "Functional daily routines",
    "Environmental safety risks",
    "Accessibility bottlenecks",
    "Anticipated future needs",
    "NDIS compliance audits"
  ];

  return (
    <section className={styles.redefiningSection}>
      <div className={styles.container}>
        <div className={styles.mainCard}>
          <div className={styles.leftCol}>
            <div className={styles.header}>
              <div className={styles.iconBox}>
                <Check size={20} color="#FFFFFF" />
              </div>
              <h2 className={styles.title}>Redefining Accessibility</h2>
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.subtitle}>Defining Modifications</h3>
              <p className={styles.description}>
                From minor adjustments like grab rails and hand-held showers to complex structural changes 
                including bathroom re-configurations and ramp installations. We bridge the gap between 
                architectural possibility and clinical necessity.
              </p>
            </div>

            <div className={styles.typesRow}>
              <div className={styles.typeCard}>
                <h4>Complex</h4>
                <span>High Structural</span>
              </div>
              <div className={styles.typeCard}>
                <h4>Minor</h4>
                <span>Low Complexity</span>
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <h3 className={styles.factorsTitle}>Assessment Factors</h3>
            <ul className={styles.factorsList}>
              {factors.map((factor, index) => (
                <li key={index} className={styles.factorItem}>
                  <div className={styles.checkIcon}>
                    <Check size={12} color="#FFFFFF" />
                  </div>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMARedefiningSection;
