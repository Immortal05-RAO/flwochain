import React from 'react';
import { Sparkles, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030508] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4F8CFF] to-[#7C3AED] p-[1px]">
                <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#4F8CFF]" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                FLOW<span className="text-[#4F8CFF]">CHAIN</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Flow Chain builds autonomous AI employees that answer calls, manage WhatsApp communications, qualify leads, and automate operational workflows 24/7.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]"></span>
              </span>
              <span className="font-mono text-[11px]">System Status: Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-[#4F8CFF] transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-[#4F8CFF] transition-colors">How It Works</a></li>
              <li><a href="#interactive-demo" className="hover:text-[#4F8CFF] transition-colors">Demo Simulator</a></li>
              <li><a href="#case-studies" className="hover:text-[#4F8CFF] transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-[#4F8CFF] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Core Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-[#4F8CFF] transition-colors">AI Voice Agents</a></li>
              <li><a href="#services" className="hover:text-[#4F8CFF] transition-colors">WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-[#4F8CFF] transition-colors">n8n Workflow Engineering</a></li>
              <li><a href="#services" className="hover:text-[#4F8CFF] transition-colors">CRM 2-Way Sync</a></li>
              <li><a href="#services" className="hover:text-[#4F8CFF] transition-colors">Custom AI Enterprise</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact Us</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#4F8CFF]" />
                <a href="mailto:hello@flowchain.ai" className="hover:text-white transition-colors">
                  hello@flowchain.ai
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#4F8CFF]" />
                <span>+1 (800) 555-FLOW</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#4F8CFF]" />
                <span>San Francisco, CA & Remote</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mt-5">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#4F8CFF] hover:border-[#4F8CFF]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#4F8CFF] hover:border-[#4F8CFF]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#4F8CFF] hover:border-[#4F8CFF]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Flow Chain AI Automation Agency. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
