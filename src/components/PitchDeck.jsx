'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Check,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  Globe,
  Maximize2,
  Minimize2,
  FileCheck,
  Rocket,
  PhoneCall,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '9647700253469';

// ─── Payment Logos (Clean, Accurate Local Iraqi SVGs) ─────────────────────────
function FIBLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 160 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="First Iraqi Bank (FIB)"
      >
        <rect width="44" height="44" rx="10" fill="#004D2C" />
        {/* Modern FIB geometric bank emblem */}
        <path
          d="M22 8L34 15V29L22 36L10 29V15L22 8Z"
          stroke="#DFB248"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M22 14L29 18V26L22 30L15 26V18L22 14Z"
          fill="#DFB248"
          fillOpacity="0.2"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="22" r="3" fill="#DFB248" />
        {/* Wordmark */}
        <text
          x="54"
          y="24"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="0.05em"
        >
          FIB
        </text>
        <text
          x="54"
          y="35"
          fill="#DFB248"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="8"
          letterSpacing="0.16em"
        >
          FIRST IRAQI BANK
        </text>
      </svg>
    </div>
  );
}

function FastPayLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 160 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="FastPay"
      >
        <rect width="44" height="44" rx="10" fill="#1C1802" stroke="#FDB913" strokeWidth="1.2" />
        {/* FastPay yellow diamond icon */}
        <path
          d="M22 7L35 22L22 37L9 22L22 7Z"
          fill="#FDB913"
        />
        <path
          d="M20 14L28 22L20 30"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18L22 22L16 26"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* FastPay wordmark */}
        <text
          x="54"
          y="25"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="16"
          letterSpacing="-0.01em"
        >
          Fast<tspan fill="#FDB913">Pay</tspan>
        </text>
        <text
          x="54"
          y="35"
          fill="#94A3B8"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="8"
          letterSpacing="0.14em"
        >
          IRAQ MOBILE WALLET
        </text>
      </svg>
    </div>
  );
}

function ZainCashLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 165 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ZainCash"
      >
        <rect width="44" height="44" rx="10" fill="#1A0B26" stroke="#C026D3" strokeWidth="1.2" />
        {/* Zain swirl ring logo */}
        <circle cx="22" cy="22" r="13" stroke="url(#zainGrad)" strokeWidth="3" />
        <circle cx="22" cy="22" r="7" fill="#C026D3" />
        <circle cx="27" cy="17" r="2.5" fill="#38BDF8" />
        <defs>
          <linearGradient id="zainGrad" x1="9" y1="9" x2="35" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E879F9" />
            <stop offset="0.5" stopColor="#C026D3" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        {/* ZainCash wordmark */}
        <text
          x="54"
          y="24"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="16"
          letterSpacing="-0.01em"
        >
          zain<tspan fill="#E879F9">cash</tspan>
        </text>
        <text
          x="54"
          y="35"
          fill="#94A3B8"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="8"
          letterSpacing="0.14em"
        >
          زين كاش العراق
        </text>
      </svg>
    </div>
  );
}

