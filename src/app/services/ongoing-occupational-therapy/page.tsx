
import styles from "../../../assets/style/scss/pages/oot.module.scss";

import ServiceBanner from "@/components/services/ServiceBanner";
import OOTSupportSection from "@/components/services/oot/OOTSupportSection";
import OOTTargetedSection from "@/components/services/oot/OOTTargetedSection";
import OOTServiceSection from "@/components/services/oot/OOTServiceSection";
import OOTJourneySection from "@/components/services/oot/OOTJourneySection";
import ReferralEnquirySection from "@/components/ReferralEnquirySection";
import DecorWave from "@/components/DecorWave";
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import { servicesContent } from "@/content/services";

import Image from "next/image";
import DecorRight from "@/assets/decor/homepage/Vector-18.svg";
import DecorLeft from "@/assets/decor/homepage/Vector-19.svg";

export const revalidate = 60; // ISR

export const metadata = {
  title: 'Ongoing Occupational Therapy | Montra Therapy',
  description: 'Sustainable, goal-oriented clinical intervention designed to foster independence and enhance quality of life.',
};

export default function OngoingOccupationalTherapyPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <ServiceBanner 
            {...servicesContent.oot.banner}
            imagePriority={true}
          />

        <div className={styles.middleSectionsWrapper}>
          <div className={styles.decorContainer}>
            <Image src={DecorLeft} alt="" className={styles.decorSvgLeft} />
            <Image src={DecorRight} alt="" className={styles.decorSvgRight} />
          </div>

          <ScrollAnimator delay={0.1}>
            <OOTSupportSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <OOTTargetedSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <OOTServiceSection />
          </ScrollAnimator>
        </div>


        <ScrollAnimator delay={0.2}>
          <OOTJourneySection />
        </ScrollAnimator>
        <div style={{ margin: "40px 0" }}>
          <DecorWave />
        </div>
        <ScrollAnimator>
          <ReferralEnquirySection 
            {...servicesContent.oot.cta}
            variant="service"
          />
        </ScrollAnimator>
      </main>

    </div>
  );
}
