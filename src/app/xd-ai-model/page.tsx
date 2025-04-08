import React from 'react';
import Header from '@/components/xd-ai-model/Header';
import HeroSection from '@/components/xd-ai-model/HeroSection';
import FeaturesSection from '@/components/xd-ai-model/FeaturesSection';
import WhyChooseSection from '@/components/xd-ai-model/WhyChooseSection';
import RetailModelsSection from '@/components/xd-ai-model/RetailModelsSection';
import MoreScenariosSection from '@/components/xd-ai-model/MoreScenariosSection';
import FAQSection from '@/components/xd-ai-model/FAQSection';
import Footer from '@/components/xd-ai-model/Footer';
import CTASection from '@/components/xd-ai-model/CTASection';

export default function XDAiModelPage() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between">
        <Header />
        <HeroSection />
        <div className="mt-[740px]">
          <FeaturesSection />
          <WhyChooseSection />
          <RetailModelsSection />
          <MoreScenariosSection />
          <FAQSection />
          <CTASection />
        </div>
        <Footer />
    </main>
  );
} 