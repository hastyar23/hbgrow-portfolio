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
  ShieldCheck,
  Play,
  Grid,
  Star,
  MessageCircle,
  Eye,
  Quote,
  BarChart2,
  TrendingUp,
  Crown,
  Calendar,
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

// ─── Fixed Subtle Paper Grain Overlay ─────────────────────────────────────────
function FilmGrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stealthNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stealthNoise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// ─── Porcelain Glass Bento Card with Realtime Mouse Spotlight ───────────────────
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
      className={`relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white bg-opacity-95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered
          ? '0 16px 40px -12px rgba(3, 20, 43, 0.12), 0 0 0 1px rgba(3, 20, 43, 0.16)'
          : '0 4px 20px -6px rgba(0, 0, 0, 0.04)',
      }}
      {...props}
    >
      {/* Subtle Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${coords.x}px ${coords.y}px, rgba(3, 20, 43, 0.03), transparent 45%)`,
        }}
      />
      {/* Hairline Edge Glow Accent */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          border: '1px solid rgba(3, 20, 43, 0.12)',
          maskImage: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

// ─── Razor-Thin Wireframe CTA Button (Dark Navy Blue Gradient on Primary) ────────
function WireframeCTA({ href, onClick, children, className = '', isPrimary = false }) {
  const inner = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Subtle Dark Navy Blue Slide Gradient on Hover */}
      <span
        className="absolute inset-0 z-0 translate-y-full transition-transform duration-[400ms] ease-out group-hover:translate-y-0"
        style={{ background: 'linear-gradient(135deg, #03142B 0%, #08244D 50%, #0E3B7D 100%)' }}
      />
    </>
  );

  const baseClasses = `group relative overflow-hidden inline-flex items-center justify-center rounded-full border px-6 py-3.5 text-xs font-semibold tracking-wide transition-all duration-[400ms] ease-out cursor-pointer ${
    isPrimary
      ? 'bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white !border-transparent shadow-[0_4px_20px_rgba(3,20,43,0.25)] hover:shadow-[0_8px_30px_rgba(3,20,43,0.38)] hover:-translate-y-0.5'
      : 'bg-white text-[#0A0A0C] border-black/[0.1] hover:border-[#03142B] hover:!text-white hover:bg-[#03142B] shadow-sm'
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

// ─── Photorealistic macOS Light-Mode Browser Window ───────────────────────────
function MacOSWindow({ title = 'Meta Ads Manager', url = 'business.facebook.com/adsmanager', children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${className}`}>
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-black/[0.05] px-4 py-2.5 bg-zinc-50/80">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-black/[0.08] text-[10px] text-zinc-500 font-mono shadow-xs">
          <Lock size={10} className="text-zinc-400" />
          <span>{url}</span>
        </div>
        <div className="w-8" />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

// ─── Official Authentic Iraqi Payment Signal Logos ─────────────────────────────
function RealFIBLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
      <svg
        viewBox="0 0 94 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="First Iraqi Bank"
      >
        {/* Official Emerald FIB Monogram Mark */}
        <path
          d="M25.2993 18.1182L19.9895 14.0447L7.87014 4.80315H16.1996C19.1788 4.80315 21.5973 7.22837 21.5973 10.2008C21.5973 11.0182 21.4149 11.7883 21.0906 12.4841L24.948 15.443C25.8667 13.9096 26.4004 12.1193 26.4004 10.2008C26.4004 4.56671 21.8337 0 16.1996 0H0V4.74911L14.0446 15.5309L14.1392 15.5984L21.5027 21.246C21.6108 21.3136 21.7121 21.3811 21.8135 21.4554L21.9148 21.5297C23.2456 22.5633 24.0833 24.2184 24.0023 26.0559C23.8671 28.9473 21.4216 31.1968 18.5303 31.1968H4.8099V20.3948H16.2132H17.0373L10.7818 15.5984H0.0135036V36H18.6114C24.2454 36 28.8122 31.4333 28.8122 25.7992C28.8122 22.7322 27.4611 19.9827 25.3196 18.1115"
          fill="#00A69C"
        />
        <path d="M38.3915 6.04663V29.9611" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" strokeMiterlimit="10" />
        {/* Official F I B Letters */}
        <path d="M47.991 6.03979V10.3903V15.8353V20.1925V29.9948H52.3415V20.1925H61.6438V15.8353H52.3415V10.3903H63.2313V6.03979H52.3415H47.991Z" fill="#FFFFFF" />
        <path d="M71.5875 6.03979H67.2302V29.9948H71.5875V6.03979Z" fill="#FFFFFF" />
        <path d="M91.3888 17.3749C92.0036 16.49 92.3616 15.4226 92.3616 14.2674V11.4774C92.3616 8.45769 89.9161 6.01221 86.8964 6.01221H75.9323V29.9942H88.0651C91.0848 29.9942 93.5371 27.542 93.5371 24.5222V21.7322C93.5371 19.9623 92.6926 18.3815 91.3821 17.3817M80.4854 9.43048H85.8493C87.045 9.43048 88.0111 10.3965 88.0111 11.5922V14.0918C88.0111 15.2875 87.045 16.2535 85.8493 16.2535H80.4854V9.43048ZM88.9974 23.8805C88.9974 25.1032 88.0043 26.0963 86.7816 26.0963H80.4922V19.7258H86.7816C88.0043 19.7258 88.9974 20.7189 88.9974 21.9417V23.8737V23.8805Z" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

function RealFastPayLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
      <img
        src="/images/fastpay_darkmode.png"
        alt="FastPay Iraq"
        className={`${className} object-contain`}
        loading="lazy"
      />
    </div>
  );
}

function RealAsiaPayLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
      <img
        src="/images/asiapay_official.png"
        alt="Asia Pay Iraq"
        className={`${className} object-contain max-h-7`}
        loading="lazy"
      />
    </div>
  );
}

