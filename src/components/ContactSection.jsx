import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, ArrowUp } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = '38581@raphaeldisanto.com.br';
  const githubUrl = 'https://github.com/Pacolla15';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contato"
      className="relative pt-28 pb-14 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#F4F0E8]/[0.08]"
    >
      {/* Chapter header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#F4F0E8]/[0.08] mb-16 font-mono text-xs text-[#A39F97]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
          <span className="text-[#FF5A1F] font-bold tracking-widest uppercase">
            05 // CANAL DE CONTATO
          </span>
        </div>
        <span>CAMPINAS, SÃO PAULO — BRASIL</span>
      </div>

      {/* Main Punchy Statement */}
      <div className="mb-16 max-w-4xl space-y-4">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#F4F0E8] tracking-tight leading-[0.98]">
          VAMOS CONVERSAR SOBRE{' '}
          <span className="text-[#FF5A1F]">NOVOS PROJETOS</span> E{' '}
          <span className="text-stroke-white">OPORTUNIDADES.</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#A39F97] leading-relaxed max-w-2xl">
          Aberto a oportunidades profissionais, colaboração no desenvolvimento de interfaces web e troca de experiências sobre Front-end e Back-end.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Email Direct Action Card */}
        <div className="p-8 rounded-3xl bg-[#1C1C1C] border border-[#F4F0E8]/10 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#A39F97]">
              <span>CONTATO DIRETO</span>
              <span className="text-[#FF5A1F]">E-MAIL</span>
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#F4F0E8] break-all">
              {email}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="flex-1 min-w-[140px] px-6 py-3.5 rounded-full bg-[#FF5A1F] text-[#171717] font-mono text-xs font-bold tracking-wider hover:bg-[#FF7340] flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>ENVIAR E-MAIL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-full border border-[#F4F0E8]/20 text-[#F4F0E8] hover:border-[#FF5A1F] font-mono text-xs font-medium tracking-wider flex items-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="text-[#FF5A1F]">COPIADO</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#A39F97]" />
                  <span>COPIAR</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* GitHub Direct Action Card */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-3xl bg-[#1A1A1A] border border-[#F4F0E8]/10 hover:border-[#F4F0E8]/30 transition-all flex flex-col justify-between space-y-6 shadow-xl"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#A39F97]">
              <span>CÓDIGO-FONTE & REPOSITÓRIOS</span>
              <span className="text-[#245BFF]">GITHUB</span>
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#F4F0E8] group-hover:text-[#245BFF] transition-colors">
              github.com/Pacolla15
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 font-mono text-xs text-[#A39F97] border-t border-white/[0.04]">
            <span className="flex items-center gap-2 text-[#F4F0E8]">
              <GithubIcon className="w-4 h-4" />
              <span>Acessar perfil no GitHub</span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#245BFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>

      {/* Clean Footer Bar */}
      <div className="pt-8 border-t border-[#F4F0E8]/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A39F97]">
        <div className="flex items-center gap-3">
          <span className="text-[#F4F0E8] font-bold">VICTOR RUIS MARQUES</span>
          <span className="text-[#6E6B65]">&middot;</span>
          <span>CAMPINAS, SP</span>
          <span className="text-[#6E6B65]">&middot;</span>
          <span>2026</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#F4F0E8] hover:text-[#FF5A1F] transition-colors p-2 rounded-lg"
          aria-label="Voltar ao início"
        >
          <span>VOLTAR AO INÍCIO</span>
          <ArrowUp className="w-4 h-4 text-[#FF5A1F]" />
        </button>
      </div>
    </section>
  );
}
