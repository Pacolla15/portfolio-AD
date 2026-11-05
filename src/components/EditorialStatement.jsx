import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Layers, Terminal, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EditorialStatement() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const lineRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline progressive reveal on scroll
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0.2, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 1,
          },
        }
      );

      // Line expand
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );

      // 3 Columns staggered reveal
      const cols = [col1Ref.current, col2Ref.current, col3Ref.current];
      gsap.fromTo(
        cols,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#F4F0E8]/[0.08]"
    >
      {/* Chapter header */}
      <div className="flex items-center justify-between pb-6 font-mono text-xs text-[#A39F97]">
        <span className="text-[#FF5A1F] font-bold tracking-widest uppercase">
          02 // SOBRE MIM & FORMAÇÃO
        </span>
        <span>VISÃO GERAL</span>
      </div>

      {/* Big Typographic Statement (Lando Norris Editorial Style) */}
      <div className="my-12">
        <h2
          ref={headlineRef}
          className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#F4F0E8] leading-[1.15] max-w-5xl"
        >
          Minha maior afinidade está no <span className="text-[#FF5A1F]">Front-end</span>, onde gosto de explorar interfaces, composições visuais e interações que facilitam o uso da web. Ao mesmo tempo, busco expandir minha base para o <span className="text-[#245BFF]">Back-end</span>, desenvolvendo uma visão contínua do software.
        </h2>
      </div>

      {/* Expanding Graphic Divider */}
      <div
        ref={lineRef}
        className="w-full h-[1px] bg-gradient-to-r from-[#FF5A1F] via-[#245BFF] to-[#873BFF] my-12 origin-left"
      />

      {/* 3 Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 01 */}
        <div ref={col1Ref} className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF5A1F] uppercase font-bold">
            <span>[ 01 ]</span>
            <span>AFINIDADE COM FRONT-END</span>
          </div>
          <p className="font-sans text-sm text-[#A39F97] leading-relaxed">
            Experiência prática na criação de interfaces responsivas utilizando HTML, CSS, JavaScript e React. Gosto de pensar na disposição lógica de elementos e na clareza que uma interface bem resolvida entrega a quem a utiliza.
          </p>
        </div>

        {/* Col 02 */}
        <div ref={col2Ref} className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#245BFF] uppercase font-bold">
            <span>[ 02 ]</span>
            <span>EXPANSÃO EM BACK-END</span>
          </div>
          <p className="font-sans text-sm text-[#A39F97] leading-relaxed">
            Interesse em compreender a estrutura completa de sistemas. Conhecimentos básicos de Python para lógica de programação e estudos com Node.js para criação de rotas, consumo de dados e serviços auxiliares.
          </p>
        </div>

        {/* Col 03 */}
        <div ref={col3Ref} className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#873BFF] uppercase font-bold">
            <span>[ 03 ]</span>
            <span>PRÁTICA EM INTERFACES</span>
          </div>
          <p className="font-sans text-sm text-[#A39F97] leading-relaxed">
            Desenvolvimento de projetos que envolvem dashboards analíticos, telas de configuração de sistema, formulários de autenticação e percursos de compra em e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
}
