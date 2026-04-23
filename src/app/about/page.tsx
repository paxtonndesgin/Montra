import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../assets/style/scss/pages/about.module.scss";
import ReferralEnquirySection from "@/components/ReferralEnquirySection";
import AboutBannerSection from "@/components/about/AboutBannerSection";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutSpecialFeaturesSection from "@/components/about/AboutSpecialFeaturesSection";
import AboutAchievementSection from "@/components/about/AboutAchievementSection";
import AboutPurposeVisionValuesSection from "@/components/about/AboutPurposeVisionValuesSection";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <AboutBannerSection />
        <AboutIntroSection />
        <AboutSpecialFeaturesSection />
        <AboutAchievementSection />
        <AboutPurposeVisionValuesSection />
        <ReferralEnquirySection />
      </main>
      <Footer />
    </div>
  );
}
