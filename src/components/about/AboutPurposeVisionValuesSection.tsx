'use client';

import React from 'react';
import styles from '../../assets/style/scss/components/about/AboutPurposeVisionValuesSection.module.scss';
import Image from 'next/image';
import Vector4 from '../../assets/decor/design1/Vector-4.svg';
import Vector5 from '../../assets/decor/design1/Vector-5.svg';
import Vector6 from '../../assets/decor/design1/Vector-6.svg';
import ScrollAnimator from '../animation/ScrollAnimator';
import { useInView } from 'react-intersection-observer';

const AboutPurposeVisionValuesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section className={styles.aboutPurposeSection}>
      <div className={styles.container}>
        <ScrollAnimator delay={0} yOffset={30}>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Purpose Vision & Values</span>
          </h2>
        </ScrollAnimator>

        <div className={styles.contentLayout}>
          <ScrollAnimator className={styles.leftColumn} delay={0.1} yOffset={40}>
            <div className={styles.textBlock}>
              <h3 className={styles.blockTitle}>Purpose</h3>
              <p className={styles.blockText}>
                To provide occupational therapy that helps people engage more fully, safely and confidently in everyday life.
              </p>
            </div>
            <div className={styles.textBlock}>
              <h3 className={styles.blockTitle}>Vision</h3>
              <p className={styles.blockText}>
                To build a trusted therapy practice known for warm relationships, high-quality clinical care and practical outcomes.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator className={styles.centerColumn} delay={0.3} yOffset={30}>
            <div ref={ref} className={`${styles.animatedGraphic} ${inView ? styles.visible : ''}`}>
              <div className={styles.part5}>
                <Image src={Vector5} alt="Montra Decor" width={400} height={384} />
              </div>
              <div className={styles.part6}>
                <Image src={Vector6} alt="Montra Decor Bottom" width={394} height={286} />
              </div>
              <div className={styles.part4}>
                <Image src={Vector4} alt="Montra Decor Top" width={200} height={220} />
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator className={styles.rightColumn} delay={0.5} yOffset={40}>
            <div className={styles.textBlockLeft}>
              <h3 className={styles.blockTitle}>Values</h3>
              <p className={styles.blockText}>
                Compassion, integrity, collaboration, respect and person-centred care guide every aspect of our work.
              </p>
            </div>
            <div className={styles.textBlockLeft}>
              <h3 className={styles.blockTitle}>Approach</h3>
              <p className={styles.blockText}>
                We listen carefully, assess thoroughly and work alongside each person to identify realistic goals and meaningful next steps.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default AboutPurposeVisionValuesSection;
