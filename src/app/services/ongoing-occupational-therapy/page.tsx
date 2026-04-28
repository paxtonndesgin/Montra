import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../../assets/style/scss/pages/oot.module.scss";

import OOTBannerSection from "@/components/services/oot/OOTBannerSection";
import OOTSupportSection from "@/components/services/oot/OOTSupportSection";
import OOTTargetedSection from "@/components/services/oot/OOTTargetedSection";
import OOTServiceSection from "@/components/services/oot/OOTServiceSection";
import OOTJourneySection from "@/components/services/oot/OOTJourneySection";
import OOTCTASection from "@/components/services/oot/OOTCTASection";
import DecorWave from "@/components/DecorWave";

export const metadata = {
  title: 'Ongoing Occupational Therapy | Montra Therapy',
  description: 'Sustainable, goal-oriented clinical intervention designed to foster independence and enhance quality of life.',
};

export default function OngoingOccupationalTherapyPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <OOTBannerSection />
        <OOTSupportSection />
        <OOTTargetedSection />
        <OOTServiceSection />
        <DecorWave />
        <OOTJourneySection />
        <DecorWave />
        <OOTCTASection />
      </main>
      <Footer />
    </div>
  );
}
