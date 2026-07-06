import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundParticles from "@/components/BackgroundParticles";
import ShashwatIntro from "@/components/sections/ShashwatIntro";
import BackendPhilosophy from "@/components/sections/BackendPhilosophy";
import TechnicalMastery from "@/components/sections/TechnicalMastery";
import CareerTrajectory from "@/components/sections/CareerTrajectory";
import SystemArchitectures from "@/components/sections/SystemArchitectures";
import AcademicGrounding from "@/components/sections/AcademicGrounding";
import ConnectionPortal from "@/components/sections/ConnectionPortal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090612] text-[#f3e8ff] overflow-x-hidden selection:bg-purple-600 selection:text-white font-sans">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10 flex flex-col gap-16 sm:gap-24 pb-12">
        <ShashwatIntro />
        <BackendPhilosophy />
        <TechnicalMastery />
        <CareerTrajectory />
        <SystemArchitectures />
        <AcademicGrounding />
        <ConnectionPortal />
      </main>
      <Footer />
    </div>
  );
}
