import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTTargetedSection.module.scss';

import { servicesContent } from '@/content/services';

const OOTTargetedSection = () => {
  const content = servicesContent.oot.targeted;

  if (!content) return null;

  return (
    <section className={styles.targetedSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src={content.image}
              alt={content.title}
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>

        <div className={styles.textCol}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <div className={styles.populationsList}>
            {content.populations.map((item, index) => (
              <div key={index} className={styles.populationItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOTTargetedSection;
