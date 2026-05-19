"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FuncCapIcon from '../assets/icon/func-cap-asset-icon.svg'
import OngOccTherapIcon from '../assets/icon/ong-occ-therap-icon.svg'
import AssistTechIcon from '../assets/icon/assis-tech-assessments-icon.svg'
import HomeModifiIcon from '../assets/icon/home-modifi-icon.svg'
import PaeOccTherapIcon from '../assets/icon/pae-occ-therap-icon.svg'
import AgedCareIcon from '../assets/icon/aged-care-occ-therap-icon.svg'
import styles from '../assets/style/scss/components/ServicesSection.module.scss'
import ButtonLink from './ButtonLink'
import { homeContent } from '@/content/home'

const ICONS = {
  FuncCapIcon,
  OngOccTherapIcon,
  AssistTechIcon,
  HomeModifiIcon,
  PaeOccTherapIcon,
  AgedCareIcon
}

const ServicesSection = () => {
  const { services } = homeContent
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const cardsElement = cardsRef.current

    if (!cardsElement) {
      return
    }

    const updateActiveCard = () => {
      const cardElements = Array.from(cardsElement.children) as HTMLElement[]

      if (!cardElements.length) {
        return
      }

      const viewportCenter = cardsElement.scrollLeft + cardsElement.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      cardElements.forEach((cardElement, index) => {
        const cardCenter = cardElement.offsetLeft + cardElement.clientWidth / 2
        const distance = Math.abs(cardCenter - viewportCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    updateActiveCard()

    cardsElement.addEventListener('scroll', updateActiveCard, { passive: true })
    window.addEventListener('resize', updateActiveCard)

    return () => {
      cardsElement.removeEventListener('scroll', updateActiveCard)
      window.removeEventListener('resize', updateActiveCard)
    }
  }, [])

  const handleDotClick = (index: number) => {
    const cardsElement = cardsRef.current
    const cardElement = cardsElement?.children[index] as HTMLElement | undefined

    if (!cardsElement || !cardElement) {
      return
    }

    cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActiveIndex(index)
  }

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleBlue}>{services.title.blue}</span>
          <span className={styles.titleGreen}>{services.title.green}</span>
        </h2>

        <div ref={cardsRef} className={styles.cardsGrid}>
          {services.cards.map((card) => (
            <div key={card.id} className={`${styles.card} ${styles[card.theme]}`}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrapper}>
                  <Image 
                    src={ICONS[card.icon as keyof typeof ICONS]} 
                    alt={card.id} 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>
                    {card.description}
                  </p>
                </div>
              </div>
              <div className={styles.arrowButton} aria-hidden="true">
                <div className={styles.arrowIcon} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselDots} aria-label="Services carousel pagination">
          {services.cards.map((card, index) => (
            <button
              key={`${card.id}-dot`}
              type="button"
              className={`${styles.carouselDot} ${index === activeIndex ? styles.carouselDotActive : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${card.id} service card`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <ButtonLink href="/referral">
            Make a Referral
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection