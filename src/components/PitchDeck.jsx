'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Globe,
  Maximize2,
  Minimize2,
  Plus,
  Minus,
  Camera,
  Video,
  Palette,
  ExternalLink,
  Shield,
  Lock,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '9647700253469';

// ─── Deliberate 2026 Stealth Ease Curve ───────────────────────────────────────
const EASE_PRO = [0.16, 1, 0.3, 1];

// ─── Format IQD Currency Numbers ──────────────────────────────────────────────
function formatIQD(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

// ─── Fixed Cinematic SVG Grain Overlay ────────────────────────────────────────
function FilmGrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stealthNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stealthNoise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// ─── Acetate Glass Bento Card with Realtime Mouse Spotlight ───────────────────
function SpotlightCard({ children, className = '', ...props }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.04] bg-white/[0.02] backdrop-blur-3xl shadow-none transition-all duration-300 ${className}`}
      {...props}
    >
      {/* 2026 Stealth Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.05), transparent 45%)`,
        }}
      />
      {/* Hairline Edge Glow Accent */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          maskImage: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

// ─── Razor-Thin Wireframe CTA Button (Fills Champagne Gold on Hover) ───────────
function WireframeCTA({ href, onClick, children, className = '', isPrimary = false }) {
  const inner = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Muted Champagne Gold Fill Slide */}
      <span className="absolute inset-0 z-0 translate-y-full bg-[#D4AF37] transition-transform duration-[400ms] ease-out group-hover:translate-y-0" />
    </>
  );

  const baseClasses = `group relative overflow-hidden inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-xs font-semibold tracking-wide text-white transition-colors duration-[400ms] ease-out hover:border-[#D4AF37] hover:text-[#050505] shadow-none cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {inner}
    </button>
  );
}

// ─── Photorealistic macOS Dark-Mode Browser Window ────────────────────────────
function MacOSBrowserFrame({ title = 'Meta Ads Manager', url = 'business.facebook.com/adsmanager', children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-3xl shadow-none ${className}`}>
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.04] px-4 py-2.5 bg-white/[0.01]">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.04] text-[10px] text-zinc-500 font-mono">
          <Lock size={10} className="text-zinc-600" />
          <span>{url}</span>
        </div>
        <div className="w-8" />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

// ─── Photorealistic Titanium iPhone 15 Pro Bezel ──────────────────────────────
function TitaniumPhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative mx-auto w-[250px] sm:w-[275px] rounded-[48px] p-2.5 border-[2.5px] border-[#2C2B2A] bg-[#050505] shadow-none ${className}`}>
      {/* Titanium Edge Inner Chamfer */}
      <div className="absolute inset-0 rounded-[45px] border border-white/[0.08] pointer-events-none" />
      {/* Dynamic Island Pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 h-4.5 w-20 rounded-full bg-black border border-white/[0.08] flex items-center justify-between px-2">
        <div className="h-2 w-2 rounded-full bg-[#0a0a0c]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#031326]" />
      </div>
      {/* Screen Aspect */}
      <div className="relative overflow-hidden rounded-[38px] bg-[#09090b] aspect-[9/19] flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

// ─── Stealth Monochromatic Iraqi Payment Signals ──────────────────────────────
function StealthFIBLogo({ className = 'h-5 w-auto' }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="First Iraqi Bank">
        <rect width="44" height="44" rx="10" fill="#09090b" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M22 8L34 15V29L22 36L10 29V15L22 8Z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 14L29 18V26L22 30L15 26V18L22 14Z" fill="rgba(212,175,55,0.1)" stroke="#FFFFFF" strokeWidth="1.2" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16" letterSpacing="0.05em">
          FIB
        </text>
        <text x="54" y="35" fill="#8A8F98" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8" letterSpacing="0.16em">
          FIRST IRAQI BANK
        </text>
      </svg>
    </div>
  );
}

function StealthFastPayLogo({ className = 'h-5 w-auto' }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="FastPay">
        <rect width="44" height="44" rx="10" fill="#09090b" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M22 8L34 22L22 36L10 22L22 8Z" fill="#D4AF37" fillOpacity="0.85" />
        <path d="M20 15L27 22L20 29" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16">
          FastPay
        </text>
        <text x="54" y="35" fill="#8A8F98" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8" letterSpacing="0.14em">
          IRAQ MOBILE WALLET
        </text>
      </svg>
    </div>
  );
}

function StealthQiCardLogo({ className = 'h-5 w-auto' }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Qi Card">
        <rect width="44" height="44" rx="10" fill="#09090b" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx="22" cy="22" r="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M17 17C15 19 15 25 17 27C19 29 25 29 27 27C29 25 29 19 27 17C25 15 19 15 17 17Z" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        <circle cx="22" cy="22" r="3" fill="#D4AF37" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16">
          Qi Card
        </text>
        <text x="54" y="35" fill="#8A8F98" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8" letterSpacing="0.12em">
          کی کارت العراق
        </text>
      </svg>
    </div>
  );
}

function StealthAsiaPayLogo({ className = 'h-5 w-auto' }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="AsiaPay">
        <rect width="44" height="44" rx="10" fill="#09090b" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx="22" cy="22" r="11" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="5" fill="#FFFFFF" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16">
          AsiaPay
        </text>
        <text x="54" y="35" fill="#8A8F98" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8" letterSpacing="0.12em">
          ئاسیا پەی • ASIACELL
        </text>
      </svg>
    </div>
  );
}

