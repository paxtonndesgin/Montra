"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../../assets/style/scss/components/services/oot/OOTSupportSection.module.scss';

import { servicesContent } from '@/content/services';

const OOTSupportSection = () => {
  const content = servicesContent.oot.support;
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
  }, [content.cards.length]);

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
    <section className={styles.supportSection}>
      <div className={styles.container}>
        <h2 data-service-heading className={styles.title}>{content.title}</h2>
        
        <div ref={trackRef} className={styles.cardsGrid}>
          {content.cards.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselDots} aria-label="Therapy Support Areas carousel pagination">
          {content.cards.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`${styles.carouselDot} ${index === activeIndex ? styles.carouselDotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OOTSupportSection;
