import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAEvaluationSection.module.scss';
import Image from 'next/image';
import tickIcon from '../../../assets/icon/tick.svg';
const domains = [
  {
    title: 'Daily Living Skills',
    description: 'Self-care, nutrition, and home management.'
  },
  {
    title: 'Mobility & Access',
    description: 'Transfers, community navigation, and physical capacity.'
  },
  {
    title: 'Cognitive Capacity',
    description: 'Decision making, social interactions, and memory.'
  },
  {
    title: 'Environmental Factors',
    description: 'Home modifications and assistive technology needs.'
  }
];

const FCAEvaluationSection = () => {
  return (
    <section className={styles.evaluationSection}>
      <div className={styles.backgroundGraphic}></div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.leftCol}>
            <div className={styles.iconBox}>
              <span className={styles.icon}></span>
            </div>
            <h2 className={styles.title}>
              A comprehensive<br />
              evaluation of<br />
              <span className={styles.highlight}>independence.</span>
            </h2>
            <p className={styles.description}>
              Functional Capacity Assessment (FCA) is a detailed investigation into how an individual&apos;s disability impacts their everyday life across all life domains.
            </p>
            
            <div className={styles.statsRow}>
              <div className={styles.statBoxBlue}>
                <span className={styles.statNumber}>12-15</span>
                <span className={styles.statText}>Average Hours invested per<br/>report</span>
              </div>
              <div className={styles.statBoxGreen}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statText}>Clinician verified evidence</span>
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.domainsCard}>
              <h3 className={styles.domainsTitle}>Domains of Evaluation</h3>
              <div className={styles.domainsList}>
                {domains.map((domain, index) => (
                  <div key={index} className={styles.domainItem}>
                    <div className={styles.checkIcon}>
                      <Image src={tickIcon} alt="" width={16} height={16} />
                    </div>
                    <div className={styles.domainText}>
                      <h4>{domain.title}</h4>
                      <p>{domain.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FCAEvaluationSection;
