import React from 'react'
import styles from '../assets/style/scss/components/ReferralEnquirySection.module.scss'
import ButtonLink from './ButtonLink'

const ReferralEnquirySection = () => {
  return (
    <section className={styles.referralEnquirySection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Make a<br />
              Referral or<br />
              Enquiry
            </h2>
            <p className={styles.subtitle}>
              Take the first step toward better outcomes with evidence-based occupational therapy documentation.
            </p>
          </div>
          
          <div className={styles.rightCol}>
            <ButtonLink href="/referral" className={styles.btnReferral} showArrowOnHover={true}>
              Submit a Referral
            </ButtonLink>
            <ButtonLink href="/contact" variant="variant3" className={styles.btnContact} showArrowOnHover={false}>
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReferralEnquirySection