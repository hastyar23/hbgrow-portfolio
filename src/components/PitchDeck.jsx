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
  Plus,
  Minus,
  Camera,
  Video,
  Palette,
  Calculator,
  ExternalLink,
  Star,
  Layers,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '9647700253469';

// ─── Payment Logos (Accurate Local Iraqi SVGs) ────────────────────────────────
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
        <text
          x="54"
          y="24"
          fill="#FFFFFF"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
          fontWeight="700"
          fontSize="17"
          letterSpacing="0.05em"
        >
          FIB
        </text>
        <text
          x="54"
          y="35"
          fill="#DFB248"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
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
        <path d="M22 7L35 22L22 37L9 22L22 7Z" fill="#FDB913" />
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
        <text
          x="54"
          y="25"
          fill="#FFFFFF"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
          fontWeight="700"
          fontSize="16"
          letterSpacing="-0.01em"
        >
          Fast<tspan fill="#FDB913">Pay</tspan>
        </text>
        <text
          x="54"
          y="35"
          fill="#94A3B8"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
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

function QiCardLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 160 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Qi Card"
      >
        <rect width="44" height="44" rx="10" fill="#150608" stroke="#E51A24" strokeWidth="1.2" />
        <circle cx="22" cy="22" r="13" fill="#E51A24" />
        <path
          d="M17 16C15 18 15 26 17 28C19 30 25 30 27 28C29 26 29 18 27 16C25 14 19 14 17 16Z"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          fill="none"
        />
        <path d="M23 25L28 30" stroke="#FDB913" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="22" cy="22" r="3" fill="#FDB913" />
        <text
          x="54"
          y="24"
          fill="#FFFFFF"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
          fontWeight="700"
          fontSize="16"
          letterSpacing="0.02em"
        >
          Qi<tspan fill="#E51A24"> Card</tspan>
        </text>
        <text
          x="54"
          y="35"
          fill="#94A3B8"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
          fontWeight="600"
          fontSize="8"
          letterSpacing="0.12em"
        >
          کی کارت العراق
        </text>
      </svg>
    </div>
  );
}

function AsiaPayLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 160 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="AsiaPay"
      >
        <rect width="44" height="44" rx="10" fill="#1C0A2A" stroke="#772186" strokeWidth="1.2" />
        <circle cx="22" cy="22" r="13" fill="#772186" />
        <circle cx="22" cy="22" r="7" fill="#E40046" />
        <circle cx="22" cy="22" r="3" fill="#FFFFFF" />
        <text
          x="54"
          y="24"
          fill="#FFFFFF"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
          fontWeight="700"
          fontSize="16"
          letterSpacing="-0.01em"
        >
          Asia<tspan fill="#E40046">Pay</tspan>
        </text>
        <text
          x="54"
          y="35"
          fill="#94A3B8"
          fontFamily="'IBM Plex Sans Arabic', sans-serif"
          fontWeight="600"
          fontSize="8"
          letterSpacing="0.12em"
        >
          ئاسیا پەی • ASIACELL
        </text>
      </svg>
    </div>
  );
}

