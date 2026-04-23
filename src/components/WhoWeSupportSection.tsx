"use client"

import React from 'react'
import { Users, User, Heart, RefreshCcw, Stethoscope } from 'lucide-react'
import styles from '../assets/style/scss/components/WhoWeSupportSection.module.scss'

type SupportCard = {
  id: number
  lines: string[]
  Icon: React.ElementType
  tiltClass: string
}

const SUPPORT_CARDS: SupportCard[] = [
  { id: 1, lines: ['NDIS', 'Participants'], Icon: Users, tiltClass: 'cardTiltOne' },
  { id: 2, lines: ['Older Adults'], Icon: User, tiltClass: 'cardTiltTwo' },
  { id: 3, lines: ['Families', '& Carers'], Icon: Heart, tiltClass: 'cardTiltThree' },
  { id: 4, lines: ['Support', 'Coordinators'], Icon: RefreshCcw, tiltClass: 'cardTiltFour' },
  { id: 5, lines: ['Medical', 'Professionals'], Icon: Stethoscope, tiltClass: 'cardTiltFive' },
]

const WhoWeSupportSection = () => {
  return (
    <section className={styles.section}>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
           At Brand We <span className={styles.titleHighlight}>Support</span>
          </h2>
          <p className={styles.subtitle}>
            Providing expert clinical support across the care ecosystem.
          </p>
        </div>

        <div className={styles.cardsArea}>
          {SUPPORT_CARDS.map((card) => (
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
