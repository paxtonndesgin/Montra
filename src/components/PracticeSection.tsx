import React from 'react'
import Image from 'next/image'
import styles from '../assets/style/scss/components/PracticeSection.module.scss'
import { IMAGES } from '../assets/images'

const PracticeSection = () => {
  return (
    <section className={styles.practiceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>A Practice Built on</h2>
          <div className={styles.title}>
            <span>Clinical</span>
            <span className={styles.pillBlue}>Rigor</span>
            <span>and</span>
            <span className={styles.pillGreen}>Trust.</span>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={IMAGES.PRACTICE_1} 
                alt="Clinical Rigor" 
                width={279} 
                height={236} 
                className={styles.cardImage}
              /></div>
            <div className={styles.textContent}>
              <p>
                At Montra Therapy, we believe that precision in documentation and assessment is the cornerstone of effective patient outcomes. Our team operates with an editorial level of detail, ensuring every report is a surgical instrument for progress.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={IMAGES.PRACTICE_2} 
                alt="Trust and Guidance" 
                width={279} 
                height={236} 
                className={styles.cardImage}
              /></div>
            <div className={styles.textContent}>
              <p>
                We bridge the gap between complex clinical data and actionable human-centric goals. By maintaining the highest ethical standards, we empower participants and their support networks through clear, authoritative guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeSection
