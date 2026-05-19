"use client"

import React, { useEffect, useRef, useState } from 'react'
import styles from '../assets/style/scss/components/WhoWeSupportSection.module.scss'
import { homeContent } from '@/content/home'

const WhoWeSupportSection = () => {
  const { whoWeSupport } = homeContent;
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

  const handleCardSelect = (index: number) => {
    const cardsElement = cardsRef.current
    const cardElement = cardsElement?.children[index] as HTMLElement | undefined

    if (!cardsElement || !cardElement) {
      return
    }

    cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActiveIndex(index)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {whoWeSupport.title.text}
            <span className={styles.titleHighlight}>{whoWeSupport.title.highlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {whoWeSupport.subtitle}
          </p>
        </div>

          <div ref={cardsRef} className={styles.cardsArea}>
            {whoWeSupport.cards.map((card, index) => (
            <button
              key={card.id}
              type="button"
                className={`${styles.card} ${styles[card.tiltClass]} ${index === activeIndex ? styles.cardActive : ''}`}
                onClick={() => handleCardSelect(index)}
                aria-pressed={index === activeIndex}
            >
              <div className={styles.iconWrapper}>
                <card.Icon size={40} strokeWidth={1.5} />
              </div>
              <p className={styles.cardLabel}>
                {card.lines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </button>
          ))}
        </div>

          <p className={styles.activeDescription}>
            {whoWeSupport.cards[activeIndex]?.description}
          </p>

          <div className={styles.carouselDots} aria-label="Who we support carousel pagination">
            {whoWeSupport.cards.map((card, index) => (
              <button
                key={`${card.id}-dot`}
                type="button"
                className={`${styles.carouselDot} ${index === activeIndex ? styles.carouselDotActive : ''}`}
                onClick={() => handleCardSelect(index)}
                aria-label={`View ${card.lines.join(' ')} card`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

export default WhoWeSupportSection
