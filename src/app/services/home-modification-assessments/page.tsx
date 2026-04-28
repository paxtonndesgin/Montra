import React from 'react';
import HMABannerSection from '@/components/services/hma/HMABannerSection';
import HMARedefiningSection from '@/components/services/hma/HMARedefiningSection';
import HMAWhoIsForSection from '@/components/services/hma/HMAWhoIsForSection';
import HMAWhyStrategicSection from '@/components/services/hma/HMAWhyStrategicSection';
import HMADifferenceSection from '@/components/services/hma/HMADifferenceSection';
import HMAJourneySection from '@/components/services/hma/HMAJourneySection';
import HMACTASection from '@/components/services/hma/HMACTASection';
import DecorWave from '@/components/DecorWave';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home Modification Assessments | Montra Therapy',
  description: 'Evidence-based home modification assessments to ensure safe and sustainable changes aligned with NDIS funding requirements.',
};

const HMAPage = () => {
  return (
    <main>
      <Header />
      <HMABannerSection />
      <HMARedefiningSection />
      <HMAWhoIsForSection />
      <DecorWave />
      <HMAWhyStrategicSection />
      <HMADifferenceSection />
      <HMAJourneySection />
      <DecorWave />
      <HMACTASection />
      <Footer />
    </main>
  );
};

export default HMAPage;
