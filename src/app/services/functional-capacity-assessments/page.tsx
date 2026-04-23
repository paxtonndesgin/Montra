import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../../assets/style/scss/pages/fca.module.scss";

import FCABannerSection from "@/components/services/fca/FCABannerSection";
import FCAEvaluationSection from "@/components/services/fca/FCAEvaluationSection";
import FCASpecializedNeedsSection from "@/components/services/fca/FCASpecializedNeedsSection";
import FCAPrecisionReportingSection from "@/components/services/fca/FCAPrecisionReportingSection";
import FCAWhyPrecisionMattersSection from "@/components/services/fca/FCAWhyPrecisionMattersSection";
import FCAJourneySection from "@/components/services/fca/FCAJourneySection";
import FCAReferralFormSection from "@/components/services/fca/FCAReferralFormSection";
import ReferralForm from "@/components/referral/ReferralForm";
import FCACTASection from "@/components/services/fca/FCACTASection";
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import ParallaxAnimator from "@/components/animation/ParallaxAnimator";

import Image from "next/image";
import DecorRight from "@/assets/decor/design4/Vector-23.svg";
import DecorLeft from "@/assets/decor/design4/Vector-24.svg";
import DecorWave from "@/components/DecorWave";

export default function FunctionalCapacityAssessmentsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ScrollAnimator>
          <FCABannerSection />
        </ScrollAnimator>
        <div className={styles.middleSectionsWrapper}>
          <div className={styles.decorContainer}>
            <Image src={DecorLeft} alt="" className={styles.decorSvgLeft} />
            <Image src={DecorRight} alt="" className={styles.decorSvgRight} />
          </div>

          <ScrollAnimator delay={0.1}>
            <FCAEvaluationSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <FCASpecializedNeedsSection />
          </ScrollAnimator>
          <ScrollAnimator delay={0.2}>
            <FCAPrecisionReportingSection />
          </ScrollAnimator>
          <ScrollAnimator>
            <FCAWhyPrecisionMattersSection />
          </ScrollAnimator>
        </div>

        <ScrollAnimator delay={0.2}>
          <FCAJourneySection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.3}>
         <div style={{marginTop:'30px',marginBottom:'30px'}}>
           <DecorWave/>
         </div>
        </ScrollAnimator>
        <ParallaxAnimator offset={80}>
          <div className={styles.referralWrapper}>
            <div className={styles.referralInner}>
              <ReferralForm hideCloseButton={true} />
            </div>
          </div>
        </ParallaxAnimator>
        <ScrollAnimator>
          <FCACTASection />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
}
