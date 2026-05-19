"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../assets/style/scss/components/services/ata/ATAWhatIsSection.module.scss';
import { servicesContent } from '@/content/services';

const ATAWhatIsSection = () => {
  const content = servicesContent.ata.whatIs;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!content) return null;

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateActiveIndex = () => {
      const cards = Array.from(track.children) as HTMLElement[];

      if (!cards.length) {
        return;
      }

      const viewportCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    track.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      track.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [content.stats.length]);

  const handleDotClick = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;

    if (!track || !card) {
      return;
    }

    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setActiveIndex(index);
  };

  return (
    <section className={styles.whatIsSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <p className={styles.description}>{content.description}</p>
        </div>

        <div ref={trackRef} className={styles.rightCol}>
          {content.stats.map((stat, index) => (
            <div key={index} className={`${styles.statBox} ${styles[stat.colorClass || 'statBlue']}`}>
              <span className={styles.statNumber}>{stat.number}</span>
              <div className={styles.statContent}>
                <h4 className={styles.statTitle}>{stat.title}</h4>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselDots} aria-label="Carousel navigation">
          {content.stats.map((stat, index) => (
            <button
              key={stat.number}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to ${stat.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ATAWhatIsSection;
