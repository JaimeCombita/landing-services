'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import { pageWrapper } from '../styles/layout/layout.css';
import TechStack from "@/components/TechStack";
import Workflow from "@/components/Workflow";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import CVModal from '@/components/CVModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <main className={pageWrapper}>
      <Navbar onContactClick={() => setShowModal(true)} />
      <Hero onContactClick={() => setShowModal(true)} />
      <About onCVClick={() => setShowCVModal(true)} />
      <Services />
      <Projects />
      <TechStack />
      <Workflow />
      <Cta onContactClick={() => setShowModal(true)} />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
