import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTTargetedSection.module.scss';

const OOTTargetedSection = () => {
  const populations = [
    {
      title: "NDIS Participants",
      description: "Customized therapy plans for individuals with varied goals and funding requirements."
    },
    {
      title: "Families & Carers",
      description: "Providing support and education for the care network to ensure sustainable daily success."
    },
    {
      title: "Aged Care Providers",
      description: "Collaborative care for seniors to foster functional independence in various settings."
    }
  ];

  return (
    <section className={styles.targetedSection}>
      <div className={`${styles.bgCircle} ${styles.right}`}></div>
      
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/services/oot/targeted.png"
              alt="Targeted Care Populations"
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.title}>Targeted Care Populations</h2>
          <div className={styles.populationsList}>
            {populations.map((item, index) => (
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
