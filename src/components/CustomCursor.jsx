import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has touch capability
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, [data-cursor-interactive], input, textarea, select');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor-text');
        if (customText) {
          setHoverText(customText);
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible, cursorX, cursorY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precise center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF4D00] shadow-[0_0_12px_#FF4D00]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Smooth outer follower ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? 'border-[#CCFF00] bg-[rgba(204,255,0,0.12)] backdrop-blur-[2px]'
            : 'border-[rgba(255,77,0,0.4)] bg-transparent'
        }`}
        animate={{
          width: isHovered ? (hoverText ? 80 : 56) : 34,
          height: isHovered ? (hoverText ? 80 : 56) : 34,
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {hoverText && (
          <span className="text-[10px] font-mono tracking-wider font-bold text-[#CCFF00] uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
