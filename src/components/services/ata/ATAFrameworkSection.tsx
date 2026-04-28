import React from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAFrameworkSection.module.scss';

const ATAFrameworkSection = () => {
  return (
    <section className={styles.frameworkSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Assessment Framework</h2>
        </div>

        <div className={styles.gridWrapper}>
          {/* Large Left Card */}
          <div className={`${styles.card} ${styles.cardLarge}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Clinical Reasoning Report</h3>
              <p className={styles.cardDescription}>
                Detailed NDIS-ready documentation featuring technical specifications and long-term functional benefits.
              </p>
            </div>
          </div>

          {/* Right Side Column */}
          <div className={styles.rightColumn}>
            {/* Top Right Card */}
            <div className={`${styles.card} ${styles.cardMedium}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Comprehensive Trials</h3>
                <p className={styles.cardDescription}>
                  Hands-on testing with multiple equipment options in your real-world environment to ensure fit-for-purpose outcomes.
                </p>
              </div>
            </div>

            {/* Bottom Row of two cards */}
            <div className={styles.bottomRow}>
              <div className={`${styles.card} ${styles.cardSmall} ${styles.blueBg}`}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitleLight}>Supplier Sync</h3>
                  <p className={styles.cardDescriptionLight}>
                    Direct collaboration with equipment vendors for custom builds.
                  </p>
                </div>
              </div>
              <div className={`${styles.card} ${styles.cardSmall} ${styles.cyanBg}`}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitleLight}>Needs Review</h3>
                  <p className={styles.cardDescriptionLight}>
                    Initial consult to define goals and current barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATAFrameworkSection;
