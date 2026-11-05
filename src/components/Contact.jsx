import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  Compass,
  ArrowUp
} from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const email = '38581@raphaeldisanto.com.br';
  const githubUrl = 'https://github.com/Pacolla15';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Subtle celebration confetti effect
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF4D00', '#CCFF00', '#0055FF', '#FFFFFF'],
      });
    } catch (e) {
      // Fallback safe
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(formSubject || 'Contato através do Portfólio');
    const body = encodeURIComponent(
      formMessage
        ? `${formMessage}\n\n---\nEnviado através do portfólio de Victor Ruis Marques`
        : 'Olá Victor, vi seu portfólio e gostaria de conversar com você!'
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-28 pb-16 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-16 font-mono text-xs text-[#9CA3AF]">
        <div className="flex items-center gap-2 text-[#CCFF00] font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>05 // CONEXÃO & CONTATO</span>
        </div>
        <span className="hidden sm:inline-block">ABERTO A APRENDIZADO & DESAFIOS</span>
      </div>

      {/* Monumental Headline */}
      <div className="mb-16">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] max-w-5xl">
          HAVE AN IDEA? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF7A00] to-[#CCFF00]">
            LET'S BUILD SOMETHING
          </span>{' '}
          <span className="text-outline">DIFFERENT.</span>
        </h2>
      </div>

      {/* Contact Interactive Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
        
        {/* Left Column: Direct Action Channels */}
        <div className="lg:col-span-6 space-y-6">
          <p className="font-sans text-base sm:text-lg text-[#9CA3AF] max-w-md leading-relaxed">
            Seja para uma oportunidade, troca de ideias sobre desenvolvimento front-end ou colaboração em projetos criativos, minha caixa de entrada está sempre aberta.
          </p>

          {/* Email Quick Action Card */}
          <div className="p-6 rounded-3xl bg-[#0F0F1B] border border-white/[0.1] shadow-2xl space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#A1A1B5]">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF4D00]" />
                CANAL PRINCIPAL DE E-MAIL
              </span>
              <span className="text-[#CCFF00]">DISPONÍVEL</span>
            </div>

            <div className="font-display font-bold text-lg sm:text-xl text-white break-all">
              {email}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Mailto Button */}
              <a
                href={`mailto:${email}`}
                className="flex-1 min-w-[140px] px-5 py-3 rounded-xl bg-[#FF4D00] hover:bg-[#FF6525] text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(255,77,0,0.3)] hover:-translate-y-0.5"
                data-cursor-interactive="true"
                data-cursor-text="MAILTO"
              >
                <Mail className="w-4 h-4" />
                <span>ENVIAR E-MAIL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-mono text-xs font-medium tracking-wider flex items-center gap-2 transition-all active:scale-95"
                data-cursor-interactive="true"
                data-cursor-text="COPIAR"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#CCFF00]" />
                    <span className="text-[#CCFF00]">COPIADO!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#A1A1B5]" />
                    <span>COPIAR</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Channel Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
            data-cursor-interactive="true"
            data-cursor-text="GITHUB"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white group-hover:text-[#CCFF00] group-hover:scale-105 transition-all">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#A1A1B5] uppercase">Repositórios & Código</div>
                  <div className="font-display font-bold text-lg text-white group-hover:text-[#CCFF00] transition-colors">
                    github.com/Pacolla15
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-[#CCFF00] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>
        </div>

        {/* Right Column: Direct Message Composer (Creates Mailto) */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.1] backdrop-blur-md space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <MessageSquare className="w-4 h-4 text-[#0055FF]" />
                <span className="font-bold tracking-wider">MENSAGEM RÁPIDA</span>
              </div>
              <span className="font-mono text-[10px] text-[#A1A1B5]">
                DISPARA DIRETAMENTE NO SEU E-MAIL
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-[#A1A1B5] uppercase tracking-wider mb-2">
                  Assunto da Mensagem:
                </label>
                <input
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Ex: Proposta de Projeto ou Oportunidade..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] focus:border-[#FF4D00] text-white focus:outline-none transition-colors text-sm"
                  data-cursor-interactive="true"
                />
              </div>

              <div>
                <label className="block text-[#A1A1B5] uppercase tracking-wider mb-2">
                  Conteúdo da Mensagem:
                </label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Olá Victor! Gostaria de falar com você sobre..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] focus:border-[#FF4D00] text-white focus:outline-none transition-colors text-sm resize-none"
                  data-cursor-interactive="true"
                />
              </div>

              <a
                href={generateMailto()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF4D00] via-[#FF6A2B] to-[#FF4D00] text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(255,77,0,0.3)] hover:brightness-110 active:scale-[0.99] transition-all"
                data-cursor-interactive="true"
                data-cursor-text="DISPARAR"
              >
                <Send className="w-4 h-4" />
                <span>PREPARAR & ENVIAR MENSAGEM</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer / Copyright / Back to top */}
      <div className="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#9CA3AF]">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-white font-semibold">VICTOR RUIS MARQUES</span>
          <span className="hidden sm:inline text-white/30">&middot;</span>
          <span>CAMPINAS, SÃO PAULO &middot; BRASIL</span>
          <span className="hidden sm:inline text-white/30">&middot;</span>
          <span className="text-[#CCFF00]">2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            data-cursor-interactive="true"
          >
            GITHUB
          </a>

          <a
            href={`mailto:${email}`}
            className="hover:text-white transition-colors"
            data-cursor-interactive="true"
          >
            EMAIL
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-[#CCFF00] transition-colors p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]"
            data-cursor-interactive="true"
            aria-label="Voltar ao topo"
          >
            <span>TOPO</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
