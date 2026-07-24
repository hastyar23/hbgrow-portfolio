import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSolution from './components/PainSolution';
import Portfolio from './components/Portfolio';
import DesignPortfolio from './components/DesignPortfolio';
import StatsBanner from './components/StatsBanner';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <PainSolution />
        <Portfolio />
        <DesignPortfolio />
        <StatsBanner />
        <Process />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
