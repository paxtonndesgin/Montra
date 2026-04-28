import React from 'react';
import styles from '../../../assets/style/scss/components/services/hma/HMAWhoIsForSection.module.scss';

const HMAWhoIsForSection = () => {
  const items = [
    {
      id: "01",
      title: "NDIS Participants",
      description: "Requiring structural home changes."
    },
    {
      id: "02",
      title: "Fall Risk Individuals",
      description: "Enhancing safety through environmental design."
    },
    {
      id: "03",
      title: "Transitions",
      description: "Coming home from hospital or care facilities."
    }
  ];

  return (
    <section className={styles.whoIsForSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>Who This Is For</h2>
        </div>
        
        <div className={styles.rightCol}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{item.id}</span>
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

export default HMAWhoIsForSection;
