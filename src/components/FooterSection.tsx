import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const FooterSection: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="w-full bg-[#0A0A0C] text-[#F5F5F3] pt-20 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10 selection:bg-[#E85500] selection:text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E85500] flex items-center justify-center text-white font-bold text-sm font-syne">
                F
              </div>
              <span className="font-syne text-xl font-extrabold tracking-tight text-white">
                FLOWCHAIN
              </span>
            </div>

            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              We design and build AI automation, voice receptionists, WhatsApp CRMs, and bespoke digital operating systems for scaling companies.
            </p>

            <a
              href="mailto:hello@flowchain.ai"
              className="font-mono text-sm text-[#E85500] hover:underline pt-2 font-semibold"
            >
              hello@flowchain.ai
            </a>
          </div>

          {/* Nav Column 1: Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs text-white/70">
            <span className="text-white font-bold uppercase tracking-widest mb-2 font-syne text-sm">
              NAVIGATION
            </span>
            <a href="#hero" className="hover:text-[#E85500] transition-colors">
              01 Home
            </a>
            <a href="#services" className="hover:text-[#E85500] transition-colors">
              02 Services
            </a>
            <a href="#explosion" className="hover:text-[#E85500] transition-colors">
              03 Explosion Interaction
            </a>
            <a href="#story" className="hover:text-[#E85500] transition-colors">
              04 Narrative Flow
            </a>
            <a href="#work" className="hover:text-[#E85500] transition-colors">
              05 Selected Work
            </a>
            <a href="#about" className="hover:text-[#E85500] transition-colors">
              06 Positioning & About
            </a>
          </div>

          {/* Nav Column 2: Ecosystem */}
          <div className="md:col-span-4 flex flex-col gap-3 font-mono text-xs text-white/70">
            <span className="text-white font-bold uppercase tracking-widest mb-2 font-syne text-sm">
              CONNECT WITH US
            </span>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-[#E85500] hover:text-[#E85500] transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-[#E85500] hover:text-[#E85500] transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-[#E85500] hover:text-[#E85500] transition-colors"
                title="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#E85500] hover:bg-[#D44B00] text-white font-bold uppercase tracking-wider rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 font-mono text-xs text-white/40">
          <span>Flowchain — Systems That Move.</span>
          <span>© 2026 FLOWCHAIN DIGITAL STUDIO. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};
