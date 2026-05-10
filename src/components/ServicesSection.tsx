import React from 'react'
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
  const { services } = homeContent;

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleBlue}>{services.title.blue}</span>
          <span className={styles.titleGreen}>{services.title.green}</span>
        </h2>

        <div className={styles.cardsGrid}>
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
