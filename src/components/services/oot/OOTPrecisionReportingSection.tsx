import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTPrecisionReportingSection.module.scss';
import { IMAGES } from '../../../assets/images';

const cards = [
  {
    image: IMAGES.OOT_REPORTING_PARTICIPANTS,
    title: 'NDIS Participants',
    description: 'Developing essential routines for personal care, nutrition management, and domestic autonomy.',
    rotation: 'rotatePos',
  },
  {
    image: IMAGES.OOT_REPORTING_INDEPENDENCE,
    title: 'Independence',
    description: 'Systematic removal of barriers to facilitate full participation in social and occupational environments.',
    rotation: 'rotateNeg',
  },
  {
    image: IMAGES.OOT_REPORTING_COGNITIVE,
    title: 'Cognitive Support',
    description: 'Strategic interventions for memory, executive functioning, and emotional regulation in daily life.',
    rotation: 'rotatePos',
  },
];

const OOTPrecisionReportingSection = () => {
  return (
    <section className={styles.precisionSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Precision Reporting Standards</h2>
        <div className={styles.cardsRow}>
          {cards.map((card, index) => (
            <div key={index} className={`${styles.card} ${styles[card.rotation]}`}>
              <Image src={card.image} alt={card.title} fill className={styles.bgImage} />
              <div className={styles.gradientOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OOTPrecisionReportingSection;
