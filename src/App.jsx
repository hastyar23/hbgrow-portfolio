import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();

  // Scroll reveal and dynamic language attributes
  useEffect(() => {
    // Set language and direction on root HTML tag
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();

    // Update document title dynamically
    if (i18n.language.startsWith('ku') || i18n.language.startsWith('ar')) {
      document.title = "HBgrow Agency | ئەیجێنسی گەشەی سۆشیاڵ میدیا";
    } else {
      document.title = "HBgrow Agency | Global Social Media & Growth Marketing";
    }

    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [i18n.language, i18n.dir()]);

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
