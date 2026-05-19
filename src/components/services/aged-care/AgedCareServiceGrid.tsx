"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../assets/style/scss/components/services/aged-care/AgedCareServiceGrid.module.scss';
import { servicesContent } from '@/content/services';

const AgedCareServiceGrid = () => {
  const content = servicesContent.agedCare.serviceGrid;
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
  }, [content.services.length]);

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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 data-service-heading className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div ref={trackRef} className={styles.grid}>
          {content.services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{service.id}</span>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselDots} aria-label="Comprehensive Clinical Service carousel pagination">
          {content.services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              className={`${styles.carouselDot} ${index === activeIndex ? styles.carouselDotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${service.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgedCareServiceGrid;
