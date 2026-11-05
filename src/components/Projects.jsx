import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ConceptualProjectMockup from './ConceptualProjectMockup';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Sparkles, Eye, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="works" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-16">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] font-bold tracking-widest uppercase mb-2">
            <span>04 // PROJETOS SELECIONADOS</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#7000FF] to-[#0055FF]">WORKS</span>
          </h2>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#A1A1B5] max-w-md">
          Interfaces funcionais, sistemas analíticos e experiências de navegação desenvolvidas com foco em clareza e interatividade.
        </p>
      </div>

      {/* Projects Showcase Stream */}
      <div className="space-y-16">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 sm:p-10 rounded-3xl bg-[#0E0E18] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle ambient gradient highlight */}
              <div
                className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundColor: project.color }}
              />

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Showcase (Conceptual Illustration) */}
                <div
                  className={`lg:col-span-7 cursor-pointer transform transition-transform duration-500 group-hover:scale-[1.01] ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  onClick={() => handleOpenProject(project)}
                  data-cursor-interactive="true"
                  data-cursor-text="EXPANDIR"
                >
                  <ConceptualProjectMockup
                    type={project.conceptualType}
                    color={project.color}
                    accentColor={project.accentColor}
                  />
                </div>

                {/* Project Info & Metadata */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-sm font-bold text-[#FF4D00]">
                      PROJETO // {project.number}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/80">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white group-hover:text-[#CCFF00] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenProject(project)}
                      className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-[#09090D] font-mono text-xs font-bold tracking-wider hover:bg-[#FF4D00] hover:text-white transition-all duration-300 shadow-md"
                      data-cursor-interactive="true"
                      data-cursor-text="INSPECIONAR"
                    >
                      <Eye className="w-4 h-4" />
                      <span>VISUALIZAR DETALHES</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Structural notice for portfolio longevity */}
      <div className="mt-14 p-5 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1A1B5]">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#CCFF00]" />
          <span>Estrutura modular preparada para expansão de novos projetos e repositórios.</span>
        </div>
        <a
          href="https://github.com/Pacolla15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#CCFF00] underline underline-offset-4 flex items-center gap-1"
          data-cursor-interactive="true"
        >
          <span>Acompanhar código no GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Active Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
