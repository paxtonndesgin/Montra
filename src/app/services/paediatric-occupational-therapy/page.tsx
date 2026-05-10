import React from 'react';
import styles from '../../../assets/style/scss/pages/paediatric.module.scss';
import ServiceBanner from '@/components/services/ServiceBanner';
import DevelopmentAreasSection from '@/components/services/paediatric/DevelopmentAreasSection';
import WhoIsForSection from '@/components/services/paediatric/WhoIsForSection';
import ClinicalPathwaySection from '@/components/services/paediatric/ClinicalPathwaySection';
import ReferralEnquirySection from '@/components/ReferralEnquirySection';
import DecorWave from '@/components/DecorWave';
import ScrollAnimator from '@/components/animation/ScrollAnimator';
import { servicesContent } from '@/content/services';

export const revalidate = 60; // ISR

export const metadata = {
  title: 'Paediatric Occupational Therapy | Montra Therapy',
  description: 'Evidence-based childhood development support through fine motor, sensory processing, and social readiness interventions.',
};

export default function PaediatricOccupationalTherapyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ServiceBanner 
            {...servicesContent.paediatric.banner}
            imagePriority={true}
          />

        <div className={styles.middleSectionsWrapper}>
          <ScrollAnimator delay={0.1}>
            <DevelopmentAreasSection />
          </ScrollAnimator>

          <ScrollAnimator delay={0.2}>
            <WhoIsForSection />
          </ScrollAnimator>

          <ScrollAnimator delay={0.1}>
            <ClinicalPathwaySection />
          </ScrollAnimator>
        </div>

        <div style={{ margin: "40px 0" }}>
          <DecorWave />
        </div>

        <ScrollAnimator>
          <ReferralEnquirySection 
            {...servicesContent.paediatric.cta}
            variant="service"
          />
        </ScrollAnimator>
      </main>
    </div>
  );
}
