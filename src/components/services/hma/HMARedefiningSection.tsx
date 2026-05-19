import React from 'react';
import Image from 'next/image';
import tickIcon from '../../../assets/icon/tick.svg';
import homeApartIcon from '../../../assets/icon/home-apart-icon.svg';
import styles from '../../../assets/style/scss/components/services/hma/HMARedefiningSection.module.scss';

import { servicesContent } from '@/content/services';

const HMARedefiningSection = () => {
  const content = servicesContent.hma.redefining;

  if (!content) return null;

  return (
    <section className={styles.redefiningSection}>
      <div className={styles.container}>
        <div className={styles.mainCard}>
          <div className={styles.leftCol}>
            <div className={styles.header}>
              <div className={styles.iconBox}>
                <Image src={homeApartIcon} alt="Accessibility" width={22} height={18} />
              </div>
              <h2 data-service-heading className={styles.title}>{content.title}</h2>
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.subtitle}>{content.subtitle}</h3>
              <p className={styles.description}>
                {content.description}
              </p>
            </div>

            <div className={styles.typesRow}>
              {content.types.map((type, index) => (
                <div key={index} className={styles.typeCard}>
                  <h4>{type.title}</h4>
                  <span>{type.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            <h3 className={styles.factorsTitle}>{content.factorsTitle}</h3>
            <ul className={styles.factorsList}>
              {content.factors.map((factor, index) => (
                <li key={index} className={styles.factorItem}>
                  <div className={styles.factorIcon}>
                    <Image src={tickIcon} alt="Tick" width={24} height={24} />
                  </div>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HMARedefiningSection;
