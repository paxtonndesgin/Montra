import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTSupportSection.module.scss';

const OOTSupportSection = () => {
  const supports = [
    {
      title: "Daily Living Skills",
      description: "Developing strategies for essential tasks to enhance daily functional success.",
      image: "/images/services/oot/daily_living.png"
    },
    {
      title: "Independence",
      description: "Empowering participants to take control of their environment and routines.",
      image: "/images/services/oot/independence.png"
    },
    {
      title: "Cognitive Support",
      description: "Customized cognitive strategies to improve mental engagement and processing.",
      image: "/images/services/oot/cognitive.png"
    }
  ];

  return (
    <section className={styles.supportSection}>
      <div className={`${styles.bgCircle} ${styles.left}`}></div>
      <div className={`${styles.bgCircle} ${styles.right}`}></div>
      
      <div className={styles.container}>
        <h2 className={styles.title}>Therapy Support Areas</h2>
        
        <div className={styles.cardsGrid}>
          {supports.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
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

export default OOTSupportSection;
