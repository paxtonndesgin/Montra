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

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleBlue}>Comprehensive </span>
          <span className={styles.titleGreen}>Services</span>
        </h2>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.themeBlue}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <Image src={FuncCapIcon} alt="Functional Capacity Assessments" width={32} height={32} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Functional Capacity<br/>Assessments</h3>
                <p className={styles.cardDesc}>
                  Comprehensive assessments that explore how a person&apos;s disability impacts daily function, participation and support needs.
                </p>
              </div>
            </div>
            <div className={styles.arrowButton} aria-hidden="true">
              <div className={styles.arrowIcon} />
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.themeGreen}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <Image src={OngOccTherapIcon} alt="Ongoing Occupational Therapy" width={32} height={32} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Ongoing Occupational<br/>Therapy</h3>
                <p className={styles.cardDesc}>
                  Individualised therapy focused on practical goals, everyday routines, skill development and participation.
                </p>
              </div>
            </div>
            <div className={styles.arrowButton} aria-hidden="true">
              <div className={styles.arrowIcon} />
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.themePink}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <Image src={AssistTechIcon} alt="Assistive Technology Assessments" width={32} height={32} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Assistive Technology<br/>Assessments</h3>
                <p className={styles.cardDesc}>
                  Assessment and recommendations for equipment that can support mobility, self-care, safety and comfort.
                </p>
              </div>
            </div>
            <div className={styles.arrowButton} aria-hidden="true">
              <div className={styles.arrowIcon} />
            </div>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.themeBlue}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <Image src={HomeModifiIcon} alt="Home Modifications" width={32} height={32} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Home<br/>Modifications</h3>
                <p className={styles.cardDesc}>
                  Assessment and recommendations for changes to the home environment to improve access, safety and independence.
                </p>
              </div>
            </div>
            <div className={styles.arrowButton} aria-hidden="true">
              <div className={styles.arrowIcon} />
            </div>
          </div>

          {/* Card 5 */}
          <div className={`${styles.card} ${styles.themeGreen}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <Image src={PaeOccTherapIcon} alt="Paediatric Occupational Therapy" width={32} height={32} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Paediatric<br/>Occupational Therapy</h3>
                <p className={styles.cardDesc}>
                  Child and family-centred support to build everyday skills, emotional regulation, play and participation.
                </p>
              </div>
            </div>
            <div className={styles.arrowButton} aria-hidden="true">
              <div className={styles.arrowIcon} />
            </div>
          </div>

          {/* Card 6 */}
          <div className={`${styles.card} ${styles.themePink}`}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>
                <Image src={AgedCareIcon} alt="Aged Care Occupational Therapy" width={32} height={32} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Aged Care<br/>Occupational Therapy</h3>
                <p className={styles.cardDesc}>
                  Occupational therapy services that support safer daily living, falls prevention and ageing well at home.
                </p>
              </div>
            </div>
            <div className={styles.arrowButton} aria-hidden="true">
              <div className={styles.arrowIcon} />
            </div>
          </div>
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
