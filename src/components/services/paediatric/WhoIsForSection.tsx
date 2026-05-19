import React from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/paediatric/WhoIsForSection.module.scss';
import brainIcon from '../../../assets/icon/pae-occ-therap-icon.svg';
import certificationIcon from '../../../assets/icon/Icon-19.svg';
import { servicesContent } from '@/content/services';

const WhoIsForSection = () => {
  const content = servicesContent.paediatric.whoIsFor;

  if (!content) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <div className={styles.list}>
            {content.items?.map((item, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.number}>{item.id}</span>
                <div className={styles.content}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.rightContentWrapper}>
            <div className={styles.topContent}>
              <div className={styles.justificationBadge}>
                <span>{content.rightCol?.badge}</span>
              </div>
              
              <div className={styles.rightTitleHeader}>
                <div className={styles.iconBox}>
                  <Image src={brainIcon} alt="Icon" width={22} height={22} />
                </div>
                <h2 data-service-heading className={styles.rightTitle}>{content.rightCol?.title}</h2>
              </div>

              <p className={styles.rightDescription}>
                {content.rightCol?.description}
              </p>
            </div>

            <div className={styles.certifiedBadge}>
              <div className={styles.checkIcon}>
                <Image src={certificationIcon} alt="Clinical Governance Certified" width={22} height={21} />
              </div>
              <span>Clinical Governance Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
