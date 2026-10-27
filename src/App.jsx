import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSchedule } from './ScheduleContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSolution from './components/PainSolution';
import Portfolio from './components/Portfolio';
import DesignPortfolio from './components/DesignPortfolio';
import StatsBanner from './components/StatsBanner';
import Packages from './components/Packages';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import PitchDeck from './components/PitchDeck';

export default function App() {
  const { i18n } = useTranslation();
  const { openSchedule } = useSchedule();

  const [isPitchRoute, setIsPitchRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      return (
        path === '/pitch' ||
        path.startsWith('/pitch/') ||
        hash === '#pitch' ||
        search.includes('pitch')
      );
    }
    return false;
  });

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      setIsPitchRoute(
        path === '/pitch' ||
        path.startsWith('/pitch/') ||
        hash === '#pitch' ||
        search.includes('pitch')
      );
    };

    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  // Scroll reveal and dynamic language attributes
  useEffect(() => {
    if (isPitchRoute) {
      document.title = "HBgrow Executive Pitch Deck | 2026";
      return;
    }

    // Set language and direction on root HTML tag
    const lang = i18n.language || 'ku';
    const isRTL = lang.startsWith('ku') || lang.startsWith('ar') || lang.startsWith('ckb');
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

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
  }, [i18n.language, i18n.dir(), isPitchRoute]);

  if (isPitchRoute) {
    return <PitchDeck onScheduleClick={openSchedule} />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ position: 'relative', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        <Hero />
        <PainSolution />
        <Portfolio />
        <DesignPortfolio />
        <StatsBanner />
        <Testimonials />
        <Packages />
        <Process />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
