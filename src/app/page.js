'use client';

import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

const ThreeBox = dynamic(() => import('../components/ThreeBox'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ThreeBox />
    </main>
  );
}
