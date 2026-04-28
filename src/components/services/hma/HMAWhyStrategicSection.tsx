import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/hma/HMAWhyStrategicSection.module.scss';

const HMAWhyStrategicSection = () => {
  return (
    <section className={styles.strategicSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/services/hma/strategic.png"
              alt="Why Strategic Modification Matters"
              width={811}
              height={575}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.textCol}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Why Strategic Modification Matters</h2>
            <p className={styles.description}>
              Poorly planned modifications lead to expensive rework and delayed independence. 
              Our clinical approach identifies the root cause of environmental barriers to ensure 
              the first solution is the right one.
            </p>
          </div>

          <div className={styles.statsRow}>
            <div className={`${styles.statCard} ${styles.blueCard}`}>
              <h3>0%</h3>
              <span>Tolerance for error</span>
            </div>
            <div className={`${styles.statCard} ${styles.greenCard}`}>
              <h3>24/7</h3>
              <span>Safe independence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMAWhyStrategicSection;
