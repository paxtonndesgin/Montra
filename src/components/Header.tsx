"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from '../assets/style/scss/components/Header.module.scss'
import { IMAGES } from '../assets/images'
import ButtonLink from './ButtonLink'
import ScrollAnimator from './animation/ScrollAnimator'

const services = [
  { href: "/services/functional-capacity-assessments", label: "Functional Capacity Assessments" },
  { href: "/services/assistive-technology-assessments", label: "Assistive Technology Assessments" },
  { href: "/services/home-modification-assessments", label: "Home Modification Assessments" },
  { href: "/services/ongoing-occupational-therapy", label: "Ongoing Occupational Therapy" },
];

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/referral", label: "Referral" },
  { href: "/contact", label: "Contact" },
  { href: "/career", label: "Career" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <Link href="/" className={styles.logo}>
                    <Image src={IMAGES.LOGO_MAIN} alt="Montra Therapy Logo" width={32} height={32} />
                    <span className={styles.brandName}>
                        <span>Montra</span>
                        <span>Therapy</span>
                    </span>
                </Link>
            </div>
            <ScrollAnimator delay={0.1} yOffset={20}>
              <nav className={styles.nav} aria-label="Main navigation">
                  <div className={styles.navItemWithDropdown}>
                    <span className={`${styles.navLabel} ${pathname.startsWith('/services') ? styles.active : ''}`}>
                      Services
                    </span>
                    <div className={styles.dropdown}>
                      {services.map(service => (
                        <Link 
                          key={service.href} 
                          href={service.href} 
                          className={`${styles.dropdownItem} ${pathname === service.href ? styles.dropdownActive : ''}`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navLinks.map(link => {
                    const isActive = pathname === link.href;
                    return (
                      <Link key={link.href} href={link.href} className={isActive ? styles.active : ''}>
                        {link.label}
                      </Link>
                    );
                  })}
              </nav>
            </ScrollAnimator>
            <div className={styles.actions}>
                <ButtonLink href="/referral" className={styles.referralBtn} showArrowOnHover={false}>
                    Make a Referral
                </ButtonLink>
            </div>
        </div>
    </header>
  )
}

export default Header