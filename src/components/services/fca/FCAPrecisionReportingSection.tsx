import React from 'react';
import Image from 'next/image';
import DiaIcon from '../../../assets/icon/dia.svg';
import styles from '../../../assets/style/scss/components/services/fca/FCAPrecisionReportingSection.module.scss';
import tickIcon from '../../../assets/icon/tick.svg'
import { servicesContent } from '@/content/services';

const FCAPrecisionReportingSection = () => {
  const content = servicesContent.fca.precisionReporting;

  if (!content) return null;

  return (
    <section className={styles.precisionReportingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBoxGreen}>
                <Image src={DiaIcon} alt="" width={18} height={18} />
              </div>
              <h3 className={styles.cardTitleGreen}>{content.evaluationProcess.title}</h3>
            </div>
            <div className={styles.list}>
              {content.evaluationProcess.list.map((item, index) => (
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
              <h3 className={styles.cardTitleGreen}>{content.finalReport.title}</h3>
            </div>
            <div className={styles.list}>
              {content.finalReport.list.map((item, index) => (
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
