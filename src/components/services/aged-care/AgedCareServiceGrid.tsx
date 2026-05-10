import React from 'react';
import styles from '../../../assets/style/scss/components/services/aged-care/AgedCareServiceGrid.module.scss';
import { servicesContent } from '@/content/services';

const AgedCareServiceGrid = () => {
  const content = servicesContent.agedCare.serviceGrid;

  if (!content) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {content.services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{service.id}</span>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgedCareServiceGrid;
