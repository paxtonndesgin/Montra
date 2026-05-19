import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTTargetedCareSection.module.scss';
import { IMAGES } from '../../../assets/images';

const populations = [
  {
    title: 'NDIS Participants',
    description: 'Self-managed, plan-managed, or NDIA-managed participants seeking outcome-focused therapy.',
  },
  {
    title: 'Families & Carers',
    description: 'Families requiring professional guidance on home modification and capacity building.',
  },
  {
    title: 'Aged Care Providers',
    description: 'Partnerships for long-term functional maintenance and safety assessments.',
  },
];

const OOTTargetedCareSection = () => {
  return (
    <section className={styles.targetedCareSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageCol}>
            <Image
              src={IMAGES.OOT_TARGETED_CARE}
              alt="Targeted Care Populations"
              fill
              className={styles.image}
            />
            <div className={styles.imageGradient} />
          </div>
          <div className={styles.contentCol}>
            <h2 data-service-heading className={styles.sectionTitle}>Targeted Care Populations</h2>
            <div className={styles.list}>
              {populations.map((item, index) => (
                <div key={index} className={styles.listItem}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OOTTargetedCareSection;
