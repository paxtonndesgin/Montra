import React from 'react';
import styles from '../../../assets/style/scss/components/services/oot/OOTServiceSection.module.scss';

const OOTServiceSection = () => {
  const services = [
    {
      id: "01",
      title: "Goal Identification",
      description: "Comprehensive initial screening to align clinical outcomes with participant aspirations."
    },
    {
      id: "02",
      title: "Home Sessions",
      description: "Therapy delivered in the participant's primary environment for maximum ecological validity."
    },
    {
      id: "03",
      title: "Progres Monitoring",
      description: "Data-driven analysis of functional improvements and on going milestone reporting."
    },
    {
      id: "04",
      title: "Review Reports",
      description: "Formal documentation supporting NDIS plan reviews and funding justifications."
    }
  ];

  return (
    <section className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 className={styles.title}>Comprehensive Clinical Service</h2>
        </div>
        <div className={styles.rightCol}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardNumber}>{service.id}</span>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OOTServiceSection;