// ─── Main Elite Pitch Deck Component ──────────────────────────────────────────
export default function PitchDeck({ onScheduleClick }) {
  // Language state
  const [lang, setLang] = useState('ku');
  const isRTL = lang === 'ku';
  const isKurdish = lang === 'ku';

  // Active slide state (0 to 5 for 6 slides)
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 6;

  // Active Case Study Index in Section 3
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

  // Container refs for scroll snapping
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ku' ? 'en' : 'ku'));
  };

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
    if (activeSlide < totalSlides - 1) scrollToSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    if (activeSlide > 0) scrollToSlide(activeSlide - 1);
  };

  // Keyboard navigation
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

  // Modern scroll listener & Intersection Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = slideRefs.current.indexOf(entry.target);
            if (idx !== -1) setActiveSlide(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // WhatsApp Pre-fill builders
  const getWhatsAppUrl = (customText) => {
    const textKu = `سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت گفتوگۆ بکەین بۆ دەستپێکردنی کار لەگەڵتان.`;
    const textEn = `Hello HBgrow, I reviewed your Executive Pitch Deck and would like to discuss scaling my brand with you.`;
    const text = customText || (isKurdish ? textKu : textEn);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getCalculatorWhatsAppUrl = () => {
    const textKu = `سڵاو HBgrow، لە ڕێگەی ژمێرەری زیرەکەوە ئەم پلانە تایبەتەم دیاری کردووە:\n• وێنەگرتنی کامێرا: ${cameraSessions} سێشن\n• ئیدیتینگی ڤیدیۆ: ${videoEdits} ڤیدیۆ\n• گرافیک دیزاین: ${graphicDesigns} دیزاین\nکۆی گشتی خەمڵێندراو: ${formatIQD(totalCalculatorIQD)} دینار.\nدەمەوێت ئەم پلانە لەگەڵتان دەستپێبکەم.`;
    const textEn = `Hello HBgrow, I configured a custom plan via the Interactive Smart Calculator:\n• Camera Videography: ${cameraSessions} session(s)\n• Video Editing: ${videoEdits} video(s)\n• Graphic Design: ${graphicDesigns} design(s)\nEstimated Total: ${formatIQD(totalCalculatorIQD)} IQD.\nI would like to proceed with this tailored plan.`;
    return getWhatsAppUrl(isKurdish ? textKu : textEn);
  };

  const slideTitles = [
    { num: '01', en: 'The Core Premise', ku: 'دەستپێکی ستراتیژی' },
    { num: '02', en: 'Old Paradigm vs Engine', ku: 'کۆن دژی HBgrow' },
    { num: '03', en: 'Meta Telemetry Proof', ku: 'بەڵگە و ئەنجامەکان' },
    { num: '04', en: 'Capital Allocation', ku: 'پاکێجەکان و نرخ' },
    { num: '05', en: 'Interactive Calculator', ku: 'ژمێرەری زیرەک' },
    { num: '06', en: 'Launch Protocol', ku: 'چۆن دەست پێدەکەین؟' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative w-full h-[100dvh] text-white overflow-hidden select-none bg-[#050505]"
      style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
      }}
    >
      {/* ─── 1. Fixed Subtle Physical SVG Grain Overlay ───────────────────────── */}
      <FilmGrainOverlay />

      {/* ─── Top Executive Stealth HUD Bar ───────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 sm:px-8 md:px-12 py-3.5 backdrop-blur-2xl bg-[#050505]/80 border-b border-white/[0.04]">
        {/* Monogram */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.02]">
            <span className="font-bold text-xs tracking-wider text-white">HB</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tight text-sm text-white">HBgrow</span>
            <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.04]">
              Executive
            </span>
          </div>
        </div>

        {/* Center Slide Indicator */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] text-xs">
          <span className="text-white font-mono font-semibold">{slideTitles[activeSlide]?.num}</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500 font-mono">0{totalSlides}</span>
          <span className="text-zinc-700 mx-1">•</span>
          <span className="text-zinc-400 font-medium text-[11px]">
            {isKurdish ? slideTitles[activeSlide]?.ku : slideTitles[activeSlide]?.en}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-xs font-medium text-zinc-300 cursor-pointer"
          >
            <Globe size={12} className="text-zinc-400" />
            <span>{isKurdish ? 'EN' : 'کوردی'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-zinc-400 cursor-pointer"
          >
            {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>

          <WireframeCTA href={getWhatsAppUrl()} className="!py-1.5 !px-4 !text-[11px]">
            <WhatsAppIcon size={13} />
            <span>{isKurdish ? 'پەیوەندی' : 'Consult'}</span>
          </WireframeCTA>
        </div>
      </header>

      {/* ─── Side Slide Rail Indicator ──────────────────────────────────────── */}
      <nav
        aria-label="Slide Deck Rail"
        className={`fixed top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2.5 ${
          isRTL ? 'left-8' : 'right-8'
        }`}
      >
        {slideTitles.map((slide, idx) => {
          const isActive = activeSlide === idx;
          return (
            <button
              key={slide.num}
              onClick={() => scrollToSlide(idx)}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            >
              <span
                className={`absolute ${
                  isRTL ? 'left-6' : 'right-6'
                } px-2.5 py-1 rounded-md bg-[#09090b] border border-white/[0.06] text-[10px] font-medium text-zinc-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
              >
                {slide.num} — {isKurdish ? slide.ku : slide.en}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive ? 'w-1.5 h-6 bg-white' : 'w-1 h-1 bg-white/20 group-hover:bg-white/40'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* ─── Bottom Floating Stepper ────────────────────────────────────────── */}
      <footer className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#09090b]/90 backdrop-blur-2xl border border-white/[0.06]">
        <button
          onClick={prevSlide}
          disabled={activeSlide === 0}
          aria-label="Previous Slide"
          className="p-1 text-zinc-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? 'w-5 bg-white' : 'w-1 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={activeSlide === totalSlides - 1}
          aria-label="Next Slide"
          className="p-1 text-zinc-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </footer>

      {/* ─── Scroll-Snapping Main Sections ──────────────────────────────────── */}
      <main
        ref={containerRef}
        className="w-full h-[100dvh] overflow-y-auto scroll-smooth snap-y snap-mandatory relative z-10"
        style={{ scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {/* ==================================================================== */}
        {/* SLIDE 1: THE CORE PREMISE (VERBATIM PDF PAGE 1)                      */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[0] = el)}
          id="slide-1"
          className="relative w-full h-[100dvh] snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-16 overflow-hidden bg-[#050505]"
        >
          <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
            {/* Minimalist Micro Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-8"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                {isKurdish ? 'ستراتیژی نوێی گەشە بۆ ٢٠٢٦' : 'THE 2026 STRATEGIC ENGINE'}
              </span>
            </motion.div>

            {/* Massive Pure White H1 with Tight Tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE_PRO }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-[1.18] max-w-4xl mb-6"
            >
              {isKurdish ? (
                <>
                  ئێمە کار لەسەر هێنانی ڤیو لایکی زۆر ناکەین،{' '}
                  <span className="text-[#D4AF37]">ئێمە کار لەسەر هێنانی کڕیاری زیاتر دەکەین</span>{' '}
                  بۆ بزنسەکەت له ڕێی سۆشیال میدیاکەتەوە.
                </>
              ) : (
                <>
                  We don&apos;t chase vanity views and likes.{' '}
                  <span className="text-[#D4AF37]">We engineer systems that convert real buyers</span>{' '}
                  for your enterprise through social media.
                </>
              )}
            </motion.h1>

            {/* Muted Zinc Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE_PRO }}
              className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-normal"
            >
              {isKurdish
                ? 'لەڕێی بەرهەمهێنانی ستراتیجی تایبەت و دیزاین و ڤیدیۆی تایبەت، وادەکەین پەیجی بزنسەکەت هەم ڕێک و پێک و پرۆفێشناڵ وەک براندێکی پێشکەوتوو دەربکەوێت، هەم بەکاریاندەهێنینەوە بۆ ڕاکێشانی کڕیاری زیاتر بۆ بزنسەکەت لە ڕێی سپۆنسەرکردنی تایبەتەوە.'
                : 'Through custom strategy, bespoke design, and high-retention video production, we position your business profile as a premier market leader while deploying targeted Meta campaigns to systematically attract paying customers.'}
            </motion.p>

            {/* Asymmetrical Bento Teaser Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE_PRO }}
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl mb-8"
            >
              <SpotlightCard className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
                <div className="text-[11px] text-zinc-400 mt-1 font-medium">
                  {isKurdish ? 'ئامانج: هێنانی کڕیار' : 'Conversion Intent'}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] tracking-tight">4:5</div>
                <div className="text-[11px] text-zinc-400 mt-1 font-medium">
                  {isKurdish ? 'ڤیدیۆی ڕیڵزی مۆبایل' : 'Vertical Reels'}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">$0.06</div>
                <div className="text-[11px] text-zinc-400 mt-1 font-medium">
                  {isKurdish ? 'کەمترین تێچووی نامە' : 'Cost Per Lead'}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Subtle Down Indicator */}
            <button
              onClick={nextSlide}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <span>{isKurdish ? 'بەراوردی ڕاستەقینە ببینە' : 'Inspect the paradigm shift'}</span>
              <ChevronDown size={13} />
            </button>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 2: ASYMMETRICAL BENTO BOX: OLD VS NEW (PDF PAGES 1 & 2)       */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[1] = el)}
          id="slide-2"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-8 md:px-14 py-16 overflow-y-auto bg-[#050505]"
        >
          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-6"
            >
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.02] mb-3">
                {isKurdish ? 'بەراوردی ڕاستەقینە • ڕێگای کۆن دژی نوێ' : 'PARADIGM SHIFT • ZERO VANITY'}
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-white max-w-3xl mx-auto leading-snug">
                {isKurdish
                  ? 'زۆربەی بزنسەکان پارە لە سۆشیال میدیا دەسووتێنن، نەک لەبەر ئەوەی بەرهەمەکەیان خراپە... بەڵکو چونکە بە سیستەمی کۆن و هەڵە کار دەکەن.'
                  : 'Most businesses burn cash on social media—not because their product is flawed, but because they run on outdated architectures.'}
              </h2>
            </motion.div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
              {/* Left Bento: The Old Way (4 cols) */}
              <SpotlightCard className="md:col-span-5 p-6 flex flex-col justify-between border-red-500/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-400/80 px-2.5 py-1 rounded-md bg-red-500/[0.06] border border-red-500/15">
                      {isKurdish ? 'ڕێگای کۆن (سەرفکردنی بێسوود)' : 'THE OBSOLETE WAY'}
                    </span>
                  </div>

                  <ul className="space-y-4 text-xs">
                    <li className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                        <X size={10} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-0.5">
                          {isKurdish ? 'دیزاینی وێنەی بێ گیان' : 'Static Feed Graphics'}
                        </strong>
                        <span className="text-zinc-400 leading-relaxed block">
                          {isKurdish
                            ? 'دیزاینی وێنەی ئاسایی کە لەناو سۆشیال میدیادا کەس نایبینێت و تێپەڕ دەبێت.'
                            : 'Generic Canva templates scrolled past in 0.3s without registering attention.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                        <X size={10} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-0.5">
                          {isKurdish ? 'سپۆنسەری بێ ئامانج' : 'Blind Boosting'}
                        </strong>
                        <span className="text-zinc-400 leading-relaxed block">
                          {isKurdish
                            ? 'داگرتنی دوگمەی Boost Post بەبێ هیچ فەنەڵ و بە ئامانجگرتنێکی دروست.'
                            : 'Tapping Boost Post blindly with zero attribution tracking or sales funnels.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                        <X size={10} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-0.5">
                          {isKurdish ? 'دڵخۆشبوون بە لایک' : 'Vanity Metrics'}
                        </strong>
                        <span className="text-zinc-400 leading-relaxed block">
                          {isKurdish
                            ? 'سەیرکردنی لایک و ڤیو لە جیاتی ئەوەی سەرنج لەسەر هێنانی کڕیار و نامە بێت.'
                            : 'Chasing empty likes that never translate to commercial cash flow or payroll.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                        <X size={10} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-0.5">
                          {isKurdish ? 'نەبوونی ڕێڕەوی فرۆشتن' : 'Zero Funnel Architecture'}
                        </strong>
                        <span className="text-zinc-400 leading-relaxed block">
                          {isKurdish
                            ? 'کەس نازانێت چۆن بینەر دەبێت بە کڕیار و پارە بۆ بزنسەکەت دروست دەکات.'
                            : 'No systematic bridge between mobile screen view and finalized transaction.'}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-500">
                  <span>{isKurdish ? 'دەرئەنجام:' : 'Commercial Outcome:'}</span>
                  <span className="text-red-400 font-mono font-medium">{isKurdish ? 'ماندووبوون بێ قازانج' : 'Negative ROI'}</span>
                </div>
              </SpotlightCard>

              {/* Right Bento: The HBgrow Engine (7 cols) */}
              <SpotlightCard className="md:col-span-7 p-6 flex flex-col justify-between border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {isKurdish ? 'سیستەمی گەشەی HBgrow' : 'THE HBGROW ENGINE'}
                    </span>
                    <Sparkles size={12} className="text-[#D4AF37]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-2xl bg-white/[0.015] border border-white/[0.03]">
                      <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
                        <Check size={12} className="text-[#D4AF37]" />
                        <span>{isKurdish ? 'ڤیدیۆی کوالێتی بەرز' : 'High-Retention Reels'}</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        {isKurdish
                          ? 'بەرهەمهێنانی ڤیدیۆ بە دەنگخستنەسەر (Voiceover) و سەرنجڕاکێشان لە ۳ چرکەی یەکەمدا.'
                          : 'Engineered with professional voiceovers and immediate 3s algorithmic thumb-stops.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/[0.015] border border-white/[0.03]">
                      <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
                        <Check size={12} className="text-[#D4AF37]" />
                        <span>{isKurdish ? 'کەمپەینی داتامەبەست' : 'Precision Meta Ads'}</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        {isKurdish
                          ? 'دانانی کەمپەینی ڕیکلامی ورد لە Meta بۆ بە ئامانجگرتنی ئەو کەسانەی ئامادەن بکڕن.'
                          : 'Laser targeting qualified high-income buyer clusters in Erbil and Sulaymaniyah.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/[0.015] border border-white/[0.03]">
                      <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
                        <Check size={12} className="text-[#D4AF37]" />
                        <span>{isKurdish ? 'فەنەڵی واتسئەپ' : 'Direct WhatsApp Pipeline'}</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        {isKurdish
                          ? 'دروستکردنی سیستەمێک کە ڕاستەوخۆ بینەر دەباتە سەر کڕین و نامەناردن لە واتسئەپ.'
                          : 'Frictionless checkout path leading ready prospects directly to order placement.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/[0.015] border border-white/[0.03]">
                      <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
                        <Check size={12} className="text-[#D4AF37]" />
                        <span>{isKurdish ? 'ئامانجی ڕوون' : 'Measurable Revenue'}</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        {isKurdish
                          ? 'هەموو کارەکانمان یەک ئامانجیان هەیە: زیادکردنی فرۆشتن و داهاتی بزنسەکەت.'
                          : 'Complete telemetry showing exact cost-per-lead and bottom-line commercial returns.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-500">
                  <span>{isKurdish ? 'دەرئەنجام:' : 'Commercial Outcome:'}</span>
                  <span className="text-[#D4AF37] font-semibold">{isKurdish ? 'کڕیاری بەردەوام و فرۆشی سەلمێنراو' : 'Predictable Revenue'}</span>
                </div>
              </SpotlightCard>
            </div>

            {/* Bottom Verbatim Conclusion Banner */}
            <SpotlightCard className="p-4 sm:p-5 text-center border-white/[0.05]">
              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed max-w-3xl mx-auto">
                {isKurdish
                  ? 'ئەگەر بەردەوام بیت لەسەر هەمان ڕێگای کۆن، هەمان ئەنجامی بێسوودت دەستدەکەوێتەوە. کاتی ئەوەیە سۆشیال میدیاکەت لە ئەرکێکی بێسوودەوە بکەیت بە باشترین سەرمایەی بزنسەکەت.'
                  : 'If you stay on the old road, you will keep getting zero return. It is time to turn your social media from a chore into your highest-performing business asset.'}
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 3: META TELEMETRY PROOF (BENTO GRID WITH MACOS WINDOW)         */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[2] = el)}
          id="slide-3"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-8 md:px-14 py-16 overflow-y-auto bg-[#050505]"
        >
          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-6"
            >
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.02] mb-3">
                {isKurdish ? 'بەڵگەی سەلمێنراو • داتا و ژمارەکان' : 'AUDITED PERFORMANCE • DATA & RESULTS'}
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-white max-w-3xl mx-auto leading-snug">
                {isKurdish
                  ? 'ئێمە بەڵێنی بێ بنەما نادەین، بە ژمارە و داتا ئەنجامەکانت پیشان دەدەین.'
                  : 'We make zero unsubstantiated claims. Every milestone is backed by raw Meta telemetry.'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mt-2">
                {isKurdish
                  ? 'بینینی سەرکەوتنی کڕیارەکانمان باشترین بەڵگەیە بۆ ئەو گەشەیەی کە دەتوانین بۆ بزنسەکەی تۆیشی بکەین...'
                  : 'Documented wins from local Iraqi business accounts audited in real-time...'}
              </p>
            </motion.div>

            {/* Bento Grid with MacOS Window Asset Framing */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
              {/* Left Column: Photorealistic MacOS Meta Dashboard (7 cols) */}
              <div className="md:col-span-7">
                <MacOSWindow title="Meta Ads Manager — Client Campaign Telemetry">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.04]">
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                        {isKurdish ? 'کۆی نامەی کڕیار' : 'Inbound Inquiries'}
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mt-0.5">
                        6,677
                      </div>
                    </div>
                    <div className="text-end">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                        {isKurdish ? 'تێچووی هەر نامەیەک' : 'Cost Per Result'}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#D4AF37] mt-0.5">
                        $0.06
                      </div>
                    </div>
                  </div>

                  {/* Simulated Telemetry Bar Chart */}
                  <div className="space-y-2 py-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400">
                      <span>{isKurdish ? 'دەرفەتی فرۆشتن دروستکراو' : 'Sales Opportunities Created'}</span>
                      <span className="font-mono text-white font-semibold">60,000+</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full bg-[#D4AF37] rounded-full w-[88%]" />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-2">
                      <span>{isKurdish ? 'ڕێژەی گۆڕین بۆ کڕین' : 'Qualified WhatsApp Rate'}</span>
                      <span className="font-mono text-emerald-400 font-semibold">92.4%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full bg-emerald-400/80 rounded-full w-[92%]" />
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mt-3 pt-3 border-t border-white/[0.04] leading-relaxed">
                    {isKurdish
                      ? 'لە ڕێگەی کەمپەینە پێشکەوتووەکانمانەوە ٦,٦٧٧ نامەی کڕیاری ڕاستەقینە بۆ یەکێک لە براندەکان دروستکراوە بە کەمترین تێچوو.'
                      : 'Audited live Meta Ads Manager campaign showing 6,677 verified incoming buyer messages at $0.06 cost-per-lead.'}
                  </p>
                </MacOSWindow>
              </div>

              {/* Right Column: Key Proof Bento Cards (5 cols) */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <SpotlightCard className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                      {isKurdish ? 'قۆرخکردنی سەرنج' : 'MARKET RETENTION'}
                    </div>
                    <div className="text-3xl font-extrabold tracking-tighter text-white">
                      35,000,000+
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {isKurdish
                        ? 'زیاتر لە ١٠٠٠ پارچە ناوەڕۆکی ڤیدیۆ و دیزاین کە ڕاستەوخۆ سەرنجی کڕیارانیان لە بازاڕدا قۆرخ کردووە.'
                        : 'Over 1,000 high-retention reel assets generating 35M+ qualified views across Kurdistan.'}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-mono text-zinc-500">1,000+ Assets Deployed</div>
                </SpotlightCard>

                <SpotlightCard className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                      {isKurdish ? 'وەبەرهێنانی بەسوود' : 'CAPITAL EFFICIENCY'}
                    </div>
                    <div className="text-3xl font-extrabold tracking-tighter text-[#D4AF37]">
                      $20,000+
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {isKurdish
                        ? 'تێچووی هێنانی یەک کڕیار گەیەندراوەتە کەمترین ئاست ($0.06 بۆ هەر نامەیەک) کە قازانجی ڕاستەقینە بۆ خاوەن بزنسەکە مسۆگەر دەکات.'
                        : 'Over $20k in ad spend managed with zero waste, driving unprecedented ROI margins.'}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-mono text-zinc-500">Zero Ad Budget Waste</div>
                </SpotlightCard>
              </div>
            </div>

            {/* Testimonial & Portfolio Wireframe Action */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <SpotlightCard className="md:col-span-8 p-4 sm:p-5 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-[#D4AF37] shrink-0 font-serif">
                  “
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                    {isKurdish
                      ? '«پێشتر تەنها لایکمان دەهات، بەڵام لەگەڵ HBgrow ڕۆژانە نامەی کڕیاری ڕاستەقینەمان پێدەگات لە واتسئەپ و فرۆشمان بە تەواوی گۆڕاوە.»'
                      : '“We previously only received passive likes. With HBgrow, qualified buyer inquiries arrive in WhatsApp every morning.”'}
                  </p>
                  <div className="text-[10px] text-zinc-500 mt-1 font-mono">
                    {isKurdish ? '— کڕیاری سۆشیال میدیا و فرۆش • هەرێمی کوردستان' : '— Verified Enterprise Client • Retail & Aesthetic'}
                  </div>
                </div>
              </SpotlightCard>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <WireframeCTA href="/#portfolio" className="w-full justify-center">
                  <span>{isKurdish ? 'نموونەی کارەکانمان ببینە' : 'Inspect Portfolio Archive'}</span>
                  <ExternalLink size={13} />
                </WireframeCTA>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 4: CAPITAL ALLOCATION & PRICING (ACETATE GLASS BENTO)          */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[3] = el)}
          id="slide-4"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-8 md:px-14 py-16 overflow-y-auto bg-[#050505]"
        >
          <div className="max-w-4xl w-full mx-auto my-auto flex flex-col items-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-6"
            >
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] mb-3">
                Social Media Management
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-white max-w-3xl mx-auto leading-snug">
                {isKurdish
                  ? 'وەبەرهێنان لە سیستەمی فرۆشتندا، نەک خەرجییەکی بێسوود. سیستەمێک هەڵبژێرە کە گەشە بە بزنسەکەت دەدات.'
                  : 'Capital investment into a sales engine, not dead overhead. Select your scaling tier.'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2">
                {isKurdish ? 'نرخەکان ڕوون و شەفافن، بەبێ هیچ خەرجییەکی شاراوە.' : '100% transparent pricing with zero concealed charges.'}
              </p>
            </motion.div>

            {/* Bento Pricing Tiers */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              {/* Tier 1: Growth */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.04]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Growth</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Monthly Scale</span>
                  </div>

                  {/* Oversized Price */}
                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white">
                      $225
                      <span className="text-xs font-normal text-zinc-500 ms-1.5">
                        {isKurdish ? '/ مانگانە' : '/ Month'}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 font-mono">
                      {isKurdish ? 'نزیکەی 338,000 دینار' : '~338,000 IQD'}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04] text-xs">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="font-mono text-white font-bold">6</span>
                      <span>{isKurdish ? 'ڤیدیۆ ڕیل (پۆستی ڤیدیۆی سەرنجڕاکێش)' : 'Video Reels (High-Retention)'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="font-mono text-white font-bold">6</span>
                      <span>{isKurdish ? 'گرافیک دیزاین (پۆستی وێنە + سلاید)' : 'Graphic Designs (Posts + Slides)'}</span>
                    </div>
                    <div className="text-zinc-400">{isKurdish ? 'پلاندانانی ستراتیجی ناوەڕۆک و نووسینی کاپشن' : 'Strategic Planning & Copywriting'}</div>
                    <div className="text-zinc-400">{isKurdish ? 'دەنگخستنەسەر (Voiceover) بۆ ڤیدیۆکان' : 'Voiceover Production'}</div>
                    <div className="text-zinc-400">{isKurdish ? 'بەڕێوەبردن و چاودێریکردنی کەمپەینی سپۆنسەر' : 'Meta Sponsored Ads Management'}</div>
                    <div className="text-zinc-400">{isKurdish ? 'ڕاپۆرتی مانگانەی ئەنجامەکان و شیکاری' : 'Monthly Performance Analytics'}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <WireframeCTA
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth ($225 / مانگانە) دەستپێبکەم بۆ براندەکەم.'
                        : 'Hello HBgrow, I want to start with the Growth tier ($225/mo).'
                    )}
                    className="w-full"
                  >
                    <WhatsAppIcon size={14} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی مانگانە' : 'Deploy Monthly Tier'}</span>
                  </WireframeCTA>
                </div>
              </SpotlightCard>

              {/* Tier 2: Growth+ (Stealth Gold Border) */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-[#D4AF37]/30 bg-white/[0.025]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">Growth+</span>
                    <span className="text-[10px] font-mono text-[#D4AF37] px-2 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {isKurdish ? 'باشترین هەڵبژاردە • ٣ مانگ' : 'BEST VALUE (3 MO)'}
                    </span>
                  </div>

                  {/* Oversized Price */}
                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#D4AF37]">
                      $640
                      <span className="text-xs font-normal text-zinc-500 ms-1.5">
                        {isKurdish ? '/ بۆ سێ مانگ' : '/ 3 Months'}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 font-mono">
                      {isKurdish ? '960,000 دینار (مانگانە $213 دەکەوێت)' : '~960,000 IQD ($213/mo • Save $35)'}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.04] text-xs">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <span className="font-mono text-[#D4AF37] font-bold">18</span>
                      <span>{isKurdish ? 'ڤیدیۆ ڕیل (پۆستی ڤیدیۆی پێشکەوتوو بە دەنگ)' : 'Video Reels (Quarterly Batch)'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-medium">
                      <span className="font-mono text-[#D4AF37] font-bold">18</span>
                      <span>{isKurdish ? 'گرافیک دیزاین (پۆستی وێنە + سلاید)' : 'Graphic Designs (Posts + Slides)'}</span>
                    </div>
                    <div className="text-zinc-300">{isKurdish ? 'ستراتیژی فرۆشتنی درێژخایەن و بەردەوام' : '90-Day Continuous Growth Roadmap'}</div>
                    <div className="text-zinc-300">{isKurdish ? 'داشکاندنی تایبەت (پاشەکەوتکردنی $35 لە ٣ مانگدا)' : 'Quarterly Discount (Save $35)'}</div>
                    <div className="text-zinc-300">{isKurdish ? 'دەنگخستنەسەر (Voiceover) و کەمپەینی سپۆنسەر' : 'Voiceover & Full Meta Ad Management'}</div>
                    <div className="text-[#D4AF37]">{isKurdish ? 'ئەولەویەت لە خزمەتگوزاری و وەڵامدانەوە' : 'VIP Priority Account Execution'}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                  <WireframeCTA
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth+ ($640 / ٣ مانگە) دەستپێبکەم بۆ گەشەی بەردەوام.'
                        : 'Hello HBgrow, I want to start with the Growth+ quarterly tier ($640/3mo).'
                    )}
                    className="w-full !border-[#D4AF37]/50"
                  >
                    <WhatsAppIcon size={14} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی ٣ مانگە' : 'Deploy Quarterly Tier'}</span>
                  </WireframeCTA>
                </div>
              </SpotlightCard>
            </div>

            {/* Ad Spend Disclosure Note */}
            <div className="w-full max-w-2xl text-center text-[11px] text-zinc-500 font-normal leading-relaxed">
              <span className="text-zinc-400 font-medium">
                {isKurdish ? 'تێبینی شەفافیەت: ' : 'Transparency Note: '}
              </span>
              <span>
                {isKurdish
                  ? 'بودجەی سپۆنسەر (ڕیکلام) لە ئەستۆی خاوەن بزنسەکەیە و بڕەکەی لەلایەن خۆتەوە دیاری دەکرێت و بە وەسڵی فەرمی دەچێتە لای مێتا.'
                  : 'Meta ad spend is completely segregated, determined by client, and billed directly by Meta.'}
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 5: INTERACTIVE SMART BUDGET CALCULATOR (ACETATE GLASS BENTO)   */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[4] = el)}
          id="slide-5"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-8 md:px-14 py-16 overflow-y-auto bg-[#050505]"
        >
          <div className="max-w-4xl w-full mx-auto my-auto flex flex-col items-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-6"
            >
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.02] mb-3">
                {isKurdish ? 'ژمێرەری زیرەکی HBgrow' : 'INTERACTIVE SMART CALCULATOR'}
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-white max-w-3xl mx-auto leading-snug">
                {isKurdish
                  ? 'کۆنترۆڵی خەرجییەکانت بکە. تەنیا پارەی ئەو خزمەتگوزارییە بدە کە پێویستتە.'
                  : 'Control your capital. Pay only for the surgical deliverables you need.'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2">
                {isKurdish
                  ? 'ئەگەر پێویستت بە پاکێجی تەواوی مانگانە نییە، بەم ژمێرەرە پاکێجی تایبەت بە خۆت دیاریبکە:'
                  : 'Configure a customized modular production package below:'}
              </p>
            </motion.div>

            {/* Tactile Bento Stepper Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {/* Item 1: Camera Videography */}
              <SpotlightCard className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Camera size={18} className="text-zinc-400" />
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold">110,000 IQD</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {isKurdish ? 'ڤیدیۆی پرۆفیشناڵ بە کامێرا' : 'Camera Videography'}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {isKurdish
                      ? 'سێشنێکی وێنەگرتنی پرۆفیشناڵ بە کامێرا کە لە ٣ بۆ ٤ ڤیدیۆ پێکدێت.'
                      : 'On-location cinematic camera shoot (produces 3-4 finished reels).'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{isKurdish ? 'سێشن:' : 'Sessions:'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCameraSessions((prev) => Math.max(0, prev - 1))}
                      disabled={cameraSessions === 0}
                      className="h-6 w-6 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-20 cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center font-mono font-bold text-sm text-white">{cameraSessions}</span>
                    <button
                      onClick={() => setCameraSessions((prev) => prev + 1)}
                      className="h-6 w-6 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>

              {/* Item 2: Video Editing */}
              <SpotlightCard className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Video size={18} className="text-zinc-400" />
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold">30,000 IQD</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {isKurdish ? 'مۆنتاژ و ئیدیتینگی ڤیدیۆ' : 'Professional Video Edit'}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {isKurdish
                      ? 'مۆنتاژی پێشکەوتوو بە دەنگخستنەسەر (Voiceover) و گرافیک و کاریگەری.'
                      : 'Modern high-retention reel edits with voiceover pacing and graphics.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{isKurdish ? 'ڤیدیۆ:' : 'Videos:'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setVideoEdits((prev) => Math.max(0, prev - 1))}
                      disabled={videoEdits === 0}
                      className="h-6 w-6 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-20 cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center font-mono font-bold text-sm text-white">{videoEdits}</span>
                    <button
                      onClick={() => setVideoEdits((prev) => prev + 1)}
                      className="h-6 w-6 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>

              {/* Item 3: Graphic Design */}
              <SpotlightCard className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Palette size={18} className="text-zinc-400" />
                    <span className="text-xs font-mono text-[#D4AF37] font-semibold">10,000 IQD</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {isKurdish ? 'گرافیک دیزاینی پێشکەوتوو' : 'Graphic Design'}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {isKurdish
                      ? 'دیزاینی براندینگی پرۆفیشناڵ، وێنە و پۆست و کارۆسێلی فرۆشیار.'
                      : 'Editorial brand graphics, carousels, and high-impact visual covers.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{isKurdish ? 'دیزاین:' : 'Designs:'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGraphicDesigns((prev) => Math.max(0, prev - 1))}
                      disabled={graphicDesigns === 0}
                      className="h-6 w-6 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-20 cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center font-mono font-bold text-sm text-white">{graphicDesigns}</span>
                    <button
                      onClick={() => setGraphicDesigns((prev) => prev + 1)}
                      className="h-6 w-6 rounded-md border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Oversized Dynamic Total Box */}
            <SpotlightCard className="w-full p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 border-[#D4AF37]/20">
              <div className="text-center md:text-start">
                <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                  {isKurdish ? 'کۆی گشتی خەمڵێندراو' : 'ESTIMATED CAPITAL TOTAL'}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white mt-1">
                  {formatIQD(totalCalculatorIQD)}{' '}
                  <span className="text-sm font-normal text-zinc-400 font-mono">
                    {isKurdish ? 'دیناری عێراقی' : 'IQD'}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-mono">
                  {cameraSessions} Shoot(s) • {videoEdits} Edit(s) • {graphicDesigns} Design(s)
                </div>
              </div>

              <WireframeCTA href={getCalculatorWhatsAppUrl()} className="!py-3.5 !px-8">
                <WhatsAppIcon size={16} />
                <span>{isKurdish ? 'با دەست بە کارەکان بکەین' : 'Dispatch Custom Plan'}</span>
                {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </WireframeCTA>
            </SpotlightCard>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 6: ONBOARDING & STEALTH TRUST PROTOCOL (PDF PAGES 7 & 8)      */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[5] = el)}
          id="slide-6"
          className="relative w-full min-h-[100dvh] h-full snap-start snap-always flex flex-col justify-center items-center px-4 sm:px-8 md:px-14 py-16 overflow-y-auto bg-[#050505]"
        >
          <div className="max-w-4xl w-full mx-auto my-auto text-center flex flex-col items-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-6"
            >
              <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.02] mb-3">
                {isKurdish ? 'دەستپێکردن لە ٣ هەنگاوی سادەدا' : 'ONBOARDING PROTOCOL • 3 STEPS'}
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-white max-w-3xl mx-auto leading-snug">
                {isKurdish
                  ? 'دەتەوێت براندەکەت قازانجی ڕاستەقینە بکات؟ دەستپێکردن لەگەڵماندا تەنیا ٣ هەنگاوی سادەیە.'
                  : 'Ready for verified commercial returns? Launching takes exactly 3 seamless steps.'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2">
                {isKurdish
                  ? 'سیستەمێکی کارکردنی بێ ئەرک. تۆ کاتت نییە سەرقاڵی وردەکارییەکان بیت، ئێمە هەموو شتێک بەڕێوەدەبەین:'
                  : 'Frictionless workflow. You focus on enterprise leadership; we engineer the creative and distribution:'}
              </p>
            </motion.div>

            {/* 3 Bento Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6 text-start">
              <SpotlightCard className="p-5">
                <div className="text-[10px] font-mono text-[#D4AF37] mb-2">01 / DISCOVERY</div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {isKurdish ? 'دیاریکردنی کێشەکان' : 'Discovery Call'}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isKurdish
                    ? '١٥-٢٠ خولەک گفتوگۆ بۆ تێگەیشتن لە ئامانج و کێشەکانی پەیجەکەت و دەستنیشانکردنی دەرفەتەکان.'
                    : '15-20 min consultation to audit acquisition bottlenecks and pinpoint buyer targets.'}
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-5">
                <div className="text-[10px] font-mono text-[#D4AF37] mb-2">02 / ARCHITECTURE</div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {isKurdish ? 'پلان و ستراتیژی' : 'Custom Strategy'}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isKurdish
                    ? 'لە ماوەی ٥ بۆ ٧ ڕۆژدا ستراتیژ، یەکەم ڤیدیۆ و دیزاینەکان بە تەواوی ئامادە دەبن بۆ دەستپێکردن.'
                    : 'Within 5-7 days, your visual roadmap, first reels, and graphics are produced ready for launch.'}
                </p>
              </SpotlightCard>

              <SpotlightCard className="p-5">
                <div className="text-[10px] font-mono text-[#D4AF37] mb-2">03 / CONVERSION</div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {isKurdish ? 'جێبەجێکردن و قازانج' : 'Execution & Profit'}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isKurdish
                    ? 'دەستپێکردنی بڵاوکردنەوە و سپۆنسەری زیرەک، و پێشوازی لە نامە و کڕیارە نوێیەکانت بکە لە واتسئەپ.'
                    : 'Deploying algorithmic distribution—inbound high-intent buyer inquiries flow straight into WhatsApp.'}
                </p>
              </SpotlightCard>
            </div>

            {/* Final Action Callout Bento */}
            <SpotlightCard className="w-full p-6 sm:p-7 mb-5 text-center border-white/[0.06]">
              <h3 className="text-base sm:text-xl font-bold tracking-tight text-white mb-4 max-w-xl mx-auto">
                {isKurdish
                  ? 'ئامادەی بۆ گەشەکردنی حەقیقی؟ کاتی خۆت بە فیڕۆ مەدە لەگەڵ ڕێگا کۆنەکان. با هەر ئەمڕۆ ستراتیژییەکەت بۆ دابڕێژین.'
                  : 'Stop burning time on dead methods. Let us engineer your acquisition strategy today.'}
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <WireframeCTA
                  href={getWhatsAppUrl(
                    isKurdish
                      ? 'سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت کاتێک دیاریبکەین بۆ گفتوگۆکردن و دەستپێکردن.'
                      : 'Hello HBgrow, I finished reviewing the Executive Pitch Deck and want to schedule a strategy call to start.'
                  )}
                  className="!py-3.5 !px-8"
                >
                  <WhatsAppIcon size={16} />
                  <span>{isKurdish ? 'کاتێک دیاریبکە بۆ گفتوگۆکردن' : 'Schedule Strategy Briefing'}</span>
                  {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </WireframeCTA>

                {onScheduleClick && (
                  <button
                    onClick={onScheduleClick}
                    className="px-5 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isKurdish ? 'دیاریکردنی کاتی پەیوەندی' : 'Calendar Booking'}
                  </button>
                )}
              </div>
            </SpotlightCard>

            {/* Stealth Monochromatic Trust Signals */}
            <div className="w-full max-w-3xl p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 text-center">
                {isKurdish
                  ? 'پڕۆسەی پارەدانمان زۆر ئاسانە. دەتوانیت لە ڕێگەی هەژمارە بانکییە ناوخۆییەکانەوە مانگانە پارە بدەیت:'
                  : 'SETTLE MONTHLY VIA PREFERRED LOCAL IRAQI BANKING & WALLET CHANNELS:'}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-1">
                <StealthFIBLogo />
                <StealthFastPayLogo />
                <StealthQiCardLogo />
                <StealthAsiaPayLogo />
              </div>

              <div className="text-[10px] text-zinc-600 text-center mt-2.5 font-mono">
                {isKurdish
                  ? 'پارەدانی دەستبەجێ بەبێ کێشەی حەواڵە • بە فاکتەری فەرمی بازرگانی لە ناوخۆی عێراق و کوردستان'
                  : 'Instant corporate settlement • Zero currency conversion friction • Audited invoicing'}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