// Helper to format IQD currency numbers
function formatIQD(num) {
  return new Intl.NumberFormat('en-US').format(num);
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

  // Interactive Smart Calculator State (Slide 5)
  const [cameraSessions, setCameraSessions] = useState(0);
  const [videoEdits, setVideoEdits] = useState(4);
  const [graphicDesigns, setGraphicDesigns] = useState(4);

  // Live total calculation for Smart Calculator
  const totalCalculatorIQD =
    cameraSessions * 110000 + videoEdits * 30000 + graphicDesigns * 10000;

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

  // WhatsApp helper for the custom calculated plan
  const getCalculatorWhatsAppUrl = () => {
    const textKu = `سڵاو HBgrow، لە ڕێگەی ژمێرەری زیرەکەوە ئەم پلانە تایبەتەم دیاری کردووە:\n• وێنەگرتنی کامێرا: ${cameraSessions} سێشن\n• ئیدیتینگی ڤیدیۆ: ${videoEdits} ڤیدیۆ\n• گرافیک دیزاین: ${graphicDesigns} دیزاین\nکۆی گشتی خەمڵێندراو: ${formatIQD(totalCalculatorIQD)} دینار.\nدەمەوێت ئەم پلانە لەگەڵتان دەستپێبکەم.`;
    const textEn = `Hello HBgrow, I calculated my custom plan via the Interactive Smart Calculator:\n• Camera Videography: ${cameraSessions} session(s)\n• Video Editing: ${videoEdits} video(s)\n• Graphic Design: ${graphicDesigns} design(s)\nEstimated Total: ${formatIQD(totalCalculatorIQD)} IQD.\nI would like to proceed with this tailored plan.`;
    return getWhatsAppUrl(isKurdish ? textKu : textEn);
  };

  // Slide navigation titles
  const slideTitles = [
    { num: '01', en: 'Strategic Hook', ku: 'دەستپێکی ستراتیژی' },
    { num: '02', en: 'Old Way vs HBgrow', ku: 'کۆن دژی HBgrow' },
    { num: '03', en: 'Documented Proof', ku: 'بەڵگە و ئەنجامەکان' },
    { num: '04', en: 'Packages & Pricing', ku: 'پاکێجەکان و نرخ' },
    { num: '05', en: 'Smart Calculator', ku: 'ژمێرەری زیرەک' },
    { num: '06', en: 'Launch & Trust', ku: 'چۆن دەست پێدەکەین؟' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative w-full h-[100dvh] text-white overflow-hidden select-none"
      style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
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
              <span className="font-bold text-[12px] tracking-wider text-[#DFB248]">HB</span>
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
        {/* SLIDE 1: THE OPENING HOOK (EXACT VERBATIM COPY FROM PDF PAGE 1)     */}
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
            {/* Macro Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#DFB248]/30 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(223,178,72,0.15)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#DFB248] shadow-[0_0_8px_#DFB248]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#DFB248]">
                {isKurdish
                  ? 'ستراتیژی نوێی گەشە بۆ ٢٠٢٦'
                  : 'THE TRUE PATH TO BRAND GROWTH • 2026 STRATEGY'}
              </span>
            </div>

            {/* Main Headline (Glassmorphic Luxury Container) */}
            <div className="backdrop-blur-xl bg-[#020B18]/65 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.85)] w-full">
              <h1
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.3] text-white mb-6"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {isKurdish ? (
                  <>
                    ئێمە کار لەسەر هێنانی ڤیو لایکی زۆر ناکەین،{' '}
                    <span className="bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#FFF6DD] bg-clip-text text-transparent underline decoration-[#DFB248]/40 underline-offset-8">
                      ئێمە کار لەسەر هێنانی کڕیاری زیاتر دەکەین
                    </span>{' '}
                    بۆ بزنسەکەت له ڕێی سۆشیال میدیاکەتەوە.
                  </>
                ) : (
                  <>
                    We don&apos;t focus on chasing empty views and likes.{' '}
                    <span className="bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#FFF6DD] bg-clip-text text-transparent underline decoration-[#DFB248]/40 underline-offset-8">
                      We engineer systems that bring real paying customers
                    </span>{' '}
                    to your business through social media.
                  </>
                )}
              </h1>

              {/* Subtext - Verbatim copy from PDF Page 1 */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                {isKurdish
                  ? 'لەڕێی بەرهەمهێنانی ستراتیجی تایبەت و دیزاین و ڤیدیۆی تایبەت، وادەکەین پەیجی بزنسەکەت هەم ڕێک و پێک و پرۆفێشناڵ وەک براندێکی پێشکەوتوو دەربکەوێت، هەم بەکاریاندەهێنینەوە بۆ ڕاکێشانی کڕیاری زیاتر بۆ بزنسەکەت لە ڕێی سپۆنسەرکردنی تایبەتەوە.'
                  : 'Through tailored strategy, bespoke design, and high-retention video production, we elevate your business profile into a premium market-leading brand, and deploy targeted ad campaigns to consistently attract qualified customers.'}
              </p>

              {/* Key Indicators / Micro Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto pt-6 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-[#DFB248]">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    {isKurdish ? 'ئامانج: هێنانی کڕیار' : 'Focus: Real Customers'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-white">4:5</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    {isKurdish ? 'ڤیدیۆی ڕیڵزی مۆبایل' : 'High-Retention Reels'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">ROI+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">
                    {isKurdish ? 'قازانجی وەبەرهێنان' : 'Verified Ad Profit'}
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt to advance */}
            <button
              onClick={nextSlide}
              className="mt-6 flex items-center gap-2 text-xs text-slate-400 hover:text-[#DFB248] transition-colors group cursor-pointer"
            >
              <span className="font-medium">{isKurdish ? 'بۆ بینینی هەنگاوی دووەم دەست لێبدە' : 'Tap to inspect our growth engine'}</span>
              <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 2: OLD WAY VS HBGROW (EXACT VERBATIM COPY FROM PDF PAGES 1 & 2) */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[1] = el)}
          id="slide-2"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-y-auto"
        >
          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col">
            {/* Slide Header (Verbatim headline from PDF Page 1) */}
            <div className="text-center mb-5 sm:mb-7">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20">
                {isKurdish ? 'بەراوردی ڕاستەقینە • ڕێگای کۆن دژی سیستەمی گەشە' : 'PARADIGM SHIFT • THE REALITY'}
              </span>
              <h2
                className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 max-w-4xl mx-auto leading-snug"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {isKurdish
                  ? 'زۆربەی بزنسەکان پارە لە سۆشیال میدیا دەسووتێنن، نەک لەبەر ئەوەی بەرهەمەکەیان خراپە... بەڵکو چونکە بە سیستەمی کۆن و هەڵە کار دەکەن.'
                  : 'Most businesses burn money on social media—not because their product is bad, but because they operate on outdated, flawed systems.'}
              </h2>
            </div>

            {/* Two-Column Split Screen (PDF Page 2 bullets) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch mb-5">
              {/* Left Column: The Old Way (Failing Traditional Model) */}
              <div className="relative rounded-3xl p-5 sm:p-7 backdrop-blur-xl bg-red-950/[0.12] border border-red-500/25 shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-wider border border-red-500/30">
                      {isKurdish ? 'ڕێگای کۆن (سەرفکردنی بێسوود)' : 'THE OLD WAY (BURNING CASH)'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'دیزاینی وێنەی بێ گیان' : 'Lifeless Static Designs'}
                        </strong>
                        <span className="text-slate-400 text-xs">
                          {isKurdish
                            ? 'دیزاینی وێنەی ئاسایی کە لەناو سۆشیال میدیادا کەس نایبینێت و تێپەڕ دەبێت.'
                            : 'Standard static images scrolled past in seconds without catching any real attention.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'سپۆنسەری بێ ئامانج' : 'Aimless Boosting'}
                        </strong>
                        <span className="text-slate-400 text-xs">
                          {isKurdish
                            ? 'داگرتنی دوگمەی Boost Post بەبێ هیچ فەنەڵ و بە ئامانجگرتنێکی دروست.'
                            : 'Blindly clicking the Boost Post button with zero sales funnels or verified targeting.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'دڵخۆشبوون بە لایک' : 'Celebrating Vanity Likes'}
                        </strong>
                        <span className="text-slate-400 text-xs">
                          {isKurdish
                            ? 'سەیرکردنی لایک و ڤیو لە جیاتی ئەوەی سەرنج لەسەر هێنانی کڕیار و نامە بێت.'
                            : 'Focusing on empty likes and views instead of actual inbound buyer messages and paying clients.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                        <X size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'نەبوونی ڕێڕەوی فرۆشتن' : 'No Clear Sales Funnel'}
                        </strong>
                        <span className="text-slate-400 text-xs">
                          {isKurdish
                            ? 'کەس نازانێت چۆن بینەر دەبێت بە کڕیار و پارە بۆ بزنسەکەت دروست دەکات.'
                            : 'Zero conversion tracking—nobody knows how a casual viewer actually turns into real revenue.'}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 pt-3.5 border-t border-red-500/15 flex items-center justify-between text-xs text-red-300/80">
                  <span>{isKurdish ? 'ئەنجام بۆ بزنسەکەت:' : 'Financial Outcome:'}</span>
                  <span className="font-bold text-red-400">{isKurdish ? 'ماندووبوون بێ قازانج' : 'Negative ROI & Wasted Budget'}</span>
                </div>
              </div>

              {/* Right Column: The HBgrow Way (The 2026 Growth System) */}
              <div className="relative rounded-3xl p-5 sm:p-7 backdrop-blur-xl bg-gradient-to-b from-[#DFB248]/12 via-[#042246]/45 to-[#020B18] border border-[#DFB248]/45 shadow-[0_0_50px_rgba(223,178,72,0.22)] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#DFB248]/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#DFB248]/20 text-[#DFB248] text-[11px] font-bold uppercase tracking-wider border border-[#DFB248]/40">
                      {isKurdish ? 'سیستەمی گەشەی HBgrow' : 'THE HBGROW GROWTH SYSTEM'}
                    </span>
                    <Sparkles size={14} className="text-[#DFB248] animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'ڤیدیۆی کوالێتی بەرز' : 'High-Retention Video'}
                        </strong>
                        <span className="text-slate-300 text-xs">
                          {isKurdish
                            ? 'بەرهەمهێنانی ڤیدیۆ بە دەنگخستنەسەر (Voiceover) و سەرنجڕاکێشان لە ۳ چرکەی یەکەمدا.'
                            : 'Engineered video production with professional Kurdish voiceover and instant 3-second hooks.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'کەمپەینی داتامەبەست' : 'Data-Driven Meta Ads'}
                        </strong>
                        <span className="text-slate-300 text-xs">
                          {isKurdish
                            ? 'دانانی کەمپەینی ڕیکلامی ورد لە Meta بۆ بە ئامانجگرتنی ئەو کەسانەی ئامادەن بکڕن.'
                            : 'Laser-targeted Meta advertising campaigns zeroed in on local prospects ready to make purchases.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'فەنەڵی گۆڕینی بینەر بۆ کڕیار' : 'WhatsApp Conversion Funnels'}
                        </strong>
                        <span className="text-slate-300 text-xs">
                          {isKurdish
                            ? 'دروستکردنی سیستەمێک کە ڕاستەوخۆ بینەر دەباتە سەر کڕین و نامەناردن لە واتسئەپ.'
                            : 'Conversion pathways directing engaged viewers straight to direct inquiries on WhatsApp.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#DFB248]/20 text-[#DFB248] shrink-0 mt-0.5">
                        <Check size={13} />
                      </div>
                      <div>
                        <strong className="text-white block mb-0.5 font-bold">
                          {isKurdish ? 'ئامانجی ڕوون' : 'Crystal-Clear Commercial Goal'}
                        </strong>
                        <span className="text-slate-300 text-xs">
                          {isKurdish
                            ? 'هەموو کارەکانمان یەک ئامانجیان هەیە: زیادکردنی فرۆشتن و داهاتی بزنسەکەت.'
                            : 'Every single asset serves one paramount mission: increasing real revenue and market authority.'}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#DFB248]/20 flex items-center justify-between text-xs text-slate-300">
                  <span>{isKurdish ? 'ئەنجام بۆ بزنسەکەت:' : 'Commercial Outcome:'}</span>
                  <span className="font-bold text-[#DFB248]">
                    {isKurdish ? 'کڕیاری بەردەوام و فرۆشی سەلمێنراو' : 'Predictable High-Velocity Revenue'}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Verbatim Conclusion Banner (PDF Page 2) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#DFB248]/15 via-[#042246]/60 to-[#DFB248]/15 border border-[#DFB248]/35 text-center backdrop-blur-md shadow-lg">
              <p className="text-xs sm:text-sm text-amber-100 font-semibold leading-relaxed">
                {isKurdish
                  ? 'ئەگەر بەردەوام بیت لەسەر هەمان ڕێگای کۆن، هەمان ئەنجامی بێسوودت دەستدەکەوێتەوە. کاتی ئەوەیە سۆشیال میدیاکەت لە ئەرکێکی بێسوودەوە بکەیت بە باشترین سەرمایەی بزنسەکەت.'
                  : 'If you continue on the old road, you will keep getting zero return. It is time to turn your social media from a chore into your highest-performing business asset.'}
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 3: PROOF & RESULTS (EXACT VERBATIM COPY FROM PDF PAGES 3 & 4)   */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[2] = el)}
          id="slide-3"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-16 sm:py-20 overflow-y-auto"
        >
          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col">
            {/* Slide Header */}
            <div className="text-center mb-5 sm:mb-7">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20">
                {isKurdish ? 'بەڵگەی سەلمێنراو • داتا و ژمارەکان' : 'DOCUMENTED PROOF • DATA & RESULTS'}
              </span>
              <h2
                className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 leading-snug"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {isKurdish
                  ? 'ئێمە بەڵێنی بێ بنەما نادەین، بە ژمارە و داتا ئەنجامەکانت پیشان دەدەین.'
                  : 'We don’t make empty promises. We prove our work with verified numbers and live data.'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2 font-normal">
                {isKurdish
                  ? 'بینینی سەرکەوتنی کڕیارەکانمان باشترین بەڵگەیە بۆ ئەو گەشەیەی کە دەتوانین بۆ بزنسەکەی تۆیشی بکەین...'
                  : 'Our client track record is the strongest proof of the growth we deliver for your business...'}
              </p>
            </div>

            {/* 3 Proof Cards (PDF Pages 3 & 4) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {/* Card 1: مەکینەی هێنانی نامە و کڕیار */}
              <div
                className={`rounded-3xl p-5 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeProofIndex === 0
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(0)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
                      {isKurdish ? 'دەرفەتی فرۆشتن' : 'LEAD VELOCITY'}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Proof #01</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DFB248] tracking-tight">
                      {isKurdish ? '٦٠,٠٠٠+' : '60,000+'}
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'مەکینەی هێنانی نامە و کڕیار' : 'Customer Acquisition Machine'}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {isKurdish
                      ? 'لە ڕێگەی کەمپەینە پێشکەوتووەکانمانەوە ٦,٦٧٧ نامەی کڕیاری ڕاستەقینە بۆ یەکێک لە براندەکان دروستکراوە بە کەمترین تێچوو.'
                      : 'Generated 6,677 verified customer inquiries for a single client brand at ultra-low acquisition cost through Meta Ads.'}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-emerald-400 font-semibold">
                    {isKurdish ? '٦,٦٧٧ نامەی کڕیار' : '6,677 Direct Leads'}
                  </span>
                  <span>{isKurdish ? 'کڕیاری ڕاستەقینە' : 'Verified ROI'}</span>
                </div>
              </div>

              {/* Card 2: کۆنترۆڵکردنی سەرنجی بازاڕ */}
              <div
                className={`rounded-3xl p-5 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeProofIndex === 1
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(1)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
                      {isKurdish ? 'قۆرخکردنی سەرنج' : 'MARKET ATTENTION'}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Proof #02</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">
                      {isKurdish ? '٣٥ ملیۆن+' : '35M+'}
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'کۆنترۆڵکردنی سەرنجی بازاڕ' : 'Dominating Market Attention'}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {isKurdish
                      ? 'زیاتر لە ١٠٠٠ پارچە ناوەڕۆکی ڤیدیۆ و دیزاین کە ڕاستەوخۆ سەرنجی کڕیارانیان لە بازاڕدا قۆرخ کردووە.'
                      : 'Over 1,000 produced high-retention video reels and graphics capturing high-intent local customer attention.'}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-blue-400 font-semibold">
                    {isKurdish ? '١,٠٠٠+ ڤیدیۆ و دیزاین' : '1,000+ Creative Assets'}
                  </span>
                  <span>{isKurdish ? 'بینەری ئامانجدار' : 'Organic + Paid'}</span>
                </div>
              </div>

              {/* Card 3: بەرزترین ئاستی قازانج (High ROI) */}
              <div
                className={`rounded-3xl p-5 sm:p-7 backdrop-blur-xl bg-white/[0.035] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeProofIndex === 2
                    ? 'border-[#DFB248]/60 shadow-[0_0_35px_rgba(223,178,72,0.18)] bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveProofIndex(2)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/30">
                      {isKurdish ? 'قازانجی سەلمێنراو' : 'PROFIT MAXIMIZER'}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Proof #03</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#F6E4B4] tracking-tight">
                      $20,000+
                    </div>
                    <div className="text-xs text-slate-300 font-semibold mt-1">
                      {isKurdish ? 'بەرزترین ئاستی قازانج (High ROI)' : 'High ROI & Capital Efficiency'}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {isKurdish
                      ? 'تێچووی هێنانی یەک کڕیار گەیەندراوەتە کەمترین ئاست ($0.06 بۆ هەر نامەیەک) کە قازانجی ڕاستەقینە بۆ خاوەن بزنسەکە مسۆگەر دەکات.'
                      : 'Lowered cost-per-inquiry to as low as $0.06 per qualified lead, maximizing client margin and return on advertising spend.'}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-[#DFB248] font-semibold">
                    {isKurdish ? 'تێچوو: $0.06 نامە' : 'Cost/Lead: $0.06'}
                  </span>
                  <span>{isKurdish ? 'وەبەرهێنانی بەسوود' : 'Zero Ad Waste'}</span>
                </div>
              </div>
            </div>

            {/* Testimonial & Portfolio Link (PDF Page 4) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Testimonial Box */}
              <div className="md:col-span-2 p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-md flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#DFB248]/15 text-[#DFB248] shrink-0 mt-0.5">
                  <Star size={18} fill="#DFB248" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {isKurdish
                      ? '«پێشتر تەنها لایکمان دەهات، بەڵام لەگەڵ HBgrow ڕۆژانە نامەی کڕیاری ڕاستەقینەمان پێدەگات لە واتسئەپ و فرۆشمان بە تەواوی گۆڕاوە.»'
                      : '“We previously only got passive likes. With HBgrow, we receive genuine buyer inquiries on WhatsApp every single day, and our commercial revenue has completely transformed.”'}
                  </p>
                  <div className="text-[11px] text-[#DFB248] font-semibold mt-1.5">
                    {isKurdish ? '— خاوەنکار لە کەرتی بازرگانی و خزمەتگوزاری' : '— Business Client in Retail & Services'}
                  </div>
                </div>
              </div>

              {/* View Portfolio Button */}
              <div className="flex justify-center md:justify-end">
                <a
                  href="/#portfolio"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-[#DFB248]/40 hover:border-[#DFB248] text-white font-bold text-xs sm:text-sm transition-all shadow-md group cursor-pointer"
                >
                  <span>{isKurdish ? 'نموونەی کارەکانمان ببینە' : 'Explore Case Portfolio'}</span>
                  <ExternalLink size={15} className="text-[#DFB248] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 4: PACKAGES & PRICING (EXACT VERBATIM COPY FROM PDF PAGES 4-5) */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[3] = el)}
          id="slide-4"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-y-auto"
        >
          <div className="max-w-4xl w-full mx-auto my-auto flex flex-col items-center">
            {/* Slide Header */}
            <div className="text-center mb-5 sm:mb-6 flex flex-col items-center">
              <div
                style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
                  color: '#DFB248',
                  lineHeight: 1.2,
                  letterSpacing: '0.06em',
                  fontWeight: 700,
                  textShadow: '0 2px 16px rgba(223, 178, 72, 0.45)',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase',
                }}
              >
                Social Media Management
              </div>
              <h2
                style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  lineHeight: 1.35,
                  textShadow: '0 4px 24px rgba(0, 0, 0, 0.8)',
                  maxWidth: '750px',
                }}
              >
                {isKurdish
                  ? 'وەبەرهێنان لە سیستەمی فرۆشتندا، نەک خەرجییەکی بێسوود. سیستەمێک هەڵبژێرە کە گەشە بە بزنسەکەت دەدات.'
                  : 'Invest in a client acquisition engine, not dead expenses. Select the system built to scale your business.'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                {isKurdish ? 'نرخەکان ڕوون و شەفافن، بەبێ هیچ خەرجییەکی شاراوە.' : '100% transparent pricing with zero hidden markups.'}
              </p>
            </div>

            {/* Pricing Cards Grid (matches poster layout: Growth left, Growth+ right) */}
            <div dir="ltr" className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch mb-4">
              {/* ─── CARD 1: Growth (Clean White Luxury Card) ─── */}
              <div
                dir={isRTL ? 'rtl' : 'ltr'}
                className="relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 40%, #E8EDF5 100%)',
                  color: '#021B39',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(2.2rem, 4.2vw, 3rem)',
                      fontWeight: 800,
                      color: '#021B39',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Growth
                  </div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(1.3rem, 2.6vw, 1.75rem)',
                      color: '#021B39',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginTop: '0.2rem',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {isKurdish ? 'گەشەسەندن' : 'Standard Scale'}
                  </div>

                  {/* Feature Rows (divided by hairlines matching the PDF deliverables) */}
                  <div className="w-full">
                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/12 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-lg font-black">6</strong>
                      <span>{isKurdish ? 'ڤیدیۆ ڕیل (پۆستی ڤیدیۆی سەرنجڕاکێش)' : 'Video Reels (High-Retention)'}</span>
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/12 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-lg font-black">6</strong>
                      <span>{isKurdish ? 'گرافیک دیزاین (پۆستی وێنە + سلاید)' : 'Graphic Designs (Posts + Slides)'}</span>
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'پلاندانانی ستراتیجی ناوەڕۆک و نووسینی کاپشن' : 'Strategic Planning & Copywriting'}
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'دەنگخستنەسەر (Voiceover) بۆ ڤیدیۆکان' : 'Voiceover on Videos as Needed'}
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'بەڕێوەبردن و چاودێریکردنی کەمپەینی سپۆنسەر' : 'Meta Sponsored Ads Management'}
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/12"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'ڕاپۆرتی مانگانەی ئەنجامەکان و شیکاری' : 'Monthly Performance Analytics'}
                    </div>
                  </div>
                </div>

                {/* Bottom Price Block & CTA */}
                <div className="pt-3 border-t border-[#021B39]/15 mt-3">
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      fontWeight: 800,
                      color: '#021B39',
                      lineHeight: 1,
                    }}
                  >
                    <span style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontWeight: 800 }}>$225</span>{' '}
                    <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600 }}>
                      {isKurdish ? '/مانگانە' : '/Month'}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                      color: 'rgba(2, 27, 57, 0.72)',
                      fontWeight: 600,
                      marginTop: '0.15rem',
                    }}
                  >
                    {isKurdish ? 'نزیکەی 338,000 دینار' : '~338,000 IQD'}
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth ($225 / مانگانە) دەستپێبکەم بۆ براندەکەم.'
                        : 'Hello HBgrow, I would like to start with the Growth tier ($225/mo).'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#021B39] hover:bg-[#03264F] text-[#FFFFFF] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 mt-3.5 cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی مانگانە' : 'Select Monthly Growth'}</span>
                  </a>
                </div>
              </div>

              {/* ─── CARD 2: Growth+ (Radiant 18K Gold Luxury Card) ─── */}
              <div
                dir={isRTL ? 'rtl' : 'ltr'}
                className="relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between text-center transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(180deg, #F3BD28 0%, #E0AE1C 45%, #C7951B 100%)',
                  color: '#021B39',
                  boxShadow: '0 24px 60px rgba(223, 178, 72, 0.40), inset 0 1px 2px rgba(255, 255, 255, 0.55)',
                  border: '1px solid rgba(255, 246, 221, 0.50)',
                }}
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#021B39] text-[#DFB248] text-[11px] font-bold tracking-wider mb-1 shadow-sm">
                    {isKurdish ? '👑 باشترین هەڵبژاردە (سێ مانگ)' : '👑 BEST VALUE (3 MONTHS)'}
                  </div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(2.2rem, 4.2vw, 3rem)',
                      fontWeight: 800,
                      color: '#021B39',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Growth+
                  </div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(1.3rem, 2.6vw, 1.75rem)',
                      color: '#021B39',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginTop: '0.2rem',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {isKurdish ? 'گەشەسەندن+' : 'Quarterly Scale+'}
                  </div>

                  {/* Feature Rows (divided by hairlines matching PDF deliverables) */}
                  <div className="w-full">
                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/15 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-lg font-black">18</strong>
                      <span>{isKurdish ? 'ڤیدیۆ ڕیل (پۆستی ڤیدیۆی پێشکەوتوو بە دەنگ)' : 'Video Reels (Quarterly Batch)'}</span>
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/15 flex items-center justify-center gap-1.5"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                        color: '#021B39',
                      }}
                    >
                      <strong className="text-base sm:text-lg font-black">18</strong>
                      <span>{isKurdish ? 'گرافیک دیزاین (پۆستی وێنە + سلاید)' : 'Graphic Designs (Posts + Slides)'}</span>
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'ستراتیژی فرۆشتنی درێژخایەن و بەردەوام' : 'Continuous 90-Day Growth Strategy'}
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'داشکاندنی تایبەت (پاشەکەوتکردنی $35 لە ٣ مانگدا)' : 'Special Discount (Save $35 over 3 months)'}
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'دەنگخستنەسەر (Voiceover) و بەڕێوەبردنی کەمپەین' : 'Voiceover & Full Meta Ad Management'}
                    </div>

                    <div
                      className="py-2 sm:py-2.5 border-t border-[#021B39]/15"
                      style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                        color: '#021B39',
                        fontWeight: 600,
                      }}
                    >
                      {isKurdish ? 'ئەولەویەت لە خزمەتگوزاری و وەڵامدانەوە' : 'VIP Priority Account Execution'}
                    </div>
                  </div>
                </div>

                {/* Bottom Price Block & CTA */}
                <div className="pt-3 border-t border-[#021B39]/20 mt-3">
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      fontWeight: 800,
                      color: '#021B39',
                      lineHeight: 1,
                    }}
                  >
                    <span style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif", fontWeight: 800 }}>$640</span>{' '}
                    <span style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600 }}>
                      {isKurdish ? '/سێ مانگ' : '/3 Months'}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                      color: 'rgba(2, 27, 57, 0.72)',
                      fontWeight: 600,
                      marginTop: '0.15rem',
                    }}
                  >
                    {isKurdish ? '960,000 دینار (مانگانە $213 دەکەوێت)' : '~960,000 IQD ($213/mo)'}
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth+ ($640 / ٣ مانگە) دەستپێبکەم بۆ گەشەی بەردەوام.'
                        : 'Hello HBgrow, I would like to start with the Growth+ quarterly tier ($640/3mo).'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#021B39] hover:bg-[#03264F] text-[#DFB248] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 mt-3.5 cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی ٣ مانگە' : 'Select 3-Month Growth+'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Ad Spend Policy Disclaimer Note (PDF Page 5) */}
            <div className="w-full max-w-2xl p-3 sm:p-3.5 rounded-xl bg-amber-500/[0.08] border border-amber-500/25 text-center text-xs text-amber-200">
              <span className="font-bold text-[#DFB248]">
                {isKurdish ? 'تێبینی گرنگ: ' : 'Important Note: '}
              </span>
              <span>
                {isKurdish
                  ? 'بودجەی سپۆنسەر (ڕیکلام) لە ئەستۆی خاوەن بزنسەکەیە و بە تەواوی شەفافە؛ بڕەکەی لەلایەن خۆتەوە دیاری دەکرێت و بە وەسڵی فەرمی دەچێتە لای کۆمپانیای مێتا.'
                  : 'The ad spend budget is determined by the business owner and paid directly to Meta with official transparent invoicing.'}
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 5: INTERACTIVE SMART CALCULATOR (PDF PAGES 5 & 6)             */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[4] = el)}
          id="slide-5"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-y-auto"
        >
          <div className="max-w-4xl w-full mx-auto my-auto flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-5 sm:mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20">
                {isKurdish ? 'ژمێرەری زیرەکی HBgrow' : 'INTERACTIVE SMART BUDGET CALCULATOR'}
              </span>
              <h2
                className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 leading-snug"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {isKurdish
                  ? 'کۆنترۆڵی خەرجییەکانت بکە. تەنیا پارەی ئەو خزمەتگوزارییە بدە کە پێویستتە.'
                  : 'Take full control of your budget. Pay only for the exact services you need.'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2 font-normal">
                {isKurdish
                  ? 'ئەگەر پێویستت بە پاکێجی تەواوی مانگانە نییە، یان دەتەوێت خزمەتگوزاری زیاتر بۆ پاکێجەکەت زیاد بکەیت، بەم ژمێرەرە پاکێجی تایبەت بە خۆت دیاریبکە:'
                  : 'If you don’t need an all-inclusive monthly bundle, or want to customize specific production needs, configure your exact plan below:'}
              </p>
            </div>

            {/* Interactive Calculator Items Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Item 1: Camera Videography */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.035] border border-white/10 hover:border-[#DFB248]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#DFB248]/15 text-[#DFB248]">
                      <Camera size={20} />
                    </div>
                    <span className="text-xs text-[#DFB248] font-bold">110,000 IQD</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {isKurdish ? '📸 ڤیدیۆی پرۆفیشناڵ بە کامێرا' : 'Camera Videography'}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                    {isKurdish
                      ? 'سێشنێکی وێنەگرتنی پرۆفیشناڵ بە کامێرا کە لە ٣ بۆ ٤ ڤیدیۆ پێکدێت.'
                      : 'Professional on-location cinema shoot session producing 3 to 4 finished videos.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">
                    {isKurdish ? 'ژمارەی سێشن:' : 'Sessions:'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCameraSessions((prev) => Math.max(0, prev - 1))}
                      disabled={cameraSessions === 0}
                      className="w-7 h-7 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer"
                      aria-label="Decrease camera sessions"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-[#DFB248]">
                      {cameraSessions}
                    </span>
                    <button
                      onClick={() => setCameraSessions((prev) => prev + 1)}
                      className="w-7 h-7 rounded-lg bg-[#DFB248]/20 hover:bg-[#DFB248]/30 flex items-center justify-center text-[#DFB248] transition-all cursor-pointer"
                      aria-label="Increase camera sessions"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 2: Video Editing */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.035] border border-white/10 hover:border-[#DFB248]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400">
                      <Video size={20} />
                    </div>
                    <span className="text-xs text-blue-400 font-bold">30,000 IQD</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {isKurdish ? '🎬 مۆنتاژ و ئیدیتینگی ڤیدیۆ' : 'Professional Video Editing'}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                    {isKurdish
                      ? 'مۆنتاژی پێشکەوتوو بە دەنگخستنەسەر (Voiceover)، گرافیک و کاریگەری سەرنجڕاکێش.'
                      : 'High-retention reel edits with voiceover pacing, sound design, and text callouts.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">
                    {isKurdish ? 'ژمارەی ڤیدیۆ:' : 'Videos:'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setVideoEdits((prev) => Math.max(0, prev - 1))}
                      disabled={videoEdits === 0}
                      className="w-7 h-7 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer"
                      aria-label="Decrease video edits"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-blue-400">
                      {videoEdits}
                    </span>
                    <button
                      onClick={() => setVideoEdits((prev) => prev + 1)}
                      className="w-7 h-7 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 flex items-center justify-center text-blue-400 transition-all cursor-pointer"
                      aria-label="Increase video edits"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 3: Graphic Design */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.035] border border-white/10 hover:border-[#DFB248]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                      <Palette size={20} />
                    </div>
                    <span className="text-xs text-purple-400 font-bold">10,000 IQD</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {isKurdish ? '🎨 گرافیک دیزاینی پێشکەوتوو' : 'Graphic Design'}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                    {isKurdish
                      ? 'دیزاینی براندینگی پرۆفیشناڵ، وێنە و پۆستی سۆشیال میدیا و کارۆسێلی فرۆشیار.'
                      : 'Premium visual brand identity graphics, feed covers, and multi-slide carousels.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">
                    {isKurdish ? 'ژمارەی دیزاین:' : 'Designs:'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGraphicDesigns((prev) => Math.max(0, prev - 1))}
                      disabled={graphicDesigns === 0}
                      className="w-7 h-7 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer"
                      aria-label="Decrease graphic designs"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-purple-400">
                      {graphicDesigns}
                    </span>
                    <button
                      onClick={() => setGraphicDesigns((prev) => prev + 1)}
                      className="w-7 h-7 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 flex items-center justify-center text-purple-400 transition-all cursor-pointer"
                      aria-label="Increase graphic designs"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Total Box & Send Plan CTA (PDF Page 6) */}
            <div className="w-full p-6 sm:p-7 rounded-3xl backdrop-blur-2xl bg-gradient-to-r from-[#031B39]/90 via-[#042246]/70 to-[#031B39]/90 border border-[#DFB248]/40 shadow-[0_15px_45px_rgba(223,178,72,0.15)] flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="text-center md:text-start">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {isKurdish ? 'کۆی گشتی خەمڵێندراو' : 'ESTIMATED TOTAL INVESTMENT'}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-extrabold text-[#DFB248] tracking-tight mt-1"
                  style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
                >
                  {formatIQD(totalCalculatorIQD)}{' '}
                  <span className="text-base sm:text-xl font-medium text-white/90">
                    {isKurdish ? 'دیناری عێراقی' : 'IQD'}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {isKurdish
                    ? `${cameraSessions} وێنەگرتن • ${videoEdits} ئیدیت • ${graphicDesigns} دیزاین`
                    : `${cameraSessions} Shoot(s) • ${videoEdits} Edit(s) • ${graphicDesigns} Design(s)`}
                </div>
              </div>

              <a
                href={getCalculatorWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-2xl bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#DFB248] text-[#0a0a0c] font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(223,178,72,0.35)] hover:shadow-[0_0_45px_rgba(223,178,72,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>{isKurdish ? 'با دەست بە کارەکان بکەین' : 'Launch Custom Plan'}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 6: ONBOARDING & PAYMENT TRUST (PDF PAGES 7 & 8)                */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[5] = el)}
          id="slide-6"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-y-auto"
        >
          <div className="max-w-4xl w-full mx-auto my-auto text-center flex flex-col items-center">
            {/* Header */}
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DFB248] px-3 py-1 rounded-full bg-[#DFB248]/10 border border-[#DFB248]/20 mb-3">
              {isKurdish ? 'دەستپێکردن لە ٣ هەنگاوی سادەدا' : 'FRICTIONLESS ONBOARDING • 3 SIMPLE STEPS'}
            </span>
            <h2
              className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 leading-snug"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            >
              {isKurdish
                ? 'دەتەوێت براندەکەت قازانجی ڕاستەقینە بکات؟ دەستپێکردن لەگەڵماندا تەنیا ٣ هەنگاوی سادەیە.'
                : 'Ready for your brand to make real profit? Getting started takes only 3 simple steps.'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mb-7 font-normal leading-relaxed">
              {isKurdish
                ? 'سیستەمێکی کارکردنی بێ ئەرک. تۆ کاتت نییە سەرقاڵی وردەکارییەکان بیت، ئێمە هەموو شتێک بەڕێوەدەبەین تا تۆ سەرنجت لەسەر بەڕێوەبردنی بزنسەکەت بێت:'
                : 'Frictionless workflow. You don’t have time to get caught up in technicalities—we manage everything end-to-end so you stay focused on running your business:'}
            </p>

            {/* Three Steps Cards (PDF Page 7) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-7 text-start">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.035] border border-white/10 relative overflow-hidden group hover:border-[#DFB248]/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-[#DFB248]/15 text-[#DFB248] flex items-center justify-center font-bold text-xs border border-[#DFB248]/30">
                    01
                  </div>
                  <FileCheck size={18} className="text-[#DFB248]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {isKurdish ? 'دیاریکردنی کێشەکان' : 'Discovery & Audit'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {isKurdish
                    ? '١٥-٢٠ خولەک گفتوگۆ بۆ تێگەیشتن لە ئامانج و کێشەکانی پەیجەکەت و دەستنیشانکردنی دەرفەتەکان.'
                    : '15-20 minute tactical consultation to pinpoint roadblocks, profile target buyers, and identify quick-win sales angles.'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.035] border border-white/10 relative overflow-hidden group hover:border-blue-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/30">
                    02
                  </div>
                  <PhoneCall size={18} className="text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {isKurdish ? 'پلان و ستراتیژی' : 'Custom Strategy'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {isKurdish
                    ? 'لە ماوەی ٥ بۆ ٧ ڕۆژدا ستراتیژ، یەکەم ڤیدیۆ و دیزاینەکان بە تەواوی ئامادە دەبن بۆ دەستپێکردن.'
                    : 'Within 5 to 7 days, your brand roadmap, first video reels, and custom graphics are delivered ready for launch.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.035] border border-white/10 relative overflow-hidden group hover:border-emerald-400/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                    03
                  </div>
                  <Rocket size={18} className="text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {isKurdish ? 'جێبەجێکردن و قازانج' : 'Execution & Profit'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {isKurdish
                    ? 'دەستپێکردنی بڵاوکردنەوە و سپۆنسەری زیرەک، و پێشوازی لە نامە و کڕیارە نوێیەکانت بکە لە واتسئەپ.'
                    : 'Deploying high-converting ad distribution—welcome qualified new buyer messages and sales straight into WhatsApp.'}
                </p>
              </div>
            </div>

            {/* Final Action Callout Banner (PDF Page 8) */}
            <div className="w-full p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#DFB248]/15 via-[#042246]/60 to-[#DFB248]/15 border border-[#DFB248]/40 mb-6 backdrop-blur-md shadow-xl text-center">
              <h3 className="text-base sm:text-xl font-bold text-white mb-4">
                {isKurdish
                  ? 'ئامادەی بۆ گەشەکردنی حەقیقی؟ کاتی خۆت بە فیڕۆ مەدە لەگەڵ ڕێگا کۆنەکان. با هەر ئەمڕۆ ستراتیژییەکەت بۆ دابڕێژین.'
                  : 'Ready for real growth? Stop burning time on outdated methods. Let’s engineer your custom strategy today.'}
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
                <a
                  href={getWhatsAppUrl(
                    isKurdish
                      ? 'سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت کاتێک دیاریبکەین بۆ گفتوگۆکردن و دەستپێکردن.'
                      : 'Hello HBgrow, I finished reviewing the Executive Pitch Deck and want to schedule a strategy call to start.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#DFB248] via-[#F6E4B4] to-[#DFB248] text-[#0a0a0c] text-sm font-extrabold shadow-[0_0_30px_rgba(223,178,72,0.4)] hover:shadow-[0_0_50px_rgba(223,178,72,0.6)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <WhatsAppIcon size={18} />
                  <span>{isKurdish ? 'کاتێک دیاریبکە بۆ گفتوگۆکردن' : 'Schedule Strategy Chat'}</span>
                  {isRTL ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                </a>

                {onScheduleClick && (
                  <button
                    onClick={onScheduleClick}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs sm:text-sm font-semibold text-white transition-all active:scale-95 cursor-pointer"
                  >
                    {isKurdish ? 'دیاریکردنی کاتی پەیوەندی' : 'Schedule Call'}
                  </button>
                )}
              </div>
            </div>

            {/* Payment Trust Signals (PDF Page 8: FIB, FastPay, Qi card, Asia Pay) */}
            <div className="w-full max-w-3xl p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-md">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3 text-center">
                {isKurdish
                  ? 'پڕۆسەی پارەدانمان زۆر ئاسانە. دەتوانیت لە ڕێگەی هەژمارە بانکییە ناوخۆییەکانەوە مانگانە پارە بدەیت:'
                  : 'FRICTIONLESS LOCAL PAYMENT METHODS • SETTLE MONTHLY VIA YOUR PREFERRED LOCAL ACCOUNT:'}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 py-1">
                <FIBLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <FastPayLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <QiCardLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
                <AsiaPayLogo className="h-7 w-auto hover:opacity-100 opacity-90 transition-opacity" />
              </div>

              <div className="text-[10px] text-slate-400 text-center mt-3 font-medium">
                {isKurdish
                  ? 'پارەدانی دەستبەجێ لە ڕێگەی بانک و جزدانە ئەلیکترۆنییە عێراقییەکان • بەبێ کێشەی حەواڵە • بە فاکتەری فەرمی بازرگانی'
                  : 'Instant local settlement across Iraqi banking & mobile wallet networks • Official corporate invoicing'}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
