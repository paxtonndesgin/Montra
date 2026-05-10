import React from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAFrameworkSection.module.scss';
import { servicesContent } from '@/content/services';

const ATAFrameworkSection = () => {
  const content = servicesContent.ata.framework;

  if (!content) return null;

  const cardLarge = content.cards.find(c => c.size === 'large');
  const cardMedium = content.cards.find(c => c.size === 'medium');
  const smallCards = content.cards.filter(c => c.size === 'small');

  return (
    <section className={styles.frameworkSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
        </div>

        <div className={styles.gridWrapper}>
          {/* Large Left Card */}
          {cardLarge && (
            <div className={`${styles.card} ${styles.cardLarge}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cardLarge.title}</h3>
                <p className={styles.cardDescription}>
                  {cardLarge.description}
                </p>
              </div>
            </div>
          )}

          {/* Right Side Column */}
          <div className={styles.rightColumn}>
            {/* Top Right Card */}
            {cardMedium && (
              <div className={`${styles.card} ${styles.cardMedium}`}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{cardMedium.title}</h3>
                  <p className={styles.cardDescription}>
                    {cardMedium.description}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Row of two cards */}
            <div className={styles.bottomRow}>
              {smallCards.map((card, idx) => (
                <div key={idx} className={`${styles.card} ${styles.cardSmall} ${card.variant === 'blue' ? styles.blueBg : styles.cyanBg}`}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitleLight}>{card.title}</h3>
                    <p className={styles.cardDescriptionLight}>
                      {card.description}
                    </p>
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

export default ATAFrameworkSection;
