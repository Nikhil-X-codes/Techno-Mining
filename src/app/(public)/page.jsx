'use client';

import HeroSlider from '@/components/home/HeroSlider';
import AboutPreview from '@/components/about/AboutPreview';
import ServicesPreview from '@/components/services/ServicesPreview';
import AchievementsPreview from '@/components/achievements/AchievementsPreview';
import ContactPreview from '@/components/contact/ContactPreview';

export default function HomePage() {
  return (
    <main>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Achievements Preview Section */}
      <AchievementsPreview />

      {/* Contact Preview Section */}
      <ContactPreview />
    </main>
  );
}
