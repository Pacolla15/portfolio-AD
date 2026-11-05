import React from 'react';
import {
  BarChart3,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Activity,
  Layers,
  CheckCircle,
  Eye,
  Lock,
  Mail,
  CreditCard,
  Tag
} from 'lucide-react';

export default function ConceptualProjectMockup({ type, color, accentColor }) {
  if (type === 'dashboard') {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#0B0B14] border border-white/[0.1] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Conceptual watermark label */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.08] text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-white/70 tracking-wider">TCC // ANALYTICS DASHBOARD SYSTEM</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[#CCFF00] font-semibold border border-[#CCFF00]/20">
            ILUSTRAÇÃO CONCEITUAL
          </span>
        </div>

        {/* Dashboard wireframe contents */}
        <div className="relative z-10 grid grid-cols-12 gap-3 my-auto py-2">
          {/* Left mini sidebar */}
          <div className="col-span-3 hidden sm:flex flex-col gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="h-4 w-12 rounded bg-white/20 mb-2" />
            <div className="h-6 rounded bg-[#FF4D00]/20 border border-[#FF4D00]/40 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            </div>
            <div className="h-6 rounded bg-white/[0.03] flex items-center px-2" />
            <div className="h-6 rounded bg-white/[0.03] flex items-center px-2" />
          </div>

          {/* Right metrics area */}
          <div className="col-span-12 sm:col-span-9 space-y-3">
            {/* Top Stat widgets */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-[#A1A1B5]">DADOS</div>
                <div className="font-display font-bold text-sm sm:text-base text-white">99.8%</div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-4/5 h-full bg-[#FF4D00]" />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-[#A1A1B5]">TELAS</div>
                <div className="font-display font-bold text-sm sm:text-base text-[#CCFF00]">12 TELAS</div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-full h-full bg-[#CCFF00]" />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-[#A1A1B5]">STATUS</div>
                <div className="font-display font-bold text-sm sm:text-base text-[#00E5FF]">ATIVO</div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-2/3 h-full bg-[#00E5FF]" />
                </div>
              </div>
            </div>

            {/* Neon Bar graph representation */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mb-2">
                <span>FLUXO DE INFORMAÇÕES</span>
                <span className="text-[#FF4D00]">REAL-TIME PREVIEW</span>
              </div>
              <div className="flex items-end justify-between h-16 sm:h-20 gap-1.5 pt-2">
                {[40, 65, 30, 85, 55, 95, 70, 45, 80, 100, 60, 75].map((val, idx) => (
                  <div key={idx} className="flex-1 bg-white/5 rounded-t-sm flex items-end h-full">
                    <div
                      className="w-full rounded-t-sm transition-all duration-500 hover:brightness-125"
                      style={{
                        height: `${val}%`,
                        backgroundColor: idx % 3 === 0 ? '#FF4D00' : idx % 3 === 1 ? '#7000FF' : '#CCFF00',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info tag */}
        <div className="relative z-10 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
          <span>HIERARQUIA DE DADOS &middot; CONFIGURAÇÕES &middot; CSS MODULAR</span>
          <span className="text-white/60">HTML / CSS / JS / REACT</span>
        </div>
      </div>
    );
  }

  if (type === 'auth') {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#090B16] border border-white/[0.1] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.08] text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0055FF]" />
            <span className="text-white/70 tracking-wider">AUTH &middot; EXPERIMENTAL LOGIN FLOWS</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[#00F0FF] font-semibold border border-[#00F0FF]/20">
            ILUSTRAÇÃO CONCEITUAL
          </span>
        </div>

        {/* Auth form simulation */}
        <div className="relative z-10 max-w-[280px] sm:max-w-[320px] mx-auto w-full space-y-3 py-2">
          <div className="text-center space-y-1">
            <div className="w-8 h-8 mx-auto rounded-lg bg-[#0055FF]/20 border border-[#0055FF]/40 flex items-center justify-center text-[#00E5FF]">
              <Lock className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-sm text-white">PORTAL DE ACESSO</div>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] text-white/50">IDENTIFICADOR / E-MAIL</span>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-[#0055FF]/50 text-white">
                <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span className="text-white/90">usuario@dominio.com</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-white/50">
                <span>SENHA</span>
                <span className="text-[#00E5FF]">RECUPERAR?</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white">
                <span className="tracking-widest text-[#00E5FF]">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span>
                <Eye className="w-3.5 h-3.5 text-white/40" />
              </div>
            </div>

            <div className="pt-1">
              <div className="w-full py-2.5 rounded-lg bg-[#0055FF] text-white font-bold text-center text-xs tracking-wider shadow-[0_0_15px_rgba(0,85,255,0.4)]">
                AUTENTICAR ACESSO
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
          <span>FEEDBACKS DE ESTADO &middot; VALIDAÇÃO VISUAL &middot; ACESSIBILIDADE</span>
          <span className="text-[#00E5FF]">MICRO-INTERAÇÕES</span>
        </div>
      </div>
    );
  }

  // Default: E-commerce purchase flow
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl bg-[#110B18] border border-white/[0.1] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/[0.08] text-[10px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7000FF]" />
          <span className="text-white/70 tracking-wider">E-COMMERCE // PURCHASE INTERFACES</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[#FF4D00] font-semibold border border-[#FF4D00]/20">
          ILUSTRAÇÃO CONCEITUAL
        </span>
      </div>

      {/* Conceptual product card & checkout */}
      <div className="relative z-10 grid grid-cols-12 gap-3 my-auto py-2 items-center">
        {/* Product showcase 3D object */}
        <div className="col-span-5 flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#7000FF] via-[#FF4D00] to-[#CCFF00] p-[2px] transform rotate-6 shadow-xl">
            <div className="w-full h-full bg-[#09090D] rounded-[14px] flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
          </div>
          <span className="mt-2 font-mono text-[9px] text-white/60">PRODUCT_PREVIEW</span>
        </div>

        {/* Product details & checkout button */}
        <div className="col-span-7 space-y-2 font-mono">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#A1A1B5]">EDITION 001</span>
            <span className="text-[10px] text-[#CCFF00] font-bold">EM ESTOQUE</span>
          </div>

          <div className="font-display font-bold text-base sm:text-lg text-white">
            Digital Canvas Interface
          </div>

          <div className="flex items-center gap-1.5 py-1">
            <span className="w-3 h-3 rounded-full bg-[#FF4D00] border border-white/40" />
            <span className="w-3 h-3 rounded-full bg-[#7000FF]" />
            <span className="w-3 h-3 rounded-full bg-[#CCFF00]" />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="font-display font-black text-white text-sm sm:text-base">R$ 189,00</span>
            <div className="px-3 py-1.5 rounded-lg bg-[#FF4D00] text-white text-[11px] font-bold tracking-wider flex items-center gap-1">
              <CreditCard className="w-3 h-3" />
              <span>COMPRAR</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
        <span>ORGANIZAÇÃO DE PRODUTOS &middot; FLUXOS DE COMPRA &middot; GAVETA DE CARRINHO</span>
        <span className="text-[#FF4D00]">CATÁLOGO & CHECKOUT</span>
      </div>
    </div>
  );
}
