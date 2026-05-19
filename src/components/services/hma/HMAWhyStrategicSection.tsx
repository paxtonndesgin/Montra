import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/hma/HMAWhyStrategicSection.module.scss';

import { servicesContent } from '@/content/services';

const HMAWhyStrategicSection = () => {
  const content = servicesContent.hma.whyStrategic;

  if (!content) return null;

  return (
    <section className={styles.strategicSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src={content.image}
              alt={content.title}
              width={811}
              height={575}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.textCol}>
          <div className={styles.textContent}>
            <h2 data-service-heading className={styles.title}>{content.title}</h2>
            <p className={styles.description}>
              {content.description}
            </p>
          </div>

          <div className={styles.statsRow}>
            {content.stats.map((stat, index) => (
              <div key={index} className={`${styles.statCard} ${stat.type === 'blue' ? styles.blueCard : styles.greenCard}`}>
                <h3>{stat.number}</h3>
                <span>{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMAWhyStrategicSection;
