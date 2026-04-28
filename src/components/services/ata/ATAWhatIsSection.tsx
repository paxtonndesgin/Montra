import React from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAWhatIsSection.module.scss';

const stats = [
  {
    number: '01',
    title: 'Functional Needs',
    description: 'Comprehensive initial screening to align clinical outcomes with participant aspirations.',
    colorClass: 'statBlue',
  },
  {
    number: '02',
    title: 'Safety & Risk',
    description: 'Mitigating environmental hazards and ensuring long-term physical wellbeing through ergonomics.',
    colorClass: 'statBlue',
  },
  {
    number: '03',
    title: 'NDIS Criteria',
    description: "Direct alignment with 'Reasonable and Necessary' benchmarks for successful funding outcomes.",
    colorClass: 'statBlue',
  },
];

const ATAWhatIsSection = () => {
  return (
    <section className={styles.whatIsSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>
            What is Assistive<br />
            Technology?
          </h2>
          <p className={styles.description}>
            Assistive Technology (AT) includes any device or system that helps you perform tasks you might otherwise find difficult or impossible. From simple kitchen aids to complex customized mobility solutions, we focus on identifying the right tool for your specific environment and goals.
          </p>
        </div>

        <div className={styles.rightCol}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statBox} ${styles[stat.colorClass]}`}>
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
