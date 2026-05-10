import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/aged-care/IndependenceSection.module.scss';
import { servicesContent } from '@/content/services';

const IndependenceSection = () => {
  const content = servicesContent.agedCare.independence;

  if (!content) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div className={styles.cardsRow}>
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
              <div className={styles.cardContent}>
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

export default IndependenceSection;
