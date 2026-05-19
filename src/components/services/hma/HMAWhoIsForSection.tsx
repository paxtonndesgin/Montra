import React from 'react';
import styles from '../../../assets/style/scss/components/services/hma/HMAWhoIsForSection.module.scss';

import { servicesContent } from '@/content/services';

const HMAWhoIsForSection = () => {
  const content = servicesContent.hma.whoIsFor;

  if (!content) return null;

  return (
    <section className={styles.whoIsForSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
        </div>
        
        <div className={styles.rightCol}>
          {content.items?.map((item, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{item.id}</span>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HMAWhoIsForSection;
