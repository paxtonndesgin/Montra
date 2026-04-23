import React from 'react'
import styles from '../assets/style/scss/components/IntroSection.module.scss'
import ButtonLink from './ButtonLink'

const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleBlue}>Empowering Independence Through</span>
          <br />
          <span className={styles.titleGreen}>Expert Occupational Therapy</span>
        </h1>
        
        <p className={styles.description}>
          Evidence-based assessments, clear reporting, and practical solutions for NDIS participants, aged care clients, and complex cases.
        </p>
        
        <div className={styles.buttonGroup}>
          <ButtonLink href="/referral">
            Make a Referral
          </ButtonLink>
          <ButtonLink href="/assessment" variant="variant3" showArrowOnHover={false}>
            Book an Assessment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
