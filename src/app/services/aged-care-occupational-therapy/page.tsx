import React from 'react';
import styles from '../../../assets/style/scss/pages/aged-care.module.scss';
import ServiceBanner from '@/components/services/ServiceBanner';
import IndependenceSection from '@/components/services/aged-care/IndependenceSection';
import AgedCareWhoIsFor from '@/components/services/aged-care/AgedCareWhoIsFor';
import AgedCareServiceGrid from '@/components/services/aged-care/AgedCareServiceGrid';
import PrecisionImpactSection from '@/components/services/aged-care/PrecisionImpactSection';
import AssessmentJourneySection from '@/components/services/aged-care/AssessmentJourneySection';
import ReferralEnquirySection from '@/components/ReferralEnquirySection';
import DecorWave from '@/components/DecorWave';
import ScrollAnimator from '@/components/animation/ScrollAnimator';
import { servicesContent } from '@/content/services';

import Image from "next/image";
import DecorRight from "@/assets/decor/design3/Vector-9.svg";
import DecorLeft from "@/assets/decor/design3/Vector-10.svg";

export const revalidate = 60;

export const metadata = {
  title: 'Aged Care Occupational Therapy | Montra Therapy',
  description: 'Expert occupational therapy for older adults to maintain independence and safety at home.',
};

export default function AgedCareOccupationalTherapyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ServiceBanner 
            {...servicesContent.agedCare.banner}
            imagePriority={true}
          />

        <div className={styles.middleSectionsWrapper}>
          <div className={styles.decorContainer}>
            <Image src={DecorLeft} alt="" className={styles.decorSvgLeft} />
            <Image src={DecorRight} alt="" className={styles.decorSvgRight} />
          </div>

          <ScrollAnimator delay={0.1}>
            <IndependenceSection />
          </ScrollAnimator>

          <ScrollAnimator delay={0.2}>
            <AgedCareWhoIsFor />
          </ScrollAnimator>

          <ScrollAnimator delay={0.1}>
            <AgedCareServiceGrid />
          </ScrollAnimator>
          
          <ScrollAnimator delay={0.2}>
            <PrecisionImpactSection />
          </ScrollAnimator>
        </div>

        <ScrollAnimator delay={0.1}>
          <AssessmentJourneySection />
        </ScrollAnimator>

        <div style={{ margin: "40px 0" }}>
          <DecorWave />
        </div>

        <ScrollAnimator>
          <ReferralEnquirySection 
            {...servicesContent.agedCare.cta}
            variant="service"
          />
        </ScrollAnimator>
      </main>
    </div>
  );
}
