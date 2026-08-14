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
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
          {/* Logo (Wordmark + Geometric Mark) */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 group interactive-hover text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-[#E85500] flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-md transition-transform duration-300 group-hover:rotate-12">
              <span className="font-syne">F</span>
            </div>
            <span className="font-syne text-lg font-extrabold tracking-tight text-[#111111] group-hover:text-[#E85500] transition-colors">
              FLOWCHAIN
            </span>
          </button>

          {/* Desktop Links & Page Switchers */}
          <div className="hidden md:flex items-center gap-6 text-xs uppercase font-mono tracking-wider text-[#444444]">
            <button
              onClick={onNavigateHome}
              className={`relative py-1 transition-colors group interactive-hover ${
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
              className={`relative py-1 transition-colors flex items-center gap-1.5 group interactive-hover ${
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
              href="#story"
              onClick={() => {
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="hover:text-[#E85500] transition-colors"
            >
              Story
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

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#E85500] hover:bg-[#D44B00] text-white text-xs font-mono font-semibold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/30 interactive-hover"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-black/5 text-[#111111] hover:bg-[#E85500] hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#EBEBEB] flex flex-col justify-between px-8 pt-28 pb-12 transition-all duration-500 md:hidden">
          <div className="flex flex-col gap-6">
            <div className="w-12 h-1 bg-[#E85500] rounded-full mb-4 animate-pulse" />

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="font-syne text-4xl font-extrabold text-[#111111] hover:text-[#E85500] transition-colors text-left flex items-center justify-between border-b border-black/10 pb-3"
            >
              <span>Home</span>
              <span className="font-mono text-sm text-[#888888]">01</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateServices();
              }}
              className="font-syne text-4xl font-extrabold text-[#E85500] transition-colors text-left flex items-center justify-between border-b border-black/10 pb-3"
            >
              <span>Services Lab</span>
              <span className="font-mono text-xs bg-[#E85500] text-white px-2 py-0.5 rounded-full font-bold">
                DEMOS
              </span>
            </button>

            <a
              href="#work"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="font-syne text-4xl font-extrabold text-[#111111] hover:text-[#E85500] transition-colors flex items-center justify-between border-b border-black/10 pb-3"
            >
              <span>Work</span>
              <span className="font-mono text-sm text-[#888888]">03</span>
            </a>

            <a
              href="#about"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home') onNavigateHome();
              }}
              className="font-syne text-4xl font-extrabold text-[#111111] hover:text-[#E85500] transition-colors flex items-center justify-between border-b border-black/10 pb-3"
            >
              <span>About</span>
              <span className="font-mono text-sm text-[#888888]">04</span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-[#E85500] text-white font-mono font-bold text-sm uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book a Free Strategy Call</span>
            </button>

            <div className="flex justify-between items-center text-xs font-mono text-[#666666] pt-4 border-t border-black/10">
              <span>hello@flowchain.ai</span>
              <span>© 2026 FLOWCHAIN</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
