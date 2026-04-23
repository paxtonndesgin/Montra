import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCAWhyPrecisionMattersSection.module.scss';
import Image from 'next/image';
import { IMAGES } from '../../../assets/images';

const mattersList = [
  {
    title: 'Funding Approvals',
    description: 'Our reports use the exact language required by NDIA planners, significantly increasing the likelihood of funding approvals for critical supports.'
  },
  {
    title: 'Reduced Delays',
    description: 'By providing comprehensive evidence upfront, we minimize the need for the NDIA to request additional information, speeding up your plan review.'
  },
  {
    title: 'Direction for Therapy',
    description: 'More than a funding document, the FCA provides a strategic roadmap for your ongoing therapy and intervention goals.'
  }
];

const FCAWhyPrecisionMattersSection = () => {
  return (
    <section className={styles.whyPrecisionMattersSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.leftCol}>
            <Image 
              src={IMAGES.BANNER_1} 
              alt="Why precision matters" 
              fill 
              className={styles.image} 
            />
            {/* Lớp phủ tạo hiệu ứng mờ dần sang trắng */}
            <div className={styles.fadeOverlay}></div>
          </div>
          
          <div className={styles.rightCol}>
            <div className={styles.badge}>Strategic value</div>
            <h2 className={styles.title}>
              Why precision<br />
              matters in NDIS<br />
              pathways.
            </h2>
            
            <div className={styles.list}>
              {mattersList.map((item, index) => (
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