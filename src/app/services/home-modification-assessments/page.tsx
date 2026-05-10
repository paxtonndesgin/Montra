import styles from "@/assets/style/scss/pages/hma.module.scss";
import Image from "next/image";
import DecorRight from "@/assets/decor/homepage/Vector-20.svg";
import DecorLeft from "@/assets/decor/homepage/Vector-21.svg";

import ServiceBanner from '@/components/services/ServiceBanner';
import HMARedefiningSection from '@/components/services/hma/HMARedefiningSection';
import HMAWhoIsForSection from '@/components/services/hma/HMAWhoIsForSection';
import HMAWhyStrategicSection from '@/components/services/hma/HMAWhyStrategicSection';
import HMADifferenceSection from '@/components/services/hma/HMADifferenceSection';
import HMAJourneySection from '@/components/services/hma/HMAJourneySection';
import ReferralEnquirySection from '@/components/ReferralEnquirySection';
import DecorWave from '@/components/DecorWave';
import ScrollAnimator from '@/components/animation/ScrollAnimator';
import { servicesContent } from '@/content/services';

export const revalidate = 60; // ISR

export const metadata = {
  title: 'Home Modification Assessments | Montra Therapy',
  description: 'Evidence-based home modification assessments to ensure safe and sustainable changes aligned with NDIS funding requirements.',
};

const HMAPage = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ServiceBanner 
            {...servicesContent.hma.banner}
            imagePriority={true}
          />

        <div className={styles.middleSectionsWrapper}>
          <div className={styles.decorContainer}>
            <Image src={DecorLeft} alt="" className={styles.decorSvgLeft} />
            <Image src={DecorRight} alt="" className={styles.decorSvgRight} />
          </div>

          <ScrollAnimator delay={0.1}>
            <HMARedefiningSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <HMAWhoIsForSection />
          </ScrollAnimator>
        </div>

        <div style={{ margin: "40px 0" }}>
          <DecorWave />
        </div>

        <ScrollAnimator delay={0.1}>
          <HMAWhyStrategicSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <HMADifferenceSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <HMAJourneySection />
        </ScrollAnimator>
        
        <div style={{ margin: "40px 0" }}>
          <DecorWave />
        </div>
        <ScrollAnimator>
          <ReferralEnquirySection 
            {...servicesContent.hma.cta}
            variant="service"
          />
        </ScrollAnimator>
      </main>
    </div>
  );
};

export default HMAPage;
