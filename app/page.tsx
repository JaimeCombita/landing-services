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
import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={pageWrapper}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Workflow />
      <Cta onContactClick={() => setShowModal(true)} />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </main>
  );
}

