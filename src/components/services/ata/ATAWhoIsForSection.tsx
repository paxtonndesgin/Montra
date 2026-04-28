import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/ata/ATAWhoIsForSection.module.scss';
import { IMAGES } from '../../../assets/images';

const categories = [
  {
    title: 'NDIS Participants',
    description: 'Individuals seeking greater autonomy through specialized equipment and modifications.',
    image: IMAGES.BANNER_1,
  },
  {
    title: 'Support Coordinators',
    description: 'Partners looking for rigorous clinical documentation to support participant plan reviews.',
    image: IMAGES.BANNER_1,
  },
  {
    title: 'Families & Carers',
    description: 'Care circles needing expert guidance on equipment that reduces carer strain and improves safety.',
    image: IMAGES.BANNER_1,
  },
];

const ATAWhoIsForSection = () => {
  return (
    <section className={styles.whoIsForSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Who This Is For</h2>
          <p className={styles.subtitle}>Specialized support for the entire care network.</p>
        </div>

        <div className={styles.cardsRow}>
          {categories.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ATAWhoIsForSection;
