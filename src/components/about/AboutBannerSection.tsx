"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../assets/style/scss/components/about/AboutBannerSection.module.scss';
import { IMAGES } from '../../assets/images';
import ButtonLink from '../ButtonLink';
import ScrollAnimator from '../animation/ScrollAnimator';

import { aboutContent } from '@/content/about';

const AboutBannerSection = () => {
  const content = aboutContent.banner;
  const slides = [
    {
      src: content?.imageLeft || IMAGES.ABOUT_BANNER_LEFT,
      alt: 'Therapist with patient',
    },
    {
      src: content?.imageCenter || IMAGES.ABOUT_BANNER_CENTER,
      alt: 'Medical team',
    },
    {
      src: content?.imageRight || IMAGES.ABOUT_BANNER_RIGHT,
      alt: 'Nurse with elderly patient',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);

  if (!content) return null;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;

  return (
    <section className={styles.aboutBannerSection}>
      <div className={styles.imageGallery} aria-label="About Montra image carousel">
        {slides.map((slide, index) => {
          const slotClassName =
            index === activeIndex
              ? styles.imageCenter
              : index === previousIndex
                ? styles.imageSideLeft
                : index === nextIndex
                  ? styles.imageSideRight
                  : styles.imageHidden;

          return (
            <div
              key={slide.src}
              className={`${styles.imageSlide} ${slotClassName}`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className={styles.slotImage}
                priority={index === activeIndex}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.container}>
        <ScrollAnimator className={styles.textContent} delay={0.4} yOffset={30}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.description}>
            {content.description}
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/referral" className={styles.btnReferral} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
            <ButtonLink href="/assessment" variant="variant3" className={styles.btnAssessment} showArrowOnHover={false}>
              Book an Assessment
            </ButtonLink>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default AboutBannerSection;