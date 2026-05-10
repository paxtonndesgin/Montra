import React from 'react'
import styles from '../assets/style/scss/components/IntroSection.module.scss'
import ButtonLink from './ButtonLink'
import { homeContent } from '@/content/home'

const IntroSection = () => {
  const { intro } = homeContent;

  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {intro.title}
        </h1>
        
        <p className={styles.description}>
          {intro.description}
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
