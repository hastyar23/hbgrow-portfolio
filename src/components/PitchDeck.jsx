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
  Lock,
  Sparkles,
  Shield,
  Play,
  Grid,
  Star,
  MessageCircle,
  Eye,
  Quote,
  BarChart2,
  TrendingUp,
  Crown,
  Zap,
  Award,
  Clock,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { clients, videoIds, designs } from '../data/portfolioData';
import kuTranslations from '../locales/ku.json';
import enTranslations from '../locales/en.json';

// ─── Audited Meta Ads Campaign Data & Proofs from Landing Page ──────────────
const adResults = [
  { img: '/images/optimized/W5OXMYW.avif', messages: '17,820', impressions: '10,204,568' },
  { img: '/images/optimized/VvmJH1K.avif', messages: '6,677', impressions: '2,139,824' },
  { img: '/images/optimized/jk8QLtZ.avif', messages: '2,826', impressions: '741,792' },
  { img: '/images/optimized/NINVVAW.avif', messages: '2,593', impressions: '1,358,495' },
  { img: '/images/optimized/8Y7jqz6.avif', messages: '1,853', impressions: '367,874' },
];

const dataProofImages = [
  'https://cdn.gamma.app/z58zerd9qvdtd4t/3c5a1b1747304b498c03e9e441e24714/original/kk.png',
  'https://cdn.gamma.app/z58zerd9qvdtd4t/0b1c76837bf5417c9842a9e861094bbb/original/ads.png',
];

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
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#111116] bg-opacity-95 backdrop-blur-md shadow-none transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered ? '0 16px 40px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)' : '0 8px 24px -8px rgba(0, 0, 0, 0.5)',
      }}
      {...props}
    >
      {/* 2026 Stealth Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${coords.x}px ${coords.y}px, rgba(212, 175, 55, 0.04), transparent 45%)`,
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
      {/* Subtle Champagne Gold Slide Gradient */}
      <span
        className="absolute inset-0 z-0 translate-y-full transition-transform duration-[400ms] ease-out group-hover:translate-y-0"
        style={{ background: 'linear-gradient(135deg, #E5E4E2 0%, #D4AF37 100%)' }}
      />
    </>
  );

  const baseClasses = `group relative overflow-hidden inline-flex items-center justify-center rounded-full border border-white/[0.08] px-6 py-3.5 text-xs font-semibold tracking-wide transition-all duration-[400ms] ease-out shadow-none cursor-pointer ${
    isPrimary
      ? 'bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] !border-transparent shadow-[0_0_24px_rgba(212,175,55,0.25)] hover:shadow-[0_0_32px_rgba(212,175,55,0.4)]'
      : 'bg-[#111116] text-white hover:border-[#D4AF37] hover:!text-[#0A0A0C]'
  } ${className}`;

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
function MacOSWindow({ title = 'Meta Ads Manager', url = 'business.facebook.com/adsmanager', children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111116]/95 backdrop-blur-md shadow-none ${className}`}>
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.04] px-4 py-2.5 bg-white/[0.01]">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] text-zinc-400 font-mono">
          <Lock size={10} className="text-zinc-500" />
          <span>{url}</span>
        </div>
        <div className="w-8" />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

// ─── Stealth Monochromatic Iraqi Payment Signals ──────────────────────────────
function StealthFIBLogo({ className = 'h-5 w-auto' }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="First Iraqi Bank">
        <rect width="44" height="44" rx="10" fill="#111116" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M22 8L34 15V29L22 36L10 29V15L22 8Z" stroke="#D4AF37" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 14L29 18V26L22 30L15 26V18L22 14Z" fill="rgba(212,175,55,0.1)" stroke="#FFFFFF" strokeWidth="1.2" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16" letterSpacing="0.05em">
          FIB
        </text>
        <text x="54" y="35" fill="#A1A1AA" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8" letterSpacing="0.16em">
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
        <rect width="44" height="44" rx="10" fill="#111116" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M22 8L34 22L22 36L10 22L22 8Z" fill="#D4AF37" fillOpacity="0.85" />
        <path d="M20 15L27 22L20 29" stroke="#0A0A0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16">
          FastPay
        </text>
        <text x="54" y="35" fill="#A1A1AA" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8" letterSpacing="0.14em">
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
        <rect width="44" height="44" rx="10" fill="#111116" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="22" cy="22" r="12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <path d="M17 17C15 19 15 25 17 27C19 29 25 29 27 27C29 25 29 19 27 17C25 15 19 15 17 17Z" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        <circle cx="22" cy="22" r="3" fill="#D4AF37" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16">
          Qi Card
        </text>
        <text x="54" y="35" fill="#A1A1AA" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8">
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
        <rect width="44" height="44" rx="10" fill="#111116" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="22" cy="22" r="11" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="5" fill="#FFFFFF" />
        <text x="54" y="24" fill="#FFFFFF" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="700" fontSize="16">
          AsiaPay
        </text>
        <text x="54" y="35" fill="#A1A1AA" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontWeight="500" fontSize="8">
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

  // Section 3 Proof & Portfolio Showcase State
  const [proofTab, setProofTab] = useState('videos'); // 'videos' | 'designs' | 'meta' | 'testimonials'
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [archiveTab, setArchiveTab] = useState('videos'); // 'videos' | 'designs' | 'meta' | 'testimonials'
  const [visibleVideoCount, setVisibleVideoCount] = useState(12);
  const [visibleDesignCount, setVisibleDesignCount] = useState(16);
  const [activeMetaIndex, setActiveMetaIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [dockReviewIndex, setDockReviewIndex] = useState(0);

  // Authenticated Testimonials from Landing Page Locale
  const testimonialsList = isKurdish
    ? kuTranslations.testimonials?.list || []
    : enTranslations.testimonials?.list || [];

  // Auto-cycle dock quote ticker every 4.5 seconds
  useEffect(() => {
    if (!testimonialsList.length) return;
    const interval = setInterval(() => {
      setDockReviewIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [testimonialsList.length]);

  // Interactive Smart Calculator State (Slide 5 / Page 5-6)
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

  // Keyboard navigation & modal closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'Escape') {
        if (activeVideo) {
          setActiveVideo(null);
          return;
        }
        if (activeImg) {
          setActiveImg(null);
          return;
        }
        if (showArchiveModal) {
          setShowArchiveModal(false);
          return;
        }
      }
      if (activeVideo || activeImg || showArchiveModal) return;
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
  }, [activeSlide, scrollToSlide, activeVideo, activeImg, showArchiveModal]);

  // Lock body scroll when modal is active
  useEffect(() => {
    const isModalOpen = Boolean(activeVideo || activeImg || showArchiveModal);
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo, activeImg, showArchiveModal]);

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

  // WhatsApp Pre-fill builders verbatim with PDF intent
  const getWhatsAppUrl = (customText) => {
    const textKu = `سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت کاتێک دیاریبکەین بۆ گفتوگۆکردن و دەستپێکردنی کار لەگەڵتان.`;
    const textEn = `Hello HBgrow, I reviewed the pitch presentation and would like to schedule a strategy call to start working with you.`;
    const text = customText || (isKurdish ? textKu : textEn);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getCalculatorWhatsAppUrl = () => {
    const textKu = `سڵاو HBgrow، لە ڕێگەی ژمێرەری زیرەکەوە ئەم پلانە تایبەتەم دیاری کردووە:\n• وێنەگرتنی کامێرا: ${cameraSessions} سەردان\n• مۆنتاژ و ئیدیتینگی ڤیدیۆ: ${videoEdits} ڤیدیۆ\n• گرافیک دیزاین: ${graphicDesigns} دیزاین\nکۆی گشتی وەبەرهێنانەکەم: ${formatIQD(totalCalculatorIQD)} دینار.\nدەمەوێت ئەم پلانە لەگەڵتان دەستپێبکەم.`;
    const textEn = `Hello HBgrow, I configured my customized plan via the Smart Calculator:\n• Camera Videography: ${cameraSessions} session(s)\n• Video Editing: ${videoEdits} video(s)\n• Graphic Design: ${graphicDesigns} design(s)\nTotal Investment: ${formatIQD(totalCalculatorIQD)} IQD.\nI would like to launch this plan.`;
    return getWhatsAppUrl(isKurdish ? textKu : textEn);
  };

  const slideTitles = [
    { num: '01', en: 'Hero', ku: 'دەستپێکی ستراتیژی' },
    { num: '02', en: 'Old Way vs HBgrow', ku: 'ڕێگای کۆن بەرامبەر HBgrow' },
    { num: '03', en: 'Proof & Case Studies', ku: 'بەڵگە و ئەنجامەکان' },
    { num: '04', en: 'Packages & Pricing', ku: 'پاکێجەکان و وەبەرهێنان' },
    { num: '05', en: 'Smart Calculator', ku: 'ژمێرەری زیرەک' },
    { num: '06', en: 'Frictionless Onboarding', ku: 'چۆن دەست پێدەکەین؟' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative w-full h-[100dvh] text-white overflow-hidden select-none bg-[#0A0A0C]"
      style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
      }}
    >
      {/* ─── 1. Fixed Subtle Physical SVG Grain Overlay ───────────────────────── */}
      <FilmGrainOverlay />

      {/* ─── Top Executive Stealth HUD Bar ───────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-3.5 sm:px-8 md:px-12 py-3 sm:py-3.5 backdrop-blur-2xl bg-[#0A0A0C]/85 border-b border-white/[0.08]">
        {/* Monogram */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/[0.08] bg-[#111116]">
            <span className="font-bold text-xs tracking-wider text-white">HB</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tight text-xs sm:text-sm text-white">HBgrow</span>
            <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.08]">
              Pitch
            </span>
          </div>
        </div>

        {/* Center Slide Indicator */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#111116]/80 border border-white/[0.08] text-xs">
          <span className="text-white font-mono font-semibold">{slideTitles[activeSlide]?.num}</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500 font-mono">0{totalSlides}</span>
          <span className="text-zinc-700 mx-1">•</span>
          <span className="text-zinc-400 font-medium text-[11px]">
            {isKurdish ? slideTitles[activeSlide]?.ku : slideTitles[activeSlide]?.en}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#111116] hover:bg-white/[0.06] transition-colors text-xs font-medium text-zinc-300 cursor-pointer"
          >
            <Globe size={12} className="text-zinc-400" />
            <span>{isKurdish ? 'EN' : 'کوردی'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full border border-white/[0.08] bg-[#111116] hover:bg-white/[0.06] transition-colors text-zinc-400 cursor-pointer"
          >
            {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>

          <WireframeCTA href={getWhatsAppUrl()} className="!py-1.5 !px-3 sm:!px-4 !text-[11px]">
            <WhatsAppIcon size={13} />
            <span>{isKurdish ? 'گفتوگۆکردن' : 'Consult'}</span>
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
                } px-2.5 py-1 rounded-md bg-[#111116] border border-white/[0.08] text-[10px] font-medium text-zinc-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
              >
                {slide.num} — {isKurdish ? slide.ku : slide.en}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive ? 'w-1.5 h-6 bg-gradient-to-b from-[#E5E4E2] to-[#D4AF37]' : 'w-1 h-1 bg-white/20 group-hover:bg-white/40'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* ─── Bottom Floating Stepper ────────────────────────────────────────── */}
      <footer className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#111116]/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
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
                activeSlide === idx ? 'w-5 bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37]' : 'w-1 bg-white/20 hover:bg-white/40'
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
        className="w-full h-[100dvh] overflow-y-auto scroll-smooth snap-y snap-proximity lg:snap-mandatory relative z-10"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* ==================================================================== */}
        {/* SLIDE 1: HERO (PAGE 1 VERBATIM)                                      */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[0] = el)}
          id="slide-1"
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-20 overflow-y-auto lg:overflow-hidden bg-[#0A0A0C]"
        >
          <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center my-auto py-2 sm:py-4">
            {/* Minimalist Micro Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-[#111116] mb-6 sm:mb-8 md:mb-10"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-medium text-zinc-200">
                {isKurdish ? 'سیستەمی گەشەی HBgrow' : 'HBGROW GROWTH SYSTEM'}
              </span>
            </motion.div>

            {/* Massive Pure White H1 with Tight Tracking (PDF Page 1) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE_PRO }}
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.25] sm:leading-[1.2] max-w-4xl mb-6 sm:mb-8 ${
                isKurdish ? 'tracking-normal' : 'tracking-tighter'
              }`}
            >
              {isKurdish ? (
                <>
                  ئێمە کار لەسەر هێنانی ڤیو لایکی زۆر ناکەین،{' '}
                  <span className="text-gold">ئێمە کار لەسەر هێنانی کڕیاری زیاتر دەکەین</span>{' '}
                  بۆ بزنسەکەت لە ڕێی سۆشیال میدیاکەتەوە
                </>
              ) : (
                <>
                  We don&apos;t focus on chasing empty views and likes.{' '}
                  <span className="text-gold">We engineer systems that bring real paying customers</span>{' '}
                  to your business through social media.
                </>
              )}
            </motion.h1>

            {/* Sub-headline / Supporting Copy (Body) (PDF Page 1) */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE_PRO }}
              className="text-xs sm:text-base md:text-lg text-zinc-300 max-w-3xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 font-normal"
            >
              {isKurdish
                ? 'لەڕێی بەرهەمهێنانی ستراتیجی تایبەت و دیزاین و ڤیدیۆی تایبەت، وادەکەین پەیجی بزنسەکەت هەم ڕێک و پێک و پرۆفێشناڵ وەک براندێکی پێشکەوتوو دەربکەوێت، هەم بەکاریاندەهێنینەوە بۆ ڕاکێشانی کڕیاری زیاتر بۆ بزنسەکەت لە ڕێی سپۆنسەرکردنی تایبەتەوە.'
                : 'Through tailored strategy, bespoke design, and high-retention video production, we elevate your business profile into a premium market-leading brand, and deploy targeted ad campaigns to consistently attract qualified customers.'}
            </motion.p>

            {/* Asymmetrical Bento Teaser Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE_PRO }}
              className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6 w-full max-w-3xl mb-8 sm:mb-10"
            >
              <SpotlightCard className="p-3 sm:p-5 md:p-6 text-center flex flex-col justify-center items-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">100+</div>
                <div className="text-[10px] sm:text-xs text-zinc-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  {isKurdish ? 'براندی متمانەپێکراو' : 'Trusted Brands'}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-3 sm:p-5 md:p-6 text-center flex flex-col justify-center items-center border-[#D4AF37]/20">
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#D4AF37] tracking-tight">60,000+</div>
                <div className="text-[10px] sm:text-xs text-zinc-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  {isKurdish ? 'بەرهەمهێنانی نامەی کڕیار' : 'Inquiries Generated'}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-3 sm:p-5 md:p-6 text-center flex flex-col justify-center items-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">1,000+</div>
                <div className="text-[10px] sm:text-xs text-zinc-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  {isKurdish ? 'بەرهەمی دیزاین و ڤیدیۆ' : 'Design & Video Assets'}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Subtle Down Indicator */}
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors cursor-pointer pt-2"
            >
              <span>{isKurdish ? 'بۆ بینینی هەنگاوی دووەم دەست لێبدە' : 'Inspect the paradigm shift'}</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 2: ڕێگای کۆن بەرامبەر سیستەمی فرۆشتنی HBgrow (PAGES 1 & 2)       */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[1] = el)}
          id="slide-2"
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#0A0A0C]"
        >
          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col py-4">
            {/* Header: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="inline-block text-xs font-medium text-zinc-200 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-[#111116] mb-4">
                {isKurdish ? 'ڕێگای کۆن بەرامبەر سیستەمی فرۆشتنی HBgrow' : 'OLD PARADIGM VS HBGROW GROWTH SYSTEM'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'زۆربەی بزنسەکان پارە لە سۆشیال میدیا دەسووتێنن، نەک لەبەر ئەوەی بەرهەمەکەیان خراپە... بەڵکو چونکە بە سیستەمی کۆن و هەڵە کار دەکەن.'
                  : 'Most businesses burn cash on social media—not because their product is flawed, but because they run on outdated architectures.'}
              </h2>
            </motion.div>

            {/* Two Glassmorphic Bento Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 mb-6 sm:mb-8">
              {/* Left Bento: Outdated Way */}
              <SpotlightCard className="lg:col-span-5 p-6 sm:p-8 md:p-9 flex flex-col justify-between border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-zinc-300 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08]">
                      {isKurdish ? 'کارتی چەپ: ڕێگای کۆن و باو' : 'THE OUTDATED WAY (FAILING)'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-400 mb-5 font-normal">
                    {isKurdish ? 'ئەیجێنسی / فریلانسی ئاسایی و پۆستکردنی بێ پلان' : 'Generic agencies & unstrategic posting'}
                  </div>

                  <ul className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-1">
                          {isKurdish ? 'دیزاینی وێنەی بێ گیان:' : 'Lifeless Static Designs:'}
                        </strong>
                        <span className="text-zinc-300 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'وێنەیەک کە بە چەند چرکەیەک دیزاین کراوە و لەناو هەزاران پۆستی تردا کەس سەیری ناکات.'
                            : 'Standard static images designed in seconds and scrolled past without registering attention.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-1">
                          {isKurdish ? 'سپۆنسەری بێ ئامانج:' : 'Aimless Boosting:'}
                        </strong>
                        <span className="text-zinc-300 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'تەنها داگرتنی دوگمەی Boost Post و بەفیڕۆدانی بودجە بەبێ هیچ تارگێتێکی دروست.'
                            : 'Blindly clicking Boost Post and burning ad budget with zero targeting data.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-1">
                          {isKurdish ? 'دڵخۆشبوون بە لایک:' : 'Celebrating Vanity Likes:'}
                        </strong>
                        <span className="text-zinc-300 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'گرنگیدان بە ژمارەی ڤیو و لایک، لە کاتێکدا کڕیار پێویستە نامە بنێرێت یان سەردانت بکات.'
                            : 'Focusing on vanity views and likes, while actual paying customers should message or visit.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-zinc-200 block font-semibold mb-1">
                          {isKurdish ? 'نەبوونی ڕێڕەوی فرۆشتن:' : 'Zero Sales Funnel:'}
                        </strong>
                        <span className="text-zinc-300 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'هیچ پلانێک نییە بۆ ئەوەی ئەو کەسەی پۆستەکە دەبینێت چۆن ببێتە کڕیار.'
                            : 'No clear mechanism to transition a casual viewer into a commercial paying buyer.'}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                  <span>{isKurdish ? 'دەرئەنجام:' : 'Commercial Outcome:'}</span>
                  <span className="text-zinc-400 font-semibold">{isKurdish ? 'ماندووبوون بێ قازانج' : 'Negative ROI'}</span>
                </div>
              </SpotlightCard>

              {/* Right Bento: HBgrow Growth System */}
              <SpotlightCard className="lg:col-span-7 p-6 sm:p-8 md:p-9 flex flex-col justify-between border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#D4AF37] px-3 py-1 rounded-md bg-[#D4AF37]/[0.08] border border-[#D4AF37]/20">
                      {isKurdish ? 'کارتی ڕاست: سیستەمی گەشەی HBgrow' : 'THE HBGROW GROWTH SYSTEM'}
                    </span>
                    <Sparkles size={14} className="text-[#D4AF37]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-xs sm:text-sm">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.015] border border-white/[0.03] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-white font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 text-[#D4AF37]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'ڤیدیۆی کوالێتی بەرز:' : 'High-Retention Video:'}</span>
                        </div>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'سیناریۆی سەرنجڕاکێش و دەنگ (Voiceover) کە لە ۳ چرکەی یەکەمدا سەرنجی کڕیار ڕادەکێشێت.'
                            : 'Compelling scripts and professional Kurdish voiceover capturing customer attention in the first 3s.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.015] border border-white/[0.03] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-white font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 text-[#D4AF37]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'کەمپەینی داتامەبەست لە Meta:' : 'Data-Driven Meta Ads:'}</span>
                        </div>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'بەکارهێنانی سیستەمی پێشکەوتووی سپۆنسەر بۆ گەیشتن بەو کەسانەی بەڕاستی توانای کڕینیان هەیە.'
                            : 'Deploying advanced Meta ad systems targeting prospects with verified purchasing capacity.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.015] border border-white/[0.03] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-white font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 text-[#D4AF37]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'فەنەڵی گۆڕینی بینەر بۆ کڕیار:' : 'Direct WhatsApp Funnel:'}</span>
                        </div>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'ئاراستەکردنی بینەر ڕاستەوخۆ بۆ ناو واتسئەپ و نامەکان بە پەیامی ڕوون و ئامادەکراو.'
                            : 'Guiding audience directly to WhatsApp with clear prefilled inquiry triggers.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.015] border border-white/[0.03] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-white font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 text-[#D4AF37]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'ئامانجی ڕوون:' : 'Clear Commercial Goal:'}</span>
                        </div>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'گرنگیدان بە زیادکردنی فرۆشتن و ناوبانگی براندەکەت لە بازاڕدا، نەک تەنها ژمارەی سەر شاشە.'
                            : 'Focusing on scaling real sales and enterprise market authority, not vanity screen digits.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                  <span>{isKurdish ? 'دەرئەنجام:' : 'Commercial Outcome:'}</span>
                  <span className="text-[#D4AF37] font-semibold">{isKurdish ? 'کڕیاری بەردەوام و فرۆشی سەلمێنراو' : 'Predictable Revenue'}</span>
                </div>
              </SpotlightCard>
            </div>

            {/* Bottom Verbatim Conclusion Banner */}
            <SpotlightCard className="p-5 sm:p-6 md:p-7 text-center border-white/[0.05] mt-2 sm:mt-4">
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-medium leading-relaxed max-w-3xl mx-auto">
                {isKurdish
                  ? 'ئەگەر بەردەوام بیت لەسەر هەمان ڕێگای کۆن، هەمان ئەنجامی بێسوودت دەستدەکەوێتەوە. کاتی ئەوەیە سۆشیال میدیاکەت لە ئەرکێکی بێسوودەوە بکەیت بە باشترین سەرمایەی بزنسەکەت'
                  : 'If you continue on the old road, you will keep getting zero return. It is time to turn your social media from a chore into your highest-performing business asset.'}
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 3: بەشی سێیەم: بەڵگە، ئەنجامی مێتا و شایەتی کڕیاران            */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[2] = el)}
          id="slide-3"
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-16 overflow-y-auto lg:overflow-hidden bg-[#0A0A0C] select-none"
        >
          <div className="max-w-5xl w-full mx-auto h-full flex flex-col justify-between py-2 sm:py-4 gap-3 sm:gap-4 lg:gap-5">
            {/* ── Top Header & Minimalist Segmented Control ── */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-block text-[11px] font-mono tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-2">
                {isKurdish ? '٠٣ • بەڵگە و ئەنجامی سەلمێنراو' : '03 • AUDITED RESULTS & PROOF'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1.5 sm:mb-2 ${isKurdish ? 'tracking-normal' : 'tracking-tight'}`}>
                {isKurdish
                  ? 'ئەنجامی کەمپەینەکان و شایەتی براندەکان'
                  : 'Audited Meta Results & Client Reviews'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed mb-4 sm:mb-5">
                {isKurdish
                  ? 'سەیری نموونەی کارەکان، ئەنجامی ڕاستەقینەی کەمپەینەکانی مێتا، و ڕای کڕیارانمان بکە.'
                  : 'Audited Meta Ads dashboards, verified customer feedback, and production creative assets.'}
              </p>

              {/* Minimalist Linear-Style Segmented Control */}
              <div className="inline-flex items-center p-1 rounded-full border border-white/[0.08] bg-[#111116]/80 backdrop-blur-md max-w-full overflow-x-auto">
                <button
                  onClick={() => setProofTab('videos')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'videos'
                      ? 'bg-white/[0.08] text-white border border-white/[0.12] shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'videos' ? 'bg-[#D4AF37] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'ڤیدیۆ ڕیڵ (٥٥+)' : 'Video Reels (55+)'}</span>
                </button>

                <button
                  onClick={() => setProofTab('designs')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'designs'
                      ? 'bg-white/[0.08] text-white border border-white/[0.12] shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'designs' ? 'bg-[#D4AF37] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'گرافیک دیزاین (١٠٠+)' : 'Graphic Design (100+)'}</span>
                </button>

                <button
                  onClick={() => setProofTab('meta')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'meta'
                      ? 'bg-white/[0.08] text-white border border-white/[0.12] shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'meta' ? 'bg-[#D4AF37] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'ئەنجامی مێتا (٥)' : 'Meta Campaigns (5)'}</span>
                </button>

                <button
                  onClick={() => setProofTab('testimonials')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'testimonials'
                      ? 'bg-white/[0.08] text-white border border-white/[0.12] shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'testimonials' ? 'bg-[#D4AF37] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'شایەتی کڕیاران (١١)' : 'Client Reviews (11)'}</span>
                </button>
              </div>
            </div>

            {/* ── Center: Interactive Showcase Cards (Fits in Viewport) ── */}
            <div className="w-full flex-1 flex flex-col justify-center my-auto py-2">
              {/* TAB 1: VIDEO REELS */}
              {proofTab === 'videos' && (
                <motion.div
                  key="tab-videos"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full"
                >
                  {videoIds.slice(0, 4).map((id, index) => {
                    const reelTags = [
                      isKurdish ? 'ڕاگرتنی سەرنج • 3s Hook' : '3s Retention Hook',
                      isKurdish ? 'هێنانی کڕیار • Lead Gen' : 'Inbound Lead Engine',
                      isKurdish ? 'فرۆشی ڕاستەوخۆ • Sales' : 'Direct Meta Conversion',
                      isKurdish ? 'ئەلگۆریتم • Velocity' : 'Algorithmic Distribution',
                    ];
                    return (
                      <div
                        key={id}
                        onClick={() => setActiveVideo(id)}
                        className="group relative h-[230px] sm:h-[260px] md:h-[290px] lg:h-[35vh] lg:max-h-[310px] min-h-[200px] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-500 bg-[#111116] shadow-md hover:-translate-y-1"
                      >
                        {/* High-res Thumbnail */}
                        <img
                          src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                          onError={(e) => {
                            if (e.target.src.includes('maxresdefault')) {
                              e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                            }
                          }}
                          alt="HBgrow Video Reel Example"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
                          loading="lazy"
                        />
                        {/* Pure Minimal Scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-[#0A0A0C]/40 pointer-events-none" />

                        {/* Top Clean Number */}
                        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
                          <span className="text-[10px] font-mono text-zinc-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                            0{index + 1}
                          </span>
                        </div>

                        {/* Minimalist Frosted Play Circle */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0C] group-hover:border-transparent transition-all duration-300">
                            <Play size={14} className="translate-x-0.5 fill-current" />
                          </div>
                        </div>

                        {/* Bottom Clean Caption */}
                        <div className="absolute bottom-2.5 inset-x-2.5 z-10 text-start">
                          <div className="text-[10px] font-medium text-[#D4AF37] truncate">
                            {reelTags[index]}
                          </div>
                          <div className="text-[11px] font-semibold text-white truncate">
                            HBgrow Agency
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* TAB 2: GRAPHIC DESIGNS */}
              {proofTab === 'designs' && (
                <motion.div
                  key="tab-designs"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 w-full"
                >
                  {designs.slice(0, 4).map((src) => (
                    <div
                      key={src}
                      onClick={() => setActiveImg(src)}
                      className="group relative h-[230px] sm:h-[260px] md:h-[290px] lg:h-[35vh] lg:max-h-[310px] min-h-[200px] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-500 bg-[#111116] shadow-md hover:-translate-y-1"
                    >
                      <img
                        src={src}
                        alt="HBgrow Graphic Design Asset"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <div className="flex items-center justify-between w-full text-xs text-white">
                          <span className="font-medium text-[11px]">{isKurdish ? 'تەماشاکردنی دیزاین' : 'Inspect Design'}</span>
                          <Maximize2 size={13} className="text-[#D4AF37]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TAB 3: AUDITED META CAMPAIGN RESULTS (FROM STATSBANNER) */}
              {proofTab === 'meta' && (
                <motion.div
                  key="tab-meta"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 w-full items-stretch"
                >
                  {/* Left / Main: The Meta Ads Manager macOS Window */}
                  <div className="lg:col-span-8 flex flex-col">
                    <MacOSWindow
                      title={`Meta Ads Manager — ${adResults[activeMetaIndex].messages} Inquiries`}
                      url="business.facebook.com/adsmanager"
                      className="h-full flex flex-col justify-between"
                    >
                      {/* Window Header Info */}
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.04]">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/30 text-[10px] font-medium text-[#27C93F]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                            {isKurdish ? 'داتای پشکنراوی مێتا' : 'VERIFIED META TELEMETRY'}
                          </span>
                          <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                            {isKurdish ? `کەمپەینی ٠${activeMetaIndex + 1}` : `Campaign 0${activeMetaIndex + 1}`}
                          </span>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setActiveMetaIndex((prev) => (prev === 0 ? adResults.length - 1 : prev - 1))}
                            className="w-7 h-7 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
                            aria-label="Previous Campaign"
                          >
                            <ChevronLeft size={14} />
                          </button>
                          <span className="text-[11px] font-mono text-zinc-400 px-1">
                            0{activeMetaIndex + 1} / 0{adResults.length}
                          </span>
                          <button
                            onClick={() => setActiveMetaIndex((prev) => (prev === adResults.length - 1 ? 0 : prev + 1))}
                            className="w-7 h-7 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
                            aria-label="Next Campaign"
                          >
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Main Campaign Image with Click to Zoom */}
                      <div
                        onClick={() => setActiveImg(adResults[activeMetaIndex].img)}
                        className="group relative w-full h-[22vh] min-h-[160px] max-h-[220px] rounded-xl overflow-hidden bg-black/40 border border-white/[0.06] cursor-pointer flex items-center justify-center"
                      >
                        <img
                          key={adResults[activeMetaIndex].img}
                          src={adResults[activeMetaIndex].img}
                          alt="Meta Ads Campaign Dashboard"
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <span className="text-xs font-semibold text-white bg-black/75 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 backdrop-blur-md">
                            <Maximize2 size={12} className="text-[#D4AF37]" />
                            {isKurdish ? 'بۆ گەورەکردن دەست لێبدە' : 'Click to Inspect Fullscreen'}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Campaign Telemetry Metrics */}
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-white/[0.04]">
                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                            <MessageCircle size={16} />
                          </div>
                          <div>
                            <div className="text-[10px] text-zinc-400 font-medium">
                              {isKurdish ? 'نامەی ڕاستەقینەی کڕیار' : 'Inbound Inquiries'}
                            </div>
                            <div className="text-base sm:text-lg font-extrabold text-[#D4AF37] font-mono leading-tight">
                              {adResults[activeMetaIndex].messages}
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 shrink-0">
                            <Eye size={16} />
                          </div>
                          <div>
                            <div className="text-[10px] text-zinc-400 font-medium">
                              {isKurdish ? 'ڕێژەی بینینی ئامانجدار' : 'Targeted Impressions'}
                            </div>
                            <div className="text-base sm:text-lg font-extrabold text-white font-mono leading-tight">
                              {adResults[activeMetaIndex].impressions}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Campaign Selector Dots */}
                      <div className="flex items-center justify-center gap-1.5 mt-2.5">
                        {adResults.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveMetaIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              activeMetaIndex === idx
                                ? 'w-6 bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37]'
                                : 'w-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`Jump to campaign ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </MacOSWindow>
                  </div>

                  {/* Right Column: High-Level Benchmarks & Spend Proof Sheets */}
                  <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-white/[0.08]">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-semibold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 uppercase">
                            {isKurdish ? 'ئەنجامی سەلمێنراو' : 'VERIFIED ROI'}
                          </span>
                          <BarChart2 size={13} className="text-[#D4AF37]" />
                        </div>
                        <div className="text-base sm:text-lg font-extrabold text-white mt-1">
                          {isKurdish ? '٣٥ ملیۆن+ بینەری کڕیار' : '35M+ Targeted Views'}
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {isKurdish
                            ? 'بەڕێوەبردنی $٢٠,٠٠٠+ بودجەی ساڵانەی سپۆنسەر بە کەمترین تێچووی نامە—تا $٠.٠٦ بۆ هەر کڕیارێک.'
                            : '$20,000+ managed Meta budget yielding direct buyer acquisition at $0.06 cost per inquiry.'}
                        </p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs">
                        <span className="text-zinc-500">{isKurdish ? 'تێچووی نامە:' : 'Lead Cost:'}</span>
                        <span className="text-[#D4AF37] font-mono font-semibold">$0.06 - $0.12</span>
                      </div>
                    </SpotlightCard>

                    {/* Spend Proof Gamma Sheets (Clickable) */}
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-white/[0.08]">
                      <div>
                        <div className="text-[11px] font-semibold text-zinc-300 uppercase mb-2 flex items-center justify-between">
                          <span>{isKurdish ? 'بەڵگەی خەرجی و داتاکان' : 'AUDITED SPEND DATA'}</span>
                          <span className="text-[10px] text-zinc-500 font-mono">2 SHEETS</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {dataProofImages.map((src, i) => (
                            <div
                              key={i}
                              onClick={() => setActiveImg(src)}
                              className="group relative h-16 sm:h-20 rounded-xl overflow-hidden bg-black/60 border border-white/[0.08] cursor-pointer"
                            >
                              <img
                                src={src}
                                alt={`Data Proof ${i + 1}`}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 size={13} className="text-[#D4AF37]" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-2 text-center">
                        {isKurdish ? 'دەست لێبدە بۆ بینینی خەرجییەکان' : 'Tap to inspect live ad spend sheets'}
                      </div>
                    </SpotlightCard>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: CLIENT TESTIMONIALS (FROM TESTIMONIALS SECTION) */}
              {proofTab === 'testimonials' && (
                <motion.div
                  key="tab-testimonials"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 w-full items-stretch"
                >
                  {/* Left / Main: The Active Testimonial Spotlight Card */}
                  <div className="lg:col-span-8 flex flex-col">
                    <SpotlightCard className="p-5 sm:p-6 md:p-7 h-full flex flex-col justify-between border-white/[0.08]">
                      {/* Top Bar: Stars, Source Badge, and Navigation */}
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.04]">
                          {/* Stars */}
                          <div className="flex items-center gap-1.5">
                            <div className="flex items-center gap-0.5 text-[#D4AF37]">
                              {Array.from({ length: testimonialsList[activeTestimonialIndex]?.rating || 5 }).map((_, i) => (
                                <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                              ))}
                            </div>
                            <span className="text-xs font-mono text-zinc-300 ms-1 font-bold">5.0</span>
                            <span className="text-[10px] text-zinc-500 hidden sm:inline">
                              ({isKurdish ? 'هەڵسەنگاندنی ئەم کڕیارە' : 'Client Rating'})
                            </span>
                          </div>

                          {/* Source & Controls */}
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] text-zinc-400 font-medium">
                              {testimonialsList[activeTestimonialIndex]?.source === 'Facebook' ? 'Facebook Review' : 'Verified Message'}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() =>
                                  setActiveTestimonialIndex((prev) =>
                                    prev === 0 ? testimonialsList.length - 1 : prev - 1
                                  )
                                }
                                className="w-7 h-7 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
                                aria-label="Previous Review"
                              >
                                <ChevronLeft size={14} />
                              </button>
                              <span className="text-[11px] font-mono text-zinc-400 px-1">
                                0{activeTestimonialIndex + 1} / {testimonialsList.length}
                              </span>
                              <button
                                onClick={() =>
                                  setActiveTestimonialIndex((prev) =>
                                    prev === testimonialsList.length - 1 ? 0 : prev + 1
                                  )
                                }
                                className="w-7 h-7 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
                                aria-label="Next Review"
                              >
                                <ChevronRight size={14} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Quote Text */}
                        <div className="relative py-2 sm:py-3">
                          <Quote
                            size={36}
                            className="text-[#D4AF37]/20 absolute -top-2 start-0 pointer-events-none"
                          />
                          <p className="text-sm sm:text-base md:text-[17px] text-white font-medium leading-relaxed relative z-10 ps-3 sm:ps-4">
                            «{testimonialsList[activeTestimonialIndex]?.text}»
                          </p>
                        </div>
                      </div>

                      {/* Author Info & Client Quick Pills */}
                      <div className="mt-4 pt-3 border-t border-white/[0.04]">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#111116] to-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                              {testimonialsList[activeTestimonialIndex]?.initials || 'HB'}
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-white">
                                {testimonialsList[activeTestimonialIndex]?.name}
                              </div>
                              <div className="text-[11px] text-zinc-400">
                                {testimonialsList[activeTestimonialIndex]?.role || (isKurdish ? 'کڕیاری سەلمێنراو' : 'Verified Client')}
                              </div>
                            </div>
                          </div>

                          <div className="text-[11px] text-[#27C93F] flex items-center gap-1.5 font-medium bg-[#27C93F]/10 px-2.5 py-1 rounded-full border border-[#27C93F]/20">
                            <Check size={11} />
                            <span>{isKurdish ? 'شایەتی ڕاستەقینە' : 'Audited Client'}</span>
                          </div>
                        </div>

                        {/* Quick Client Selection Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                          {testimonialsList.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveTestimonialIndex(idx)}
                              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                                activeTestimonialIndex === idx
                                  ? 'bg-[#D4AF37] !text-[#0A0A0C] font-bold shadow-sm'
                                  : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06]'
                              }`}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>

                  {/* Right Column: Authority Stats & Highlight Snippets */}
                  <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
                    {/* Trust Summary Card */}
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-[#D4AF37]/20">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                            {isKurdish ? 'تێکڕای ڕەزامەندی کڕیاران' : 'VERIFIED CLIENT CSAT'}
                          </span>
                          <Sparkles size={13} className="text-[#D4AF37]" />
                        </div>

                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tracking-tight font-mono">
                            4.9
                          </span>
                          <span className="text-xs font-mono text-zinc-500 font-semibold">/ 5.0</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#27C93F]/10 border border-[#27C93F]/20 text-[10px] text-[#27C93F] font-medium ms-auto">
                            {isKurdish ? 'سەلمێنراو' : 'Audited'}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 my-1.5 flex-wrap">
                          <div className="flex items-center gap-0.5 text-[#D4AF37]">
                            {[1, 2, 3, 4].map((i) => (
                              <Star key={i} size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                            ))}
                            {/* 5th partial star (85% gold fill for authentic 4.9 rating) */}
                            <svg width={12} height={12} viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
                              <defs>
                                <linearGradient id="pitchDeckPartialStar" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="85%" stopColor="#D4AF37" />
                                  <stop offset="85%" stopColor="#3f3f46" stopOpacity="0.45" />
                                </linearGradient>
                              </defs>
                              <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                fill="url(#pitchDeckPartialStar)"
                                stroke="#D4AF37"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-xs text-zinc-300 font-medium ms-1">
                            {isKurdish ? '٩٨.٤٪ ڕەزامەندی' : '98.4% CSAT'}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            ({isKurdish ? '١٢٠+ هەڵسەنگاندن' : '120+ reviews'})
                          </span>
                        </div>

                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {isKurdish
                            ? 'تێکڕای هەڵسەنگاندنی زیاتر لە ١٢٠+ براند لە کوردستان و عێراق لەسەر خێرایی کەمپەین، کوالێتی بەرهەمهێنان و گەڕانەوەی وەبەرهێنان (ROI).'
                            : 'Aggregated rating across 120+ regional businesses based on campaign velocity, creative fidelity, and direct pipeline ROI.'}
                        </p>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-white/[0.04] grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-[10px] text-zinc-500">{isKurdish ? 'براندی چالاک:' : 'Active Retainers:'}</div>
                          <div className="text-white font-mono font-semibold">100+</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-zinc-500">{isKurdish ? 'بەردەوامی کڕیار:' : 'Retention Rate:'}</div>
                          <div className="text-[#27C93F] font-mono font-semibold">96%</div>
                        </div>
                      </div>
                    </SpotlightCard>

                    {/* Next Review Preview */}
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-white/[0.06]">
                      <div>
                        <div className="text-[10px] font-semibold text-zinc-400 uppercase mb-1">
                          {isKurdish ? 'شایەتییەکی تر:' : 'NEXT CLIENT REVIEW:'}
                        </div>
                        <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                          «{testimonialsList[(activeTestimonialIndex + 1) % testimonialsList.length]?.text}»
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setActiveTestimonialIndex((prev) => (prev + 1) % testimonialsList.length)
                        }
                        className="mt-2 text-start text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isKurdish ? 'خوێندنەوەی ئەم شایەتییە' : 'Read full quote'}</span>
                        {isRTL ? <ArrowLeft size={11} /> : <ArrowRight size={11} />}
                      </button>
                    </SpotlightCard>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Ambient Partner Logos Ticker (Ultra-Subtle Borderless Watermark) ── */}
            <div className="w-full overflow-hidden relative py-2 sm:py-3 my-1 opacity-25 hover:opacity-75 transition-opacity">
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
              <div className="marquee-track flex items-center gap-8 whitespace-nowrap" style={{ animationDuration: '45s' }}>
                {[...clients, ...clients].map((src, i) => (
                  <div key={i} className="h-4 sm:h-5 flex items-center shrink-0">
                    <img
                      src={src}
                      alt="Brand Partner"
                      className="h-full w-auto object-contain filter grayscale brightness-150"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Unified Minimalist Luxury Dock with Real Client Testimonial Ticker ── */}
            <div className="w-full p-3 sm:px-5 sm:py-2.5 rounded-2xl border border-white/[0.08] bg-[#111116]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <button
                onClick={() => setProofTab('testimonials')}
                className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 truncate text-start cursor-pointer hover:text-white transition-colors group flex-1 max-w-full"
                aria-label="View Client Testimonials"
              >
                <Quote size={13} className="text-[#D4AF37] shrink-0" />
                <span className="truncate">
                  «{testimonialsList[dockReviewIndex]?.text}»
                </span>
                <span className="text-[11px] font-semibold text-white shrink-0 hidden sm:inline">
                  — {testimonialsList[dockReviewIndex]?.name}
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37] font-semibold shrink-0 hidden md:inline px-2 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  4.9 ★ CSAT
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#D4AF37] transition-colors shrink-0 underline ms-1 hidden lg:inline">
                  {isKurdish ? 'بینینی شایەتییەکان' : 'View Reviews'}
                </span>
              </button>

              <button
                onClick={() => setShowArchiveModal(true)}
                className="w-full sm:w-auto justify-center px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-xs font-semibold text-white transition-all cursor-pointer flex items-center gap-2 shrink-0 hover:border-[#D4AF37]/50"
              >
                <Grid size={13} className="text-[#D4AF37]" />
                <span>{isKurdish ? 'ئەرشیفی ١٥٠+ کار' : 'All 150+ Archive'}</span>
                {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* ==================================================================== */}
        {/* SLIDE 4: بەشی چوارەم: پاکێجەکان و وەبەرهێنان (PAGES 4 & 5)           */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[3] = el)}
          id="slide-4"
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#0A0A0C]"
        >
          {/* Subtle Ambient Back-Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-[#D4AF37]/[0.06] via-transparent to-transparent blur-3xl opacity-80" />

          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col items-center py-4 relative z-10">
            {/* Header: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] px-4 py-1.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] mb-3 sm:mb-4 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                <Sparkles size={13} className="text-[#D4AF37]" />
                <span>{isKurdish ? 'بەشی چوارەم: پاکێجەکان و وەبەرهێنان' : 'PART 04: PACKAGES & INVESTMENT TIERS'}</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-snug sm:leading-tight mb-3 sm:mb-4 ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'وەبەرهێنان لە سیستەمی فرۆشتندا، نەک خەرجییەکی بێسوود.'
                  : 'Invest in a client acquisition engine, not dead overhead.'}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
                {isKurdish
                  ? 'سیستەمێک هەڵبژێرە کە گەشە بە بزنسەکەت دەدات — لە تاقیکردنەوەی خێرای مانگانەوە تا کۆنترۆڵکردنی تەواوەتی بازاڕ.'
                  : 'Select the tier built to scale your enterprise — from initial 30-day speed validation to quarterly market dominance.'}
              </p>

              {/* High-End Quick Comparison Indicator */}
              <div className="inline-flex items-center gap-2 sm:gap-3 p-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] sm:text-xs text-zinc-400 mt-5 backdrop-blur-md">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 font-medium">
                  {isKurdish ? '١ مانگە: تاقیکردنەوەی کوالێتی' : '1 Month: Quality Test'}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <Crown size={12} className="text-[#D4AF37]" />
                  {isKurdish ? '٣ مانگە: پاشەکەوتی ١٤٪ ($213/مانگ)' : '3 Months: Save 14% ($213/mo)'}
                </span>
              </div>
            </motion.div>

            {/* Pricing Cards Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 items-stretch mb-6 sm:mb-8">
              {/* Card 1: Growth */}
              <SpotlightCard className="p-6 sm:p-8 md:p-9 flex flex-col justify-between border-white/[0.08] bg-[#0E0E13]/90 rounded-[28px] sm:rounded-[32px] hover:border-white/[0.16] transition-all relative overflow-hidden group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
                      {isKurdish ? 'کارتی یەکەم: Growth' : 'Tier 01: Growth'}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400 px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
                      {isKurdish ? 'گەشەسەندن - مانگانە' : 'Monthly Retainer'}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="mb-4 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        225$
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-zinc-400">
                        {isKurdish ? '/ مانگانە' : '/ Month'}
                      </span>
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-400 font-medium mt-2">
                      {isKurdish ? '(نزیکەی 338,000 دیناری عێراقی)' : '(~338,000 IQD)'}
                    </div>
                  </div>

                  {/* Objective Box */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-zinc-300 mb-5 font-normal leading-relaxed">
                    <div className="flex items-center gap-2 text-zinc-300 font-semibold mb-1 text-xs uppercase tracking-wide">
                      <Clock size={13} className="text-zinc-400" />
                      <span>{isKurdish ? 'ئامانج:' : 'Objective:'}</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed font-normal">
                      {isKurdish
                        ? 'گونجاوە بۆ تاقیکردنەوەی خێرایی و کوالێتی تیمەکەمان.'
                        : 'Ideal for testing our team’s speed, creative output, and production quality.'}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      {isKurdish ? 'خزمەتگوزارییەکان:' : 'Deliverables:'}
                    </div>

                    {/* Item 1 */}
                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.015] border border-white/[0.03] hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">
                            {isKurdish ? '٦ ڤیدیۆ ڕیڵ' : '6 Video Reels'}
                          </span>
                          <span className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed block mt-0.5">
                            {isKurdish
                              ? 'ڤیدیۆی کوالێتی بەرز بۆ زیادکردنی فرۆش.'
                              : 'High-retention reels engineered for sales.'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] shrink-0">
                        6x Reels
                      </span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.015] border border-white/[0.03] hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">
                            {isKurdish ? '٦ گرافیک دیزاین' : '6 Graphic Designs'}
                          </span>
                          <span className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed block mt-0.5">
                            {isKurdish
                              ? 'پۆستی وێنە و سلاید بۆ زانیاری و براندینگ.'
                              : 'Feed carousels & editorial brand visuals.'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] shrink-0">
                        6x Visuals
                      </span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.015] border border-white/[0.03] hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">
                            {isKurdish ? 'پلاندانان و کاپشن' : 'Planning & Copywriting'}
                          </span>
                          <span className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed block mt-0.5">
                            {isKurdish
                              ? 'نووسینی تێکستی سەرنجڕاکێش بۆ هەر پۆستێک.'
                              : 'Engaging sales hooks & custom captions.'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] shrink-0">
                        Copywriting
                      </span>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.015] border border-white/[0.03] hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">
                            {isKurdish ? 'دەنگخستنەسەر (Voiceover)' : 'Studio Voiceover'}
                          </span>
                          <span className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed block mt-0.5">
                            {isKurdish
                              ? 'بەپێی پێویستی سیناریۆکان.'
                              : 'Professional studio voice recording.'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] shrink-0">
                        Voiceover
                      </span>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.015] border border-white/[0.03] hover:border-white/[0.08] transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                          <Check size={11} strokeWidth={2.5} />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">
                            {isKurdish ? 'بەڕێوەبردنی کەمپەینی سپۆنسەر' : 'Meta Ads Campaign'}
                          </span>
                          <span className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed block mt-0.5">
                            {isKurdish
                              ? 'سپۆنسەرکردن بۆ ڕاکێشانی کڕیار لە مێتا.'
                              : 'Lead acquisition & targeted Meta ad setup.'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] shrink-0">
                        Meta Ads
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 1 CTA */}
                <div className="mt-6 pt-5 border-t border-white/[0.04] flex flex-col gap-2.5">
                  <div className="text-xs text-zinc-400 font-medium text-center">
                    {isKurdish ? '(ئەم پاکێجە بۆ یەک مانگە)' : '(1 Month Package)'}
                  </div>
                  <WireframeCTA
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth ($225 / مانگانە) دەستپێبکەم بۆ براندەکەم.'
                        : 'Hello HBgrow, I would like to start with the Growth tier ($225/mo).'
                    )}
                    className="w-full !py-3.5 sm:!py-4 text-xs sm:text-sm font-semibold"
                  >
                    <WhatsAppIcon size={15} />
                    <span>{isKurdish ? 'دەستپێکردنی پاکێجی مانگانە' : 'Select Growth Tier'}</span>
                  </WireframeCTA>
                </div>
              </SpotlightCard>

              {/* Card 2: Growth+ (Hero Flagship Tier) */}
              <div className="relative group flex flex-col">
                {/* Golden Diffuse Backlight Aura */}
                <div className="pointer-events-none absolute -inset-[2px] rounded-[34px] bg-gradient-to-b from-[#D4AF37]/45 via-[#D4AF37]/15 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

                <SpotlightCard className="p-6 sm:p-8 md:p-9 flex flex-col justify-between border-[#D4AF37]/50 bg-gradient-to-b from-[#14120B]/98 via-[#0E0E13]/98 to-[#0B0B0F]/98 rounded-[28px] sm:rounded-[32px] relative overflow-hidden shadow-[0_0_50px_-12px_rgba(212,175,55,0.3)] h-full">
                  {/* Top Razor-Thin Gold Light Ray */}
                  <div className="pointer-events-none absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_12px_#D4AF37]" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                          {isKurdish ? 'کارتی دووەم: Growth+' : 'Tier 02: Growth+'}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0A0A0C] bg-[#D4AF37] px-2.5 py-0.5 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                          <Crown size={11} className="fill-current" />
                          {isKurdish ? 'باشترین هەڵبژاردە' : 'BEST VALUE'}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#D4AF37] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                        {isKurdish ? 'داشکاندنی ١٤٪' : '-14% SAVINGS'}
                      </span>
                    </div>

                    {/* Price Block */}
                    <div className="mb-4 pb-4 border-b border-white/[0.06]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#D4AF37] tracking-tight">
                          640$
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-zinc-300">
                          {isKurdish ? '/ بۆ سێ مانگ' : '/ 3 Months'}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A0A0C] bg-[#D4AF37] px-2.5 py-0.5 rounded-md shadow-sm">
                          <Zap size={11} className="fill-current" />
                          {isKurdish ? 'تەنیا 213$ بۆ هەر مانگێک!' : 'Only $213 per month!'}
                        </span>
                        <span className="text-xs text-zinc-300 font-medium">
                          {isKurdish ? '(نزیکەی 960,000 دینار)' : '(~960,000 IQD)'}
                        </span>
                      </div>
                    </div>

                    {/* Objective Box */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#D4AF37]/[0.06] border border-[#D4AF37]/25 text-xs sm:text-sm text-zinc-200 mb-5 font-normal leading-relaxed">
                      <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mb-1 text-xs uppercase tracking-wide">
                        <Sparkles size={13} />
                        <span>{isKurdish ? 'ئامانج:' : 'Objective:'}</span>
                      </div>
                      <p className="text-zinc-300 leading-relaxed font-normal">
                        {isKurdish
                          ? 'بۆ ئەو براندانەی دەیانەوێت بازاڕ کۆنترۆڵ بکەن و قازانجێکی زیاتر بکەن.'
                          : 'For brands aiming to dominate market share, retain sustained visibility, and maximize bottom-line profit.'}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-sm">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                        {isKurdish ? 'خزمەتگوزارییەکان (٣ هێندە بەرهەم):' : 'Deliverables (3X Multiplier):'}
                      </div>

                      {/* Item 1 */}
                      <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-white block">
                              {isKurdish ? '١٨ ڤیدیۆ ڕیڵ (٣ هێندە)' : '18 Video Reels (3X Scale)'}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed block mt-0.5">
                              {isKurdish
                                ? 'هێرشی بەردەوام بۆ سەرنجڕاکێشانی بینەر.'
                                : 'Continuous distribution for high attention and conversion.'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                          18x Reels • 3X
                        </span>
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-white block">
                              {isKurdish ? '١٨ گرافیک دیزاین (٣ هێندە)' : '18 Graphic Designs (3X Scale)'}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed block mt-0.5">
                              {isKurdish
                                ? 'پۆستی وێنە و سلاید بۆ زانیاری و براندینگ.'
                                : 'High-impact feed graphics, carousels & branding.'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                          18x Visuals • 3X
                        </span>
                      </div>

                      {/* Item 3 */}
                      <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-white block">
                              {isKurdish ? 'پلاندانان و کاپشن بۆ ٣ مانگ' : 'Planning & Copywriting (90 Days)'}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed block mt-0.5">
                              {isKurdish
                                ? 'سیستەمێکی ئامادەکراو بۆ چارەکێکی ساڵ (٩٠ ڕۆژ).'
                                : 'Turnkey quarterly roadmap with proven sales copy.'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                          90 Days DFY
                        </span>
                      </div>

                      {/* Item 4 */}
                      <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-white block">
                              {isKurdish ? 'دەنگخستنەسەر (Voiceover)' : 'Studio Voiceover'}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed block mt-0.5">
                              {isKurdish
                                ? 'دەنگی کوالێتی بەرز بۆ سەرجەم ڤیدیۆکان.'
                                : 'Tailored studio audio recorded for all 18 reels.'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                          All Reels Included
                        </span>
                      </div>

                      {/* Item 5 */}
                      <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-white block">
                              {isKurdish ? 'کەمپەینی سپۆنسەرکردنی زیرەک' : 'Smart Meta Ad Strategy'}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed block mt-0.5">
                              {isKurdish
                                ? 'بەڕێوەبردنی زیرەکانەی سپۆنسەرەکان بۆ زۆرترین فرۆشتن.'
                                : 'Advanced Meta ad optimization for highest ROAS.'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                          ROAS Optimization
                        </span>
                      </div>

                      {/* Item 6: VIP Priority */}
                      <div className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <div className="h-5 w-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-white block">
                              {isKurdish ? 'کەناڵی تایبەتی ئەولەویەت' : 'VIP Priority Access'}
                            </span>
                            <span className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed block mt-0.5">
                              {isKurdish
                                ? 'پەیوەندی ڕاستەوخۆ و ئەولەویەت لە جێبەجێکردندا.'
                                : 'Direct communication channel & zero-queue execution.'}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/25 shrink-0">
                          VIP Priority
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 CTA */}
                  <div className="mt-6 pt-5 border-t border-white/[0.04] flex flex-col gap-2.5">
                    <div className="text-xs text-zinc-400 font-medium text-center">
                      {isKurdish ? '(ئەم پاکێجە بۆ سێ مانگە — بەردەوامی و گەشەی مسۆگەر)' : '(3 Months Package — Compounding Growth)'}
                    </div>
                    <WireframeCTA
                      href={getWhatsAppUrl(
                        isKurdish
                          ? 'سڵاو HBgrow، دەمەوێت پاکێجی Growth+ ($640 / ٣ مانگە) دەستپێبکەم بۆ براندەکەم.'
                          : 'Hello HBgrow, I would like to start with the Growth+ quarterly tier ($640/3mo).'
                      )}
                      isPrimary={true}
                      className="w-full !py-3.5 sm:!py-4 text-xs sm:text-sm font-semibold"
                    >
                      <WhatsAppIcon size={15} />
                      <span>{isKurdish ? 'دەستپێکردنی پاکێجی ٣ مانگە' : 'Select Growth+ Tier'}</span>
                    </WireframeCTA>
                  </div>
                </SpotlightCard>
              </div>
            </div>

            {/* Institutional Transparency & SLA Guarantees (2 Bento Cards) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 mb-4 text-start">
              {/* Card A: Meta Ad Spend Transparency */}
              <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0E0E13]/90 backdrop-blur-md flex items-start gap-4 hover:border-white/[0.15] transition-colors">
                <div className="h-9 w-9 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                  <Shield size={18} />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">
                      {isKurdish ? 'شەفافیەتی بودجەی سپۆنسەر (Meta Ad Spend)' : 'Direct Meta Ad Spend Guarantee'}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-xs">
                    {isKurdish
                      ? 'پاکێجەکانی سەرەوە تەنیا تێچووی بەڕێوەبردن و بەرهەمهێنانی داهێنەرانەی HBgrow دەگرنەوە. بودجەی سپۆنسەر (Meta Ad Spend) بە تەواوی جیاوازە، لەلایەن کڕیارەوە دیاری دەکرێت و ڕاستەوخۆ دەدرێت بە کۆمپانیای مێتا بەبێ هیچ خەرجییەکی شاراوە.'
                      : 'The packages above cover HBgrow’s management and creative production. The Sponsorship Budget (Meta Ad Spend) is completely separate, determined by the client, and paid directly to Meta with zero hidden fees.'}
                  </p>
                  <span className="inline-block mt-2.5 text-[10px] font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    {isKurdish ? '100% Direct Invoicing • بێ کۆمیسیۆنی شاراوە' : '100% Direct Invoicing • 0% Hidden Markup'}
                  </span>
                </div>
              </div>

              {/* Card B: Execution SLA & Quality Protocol */}
              <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0E0E13]/90 backdrop-blur-md flex items-start gap-4 hover:border-white/[0.15] transition-colors">
                <div className="h-9 w-9 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#D4AF37]">
                  <Zap size={18} />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">
                      {isKurdish ? 'پرۆتۆکۆڵی کوالێتی و خێرایی جێبەجێکردن' : 'Execution Velocity & Quality SLA'}
                    </span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-xs">
                    {isKurdish
                      ? 'دەستپێکردنی خێرای پرۆسەی بەرهەمهێنان لە کەمتر لە ٧٢ کاتژمێردا. مافی پێداچوونەوە و پەسەندکردنی تەواوی سیناریۆ، ڤیدیۆ و دیزاینەکان پێش بڵاوکردنەوە بۆ دڵنیابوون لە کوالێتی ١٠٠٪ بەپێی ستانداردەکانی براندەکەت.'
                      : 'Rapid onboarding and asset creation within 72 hours. Complete review and approval protocol on all scripts, reels, and graphic assets before public release.'}
                  </p>
                  <span className="inline-block mt-2.5 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {isKurdish ? '72h Deployment • گەرەنتی پەسەندکردن' : '72h Deployment • Client Approval SLA'}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Trust Indicators */}
            <div className="w-full p-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium text-zinc-300">
                  {isKurdish ? 'شێوازە باوەڕپێکراوەکانی پارەدان لە عێراق و کوردستان:' : 'Accepted Settlement Channels:'}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                <StealthFIBLogo className="h-5 w-auto" />
                <StealthFastPayLogo className="h-5 w-auto" />
                <StealthQiCardLogo className="h-5 w-auto" />
                <StealthAsiaPayLogo className="h-5 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 5: بەشی پێنجەم: دروستکردنی پلانی تایبەت (PAGES 5 & 6)          */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[4] = el)}
          id="slide-5"
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#0A0A0C]"
        >
          <div className="max-w-5xl w-full mx-auto my-auto flex flex-col items-center py-4">
            {/* Header: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="inline-block text-xs font-semibold text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] mb-3 sm:mb-4">
                {isKurdish ? 'بەشی پێنجەم: دروستکردنی پلانی تایبەت (The Smart Calculator)' : 'THE SMART CALCULATOR'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'کۆنترۆڵی خەرجییەکانت بکە. تەنیا پارەی ئەو خزمەتگوزارییە بدە کە پێویستتە.'
                  : 'Take control of your expenditure. Pay only for the deliverables you require.'}
              </h2>
              {/* Sub-headline */}
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mt-3 leading-relaxed font-normal">
                {isKurdish
                  ? 'ئەگەر پێویستت بە پاکێجی تەواوی مانگانە نییە، یان دەتەوێت خزمەتگوزاری زیاتر بۆ پاکێجەکەت زیاد بکەیت، لە ڕێگەی ئەم ژمێرەرە زیرەکەوە پلانی تایبەت بە بزنسەکەت دابڕێژە. بێ گرێبەستی ئاڵۆز، بێ خەرجی شاراوە.'
                  : 'If you don’t need a full monthly package or want to supplement your current scope, design your bespoke plan with this smart calculator. Zero complex contracts, zero hidden costs.'}
              </p>
            </motion.div>

            {/* 3 Calculator Items */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 mb-6 sm:mb-8">
              {/* Item 1 */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <Camera size={20} className="text-[#D4AF37]" />
                    <span className="text-xs text-[#D4AF37] font-bold">١١٠,٠٠٠ دینار</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                    {isKurdish ? '📸 ڤیدیۆی پرۆفیشناڵ بە کامێرا' : 'Camera Videography'}
                  </h3>
                  <div className="text-xs font-medium text-zinc-200 mb-3">
                    {isKurdish ? 'نرخ: ١١٠,٠٠٠ دینار (بۆ هەر سەردانێک / ٣ تا ٤ ڤیدیۆ)' : '110,000 IQD per session (3-4 videos)'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {isKurdish
                      ? 'هێنانی تیمی وێنەگرتنی پرۆفیشناڵ بۆ ناو شوێنی کارەکەت بە باشترین کوالێتی.'
                      : 'Deploying our professional video crew to your business location with cinema-grade quality.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">{isKurdish ? 'ژمارەی سەردان:' : 'Sessions:'}</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setCameraSessions((prev) => Math.max(0, prev - 1))}
                      disabled={cameraSessions === 0}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
                      aria-label="Decrease camera sessions"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-bold text-sm sm:text-base text-white font-mono">{cameraSessions}</span>
                    <button
                      onClick={() => setCameraSessions((prev) => prev + 1)}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
                      aria-label="Increase camera sessions"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>

              {/* Item 2 */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <Video size={20} className="text-[#D4AF37]" />
                    <span className="text-xs text-[#D4AF37] font-bold">٣٠,٠٠٠ دینار</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                    {isKurdish ? '🎬 مۆنتاژ و ئیدیتینگی ڤیدیۆ' : 'Professional Video Editing'}
                  </h3>
                  <div className="text-xs font-medium text-zinc-200 mb-3">
                    {isKurdish ? 'نرخ: ٣٠,٠٠٠ دینار (بۆ هەر ڤیدیۆیەک)' : '30,000 IQD per video'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {isKurdish
                      ? 'مۆنتاژی پێشکەوتوو بە ستراتیژی ڕاگرتنی سەرنج (Retention)، دەنگ، و ئیفێکتی تایبەت بۆ ئەوەی ڤیدیۆکەت زۆرترین بینەر بهێڵێتەوە.'
                      : 'Advanced video editing optimized for audience retention, sound design, and custom visual effects.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">{isKurdish ? 'ژمارەی ڤیدیۆ:' : 'Videos:'}</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setVideoEdits((prev) => Math.max(0, prev - 1))}
                      disabled={videoEdits === 0}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
                      aria-label="Decrease video edits"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-bold text-sm sm:text-base text-white font-mono">{videoEdits}</span>
                    <button
                      onClick={() => setVideoEdits((prev) => prev + 1)}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
                      aria-label="Increase video edits"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>

              {/* Item 3 */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <Palette size={20} className="text-[#D4AF37]" />
                    <span className="text-xs text-[#D4AF37] font-bold">١٠,٠٠٠ دینار</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                    {isKurdish ? '🎨 گرافیک دیزاینی پێشکەوتوو' : 'Graphic Design'}
                  </h3>
                  <div className="text-xs font-medium text-zinc-200 mb-3">
                    {isKurdish ? 'نرخ: ١٠,٠٠٠ دینار (بۆ هەر دیزاینێک)' : '10,000 IQD per design'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {isKurdish
                      ? 'دیزاینی ناوازە بۆ پۆست، ستۆری، یان ڕیکلامەکانت کە متمانەی براندەکەت لەلای کڕیار بەرز دەکاتەوە.'
                      : 'Bespoke designs for feed posts, stories, or ads that elevate client trust in your brand.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">{isKurdish ? 'ژمارەی دیزاین:' : 'Designs:'}</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setGraphicDesigns((prev) => Math.max(0, prev - 1))}
                      disabled={graphicDesigns === 0}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer"
                      aria-label="Decrease graphic designs"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-bold text-sm sm:text-base text-white font-mono">{graphicDesigns}</span>
                    <button
                      onClick={() => setGraphicDesigns((prev) => prev + 1)}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
                      aria-label="Increase graphic designs"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Dynamic Total */}
            <SpotlightCard className="w-full p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border-[#D4AF37]/30 bg-[#111116]/95">
              <div className="text-center md:text-start">
                <div className="text-xs sm:text-sm font-semibold text-zinc-300">
                  {isKurdish ? '📊 کۆی گشتی وەبەرهێنانەکەت:' : '📊 TOTAL ESTIMATED INVESTMENT:'}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-1.5 tracking-tight">
                  {formatIQD(totalCalculatorIQD)}{' '}
                  <span className="text-base sm:text-xl font-normal text-zinc-300">
                    {isKurdish ? 'دینار' : 'IQD'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 mt-1.5 font-medium">
                  {isKurdish
                    ? `${cameraSessions} سەردان • ${videoEdits} مۆنتاژ • ${graphicDesigns} دیزاین`
                    : `${cameraSessions} Session(s) • ${videoEdits} Video(s) • ${graphicDesigns} Design(s)`}
                </div>
              </div>

              <WireframeCTA href={getCalculatorWhatsAppUrl()} isPrimary={true} className="w-full md:w-auto !py-3.5 sm:!py-4 !px-8 text-xs sm:text-sm font-semibold">
                <WhatsAppIcon size={16} />
                <span>{isKurdish ? 'با دەست بە کارەکان بکەین / ڕەوانەکردنی پلانەکە' : 'Launch / Dispatch Plan'}</span>
                {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </WireframeCTA>
            </SpotlightCard>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 6: بەشی شەشەم: چۆن دەست پێدەکەین؟ (PAGES 7 & 8)                */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[5] = el)}
          id="slide-6"
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#0A0A0C]"
        >
          <div className="max-w-5xl w-full mx-auto my-auto text-center flex flex-col items-center py-4">
            {/* Header: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="inline-block text-xs font-semibold text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] mb-3 sm:mb-4">
                {isKurdish ? 'بەشی شەشەم: چۆن دەست پێدەکەین؟ (Frictionless Onboarding)' : 'FRICTIONLESS ONBOARDING'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'دەتەوێت براندەکەت قازانجی ڕاستەقینە بکات؟ دەستپێکردن لەگەڵماندا تەنیا ٣ هەنگاوی سادەیە.'
                  : 'Want your brand to make real profit? Getting started with us is only 3 simple steps.'}
              </h2>
              {/* Sub-headline */}
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mt-3 leading-relaxed font-normal">
                {isKurdish
                  ? 'سیستەمێکی کارکردنی بێ ئەرک. تۆ کاتت نییە، بۆیە بە تیمە هەموو شتێکمان ئاسان کردووە بۆت. ئێمە هەموو کارە قورسەکان دەکەین، تۆش تەنیا سەیری ئەنجامەکان بکە.'
                  : 'Frictionless workflow. You don’t have time, so as a team we have simplified everything for you. We handle the heavy lifting; you monitor the results.'}
              </p>
            </motion.div>

            {/* 3-Step Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 w-full mb-6 sm:mb-8 text-start">
              {/* Step 1 */}
              <SpotlightCard className="p-6 sm:p-7 border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] mb-2.5 font-semibold tracking-wider">01 / DISCOVERY</div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                    {isKurdish ? 'هەنگاوی ١: دیاریکردنی کێشەکان (١٥-٢٠ خولەک)' : 'Step 1: Discovery (15-20 min)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {isKurdish
                      ? 'پەیوەندییەکی کورت دەکەین. گوێ لە کێشەکانی ئێستای بازاڕەکەت دەگرین، ئامانجەکانت دیاری دەکەین، و تێدەگەین کڕیارەکانت کێن و چۆن بیانگرین. بێ کۆبوونەوەی درێژ و بێزارکەر.'
                      : 'A brief call. We listen to current market roadblocks, identify your targets, and pinpoint who your buyers are. Zero lengthy or exhausting meetings.'}
                  </p>
                </div>
              </SpotlightCard>

              {/* Step 2 */}
              <SpotlightCard className="p-6 sm:p-7 border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] mb-2.5 font-semibold tracking-wider">02 / ARCHITECTURE</div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                    {isKurdish ? 'هەنگاوی ٢: پلان و ستراتیژی (٥-٧ ڕۆژ)' : 'Step 2: Strategy (5-7 Days)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {isKurdish
                      ? 'تیمەکەمان دەست دەکات بە کار. لە ماوەی کەمتر لە هەفتەیەکدا، سیناریۆی ڤیدیۆکان، دیزاینەکان، و ستراتیژی کەمپەینەکانت بۆ ئامادە دەکەین و پێت پیشان دەدەین بۆ پەسەندکردن.'
                      : 'Our team starts execution. In under a week, scripts, visual designs, and campaign roadmaps are prepared and presented for your sign-off.'}
                  </p>
                </div>
              </SpotlightCard>

              {/* Step 3 */}
              <SpotlightCard className="p-6 sm:p-7 border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] mb-2.5 font-semibold tracking-wider">03 / CONVERSION</div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                    {isKurdish ? 'هەنگاوی ٣: جێبەجێکردن و قازانج (پێشوازی لە کڕیار بکە)' : 'Step 3: Execution & Profit'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {isKurdish
                      ? 'سیستەمەکە کارا دەکەین. ڤیدیۆکان پۆست دەکرێن و کەمپەینە زیرەکەکانی Meta ڕادەگەیەنین. لێرەوە ئەرکی تۆ تەنیا وەڵامدانەوەی نامەی کڕیارە نوێیەکان و فرۆشتنی بەرهەمەکانتە.'
                      : 'We activate the system. Videos are deployed and smart Meta campaigns go live. Your only task is responding to incoming buyer inquiries and fulfilling orders.'}
                  </p>
                </div>
              </SpotlightCard>
            </div>

            {/* Ultimate CTA Card */}
            <SpotlightCard className="w-full p-7 sm:p-9 md:p-11 mb-6 sm:mb-8 text-center border-white/[0.08] bg-[#111116]/95">
              <div className={`text-lg sm:text-2xl font-bold text-white mb-2.5 max-w-xl mx-auto ${isKurdish ? 'tracking-normal' : 'tracking-tight'}`}>
                {isKurdish ? 'ئامادەی بۆ گەشەکردنی حەقیقی؟' : 'Ready for genuine growth?'}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-zinc-300 mb-6 sm:mb-7 max-w-lg mx-auto font-normal">
                {isKurdish
                  ? 'کاتی خۆت بە فیڕۆ مەدە لەگەڵ ڕێگا کۆنەکان. با هەر ئەمڕۆ ستراتیژییەکەت بۆ دابڕێژین.'
                  : 'Don’t waste time on obsolete methods. Let us architect your strategy today.'}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <WireframeCTA
                  href={getWhatsAppUrl(
                    isKurdish
                      ? 'سڵاو HBgrow، سەیری پرێزێنتەیشنەکەم کرد و دەمەوێت کاتێک دیاریبکەین بۆ گفتوگۆکردن و دەستپێکردن.'
                      : 'Hello HBgrow, I reviewed the pitch deck and would like to schedule a strategy call to start.'
                  )}
                  isPrimary={true}
                  className="w-full sm:w-auto !py-3.5 sm:!py-4 !px-8 text-xs sm:text-sm font-semibold"
                >
                  <WhatsAppIcon size={16} />
                  <span>{isKurdish ? 'کاتێک دیاریبکە بۆ گفتوگۆکردن' : 'Schedule Strategy Chat'}</span>
                  {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </WireframeCTA>

                {onScheduleClick && (
                  <button
                    onClick={onScheduleClick}
                    className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isKurdish ? 'دیاریکردنی کاتی پەیوەندی' : 'Calendar Booking'}
                  </button>
                )}
              </div>
            </SpotlightCard>

            {/* Payment Trust Signals */}
            <div className="w-full max-w-4xl p-5 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#111116]/60 backdrop-blur-md">
              <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-4 text-center tracking-wider">
                {isKurdish ? 'لۆگۆی ڕێگاکانی پارەدان (Payment Trust Signals)' : 'PAYMENT TRUST SIGNALS'}
              </div>

              {/* Responsive Grid for Payment Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center py-2">
                <div className="flex items-center justify-center w-full">
                  <StealthFIBLogo />
                </div>
                <div className="flex items-center justify-center w-full">
                  <StealthFastPayLogo />
                </div>
                <div className="flex items-center justify-center w-full">
                  <StealthQiCardLogo />
                </div>
                <div className="flex items-center justify-center w-full">
                  <StealthAsiaPayLogo />
                </div>
              </div>

              {/* Text under logos */}
              <div className="text-xs sm:text-sm text-zinc-300 text-center mt-4 sm:mt-5 font-medium leading-relaxed">
                {isKurdish
                  ? 'پڕۆسەی پارەدانمان زۆر ئاسانە. دەتوانیت لە ڕێگەی هەژمارە بانکییە ناوخۆییەکانەوە مانگانە پارە بدەیت.'
                  : 'Our payment process is seamless. You can settle monthly via local Iraqi bank accounts.'}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── MODAL 1: Fullscreen 150+ Work Examples Archive ───────────────── */}
      <AnimatePresence>
        {showArchiveModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0C]/98 backdrop-blur-2xl overflow-y-auto modal-scroll p-4 sm:p-8 flex flex-col items-center"
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <div className="w-full max-w-5xl my-auto py-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div>
                  <div className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                    {isKurdish ? 'ئەرشیفی تەواوی نموونە کارەکان' : 'COMPLETE WORK EXAMPLES ARCHIVE'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {isKurdish
                      ? 'زیاتر لە ١٥٠+ بەرهەمی ڤیدیۆ و دیزاینی ڕاستەقینە'
                      : 'Over 150+ Audited Reels & Visual Brand Assets'}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {isKurdish
                      ? 'سەرجەم ئەم کارانە لەلایەن تیمی HBgrow بەرهەمهێنراون بۆ براندە پێشەنگەکان لە کوردستان و عێراق.'
                      : 'All assets engineered by HBgrow for enterprise & local brands across Kurdistan & Iraq.'}
                  </p>
                </div>
                <button
                  onClick={() => setShowArchiveModal(false)}
                  className="h-10 w-10 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close Archive Modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Archive Tabs */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 max-w-full">
                <button
                  onClick={() => setArchiveTab('videos')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'videos'
                      ? 'bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'bg-[#111116] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <Video size={13} />
                  <span>{isKurdish ? `🎬 ڤیدیۆ ڕیڵەکان (${videoIds.length})` : `🎬 Video Reels (${videoIds.length})`}</span>
                </button>
                <button
                  onClick={() => setArchiveTab('designs')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'designs'
                      ? 'bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'bg-[#111116] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <Palette size={13} />
                  <span>{isKurdish ? `🎨 گرافیک دیزاینەکان (${designs.length})` : `🎨 Graphic Designs (${designs.length})`}</span>
                </button>
                <button
                  onClick={() => setArchiveTab('meta')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'meta'
                      ? 'bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'bg-[#111116] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <BarChart2 size={13} />
                  <span>{isKurdish ? `📊 ئەنجامی مێتا (${adResults.length})` : `📊 Meta Campaigns (${adResults.length})`}</span>
                </button>
                <button
                  onClick={() => setArchiveTab('testimonials')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'testimonials'
                      ? 'bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'bg-[#111116] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <Quote size={13} />
                  <span>{isKurdish ? `💬 شایەتی کڕیاران (${testimonialsList.length})` : `💬 Client Reviews (${testimonialsList.length})`}</span>
                </button>
              </div>

              {/* Archive Content: Videos */}
              {archiveTab === 'videos' && (
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                    {videoIds.slice(0, visibleVideoCount).map((id, i) => (
                      <div
                        key={`${id}-${i}`}
                        onClick={() => setActiveVideo(id)}
                        className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#D4AF37]/60 transition-all duration-300 bg-[#111116] hover:scale-102"
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
                          onError={(e) => {
                            if (e.target.src.includes('maxresdefault')) {
                              e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                            }
                          }}
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0C] transition-all">
                            <Play size={14} className="translate-x-0.5 fill-current" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 inset-x-2 text-[10px] text-zinc-300 truncate font-mono">
                          Reel #{i + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {visibleVideoCount < videoIds.length && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setVisibleVideoCount((prev) => Math.min(prev + 12, videoIds.length))}
                        className="px-6 py-2.5 rounded-full border border-white/[0.1] bg-[#111116] hover:bg-white/[0.06] text-xs font-semibold text-white transition-colors cursor-pointer flex items-center gap-2 hover:border-[#D4AF37]/50"
                      >
                        <Grid size={13} className="text-[#D4AF37]" />
                        <span>{isKurdish ? `بینینی زیاتر (+١٢ لە کۆی ${videoIds.length})` : `Load More (+12 of ${videoIds.length})`}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Archive Content: Designs */}
              {archiveTab === 'designs' && (
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {designs.slice(0, visibleDesignCount).map((src, i) => (
                      <div
                        key={`${src}-${i}`}
                        onClick={() => setActiveImg(src)}
                        className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/[0.08] hover:border-[#D4AF37]/60 transition-all duration-300 bg-[#111116] hover:scale-102"
                      >
                        <img
                          src={src}
                          alt="Graphic Design Thumbnail"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D4AF37]">
                            <Maximize2 size={14} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {visibleDesignCount < designs.length && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setVisibleDesignCount((prev) => Math.min(prev + 15, designs.length))}
                        className="px-6 py-2.5 rounded-full border border-white/[0.1] bg-[#111116] hover:bg-white/[0.06] text-xs font-semibold text-white transition-colors cursor-pointer flex items-center gap-2 hover:border-[#D4AF37]/50"
                      >
                        <Grid size={13} className="text-[#D4AF37]" />
                        <span>{isKurdish ? `بینینی زیاتر (+١٥ لە کۆی ${designs.length})` : `Load More (+15 of ${designs.length})`}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Archive Content: Meta Ad Campaigns */}
              {archiveTab === 'meta' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {adResults.map((campaign, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/[0.08] bg-[#111116] p-4 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.04]">
                            <span className="text-xs font-mono text-zinc-400">
                              {isKurdish ? `کەمپەینی ٠${i + 1}` : `Campaign 0${i + 1}`}
                            </span>
                            <span className="text-[10px] font-medium text-[#27C93F] bg-[#27C93F]/10 px-2 py-0.5 rounded-full border border-[#27C93F]/20">
                              {isKurdish ? 'سەلمێنراو' : 'Verified'}
                            </span>
                          </div>

                          <div
                            onClick={() => setActiveImg(campaign.img)}
                            className="group relative h-40 rounded-xl overflow-hidden bg-black/50 border border-white/[0.06] cursor-pointer flex items-center justify-center my-2"
                          >
                            <img
                              src={campaign.img}
                              alt={`Meta Campaign ${i + 1}`}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-xs font-semibold text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                                <Maximize2 size={12} className="text-[#D4AF37]" />
                                {isKurdish ? 'گەورەکردن' : 'Inspect'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.04]">
                          <div>
                            <div className="text-[10px] text-zinc-500 font-medium">
                              {isKurdish ? 'نامەی کڕیار' : 'Inquiries'}
                            </div>
                            <div className="text-sm sm:text-base font-extrabold text-[#D4AF37] font-mono">
                              {campaign.messages}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-zinc-500 font-medium">
                              {isKurdish ? 'بینین' : 'Impressions'}
                            </div>
                            <div className="text-sm sm:text-base font-extrabold text-white font-mono">
                              {campaign.impressions}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gamma Spend Proof Charts */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-xs font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                      <BarChart2 size={14} className="text-[#D4AF37]" />
                      <span>{isKurdish ? 'بەڵگەنامەی خەرجی و سپۆنسەرەکان (Spend Sheets)' : 'Audited Campaign Spend Sheets'}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dataProofImages.map((src, i) => (
                        <div
                          key={i}
                          onClick={() => setActiveImg(src)}
                          className="group relative h-48 rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] cursor-pointer"
                        >
                          <img
                            src={src}
                            alt={`Audited Spend Proof ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-xs font-semibold text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                              <Maximize2 size={13} className="text-[#D4AF37]" />
                              {isKurdish ? 'تەماشاکردنی داتا' : 'Inspect Sheet'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Archive Content: Client Testimonials */}
              {archiveTab === 'testimonials' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonialsList.map((review, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/[0.08] bg-[#111116] p-5 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
                      >
                        <div>
                          {/* Rating and Source */}
                          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.04]">
                            <div className="flex items-center gap-0.5 text-[#D4AF37]">
                              {Array.from({ length: review.rating || 5 }).map((_, starIdx) => (
                                <Star key={starIdx} size={12} className="fill-[#D4AF37]" />
                              ))}
                            </div>
                            <span className="text-[10px] text-zinc-500 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                              {review.source === 'Facebook' ? 'Facebook Review' : 'Verified Message'}
                            </span>
                          </div>

                          {/* Quote */}
                          <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed font-normal mb-4">
                            «{review.text}»
                          </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
                          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-xs font-bold text-[#D4AF37] shrink-0">
                            {review.initials || 'HB'}
                          </div>
                          <div className="truncate">
                            <div className="text-xs font-bold text-white truncate">
                              {review.name}
                            </div>
                            <div className="text-[10px] text-zinc-500 truncate">
                              {review.role || (isKurdish ? 'کڕیاری سەلمێنراو' : 'Verified Client')}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── MODAL 2: Stealth Wealth Theater Video Modal ───────────────────── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0C]/96 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveVideo(null);
              }}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close video theater"
            >
              <X size={18} />
            </button>

            <div
              className="w-full max-w-[390px] flex flex-col items-center gap-3.5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 9:16 Video Player Container */}
              <div className="w-full aspect-[9/16] max-h-[76vh] rounded-2xl overflow-hidden border border-white/[0.1] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.9)] relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="HBgrow Portfolio Reel Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={getWhatsAppUrl(
                  isKurdish
                    ? `سڵاو HBgrow، سەیری ئەم نموونە ڤیدیۆیەتم کرد (https://youtu.be/${activeVideo}) لە ناو پرێزێنتەیشنەکەتاندا. دەمەوێت ڤیدیۆی هاوشێوە بۆ براندەکەم بەرهەم بهێنین.`
                    : `Hello HBgrow, I watched this portfolio reel (https://youtu.be/${activeVideo}) in your pitch deck. I would like to produce similar videos for my brand.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] font-semibold text-xs tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all cursor-pointer"
              >
                <WhatsAppIcon size={14} />
                <span>{isKurdish ? 'داواکردنی بەرهەمهێنانی هاوشێوە لە واتسئەپ' : 'Request Similar Production via WhatsApp'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── MODAL 3: Stealth Wealth Lightbox Modal ────────────────────────── */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0C]/96 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveImg(null)}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(null);
              }}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close image lightbox"
            >
              <X size={18} />
            </button>

            <div
              className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-3.5"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImg}
                alt="HBgrow Graphic Design Fullscreen"
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/[0.1] shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
              />
              <a
                href={getWhatsAppUrl(
                  isKurdish
                    ? 'سڵاو HBgrow، ئەم نموونە دیزاینەم بەدڵ بوو لە ناو پرێزێنتەیشنەکەتاندا. دەمەوێت دیزاین و فیدی هاوشێوە بۆ براندەکەم دروست بکەین.'
                    : 'Hello HBgrow, I loved this design asset in your pitch deck. I would like to create similar visual assets for my brand.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#E5E4E2] to-[#D4AF37] !text-[#0A0A0C] font-semibold text-xs tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all cursor-pointer"
              >
                <WhatsAppIcon size={14} />
                <span>{isKurdish ? 'داواکردنی دیزاینی هاوشێوە لە واتسئەپ' : 'Request Similar Design via WhatsApp'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
