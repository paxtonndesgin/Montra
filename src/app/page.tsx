import Header from "../components/Header";
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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ScrollAnimator>
          <BannerSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.1}>
          <IntroSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <PracticeSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <ServicesSection />
        </ScrollAnimator>
         <ScrollAnimator>
          <WhyChooseMontraSection />
        </ScrollAnimator>
        <ScrollAnimator delay={0.2}>
          <WhoWeSupportSection />
        </ScrollAnimator>
        <DecorWave />
        <ScrollAnimator>
          <OurApproachSection />
        </ScrollAnimator>
        <ScrollAnimator>
          <ReferralEnquirySection />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
}
