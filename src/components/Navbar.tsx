import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'services';
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigateHome,
  onNavigateServices,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-5 py-3 rounded-full transition-all duration-500 glass-nav-pill ${
            scrolled ? 'shadow-2xl border-black/15 bg-[#EBEBEB]/90 scale-[0.99]' : ''
          }`}
        >
          {/* Logo (Left) */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E85500] flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-md transition-transform duration-300 group-hover:rotate-12">
              <span className="font-syne">F</span>
            </div>
            <span className="font-syne text-lg font-extrabold tracking-tight text-[#111111] group-hover:text-[#E85500] transition-colors">
              FLOWCHAIN
            </span>
          </button>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6 text-xs uppercase font-mono tracking-wider text-[#444444]">
            <button
              onClick={onNavigateHome}
              className={`relative py-1 transition-colors ${
                currentPage === 'home' ? 'text-[#E85500] font-bold' : 'hover:text-[#E85500]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E85500]" />
              )}
            </button>

            <button
              onClick={onNavigateServices}
              className={`relative py-1 transition-colors flex items-center gap-1.5 ${
                currentPage === 'services' ? 'text-[#E85500] font-bold' : 'hover:text-[#E85500]'
              }`}
            >
              <span>Services Lab</span>
              <span className="px-1.5 py-0.5 text-[9px] bg-[#E85500] text-white font-bold rounded-full animate-pulse">
                DEMOS
              </span>
              {currentPage === 'services' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E85500]" />
              )}
            </button>

            <a
              href="#explosion"
              onClick={() => {
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              Explosion
            </a>

            <a
              href="#work"
              onClick={() => {
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => {
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              About
            </a>
          </div>

          {/* Desktop Book a Call CTA (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#E85500] hover:bg-[#D44B00] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Icon (Right) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/5 text-[#111111] hover:bg-[#E85500] hover:text-white transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Full-Screen Dark Overlay Menu (Mobile Only) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#0A0A0C] text-white flex flex-col justify-between p-6 sm:p-8 animate-fade-in md:hidden">
          {/* Header Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#E85500] flex items-center justify-center text-white font-bold text-xs">
                F
              </div>
              <span className="font-syne font-extrabold text-base tracking-tight">
                FLOWCHAIN
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#E85500] transition-colors"
              aria-label="Close Overlay Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Centered Navigation Links */}
          <div className="flex flex-col items-center justify-center gap-8 my-auto font-syne text-3xl sm:text-4xl font-extrabold tracking-tight">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateServices();
              }}
              className="hover:text-[#E85500] transition-colors flex items-center gap-2"
            >
              <span>Services Lab</span>
              <span className="text-xs bg-[#E85500] text-white px-2 py-0.5 rounded-full font-mono font-bold">
                DEMOS
              </span>
            </button>

            <a
              href="#explosion"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              Explosion
            </a>

            <a
              href="#work"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              About
            </a>
          </div>

          {/* Bottom Full-Width Solid Orange "Book a Call" Button */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full min-h-[48px] bg-[#E85500] hover:bg-[#D44B00] text-white font-mono font-bold text-sm uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book a Call</span>
            </button>

            <div className="text-center font-mono text-xs text-[#888888] space-y-1">
              <div>flowchain05@gmail.com</div>
              <div>+91 96860 71617 • +91 89516 48748</div>
              <div className="text-[10px] text-white/40 pt-1">Founded by Shashwat V. Rao & Dev U.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
