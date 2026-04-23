import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import arrowIcon from '../assets/icon/arrow.svg'
import styles from '../assets/style/scss/components/ButtonLink.module.scss'

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'variant2' | 'variant3'
  className?: string
  showArrowOnHover?: boolean
}

const ButtonLink = ({
  href,
  children,
  variant = 'default',
  className = '',
  showArrowOnHover = true,
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={[
        styles.buttonLink,
        styles[variant],
        showArrowOnHover ? styles.withArrow : styles.noArrow,
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.iconWrapper} aria-hidden="true">
        <Image src={arrowIcon} alt="" className={styles.icon} />
      </span>
    </Link>
  )
}

export default ButtonLink