// ─── Pitch Deck Main Component ────────────────────────────────────────────────
export default function PitchDeck({ onScheduleClick }) {
  // Language state: 'ku' (Kurdish Sorani) or 'en' (English)
  const [lang, setLang] = useState('ku');
  const isRTL = lang === 'ku';
  const isKurdish = lang === 'ku';

  // Active slide state (0 to 5 for 6 slides)
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 6;

  // Carousel state for Section 3 (Case studies)
  const [activeProofIndex, setActiveProofIndex] = useState(0);

  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Video fallback state
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Scroll container reference
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  // Toggle Language
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ku' ? 'en' : 'ku'));
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Jump to specific slide
  const scrollToSlide = useCallback((index) => {
    if (slideRefs.current[index]) {
      slideRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSlide(index);
    }
  }, []);

  const nextSlide = () => {
    if (activeSlide < totalSlides - 1) {
      scrollToSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      scrollToSlide(activeSlide - 1);
    }
  };

  // Keyboard navigation (Arrow keys / PageUp / PageDown / Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        if (activeSlide < totalSlides - 1) scrollToSlide(activeSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        if (activeSlide > 0) scrollToSlide(activeSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, scrollToSlide]);

  // Scroll listener & ScrollSnap detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Native Modern scrollsnapchange event
    const handleSnapChange = (e) => {
      if (e.snapTargetBlock) {
        const idx = slideRefs.current.indexOf(e.snapTargetBlock);
        if (idx !== -1) setActiveSlide(idx);
      }
    };

    if ('onscrollsnapchange' in HTMLElement.prototype) {
      container.addEventListener('scrollsnapchange', handleSnapChange);
    }

    // 2. Fallback: IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = slideRefs.current.indexOf(entry.target);
            if (idx !== -1) {
              setActiveSlide(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if ('onscrollsnapchange' in HTMLElement.prototype) {
        container.removeEventListener('scrollsnapchange', handleSnapChange);
      }
      observer.disconnect();
    };
  }, []);

  // WhatsApp CTA link helper with natural, high-intent prefilled text
  const getWhatsAppUrl = (customText) => {
    const defaultTextKu = `سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت گفتوگۆ بکەین بۆ دەستپێکردنی کار لەگەڵتان.`;
    const defaultTextEn = `Hello HBgrow, I reviewed your Executive Pitch Deck and would like to discuss scaling my brand with you.`;
    const text = customText || (isKurdish ? defaultTextKu : defaultTextEn);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Slide navigation titles
  const slideTitles = [
    { num: '01', en: 'The Reality Check', ku: 'دەستپێکی ستراتیژی' },
    { num: '02', en: 'Old Way vs New Engine', ku: 'کۆن دژی نوێ' },
    { num: '03', en: 'Documented Proof', ku: 'بەڵگە و ئەنجامەکان' },
    { num: '04', en: 'Investment Tiers', ku: 'پاکێجەکان و نرخ' },
    { num: '05', en: 'Budget Transparency', ku: 'بودجەی سپۆنسەر' },
    { num: '06', en: 'Launch & Trust', ku: 'دەستپێکردن و پارەدان' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`relative w-full h-[100dvh] text-white overflow-hidden select-none ${
        isKurdish ? 'font-sans' : 'font-sans'
      }`}
      style={{
        fontFamily: isKurdish
          ? "'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif"
          : "'Inter', 'Outfit', sans-serif",
        backgroundColor: '#020914',
        backgroundImage: `
          radial-gradient(ellipse 85% 45% at 50% 0%, rgba(223, 178, 72, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 95% 55% at 50% -5%, rgba(4, 34, 70, 0.85) 0%, rgba(3, 27, 57, 0.55) 45%, transparent 75%),
          radial-gradient(circle at 10% 40%, rgba(11, 50, 117, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 90% 65%, rgba(4, 34, 70, 0.35) 0%, transparent 50%),
          linear-gradient(180deg, #03142B 0%, #020A16 40%, #01040A 100%)
        `,
      }}
    >
      {/* ─── Ambient Glow Mesh & Dot Grid Matrix ──────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Warm 18K Royal Gold Zenith */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#DFB248]/12 blur-[140px]" />
        {/* Deep Sapphire Midnight Ambient */}
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-[#042246]/50 blur-[150px]" />
        {/* Subtle Electric Accent */}
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] rounded-full bg-[#0D6EFD]/18 blur-[160px]" />

        {/* Side & Edge Dot Grid Matrix from Branding Graphic */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, black 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, black 90%)',
          }}
        />

        {/* Subtle Luxury Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ─── Top Executive HUD / Navigation Bar ──────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5 backdrop-blur-xl bg-[#020B18]/85 border-b border-white/[0.08] transition-all">
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#DFB248] via-[#A87A1E] to-[#042246] p-[1px] shadow-[0_0_15px_rgba(223,178,72,0.3)]">
            <div className="w-full h-full bg-[#020B18] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-[12px] tracking-wider text-[#DFB248]">HB</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-sm text-white">HBgrow</span>
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#DFB248]/15 text-[#DFB248] font-semibold border border-[#DFB248]/30">
                Deck
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
              {isKurdish ? 'پلانی گەشەی ٢٠٢٦ بۆ خاوەنکارەکان' : 'Executive Pitch Briefing 2026'}
            </span>
          </div>
        </div>

        {/* Center: Slide indicator pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner text-xs">
          <span className="text-[#DFB248] font-bold">
            {slideTitles[activeSlide]?.num} / 0{totalSlides}
          </span>
          <span className="text-white/20">•</span>
          <span className="text-slate-300 font-medium">
            {isKurdish ? slideTitles[activeSlide]?.ku : slideTitles[activeSlide]?.en}
          </span>
        </div>

        {/* Right Actions: Controls & Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label="Switch Language"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all text-xs font-semibold text-white/90 active:scale-95 cursor-pointer"
          >
            <Globe size={13} className="text-[#DFB248]" />
            <span>{isKurdish ? 'English' : 'کوردی'}</span>
          </button>

          {/* Fullscreen Toggle (desktop) */}
          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all text-white/80 active:scale-95 cursor-pointer"
            title="Fullscreen presentation mode"
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>

          {/* Direct WhatsApp Callout */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#DFB248] to-[#F6E4B4] text-[#0a0a0c] text-xs font-bold shadow-[0_0_20px_rgba(223,178,72,0.3)] hover:shadow-[0_0_30px_rgba(223,178,72,0.5)] transition-all active:scale-95"
          >
            <WhatsAppIcon size={14} />
            <span className="hidden xs:inline">
              {isKurdish ? 'پەیوەندی ڕاستەوخۆ' : 'Consult Us'}
            </span>
          </a>
        </div>
      </header>

      {/* ─── Side Slide Rail (Desktop Navigation) ────────────────────────────── */}
      <nav
        aria-label="Slide Deck Navigation"
        className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 ${
          isRTL ? 'left-6' : 'right-6'
        }`}
      >
        {slideTitles.map((slide, idx) => {
          const isActive = activeSlide === idx;
          return (
            <button
              key={slide.num}
              onClick={() => scrollToSlide(idx)}
              aria-current={isActive ? 'true' : undefined}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none cursor-pointer"
            >
              {/* Tooltip on hover */}
              <span
                className={`absolute ${
                  isRTL ? 'left-8' : 'right-8'
                } px-2.5 py-1 rounded-md bg-[#0a0a0c]/90 border border-white/10 text-[11px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all shadow-xl`}
              >
                {slide.num} — {isKurdish ? slide.ku : slide.en}
              </span>

              {/* Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-6 bg-gradient-to-b from-[#DFB248] to-[#A87A1E] shadow-[0_0_12px_#DFB248]'
                    : 'w-2 h-2 bg-white/20 group-hover:bg-white/50'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* ─── Bottom Floating Stepper Bar ────────────────────────────────────── */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#020B18]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <button
          onClick={prevSlide}
          disabled={activeSlide === 0}
          aria-label="Previous Slide"
          className="p-1 rounded-full text-white/70 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? 'w-6 bg-[#DFB248]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={activeSlide === totalSlides - 1}
          aria-label="Next Slide"
          className="p-1 rounded-full text-white/70 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </footer>

      {/* ─── Vertical Scroll-Snapping Deck Container ─────────────────────────── */}
      <main
        ref={containerRef}
        className="w-full h-[100dvh] overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10"
        style={{
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* ==================================================================== */}
        {/* SLIDE 1: THE OPENING HOOK (MACRO TREND)                             */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[0] = el)}
          id="slide-1"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
        >
          {/* Background Visual: Moody Video with Poster Fallback */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/cinematic_hero.jpg"
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover scale-105 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-25' : 'opacity-15'
              }`}
            >
              <source src="/assets/hero-bg.webm" type="video/webm" />
              <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Cinematic dark vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-[#020914]/75 to-[#020914]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#020914_85%)]" />
          </div>

          {/* Slide Content Card */}
          <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
            {/* Macro Trend Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#DFB248]/30 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(223,178,72,0.15)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#DFB248] shadow-[0_0_8px_#DFB248]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#DFB248]">
                {isKurdish
                  ? 'یاساکانی ٢٠٢٦ • دۆخی ڕاستەقینەی بازاڕ'
                  : '2026 ALGORITHMIC SHIFT • STRATEGIC BRIEFING'}
              </span>
            </div>

            {/* Main Headline (Glassmorphic Container) */}
            <div className="backdrop-blur-xl bg-[#020B18]/60 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-full">
              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.25] text-white mb-6"
                style={{ fontFamily: isKurdish ? "'Sarchia Bokan', serif" : "'Outfit', sans-serif" }}
              >
                {isKurdish ? (
                  <>
                    براندەکەت شایەنی{' '}
                    <span className="bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#FFF6DD] bg-clip-text text-transparent underline decoration-[#DFB248]/40 underline-offset-8">
                      کڕیاری ڕاستەقینەیە
                    </span>
                    ، نەک تەنها بینەری بێ دەنگ.
                  </>
                ) : (
                  <>
                    Your brand deserves{' '}
                    <span className="bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#FFF6DD] bg-clip-text text-transparent underline decoration-[#DFB248]/40 underline-offset-8">
                      paying customers
                    </span>
                    , not just quiet viewers.
                  </>
                )}
              </h1>

              {/* Subtext - Natural, idiomatic copy */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
                {isKurdish
                  ? 'تەنها پۆستکردن و چاوەڕێکردنی بینەری خۆڕسک (ئۆرگانیک) بەسەرچوو. ئێمە سیستەمێک بۆ براندەکەت بنیاد دەنێین کە سەرنجی خەڵک لەسەر شاشەی مۆبایلەکانیانەوە دەگۆڕێت بۆ کڕیاری بەردەم کاوانتەرەکەت و پارەی نێو دەستت.'
                  : 'The days of relying on organic reach are over. Posting randomly gets zero results. We engineer client acquisition systems that turn mobile screen attention into foot traffic, booked appointments, and real revenue.'}
              </p>

              {/* Key Indicators / Micro Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto pt-6 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-[#DFB248]">0.8%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isKurdish ? 'گەیشتنی ئۆرگانیک (کۆتایی هات)' : 'Organic Reach (Dead)'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-white">4:5</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isKurdish ? 'ڤیدیۆی ڕیڵزی سەرنجڕاکێش' : 'High-Retention Reels'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isKurdish ? 'ئامانج: فرۆش و هاتنی کڕیار' : 'Focus: Real Direct Sales'}
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt to advance */}
            <button
              onClick={nextSlide}
              className="mt-6 flex items-center gap-2 text-xs text-slate-400 hover:text-[#DFB248] transition-colors group cursor-pointer"
            >
              <span>{isKurdish ? 'بۆ بینینی هەنگاوی دووەم دەست لێبدە' : 'Tap to inspect our client acquisition engine'}</span>
              <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 2: THE PROBLEM FRAME (OLD WAY VS NEW WAY)                     */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[1] = el)}
          id="slide-2"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
        >
          <div className="max-w-5xl w-full mx-auto">
            {/* Slide Header */}
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20">
                {isKurdish ? 'بەراوردی ڕاستەقینە • ڕێگای کۆن دژی شێوازی نوێ' : 'PARADIGM SHIFT • THE HARSH REALITY'}
              </span>
              <h2
                className="text-2xl sm:text-4xl font-extrabold text-white mt-3"
                style={{ fontFamily: isKurdish ? "'Sarchia Bokan', serif" : "'Outfit', sans-serif" }}
              >
                {isKurdish ? 'بۆچی زۆربەی بازاڕگەرییەکان پارە بەفیڕۆ دەدەن؟' : 'Why Traditional Marketing Bleeds Money (And What Actually Works)'}
              </h2>
            </div>

            {/* Two-Column Split Screen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
              {/* Left Column: The Old Way (Failing Traditional Model) */}
              <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-red-950/[0.08] border border-red-500/20 shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider border border-red-500/30">
                      {isKurdish ? 'ڕێگای کۆن (سووتاندنی سەرمایە)' : 'THE TRADITIONAL TRAP (FAILING)'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-red-200 mb-4 leading-snug">
                    {isKurdish
                      ? 'سەرفکردنی پارە بۆ دیزاینی هەڕەمەکی و بێ بەرهەم کە تەنانەت یەک کڕیاریش دروست ناکات.'
                      : 'Burning cash on freelancers for generic Canva designs that bring zero sales.'}
                  </h3>

                  <ul className="space-y-3 mt-6 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'پۆست و دیزاینی ئاسایی کە خەڵک بە چرکەیەک پەنجەی بەسەردا دەهێنن و سەیری ناکەن.'
                          : 'Static graphic templates scrolled past in 0.3 seconds without a second glance.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'لایک و بینەری بێ کەڵک، کە نە پارەی کرێی شوێنەکەت دەدات و نە مووچەی کارمەند.'
                          : 'Vanity likes and comments that do not pay staff salaries or office rent.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'داگرتنی دوگمەی Boost بە هەڕەمەکی و فەوتاندنی پارەی سپۆنسەر لە بۆشاییدا.'
                          : 'Blindly tapping "Boost Post" with zero conversion data, burning your ad budget.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'نازانیت کێ پەیوەندی کرد و کێ کڕی؛ بەبێ هیچ ژمارە مۆبایل و بەدواداچوونێک.'
                          : 'Zero conversion tracking, zero lead qualification, and zero accountability.'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-red-500/10 flex items-center justify-between text-xs text-red-300/80">
                  <span>{isKurdish ? 'ئەنجام بۆ کارەکەت:' : 'Financial Outcome:'}</span>
                  <span className="font-bold text-red-400">{isKurdish ? 'ماندووبوون بێ قازانج' : 'Negative ROI & Wasted Budget'}</span>
                </div>
              </div>

              {/* Right Column: The HBgrow Way (The 2026 Engine) */}
              <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-gradient-to-b from-[#DFB248]/12 via-[#042246]/40 to-[#020B18] border border-[#DFB248]/40 shadow-[0_0_50px_rgba(223,178,72,0.20)] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#DFB248]/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#DFB248]/20 text-[#DFB248] text-[11px] font-bold uppercase tracking-wider border border-[#DFB248]/40">
                      {isKurdish ? 'سیستەمی HBGROW بۆ ٢٠٢٦' : 'THE HBGROW 2026 ENGINE'}
                    </span>
                    <Sparkles size={14} className="text-[#DFB248] animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
                    {isKurdish
                      ? 'ڤیدیۆی ڕیڵزی سەرنجڕاکێش (٤:٥)، سپۆنسەری زیرەکی مێتا، و کێشانی کڕیار بۆ وەتسئەپ.'
                      : 'High-retention 4:5 Reels, algorithmic Meta Ads, and automated conversion funnels.'}
                  </h3>

                  <ul className="space-y-3 mt-6 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'ڤیدیۆی ڕیڵزی مۆبایل (٤:٥) کە لە یەکەم ٢ چرکەدا پەنجەی بینەر ڕادەگرێت و متمانە دروست دەکات.'
                          : '4:5 cinematic vertical reels crafted to stop thumbs in the first 2 seconds.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'ڕیکلامی وردی مێتا (Meta Ads) تەنها بۆ ئەو خەڵکانەی لە سلێمانی و هەولێر توانای کڕینیان هەیە.'
                          : 'Precision Meta Ads laser-targeted at high-income local buyers in your target cities.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'وەڵامدانەوەی خێرا و ئۆتۆماتیکی بۆ ئەوەی ڕاستەوخۆ ژمارە مۆبایل و ژوانی کڕیارەکان وەربگریت.'
                          : 'Automated DM & WhatsApp qualification capturing ready-to-buy phone numbers and bookings.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'شەفافییەتی تەواو: هەفتانە دەزانیت چەند کڕیارت بۆ هاتووە و هەر دینارێک چەندی گەڕاندووەتەوە.'
                          : 'Full transparency: clear telemetry showing your exact cost-per-lead and commercial return.'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFB248]/20 flex items-center justify-between text-xs text-slate-300">
                  <span>{isKurdish ? 'ئەنجام بۆ کارەکەت:' : 'Commercial Outcome:'}</span>
                  <span className="font-bold text-[#DFB248]">
                    {isKurdish ? 'کڕیاری بەردەوام و فرۆشی سەلمێنراو' : 'Predictable High-Velocity Revenue'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 3: THE PROOF (CASE STUDIES)                                   */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[2] = el)}
          id="slide-3"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
        >
          <div className="max-w-5xl w-full mx-auto">
            {/* Slide Header */}
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20">
                {isKurdish ? 'ئەنجامی ڕاستەقینە • بازاڕی ناوخۆی کوردستان' : 'DOCUMENTED PROOF • LOCAL WINS'}
              </span>
              <h2
                className="text-2xl sm:text-4xl font-extrabold text-white mt-3"
                style={{ fontFamily: isKurdish ? "'Sarchia Bokan', serif" : "'Outfit', sans-serif" }}
              >
                {isKurdish ? 'ئەنجامەکانمان لەسەر زەوی دەدوێن، نەک لەسەر قسە' : 'Documented Wins. Real Client Revenue.'}
              </h2>
            </div>

            {/* Case Studies Carousel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1: Local Clinics */}
              <div
                className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeProofIndex === 0
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(0)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
                      {isKurdish ? 'نۆرینگە و کلینیکی پزیشکی' : 'CLINICAL SECTOR'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Case #01</span>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#DFB248] tracking-tight">
                      $0.40
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'تێچووی هەر نامەیەکی وەتسئەپ' : 'Cost-Per-Message (CPM)'}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-white mb-3">
                    {isKurdish
                      ? 'دابەزاندنی تێچووی نامە بۆ $0.40 بۆ کلینیکەکان لە کاتێکدا لە بازاڕدا لە $2 زیاترە.'
                      : 'Reduced Cost-Per-Message to $0.40 for local clinics (down from $2.10+ market average).'}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isKurdish
                      ? 'بۆ کلینیکەکانی ددان و جوانکاری لە سلێمانی و هەولێر؛ بە ڕیکلامی ئامانجدار و ڤیدیۆی دەنگدار چارەخوازان ڕاستەوخۆ ژوانیان لە وەتسئەپ گرت بێ بەفیڕۆدانی بودجە.'
                      : 'Engineered hyper-targeted WhatsApp booking funnels with native medical voiceover for private dental & aesthetic clinics.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">{isKurdish ? '٨١٪ کەمکردنەوەی تێچوو' : '-81% Acquisition Cost'}</span>
                  <span>{isKurdish ? 'سلێمانی و هەولێر' : 'Sulaymaniyah & Erbil'}</span>
                </div>
              </div>

              {/* Card 2: 40+ Qualified Leads */}
              <div
                className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeProofIndex === 1
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(1)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
                      {isKurdish ? 'کۆمپانیا و خزمەتگوزارییەکان' : 'LEAD VELOCITY'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Case #02</span>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
                      40+ Leads
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'کڕیاری جددی لە ماوەی تەنها ٧ ڕۆژدا' : 'Verified Qualified Leads in 7 Days'}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-white mb-3">
                    {isKurdish
                      ? 'هێنانی زیاتر لە ٤٠ کڕیاری ئامادە و بەتوانا لە ماوەی ٧ ڕۆژدا.'
                      : 'Generated 40+ high-intent qualified leads in a 7-day sprint.'}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isKurdish
                      ? 'فلتەرکردنی ئەوانەی تەنها دەپرسن و نایکڕن؛ پێدانی ژمارە مۆبایل و داواکاری ڕاستەوخۆ بە تیمی فرۆشتن بۆ تەواوکردنی گرێبەستەکان.'
                      : 'Automated qualification eliminating window-shoppers, feeding verified buyer phone numbers directly to the client’s sales desk.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-blue-400 font-semibold">{isKurdish ? '١٠٠٪ بە ژمارە مۆبایل' : '100% Phone Verified'}</span>
                  <span>{isKurdish ? 'فرۆشی خێرا' : 'Direct Revenue'}</span>
                </div>
              </div>

              {/* Card 3: Second-Chance Video Retention */}
              <div
                className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeProofIndex === 2
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(2)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/30">
                      {isKurdish ? 'ئەلگۆریتمی ئینستاگرام' : 'VIRAL RETENTION'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Case #03</span>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F6E4B4] tracking-tight">
                      3.8x
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'مانەوە لەسەر ڤیدیۆکان (Watch-Time)' : 'Watch-Time Retention Multiplier'}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-white mb-3">
                    {isKurdish
                      ? 'مۆنتاژی ڤیدیۆی ٤:٥ بە مانەوەی بەرز کە ئەلگۆریتم ناچار دەکات بڵاوی بکاتەوە.'
                      : 'High-retention 4:5 video edits optimized for Instagram’s recommendation algorithm.'}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isKurdish
                      ? 'ڕاکێشانی سەرنجی بینەری کوردی لە یەکەم ساتدا بە دەنگ و ڕیتمی مۆنتاژی نوێ؛ هۆکاری سەرەکییە کە ڤیدیۆکانت بەردەوام دەگەنە خەڵکی نوێ.'
                      : 'Engineered hook velocity and native Kurdish voice pacing that force Instagram to recirculate content to thousands of fresh prospects.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-[#DFB248] font-semibold">{isKurdish ? '٨٢٪ سەیرکردنی تەواو' : '82% Completion Rate'}</span>
                  <span>{isKurdish ? 'فۆرماتی ٤:٥ مۆبایل' : '4:5 Aspect Ratio'}</span>
                </div>
              </div>
            </div>

            {/* Proof Trust Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center gap-3 text-xs text-slate-400 text-center">
              <ShieldCheck size={16} className="text-[#DFB248] shrink-0" />
              <span>
                {isKurdish
                  ? 'هەموو ئەم داتایانە لە ناو ئەکاونتە فەرمییەکانی Meta Ads بە بەڵگەوە تۆمارکراون و دەتوانیت بییانبینیت.'
                  : 'All performance metrics are directly audited and backed by live Meta Ad Manager telemetry.'}
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 4: THE INVESTMENT (PRICING TIERS - EXACT BRANDING)            */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[3] = el)}
          id="slide-4"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-y-auto"
        >
          <div className="max-w-4xl w-full mx-auto my-auto flex flex-col items-center">
            {/* Slide Header echoing Brand Poster */}
            <div className="text-center mb-5 sm:mb-7 flex flex-col items-center">
              <div
                style={{
                  fontFamily: "'Dancing Script', 'Caveat', cursive",
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  color: '#DFB248',
                  transform: 'rotate(-2.5deg)',
                  lineHeight: 1.1,
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 16px rgba(223, 178, 72, 0.45)',
                  marginBottom: '0.2rem',
                }}
              >
                Social Media Management
              </div>
              <h2
                style={{
                  fontFamily: "'Sarchia Bokan', serif",
                  fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  textShadow: '0 4px 24px rgba(0, 0, 0, 0.8)',
                }}
              >
                {isKurdish ? 'پاکێجەکانی سۆشیال میدیا' : 'Social Media Packages'}
              </h2>
            </div>

            {/* Pricing Cards Grid (matches poster layout: Growth left, Growth+ right) */}
            <div dir="ltr" className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
              {/* ─── CARD 1: Growth (Clean White Luxury Card) ─── */}
              <div
                dir={isRTL ? 'rtl' : 'ltr'}
                className="relative rounded-[32px] sm:rounded-[38px] p-6 sm:p-7 md:p-8 flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 40%, #E8EDF5 100%)',
                  color: '#021B39',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                }}
              >
                <div>
                  {/* Wordmark Titles */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 'clamp(2.6rem, 5vw, 3.6rem)',
                      fontWeight: 900,
                      color: '#021B39',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Growth
                  </div>
                  <div
                    style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                      color: '#021B39',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginTop: '0.25rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {isKurdish ? 'گەشەسەندن' : 'Standard Scale'}
                  </div>

                  {/* Feature Rows (divided by hairlines matching the image) */}
                  <div className="w-full">
                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/12 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-xl font-black">6</strong>
                      <span>{isKurdish ? 'ڤیدیۆ ڕیل (پۆستی ڤیدیۆ)' : 'Video Reels (High-Retention)'}</span>
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/12 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-xl font-black">6</strong>
                      <span>{isKurdish ? 'گرافیک دیزاین (پۆستی وێنە + سلاید)' : 'Graphic Designs (Posts + Slides)'}</span>
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'پلاندانان و پێداچوونەوە' : 'Strategic Planning & Review'}
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'دەنگخستنە سەر ڤیدیۆکان بە پێی پێویست' : 'Voiceover on Videos as Needed'}
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'پۆستکردن و کاپشن نووسین' : 'Posting & Copywriting'}
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'کەمپەینی سپۆنسەرکردن' : 'Sponsored Campaign Management'}
                    </div>
                  </div>
                </div>

                {/* Bottom Price Block & CTA */}
                <div className="pt-3 sm:pt-4 border-t border-[#021B39]/15 mt-3">
                  <div
                    style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(2.1rem, 4.2vw, 2.9rem)',
                      fontWeight: 800,
                      color: '#021B39',
                      lineHeight: 1,
                    }}
                  >
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900 }}>$225</span>{' '}
                    <span style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
                      {isKurdish ? '/مانگانە' : '/Month'}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                      color: 'rgba(2, 27, 57, 0.72)',
                      fontWeight: 600,
                      marginTop: '0.2rem',
                    }}
                  >
                    {isKurdish ? '338,000 دینار' : '338,000 IQD'}
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth ($225 / مانگانە) دەستپێبکەم بۆ براندەکەم.'
                        : 'Hello HBgrow, I would like to start with the Growth tier ($225/mo).'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#021B39] hover:bg-[#03264F] text-[#FFFFFF] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 mt-4 cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی مانگانە' : 'Select Monthly Growth'}</span>
                  </a>
                </div>
              </div>

              {/* ─── CARD 2: Growth+ (Radiant 18K Gold Luxury Card) ─── */}
              <div
                dir={isRTL ? 'rtl' : 'ltr'}
                className="relative rounded-[32px] sm:rounded-[38px] p-6 sm:p-7 md:p-8 flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(180deg, #F3BD28 0%, #E0AE1C 45%, #C7951B 100%)',
                  color: '#021B39',
                  boxShadow: '0 24px 60px rgba(223, 178, 72, 0.40), inset 0 1px 2px rgba(255, 255, 255, 0.55)',
                  border: '1px solid rgba(255, 246, 221, 0.50)',
                }}
              >
                <div>
                  {/* Wordmark Titles */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 'clamp(2.6rem, 5vw, 3.6rem)',
                      fontWeight: 900,
                      color: '#021B39',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Growth+
                  </div>
                  <div
                    style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                      color: '#021B39',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginTop: '0.25rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {isKurdish ? 'گەشەسەندن+' : 'Quarterly Scale+'}
                  </div>

                  {/* Feature Rows (divided by hairlines matching the image) */}
                  <div className="w-full">
                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/15 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-xl font-black">18</strong>
                      <span>{isKurdish ? 'ڤیدیۆ ڕیل (پۆستی ڤیدیۆ)' : 'Video Reels (High-Retention)'}</span>
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/15 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-xl font-black">18</strong>
                      <span>{isKurdish ? 'گرافیک دیزاین (پۆستی وێنە + سلاید)' : 'Graphic Designs (Posts + Slides)'}</span>
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'پلاندانان و پێداچوونەوە' : 'Strategic Planning & Review'}
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'دەنگخستنە سەر ڤیدیۆکان بە پێی پێویست' : 'Voiceover on Videos as Needed'}
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'پۆستکردن و کاپشن نووسین' : 'Posting & Copywriting'}
                    </div>

                    <div
                      className="py-2.5 sm:py-3 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'کەمپەینی سپۆنسەرکردن' : 'Sponsored Campaign Management'}
                    </div>
                  </div>
                </div>

                {/* Bottom Price Block & CTA */}
                <div className="pt-3 sm:pt-4 border-t border-[#021B39]/20 mt-3">
                  <div
                    style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(2.1rem, 4.2vw, 2.9rem)',
                      fontWeight: 800,
                      color: '#021B39',
                      lineHeight: 1,
                    }}
                  >
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900 }}>$640</span>{' '}
                    <span style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
                      {isKurdish ? '/سێ مانگ' : '/3 Months'}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Sarchia Bokan', serif",
                      fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                      color: 'rgba(2, 27, 57, 0.72)',
                      fontWeight: 600,
                      marginTop: '0.2rem',
                    }}
                  >
                    {isKurdish ? '960,000 دینار' : '960,000 IQD'}
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth+ ($640 / ٣ مانگە) دەستپێبکەم بۆ گەشەی بەردەوام.'
                        : 'Hello HBgrow, I would like to start with the Growth+ quarterly tier ($640/3mo).'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#021B39] hover:bg-[#03264F] text-[#DFB248] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 mt-4 cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی ٣ مانگە' : 'Select 3-Month Growth+'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 5: THE BOUNDARIES (CRUCIAL DISCLAIMER)                         */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[4] = el)}
          id="slide-5"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
        >
          <div className="max-w-3xl w-full mx-auto">
            {/* Slide Header */}
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                {isKurdish ? 'شەفافییەت و پاراستنی مافی کڕیار' : 'TRANSPARENCY & OPERATING BOUNDARIES'}
              </span>
              <h2
                className="text-2xl sm:text-4xl font-extrabold text-white mt-3"
                style={{ fontFamily: isKurdish ? "'Sarchia Bokan', serif" : "'Outfit', sans-serif" }}
              >
                {isKurdish ? 'خاڵێکی گرنگ دەربارەی بودجەی سپۆنسەر' : 'Crucial Policy: Ad Spend Separation'}
              </h2>
            </div>

            {/* High-Contrast Alert Box */}
            <div className="relative rounded-3xl p-6 sm:p-10 backdrop-blur-2xl bg-gradient-to-b from-[#031B39]/90 to-[#020B18] border border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.20)] overflow-hidden">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                  <AlertTriangle size={28} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {isKurdish ? 'شەفافییەتی تەواو لە نێوان ئێمە و ئێوەدا' : 'Official Agency Management Policy'}
                  </h3>

                  {/* Primary Mandated Disclaimer Copy - Natural & High Trust */}
                  <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-amber-200 text-sm sm:text-base leading-relaxed font-medium mb-6">
                    {isKurdish ? (
                      <>
                        ⚠️ <strong>ئاگاداری گرنگ:</strong> پاکێجەکانی سەرەوە تەنها تێچووی ماندووبوونی تیمەکەمانە (بەرهەمهێنانی ڤیدیۆ، دیزاین، نووسینی دەق و بەڕێوەبردنی کەمپەینەکان لەلایەن HBgrow). بودجەی سپۆنسەری مێتا (Meta Ad Spend) بە تەواوی جیاوازە، بڕەکەی لەلایەن خۆتەوە دیاری دەکرێت و بە شێوەیەکی شەفاف ڕاستەوخۆ دەچێتە لای مێتا.
                      </>
                    ) : (
                      <>
                        ⚠️ <strong>Note:</strong> The packages above cover HBgrow&apos;s management and creative production. The Sponsorship Budget (Meta Ad Spend) is completely separate, determined by the client, and paid directly to Meta.
                      </>
                    )}
                  </div>

                  {/* Three Pillars of Trust */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                    <div className="p-3 rounded-lg bg-white/[0.02]">
                      <div className="font-bold text-white mb-1">
                        {isKurdish ? '١. وەسڵی فەرمی مێتا' : '1. Direct Meta Invoicing'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {isKurdish
                          ? 'هیچ زیادەیەک ناخەینە سەر بودجەکەت؛ هەموو دینارێک بە وەسڵی فەرمی مێتا دەبینیت.'
                          : 'Zero hidden markups. 100% of ad spend is billed with official Meta receipts.'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02]">
                      <div className="font-bold text-white mb-1">
                        {isKurdish ? '٢. بڕیار لە دەستی خۆتە' : '2. Complete Budget Agility'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {isKurdish
                          ? 'خۆت بڕیار دەدەیت ڕۆژانە $5 سەرف بکەیت یان $50، هەر کات فرۆشت زیاد بوو زیاد دەکەیت.'
                          : 'You choose whether to spend $5/day or $50/day as leads scale.'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02]">
                      <div className="font-bold text-white mb-1">
                        {isKurdish ? '٣. ئەکاونتەکە هی خۆتە' : '3. 100% Data Ownership'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {isKurdish
                          ? 'پەیج، ئەکاونتی ڕیکلام و داتای هەموو کڕیارەکان وەک موڵکی هەمیشەیی خۆت دەمێننەوە.'
                          : 'Your ad account, pixels, and customer data remain your exclusive property forever.'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 6: NEXT STEPS & FRICTIONLESS ONBOARDING                        */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[5] = el)}
          id="slide-6"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
        >
          <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center">
            {/* Header */}
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20 mb-3">
              {isKurdish ? 'دەستپێکردنی خێرا • لە ماوەی ٧٢ کاتژمێردا' : 'FRICTIONLESS ONBOARDING • 72-HOUR SPRINT'}
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-white mb-2"
              style={{ fontFamily: isKurdish ? "'Sarchia Bokan', serif" : "'Outfit', sans-serif" }}
            >
              {isKurdish ? 'چۆن لە ٣ هەنگاوی ئاساندا دەستپێدەکەین؟' : 'Launch In 3 Seamless Steps'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8">
              {isKurdish
                ? 'بەبێ هیچ ڕێکارێکی ئاڵۆز؛ لە گفتوگۆی یەکەمەوە تا یەکەم فرۆشت بە تەنها چەند ڕۆژێک دەخایەنێت.'
                : 'Zero bureaucratic friction. From digital signoff to live ad campaigns in under 72 hours.'}
            </p>

            {/* Three Steps Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8 text-start">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-[#DFB248]/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#DFB248]/15 text-[#DFB248] flex items-center justify-center font-bold text-xs border border-[#DFB248]/30">
                    01
                  </div>
                  <FileCheck size={18} className="text-[#DFB248]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {isKurdish ? 'واژۆکردنی گرێبەست' : 'Sign Agreement'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isKurdish
                    ? 'گرێبەستێکی فەرمی دیجیتاڵی لە ٥ خولەکدا بۆ دڵنیابوون لە کوالێتی کار و پاراستنی مافی هەردوولامان.'
                    : '5-minute digital contract guaranteeing deliverables, IP ownership, and transparent terms.'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-blue-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/30">
                    02
                  </div>
                  <PhoneCall size={18} className="text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {isKurdish ? 'گفتوگۆی ستراتیژی' : 'Strategy Call'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isKurdish
                    ? 'پەیوەندییەکی کورت لەگەڵ تیمەکەمان بۆ تێگەیشتن لە باشترین بەرهەمەکانت و ناسینی کڕیاری ئامانج.'
                    : '45-minute tactical discovery deep-dive into your highest-margin offers and buyer psychology.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-emerald-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                    03
                  </div>
                  <Rocket size={18} className="text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {isKurdish ? 'دەستپێکردن و فرۆش' : 'Launch & Convert'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isKurdish
                    ? 'لە ماوەی ٤٨ بۆ ٧٢ کاتژمێر یەکەمین ڤیدیۆ و ڕیکلام دەکەونە کار و کڕیارەکان ڕوو لە وەتسئەپ دەکەن.'
                    : 'First batch of 4:5 reels produced and conversion funnels actively acquiring leads in 48-72h.'}
                </p>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center mb-8">
              <a
                href={getWhatsAppUrl(
                  isKurdish
                    ? 'سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت گرێبەست واژۆ بکەم و لەگەڵتان دەستپێبکەم.'
                    : 'Hello HBgrow, I finished reviewing the Executive Pitch Deck and I am ready to start scaling.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#DFB248] text-[#0a0a0c] text-sm sm:text-base font-extrabold shadow-[0_0_35px_rgba(223,178,72,0.4)] hover:shadow-[0_0_55px_rgba(223,178,72,0.65)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <WhatsAppIcon size={20} />
                <span>{isKurdish ? 'ئێستا لە وەتسئەپ دەستپێبکە' : 'Start Scaling Today'}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </a>

              {onScheduleClick && (
                <button
                  onClick={onScheduleClick}
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs sm:text-sm font-semibold text-white transition-all active:scale-95 cursor-pointer"
                >
                  {isKurdish ? 'دیاریکردنی کاتی پەیوەندی' : 'Schedule Call'}
                </button>
              )}
            </div>

            {/* Payment Trust Banner */}
            <div className="w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-md">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">
                {isKurdish ? 'شێوازی پارەدانی فەرمی و ئاسان لە ناوخۆی کوردستان و عێراق' : 'LOCAL IRAQI PAYMENT TRUST SIGNALS'}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-1">
                <FIBLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <FastPayLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <ZainCashLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
              </div>

              <div className="text-[10px] text-slate-500 text-center mt-3">
                {isKurdish
                  ? 'پارەدانی دەستبەجێ لە ڕێگەی بانک و جزدانە ئەلیکترۆنییە عێراقییەکان • بەبێ کێشەی حەواڵە • بە فاکتەری فەرمی بازرگانی'
                  : 'Instant local settlement • Zero currency conversion friction • Official corporate commercial invoicing'}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
