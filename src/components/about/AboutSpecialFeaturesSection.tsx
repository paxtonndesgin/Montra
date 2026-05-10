"use client";

import React, { useState } from 'react';
import styles from '../../assets/style/scss/components/about/AboutSpecialFeaturesSection.module.scss';
import ScrollAnimator from '../animation/ScrollAnimator';

import { aboutContent } from '@/content/about';

const AboutSpecialFeaturesSection = () => {
  const [activeId, setActiveId] = useState<string>('03');
  const content = aboutContent.specialFeatures;

  if (!content) return null;

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
          <h2 className={styles.title}>{content.title}</h2>
        </ScrollAnimator>

        <ScrollAnimator delay={0.2} yOffset={30}>
          <div className={styles.accordion}>
          {content.features.map((feature) => {
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
