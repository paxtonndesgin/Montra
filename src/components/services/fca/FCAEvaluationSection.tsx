import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAEvaluationSection.module.scss';
import Image from 'next/image';
import tickIcon from '../../../assets/icon/tick.svg';
import { servicesContent } from '@/content/services';

const FCAEvaluationSection = () => {
  const content = servicesContent.fca.evaluation;

  if (!content) return null;

  return (
    <section className={styles.evaluationSection}>
      <div className={styles.backgroundGraphic}></div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.leftCol}>
            <div className={styles.iconBox}>
              <span className={styles.icon}></span>
            </div>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.description}>{content.description}</p>
            
            <div className={styles.statsRow}>
              {content.stats.map((stat, index) => (
                <div key={index} className={stat.type === 'blue' ? styles.statBoxBlue : styles.statBoxGreen}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statText} dangerouslySetInnerHTML={{ __html: stat.text }} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.domainsCard}>
              <h3 className={styles.domainsTitle}>{content.domainsTitle}</h3>
              <div className={styles.domainsList}>
                {content.domains.map((domain, index) => (
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
