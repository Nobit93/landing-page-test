import React from 'react';
import Header from '@/components/bp-image-enhancer/Header';
import HeroSection from '@/components/bp-image-enhancer/HeroSection';
import FeaturesSection from '@/components/bp-image-enhancer/FeaturesSection';
import TestimonialsSection from '@/components/bp-image-enhancer/TestimonialsSection';
import FaqSection from '@/components/bp-image-enhancer/FaqSection';
import Footer from '@/components/bp-image-enhancer/Footer';

export default function BpImageEnhancerPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
} 