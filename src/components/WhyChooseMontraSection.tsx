import React from 'react'
import styles from '../assets/style/scss/components/WhyChooseMontraSection.module.scss'

const FEATURES = [
  {
    id: '01',
    title: 'Personalised Care',
    desc: "We take the time to understand each person's goals, environment and support needs so our recommendations are both meaningful and practical.",
  },
  {
    id: '02',
    title: 'Functional Outcomes',
    desc: 'Our focus is on real-life change \u2014 supporting people to do more of what matters to them each day.',
  },
  {
    id: '03',
    title: 'Community-Based Support',
    desc: 'We provide services in the settings where life happens, including at home, in the community, at school and via telehealth where appropriate.',
  },
  {
    id: '04',
    title: 'Collaborative Approach',
    desc: 'We work closely with participants, families, support coordinators and other professionals to deliver thoughtful, coordinated care.',
  },
]

const WhyChooseMontraSection = () => {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.mainTitle}>
            <span className={styles.greenText}>Why</span>
            <br />
            <span className={styles.greenText}>Choose</span>
            <br />
            <span className={styles.blueText}>Montra</span>
          </h2>
          <p className={styles.quote}>
            <span className={styles.blueText}>&quot;</span>
            <span className={styles.greenText}>We focus on doing things</span>
            <br />
            <span className={styles.greenText}>properly,</span>
            
            <span className={styles.blueText}> not quickly.&quot;</span>
          </p>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.featuresGrid}>
            {FEATURES.map((feat) => (
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