import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      setIsFinished(true);
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              onComplete?.();
            }, 600);
          }, 300);
          return 100;
        }
        // Accelerate near the end
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#09090D] flex flex-col justify-between p-8 sm:p-14 select-none"
        >
          {/* Top header status */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#9CA3AF]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
              SYSTEM.INIT // VRM_V1
            </span>
            <span>CAMPINAS, SP [BR]</span>
          </div>

          {/* Center Brand typography */}
          <div className="text-center my-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block relative"
            >
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tighter text-white">
                VICTOR <span className="text-[#FF4D00]">RUIS</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base font-mono tracking-wider text-[#A1A1B5] uppercase">
                Creative Developer &middot; Digital Playground
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Telemetry */}
          <div className="space-y-3">
            <div className="flex justify-between items-end font-mono text-sm sm:text-base">
              <span className="text-[#A1A1B5] text-xs">
                {percent < 100 ? 'PREPARING ENVIRONMENT...' : 'READY TO EXPLORE'}
              </span>
              <span className="font-display font-bold text-2xl text-[#CCFF00]">
                {String(percent).padStart(3, '0')}%
              </span>
            </div>

            <div className="w-full h-[3px] bg-[#161622] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF4D00] via-[#7000FF] to-[#CCFF00]"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
