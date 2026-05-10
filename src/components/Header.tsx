"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from '../assets/style/scss/components/Header.module.scss'
import { IMAGES } from '../assets/images'
import ButtonLink from './ButtonLink'

const services = [
  { href: "/services/functional-capacity-assessments", label: "Functional Capacity Assessments" },
  { href: "/services/assistive-technology-assessments", label: "Assistive Technology Assessments" },
  { href: "/services/home-modification-assessments", label: "Home Modification Assessments" },
  { href: "/services/paediatric-occupational-therapy", label: "Paediatric Occupational Therapy" },
  { href: "/services/aged-care-occupational-therapy", label: "Aged Care Occupational Therapy" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
            <div className={styles.actions}>
                <ButtonLink href="/referral" className={styles.referralBtn} showArrowOnHover={false}>
                    Make a Referral
                </ButtonLink>
            </div>
            <button
              type="button"
              className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>

        <div
          className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayVisible : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          id="mobile-navigation"
          className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ''}`}
        >
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <button
              type="button"
              className={`${styles.mobileServicesToggle} ${isServicesOpen ? styles.mobileServicesToggleOpen : ''}`}
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              <span>Services</span>
              <span className={styles.mobileChevron}></span>
            </button>

            <div className={`${styles.mobileServicesList} ${isServicesOpen ? styles.mobileServicesListOpen : ''}`}>
              {services.map(service => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`${styles.mobileServiceLink} ${pathname === service.href ? styles.mobileActive : ''}`}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            {navLinks.map(link => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.mobileActions}>
            <ButtonLink href="/referral" className={styles.mobileReferralBtn} showArrowOnHover={false}>
              Make a Referral
            </ButtonLink>
          </div>
        </div>
    </header>
  )
}

export default Header