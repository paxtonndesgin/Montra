import React from 'react'
import Image from 'next/image'
import { Globe, Mail, Phone } from 'lucide-react'
import styles from '../assets/style/scss/components/Footer.module.scss'
import { IMAGES } from '../assets/images'
import RouteLoadingLink from './RouteLoadingLink'

const NAV_LINKS = {
  Services: [
    { label: 'Functional Capacity Assessments', href: '/services/functional-capacity-assessments' },
    { label: 'Assistive Technology Assessments', href: '/services/assistive-technology-assessments' },
    { label: 'Home Modification Assessments', href: '/services/home-modification-assessments' },
    { label: 'Paediatric Occupational Therapy', href: '/services/paediatric-occupational-therapy' },
    { label: 'Aged Care Occupational Therapy', href: '/services/aged-care-occupational-therapy' },
    { label: 'Ongoing Occupational Therapy', href: '/services/ongoing-occupational-therapy' },
  ],
  Practice: [
    { label: 'Clinical Governance', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
  Contact: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Make a Referral', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <RouteLoadingLink href="/" className={styles.logoLink}>
              <Image
                src={IMAGES.LOGO_MAIN}
                alt="Montra Therapy Logo"
                width={48}
                height={48}
              />
              <span className={styles.logoName}>
                <span>Montra</span>
                <span>Therapy</span>
              </span>
            </RouteLoadingLink>
            <p className={styles.tagline}>
              Clear. Reliable. Evidence-Based<br />Occupational Therapy.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Website" className={styles.socialIcon}>
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Email" className={styles.socialIcon}>
                <Mail size={18} />
              </a>
              <a href="#" aria-label="Phone" className={styles.socialIcon}>
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <nav className={styles.nav} aria-label="Footer navigation">
            {Object.entries(NAV_LINKS).map(([heading, links]) => (
              <div key={heading} className={styles.navColumn}>
                <h3 className={styles.navHeading}>{heading}</h3>
                <ul className={styles.navList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <RouteLoadingLink href={link.href} className={styles.navLink}>
                        {link.label}
                      </RouteLoadingLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Montra Therapy. All rights reserved. Evidence-based clinical excellence.
          </p>
          <span className={styles.bottomAccent}>Evidence-Based outcomes.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
