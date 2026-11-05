import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Campinas, SP (America/Sao_Paulo)
      const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'SOBRE', href: '#about', number: '01' },
    { label: 'SKILLS', href: '#skills', number: '02' },
    { label: 'TRABALHOS', href: '#works', number: '03' },
    { label: 'CONTATO', href: '#contact', number: '04' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#09090D]/80 backdrop-blur-lg border-b border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand mark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white transition-transform duration-200 active:scale-95"
            data-cursor-interactive="true"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF4D00] to-[#7000FF] p-[1.5px] transition-transform duration-300 group-hover:rotate-6">
              <div className="w-full h-full bg-[#09090D] rounded-[7px] flex items-center justify-center font-display font-black text-sm text-white">
                VR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#FF4D00] transition-colors">
                VICTOR RUIS
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#9CA3AF]">
                CREATIVE DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative flex items-center gap-1.5 py-1 text-[#A1A1B5] hover:text-white transition-colors"
                data-cursor-interactive="true"
              >
                <span className="text-[10px] text-[#FF4D00] font-bold transition-transform duration-200 group-hover:-translate-y-0.5">
                  {link.number}
                </span>
                <span className="tracking-widest uppercase font-medium">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Status & Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Live Location & Local Time */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#A1A1B5]">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00] animate-pulse" />
              <span>CAMPINAS, SP</span>
              <span className="text-white font-semibold">{time || '12:00:00'}</span>
            </div>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#09090D] font-mono text-xs font-bold tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#FF4D00] hover:text-white"
              data-cursor-interactive="true"
              data-cursor-text="LET'S TALK"
            >
              <span>INICIAR CONTATO</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white hover:text-[#FF4D00] transition-colors"
            aria-label="Abrir menu"
            data-cursor-interactive="true"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#09090D]/95 backdrop-blur-2xl border-b border-white/[0.1] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {/* Telemetry info for mobile */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-[#A1A1B5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                  <span>CAMPINAS, SP (GMT-3)</span>
                </div>
                <span className="text-white font-bold">{time}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-white/[0.05] text-white font-display text-xl font-bold tracking-tight transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#FF4D00]">{link.number}</span>
                </a>
              ))}

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <a
                  href="https://github.com/Pacolla15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white"
                >
                  <GithubIcon className="w-4 h-4 text-[#CCFF00]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:38581@raphaeldisanto.com.br"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF4D00] text-xs font-mono font-bold text-white shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>E-mail</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
