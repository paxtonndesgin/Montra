import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCASpecializedNeedsSection.module.scss';

import { servicesContent } from '@/content/services';

const FCASpecializedNeedsSection = () => {
  const content = servicesContent.fca.specializedNeeds;

  if (!content) return null;

  return (
    <section className={styles.specializedNeedsSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.badge}>{content.badge}</div>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <p className={styles.description}>{content.description}</p>
        </div>
        
        <div className={styles.rightCol}>
          <div className={styles.grid}>
            {content.categories.map((item, index) => (
              <div key={index} className={styles.gridItem}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FCASpecializedNeedsSection;
