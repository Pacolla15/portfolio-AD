import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsData } from '../data/skillsData';
import { Code, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TechDepthSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered perspective lift on scroll
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tecnologias"
      ref={containerRef}
      className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#F4F0E8]/[0.08]"
    >
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#F4F0E8]/[0.08] mb-16">
        <div>
          <div className="font-mono text-xs text-[#245BFF] font-bold tracking-widest uppercase mb-2">
            04 // FERRAMENTAS & INTERFACES
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#F4F0E8] tracking-tight">
            TECNOLOGIAS & <span className="text-[#FF5A1F]">APLICAÇÃO</span>
          </h2>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#A39F97] max-w-md">
          Apresentação transparente das ferramentas utilizadas na construção de páginas e sistemas web, sem métricas arbitrárias.
        </p>
      </div>

      {/* Main Grid: Front-end (Dominant) & Back-end (Evolution) */}
      <div className="space-y-16">
        {/* Core Front-end Group */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#F4F0E8]">
            <Code className="w-4 h-4 text-[#FF5A1F]" />
            <span className="font-bold tracking-wider uppercase">FRONT-END // MAIOR DOMÍNIO & EXPERIÊNCIA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.primaryFrontend.map((tech, idx) => (
              <div
                key={tech.name}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#1D1D1D] border border-[#F4F0E8]/10 hover:border-[#F4F0E8]/25 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[#A39F97] uppercase">
                      {tech.category}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F0E8] tracking-tight group-hover:text-[#FF5A1F] transition-colors mb-2">
                    {tech.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#A39F97] leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] font-mono text-[10px] text-[#6E6B65] uppercase">
                  EXPERIÊNCIA PRÁTICA
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back-end in Evolution Group */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#F4F0E8]">
            <Cpu className="w-4 h-4 text-[#245BFF]" />
            <span className="font-bold tracking-wider uppercase">BACK-END & LINGUAGENS // EM EVOLUÇÃO CONTÍNUA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.backendExpansion.map((tech, idx) => (
              <div
                key={tech.name}
                ref={(el) => (cardsRef.current[idx + 4] = el)}
                className="p-5 sm:p-6 rounded-2xl bg-[#1A1A1A] border border-[#F4F0E8]/10 hover:border-[#F4F0E8]/25 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[#A39F97] uppercase">
                      {tech.category}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F0E8] tracking-tight mb-2">
                    {tech.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#A39F97] leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] font-mono text-[10px] text-[#6E6B65] uppercase">
                  ESTUDO & DESENVOLVIMENTO
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Interface Experience Blocks */}
        <div className="space-y-6 pt-4">
          <div className="font-mono text-xs text-[#A39F97] uppercase tracking-wider">
            TIPOS DE INTERFACES JÁ CONSTRUÍDAS NA PRÁTICA:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsData.interfaceSpecialties.map((spec) => (
              <div
                key={spec.index}
                className="p-5 rounded-xl bg-[#141414] border border-[#F4F0E8]/[0.07] hover:border-[#FF5A1F]/40 transition-colors space-y-2"
              >
                <div className="font-mono text-xs font-bold text-[#FF5A1F]">
                  [ {spec.index} ]
                </div>
                <div className="font-display font-bold text-sm text-[#F4F0E8]">
                  {spec.title}
                </div>
                <p className="font-sans text-xs text-[#A39F97] leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
