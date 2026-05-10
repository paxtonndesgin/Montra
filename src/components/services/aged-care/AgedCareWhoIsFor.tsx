import React from 'react';
import styles from '../../../assets/style/scss/components/services/aged-care/AgedCareWhoIsFor.module.scss';
import { servicesContent } from '@/content/services';

const AgedCareWhoIsFor = () => {
  const content = servicesContent.agedCare.whoIsFor;

  if (!content || !content.cards) return null;

  // Split cards into rows for the specific layout
  const row1 = content.cards.slice(0, 2);
  const row2 = content.cards.slice(2, 4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.row}>
            {row1.map((card, idx) => (
              <div 
                key={idx} 
                className={`${styles.card} ${card.wide ? styles.cardWide : ''} ${card.variant === 'grey' ? styles.cardGrey : card.variant === 'blue' ? styles.cardBlue : styles.cardGreen}`}
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
                className={`${styles.card} ${card.wide ? styles.cardWide : ''} ${card.variant === 'grey' ? styles.cardGrey : card.variant === 'blue' ? styles.cardBlue : styles.cardGreen}`}
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

export default AgedCareWhoIsFor;
