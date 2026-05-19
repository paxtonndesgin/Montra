import React from 'react';
import Image from 'next/image';
import styles from '../../assets/style/scss/components/services/ServiceBanner.module.scss';
import ButtonLink from '@/components/ButtonLink';

interface ServiceBannerProps {
  title: string;
  description: string;
  image: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  imagePriority?: boolean;
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({
  title,
  description,
  image,
  primaryBtnText = "Submit a Referral",
  primaryBtnHref = "/referral",
  secondaryBtnText = "Learn More",
  secondaryBtnHref = "/about",
  imagePriority = false
}) => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            loading={imagePriority ? 'eager' : 'lazy'}
            fetchPriority={imagePriority ? 'high' : 'auto'}
            priority={imagePriority}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className={styles.textContent}>
          <h1 data-service-heading className={styles.title}>
            {title}
          </h1>
          <p className={styles.description}>
            {description}
          </p>
          <div className={styles.actions}>
            <ButtonLink href={primaryBtnHref} className={styles.btnPrimary} showArrowOnHover={true}>
              {primaryBtnText}
            </ButtonLink>
            <ButtonLink href={secondaryBtnHref} variant="variant3" className={styles.btnSecondary} showArrowOnHover={false}>
              {secondaryBtnText}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
