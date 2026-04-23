import React from 'react';
import styles from '../../../assets/style/scss/components/services/fca/FCASpecializedNeedsSection.module.scss';

const categories = [
  {
    title: 'NDIS Participants',
    description: 'Adults and adolescents seeking new or renewed plan funding.'
  },
  {
    title: 'Neuro Conditions',
    description: 'Our focus is on real-life change supporting people to do more of what matters to them each day.'
  },
  {
    title: 'Physical Disabilities',
    description: 'Mobility impairments requiring complex assistive tech.'
  },
  {
    title: 'Support Changes',
    description: 'Individuals experiencing significant functional decline or life transitions.'
  }
];

const FCASpecializedNeedsSection = () => {
  return (
    <section className={styles.specializedNeedsSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.badge}>Eligibility</div>
          <h2 className={styles.title}>
            Specialized for<br />
            high-complexity<br />
            needs.
          </h2>
          <p className={styles.description}>
            Our assessments are designed for individuals requiring clear clinical documentation to secure essential support services.
          </p>
        </div>
        
        <div className={styles.rightCol}>
          <div className={styles.grid}>
            {categories.map((item, index) => (
              <div key={index} className={styles.gridItem}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FCASpecializedNeedsSection;
