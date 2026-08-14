import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExplosionSection } from './components/ExplosionSection';
import { ServicesSection } from './components/ServicesSection';
import { StoryNarrativeSection } from './components/StoryNarrativeSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AIReceptionistShowcase } from './components/AIReceptionistShowcase';
import { WhatsAppShowcase } from './components/WhatsAppShowcase';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { AboutPositioningSection } from './components/AboutPositioningSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { ServicesPage } from './components/ServicesPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Handle URL hash changes
    if (window.location.hash === '#services-page') {
      setCurrentPage('services');
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#EBEBEB] text-[#111111] font-sans overflow-x-hidden selection:bg-[#E85500] selection:text-white">
      {/* Precision-Centered 60fps Custom Cursor */}
      <CustomCursor />

      {/* Frosted Glass Navigation Pill with Page Switcher */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onNavigateServices={handleNavigateServices}
        onOpenBooking={handleOpenBooking}
      />

      {/* Page Content View Switching */}
      <main className="relative w-full">
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section with 3D Command Center */}
            <HeroSection onOpenBooking={handleOpenBooking} />

            {/* 2. Signature Scroll-Driven 3D Explosion & Convergence */}
            <ExplosionSection />

            {/* 3. Services Section with Live Interactive Mini Demos */}
            <ServicesSection onOpenBooking={handleOpenBooking} />

            {/* 4. The Flowchain Narrative Story (5 Chapters) */}
            <StoryNarrativeSection />

            {/* 5. How Flowchain Works (3 Steps) */}
            <HowItWorksSection onOpenBooking={handleOpenBooking} />

            {/* 6. AI Receptionist Showcase (Full Dark Mode Section Break) */}
            <AIReceptionistShowcase onOpenBooking={handleOpenBooking} />

            {/* 7. WhatsApp Automation Spotlight */}
            <WhatsAppShowcase onOpenBooking={handleOpenBooking} />

            {/* 8. Selected Work / Portfolio (3D Cursor Tilt Cards) */}
            <SelectedWorkSection onOpenBooking={handleOpenBooking} />

            {/* 9. About & Positioning Philosophy */}
            <AboutPositioningSection />

            {/* 10. Final Call to Action */}
            <FinalCTASection onOpenBooking={handleOpenBooking} />
          </>
        ) : (
          /* Dedicated Services & Interactive Demos Lab Page */
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onNavigateHome={handleNavigateHome}
          />
        )}
      </main>

      {/* Minimal Footer */}
      <FooterSection onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Strategy Call Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
