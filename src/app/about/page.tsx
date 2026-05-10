
import styles from "../../assets/style/scss/pages/about.module.scss";
import ReferralEnquirySection from "@/components/ReferralEnquirySection";
import AboutBannerSection from "@/components/about/AboutBannerSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutSpecialFeaturesSection from "@/components/about/AboutSpecialFeaturesSection";
import AboutAchievementSection from "@/components/about/AboutAchievementSection";
import AboutPurposeVisionValuesSection from "@/components/about/AboutPurposeVisionValuesSection";
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import { aboutContent } from "@/content/about";

export const dynamic = 'force-static'; // Explicit SSG

export default function AboutPage() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <AboutBannerSection />
        <AboutIntroSection />
        <ScrollAnimator delay={0.2}>
          <AboutSpecialFeaturesSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <AboutAchievementSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <AboutPurposeVisionValuesSection />
        </ScrollAnimator>
        <ScrollAnimator>
          <ReferralEnquirySection {...aboutContent.cta} />
        </ScrollAnimator>
      </main>

    </div>
  );
}
