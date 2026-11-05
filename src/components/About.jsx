import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Sparkles, Terminal, Code2, Cpu, ArrowUpRight } from 'lucide-react';

export default function About() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'Afinidade Front-end',
      tag: 'Core Passion',
      color: '#FF4D00',
      description:
        'Onde ideias ganham forma visual. Foco em interfaces responsivas, layouts assimétricos, tipografia intencional e micro-interações que elevam a experiência do usuário.',
    },
    {
      num: '02',
      title: 'Evolução Back-end',
      tag: 'Constante Aprendizado',
      color: '#0055FF',
      description:
        'Desenvolvedor em evolução contínua. Explorando o ecossistema Node.js e fundamentos de Python para compreender arquitetura, servidores, consumo de dados e APIs.',
    },
    {
      num: '03',
      title: 'Mente Experimental',
      tag: 'Creative Mindset',
      color: '#CCFF00',
      description:
        'Curiosidade constante em testar novas tecnologias, linguagens e paradigmas, sempre buscando novas maneiras de desenvolver experiências memoráveis para a web.',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header with Editorial Meta */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] font-bold tracking-widest uppercase mb-2">
            <span>02 // IDENTITY & PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            SOBRE <span className="text-[#9CA3AF] font-light">MIM</span>
          </h2>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#A1A1B5] max-w-md">
          Desenvolvedor em formação transformando linhas de código em interfaces com pulso próprio.
        </p>
      </div>

      {/* Editorial Grid: Asymmetrical Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Big Typographic Statement */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Statement Box */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.1] backdrop-blur-md">
            {/* Visual accent quote mark */}
            <span className="font-display font-black text-8xl text-[#FF4D00]/20 absolute -top-8 -left-2 select-none pointer-events-none">
              “
            </span>

            <p className="font-display font-medium text-2xl sm:text-3xl text-white leading-relaxed relative z-10">
              Sou <strong className="font-bold text-white">Victor Ruis Marques</strong>, desenvolvedor em formação e apaixonado por transformar ideias em{' '}
              <span className="text-[#CCFF00] font-semibold underline decoration-[#CCFF00]/40 underline-offset-8">
                experiências digitais
              </span>.
            </p>

            <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-4 font-sans text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              <p>
                Minha maior afinidade está no <strong className="text-white font-medium">Front-end</strong>, onde gosto de explorar interfaces, composições visuais e interações que reagem de maneira fluida a cada gesto do usuário.
              </p>
              <p>
                Tenho conhecimentos básicos de <strong className="text-[#F59E0B] font-medium">Python</strong> e experiência prática na criação de interfaces com <strong className="text-[#00E5FF] font-medium">HTML, CSS, JavaScript, React e Node.js</strong>.
              </p>
              <p className="text-white/80">
                Não apresento conhecimentos como avançados quando não são: sou um desenvolvedor em evolução, com maior domínio de Front-end e genuíno interesse em aprender novas tecnologias e possibilidades dentro do desenvolvimento de software.
              </p>
            </div>
          </div>

          {/* Quick Badges of Practice */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF4D00]/50 transition-colors">
              <div className="text-[#FF4D00] font-bold text-lg mb-1">01</div>
              <div className="text-white font-semibold">Dashboards</div>
              <div className="text-[11px] text-[#A1A1B5]">Sistemas & Métricas</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#0055FF]/50 transition-colors">
              <div className="text-[#0055FF] font-bold text-lg mb-1">02</div>
              <div className="text-white font-semibold">Autenticação</div>
              <div className="text-[11px] text-[#A1A1B5]">Login & Segurança UX</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#CCFF00]/50 transition-colors">
              <div className="text-[#CCFF00] font-bold text-lg mb-1">03</div>
              <div className="text-white font-semibold">E-Commerce</div>
              <div className="text-[11px] text-[#A1A1B5]">Fluxos de Compra</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Location & Pillars */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Location & Time Capsule Card */}
          <div className="p-6 rounded-2xl bg-[#0F0F1A] border border-white/[0.1] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-[#9CA3AF] tracking-wider uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D00]" />
                BASE OPERACIONAL
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30">
                ACTIVE
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-white">
                Campinas, São Paulo
              </h3>
              <p className="font-sans text-xs text-[#9CA3AF]">
                Brasil &middot; Fuso Horário de Brasília (GMT-3)
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between font-mono text-xs text-[#E6E6EF] bg-black/40 p-3 rounded-xl border border-white/[0.05]">
              <span>HORÁRIO LOCAL:</span>
              <span className="font-bold text-[#CCFF00] text-sm tracking-widest">{localTime}</span>
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
                data-cursor-interactive="true"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                    >
                      {pillar.num}
                    </span>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#CCFF00] transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] text-[#A1A1B5] uppercase">
                    {pillar.tag}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#9CA3AF] leading-relaxed pl-10">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
