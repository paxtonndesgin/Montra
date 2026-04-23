import React from 'react';
import Image from 'next/image';
import DiaIcon from '../../../assets/icon/dia.svg';
import styles from '../../../assets/style/scss/components/services/fca/FCAPrecisionReportingSection.module.scss';
import tickIcon from '../../../assets/icon/tick.svg'
const processList = [
  { num: '01', title: 'Review of Medical History', text: 'Analysis of existing reports and diagnostic documentation.' },
  { num: '02', title: 'In-Depth Interview', text: 'Consultation with the participant and their core support network.' },
  { num: '03', title: 'Direct Observation', text: 'Real-world assessment of functional performance in the home.' },
  { num: '04', title: 'Standardized Tools', text: 'Evidence-based assessment tools (WHODAS, LSP-16, etc).' },
];

const reportList = [
  { title: 'Detailed Functional Analysis', text: 'Categorized by NDIS domain requirements.' },
  { title: 'Clinical Reasoning', text: 'Scientific justification for every recommendation made.' },
  { title: 'Funding Justification', text: 'Meeting the "Reasonable and Necessary" criteria.' },
  { title: 'Actionable Recommendations', text: 'Specific therapy hours and equipment needs.' },
];

const FCAPrecisionReportingSection = () => {
  return (
    <section className={styles.precisionReportingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Precision Reporting Standards</h2>
          <p className={styles.subtitle}>Every FCA includes an exhaustive clinical deep-dive.</p>
        </div>

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBoxGreen}>
                <Image src={DiaIcon} alt="" width={18} height={18} />
              </div>
              <h3 className={styles.cardTitleGreen}>The Evaluation Process</h3>
            </div>
            <div className={styles.list}>
              {processList.map((item, index) => (
                <div key={index} className={styles.listItem}>
                  <div className={styles.numberGreen}>{item.num}</div>
                  <div className={styles.textContainer}>
                    <h4 className={styles.itemTitleBlue}>{item.title}</h4>
                    <p className={styles.itemText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBoxGreen}>
                <Image src={DiaIcon} alt="" width={18} height={18} />
              </div>
              <h3 className={styles.cardTitleGreen}>The Final Report</h3>
            </div>
            <div className={styles.list}>
              {reportList.map((item, index) => (
                <div key={index} className={styles.listItem}>
                  <div className={styles.checkIconBlue}>
                    <Image src={tickIcon} alt="" width={16} height={16} />
                  </div>
                  <div className={styles.textContainer}>
                    <h4 className={styles.itemTitleBlue}>{item.title}</h4>
                    <p className={styles.itemText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FCAPrecisionReportingSection;
