import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../../assets/style/scss/pages/oot.module.scss";

import OOTBannerSection from "@/components/services/oot/OOTBannerSection";
import OOTPrecisionReportingSection from "@/components/services/oot/OOTPrecisionReportingSection";
import OOTTargetedCareSection from "@/components/services/oot/OOTTargetedCareSection";
import FCAEvaluationSection from "@/components/services/fca/FCAEvaluationSection";
import FCASpecializedNeedsSection from "@/components/services/fca/FCASpecializedNeedsSection";
import FCAJourneySection from "@/components/services/fca/FCAJourneySection";
import OOTReferralForm from "@/components/referral/OOTReferralForm";
import OOTCTASection from "@/components/services/oot/OOTCTASection";

export default function OngoingOccupationalTherapyPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <OOTBannerSection />
        <OOTPrecisionReportingSection />
        <OOTTargetedCareSection />
        <FCAEvaluationSection />
        <FCASpecializedNeedsSection />
        <FCAJourneySection />
        <div className={styles.referralWrapper}>
          <OOTReferralForm hideCloseButton={true} />
        </div>
        <OOTCTASection />
      </main>
      <Footer />
    </div>
  );
}