function RealQiCardLogo({ className = 'h-7 w-auto' }) {
  return (
    <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
      <svg
        width="26"
        height="26"
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M30.9229 50.4682C19.8704 50.4682 10.9271 41.5373 10.9271 30.5C10.9271 19.4627 19.8704 10.5318 30.9229 10.5318C41.9753 10.5318 50.9186 19.4627 50.9186 30.5C50.9186 33.2804 50.328 35.9765 49.3155 38.3356L57.0776 46.087C59.8618 41.5373 61.3805 36.145 61.3805 30.4157C61.4648 13.6492 47.7969 0 30.9229 0C14.0488 0 0.380859 13.6492 0.380859 30.5C0.380859 47.3508 14.0488 61 30.9229 61C36.66 61 42.0597 59.3992 46.6157 56.703L38.7693 48.8674C36.4069 49.8785 33.7071 50.4682 30.9229 50.4682ZM25.0169 30.5C25.0169 33.7859 27.6324 36.3978 30.9229 36.3978C34.2133 36.3978 36.8288 33.7859 36.8288 30.5C36.8288 27.2141 34.2133 24.6022 30.9229 24.6022C27.6324 24.6022 25.0169 27.2141 25.0169 30.5ZM59.8618 51.9848C61.8867 54.0069 61.8867 57.3771 59.8618 59.3992C57.8369 61.4213 54.4621 61.4213 52.4372 59.3992L36.9975 43.9807C34.9726 41.9586 34.9726 38.5884 36.9975 36.5663C39.0224 34.5442 42.3972 34.5442 44.4221 36.5663L59.8618 51.9848Z"
          fill="#F3CD00"
        />
      </svg>
      <div className="flex flex-col text-start">
        <span className="text-sm sm:text-base font-black text-white tracking-tight leading-none font-sans">
          Qi <span className="font-semibold text-zinc-300 text-xs">Card</span>
        </span>
        <span className="text-[8px] text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
          IRAQ
        </span>
      </div>
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
    const textKu = `سڵاو HBgrow، لە ڕێگەی ژمێرەری زیرەکەوە ئەم پلانە تایبەتەم دیاری کردووە:\n• وێنەگرتنی کامێرا: ${cameraSessions} سەردان\n• مۆنتاژ و ئیدیتینگی ڤیدیۆ: ${videoEdits} ڤیدیۆ\n• گرافیک دیزاین: ${graphicDesigns} دیزاین\nکۆی گشتی وەبەرهێنان: ${formatIQD(totalCalculatorIQD)} دینار.\nدەمەوێت لە کۆبوونەوەیەکی کورتدا ئەم پلانە تاوتوێ بکەین و دەستیپێبکەین.`;
    const textEn = `Hello HBgrow, I configured my customized plan via the Smart Calculator:\n• Camera Videography: ${cameraSessions} session(s)\n• Video Editing: ${videoEdits} video(s)\n• Graphic Design: ${graphicDesigns} design(s)\nTotal Investment: ${formatIQD(totalCalculatorIQD)} IQD.\nI would like to schedule a strategy review for this custom scope.`;
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
      className="relative w-full h-[100dvh] text-[#0A0A0C] overflow-hidden select-none bg-[#FFFFFF]"
      style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
      }}
    >
      {/* ─── 1. Fixed Subtle Physical SVG Grain Overlay ───────────────────────── */}
      <FilmGrainOverlay />

      {/* ─── Top Executive Stealth HUD Bar ───────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-3.5 sm:px-8 md:px-12 py-3 sm:py-3.5 backdrop-blur-2xl bg-white/85 border-b border-black/[0.08]">
        {/* Executive Brand Lockup */}
        <a
          href="/"
          dir="ltr"
          className="group flex items-center gap-2.5 sm:gap-3 no-underline transition-all hover:opacity-90 flex-shrink-0"
          title="HBgrow Agency"
        >
          {/* Luxury Circular Logo Mark with Dark Navy Rim */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#03142B]/10 blur-sm group-hover:bg-[#03142B]/20 transition-all" />
            <img
              src="/images/optimized/U9X57gP.avif"
              alt="HBgrow Logo"
              className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full object-contain border border-[#03142B]/25 shadow-sm bg-white"
            />
          </div>

          {/* Wordmark & Executive Status Tag */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span
              className="font-bold tracking-tight text-sm sm:text-base text-[#0A0A0C]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              HB<span style={{ color: '#0B3275' }}>grow</span>
            </span>

            {/* Hairline Divider */}
            <span className="hidden sm:inline-block w-[1px] h-3.5 bg-black/[0.12]" />

            {/* Executive Status Pill */}
            <div className="hidden min-[420px]:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 border border-black/[0.08] shadow-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B3275] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0B3275]" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-600 font-semibold uppercase">
                EXECUTIVE BRIEFING
              </span>
            </div>
          </div>
        </a>

        {/* Center Slide Indicator */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-xs shadow-xs">
          <span className="text-[#0A0A0C] font-mono font-semibold">{slideTitles[activeSlide]?.num}</span>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-500 font-mono">0{totalSlides}</span>
          <span className="text-zinc-300 mx-1">•</span>
          <span className="text-zinc-600 font-medium text-[11px]">
            {isKurdish ? slideTitles[activeSlide]?.ku : slideTitles[activeSlide]?.en}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-black/[0.08] bg-white hover:bg-zinc-100 transition-colors text-xs font-medium text-zinc-700 cursor-pointer shadow-xs"
          >
            <Globe size={12} className="text-zinc-500" />
            <span>{isKurdish ? 'EN' : 'کوردی'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full border border-black/[0.08] bg-white hover:bg-zinc-100 transition-colors text-zinc-600 cursor-pointer shadow-xs"
          >
            {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>

          <WireframeCTA href={getWhatsAppUrl()} isPrimary={true} className="!py-1.5 !px-3 sm:!px-4 !text-[11px]">
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
                } px-2.5 py-1 rounded-md bg-white border border-black/[0.08] text-[10px] font-medium text-zinc-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md`}
              >
                {slide.num} — {isKurdish ? slide.ku : slide.en}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive ? 'w-1.5 h-6 bg-gradient-to-b from-[#020C1B] to-[#0A2E66]' : 'w-1 h-1 bg-black/20 group-hover:bg-black/40'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* ─── Bottom Floating Stepper ────────────────────────────────────────── */}
      <footer className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-2xl border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <button
          onClick={prevSlide}
          disabled={activeSlide === 0}
          aria-label="Previous Slide"
          className="p-1 text-zinc-400 hover:text-[#0A0A0C] disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? 'w-5 bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66]' : 'w-1 bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={activeSlide === totalSlides - 1}
          aria-label="Next Slide"
          className="p-1 text-zinc-400 hover:text-[#0A0A0C] disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
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
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-20 overflow-y-auto lg:overflow-hidden bg-[#FFFFFF]"
        >
          <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center my-auto py-2 sm:py-4">
            {/* Minimalist Micro Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-zinc-100 mb-6 sm:mb-8 md:mb-10 shadow-xs"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#0B3275]" />
              <span className="text-xs font-semibold text-zinc-700">
                {isKurdish ? 'سیستەمی گەشەی HBgrow' : 'HBGROW GROWTH SYSTEM'}
              </span>
            </motion.div>

            {/* Massive Pure Dark H1 with Tight Tracking (PDF Page 1) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE_PRO }}
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A0A0C] leading-[1.25] sm:leading-[1.2] max-w-4xl mb-6 sm:mb-8 ${
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
              className="text-xs sm:text-base md:text-lg text-zinc-600 max-w-3xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 font-normal"
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
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0A0A0C] tracking-tight">100+</div>
                <div className="text-[10px] sm:text-xs text-zinc-500 mt-1 sm:mt-1.5 font-medium leading-snug">
                  {isKurdish ? 'براندی متمانەپێکراو' : 'Trusted Brands'}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-3 sm:p-5 md:p-6 text-center flex flex-col justify-center items-center border-[#03142B]/20 shadow-md">
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0B3275] tracking-tight">60,000+</div>
                <div className="text-[10px] sm:text-xs text-zinc-600 mt-1 sm:mt-1.5 font-semibold leading-snug">
                  {isKurdish ? 'بەرهەمهێنانی نامەی کڕیار' : 'Inquiries Generated'}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-3 sm:p-5 md:p-6 text-center flex flex-col justify-center items-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0A0A0C] tracking-tight">1,000+</div>
                <div className="text-[10px] sm:text-xs text-zinc-500 mt-1 sm:mt-1.5 font-medium leading-snug">
                  {isKurdish ? 'بەرهەمی دیزاین و ڤیدیۆ' : 'Design & Video Assets'}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Subtle Down Indicator */}
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 hover:text-[#0A0A0C] transition-colors cursor-pointer pt-2"
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
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#FAFAFA]"
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
              <div className="inline-block text-xs font-semibold text-zinc-700 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white mb-4 shadow-xs">
                {isKurdish ? 'ڕێگای کۆن بەرامبەر سیستەمی فرۆشتنی HBgrow' : 'OLD PARADIGM VS HBGROW GROWTH SYSTEM'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A0A0C] max-w-3xl mx-auto leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'زۆربەی بزنسەکان پارە لە سۆشیال میدیا دەسووتێنن، نەک لەبەر ئەوەی بەرهەمەکەیان خراپە... بەڵکو چونکە بە سیستەمی کۆن و هەڵە کار دەکەن.'
                  : 'Most businesses burn cash on social media—not because their product is flawed, but because they run on outdated architectures.'}
              </h2>
            </motion.div>

            {/* Two Glassmorphic Bento Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 mb-6 sm:mb-8">
              {/* Left Bento: Outdated Way */}
              <SpotlightCard className="lg:col-span-5 p-6 sm:p-8 md:p-9 flex flex-col justify-between border-black/[0.08] bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-zinc-600 px-3 py-1 rounded-md bg-zinc-100 border border-black/[0.06]">
                      {isKurdish ? 'کارتی چەپ: ڕێگای کۆن و باو' : 'THE OUTDATED WAY (FAILING)'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-500 mb-5 font-normal">
                    {isKurdish ? 'ئەیجێنسی / فریلانسی ئاسایی و پۆستکردنی بێ پلان' : 'Generic agencies & unstrategic posting'}
                  </div>

                  <ul className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-zinc-100 border border-black/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-zinc-500">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-[#0A0A0C] block font-semibold mb-1">
                          {isKurdish ? 'دیزاینی وێنەی بێ گیان:' : 'Lifeless Static Designs:'}
                        </strong>
                        <span className="text-zinc-600 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'وێنەیەک کە بە چەند چرکەیەک دیزاین کراوە و لەناو هەزاران پۆستی تردا کەس سەیری ناکات.'
                            : 'Standard static images designed in seconds and scrolled past without registering attention.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-zinc-100 border border-black/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-zinc-500">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-[#0A0A0C] block font-semibold mb-1">
                          {isKurdish ? 'سپۆنسەری بێ ئامانج:' : 'Aimless Boosting:'}
                        </strong>
                        <span className="text-zinc-600 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'تەنها داگرتنی دوگمەی Boost Post و بەفیڕۆدانی بودجە بەبێ هیچ تارگێتێکی دروست.'
                            : 'Blindly clicking Boost Post and burning ad budget with zero targeting data.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-zinc-100 border border-black/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-zinc-500">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-[#0A0A0C] block font-semibold mb-1">
                          {isKurdish ? 'دڵخۆشبوون بە لایک:' : 'Celebrating Vanity Likes:'}
                        </strong>
                        <span className="text-zinc-600 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'گرنگیدان بە ژمارەی ڤیو و لایک، لە کاتێکدا کڕیار پێویستە نامە بنێرێت یان سەردانت بکات.'
                            : 'Focusing on vanity views and likes, while actual paying customers should message or visit.'}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 sm:gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-zinc-100 border border-black/[0.08] flex items-center justify-center shrink-0 mt-0.5 text-zinc-500">
                        <X size={11} />
                      </div>
                      <div>
                        <strong className="text-[#0A0A0C] block font-semibold mb-1">
                          {isKurdish ? 'نەبوونی ڕێڕەوی فرۆشتن:' : 'Zero Sales Funnel:'}
                        </strong>
                        <span className="text-zinc-600 leading-relaxed block text-xs sm:text-sm">
                          {isKurdish
                            ? 'هیچ پلانێک نییە بۆ ئەوەی ئەو کەسەی پۆستەکە دەبینێت چۆن ببێتە کڕیار.'
                            : 'No clear mechanism to transition a casual viewer into a commercial paying buyer.'}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs sm:text-sm text-zinc-500">
                  <span>{isKurdish ? 'دەرئەنجام:' : 'Commercial Outcome:'}</span>
                  <span className="text-zinc-700 font-semibold">{isKurdish ? 'ماندووبوون بێ قازانج' : 'Negative ROI'}</span>
                </div>
              </SpotlightCard>

              {/* Right Bento: HBgrow Growth System */}
              <SpotlightCard className="lg:col-span-7 p-6 sm:p-8 md:p-9 flex flex-col justify-between border-[#03142B]/20 bg-white shadow-[0_12px_40px_rgba(3,20,43,0.06)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#03142B] px-3 py-1 rounded-md bg-[#03142B]/[0.08] border border-[#03142B]/20">
                      {isKurdish ? 'کارتی ڕاست: سیستەمی گەشەی HBgrow' : 'THE HBGROW GROWTH SYSTEM'}
                    </span>
                    <Sparkles size={14} className="text-[#0B3275]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-xs sm:text-sm">
                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-black/[0.05] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[#0A0A0C] font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 text-[#03142B]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'ڤیدیۆی کوالێتی بەرز:' : 'High-Retention Video:'}</span>
                        </div>
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'سیناریۆی سەرنجڕاکێش و دەنگ (Voiceover) کە لە ۳ چرکەی یەکەمدا سەرنجی کڕیار ڕادەکێشێت.'
                            : 'Compelling scripts and professional Kurdish voiceover capturing customer attention in the first 3s.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-black/[0.05] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[#0A0A0C] font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 text-[#03142B]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'کەمپەینی داتامەبەست لە Meta:' : 'Data-Driven Meta Ads:'}</span>
                        </div>
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'بەکارهێنانی سیستەمی پێشکەوتووی سپۆنسەر بۆ گەیشتن بەو کەسانەی بەڕاستی توانای کڕینیان هەیە.'
                            : 'Deploying advanced Meta ad systems targeting prospects with verified purchasing capacity.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-black/[0.05] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[#0A0A0C] font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 text-[#03142B]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'فەنەڵی گۆڕینی بینەر بۆ کڕیار:' : 'Direct WhatsApp Funnel:'}</span>
                        </div>
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'ئاراستەکردنی بینەر ڕاستەوخۆ بۆ ناو واتسئەپ و نامەکان بە پەیامی ڕوون و ئامادەکراو.'
                            : 'Guiding audience directly to WhatsApp with clear prefilled inquiry triggers.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-black/[0.05] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[#0A0A0C] font-semibold mb-1.5">
                          <div className="h-5 w-5 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 text-[#03142B]">
                            <Check size={11} />
                          </div>
                          <span>{isKurdish ? 'ئامانجی ڕوون:' : 'Clear Commercial Goal:'}</span>
                        </div>
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                          {isKurdish
                            ? 'گرنگیدان بە زیادکردنی فرۆشتن و ناوبانگی براندەکەت لە بازاڕدا، نەک تەنها ژمارەی سەر شاشە.'
                            : 'Focusing on scaling real sales and enterprise market authority, not vanity screen digits.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs sm:text-sm text-zinc-500">
                  <span>{isKurdish ? 'دەرئەنجام:' : 'Commercial Outcome:'}</span>
                  <span className="text-[#0B3275] font-bold">{isKurdish ? 'کڕیاری بەردەوام و فرۆشی سەلمێنراو' : 'Predictable Revenue'}</span>
                </div>
              </SpotlightCard>
            </div>

            {/* Bottom Verbatim Conclusion Banner */}
            <SpotlightCard className="p-5 sm:p-6 md:p-7 text-center border-black/[0.08] bg-white shadow-xs mt-2 sm:mt-4">
              <p className="text-xs sm:text-sm md:text-base text-zinc-700 font-medium leading-relaxed max-w-3xl mx-auto">
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
          className="relative w-full min-h-[100dvh] lg:h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-16 overflow-y-auto lg:overflow-hidden bg-[#FFFFFF] select-none"
        >
          <div className="max-w-5xl w-full mx-auto h-full flex flex-col justify-between py-2 sm:py-4 gap-3 sm:gap-4 lg:gap-5">
            {/* ── Top Header & Minimalist Segmented Control ── */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-block text-[11px] font-mono tracking-widest text-[#0B3275] px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-100 mb-2 font-semibold shadow-xs">
                {isKurdish ? '٠٣ • بەڵگە و ئەنجامی سەلمێنراو' : '03 • AUDITED RESULTS & PROOF'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0A0A0C] leading-tight mb-1.5 sm:mb-2 ${isKurdish ? 'tracking-normal' : 'tracking-tight'}`}>
                {isKurdish
                  ? 'ئەنجامی کەمپەینەکان و شایەتی براندەکان'
                  : 'Audited Meta Results & Client Reviews'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed mb-4 sm:mb-5">
                {isKurdish
                  ? 'سەیری نموونەی کارەکان، ئەنجامی ڕاستەقینەی کەمپەینەکانی مێتا، و ڕای کڕیارانمان بکە.'
                  : 'Audited Meta Ads dashboards, verified customer feedback, and production creative assets.'}
              </p>

              {/* Minimalist Linear-Style Segmented Control */}
              <div className="inline-flex items-center p-1 rounded-full border border-black/[0.08] bg-zinc-100 backdrop-blur-md max-w-full overflow-x-auto shadow-xs">
                <button
                  onClick={() => setProofTab('videos')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'videos'
                      ? 'bg-white text-[#0A0A0C] border border-black/[0.08] shadow-xs'
                      : 'text-zinc-500 hover:text-[#0A0A0C] border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'videos' ? 'bg-[#0B3275] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'ڤیدیۆ ڕیڵ (٥٥+)' : 'Video Reels (55+)'}</span>
                </button>

                <button
                  onClick={() => setProofTab('designs')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'designs'
                      ? 'bg-white text-[#0A0A0C] border border-black/[0.08] shadow-xs'
                      : 'text-zinc-500 hover:text-[#0A0A0C] border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'designs' ? 'bg-[#0B3275] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'گرافیک دیزاین (١٠٠+)' : 'Graphic Design (100+)'}</span>
                </button>

                <button
                  onClick={() => setProofTab('meta')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'meta'
                      ? 'bg-white text-[#0A0A0C] border border-black/[0.08] shadow-xs'
                      : 'text-zinc-500 hover:text-[#0A0A0C] border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'meta' ? 'bg-[#0B3275] opacity-100' : 'opacity-0'}`} />
                  <span>{isKurdish ? 'ئەنجامی مێتا (٥)' : 'Meta Campaigns (5)'}</span>
                </button>

                <button
                  onClick={() => setProofTab('testimonials')}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    proofTab === 'testimonials'
                      ? 'bg-white text-[#0A0A0C] border border-black/[0.08] shadow-xs'
                      : 'text-zinc-500 hover:text-[#0A0A0C] border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${proofTab === 'testimonials' ? 'bg-[#0B3275] opacity-100' : 'opacity-0'}`} />
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
                        className="group relative h-[230px] sm:h-[260px] md:h-[290px] lg:h-[35vh] lg:max-h-[310px] min-h-[200px] rounded-2xl overflow-hidden cursor-pointer border border-black/[0.08] hover:border-[#03142B]/50 transition-all duration-500 bg-white shadow-sm hover:shadow-md hover:-translate-y-1"
                      >
                        {/* High-res Thumbnail */}
                        <img
                          src={
                            id.startsWith('st-')
                              ? '/images/crumbs_iq.webp'
                              : id.startsWith('dm-')
                                ? (id === 'dm-k3s2QmcsfWuphvMe2Rk' ? '/images/crumbs_iq.webp' : `https://www.dailymotion.com/thumbnail/video/${id.replace('dm-', '')}`)
                                : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
                          }
                          onError={(e) => {
                            if (e.target.src.includes('maxresdefault')) {
                              e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                            }
                          }}
                          alt="HBgrow Video Reel Example"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                          loading="lazy"
                        />
                        {/* Scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />

                        {/* Top Clean Number */}
                        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
                          <span className="text-[10px] font-mono text-white bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                            0{index + 1}
                          </span>
                        </div>

                        {/* Minimalist Frosted Play Circle */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-10 h-10 rounded-full border border-white/30 bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#03142B] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md">
                            <Play size={14} className="translate-x-0.5 fill-current" />
                          </div>
                        </div>

                        {/* Bottom Clean Caption */}
                        <div className="absolute bottom-2.5 inset-x-2.5 z-10 text-start">
                          <div className="text-[10px] font-bold text-white/90 truncate">
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
                      className="group relative h-[230px] sm:h-[260px] md:h-[290px] lg:h-[35vh] lg:max-h-[310px] min-h-[200px] rounded-2xl overflow-hidden cursor-pointer border border-black/[0.08] hover:border-[#03142B]/50 transition-all duration-500 bg-white shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                      <img
                        src={src}
                        alt="HBgrow Graphic Design Asset"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03142B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <div className="flex items-center justify-between w-full text-xs text-white">
                          <span className="font-medium text-[11px]">{isKurdish ? 'تەماشاکردنی دیزاین' : 'Inspect Design'}</span>
                          <Maximize2 size={13} className="text-white" />
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
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {isKurdish ? 'داتای پشکنراوی مێتا' : 'VERIFIED META TELEMETRY'}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                            {isKurdish ? `کەمپەینی ٠${activeMetaIndex + 1}` : `Campaign 0${activeMetaIndex + 1}`}
                          </span>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setActiveMetaIndex((prev) => (prev === 0 ? adResults.length - 1 : prev - 1))}
                            className="w-7 h-7 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer shadow-2xs"
                            aria-label="Previous Campaign"
                          >
                            <ChevronLeft size={14} />
                          </button>
                          <span className="text-[11px] font-mono text-zinc-500 px-1 font-semibold">
                            0{activeMetaIndex + 1} / 0{adResults.length}
                          </span>
                          <button
                            onClick={() => setActiveMetaIndex((prev) => (prev === adResults.length - 1 ? 0 : prev + 1))}
                            className="w-7 h-7 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer shadow-2xs"
                            aria-label="Next Campaign"
                          >
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Main Campaign Image with Click to Zoom */}
                      <div
                        onClick={() => setActiveImg(adResults[activeMetaIndex].img)}
                        className="group relative w-full h-[22vh] min-h-[160px] max-h-[220px] rounded-xl overflow-hidden bg-zinc-50 border border-black/[0.06] cursor-pointer flex items-center justify-center"
                      >
                        <img
                          key={adResults[activeMetaIndex].img}
                          src={adResults[activeMetaIndex].img}
                          alt="Meta Ads Campaign Dashboard"
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <span className="text-xs font-semibold text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 backdrop-blur-md">
                            <Maximize2 size={12} className="text-white" />
                            {isKurdish ? 'بۆ گەورەکردن دەست لێبدە' : 'Click to Inspect Fullscreen'}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Campaign Telemetry Metrics */}
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-black/[0.05]">
                        <div className="p-2.5 rounded-xl bg-zinc-50 border border-black/[0.05] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center text-[#03142B] shrink-0">
                            <MessageCircle size={16} />
                          </div>
                          <div>
                            <div className="text-[10px] text-zinc-500 font-medium">
                              {isKurdish ? 'نامەی ڕاستەقینەی کڕیار' : 'Inbound Inquiries'}
                            </div>
                            <div className="text-base sm:text-lg font-extrabold text-[#0B3275] font-mono leading-tight">
                              {adResults[activeMetaIndex].messages}
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-zinc-50 border border-black/[0.05] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-black/[0.08] flex items-center justify-center text-zinc-700 shrink-0">
                            <Eye size={16} />
                          </div>
                          <div>
                            <div className="text-[10px] text-zinc-500 font-medium">
                              {isKurdish ? 'ڕێژەی بینینی ئامانجدار' : 'Targeted Impressions'}
                            </div>
                            <div className="text-base sm:text-lg font-extrabold text-[#0A0A0C] font-mono leading-tight">
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
                                ? 'w-6 bg-gradient-to-r from-[#020C1B] to-[#0A2E66]'
                                : 'w-1.5 bg-black/15 hover:bg-black/30'
                            }`}
                            aria-label={`Jump to campaign ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </MacOSWindow>
                  </div>

                  {/* Right Column: High-Level Benchmarks & Spend Proof Sheets */}
                  <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-black/[0.08] bg-white">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-[#03142B] px-2 py-0.5 rounded bg-[#03142B]/10 border border-[#03142B]/20 uppercase">
                            {isKurdish ? 'ئەنجامی سەلمێنراو' : 'VERIFIED ROI'}
                          </span>
                          <BarChart2 size={13} className="text-[#0B3275]" />
                        </div>
                        <div className="text-base sm:text-lg font-extrabold text-[#0A0A0C] mt-1">
                          {isKurdish ? '٣٥ ملیۆن+ بینەری کڕیار' : '35M+ Targeted Views'}
                        </div>
                        <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                          {isKurdish
                            ? 'بەڕێوەبردنی $٢٠,٠٠٠+ بودجەی ساڵانەی سپۆنسەر بە کەمترین تێچووی نامە—تا $٠.٠٦ بۆ هەر کڕیارێک.'
                            : '$20,000+ managed Meta budget yielding direct buyer acquisition at $0.06 cost per inquiry.'}
                        </p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-black/[0.05] flex items-center justify-between text-xs">
                        <span className="text-zinc-500">{isKurdish ? 'تێچووی نامە:' : 'Lead Cost:'}</span>
                        <span className="text-[#0B3275] font-mono font-bold">$0.06 - $0.12</span>
                      </div>
                    </SpotlightCard>

                    {/* Spend Proof Gamma Sheets (Clickable) */}
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-black/[0.08] bg-white">
                      <div>
                        <div className="text-[11px] font-semibold text-zinc-700 uppercase mb-2 flex items-center justify-between">
                          <span>{isKurdish ? 'بەڵگەی خەرجی و داتاکان' : 'AUDITED SPEND DATA'}</span>
                          <span className="text-[10px] text-zinc-400 font-mono">2 SHEETS</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {dataProofImages.map((src, i) => (
                            <div
                              key={i}
                              onClick={() => setActiveImg(src)}
                              className="group relative h-16 sm:h-20 rounded-xl overflow-hidden bg-zinc-100 border border-black/[0.08] cursor-pointer"
                            >
                              <img
                                src={src}
                                alt={`Data Proof ${i + 1}`}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 size={13} className="text-white" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-2 text-center">
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
                    <SpotlightCard className="p-5 sm:p-6 md:p-7 h-full flex flex-col justify-between border-black/[0.08] bg-white">
                      {/* Top Bar: Stars, Source Badge, and Navigation */}
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.05]">
                          {/* Stars */}
                          <div className="flex items-center gap-1 text-[#D97706]">
                            {Array.from({ length: testimonialsList[activeTestimonialIndex]?.rating || 5 }).map((_, i) => (
                              <Star key={i} size={15} className="fill-[#D97706] text-[#D97706]" />
                            ))}
                            <span className="text-xs font-mono text-zinc-700 ms-1.5 font-bold">5.0</span>
                          </div>

                          {/* Source & Controls */}
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-full bg-zinc-100 border border-black/[0.06] text-[10px] text-zinc-600 font-medium">
                              {testimonialsList[activeTestimonialIndex]?.source === 'Facebook' ? 'Facebook Review' : 'Verified Message'}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() =>
                                  setActiveTestimonialIndex((prev) =>
                                    prev === 0 ? testimonialsList.length - 1 : prev - 1
                                  )
                                }
                                className="w-7 h-7 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
                                aria-label="Previous Review"
                              >
                                <ChevronLeft size={14} />
                              </button>
                              <span className="text-[11px] font-mono text-zinc-500 px-1 font-semibold">
                                0{activeTestimonialIndex + 1} / {testimonialsList.length}
                              </span>
                              <button
                                onClick={() =>
                                  setActiveTestimonialIndex((prev) =>
                                    prev === testimonialsList.length - 1 ? 0 : prev + 1
                                  )
                                }
                                className="w-7 h-7 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
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
                            className="text-[#03142B]/10 absolute -top-2 start-0 pointer-events-none"
                          />
                          <p className="text-sm sm:text-base md:text-[17px] text-[#0A0A0C] font-medium leading-relaxed relative z-10 ps-3 sm:ps-4">
                            «{testimonialsList[activeTestimonialIndex]?.text}»
                          </p>
                        </div>
                      </div>

                      {/* Author Info & Client Quick Pills */}
                      <div className="mt-4 pt-3 border-t border-black/[0.05]">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center text-xs font-bold text-[#03142B]">
                              {testimonialsList[activeTestimonialIndex]?.initials || 'HB'}
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-[#0A0A0C]">
                                {testimonialsList[activeTestimonialIndex]?.name}
                              </div>
                              <div className="text-[11px] text-zinc-500">
                                {testimonialsList[activeTestimonialIndex]?.role || (isKurdish ? 'کڕیاری سەلمێنراو' : 'Verified Client')}
                              </div>
                            </div>
                          </div>

                          <div className="text-[11px] text-emerald-700 flex items-center gap-1.5 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
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
                              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                                activeTestimonialIndex === idx
                                  ? 'bg-[#03142B] !text-white shadow-xs'
                                  : 'bg-zinc-100 text-zinc-600 hover:text-[#0A0A0C] border border-black/[0.06]'
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
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-[#03142B]/20 bg-white">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-[#03142B] uppercase">
                            {isKurdish ? 'متمانەی کڕیاران' : 'CLIENT SATISFACTION'}
                          </span>
                          <Sparkles size={13} className="text-[#0B3275]" />
                        </div>
                        <div className="text-3xl font-extrabold text-[#03142B] tracking-tight mt-0.5 font-mono">
                          5.0 / 5.0
                        </div>
                        <div className="flex items-center gap-1 text-[#D97706] my-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12} className="fill-[#D97706]" />
                          ))}
                          <span className="text-xs text-zinc-500 ms-1 font-medium">
                            {isKurdish ? '١٠٠٪ ڕەزامەندی' : '100% Satisfaction'}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                          {isKurdish
                            ? 'زیاتر لە ١٠٠+ براند لە کوردستان و عێراق پشتیان بە سیستەمەکەمان بەستووە بۆ گەشەکردن.'
                            : 'Over 100+ premier brands in Kurdistan & Iraq scale their inbound customer pipeline with us.'}
                        </p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-black/[0.05] flex items-center justify-between text-xs">
                        <span className="text-zinc-500">{isKurdish ? 'براندی چالاک:' : 'Active Brands:'}</span>
                        <span className="text-[#0A0A0C] font-mono font-bold">100+</span>
                      </div>
                    </SpotlightCard>

                    {/* Next Review Preview */}
                    <SpotlightCard className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-black/[0.08] bg-white">
                      <div>
                        <div className="text-[10px] font-semibold text-zinc-500 uppercase mb-1">
                          {isKurdish ? 'شایەتییەکی تر:' : 'NEXT CLIENT REVIEW:'}
                        </div>
                        <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                          «{testimonialsList[(activeTestimonialIndex + 1) % testimonialsList.length]?.text}»
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setActiveTestimonialIndex((prev) => (prev + 1) % testimonialsList.length)
                        }
                        className="mt-2 text-start text-xs font-semibold text-[#0B3275] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isKurdish ? 'خوێندنەوەی ئەم شایەتییە' : 'Read full quote'}</span>
                        {isRTL ? <ArrowLeft size={11} /> : <ArrowRight size={11} />}
                      </button>
                    </SpotlightCard>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Ambient Partner Logos Ticker (Clean Monochrome) ── */}
            <div className="w-full overflow-hidden relative py-2 sm:py-3 my-1 opacity-40 hover:opacity-85 transition-opacity">
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
              <div className="marquee-track flex items-center gap-8 whitespace-nowrap" style={{ animationDuration: '45s' }}>
                {[...clients, ...clients].map((src, i) => (
                  <div key={i} className="h-4 sm:h-5 flex items-center shrink-0">
                    <img
                      src={src}
                      alt="Brand Partner"
                      className="h-full w-auto object-contain filter grayscale opacity-70"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Unified Minimalist Luxury Dock with Real Client Testimonial Ticker ── */}
            <div className="w-full p-3 sm:px-5 sm:py-2.5 rounded-2xl border border-black/[0.08] bg-white/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-sm">
              <button
                onClick={() => setProofTab('testimonials')}
                className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 truncate text-start cursor-pointer hover:text-[#0A0A0C] transition-colors group flex-1 max-w-full"
                aria-label="View Client Testimonials"
              >
                <Quote size={13} className="text-[#0B3275] shrink-0" />
                <span className="truncate">
                  «{testimonialsList[dockReviewIndex]?.text}»
                </span>
                <span className="text-[11px] font-semibold text-[#0A0A0C] shrink-0 hidden sm:inline">
                  — {testimonialsList[dockReviewIndex]?.name}
                </span>
                <span className="text-[10px] text-[#D97706] shrink-0 font-medium hidden md:inline">
                  ★★★★★
                </span>
                <span className="text-[10px] text-zinc-400 group-hover:text-[#0B3275] transition-colors shrink-0 underline ms-1 hidden lg:inline">
                  {isKurdish ? 'بینینی شایەتییەکان' : 'View Reviews'}
                </span>
              </button>

              <button
                onClick={() => setShowArchiveModal(true)}
                className="w-full sm:w-auto justify-center px-4 py-2 rounded-full border border-black/[0.1] bg-white hover:bg-zinc-50 text-xs font-semibold text-[#0A0A0C] transition-all cursor-pointer flex items-center gap-2 shrink-0 hover:border-[#03142B]"
              >
                <Grid size={13} className="text-[#0B3275]" />
                <span>{isKurdish ? 'ئەرشیفی ١٥٠+ کار' : 'All 150+ Archive'}</span>
                {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SLIDE 4: بەشی چوارەم: پاکێجەکان و وەبەرهێنان (PAGES 4 & 5)           */}
        {/* ==================================================================== */}
        <section
          ref={(el) => (slideRefs.current[3] = el)}
          id="slide-4"
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#FAFAFA]"
        >
          <div className="max-w-6xl w-full mx-auto my-auto flex flex-col items-center py-4">
            {/* Header: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_PRO }}
              className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#03142B] px-3.5 py-1.5 rounded-full border border-[#03142B]/20 bg-[#03142B]/[0.08] mb-3 sm:mb-4 shadow-xs">
                <Sparkles size={12} className="text-[#0B3275]" />
                <span>{isKurdish ? 'پاکێجەکان و وەبەرهێنان' : 'PACKAGES & PRICING'}</span>
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A0A0C] leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'سیستەمی گونجاو بۆ قۆناغی ئێستای بزنسەکەت هەڵبژێرە'
                  : 'Choose the Right Acquisition Engine for Your Business Stage'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-3 max-w-2xl mx-auto leading-relaxed">
                {isKurdish
                  ? 'نرخی ڕوون، بێ تێچووی شاراوە، لەگەڵ گەرەنتی ئەنجامی مسۆگەر لەسەر داتا.'
                  : 'Transparent retainers, zero hidden markups, paired with a verifiable 14-day performance guarantee.'}
              </p>
            </motion.div>

            {/* 3 Packages Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-6 sm:mb-8 items-stretch">
              
              {/* Package 1: Sales Launch */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-black/[0.08] bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-black/[0.15] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">
                      {isKurdish ? 'دەستپێکی فرۆش' : 'VALIDATION SPRINT'}
                    </span>
                    <span className="text-[10px] text-zinc-600 font-medium px-2 py-0.5 rounded-full bg-zinc-100 border border-black/[0.06]">
                      {isKurdish ? 'تاقیکردنەوە' : 'Sprint'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A0A0C] mb-2 font-mono">
                    Sales Launch
                  </h3>

                  {/* Price */}
                  <div className="mb-4 pb-3 border-b border-black/[0.06]">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0C] tracking-tight font-mono">
                      $150
                      <span className="text-xs font-normal text-zinc-500 ms-1.5 font-sans">
                        {isKurdish ? '/ یەک جار' : '/ One-time'}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {isKurdish
                        ? 'تایبەت بەو بزنسانەی دەیانەوێت بە کەمترین تێچوو و بەبێ پابەندبوونی مانگانە، کاریگەری سیستەمی HBgrow تاقیبکەنەوە.'
                        : 'For businesses wanting to test HBgrow’s conversion engine with minimal risk and zero monthly commitment.'}
                    </p>
                  </div>

                  {/* Scannable Deliverables */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'داڕشتنی ئۆفەری سەرەکی فرۆش' : 'Core High-Converting Sales Offer'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? '٣ ڤیدیۆ ڕیلی مۆنتاژکراو + ٣ دیزاین' : '3 High-Retention Reels + 3 Ad Designs'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'نووسینی دەق و سیناریۆی فرۆش' : 'Persuasive Scriptwriting & Hooks'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'ڕێکخستنی کەمپەینی نامە لە Meta' : 'Targeted Meta Messaging Campaign'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'ماوەی کارکردن: ١٤ بۆ ٢٠ ڕۆژ' : 'Sprint Duration: 14 to 20 days'}</span>
                    </div>
                  </div>

                  {/* Special Discount Notice */}
                  <div className="mt-4 p-2.5 rounded-xl bg-zinc-50 border border-black/[0.05] text-[11px] text-[#03142B] font-semibold leading-relaxed">
                    {isKurdish
                      ? '💡 داشکاندن: لە کاتی نوێکردنەوە بۆ پاکێجی مانگانە، ٧٥$ داشکاندنت بۆ دەکرێت.'
                      : '💡 Upgrade Bonus: $75 credited toward your next monthly retainer.'}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06]">
                  <WireframeCTA
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت بە پاکێجی Sales Launch ($150) دەستپێبکەم بۆ بزنسەکەم.'
                        : 'Hello HBgrow, I want to start with the Sales Launch package ($150).'
                    )}
                    className="w-full !py-3 text-xs font-semibold !bg-white hover:!bg-[#03142B] !text-[#0A0A0C] hover:!text-white !border-black/[0.12] hover:!border-[#03142B]"
                  >
                    <WhatsAppIcon size={14} />
                    <span>{isKurdish ? 'بەم پاکێجە دەستپێبکە' : 'Start with Sales Launch'}</span>
                    {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                  </WireframeCTA>
                </div>
              </SpotlightCard>

              {/* Package 2: Sales Engine (Featured) */}
              <SpotlightCard className="relative p-6 sm:p-7 flex flex-col justify-between rounded-3xl border-2 border-[#03142B] bg-gradient-to-b from-white via-white to-zinc-50/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(3,20,43,0.12)] hover:border-[#03142B] transition-all scale-[1.02] z-10">
                <div>
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-1.5">
                    <span className="text-[11px] font-bold text-[#0B3275] uppercase tracking-wider">
                      {isKurdish ? 'بزوێنەری فرۆش' : 'GROWTH ENGINE'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#03142B] text-white text-[10px] font-bold shadow-xs">
                      {isKurdish ? '⭐ باشترین هەڵبژاردە' : '⭐ MOST POPULAR'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0A0C] mb-2 font-mono">
                    Sales Engine
                  </h3>

                  {/* Price */}
                  <div className="mb-4 pb-3 border-b border-black/[0.06]">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#03142B] tracking-tight font-mono">
                      $350
                      <span className="text-xs font-normal text-zinc-500 ms-1.5 font-sans">
                        {isKurdish ? '/ مانگانە' : '/ Month'}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {isKurdish
                        ? 'بۆ بزنس و براندێک کە دەیەوێت هەموو مانگێک بە پلان و سیستەمێکی جێگیر کڕیاری نوێ و فرۆشی بەردەوام بەدەستبهێنێت.'
                        : 'Engineered for businesses requiring a steady stream of qualified inbound buyer inquiries each month.'}
                    </p>
                  </div>

                  {/* Scannable Deliverables */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check size={10} />
                      </div>
                      <strong className="text-zinc-900">{isKurdish ? 'هەموو خزمەتگوزارییەکانی Sales Launch' : 'All Sales Launch Deliverables'}</strong>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-800 font-medium">{isKurdish ? '٨ بەرهەمی تایبەت (٤ ڤیدیۆ ڕیل + ٤ دیزاین)' : '8 Assets / Month (4 Reels + 4 Designs)'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'بەڕێوەبردنی هەفتانەی کامپەینەکان' : 'Weekly Campaign Management & Tuning'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'نوێکردنەوە و پەرەپێدانی ئۆفەری فرۆش' : 'Monthly Offer Iteration & Hook Refresh'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'سکرێپت و ڕاهێنانی ستاف بۆ فرۆش لە نامە' : 'Sales Scripting for Your Chat Admins'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B] flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'بەڕێوەبردنی سپۆنسەر تا 1,500$ لە مانگێکدا' : 'Manages Ad Spend up to $1,500/mo'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06]">
                  <WireframeCTA
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت بە پاکێجی Sales Engine ($350) دەستپێبکەم بۆ بزنسەکەم.'
                        : 'Hello HBgrow, I want to partner on the Sales Engine package ($350/mo).'
                    )}
                    isPrimary={true}
                    className="w-full !py-3.5 text-xs font-bold shadow-md"
                  >
                    <WhatsAppIcon size={14} />
                    <span>{isKurdish ? 'ببە بە خاوەنی بزوێنەری فرۆش' : 'Claim Sales Engine'}</span>
                    {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                  </WireframeCTA>
                </div>
              </SpotlightCard>

              {/* Package 3: Sales Machine */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-black/[0.08] bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-black/[0.15] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">
                      {isKurdish ? 'ماشینی فرۆش' : 'ENTERPRISE PARTNER'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#03142B]/10 text-[#03142B] border border-[#03142B]/20 text-[10px] font-bold">
                      VIP Partner
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A0A0C] mb-2 font-mono">
                    Sales Machine
                  </h3>

                  {/* Price */}
                  <div className="mb-4 pb-3 border-b border-black/[0.06]">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0C] tracking-tight font-mono">
                      $750
                      <span className="text-xs font-normal text-zinc-500 ms-1.5 font-sans">
                        {isKurdish ? '/ مانگانە' : '/ Month'}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      {isKurdish
                        ? 'تایبەت بە کلینیکەکان، شۆڕووم، پڕۆژەکانی عقارات و کۆمپانیاکان. ئێمە لە وێنەگرتنەوە تا هێنانی کڕیار و وەڵامدانەوەی نامەکان جێبەجێ دەکەین.'
                        : 'End-to-end turnkey acquisition for clinics, real estate, and enterprise brands — including chat handling.'}
                    </p>
                  </div>

                  {/* Scannable Deliverables */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <strong className="text-zinc-900">{isKurdish ? 'هەموو خزمەتگوزارییەکانی Sales Engine' : 'All Sales Engine Deliverables'}</strong>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? '١٢ بەرهەم مانگانە (٦ ڕیل + ٦ دیزاین)' : '12 Assets / Mo (6 Reels + 6 Designs)'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-800 font-medium">{isKurdish ? 'وەڵامدانەوەی کڕیارە جدییەکان تا ٣٠٠ نامە' : 'HBgrow Team Answers up to 300 Buyers'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'سیستەمی بەدواداچوون (Retargeting & Follow-up)' : 'Retargeting & Follow-up System'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'کۆبوونەوەی ستراتیژی مانگانە' : 'Monthly Executive Strategy Review'}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                        <Check size={10} />
                      </div>
                      <span className="text-zinc-700">{isKurdish ? 'بەڕێوەبردنی سپۆنسەر تا 3,000$ لە مانگێکدا' : 'Manages Ad Spend up to $3,000/mo'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06]">
                  <WireframeCTA
                    href={getWhatsAppUrl(
                      isKurdish
                        ? 'سڵاو HBgrow، دەمەوێت کۆبوونەوەیەکی تایبەت دابنێین بۆ پاکێجی Sales Machine ($750) بۆ براندەکەم.'
                        : 'Hello HBgrow, I want to book a VIP strategy session for Sales Machine ($750/mo).'
                    )}
                    className="w-full !py-3 text-xs font-semibold !bg-white hover:!bg-[#03142B] !text-[#0A0A0C] hover:!text-white !border-black/[0.12] hover:!border-[#03142B]"
                  >
                    <WhatsAppIcon size={14} />
                    <span>{isKurdish ? 'داوای پاکێجی VIP بکە' : 'Request VIP Partnership'}</span>
                    {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                  </WireframeCTA>
                </div>
              </SpotlightCard>

            </div>

            {/* 14-Day Performance Guarantee Card */}
            <div className="w-full p-5 sm:p-6 md:p-7 rounded-2xl border border-black/[0.09] bg-white shadow-xs mb-4 text-start">
              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl border border-[#03142B]/20 bg-[#03142B]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#03142B]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#03142B] px-2 py-0.5 rounded-full bg-[#03142B]/10">
                      {isKurdish ? 'گەرەنتی' : 'GUARANTEE'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0A0A0C]">
                      {isKurdish ? 'گەرەنتی ١٤ ڕۆژ ئەنجامی مسۆگەر: ئێمە بە داتا کار دەکەین نەک بە قسە.' : '14-Day Verifiable Performance Guarantee: Results Driven by Data.'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed max-w-3xl">
                    {isKurdish
                      ? 'ئەگەر لە ١٤ ڕۆژی یەکەمی کامپەینەکەتدا نەگەیشتین بەو ژمارە نامەیەی کە لە سەرەتادا لەسەری ڕێکدەکەوین، بەبێ هیچ کرێیەکی زیادە بەردەوام دەبین لە کارکردن تاوەکو دەگەین بە ئامانجەکە.'
                      : 'If we do not achieve our mutually agreed lead volume target in the first 14 days, our team works at zero additional fee until the target is met.'}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1.5 font-medium">
                    {isKurdish
                      ? '(مەرجی گەرەنتی: بەردەوامبوونی بودجەی سپۆنسەری دیاریکراو و پەسەندکردنی ئۆفەر و سیستەمەکە لەلایەن خۆتەوە).'
                      : '(Condition: Continuous active ad budget and owner approval of the offer and system architecture).'}
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Transparency Banner */}
            <div className="w-full p-4 sm:p-5 rounded-2xl border border-black/[0.06] bg-zinc-50/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-start">
              <div className="flex items-center gap-3">
                <span className="text-base">⚠️</span>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {isKurdish
                    ? 'تێبینی گرنگ: نرخەکانی سەرەوە کرێی کار و سیستەمی HBgrowـە. بودجەی سپۆنسەر بە تەواوی جیاوازە، ڕاستەوخۆ دەدرێت بە Meta و ئەکاونتی ڕیکلامەکە ٪١٠٠ لەژێر کۆنترۆڵ و خاوەندارێتی خۆتدا دەبێت.'
                    : 'Important Note: Retainers reflect HBgrow’s system fees. Ad spend is paid directly to Meta with zero markup and 100% owner control.'}
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col gap-1.5 shrink-0 text-[10px] text-zinc-700 font-mono font-medium">
                <span className="px-2 py-0.5 rounded-full bg-white border border-black/[0.06] text-center">
                  ✓ {isKurdish ? '٠٪ زیادکراو لەسەر ڕیکلام' : '0% Ad Markup'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white border border-black/[0.06] text-center">
                  ✓ {isKurdish ? 'ئەکاونتی مێتا لەژێر دەستی خۆتە' : 'Client Owns Account'}
                </span>
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
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#FFFFFF]"
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
              <div className="inline-block text-xs font-semibold text-[#03142B] px-3.5 py-1.5 rounded-full border border-[#03142B]/20 bg-[#03142B]/[0.08] mb-3 sm:mb-4 shadow-xs">
                {isKurdish ? 'بەشی پێنجەم: دروستکردنی پلانی تایبەت (The Smart Calculator)' : 'THE SMART CALCULATOR'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A0A0C] max-w-3xl mx-auto leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'کۆنترۆڵی خەرجییەکانت بکە. تەنیا پارەی ئەو خزمەتگوزارییە بدە کە پێویستتە.'
                  : 'Take control of your expenditure. Pay only for the deliverables you require.'}
              </h2>
              {/* Sub-headline */}
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 max-w-2xl mx-auto mt-3 leading-relaxed font-normal">
                {isKurdish
                  ? 'ئەگەر پێویستت بە پاکێجی تەواوی مانگانە نییە، یان دەتەوێت خزمەتگوزاری زیاتر بۆ پاکێجەکەت زیاد بکەیت، لە ڕێگەی ئەم ژمێرەرە زیرەکەوە پلانی تایبەت بە بزنسەکەت دابڕێژە. بێ گرێبەستی ئاڵۆز، بێ خەرجی شاراوە.'
                  : 'If you don’t need a full monthly package or want to supplement your current scope, design your bespoke plan with this smart calculator. Zero complex contracts, zero hidden costs.'}
              </p>
            </motion.div>

            {/* 3 Calculator Items */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 mb-6 sm:mb-8">
              {/* Item 1 */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-black/[0.08] bg-white">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <Camera size={20} className="text-[#03142B]" />
                    <span className="text-xs text-[#03142B] font-bold">١١٠,٠٠٠ دینار</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0A0C] mb-1.5">
                    {isKurdish ? '📸 ڤیدیۆی پرۆفیشناڵ بە کامێرا' : 'Camera Videography'}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-700 mb-3">
                    {isKurdish ? 'نرخ: ١١٠,٠٠٠ دینار (بۆ هەر سەردانێک / ٣ تا ٤ ڤیدیۆ)' : '110,000 IQD per session (3-4 videos)'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {isKurdish
                      ? 'هێنانی تیمی وێنەگرتنی پرۆفیشناڵ بۆ ناو شوێنی کارەکەت بە باشترین کوالێتی.'
                      : 'Deploying our professional video crew to your business location with cinema-grade quality.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-600 font-medium">{isKurdish ? 'ژمارەی سەردان:' : 'Sessions:'}</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setCameraSessions((prev) => Math.max(0, prev - 1))}
                      disabled={cameraSessions === 0}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 hover:text-[#0A0A0C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                      aria-label="Decrease camera sessions"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-bold text-sm sm:text-base text-[#0A0A0C] font-mono">{cameraSessions}</span>
                    <button
                      onClick={() => setCameraSessions((prev) => prev + 1)}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 hover:text-[#0A0A0C] transition-all cursor-pointer"
                      aria-label="Increase camera sessions"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>

              {/* Item 2 */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-black/[0.08] bg-white">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <Video size={20} className="text-[#03142B]" />
                    <span className="text-xs text-[#03142B] font-bold">٣٠,٠٠٠ دینار</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0A0C] mb-1.5">
                    {isKurdish ? '🎬 مۆنتاژ و ئیدیتینگی ڤیدیۆ' : 'Professional Video Editing'}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-700 mb-3">
                    {isKurdish ? 'نرخ: ٣٠,٠٠٠ دینار (بۆ هەر ڤیدیۆیەک)' : '30,000 IQD per video'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {isKurdish
                      ? 'مۆنتاژی پێشکەوتوو بە ستراتیژی ڕاگرتنی سەرنج (Retention)، دەنگ، و ئیفێکتی تایبەت بۆ ئەوەی ڤیدیۆکەت زۆرترین بینەر بهێڵێتەوە.'
                      : 'Advanced video editing optimized for audience retention, sound design, and custom visual effects.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-600 font-medium">{isKurdish ? 'ژمارەی ڤیدیۆ:' : 'Videos:'}</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setVideoEdits((prev) => Math.max(0, prev - 1))}
                      disabled={videoEdits === 0}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 hover:text-[#0A0A0C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                      aria-label="Decrease video edits"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-bold text-sm sm:text-base text-[#0A0A0C] font-mono">{videoEdits}</span>
                    <button
                      onClick={() => setVideoEdits((prev) => prev + 1)}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 hover:text-[#0A0A0C] transition-all cursor-pointer"
                      aria-label="Increase video edits"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>

              {/* Item 3 */}
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between border-black/[0.08] bg-white">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <Palette size={20} className="text-[#03142B]" />
                    <span className="text-xs text-[#03142B] font-bold">١٠,٠٠٠ دینار</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0A0C] mb-1.5">
                    {isKurdish ? '🎨 گرافیک دیزاینی پێشکەوتوو' : 'Graphic Design'}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-700 mb-3">
                    {isKurdish ? 'نرخ: ١٠,٠٠٠ دینار (بۆ هەر دیزاینێک)' : '10,000 IQD per design'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {isKurdish
                      ? 'دیزاینی ناوازە بۆ پۆست، ستۆری، یان ڕیکلامەکانت کە متمانەی براندەکەت لەلای کڕیار بەرز دەکاتەوە.'
                      : 'Bespoke designs for feed posts, stories, or ads that elevate client trust in your brand.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-zinc-600 font-medium">{isKurdish ? 'ژمارەی دیزاین:' : 'Designs:'}</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setGraphicDesigns((prev) => Math.max(0, prev - 1))}
                      disabled={graphicDesigns === 0}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 hover:text-[#0A0A0C] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                      aria-label="Decrease graphic designs"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 sm:w-9 text-center font-bold text-sm sm:text-base text-[#0A0A0C] font-mono">{graphicDesigns}</span>
                    <button
                      onClick={() => setGraphicDesigns((prev) => prev + 1)}
                      className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 active:scale-95 flex items-center justify-center text-zinc-700 hover:text-[#0A0A0C] transition-all cursor-pointer"
                      aria-label="Increase graphic designs"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Dynamic Total */}
            <SpotlightCard className="w-full p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border-black/[0.1] bg-gradient-to-r from-zinc-50 to-white shadow-md">
              <div className="text-center md:text-start">
                <div className="text-xs sm:text-sm font-semibold text-zinc-600">
                  {isKurdish ? '📊 کۆی گشتی وەبەرهێنانەکەت:' : '📊 TOTAL ESTIMATED INVESTMENT:'}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0C] mt-1.5 tracking-tight font-mono">
                  {formatIQD(totalCalculatorIQD)}{' '}
                  <span className="text-base sm:text-xl font-normal text-zinc-500 font-sans">
                    {isKurdish ? 'دینار' : 'IQD'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-600 mt-1.5 font-medium">
                  {isKurdish
                    ? `${cameraSessions} سەردان • ${videoEdits} مۆنتاژ • ${graphicDesigns} دیزاین`
                    : `${cameraSessions} Session(s) • ${videoEdits} Video(s) • ${graphicDesigns} Design(s)`}
                </div>
              </div>

              <WireframeCTA href={getCalculatorWhatsAppUrl()} isPrimary={true} className="w-full md:w-auto !py-3.5 sm:!py-4 !px-8 text-xs sm:text-sm font-semibold shadow-[0_4px_24px_rgba(3,20,43,0.3)]">
                <WhatsAppIcon size={16} />
                <span>{isKurdish ? 'داواکردنی تاوتوێکردنی ئەم پلانە' : 'Submit Scope for Strategy Review'}</span>
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
          className="relative w-full min-h-[100dvh] snap-start flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-24 overflow-y-auto bg-[#FAFAFA]"
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
              <div className="inline-block text-xs font-semibold text-[#03142B] px-3.5 py-1.5 rounded-full border border-[#03142B]/20 bg-[#03142B]/[0.08] mb-3 sm:mb-4 shadow-xs">
                {isKurdish ? 'بەشی شەشەم: چۆن دەست پێدەکەین؟ (Frictionless Onboarding)' : 'FRICTIONLESS ONBOARDING'}
              </div>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A0A0C] max-w-3xl mx-auto leading-snug sm:leading-tight ${isKurdish ? 'tracking-normal' : 'tracking-tighter'}`}>
                {isKurdish
                  ? 'دەتەوێت براندەکەت قازانجی ڕاستەقینە بکات؟ دەستپێکردن لەگەڵماندا تەنیا ٣ هەنگاوی سادەیە.'
                  : 'Want your brand to make real profit? Getting started with us is only 3 simple steps.'}
              </h2>
              {/* Sub-headline */}
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 max-w-2xl mx-auto mt-3 leading-relaxed font-normal">
                {isKurdish
                  ? 'سیستەمێکی کارکردنی بێ ئەرک. تۆ کاتت نییە، بۆیە بە تیمە هەموو شتێکمان ئاسان کردووە بۆت. ئێمە هەموو کارە قورسەکان دەکەین، تۆش تەنیا سەیری ئەنجامەکان بکە.'
                  : 'Frictionless workflow. You don’t have time, so as a team we have simplified everything for you. We handle the heavy lifting; you monitor the results.'}
              </p>
            </motion.div>

            {/* 3-Step Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 w-full mb-6 sm:mb-8 text-start">
              {/* Step 1 */}
              <SpotlightCard className="p-6 sm:p-7 border-black/[0.08] bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#0B3275] mb-2.5 font-bold tracking-wider">01 / DISCOVERY</div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0A0C] mb-2">
                    {isKurdish ? 'هەنگاوی ١: دیاریکردنی کێشەکان (١٥-٢٠ خولەک)' : 'Step 1: Discovery (15-20 min)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {isKurdish
                      ? 'پەیوەندییەکی کورت دەکەین. گوێ لە کێشەکانی ئێستای بازاڕەکەت دەگرین، ئامانجەکانت دیاری دەکەین، و تێدەگەین کڕیارەکانت کێن و چۆن بیانگرین. بێ کۆبوونەوەی درێژ و بێزارکەر.'
                      : 'A brief call. We listen to current market roadblocks, identify your targets, and pinpoint who your buyers are. Zero lengthy or exhausting meetings.'}
                  </p>
                </div>
              </SpotlightCard>

              {/* Step 2 */}
              <SpotlightCard className="p-6 sm:p-7 border-black/[0.08] bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#0B3275] mb-2.5 font-bold tracking-wider">02 / ARCHITECTURE</div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0A0C] mb-2">
                    {isKurdish ? 'هەنگاوی ٢: پلان و ستراتیژی (٥-٧ ڕۆژ)' : 'Step 2: Strategy (5-7 Days)'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {isKurdish
                      ? 'تیمەکەمان دەست دەکات بە کار. لە ماوەی کەمتر لە هەفتەیەکدا، سیناریۆی ڤیدیۆکان، دیزاینەکان، و ستراتیژی کەمپەینەکانت بۆ ئامادە دەکەین و پێت پیشان دەدەین بۆ پەسەندکردن.'
                      : 'Our team starts execution. In under a week, scripts, visual designs, and campaign roadmaps are prepared and presented for your sign-off.'}
                  </p>
                </div>
              </SpotlightCard>

              {/* Step 3 */}
              <SpotlightCard className="p-6 sm:p-7 border-black/[0.08] bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#0B3275] mb-2.5 font-bold tracking-wider">03 / CONVERSION</div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0A0C] mb-2">
                    {isKurdish ? 'هەنگاوی ٣: جێبەجێکردن و قازانج (پێشوازی لە کڕیار بکە)' : 'Step 3: Execution & Profit'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {isKurdish
                      ? 'سیستەمەکە کارا دەکەین. ڤیدیۆکان پۆست دەکرێن و کەمپەینە زیرەکەکانی Meta ڕادەگەیەنین. لێرەوە ئەرکی تۆ تەنیا وەڵامدانەوەی نامەی کڕیارە نوێیەکان و فرۆشتنی بەرهەمەکانتە.'
                      : 'We activate the system. Videos are deployed and smart Meta campaigns go live. Your only task is responding to incoming buyer inquiries and fulfilling orders.'}
                  </p>
                </div>
              </SpotlightCard>
            </div>

            {/* Ultimate CTA Card */}
            <SpotlightCard className="w-full p-7 sm:p-9 md:p-11 mb-6 sm:mb-8 text-center border-black/[0.08] bg-white shadow-lg">
              <div className={`text-lg sm:text-2xl font-bold text-[#0A0A0C] mb-2.5 max-w-xl mx-auto ${isKurdish ? 'tracking-normal' : 'tracking-tight'}`}>
                {isKurdish ? 'ئامادەی بۆ گەشەکردنی حەقیقی؟' : 'Ready for genuine growth?'}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 mb-6 sm:mb-7 max-w-lg mx-auto font-normal">
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
                  className="w-full sm:w-auto !py-3.5 sm:!py-4 !px-8 text-xs sm:text-sm font-semibold shadow-[0_4px_24px_rgba(3,20,43,0.35)]"
                >
                  <WhatsAppIcon size={16} />
                  <span>{isKurdish ? 'کاتێک دیاریبکە بۆ گفتوگۆکردن' : 'Schedule Strategy Chat'}</span>
                  {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </WireframeCTA>

                {onScheduleClick && (
                  <button
                    onClick={onScheduleClick}
                    className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full border border-black/[0.1] bg-white hover:bg-zinc-50 text-xs sm:text-sm font-semibold text-zinc-800 transition-colors cursor-pointer shadow-xs"
                  >
                    {isKurdish ? 'دیاریکردنی کاتی پەیوەندی' : 'Calendar Booking'}
                  </button>
                )}
              </div>
            </SpotlightCard>

            {/* Payment Trust Signals */}
            <div className="w-full max-w-4xl p-5 sm:p-7 rounded-2xl border border-black/[0.08] bg-white shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lock size={13} className="text-[#03142B]" />
                <div className="text-xs sm:text-sm font-semibold text-zinc-700 text-center tracking-wider uppercase">
                  {isKurdish ? 'شێوازە فەرمییەکانی پارەدان لە عێراق و کوردستان' : 'OFFICIAL IRAQI PAYMENT & SETTLEMENT NETWORKS'}
                </div>
              </div>

              {/* Responsive Grid for Real Payment Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 items-stretch py-2">
                {/* FIB */}
                <div className="rounded-2xl bg-[#03142B] border border-[#03142B]/30 hover:border-[#0A2E66] transition-all p-3 sm:p-4 flex flex-col items-center justify-center gap-2 group cursor-default min-h-[82px] shadow-sm">
                  <RealFIBLogo />
                  <span className="text-[10px] text-zinc-300 group-hover:text-white transition-colors font-medium">
                    {isKurdish ? 'بانکی یەکەمی عێراقی' : 'First Iraqi Bank'}
                  </span>
                </div>

                {/* FastPay */}
                <div className="rounded-2xl bg-[#03142B] border border-[#03142B]/30 hover:border-[#0A2E66] transition-all p-3 sm:p-4 flex flex-col items-center justify-center gap-2 group cursor-default min-h-[82px] shadow-sm">
                  <RealFastPayLogo />
                  <span className="text-[10px] text-zinc-300 group-hover:text-white transition-colors font-medium">
                    {isKurdish ? 'فاست پەی' : 'FastPay Wallet'}
                  </span>
                </div>

                {/* Asia Pay */}
                <div className="rounded-2xl bg-[#03142B] border border-[#03142B]/30 hover:border-[#0A2E66] transition-all p-3 sm:p-4 flex flex-col items-center justify-center gap-2 group cursor-default min-h-[82px] shadow-sm">
                  <RealAsiaPayLogo />
                  <span className="text-[10px] text-zinc-300 group-hover:text-white transition-colors font-medium">
                    {isKurdish ? 'ئاسیا پەی • Asiacell' : 'Asia Pay (Asiacell)'}
                  </span>
                </div>

                {/* Qi Card */}
                <div className="rounded-2xl bg-[#03142B] border border-[#03142B]/30 hover:border-[#0A2E66] transition-all p-3 sm:p-4 flex flex-col items-center justify-center gap-2 group cursor-default min-h-[82px] shadow-sm">
                  <RealQiCardLogo />
                  <span className="text-[10px] text-zinc-300 group-hover:text-white transition-colors font-medium">
                    {isKurdish ? 'کی کارت' : 'Qi Card Iraq'}
                  </span>
                </div>
              </div>

              {/* Text under logos */}
              <div className="text-xs sm:text-sm text-zinc-500 text-center mt-4 sm:mt-5 font-normal leading-relaxed">
                {isKurdish
                  ? 'پڕۆسەی دارایی و پارەدان بە فەرمی لە ڕێگەی هەژمارە بانکی و پۆرتفۆلیۆ باوەڕپێکراوەکانی عێراق و کوردستان ئەنجام دەدرێت.'
                  : 'All business accounts settled seamlessly via certified domestic Iraqi banking and digital wallet networks.'}
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
            className="fixed inset-0 z-50 bg-white/98 text-[#0A0A0C] backdrop-blur-2xl overflow-y-auto modal-scroll p-4 sm:p-8 flex flex-col items-center"
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <div className="w-full max-w-5xl my-auto py-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.08]">
                <div>
                  <div className="text-[11px] font-mono text-[#0B3275] uppercase tracking-wider mb-1 font-bold">
                    {isKurdish ? 'ئەرشیفی تەواوی نموونە کارەکان' : 'COMPLETE WORK EXAMPLES ARCHIVE'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0A0C]">
                    {isKurdish
                      ? 'زیاتر لە ١٥٠+ بەرهەمی ڤیدیۆ و دیزاینی ڕاستەقینە'
                      : 'Over 150+ Audited Reels & Visual Brand Assets'}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1">
                    {isKurdish
                      ? 'سەرجەم ئەم کارانە لەلایەن تیمی HBgrow بەرهەمهێنراون بۆ براندە پێشەنگەکان لە کوردستان و عێراق.'
                      : 'All assets engineered by HBgrow for enterprise & local brands across Kurdistan & Iraq.'}
                  </p>
                </div>
                <button
                  onClick={() => setShowArchiveModal(false)}
                  className="h-10 w-10 rounded-full border border-black/[0.1] bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 hover:text-black transition-colors cursor-pointer shrink-0"
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
                      ? 'bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-600 hover:text-[#0A0A0C] border border-black/[0.08]'
                  }`}
                >
                  <Video size={13} />
                  <span>{isKurdish ? `🎬 ڤیدیۆ ڕیڵەکان (${videoIds.length})` : `🎬 Video Reels (${videoIds.length})`}</span>
                </button>
                <button
                  onClick={() => setArchiveTab('designs')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'designs'
                      ? 'bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-600 hover:text-[#0A0A0C] border border-black/[0.08]'
                  }`}
                >
                  <Palette size={13} />
                  <span>{isKurdish ? `🎨 گرافیک دیزاینەکان (${designs.length})` : `🎨 Graphic Designs (${designs.length})`}</span>
                </button>
                <button
                  onClick={() => setArchiveTab('meta')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'meta'
                      ? 'bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-600 hover:text-[#0A0A0C] border border-black/[0.08]'
                  }`}
                >
                  <BarChart2 size={13} />
                  <span>{isKurdish ? `📊 ئەنجامی مێتا (${adResults.length})` : `📊 Meta Campaigns (${adResults.length})`}</span>
                </button>
                <button
                  onClick={() => setArchiveTab('testimonials')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    archiveTab === 'testimonials'
                      ? 'bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-600 hover:text-[#0A0A0C] border border-black/[0.08]'
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
                        className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer border border-black/[0.08] hover:border-[#03142B] transition-all duration-300 bg-zinc-100 hover:scale-102 shadow-xs"
                      >
                        <img
                          src={
                            id.startsWith('st-')
                              ? '/images/crumbs_iq.webp'
                              : id.startsWith('dm-')
                                ? (id === 'dm-k3s2QmcsfWuphvMe2Rk' ? '/images/crumbs_iq.webp' : `https://www.dailymotion.com/thumbnail/video/${id.replace('dm-', '')}`)
                                : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
                          }
                          onError={(e) => {
                            if (e.target.src.includes('maxresdefault')) {
                              e.target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                            }
                          }}
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#03142B] transition-all">
                            <Play size={14} className="translate-x-0.5 fill-current" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 inset-x-2 text-[10px] text-zinc-200 truncate font-mono">
                          Reel #{i + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {visibleVideoCount < videoIds.length && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setVisibleVideoCount((prev) => Math.min(prev + 12, videoIds.length))}
                        className="px-6 py-2.5 rounded-full border border-black/[0.1] bg-white hover:bg-zinc-50 text-xs font-semibold text-[#0A0A0C] transition-colors cursor-pointer flex items-center gap-2 hover:border-[#03142B] shadow-xs"
                      >
                        <Grid size={13} className="text-[#0B3275]" />
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
                        className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-black/[0.08] hover:border-[#03142B] transition-all duration-300 bg-zinc-100 hover:scale-102 shadow-xs"
                      >
                        <img
                          src={src}
                          alt="Graphic Design Thumbnail"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
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
                        className="px-6 py-2.5 rounded-full border border-black/[0.1] bg-white hover:bg-zinc-50 text-xs font-semibold text-[#0A0A0C] transition-colors cursor-pointer flex items-center gap-2 hover:border-[#03142B] shadow-xs"
                      >
                        <Grid size={13} className="text-[#0B3275]" />
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
                        className="rounded-2xl border border-black/[0.08] bg-white p-4 flex flex-col justify-between hover:border-[#03142B]/40 transition-colors shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.05]">
                            <span className="text-xs font-mono text-zinc-500">
                              {isKurdish ? `کەمپەینی ٠${i + 1}` : `Campaign 0${i + 1}`}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              {isKurdish ? 'سەلمێنراو' : 'Verified'}
                            </span>
                          </div>

                          <div
                            onClick={() => setActiveImg(campaign.img)}
                            className="group relative h-40 rounded-xl overflow-hidden bg-zinc-100 border border-black/[0.06] cursor-pointer flex items-center justify-center my-2"
                          >
                            <img
                              src={campaign.img}
                              alt={`Meta Campaign ${i + 1}`}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-xs font-semibold text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                                <Maximize2 size={12} className="text-white" />
                                {isKurdish ? 'گەورەکردن' : 'Inspect'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/[0.05]">
                          <div>
                            <div className="text-[10px] text-zinc-500 font-medium">
                              {isKurdish ? 'نامەی کڕیار' : 'Inquiries'}
                            </div>
                            <div className="text-sm sm:text-base font-extrabold text-[#0B3275] font-mono">
                              {campaign.messages}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-zinc-500 font-medium">
                              {isKurdish ? 'بینین' : 'Impressions'}
                            </div>
                            <div className="text-sm sm:text-base font-extrabold text-[#0A0A0C] font-mono">
                              {campaign.impressions}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Spend Proof Charts */}
                  <div className="pt-4 border-t border-black/[0.06]">
                    <div className="text-xs font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                      <BarChart2 size={14} className="text-[#0B3275]" />
                      <span>{isKurdish ? 'بەڵگەنامەی خەرجی و سپۆنسەرەکان (Spend Sheets)' : 'Audited Campaign Spend Sheets'}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dataProofImages.map((src, i) => (
                        <div
                          key={i}
                          onClick={() => setActiveImg(src)}
                          className="group relative h-48 rounded-2xl overflow-hidden bg-zinc-100 border border-black/[0.08] cursor-pointer"
                        >
                          <img
                            src={src}
                            alt={`Audited Spend Proof ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-xs font-semibold text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                              <Maximize2 size={13} className="text-white" />
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
                        className="rounded-2xl border border-black/[0.08] bg-white p-5 flex flex-col justify-between hover:border-[#03142B]/40 transition-colors shadow-xs"
                      >
                        <div>
                          {/* Rating and Source */}
                          <div className="flex items-center justify-between pb-2 mb-3 border-b border-black/[0.05]">
                            <div className="flex items-center gap-0.5 text-[#D97706]">
                              {Array.from({ length: review.rating || 5 }).map((_, starIdx) => (
                                <Star key={starIdx} size={12} className="fill-[#D97706]" />
                              ))}
                            </div>
                            <span className="text-[10px] text-zinc-500 px-2 py-0.5 rounded-full bg-zinc-100 border border-black/[0.06]">
                              {review.source === 'Facebook' ? 'Facebook Review' : 'Verified Message'}
                            </span>
                          </div>

                          {/* Quote */}
                          <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-normal mb-4">
                            «{review.text}»
                          </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-2.5 pt-3 border-t border-black/[0.05]">
                          <div className="w-8 h-8 rounded-full bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center text-xs font-bold text-[#03142B] shrink-0">
                            {review.initials || 'HB'}
                          </div>
                          <div className="truncate">
                            <div className="text-xs font-bold text-[#0A0A0C] truncate">
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

      {/* ─── MODAL 2: Theater Video Modal ───────────────────── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(3,20,43,0.85)] backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveVideo(null);
              }}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close video theater"
            >
              <X size={18} />
            </button>

            <div
              className="w-full max-w-[390px] flex flex-col items-center gap-3.5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 9:16 Video Player Container */}
              <div className="w-full aspect-[9/16] max-h-[76vh] rounded-2xl overflow-hidden border border-white/20 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.7)] relative">
                <iframe
                  className="w-full h-full"
                  src={
                    activeVideo?.startsWith('st-')
                      ? `https://streamable.com/e/${activeVideo.replace('st-', '')}?autoplay=1`
                      : activeVideo?.startsWith('dm-')
                        ? `https://geo.dailymotion.com/player.html?video=${activeVideo.replace('dm-', '')}&autoplay=1`
                        : `https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`
                  }
                  title="HBgrow Portfolio Reel Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* WhatsApp Action Button with Dark Navy Blue Gradient */}
              <a
                href={getWhatsAppUrl(
                  isKurdish
                    ? `سڵاو HBgrow، سەیری ئەم نموونە ڤیدیۆیەتم کرد (${activeVideo?.startsWith('st-') ? 'https://streamable.com/' + activeVideo.replace('st-', '') : activeVideo?.startsWith('dm-') ? 'https://dai.ly/' + activeVideo.replace('dm-', '') : 'https://youtu.be/' + activeVideo}) لە ناو پرێزێنتەیشنەکەتاندا. دەمەوێت ڤیدیۆی هاوشێوە بۆ براندەکەم بەرهەم بهێنین.`
                    : `Hello HBgrow, I watched this portfolio reel (${activeVideo?.startsWith('st-') ? 'https://streamable.com/' + activeVideo.replace('st-', '') : activeVideo?.startsWith('dm-') ? 'https://dai.ly/' + activeVideo.replace('dm-', '') : 'https://youtu.be/' + activeVideo}) in your pitch deck. I would like to produce similar videos for my brand.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(3,20,43,0.4)] hover:shadow-[0_8px_32px_rgba(3,20,43,0.55)] transition-all cursor-pointer"
              >
                <WhatsAppIcon size={14} />
                <span>{isKurdish ? 'داواکردنی بەرهەمهێنانی هاوشێوە لە واتسئەپ' : 'Request Similar Production via WhatsApp'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── MODAL 3: Lightbox Modal ────────────────────────── */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(3,20,43,0.85)] backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveImg(null)}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(null);
              }}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
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
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
              />
              <a
                href={getWhatsAppUrl(
                  isKurdish
                    ? 'سڵاو HBgrow، ئەم نموونە دیزاینەم بەدڵ بوو لە ناو پرێزێنتەیشنەکەتاندا. دەمەوێت دیزاین و فیدی هاوشێوە بۆ براندەکەم دروست بکەین.'
                    : 'Hello HBgrow, I loved this design asset in your pitch deck. I would like to create similar visual assets for my brand.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] !text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(3,20,43,0.4)] hover:shadow-[0_8px_32px_rgba(3,20,43,0.55)] transition-all cursor-pointer"
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
