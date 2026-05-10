import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Mail, Phone } from 'lucide-react'
import styles from '../assets/style/scss/components/Footer.module.scss'
import { IMAGES } from '../assets/images'

const NAV_LINKS = {
  Services: [
    { label: 'Functional Assessments', href: '#' },
    { label: 'NDIS Reporting', href: '#' },
    { label: 'Home Modifications', href: '#' },
    { label: 'Assistive Technology', href: '#' },
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
            <Link href="/" className={styles.logoLink}>
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
            </Link>
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
                      <Link href={link.href} className={styles.navLink}>
                        {link.label}
                      </Link>
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
            © 2024 Montra Therapy. All rights reserved. Evidence-based clinical excellence.
          </p>
          <span className={styles.bottomAccent}>Evidence-Based outcomes.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
