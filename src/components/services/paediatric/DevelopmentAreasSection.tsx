import React from 'react';
import styles from '../../../assets/style/scss/components/services/paediatric/DevelopmentAreasSection.module.scss';
import { servicesContent } from '@/content/services';

const DevelopmentAreasSection = () => {
  const content = servicesContent.paediatric.developmentAreas;

  if (!content) return null;

  // Split cards into rows for the specific layout
  const row1 = content.cards.slice(0, 2);
  const row2 = content.cards.slice(2, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.row}>
            {row1.map((card, idx) => (
              <div 
                key={idx} 
                className={`${styles.card} ${card.wide ? styles.cardLarge : styles.cardSmall} ${card.variant === 'grey' ? styles.cardGrey : card.variant === 'blue' ? styles.cardBlue : styles.cardGreen}`}
              >
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.row}>
            {row2.map((card, idx) => (
              <div 
                key={idx} 
                className={`${styles.card} ${card.wide ? styles.cardLarge : styles.cardSmall} ${card.variant === 'grey' ? styles.cardGrey : card.variant === 'blue' ? styles.cardBlue : styles.cardGreen}`}
              >
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentAreasSection;
