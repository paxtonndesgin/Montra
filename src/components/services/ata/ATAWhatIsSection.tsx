import React from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAWhatIsSection.module.scss';
import { servicesContent } from '@/content/services';

const ATAWhatIsSection = () => {
  const content = servicesContent.ata.whatIs;

  if (!content) return null;

  return (
    <section className={styles.whatIsSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>
            {content.title}
          </h2>
          <p className={styles.description}>
            {content.description}
          </p>
        </div>

        <div className={styles.rightCol}>
          {content.stats.map((stat, index) => (
            <div key={index} className={`${styles.statBox} ${styles[stat.colorClass || 'statBlue']}`}>
              <span className={styles.statNumber}>{stat.number}</span>
              <div className={styles.statContent}>
                <h4 className={styles.statTitle}>{stat.title}</h4>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ATAWhatIsSection;
