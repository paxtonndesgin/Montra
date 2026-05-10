import React from 'react'
import Image from 'next/image'
import styles from '../assets/style/scss/components/WhyChooseMontraSection.module.scss'
import Vector11 from '../assets/decor/design2/Vector-11.svg'
import Vector12 from '../assets/decor/design2/Vector-12.svg'
import { homeContent } from '@/content/home'

const WhyChooseMontraSection = () => {
  const { whyChoose } = homeContent;

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.decorContainer}>
        <Image src={Vector11} alt="" className={styles.decor11} />
        <Image src={Vector12} alt="" className={styles.decor12} />
      </div>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.mainTitle}>
            <span className={styles.greenText}>{whyChoose.title.green1}</span>
            <br />
            <span className={styles.greenText}>{whyChoose.title.green2}</span>
            <br />
            <span className={styles.blueText}>{whyChoose.title.blue}</span>
          </h2>
          <p className={styles.quote}>
            <span className={styles.blueText}>&quot;</span>
            <span className={styles.greenText}>{whyChoose.quote.text1}</span>
            <br />
            <span className={styles.greenText}>{whyChoose.quote.highlight}</span>
            <span className={styles.blueText}>{whyChoose.quote.text2}&quot;</span>
          </p>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.featuresGrid}>
            {whyChoose.features.map((feat) => (
              <div className={styles.featureItem} key={feat.id}>
                <div className={styles.numberBadge}>{feat.id}</div>
                <h3 className={styles.featTitle}>{feat.title}</h3>
                <p className={styles.featDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMontraSection