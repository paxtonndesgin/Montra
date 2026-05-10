
import styles from "../assets/style/scss/pages/home.module.scss";
import BannerSection from "@/components/BannerSection";
import IntroSection from "@/components/IntroSection";
import PracticeSection from "@/components/PracticeSection";
import ServicesSection from "@/components/ServicesSection";
import WhoWeSupportSection from "@/components/WhoWeSupportSection";
import DecorWave from "@/components/DecorWave";
import OurApproachSection from "@/components/OurApproachSection";
import ScrollAnimator from "@/components/animation/ScrollAnimator";
import WhyChooseMontraSection from "@/components/WhyChooseMontraSection";
import ReferralEnquirySection from "@/components/ReferralEnquirySection";
import { homeContent } from "@/content/home";


export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <BannerSection />
        <IntroSection />
        <ScrollAnimator>
          <PracticeSection />
        </ScrollAnimator>
        <ScrollAnimator>
          <ServicesSection />
        </ScrollAnimator>
         <ScrollAnimator>
          <WhyChooseMontraSection />
        </ScrollAnimator>
        <ScrollAnimator>
          <WhoWeSupportSection />
        </ScrollAnimator>
        <DecorWave />
        <ScrollAnimator>
          <OurApproachSection />
        </ScrollAnimator>
        <ScrollAnimator>
          <ReferralEnquirySection {...homeContent.cta} />
        </ScrollAnimator>
      </main>

    </div>
  );
}
