import React from 'react';
import styles from '../../../assets/style/scss/components/services/aged-care/PrecisionImpactSection.module.scss';
import { CheckCircle } from 'lucide-react';
import { servicesContent } from '@/content/services';

const PrecisionImpactSection = () => {
  const content = servicesContent.agedCare.impact;

  if (!content) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <div className={styles.list}>
            {content.impacts.map((impact, index) => (
              <div key={index} className={styles.listItem}>
                <CheckCircle className={styles.icon} size={20} />
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightCol}>
          {content.cards.map((card, index) => (
            <div key={index} className={styles.infoCard}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrecisionImpactSection;
