import React from 'react';
import styles from '../../../assets/style/scss/components/services/oot/OOTServiceSection.module.scss';

import { servicesContent } from '@/content/services';

const OOTServiceSection = () => {
  const content = servicesContent.oot.service;

  if (!content) return null;

  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>{content.title}</h2>
        </div>
        <div className={styles.rightCol}>
          {content.services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardNumber}>{service.id}</span>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OOTServiceSection;
