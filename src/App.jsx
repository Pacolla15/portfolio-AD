import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import EditorialStatement from './components/EditorialStatement';
import OnTrackProjects from './components/OnTrackProjects';
import TechDepthSection from './components/TechDepthSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#171717] text-[#F4F0E8] overflow-x-hidden selection:bg-[#FF5A1F] selection:text-[#171717]">
        {/* Subtle architectural grain */}
        <div className="subtle-grain" />

        {/* Minimal Navigation */}
        <HeaderNav />

        {/* Main Flow of Editorial & Progressive Scroll Sections */}
        <main className="relative z-10">
          {/* Section 01: Hero + 3D Kinetic Architectural Monolith */}
          <HeroSection />

          {/* Section 02: Editorial Statement & Overview */}
          <EditorialStatement />

          {/* Section 03: On Track Projects (Scroll-driven pinned progression) */}
          <OnTrackProjects />

          {/* Section 04: Volumetric Tech Matrix & Real Interfaces */}
          <TechDepthSection />

          {/* Section 05: Contact & Final Action */}
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
}
