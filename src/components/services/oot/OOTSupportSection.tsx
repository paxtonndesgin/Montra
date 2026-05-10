import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTSupportSection.module.scss';

import { servicesContent } from '@/content/services';

const OOTSupportSection = () => {
  const content = servicesContent.oot.support;

  if (!content) return null;

  return (
    <section className={styles.supportSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        
        <div className={styles.cardsGrid}>
          {content.cards.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
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

export default OOTSupportSection;
