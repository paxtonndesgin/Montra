"use client";

import Image from 'next/image'
import React from 'react'
import arrowIcon from '../assets/icon/arrow.svg'
import styles from '../assets/style/scss/components/ButtonLink.module.scss'
import RouteLoadingLink from './RouteLoadingLink'

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'variant2' | 'variant3'
  className?: string
  showArrowOnHover?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const ButtonLink = ({
  href,
  children,
  variant = 'default',
  className = '',
  showArrowOnHover = true,
  onClick,
}: ButtonLinkProps) => {
  return (
    <RouteLoadingLink
      href={href}
      onClick={onClick}
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
    </RouteLoadingLink>
  )
}

export default ButtonLink