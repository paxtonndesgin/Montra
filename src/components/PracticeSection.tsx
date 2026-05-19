import React from 'react'
import Image from 'next/image'
import styles from '../assets/style/scss/components/PracticeSection.module.scss'
import { IMAGES } from '../assets/images'
import { homeContent } from '@/content/home'

const PracticeSection = () => {
  const { practice } = homeContent;
  const titleLines = [
    { text: 'Clinical', pill: 'Rigor', tone: 'blue' as const },
    { text: 'and', pill: 'Trust.', tone: 'green' as const },
  ];

  return (
    <section className={styles.practiceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>{practice.title.subtitle}</h2>
          <div className={styles.title}>
            {titleLines.map((line) => (
              <div key={line.pill} className={styles.titleLine}>
                <span className={styles.titleText}>{line.text}</span>
                <span className={line.tone === 'blue' ? styles.pillBlue : styles.pillGreen}>{line.pill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {practice.cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={IMAGES[card.image as keyof typeof IMAGES]} 
                  alt={card.text.substring(0, 20)} 
                  width={279} 
                  height={236} 
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.textContent}>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeSection
