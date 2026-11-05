import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Layers, Terminal, Compass } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  // Mouse interaction for 3D kinetic sculpture
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotations for 3D depth
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const parallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-35, 35]);
  const parallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-35, 35]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top micro header / coordinates */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-xs text-[#9CA3AF]"
      >
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-[#FF4D00]/10 border border-[#FF4D00]/30 text-[#FF4D00] font-bold">
            01 // HOME
          </span>
          <span className="hidden sm:inline-block text-white/40">/</span>
          <span className="flex items-center gap-1.5 text-white/80">
            <Compass className="w-3.5 h-3.5 text-[#CCFF00]" />
            CAMPINAS &middot; SP &middot; BR
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-widest uppercase">
          <span className="hidden md:inline text-white/50">EXP_026 // DIGITAL PLAYGROUND</span>
          <span className="flex items-center gap-1.5 text-[#CCFF00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
            FRONT-END DISCOVERY
          </span>
        </div>
      </motion.div>

      {/* Main hero composition: Typography + 3D Interactive Sculpture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
        
        {/* Left Column: Big Impact Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          
          {/* Creative tag badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
              Creative Developer em formação
            </span>
          </motion.div>

          {/* Monumental Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-1"
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-white">
              VICTOR
            </h1>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF7A00] to-[#CCFF00]">
              RUIS MARQUES
            </h1>
          </motion.div>

          {/* Punchy Manifesto Phrase */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-[#E6E6EF] max-w-2xl leading-snug"
          >
            Construindo a tensão entre <span className="text-[#00E5FF] underline decoration-[#00E5FF]/40 underline-offset-4">lógica de código</span> e <span className="text-[#FF4D00]">sensibilidade visual</span> na web.
          </motion.p>

          {/* Short Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-base sm:text-lg text-[#9CA3AF] max-w-xl font-sans font-light leading-relaxed"
          >
            Explorando o universo do desenvolvimento web com paixão pela construção de interfaces interativas, dashboards limpos e fluxos digitais que respondem com personalidade a cada clique.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#works"
              className="px-7 py-3.5 rounded-full bg-[#FF4D00] hover:bg-[#FF6525] text-white font-mono text-sm font-bold tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(255,77,0,0.35)] hover:shadow-[0_15px_35px_rgba(255,77,0,0.5)] hover:-translate-y-0.5"
              data-cursor-interactive="true"
              data-cursor-text="VER OBRAS"
            >
              EXPLORAR PROJETOS
            </a>

            <a
              href="#about"
              className="px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] text-white font-mono text-sm font-medium tracking-wider transition-all duration-300 hover:-translate-y-0.5"
              data-cursor-interactive="true"
            >
              CONHECER TRAJETÓRIA
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Kinetic Geometric Sculpture (CSS 3D + Framer Motion) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] perspective-1000">
          
          {/* Main 3D Interactive Stage */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[320px] h-[360px] sm:w-[380px] sm:h-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            data-cursor-interactive="true"
            data-cursor-text="DRAG / TILT"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF4D00]/25 via-[#7000FF]/30 to-[#0055FF]/20 blur-3xl transform -translate-z-20 pointer-events-none" />

            {/* Layer 1: Isometric Wireframe Base Grid */}
            <motion.div
              style={{
                transform: 'translateZ(-40px) rotateX(60deg) rotateZ(-45deg)',
              }}
              className="absolute w-[280px] h-[280px] rounded-3xl border border-dashed border-white/20 bg-gradient-to-br from-white/[0.02] to-white/[0.06] shadow-2xl pointer-events-none"
            >
              <div className="w-full h-full grid grid-cols-4 grid-rows-4 divide-x divide-y divide-white/[0.05]" />
            </motion.div>

            {/* Layer 2: Main Floating Translucent Monolith Card */}
            <motion.div
              style={{
                transform: 'translateZ(20px)',
              }}
              className="relative w-[280px] sm:w-[310px] p-6 rounded-2xl bg-gradient-to-b from-[#141424]/90 to-[#090912]/95 border border-white/[0.15] backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
            >
              {/* Card top window buttons */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0055FF]" />
                </div>
                <span className="font-mono text-[10px] text-white/50 tracking-wider">
                  VRM.PLAYGROUND
                </span>
              </div>

              {/* Code snippet & architectural elements */}
              <div className="py-5 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[#CCFF00]">
                  <span>const developer = &#123;</span>
                  <span className="text-[10px] text-white/40">// 2026</span>
                </div>
                <div className="pl-4 text-white/70">
                  <span className="text-[#FF4D00]">name</span>: <span className="text-white">'Victor Ruis'</span>,
                </div>
                <div className="pl-4 text-white/70">
                  <span className="text-[#00E5FF]">focus</span>: <span className="text-white">'Front-end UI'</span>,
                </div>
                <div className="pl-4 text-white/70">
                  <span className="text-[#CCFF00]">curiosity</span>: <span className="text-white">Infinity</span>,
                </div>
                <div className="pl-4 text-white/70">
                  <span className="text-[#A78BFA]">learning</span>: <span className="text-white">['Node.js', 'Python']</span>,
                </div>
                <div className="text-[#CCFF00]">&#125;;</div>
              </div>

              {/* Card footer metrics */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px]">
                <span className="text-[#A1A1B5]">STATUS</span>
                <span className="text-[#CCFF00] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
                  EVOLVING EVERY DAY
                </span>
              </div>
            </motion.div>

            {/* Layer 3: Floating 3D Badge (Front-end Focus) */}
            <motion.div
              style={{
                x: parallaxX,
                y: parallaxY,
                transform: 'translateZ(70px)',
              }}
              className="absolute -top-4 -right-4 sm:-right-6 px-4 py-3 rounded-xl bg-[#0F0F1A]/90 border border-[#FF4D00]/40 backdrop-blur-md shadow-[0_10px_30px_rgba(255,77,0,0.25)] flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-[#FF4D00]/20 text-[#FF4D00]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#A1A1B5] uppercase">Maior Domínio</div>
                <div className="font-display font-bold text-xs text-white">FRONT-END EXPERT</div>
              </div>
            </motion.div>

            {/* Layer 4: Floating 3D Badge (Interactive Interfaces) */}
            <motion.div
              style={{
                x: useTransform(smoothMouseX, [-0.5, 0.5], [25, -25]),
                y: useTransform(smoothMouseY, [-0.5, 0.5], [25, -25]),
                transform: 'translateZ(90px)',
              }}
              className="absolute -bottom-6 -left-4 sm:-left-6 px-4 py-3 rounded-xl bg-[#0F0F1A]/90 border border-[#CCFF00]/40 backdrop-blur-md shadow-[0_10px_30px_rgba(204,255,0,0.15)] flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-[#CCFF00]/20 text-[#CCFF00]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#A1A1B5] uppercase">Afinidade Visual</div>
                <div className="font-display font-bold text-xs text-white">INTERACTIVE UI</div>
              </div>
            </motion.div>

            {/* Orbital Decorative Geometric Ring */}
            <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none animate-spin-slow" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Prompt & Telemetry Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="pt-6 border-t border-white/[0.08] flex items-center justify-between"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF]">
          <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
          <span>ROLAR PARA EXPLORAR</span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-2 font-mono text-xs text-white hover:text-[#CCFF00] transition-colors"
          data-cursor-interactive="true"
        >
          <span className="hidden sm:inline tracking-wider">SEÇÃO SEGUINTE // 02</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#CCFF00] transition-colors">
            <ArrowDown className="w-4 h-4 animate-bounce text-[#CCFF00]" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
