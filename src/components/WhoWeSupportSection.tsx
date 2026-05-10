"use client"

import React from 'react'
import styles from '../assets/style/scss/components/WhoWeSupportSection.module.scss'
import { homeContent } from '@/content/home'

const WhoWeSupportSection = () => {
  const { whoWeSupport } = homeContent;

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

        <div className={styles.cardsArea}>
          {whoWeSupport.cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={`${styles.card} ${styles[card.tiltClass]}`}
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
      </div>
    </section>
  )
}

export default WhoWeSupportSection
