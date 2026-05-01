import HeroSlider from '@/components/home/HeroSlider';
import AboutPreview from '@/components/about/AboutPreview';
import ServicesPreview from '@/components/services/ServicesPreview';
import AchievementsPreview from '@/components/achievements/AchievementsPreview';
import ContactPreview from '@/components/contact/ContactPreview';

export default function Home() {
  return (
    <div>
      <section id="home" className="scroll-section">
        <HeroSlider />
      </section>

      <section id="about" className="scroll-section">
        <AboutPreview />
      </section>

      <section id="services" className="scroll-section">
        <ServicesPreview />
      </section>

      <section id="achievements" className="scroll-section">
        <AchievementsPreview />
      </section>

      <section id="contact" className="scroll-section">
        <ContactPreview />
      </section>

      <section id="map" className="scroll-section py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Visit our headquarters for project planning, compliance reviews, and technical consultations.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              title="Techno Mining Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392346607!2d77.0688991545367!3d28.52728034343319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d0a931bd07%3A0x3fd6408d2a8f7e8f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
