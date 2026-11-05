import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import {
  Code,
  Layers,
  Terminal,
  Cpu,
  Sparkles,
  BarChart3,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  CheckCircle2,
  Play
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [selectedTech, setSelectedTech] = useState(skillsData.frontend[0]);
  const [interactiveCounter, setInteractiveCounter] = useState(0);

  // Icon mapping for interface specialties
  const iconMap = {
    BarChart3: BarChart3,
    ShieldCheck: ShieldCheck,
    ShoppingBag: ShoppingBag,
    Smartphone: Smartphone,
  };

  return (
    <section id="skills" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-14">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#0055FF] font-bold tracking-widest uppercase mb-2">
            <span>03 // ARQUITETURA & TECNOLOGIAS</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            SKILLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#CCFF00]">STACK</span>
          </h2>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#A1A1B5] max-w-md">
          Sem barras arbitrárias de porcentagem. Apresentação transparente das ferramentas que utilizo para erguer experiências web.
        </p>
      </div>

      {/* Category Filter Switcher */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <button
          onClick={() => {
            setActiveTab('frontend');
            setSelectedTech(skillsData.frontend[0]);
          }}
          className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'frontend'
              ? 'bg-[#FF4D00] text-white shadow-[0_0_20px_rgba(255,77,0,0.4)]'
              : 'bg-white/[0.04] text-[#A1A1B5] hover:text-white hover:bg-white/[0.08]'
          }`}
          data-cursor-interactive="true"
        >
          <Code className="w-3.5 h-3.5" />
          <span>FRONT-END (MAIOR DOMÍNIO)</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('backend');
            setSelectedTech(skillsData.backend[0]);
          }}
          className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'backend'
              ? 'bg-[#0055FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]'
              : 'bg-white/[0.04] text-[#A1A1B5] hover:text-white hover:bg-white/[0.08]'
          }`}
          data-cursor-interactive="true"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>BACK-END & LINGUAGENS (EM ESTUDO)</span>
        </button>

        <button
          onClick={() => setActiveTab('specialties')}
          className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'specialties'
              ? 'bg-[#CCFF00] text-[#09090D] shadow-[0_0_20px_rgba(204,255,0,0.3)]'
              : 'bg-white/[0.04] text-[#A1A1B5] hover:text-white hover:bg-white/[0.08]'
          }`}
          data-cursor-interactive="true"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>INTERFACES PRÁTICAS</span>
        </button>
      </div>

      {/* Main Interactive Stage */}
      <AnimatePresence mode="wait">
        {activeTab !== 'specialties' ? (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Tech Grid Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(activeTab === 'frontend' ? skillsData.frontend : skillsData.backend).map((tech) => {
                const isSelected = selectedTech?.name === tech.name;
                return (
                  <div
                    key={tech.name}
                    onClick={() => setSelectedTech(tech)}
                    className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#121220] border-[#FF4D00] shadow-[0_15px_35px_rgba(0,0,0,0.6)] translate-y-[-2px]'
                        : 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04]'
                    }`}
                    data-cursor-interactive="true"
                    data-cursor-text="INSPECIONAR"
                  >
                    {/* Glow outline on selection */}
                    {isSelected && (
                      <div
                        className="absolute inset-0 rounded-2xl opacity-15 blur-lg pointer-events-none"
                        style={{ backgroundColor: tech.highlightColor }}
                      />
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#A1A1B5] uppercase">
                        {tech.category}
                      </span>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${tech.highlightColor}18`,
                          color: tech.highlightColor,
                        }}
                      >
                        {tech.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[#CCFF00] transition-colors mb-2">
                      {tech.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#9CA3AF] line-clamp-2 leading-relaxed">
                      {tech.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-white/60">Foco:</span>
                      <span className="text-white font-medium">{tech.focus}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive Detail & Live Sandbox Inspector */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-7 rounded-3xl bg-[#0F0F1B] border border-white/[0.1] shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: selectedTech?.highlightColor }}
                    />
                    <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                      INSPETOR DE TECNOLOGIA
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#A1A1B5]">
                    INTERACTIVE INSPECTOR
                  </span>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#A1A1B5] uppercase">
                    {selectedTech?.badge}
                  </span>
                  <h3 className="font-display font-black text-4xl text-white mt-1">
                    {selectedTech?.name}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-[#9CA3AF] leading-relaxed">
                    {selectedTech?.description}
                  </p>
                </div>

                {/* Practical implementation highlight */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00]">
                    <Terminal className="w-4 h-4" />
                    <span>APLICAÇÃO REAL EM PROJETOS:</span>
                  </div>
                  <p className="font-mono text-xs text-white/80 leading-relaxed">
                    → {selectedTech?.focus}
                  </p>
                </div>

                {/* Micro Sandbox Interactive Widget for React/JS */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#A1A1B5] mb-3">
                    <span>MICRO-INTERAÇÃO VIVA</span>
                    <span className="text-[#CCFF00]">TESTE DE CLIQUE</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-xs text-white">
                      Eventos disparados:{' '}
                      <span className="font-bold text-[#FF4D00] text-sm">{interactiveCounter}</span>
                    </div>
                    <button
                      onClick={() => setInteractiveCounter((prev) => prev + 1)}
                      className="px-4 py-2 rounded-lg bg-[#FF4D00] hover:bg-[#FF6A2B] text-white font-mono text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5"
                      data-cursor-interactive="true"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>DISPARAR AÇÃO</span>
                    </button>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#A1A1B5]/70 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>Código limpo, estruturado e com boas práticas semânticas.</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Interface Specialties Grid */
          <motion.div
            key="specialties"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillsData.interfaceSpecialties.map((spec, idx) => {
              const IconComp = iconMap[spec.icon] || Layers;
              const borderColors = ['#FF4D00', '#0055FF', '#7000FF', '#CCFF00'];
              const currentAccent = borderColors[idx % borderColors.length];

              return (
                <div
                  key={spec.title}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 group flex flex-col justify-between h-[230px]"
                  data-cursor-interactive="true"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${currentAccent}15`,
                        color: currentAccent,
                        border: `1px solid ${currentAccent}30`,
                      }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="font-display font-bold text-lg text-white group-hover:text-[#CCFF00] transition-colors mb-2">
                      {spec.title}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>

                  <div className="font-mono text-[10px] text-[#A1A1B5] tracking-widest uppercase pt-3 border-t border-white/[0.05]">
                    EXP // PRÁTICA REAL
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
