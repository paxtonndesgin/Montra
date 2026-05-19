import Image from 'next/image'
import styles from '../assets/style/scss/components/BannerSection.module.scss'
import { IMAGES } from '../assets/images'

const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImageWrapper}>
          <Image 
            src={IMAGES.HOME_HERO}
            alt="Banner Image" 
            fill
            className={styles.bannerImage}
            priority
            sizes="(max-width: 768px) 100vw, 1320px"
          />
          
          <div className={styles.badgesWrapper}>
            <div className={styles.badgeLeft}>
              <span>Precision Clinical Care</span>
            </div>
            
            <div className={styles.badgeRight}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>
                <span>Clinical</span>
                <span>Accuracy Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection