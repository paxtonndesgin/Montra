"use client";

import React, { useState } from 'react';
import styles from '../../assets/style/scss/components/about/AboutSpecialFeaturesSection.module.scss';
import ScrollAnimator from '../animation/ScrollAnimator';

const features = [
  {
    id: '01',
    title: '(01) Person-centred care',
    content: 'Every recommendation and intervention is tailored to the individual, their goals and their daily environment.'
  },
  {
    id: '02',
    title: '(02) Practical support',
    content: 'We focus on practical, actionable strategies that can be implemented into everyday life.'
  },
  {
    id: '03',
    title: '(03) Collaborative communication',
    content: 'We value working closely with participants, families, carers and the wider support team.'
  },
  {
    id: '04',
    title: '(04) Community-based service delivery',
    content: 'We deliver our services where they matter most – in homes, schools, workplaces and the community.'
  }
];

const AboutSpecialFeaturesSection = () => {
  const [activeId, setActiveId] = useState<string>('03');

  const toggleFeature = (id: string) => {
    if (activeId === id) {
      setActiveId('');
    } else {
      setActiveId(id);
    }
  };

  return (
    <section className={styles.aboutSpecialFeaturesSection}>
      <div className={styles.container}>
        <ScrollAnimator delay={0} yOffset={30}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Special</span> Features
          </h2>
        </ScrollAnimator>

        <ScrollAnimator delay={0.2} yOffset={30}>
          <div className={styles.accordion}>
          {features.map((feature) => {
            const isActive = activeId === feature.id;
            return (
              <div key={feature.id} className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}>
                <div className={styles.accordionHeader} onClick={() => toggleFeature(feature.id)}>
                  <h3 className={styles.itemTitle}>{feature.title}</h3>
                  <button title='button-icon' className={styles.iconBtn}>
                    <span className={styles.icon}></span>
                  </button>
                </div>
                {isActive && (
                  <div className={styles.accordionContent}>
                    <p>{feature.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default AboutSpecialFeaturesSection;
