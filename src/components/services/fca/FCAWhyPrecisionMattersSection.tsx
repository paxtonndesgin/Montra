import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAWhyPrecisionMattersSection.module.scss';
import Image from 'next/image';
import { IMAGES } from '../../../assets/images';

import { servicesContent } from '@/content/services';

const FCAWhyPrecisionMattersSection = () => {
  const content = servicesContent.fca.whyPrecisionMatters;

  if (!content) return null;

  return (
    <section className={styles.whyPrecisionMattersSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.leftCol}>
            <Image 
              src={content.image} 
              alt={content.badge} 
              fill 
              className={styles.image} 
            />
            {/* Lớp phủ tạo hiệu ứng mờ dần sang trắng */}
            <div className={styles.fadeOverlay}></div>
          </div>
          
          <div className={styles.rightCol}>
            <div className={styles.badge}>{content.badge}</div>
            <h2 data-service-heading className={styles.title}>{content.title}</h2>
            
            <div className={styles.list}>
              {content.list.map((item, index) => (
                <div key={index} className={styles.listItem}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FCAWhyPrecisionMattersSection;