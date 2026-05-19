import React from 'react'
import styles from '../assets/style/scss/components/ReferralEnquirySection.module.scss'
import ButtonLink from './ButtonLink'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { IMAGES } from '../assets/images'

interface ReferralEnquirySectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  image?: string | StaticImageData;
  variant?: 'default' | 'service';
}

const ReferralEnquirySection: React.FC<ReferralEnquirySectionProps> = ({
  title = <>Make a<br />Referral or<br />Enquiry</>,
  subtitle = "Take the first step toward better outcomes with evidence-based occupational therapy documentation.",
  primaryBtnText = "Submit a Referral",
  primaryBtnHref = "/referral",
  secondaryBtnText = "Contact Us",
  secondaryBtnHref = "/contact",
  image = IMAGES.BANNER_2,
  variant = 'default'
}) => {
  return (
    <section className={`${styles.referralEnquirySection} ${variant === 'service' ? styles.serviceVariant : ''}`}>
      <div className={styles.container}>
        <div className={styles.bgImage}>
          <Image 
            src={image} 
            alt="" 
            fill 
            className={styles.image} 
            sizes="1320px"
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              {title}
            </h2>
            <p className={styles.subtitle}>
              {subtitle}
            </p>
          </div>
          
          <div className={styles.rightCol}>
            <ButtonLink href={primaryBtnHref} className={styles.btnReferral} showArrowOnHover={false}>
              {primaryBtnText}
            </ButtonLink>
            <ButtonLink href={secondaryBtnHref} variant="variant3" className={styles.btnContact} showArrowOnHover={false}>
              {secondaryBtnText}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReferralEnquirySection