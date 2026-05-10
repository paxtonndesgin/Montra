
import styles from "../../../assets/style/scss/pages/ata.module.scss";

import ServiceBanner from "@/components/services/ServiceBanner";
import ATAWhatIsSection from "@/components/services/ata/ATAWhatIsSection";
import ATAWhoIsForSection from "@/components/services/ata/ATAWhoIsForSection";
import ATAFrameworkSection from "@/components/services/ata/ATAFrameworkSection";
import ATAPhilosophySection from "@/components/services/ata/ATAPhilosophySection";
import ATAJourneySection from "@/components/services/ata/ATAJourneySection";
import ReferralEnquirySection from "@/components/ReferralEnquirySection";
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import DecorWave from "@/components/DecorWave";
import { servicesContent } from "@/content/services";

import Image from "next/image";
import DecorRight from "@/assets/decor/design4/Vector-23.svg";
import DecorLeft from "@/assets/decor/design4/Vector-24.svg";

export const revalidate = 60; // ISR

export const metadata = {
  title: "Assistive Technology Assessments | Montra Therapy",
  description:
    "Evidence-based assistive technology assessments designed to match NDIS-funded solutions to your real needs — maximising independence and quality of life.",
};

export default function AssistiveTechnologyAssessmentsPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <ServiceBanner 
            {...servicesContent.ata.banner}
            imagePriority={true}
          />

        <div className={styles.middleSectionsWrapper}>
          <div className={styles.decorContainer}>
            <Image src={DecorLeft} alt="" className={styles.decorSvgLeft} />
            <Image src={DecorRight} alt="" className={styles.decorSvgRight} />
          </div>

          <ScrollAnimator delay={0.1}>
            <ATAWhatIsSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <ATAWhoIsForSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <ATAFrameworkSection />
          </ScrollAnimator>
          <ScrollAnimator>
            <ATAPhilosophySection />
          </ScrollAnimator>
        </div>

        <ScrollAnimator delay={0.2}>
          <ATAJourneySection />
        </ScrollAnimator>

        <ScrollAnimator delay={0.3}>
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <DecorWave />
          </div>
        </ScrollAnimator>

        <ScrollAnimator>
          <ReferralEnquirySection 
            {...servicesContent.ata.cta}
            variant="service"
          />
        </ScrollAnimator>
      </main>

    </div>
  );
}
