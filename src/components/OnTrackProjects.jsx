import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';
import { ShieldCheck, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OnTrackProjects() {
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-slide');

      // Silky smooth scroll timeline with ample reading time and gentle transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3200',
          pin: pinWrapperRef.current,
          scrub: 1.8,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * projectsData.length),
              projectsData.length - 1
            );
            setActiveIndex(idx);
          },
        },
      });

      cards.forEach((card, i) => {
        if (i !== 0) {
          // Slide in gently from bottom with smooth fade
          tl.fromTo(
            card,
            {
              yPercent: 35,
              opacity: 0,
              scale: 0.97,
            },
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power1.inOut',
            }
          );
        }

        // Rest interval so the user comfortably sees the current project
        tl.to({}, { duration: 1 });

        if (i !== cards.length - 1) {
          // Slide out smoothly to top
          tl.to(
            card,
            {
              yPercent: -35,
              opacity: 0,
              scale: 0.97,
              duration: 1.2,
              ease: 'power1.inOut',
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projetos" ref={containerRef} className="relative bg-[#171717]">
      {/* Pinned Viewport Container (Lando Norris "ON TRACK" inspiration) */}
      <div
        ref={pinWrapperRef}
        className="relative min-h-screen flex flex-col justify-between py-24 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#F4F0E8]/[0.08] font-mono text-xs text-[#A39F97]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF5A1F] font-bold tracking-widest uppercase">
              03 // TRABALHOS SELECIONADOS
            </span>
            <span className="text-[#6E6B65]">/</span>
            <span className="text-[#F4F0E8]">PROJETOS & INTERFACES</span>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <span className="text-[#A39F97]">PROJETO</span>
            <span className="text-[#FF5A1F] font-bold text-sm">
              0{activeIndex + 1} / 0{projectsData.length}
            </span>
          </div>
        </div>

        {/* Stacked Project Slides Stage */}
        <div className="relative my-auto w-full h-[600px] sm:h-[540px] flex items-center justify-center">
          {projectsData.map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <div
                key={project.id}
                className={`project-slide absolute inset-0 w-full flex items-center justify-center transition-opacity ${
                  isFirst ? 'opacity-100' : 'opacity-0 md:opacity-100'
                }`}
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-[#1E1E1E] border border-[#F4F0E8]/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  {/* Left Column: Information & Specs */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F4F0E8]/10">
                      <span
                        className="font-mono text-xs font-bold px-3 py-1 rounded-full text-[#171717]"
                        style={{ backgroundColor: project.color }}
                      >
                        PROJETO {project.number}
                      </span>
                      <span className="font-mono text-xs text-[#A39F97]">
                        {project.category} &middot; {project.year}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F0E8] leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-[#A39F97] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono text-[#F4F0E8] uppercase tracking-wider">
                        Pontos Desenvolvidos:
                      </div>
                      <ul className="space-y-1.5 font-sans text-xs text-[#A39F97]">
                        {project.details.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: project.color }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#171717] border border-[#F4F0E8]/10 font-mono text-[11px] text-[#F4F0E8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: High-End Conceptual 3D Visual Preview */}
                  <div className="lg:col-span-7 perspective-container">
                    <div
                      className="relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-[#121212] border border-[#F4F0E8]/15 p-6 flex flex-col justify-between overflow-hidden shadow-2xl preserve-3d"
                      style={{
                        transform: 'rotateY(-4deg) rotateX(2deg)',
                      }}
                    >
                      {/* Top Header Mockup */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#F4F0E8]/10 text-[10px] font-mono">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-[#F4F0E8] tracking-wider uppercase">
                            {project.title} // ESTRUTURA
                          </span>
                        </div>
                        <span className="text-[#A39F97]">PROTÓTIPO CONCEITUAL</span>
                      </div>

                      {/* Procedural Visual Representation depending on project */}
                      {project.conceptualType === 'dashboard' && (
                        <div className="space-y-4 my-auto">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-3 rounded-lg bg-[#1F1F1F] border border-white/5 space-y-1">
                              <span className="text-[10px] font-mono text-[#A39F97]">MÉTRICAS</span>
                              <div className="font-display font-bold text-lg text-[#F4F0E8]">100%</div>
                            </div>
                            <div className="p-3 rounded-lg bg-[#1F1F1F] border border-white/5 space-y-1">
                              <span className="text-[10px] font-mono text-[#A39F97]">ESTRUTURA</span>
                              <div className="font-display font-bold text-lg text-[#FF5A1F]">MODULAR</div>
                            </div>
                            <div className="p-3 rounded-lg bg-[#1F1F1F] border border-white/5 space-y-1">
                              <span className="text-[10px] font-mono text-[#A39F97]">LAYOUT</span>
                              <div className="font-display font-bold text-lg text-[#245BFF]">GRID/FLEX</div>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-[#191919] border border-white/5 space-y-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-[#A39F97]">
                              <span>ORGANIZAÇÃO DE INFORMAÇÕES</span>
                              <span className="text-[#FF5A1F]">ANALÍTICO</span>
                            </div>
                            <div className="flex items-end gap-2 h-20 pt-2">
                              {[35, 60, 45, 90, 70, 85, 100, 65, 80].map((h, k) => (
                                <div
                                  key={k}
                                  className="flex-1 bg-[#282828] rounded-t-sm"
                                  style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}
                                >
                                  <div
                                    className="w-full rounded-t-sm transition-all"
                                    style={{
                                      height: `${h}%`,
                                      backgroundColor: k % 2 === 0 ? '#FF5A1F' : '#245BFF',
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {project.conceptualType === 'auth' && (
                        <div className="max-w-[280px] mx-auto w-full space-y-3 my-auto">
                          <div className="text-center space-y-1">
                            <div className="w-8 h-8 mx-auto rounded-lg bg-[#245BFF]/20 border border-[#245BFF]/40 flex items-center justify-center text-[#245BFF]">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div className="font-display font-bold text-sm text-[#F4F0E8]">PORTAL DE LOGIN</div>
                          </div>

                          <div className="space-y-2 font-mono text-xs">
                            <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-white/10 text-[#A39F97] flex items-center justify-between">
                              <span>usuario@email.com</span>
                              <span className="text-[#245BFF] text-[10px]">OK</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-white/10 text-[#F4F0E8] flex items-center justify-between">
                              <span className="tracking-widest">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span>
                              <span className="text-[10px] text-[#A39F97]">VALIDAR</span>
                            </div>
                            <div className="w-full py-2.5 rounded-lg bg-[#245BFF] text-white font-bold text-center text-xs">
                              AUTENTICAR
                            </div>
                          </div>
                        </div>
                      )}

                      {project.conceptualType === 'ecommerce' && (
                        <div className="grid grid-cols-2 gap-4 items-center my-auto">
                          <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/5 flex flex-col items-center justify-center space-y-2">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#873BFF] to-[#FF5A1F] flex items-center justify-center text-white">
                              <ShoppingBag className="w-8 h-8" />
                            </div>
                            <span className="font-mono text-[10px] text-[#A39F97]">PRODUTO // DEMO</span>
                          </div>

                          <div className="space-y-3 font-mono">
                            <div className="font-display font-bold text-base text-[#F4F0E8]">
                              Interface de Catálogo
                            </div>
                            <div className="text-xs text-[#A39F97]">
                              Seletores de cores, carrinho de compras e navegação sem atrito.
                            </div>
                            <div className="px-3 py-1.5 rounded-lg bg-[#873BFF] text-white text-xs font-bold text-center">
                              FLUXO DE COMPRA
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Footer Mockup */}
                      <div className="pt-2 border-t border-[#F4F0E8]/10 flex items-center justify-between text-[10px] font-mono text-[#A39F97]">
                        <span>ESPAÇO RESERVADO PARA MOCKUPS REAIS</span>
                        <span style={{ color: project.color }}>CONCLUÍDO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info line */}
        <div className="pt-6 border-t border-[#F4F0E8]/[0.08] flex items-center justify-between font-mono text-xs text-[#A39F97]">
          <span>ESTRUTURA MODULAR PARA ADIÇÃO DE NOVOS REPOSITÓRIOS</span>
          <span className="text-[#FF5A1F]">TRANSIÇÃO PROGRESSIVA DE PROJETOS</span>
        </div>
      </div>
    </section>
  );
}
