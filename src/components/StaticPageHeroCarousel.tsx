"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../assets/style/scss/pages/static-page.module.scss';

type CarouselSlide = {
  src: string;
  alt: string;
};

type StaticPageHeroCarouselProps = {
  slides: CarouselSlide[];
  intervalMs?: number;
  initialIndex?: number;
};

const getSlotClassName = (index: number, activeIndex: number, total: number) => {
  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  if (index === activeIndex) {
    return styles.heroCarouselSlideCurrent;
  }

  if (index === previousIndex) {
    return styles.heroCarouselSlidePrev;
  }

  if (index === nextIndex) {
    return styles.heroCarouselSlideNext;
  }

  return styles.heroCarouselSlideHidden;
};

const StaticPageHeroCarousel = ({
  slides,
  intervalMs = 3200,
  initialIndex = 0,
}: StaticPageHeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, slides.length]);

  return (
    <div className={styles.heroCarousel} aria-label="Rotating hero gallery">
      {slides.map((slide, index) => (
        <figure
          key={slide.src}
          className={`${styles.heroCarouselSlide} ${getSlotClassName(index, activeIndex, slides.length)}`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={styles.heroCarouselImage}
            sizes="(max-width: 768px) 100vw, 42vw"
            priority={index === activeIndex}
          />
        </figure>
      ))}
    </div>
  );
};

export default StaticPageHeroCarousel;
