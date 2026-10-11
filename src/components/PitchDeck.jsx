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

  const isKurdish = lang === 'ku';

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
      // Don't intercept if user is inside an input/textarea
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

  // Scroll listener & ScrollSnap detection (Modern Web Guidance compliance)
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

  // WhatsApp CTA link helper
  const getWhatsAppUrl = (customText) => {
    const defaultTextKu = `سڵاو HBgrow، سەیری پرێزێنتەیشنی جێبەجێکاریم (Pitch Deck) کرد و دەمەوێت دەست پێبکەم.`;
    const defaultTextEn = `Hello HBgrow, I reviewed the Executive Pitch Deck and want to discuss scaling my brand.`;
    const text = customText || (isKurdish ? defaultTextKu : defaultTextEn);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Slide navigation titles
  const slideTitles = [
    { num: '01', en: 'The Opening Hook', ku: 'دەستپێکی ستراتیژی' },
    { num: '02', en: 'Old vs New Paradigm', ku: 'کۆن دژی نوێ' },
    { num: '03', en: 'Documented Proof', ku: 'بەڵگە و داتاکان' },
    { num: '04', en: 'The Investment', ku: 'پاکێجەکان و نرخ' },
    { num: '05', en: 'Operating Boundaries', ku: 'ئاگاداری سپۆنسەر' },
    { num: '06', en: 'Next Steps & Trust', ku: 'دەستپێکردن و پارەدان' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`relative w-full h-[100dvh] bg-[#0a0a0c] text-white overflow-hidden select-none ${
        isKurdish ? 'font-vazirmatn' : 'font-sans'
      }`}
      style={{
        fontFamily: isKurdish
          ? "'IBM Plex Sans Arabic', 'Vazirmatn', 'Cairo', 'Noto Kufi Arabic', sans-serif"
          : "'Inter', 'Outfit', sans-serif",
      }}
    >
      {/* ─── Ambient Glow Mesh ──────────────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Warm 18K Royal Gold Zenith */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#DFB248]/10 blur-[140px]" />
        {/* Deep Sapphire Midnight Ambient */}
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-[#042246]/40 blur-[150px]" />
        {/* Subtle Emerald / Electric Accent */}
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] rounded-full bg-[#0D6EFD]/15 blur-[160px]" />
        {/* Subtle Luxury Film Grain / Mesh lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ─── Top Executive HUD / Navigation Bar ──────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5 backdrop-blur-xl bg-[#0a0a0c]/70 border-b border-white/[0.08] transition-all">
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#DFB248] via-[#A87A1E] to-[#042246] p-[1px] shadow-[0_0_15px_rgba(223,178,72,0.3)]">
            <div className="w-full h-full bg-[#0a0a0c] rounded-[7px] flex items-center justify-center">
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
              {isKurdish ? 'دۆسیەی جێبەجێکاری ٢٠٢٦' : 'Executive Pitch Briefing 2026'}
            </span>
          </div>
        </div>

        {/* Center: Slide indicator pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner text-xs">
          <span className="text-[#DFB248] font-bold">
            {slideTitles[activeSlide]?.num} / {totalSlides < 10 ? `0${totalSlides}` : totalSlides}
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all text-xs font-semibold text-white/90 active:scale-95"
          >
            <Globe size={13} className="text-[#DFB248]" />
            <span>{isKurdish ? 'English' : 'کوردی'}</span>
          </button>

          {/* Fullscreen Toggle (desktop) */}
          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all text-white/80 active:scale-95"
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
              {isKurdish ? 'پەیوەندی' : 'Consult'}
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
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
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
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        <button
          onClick={prevSlide}
          disabled={activeSlide === 0}
          aria-label="Previous Slide"
          className="p-1 rounded-full text-white/70 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
        >
          {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
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
          className="p-1 rounded-full text-white/70 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/70 to-[#0a0a0c]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0a0a0c_85%)]" />
          </div>

          {/* Slide Content Card */}
          <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
            {/* Macro Trend Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#DFB248]/30 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(223,178,72,0.15)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#DFB248] shadow-[0_0_8px_#DFB248]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#DFB248]">
                {isKurdish
                  ? 'گۆڕانکاری ئەلگۆریتم ٢٠٢٦ • دۆسیەی جێبەجێکاری'
                  : '2026 ALGORITHMIC SHIFT • EXECUTIVE BRIEFING'}
              </span>
            </div>

            {/* Main Headline (Glassmorphic Container) */}
            <div className="backdrop-blur-xl bg-white/[0.025] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-full">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
                {isKurdish ? (
                  <>
                    براندەکەت شایەنی{' '}
                    <span className="bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#FFF6DD] bg-clip-text text-transparent underline decoration-[#DFB248]/40 underline-offset-8">
                      کڕیارە
                    </span>
                    ، نەک تەنها بینەر.
                  </>
                ) : (
                  <>
                    Your brand deserves{' '}
                    <span className="bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#FFF6DD] bg-clip-text text-transparent underline decoration-[#DFB248]/40 underline-offset-8">
                      customers
                    </span>
                    , not just viewers.
                  </>
                )}
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
                {isKurdish
                  ? 'ئێستا لە ئابوورییەکی ئەلگۆریتم-سەنتەر دەژین. بینەری خۆڕسک (ئۆرگانیک) مردووە. ئێمە سیستمێک بنیاد دەنێین کە سەرنجی خەڵک دەکاتە سەردانیکەری ڕاستەقینە و داهات.'
                  : 'We now live in an algorithm-first economy. Organic reach is dead. We build systems that turn attention into foot traffic and revenue.'}
              </p>

              {/* Key Indicators / Micro Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto pt-6 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-[#DFB248]">0.8%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isKurdish ? 'گەیشتنی ئۆرگانیک' : 'Organic Reach'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-white">4:5</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isKurdish ? 'ڤیدیۆی ئەلگۆریتمی' : 'Video Format'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isKurdish ? 'ڕێڕەوی فرۆش' : 'Conversion Funnels'}
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt to advance */}
            <button
              onClick={nextSlide}
              className="mt-6 flex items-center gap-2 text-xs text-slate-400 hover:text-[#DFB248] transition-colors group cursor-pointer"
            >
              <span>{isKurdish ? 'بۆ بینینی هەنگاوی دووەم دابەزە' : 'Scroll down to inspect methodology'}</span>
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
                {isKurdish ? 'بەراوردی ستراتیژی • گۆڕینی هاوکێشە' : 'PARADIGM SHIFT • THE 2026 REALITY'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                {isKurdish ? 'مۆدێلی کۆنی شکستخواردوو دژی بزوێنەری نوێ' : 'The Old Way vs. The 2026 Engine'}
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
                      {isKurdish ? 'مۆدێلی کۆن (شکستخواردوو)' : 'THE OLD WAY (FAILING)'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-red-200 mb-4 leading-snug">
                    {isKurdish
                      ? 'پارەدان بە فریلانسەرەکان بۆ دیزاینی گرافیکی هەڕەمەکی کە سفر فرۆش دروست دەکات.'
                      : 'Paying freelancers for random graphic designs that generate zero sales.'}
                  </h3>

                  <ul className="space-y-3 mt-6 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'پۆستی وێنەیی ستاتیک کە خەڵک لە کەمتر لە ٠.٤ چرکەدا تێی دەپەڕێنن'
                          : 'Static graphic templates scrolled past in 0.4 seconds without reading'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'لایک و بینەری بێ کەڵک (Vanity Metrics) کە مووچەی کارمەند نادات'
                          : 'Vanity likes and comments that never turn into cash in the register'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'داگرتنی دوگمەی Boost Post بەبێ داتا و فەوتاندنی بودجەی سپۆنسەر'
                          : 'Uncalibrated "Boost Post" button burning budget into algorithmic void'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'سفر ئاگاداری لە ئەنجام؛ کڕیار نازانێت بۆچی پارەی خەرج کرد'
                          : 'Zero conversion tracking, zero lead qualification, and zero accountability'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-red-500/10 flex items-center justify-between text-xs text-red-300/80">
                  <span>{isKurdish ? 'ئەنجامی دارایی:' : 'Financial Outcome:'}</span>
                  <span className="font-bold text-red-400">{isKurdish ? 'سفر کڕیاری دڵنیا' : 'Negative ROI & Stagnation'}</span>
                </div>
              </div>

              {/* Right Column: The HBgrow Way (The 2026 Engine) */}
              <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-gradient-to-b from-[#DFB248]/10 via-[#042246]/20 to-[#0a0a0c] border border-[#DFB248]/40 shadow-[0_0_50px_rgba(223,178,72,0.15)] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#DFB248]/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#DFB248]/20 text-[#DFB248] text-[11px] font-bold uppercase tracking-wider border border-[#DFB248]/40">
                      {isKurdish ? 'میتۆدۆلۆژیای HBGROW بۆ ٢٠٢٦' : 'THE HBGROW 2026 ENGINE'}
                    </span>
                    <Sparkles size={14} className="text-[#DFB248] animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
                    {isKurdish
                      ? 'ڤیدیۆی ڕیڵزی ٤:٥، ڕیکلامی ئەلگۆریتمی مێتا، و سیستمە ئۆتۆماتیکییەکانی فرۆش.'
                      : '4:5 Video Reels, algorithmic Meta Ads, and automated conversion funnels.'}
                  </h3>

                  <ul className="space-y-3 mt-6 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'ڤیدیۆی سینەمایی ٤:٥ بە مانەوەی بەرز و گرتنی سەرنج لە یەکەم ٢ چرکەدا'
                          : 'High-retention 4:5 vertical reels capturing attention in the first 2 seconds'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'ڕیکلامی Meta Ads بە پێوەری وردی کڕیارانی بەتوانا لە سلێمانی و هەولێر و عێراق'
                          : 'Precision algorithmic Meta Ads targeting purchasing power across Kurdistan & Iraq'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'سیستمی ئۆتۆماتیکی نامە و وەتسئەپ بۆ گۆڕینی بینەر بۆ ژوان و پەیوەندی تەلەفۆنی'
                          : 'Automated DM & WhatsApp qualification capturing phone numbers and bookings'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>
                        {isKurdish
                          ? 'شەفافییەتی ١٠٠٪ لە داتاکان، خەرجی هەر نامەیەک، و بەدواداچوونی فرۆش'
                          : '100% transparent Cost-Per-Acquisition telemetry and commercial return'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFB248]/20 flex items-center justify-between text-xs text-slate-300">
                  <span>{isKurdish ? 'ئەنجامی بازرگانی:' : 'Commercial Outcome:'}</span>
                  <span className="font-bold text-[#DFB248]">
                    {isKurdish ? 'کڕیاری دڵنیا و فرۆشی بەردەوام' : 'Predictable High-Velocity Revenue'}
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
                {isKurdish ? 'بەڵگەی سەلمێنراو • بازاڕی ناوخۆ' : 'THE PROOF • DOCUMENTED RESULTS'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                {isKurdish ? 'ئەنجامی ڕاستەقینە بۆ براندەکانی کوردستان' : 'Verifiable Data. Real Local Results.'}
              </h2>
            </div>

            {/* Case Studies Carousel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1: Local Clinics */}
              <div
                className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between ${
                  activeProofIndex === 0
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(0)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
                      {isKurdish ? 'کلینیک و پزیشکی' : 'CLINICAL SECTOR'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Case #01</span>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#DFB248] tracking-tight">
                      $0.40
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'تێچووی هەر نامەیەک (Cost-Per-Message)' : 'Cost-Per-Message (CPM)'}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-white mb-3">
                    {isKurdish
                      ? 'کەمکردنەوەی تێچووی نامە بۆ $0.40 بۆ کلینیکە ناوخۆییەکان.'
                      : 'Reduced Cost-Per-Message to $0.40 for local clinics.'}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isKurdish
                      ? 'لە ڕێگەی کەمپەینی ڕاستەوخۆی وەتسئەپ و ستایلی متمانەپێکراوی دەنگ و ڕیڵز لە سلێمانی و هەولێر، لە تێکڕای $2.10 کەمکرایەوە.'
                      : 'Replaced broad ad waste with hyper-targeted direct-to-WhatsApp booking campaigns tailored for private dental & aesthetic practices.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">-81% Ad Cost</span>
                  <span>{isKurdish ? 'سلێمانی / هەولێر' : 'Sulaymaniyah & Erbil'}</span>
                </div>
              </div>

              {/* Card 2: 40+ Qualified Leads */}
              <div
                className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between ${
                  activeProofIndex === 1
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(1)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
                      {isKurdish ? 'خزمەتگوزاری و B2B' : 'LEAD VELOCITY'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Case #02</span>
                  </div>

                  {/* Highlight Metric */}
                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
                      40+ Leads
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'لە ماوەی تەنها ٧ ڕۆژدا' : 'In 7 Days Qualified Sprint'}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-white mb-3">
                    {isKurdish
                      ? 'دروستکردنی زیاتر لە ٤٠ کڕیاری شیاو لە ٧ ڕۆژدا.'
                      : 'Generated 40+ qualified leads in 7 days.'}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isKurdish
                      ? 'فلتەرکردنی بینەری بێ پارە و بەستنەوەی کڕیارە ڕاستەقینەکان بە تەلەفۆن و ناوی تەواو ڕاستەوخۆ بە بەشی فرۆشی کڕیارەوە.'
                      : 'Automated DM qualification pipelines filtering out casual browsers and routing high-net-worth prospects straight to sales reps.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-blue-400 font-semibold">100% Phone Verified</span>
                  <span>{isKurdish ? 'فرۆشی ڕاستەوخۆ' : 'Direct Booking'}</span>
                </div>
              </div>

              {/* Card 3: Second-Chance Video Retention */}
              <div
                className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between ${
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
                      {isKurdish ? 'مانەوە لەسەر ڤیدیۆ (Retention)' : 'Watch-Time Retention Multiplier'}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-white mb-3">
                    {isKurdish
                      ? 'مۆنتاژی ڤیدیۆی ڕیڵزی ٤:٥ بە مانەوەی بەرز بۆ ئەلگۆریتم.'
                      : 'High-retention 4:5 video edits optimized for "second-chance" algorithm.'}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isKurdish
                      ? 'ڕێکخستنی سەرنجی سەرەتایی لە کەمتر لە ٢ چرکە، دەنگی کوردی پیشەیی و دەقی ڕوون بۆ بەدەستهێنانی بەرزترین گەیشتنی ئەلگۆریتمی.'
                      : 'Engineered hook velocity and rhythmic pacing forcing Instagram’s recommendation algorithm to recirculate videos to high-intent audiences.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-[#DFB248] font-semibold">82% Completion Rate</span>
                  <span>{isKurdish ? 'فۆرماتی ٤:٥' : '4:5 Aspect Ratio'}</span>
                </div>
              </div>
            </div>

            {/* Proof Trust Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center gap-3 text-xs text-slate-400 text-center">
              <ShieldCheck size={16} className="text-[#DFB248] shrink-0" />
              <span>
                {isKurdish
                  ? 'هەموو داتاکان لە ناو ژمێریاری فەرمی Meta Ads Manager تۆمارکراون و پشتڕاستکراوەن.'
                  : 'All performance metrics are directly audited and backed by live Meta Ad Manager telemetry.'}
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 4: THE INVESTMENT (PRICING TIERS)                             */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[3] = el)}
          id="slide-4"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
        >
          <div className="max-w-4xl w-full mx-auto">
            {/* Slide Header */}
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20">
                {isKurdish ? 'وەبەرهێنانی بازرگانی • پاکێجەکان' : 'THE INVESTMENT • EXECUTIVE TIERS'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                {isKurdish ? 'پاکێجی گەشەکردن: مانگانە و سێ مانگە' : 'Growth Tiers Engineered For Scale'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
                {isKurdish
                  ? 'دەستپێکردن بە کەمترین تێچوو لەگەڵ پاکێجی مانگانە، یان گەشەی خێرا لەگەڵ سێ مانگە'
                  : 'Start seamlessly with our flexible monthly entry, or scale with maximum volume quarterly'}
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
              {/* Card 1: Growth (Monthly Tier) */}
              <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/[0.04] border border-[#DFB248]/50 shadow-[0_0_35px_rgba(223,178,72,0.15)] flex flex-col justify-between">
                {/* Popular Pill */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#DFB248] to-[#A87A1E] text-[#0a0a0c] text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                  {isKurdish ? 'کەمترین تێچووی دەستپێکردن • مانگانە' : 'MOST ACCESSIBLE • MONTHLY'}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Growth</h3>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#DFB248]/15 text-[#DFB248] font-semibold border border-[#DFB248]/30">
                      {isKurdish ? 'مانگانە' : 'Monthly'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6">
                    {isKurdish
                      ? 'گونجاوترین هەنگاو بۆ تاقیکردنەوەی سیستمی فرۆش بێ پابەندبوونی درێژخایەن.'
                      : 'Lowest barrier to entry. Test the conversion engine without long lock-in.'}
                  </p>

                  {/* Price */}
                  <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">$225</span>
                      <span className="text-xs text-slate-400">/ {isKurdish ? 'مانگانە' : 'Month'}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#DFB248] mt-1 font-mono">
                      ≈ 338,000 IQD
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#DFB248] shrink-0 mt-0.5" />
                      <span>
                        <strong>6 {isKurdish ? 'ڤیدیۆی ڕیڵز' : 'Video Reels'}</strong> (4:5 high-retention format)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#DFB248] shrink-0 mt-0.5" />
                      <span>
                        <strong>6 {isKurdish ? 'دیزاینی گرافیک' : 'Graphic Designs'}</strong> (brand-aligned assets)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#DFB248] shrink-0 mt-0.5" />
                      <span>{isKurdish ? 'دەنگ (Voiceover) بەپێی پێویست' : 'Voiceover as needed'}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#DFB248] shrink-0 mt-0.5" />
                      <span>{isKurdish ? 'بڵاوکردنەوە و نووسینی دەقی فرۆش (Copywriting)' : 'Posting & Copywriting'}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#DFB248] shrink-0 mt-0.5" />
                      <span>{isKurdish ? 'بەڕێوەبردنی کەمپەینی سپۆنسەرکراو (Meta Ads)' : 'Sponsored Campaign Management'}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth ($225 / مانگانە) دەستپێبکەم.'
                        : 'Hello HBgrow, I would like to start with the Growth tier ($225/mo).'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-[#DFB248] to-[#F6E4B4] text-[#0a0a0c] text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(223,178,72,0.25)] hover:shadow-[0_0_30px_rgba(223,178,72,0.4)] transition-all active:scale-95"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isKurdish ? 'هەڵبژاردنی پاکێجی مانگانە' : 'Select Monthly Growth'}</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Growth+ (3-Month Commitment) */}
              <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                {/* Savings Pill */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white/[0.08] border border-white/20 text-[#F6E4B4] text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md">
                  {isKurdish ? 'داشکاندن • پابەندبوونی ٣ مانگە' : 'SAVE $35 • HIGH-VOLUME COMMITMENT'}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Growth+</h3>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-400 font-semibold border border-blue-500/30">
                      {isKurdish ? '٣ مانگ' : '3 Months'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6">
                    {isKurdish
                      ? 'پابەندبوونی تەواو بە گەشەکردنی درێژخایەن و دروستکردنی باڵادەستی لە بازاڕدا.'
                      : 'High-volume scale for brands demanding dominant market presence.'}
                  </p>

                  {/* Price */}
                  <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">$640</span>
                      <span className="text-xs text-slate-400">/ {isKurdish ? '٣ مانگ' : '3 Months'}</span>
                    </div>
                    <div className="text-xs font-semibold text-blue-400 mt-1 font-mono">
                      ≈ 960,000 IQD
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>18 {isKurdish ? 'ڤیدیۆی ڕیڵز' : 'Video Reels'}</strong> (sustained algorithmic velocity)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>18 {isKurdish ? 'دیزاینی گرافیک' : 'Graphic Designs'}</strong> (cohesive branding)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{isKurdish ? 'دەنگ (Voiceover) بەپێی پێویست' : 'Voiceover as needed'}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{isKurdish ? 'بڵاوکردنەوە و نووسینی دەقی فرۆش (Copywriting)' : 'Posting & Copywriting'}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{isKurdish ? 'بەڕێوەبردنی کەمپەینی سپۆنسەرکراو (Meta Ads)' : 'Sponsored Campaign Management'}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth+ ($640 / ٣ مانگە) دەستپێبکەم.'
                        : 'Hello HBgrow, I would like to start with the Growth+ quarterly tier ($640/3mo).'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white text-xs sm:text-sm font-bold transition-all active:scale-95"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isKurdish ? 'هەڵبژاردنی پاکێجی ٣ مانگە' : 'Select 3-Month Growth+'}</span>
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
                {isKurdish ? 'شەفافییەت و پاراستنی سەرمایە' : 'TRANSPARENCY & OPERATING BOUNDARIES'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                {isKurdish ? 'ئاگاداری گرنگ دەربارەی بودجەی سپۆنسەر' : 'Crucial Policy: Ad Spend Separation'}
              </h2>
            </div>

            {/* High-Contrast Alert Box */}
            <div className="relative rounded-3xl p-6 sm:p-10 backdrop-blur-2xl bg-gradient-to-b from-[#031B39]/70 to-[#0a0a0c] border border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.15)] overflow-hidden">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
                  <AlertTriangle size={28} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {isKurdish ? 'یاسای فەرمی بەڕێوەبردنی کەمپەین' : 'Official Agency Management Policy'}
                  </h3>

                  {/* Primary Mandated Disclaimer Copy */}
                  <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-amber-200 text-sm sm:text-base leading-relaxed font-medium mb-6">
                    {isKurdish ? (
                      <>
                        ⚠️ <strong>تێبینی گرنگ:</strong> نرخەکانی سەرەوە تەنها تێچووی بەڕێوەبردن و بەرهەمهێنانی ناوەڕۆکی HBgrow دەگرێتەوە. بودجەی سپۆنسەر (Meta Ad Spend) بە تەواوی جیاوازە، لەلایەن کڕیارەوە دیاری دەکرێت و راستەوخۆ دەدرێت بە مێتا.
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
                        {isKurdish ? '١. وەسڵی فەرمی مێتا' : '1. Direct Meta Receipts'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {isKurdish
                          ? '١٠٠٪ی بودجەی سپۆنسەر دەچێتە سەر کارتی مێتا بەبێ هیچ قازانجێکی شاراوە.'
                          : 'Zero markups. 100% of your ad dollars are billed directly by Meta.'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02]">
                      <div className="font-bold text-white mb-1">
                        {isKurdish ? '٢. دەسەڵاتی تەواو' : '2. Flexible Budget'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {isKurdish
                          ? 'خۆتان بڕیار دەدەن ڕۆژانە چەند خەرج دەکەن بەپێی توانای فرۆشتان.'
                          : 'You choose whether to spend $5/day or $50/day as leads scale.'}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02]">
                      <div className="font-bold text-white mb-1">
                        {isKurdish ? '٣. خاوەندارێتی ئەکاونت' : '3. 100% Ownership'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {isKurdish
                          ? 'ئەکاونتی ڕیکلام و داتای هەموو کڕیارەکان بە ناوی خۆتانەوە دەمێنێتەوە.'
                          : 'Your ad account, audience pixels, and customer data remain yours forever.'}
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              {isKurdish ? 'دەستپێکردن لە ٣ هەنگاوی سادەدا' : 'Launch In 3 Seamless Steps'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8">
              {isKurdish
                ? 'بەبێ ئاڵۆزی و دواکەوتن؛ لە گرێبەستەوە بۆ یەکەمین فرۆش تەنها چەند ڕۆژێکی کەمە.'
                : 'Zero bureaucratic delays. From digital signoff to live ad campaigns in under 72 hours.'}
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
                    ? 'گرێبەستی دیجیتاڵی ٥ خولەکی بۆ گەرەنتی کردنی هەموو خزمەتگوزارییەکان و مافی کار.'
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
                  {isKurdish ? 'کۆبوونەوەی ستراتیژی' : 'Strategy Call'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isKurdish
                    ? 'کۆبوونەوەی ٤٥ خولەکی بۆ دەستنیشانکردنی کڕیاری ئامانج، ئۆفەر، و شێوازی ڤیدیۆکان.'
                    : '45-minute tactical deep-dive into your highest-margin offers and local buyer psychology.'}
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
                    ? 'دەستپێکردنی ڕیکلام و ڤیدیۆکان لە ماوەی ٤٨ بۆ ٧٢ کاتژمێردا. سیستم دەستبەکار دەبێت.'
                    : 'First batch of 4:5 reels produced and conversion funnels actively acquiring leads in 48-72h.'}
                </p>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center mb-8">
              <a
                href={getWhatsAppUrl(
                  isKurdish
                    ? 'سڵاو HBgrow، سەیری پرێزێنتەیشنی جێبەجێکاریم (Pitch Deck) کرد و دەمەوێت گرێبەست واژۆ بکەم و دەست پێبکەم.'
                    : 'Hello HBgrow, I finished reviewing the Executive Pitch Deck and I am ready to start scaling.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#DFB248] text-[#0a0a0c] text-sm sm:text-base font-extrabold shadow-[0_0_35px_rgba(223,178,72,0.4)] hover:shadow-[0_0_55px_rgba(223,178,72,0.65)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <WhatsAppIcon size={20} />
                <span>{isKurdish ? 'ئێستا دەست بە گەشە بکە' : 'Start Scaling Today'}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </a>

              {onScheduleClick && (
                <button
                  onClick={onScheduleClick}
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs sm:text-sm font-semibold text-white transition-all active:scale-95"
                >
                  {isKurdish ? 'دیاریکردنی کات' : 'Schedule Call'}
                </button>
              )}
            </div>

            {/* Payment Trust Banner */}
            <div className="w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-md">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">
                {isKurdish ? 'ڕێگاکانی پارەدانی فەرمی و متمانەپێکراو لە عێراق' : 'LOCAL IRAQI PAYMENT TRUST SIGNALS'}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-1">
                <FIBLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <FastPayLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <ZainCashLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
              </div>

              <div className="text-[10px] text-slate-500 text-center mt-3">
                {isKurdish
                  ? 'پارەدانی دەستبەجێ لە ڕێگەی بانک و جزدانە ئەلیکترۆنییە عێراقییەکان • بەبێ کێشەی حەواڵە • وەسڵی فەرمی بازرگانی'
                  : 'Instant local settlement • Zero currency conversion friction • Official corporate commercial invoicing'}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
