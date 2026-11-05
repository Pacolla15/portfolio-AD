import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Compass, ArrowDown, Code2, Cpu } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const card3DRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const descRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const card = card3DRef.current;
    if (!card) return;

    // Set initial 3D transform properties through GSAP to avoid React style conflicts
    gsap.set(card, {
      transformPerspective: 1000,
      transformStyle: 'preserve-3d',
      rotationY: 8,
      rotationX: -6,
    });

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          titleLine1Ref.current,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          titleLine2Ref.current,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          card,
          { opacity: 0, scale: 0.85, rotationY: 0, rotationX: 0 },
          { opacity: 1, scale: 1, rotationY: 8, rotationX: -6, duration: 1.2, ease: 'power2.out' },
          '-=0.7'
        );
    }, containerRef);

    // Mouse Tracking with Strict Clamp (Min and Max angles)
    const MAX_TILT_X = 18; // Maximum vertical tilt (+/- 18 degrees)
    const MAX_TILT_Y = 22; // Maximum horizontal tilt (+/- 22 degrees)

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;

      // Clamped angles
      const targetRotationY = Math.max(-MAX_TILT_Y, Math.min(MAX_TILT_Y, normX * MAX_TILT_Y));
      const targetRotationX = Math.max(-MAX_TILT_X, Math.min(MAX_TILT_X, -normY * MAX_TILT_X));

      gsap.to(card, {
        rotationY: targetRotationY,
        rotationX: targetRotationX,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      // Return gently to aesthetic rest angle
      gsap.to(card, {
        rotationY: 8,
        rotationX: -6,
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Meta Line (Lando Norris style) */}
      <div
        ref={metaRef}
        className="flex items-center justify-between pb-6 border-b border-[#F4F0E8]/[0.08] font-mono text-xs text-[#A39F97]"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
          <span className="text-[#F4F0E8] font-medium tracking-wider">
            PORTFÓLIO // 2026
          </span>
          <span className="text-[#6E6B65]">|</span>
          <span className="flex items-center gap-1.5 text-[#A39F97]">
            <Compass className="w-3.5 h-3.5 text-[#245BFF]" />
            CAMPINAS, SP — BRASIL
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px] tracking-widest uppercase">
          <span>DESENVOLVIMENTO DE INTERFACES</span>
          <span className="text-[#FF5A1F]">FRONT-END &middot; BACK-END</span>
        </div>
      </div>

      {/* Main Composition: Typography + 3D Interactive Plaque */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto py-12">
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-8 space-y-8 z-10">
          <div className="space-y-1">
            <div className="overflow-hidden py-1">
              <h1
                ref={titleLine1Ref}
                className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.25rem] tracking-tight leading-[0.92] text-[#F4F0E8]"
              >
                VICTOR
              </h1>
            </div>
            <div className="overflow-hidden py-1">
              <h1
                ref={titleLine2Ref}
                className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.25rem] tracking-tight leading-[0.92] text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FF5A1F] to-[#245BFF]"
              >
                RUIS MARQUES
              </h1>
            </div>
          </div>

          <div ref={descRef} className="space-y-6 max-w-xl">
            <p className="font-heading font-medium text-xl sm:text-2xl text-[#F4F0E8] leading-snug">
              Desenvolvedor em formação focado no desenvolvimento de interfaces digitais, sistemas web e constante evolução entre Front-end e Back-end.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#A39F97] leading-relaxed">
              Experiência prática na construção de dashboards, páginas de configuração, interfaces de autenticação e fluxos de compra, unindo organização visual a código estruturado.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#projetos"
                className="px-6 py-3 rounded-full bg-[#FF5A1F] text-[#171717] font-mono text-xs font-bold tracking-wider hover:bg-[#FF7340] transition-colors"
              >
                EXPLORAR PROJETOS
              </a>
              <a
                href="#sobre"
                className="px-6 py-3 rounded-full border border-[#F4F0E8]/20 text-[#F4F0E8] font-mono text-xs font-medium tracking-wider hover:border-[#FF5A1F] transition-colors"
              >
                SOBRE MINHA FORMAÇÃO
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Precise 3D Interactive Plaque that follows the mouse smoothly */}
        <div className="lg:col-span-4 flex items-center justify-center min-h-[380px] perspective-container">
          <div
            ref={card3DRef}
            className="relative w-[280px] sm:w-[320px] preserve-3d cursor-default select-none transition-shadow"
          >
            {/* Soft Ambient Depth Drop Shadow */}
            <div
              className="absolute inset-0 bg-[#FF5A1F]/10 rounded-3xl blur-3xl pointer-events-none"
              style={{ transform: 'translateZ(-40px)' }}
            />

            {/* Main Volumetric Plaque (Clean Solid Construction) */}
            <div
              className="relative rounded-3xl bg-gradient-to-b from-[#242424] via-[#1A1A1A] to-[#121212] border border-[#F4F0E8]/20 p-7 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.7)] flex flex-col justify-between space-y-6"
              style={{ transform: 'translateZ(15px)' }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F4F0E8]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
                  <span className="font-mono text-xs font-bold text-[#F4F0E8] tracking-wider uppercase">
                    VRM // ESTÚDIO
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#245BFF] font-semibold">
                  2026
                </span>
              </div>

              {/* Card Core Content with perfectly fitted typography */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="font-mono text-[11px] text-[#A39F97] uppercase tracking-wider">
                    ÁREA DE ATUAÇÃO
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F4F0E8] leading-tight break-words">
                    INTERFACES & SISTEMAS
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#A39F97] leading-relaxed">
                  Criação de páginas responsivas, organização visual de fluxos analíticos e interfaces de autenticação.
                </p>

                {/* Sub-badges with 3D elevation */}
                <div
                  className="grid grid-cols-2 gap-2 pt-1"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="p-2.5 rounded-xl bg-[#171717] border border-white/5 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
                    <span className="font-mono text-[11px] text-[#F4F0E8] truncate">Front-end UI</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#171717] border border-white/5 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#245BFF] shrink-0" />
                    <span className="font-mono text-[11px] text-[#F4F0E8] truncate">Back-end Dev</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#F4F0E8]/10 flex items-center justify-between font-mono text-[11px] text-[#A39F97]">
                <span>BASE // CAMPINAS — SP</span>
                <span className="text-[#FF5A1F] font-bold">ATIVO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Scroll Cue */}
      <div className="pt-6 border-t border-[#F4F0E8]/[0.08] flex items-center justify-between font-mono text-xs text-[#A39F97]">
        <div className="flex items-center gap-3">
          <span className="text-[#FF5A1F] font-bold">01 // HOME</span>
          <span className="hidden sm:inline-block text-[#6E6B65]">—</span>
          <span className="hidden sm:inline-block">ROLAGEM COM REVELAÇÃO PROGRESSIVA</span>
        </div>

        <a
          href="#sobre"
          className="group flex items-center gap-2 text-[#F4F0E8] hover:text-[#FF5A1F] transition-colors"
        >
          <span className="text-[11px] tracking-wider uppercase">DESCER</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-[#FF5A1F]" />
        </a>
      </div>
    </section>
  );
}
