"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from '../assets/style/scss/components/Header.module.scss'
import { IMAGES } from '../assets/images'
import ButtonLink from './ButtonLink'
import ScrollAnimator from './animation/ScrollAnimator'

const navLinks = [
  { href: "/services/functional-capacity-assessments", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
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