import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, Cpu, Code2, ExternalLink, Sparkles } from 'lucide-react';
import ConceptualProjectMockup from './ConceptualProjectMockup';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050508]/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0F0F1B] border border-white/[0.12] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#FF4D00] font-bold uppercase mb-2">
                <span>PROJETO {project.number}</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/70">{project.type}</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-[#CCFF00]">{project.year}</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white hover:text-[#FF4D00] border border-white/[0.1] transition-colors"
              aria-label="Fechar modal"
              data-cursor-interactive="true"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Conceptual Mockup Preview */}
          <div className="my-8">
            <ConceptualProjectMockup
              type={project.conceptualType}
              color={project.color}
              accentColor={project.accentColor}
            />
            <div className="mt-2 text-center text-[11px] font-mono text-[#A1A1B5]/70">
              * Ilustração gráfica conceitual demonstrativa desenvolvida para este portfólio.
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            {/* Left Column: Description & Highlights */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#A1A1B5] uppercase tracking-wider mb-2">
                  VISÃO GERAL DO PROJETO
                </h4>
                <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#A1A1B5] uppercase tracking-wider mb-3">
                  PRINCIPAIS DESTAQUES TÉCNICOS
                </h4>
                <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#9CA3AF]">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                      <span className="text-white/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Tech Stack & Metrics */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
                <h4 className="font-mono text-xs text-[#A1A1B5] uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#0055FF]" />
                  <span>TECNOLOGIAS UTILIZADAS</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.1] font-mono text-xs text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics cards */}
              <div className="grid grid-cols-1 gap-2.5">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                  >
                    <span className="font-mono text-xs text-[#A1A1B5]">{m.label}</span>
                    <span className="font-display font-bold text-sm text-[#CCFF00]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-white/50">
              ESTRUTURADO PARA ATUALIZAÇÃO CONTÍNUA &middot; VICTOR RUIS MARQUES
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white text-[#09090D] font-mono text-xs font-bold hover:bg-[#FF4D00] hover:text-white transition-colors"
              data-cursor-interactive="true"
            >
              FECHAR DETALHES
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
