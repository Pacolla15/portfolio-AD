import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SOBRE', href: '#sobre', number: '01' },
    { label: 'PROJETOS', href: '#projetos', number: '02' },
    { label: 'TECNOLOGIAS', href: '#tecnologias', number: '03' },
    { label: 'CONTATO', href: '#contato', number: '04' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#171717]/90 backdrop-blur-md border-b border-[#F4F0E8]/[0.08] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top minimal scroll progress indicator */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1F1F1F]">
        <div
          className="h-full bg-[#FF5A1F] transition-all duration-75 origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="group flex items-baseline gap-3">
          <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#F4F0E8] group-hover:text-[#FF5A1F] transition-colors">
            VICTOR RUIS MARQUES
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-[#A39F97] uppercase">
            / CAMPINAS — BR
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1.5 text-[#A39F97] hover:text-[#F4F0E8] transition-colors py-1"
            >
              <span className="text-[10px] text-[#FF5A1F] font-semibold">
                {link.number}
              </span>
              <span className="tracking-wider uppercase font-medium">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Contact direct link */}
        <div className="hidden md:flex items-center">
          <a
            href="#contato"
            className="px-4 py-2 rounded-full border border-[#F4F0E8]/20 hover:border-[#FF5A1F] text-xs font-mono tracking-wider text-[#F4F0E8] hover:text-[#FF5A1F] transition-all duration-200"
          >
            FALE COMIGO
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F4F0E8] hover:text-[#FF5A1F] transition-colors"
          aria-label="Abrir navegação"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#F4F0E8]/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-base font-display font-bold text-[#F4F0E8] hover:text-[#FF5A1F] border-b border-white/[0.04]"
            >
              <span>{link.label}</span>
              <span className="font-mono text-xs text-[#FF5A1F]">{link.number}</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center rounded-xl bg-[#FF5A1F] text-[#171717] font-mono text-xs font-bold tracking-wider"
            >
              INICIAR CONTATO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
