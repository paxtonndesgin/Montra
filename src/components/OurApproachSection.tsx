import React from 'react'
import Image from 'next/image'
import styles from '../assets/style/scss/components/OurApproachSection.module.scss'
import Vector9 from '../assets/decor/design3/Vector-9.svg'
import Vector10 from '../assets/decor/design3/Vector-10.svg'

const APPROACH_STEPS = [
  {
    title: 'Understand',
    description: 'Detailed intake process to align with participant goals and environmental context.',
  },
  {
    title: 'Assess',
    description: 'Direct clinical observation utilizing validated standardized assessment tools.',
  },
  {
    title: 'Recommend',
    description: 'Synthesizing data into actionable, evidence-based intervention plans.',
  },
  {
    title: 'Document',
    description: 'Precision reporting that serves as an authoritative voice for support funding.',
  },
  {
    title: 'Follow Through',
    description: 'Ensuring implementation success through advocacy and ongoing review.',
  },
]

const OurApproachSection = () => {
  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        <div className={styles.visualColumn} aria-hidden="true">
          <Image src={Vector9} alt="" className={styles.ring9} />
          <Image src={Vector10} alt="" className={styles.ring10} />

          <div className={styles.sticker}>
            Our Surgical Approach.
          </div>
        </div>

        <div className={styles.contentColumn}>
          {APPROACH_STEPS.map((step) => (
            <article key={step.title} className={styles.stepItem}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproachSection