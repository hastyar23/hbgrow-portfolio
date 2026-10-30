import { useState, useEffect, useRef, useMemo } from 'react';
import { Play, X, Grid, Maximize2, ExternalLink, Sparkles, Flame, CheckCircle2, Star, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { clients, videoIds, designs } from '../data/portfolioData';

// Top curated featured items for the 4 themed showcase cards across categories
const THEMED_CARDS_DATA = {
  ads: [
    {
      theme: 'theme-royal-blue',
      stickerColor: 'statiq-sticker-purple',
      spendKey: 'spend_1',
      spendLabel: {
        ku: '18,309 نامەی فرۆش',
        ar: '18,309 رسالة مبيعات',
        en: '18,309 Sales Inquiries',
      },
      brand: 'Nawandi Awer',
      tag: 'Book Shop',
      src: '/images/nawandi_awer.webp',
      type: 'image',
    },
    {
      theme: 'theme-sky-periwinkle',
      stickerColor: 'statiq-sticker-yellow',
      spendKey: 'spend_2',
      spendLabel: {
        ku: '1,413 نامەی فرۆش',
        ar: '1,413 رسالة مبيعات',
        en: '1,413 Sales Inquiries',
      },
      brand: 'Zesty',
      tag: 'Health & Beauty',
      src: designs[2],
      type: 'image',
    },
    {
      theme: 'theme-forest-emerald',
      stickerColor: 'statiq-sticker-lime',
      spendKey: 'spend_3',
      spendLabel: {
        ku: '13,195 نامەی فرۆش',
        ar: '13,195 رسالة مبيعات',
        en: '13,195 Sales Inquiries',
      },
      brand: 'Abdullah Accessories',
      tag: 'Jewellery & Accessories',
      src: '/images/abdullah_accessories.webp',
      type: 'image',
      showPlayButton: true,
    },
    {
      theme: 'theme-blush-rose',
      stickerColor: 'statiq-sticker-cyan',
      spendKey: 'spend_4',
      spendLabel: {
        ku: '497,560 بینین',
        ar: '497,560 مشاهدة',
        en: '497,560 Views',
      },
      brand: 'Canephora Erbil',
      tag: 'Cafe',
      src: '/images/canephora_erbil.webp',
      type: 'image',
    },
  ],
  videos: [
    {
      theme: 'theme-royal-blue',
      stickerColor: 'statiq-sticker-purple',
      spendKey: 'spend_1',
      spendLabel: {
        ku: '378,000 بینین',
        ar: '378,000 مشاهدة',
        en: '378,000 Views',
      },
      brand: 'Binasaz Engineering',
      tag: 'Engineering Course App',
      id: videoIds[0] || 'VT5BZvIWplg',
      type: 'video',
    },
    {
      theme: 'theme-sky-periwinkle',
      stickerColor: 'statiq-sticker-yellow',
      spendKey: 'spend_2',
      spendLabel: {
        ku: '100,000 بینین',
        ar: '100,000 مشاهدة',
        en: '100,000 Views',
      },
      brand: 'Crumbs IQ',
      tag: 'Local Bakery',
      id: videoIds[1] || 'st-y3h704',
      thumb: '/images/crumbs_iq.webp',
      type: 'video',
    },
    {
      theme: 'theme-forest-emerald',
      stickerColor: 'statiq-sticker-lime',
      spendKey: 'spend_3',
      spendLabel: {
        ku: '125,000 بینین',
        ar: '125,000 مشاهدة',
        en: '125,000 Views',
      },
      brand: 'CHIC MONARCH',
      tag: 'Brand Enthusiast',
      id: videoIds[2] || 'wGJAucD8CVo',
      type: 'video',
    },
    {
      theme: 'theme-blush-rose',
      stickerColor: 'statiq-sticker-cyan',
      spendKey: 'spend_4',
      spendLabel: {
        ku: '392 نامەی فرۆش',
        ar: '392 رسالة مبيعات',
        en: '392 Sales Inquiries',
      },
      brand: 'Axis Design',
      tag: 'Architectural Designer',
      id: videoIds[3] || 'HWz7SrUfUGQ',
      type: 'video',
    },
  ],
  branding: [
    {
      theme: 'theme-royal-blue',
      stickerColor: 'statiq-sticker-purple',
      spendKey: 'spend_1',
      brand: 'Nordic Minimal',
      tag: 'Identity System',
      src: designs[26],
      type: 'image',
    },
    {
      theme: 'theme-sky-periwinkle',
      stickerColor: 'statiq-sticker-yellow',
      spendKey: 'spend_2',
      brand: 'Silk & Soul',
      tag: 'Packaging Design',
      src: designs[32],
      type: 'image',
    },
    {
      theme: 'theme-forest-emerald',
      stickerColor: 'statiq-sticker-lime',
      spendKey: 'spend_3',
      brand: 'Verde Botanics',
      tag: 'Social Grid System',
      src: designs[38],
      type: 'image',
    },
    {
      theme: 'theme-blush-rose',
      stickerColor: 'statiq-sticker-cyan',
      spendKey: 'spend_4',
      brand: 'Aura Glow',
      tag: 'Full Brand Rebrand',
      src: designs[44],
      type: 'image',
    },
  ],
};

const getVideoThumb = (id, customThumb) => {
  if (customThumb) return customThumb;
  if (!id) return '';
  if (id.startsWith('st-')) {
    return '/images/crumbs_iq.webp';
  }
  if (id.startsWith('dm-')) {
    if (id === 'dm-k3s2QmcsfWuphvMe2Rk') return '/images/crumbs_iq.webp';
    return `https://www.dailymotion.com/thumbnail/video/${id.replace('dm-', '')}`;
  }
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
};

const getVideoEmbedUrl = (id) => {
  if (!id) return '';
  if (id.startsWith('st-')) {
    return `https://streamable.com/e/${id.replace('st-', '')}?autoplay=1`;
  }
  if (id.startsWith('dm-')) {
    return `https://geo.dailymotion.com/player.html?video=${id.replace('dm-', '')}&autoplay=1`;
  }
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('ads'); // 'ads' | 'videos' | 'branding'
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [showArchive, setShowArchive] = useState(false);
  const [archiveFilter, setArchiveFilter] = useState('all'); // 'all' | 'ads' | 'videos'
  const [visibleCount, setVisibleCount] = useState(16);
  const [isMobile, setIsMobile] = useState(false);

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = (activeVideo || activeImage || showArchive) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeVideo, activeImage, showArchive]);

  // Featured 4 cards according to active tab
  const featuredCards = useMemo(() => {
    return THEMED_CARDS_DATA[activeTab] || THEMED_CARDS_DATA.ads;
  }, [activeTab]);

  // Secondary stream items (marquees)
  const marqueeVideos = useMemo(() => videoIds.slice(4, 18), []);
  const marqueeDesigns = useMemo(() => designs.slice(4, 24), []);

  return (
    <section id="portfolio" className="statiq-dark-stage" style={{ padding: 'clamp(4.5rem, 9vw, 8rem) 0' }}>
      {/* Subtle Dot Grid */}
      <div className="statiq-dot-grid" />

      {/* Ambient Radial Mesh Spotlights */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(500px, 70vw, 1000px)',
          height: 'clamp(350px, 45vw, 600px)',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.16) 0%, rgba(139, 92, 246, 0.10) 45%, transparent 75%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
        {/* ── Section Header (Statiq Typography & Sticker System) ── */}
        <div data-reveal style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
          {/* Cursive purple handwritten micro-tag: "What we do" */}
          <span
            className="font-script-accent"
            style={{
              color: '#A78BFA',
              textShadow: '0 0 20px rgba(167, 139, 250, 0.4)',
              marginBottom: '0.5rem',
            }}
          >
            {t('portfolio.what_we_do', 'What we do')}
          </span>

          {/* Luxury Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span
              className="badge"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                color: '#E2E8F0',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="dot" style={{ background: '#FFE043', boxShadow: '0 0 10px #FFE043' }} />
              {t('portfolio.badge', 'Performance Portfolio')}
            </span>
          </div>

          {/* Massive Headline with Yellow Highlight & Blue Sticker Badge */}
          <h2
            style={{
              fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
              fontSize: 'clamp(2rem, 5.2vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              maxWidth: 820,
              margin: '0 auto',
              display: 'inline-block',
              position: 'relative',
            }}
          >
            {t('portfolio.title_p1', 'Performance Design That')}{' '}
            <span style={{ color: '#FFE043', textShadow: '0 0 35px rgba(255, 224, 67, 0.35)', position: 'relative' }}>
              {t('portfolio.title_highlight', 'Drives Revenue')}
              {/* Attached Tilted Blue Sticker (Screenshot 1 & 3) */}
              <span
                className="statiq-sticker statiq-sticker-blue"
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  verticalAlign: 'middle',
                  transform: isRTL ? 'rotate(8deg) translateY(-6px)' : 'rotate(-9deg) translateY(-8px)',
                  marginLeft: isRTL ? 0 : '0.75rem',
                  marginRight: isRTL ? '0.75rem' : 0,
                  fontSize: 'clamp(0.68rem, 1.2vw, 0.82rem)',
                  padding: '0.28rem 0.75rem',
                }}
              >
                {t('portfolio.sticker_highly_creative', 'Highly Creative')}
              </span>
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', 'Noto Kufi Arabic', sans-serif",
              fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
              color: '#94A3B8',
              maxWidth: 580,
              lineHeight: 1.8,
              margin: '1.25rem auto 0',
            }}
          >
            {t('portfolio.subtitle', 'Curated high-converting creative ad campaigns, video reels, and brand identity assets engineered for real market scale.')}
          </p>
        </div>

        {/* ── Category Navigation Tabs (Statiq Underline Bar) ── */}
        <div data-reveal className="statiq-tabs-bar" dir={isRTL ? 'rtl' : 'ltr'}>
          <button
            onClick={() => setActiveTab('ads')}
            className={`statiq-tab-btn ${activeTab === 'ads' ? 'active' : ''}`}
          >
            {t('portfolio.tab_ads', 'Ad Creatives')}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`statiq-tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
          >
            {t('portfolio.tab_videos', 'Video Reels')}
          </button>
          <button
            onClick={() => setShowArchive(true)}
            className="statiq-tab-btn"
            style={{ color: '#E2E8F0', opacity: 0.85 }}
          >
            {t('portfolio.tab_all', 'All Works (100+)')}
          </button>
        </div>

        {/* ── Statiq 4-Card Themed Showcase Grid (Screenshot 1 & 3) ── */}
        <div data-reveal className="statiq-showcase-container">
          <div className="statiq-showcase-grid">
            {featuredCards.map((card, i) => (
              <div
                key={`${activeTab}-${i}`}
                className={`statiq-themed-card ${card.theme}`}
                onClick={() => {
                  if (card.type === 'video') setActiveVideo(card.id);
                  else setActiveImage(card.src);
                }}
              >
                {/* Top Tilted Spend Sticker Badge */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  <span
                    className={`statiq-sticker ${card.stickerColor}`}
                    style={{
                      transform: i % 2 === 0 ? 'rotate(-4deg)' : 'rotate(3deg)',
                    }}
                  >
                    {card.spendLabel
                      ? (typeof card.spendLabel === 'object'
                          ? (i18n.language?.startsWith('ar') ? card.spendLabel.ar : (isRTL ? card.spendLabel.ku : card.spendLabel.en))
                          : card.spendLabel)
                      : t(`portfolio.${card.spendKey}`, card.spendKey)}
                  </span>
                </div>

                {/* Brand & Category micro-header */}
                <div style={{ textAlign: 'center', marginBottom: '0.25rem' }}>
                  <h4
                    style={{
                      fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {card.brand}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Floating Inner Artwork Frame — Full Natural Size, Zero Cropping */}
                <div className="statiq-floating-frame">
                  {card.type === 'video' ? (
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '9/16' }}>
                      <img
                        src={getVideoThumb(card.id, card.thumb)}
                        alt={card.brand}
                        loading="lazy"
                        className="statiq-floating-img"
                        style={{ height: '100%', objectFit: 'cover' }}
                      />
                      {/* Play Button Indicator */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                            color: '#0A0A0C',
                          }}
                        >
                          <Play size={20} fill="#0A0A0C" style={{ marginLeft: 2 }} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ position: 'relative', width: '100%' }}>
                      <img
                        src={card.src}
                        alt={card.brand}
                        loading="lazy"
                        className="statiq-floating-img"
                      />
                      {/* Video Play Button in Center for Video Snapshot Card */}
                      {card.showPlayButton && (
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0, 0, 0, 0.22)',
                            pointerEvents: 'none',
                          }}
                        >
                          <div
                            style={{
                              width: 54,
                              height: 54,
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(8px)',
                              WebkitBackdropFilter: 'blur(8px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                              color: '#0A0A0C',
                            }}
                          >
                            <Play size={22} fill="#0A0A0C" style={{ marginLeft: 2 }} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Interactive Hover Cue */}
                  <div className="statiq-card-hover-cue">
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '100px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        color: '#0A0A0C',
                        fontWeight: 700,
                        fontSize: '0.74rem',
                        boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
                      }}
                    >
                      <Maximize2 size={12} />
                      {card.type === 'video' || card.showPlayButton
                        ? (isRTL ? 'پێشاندانی ڤیدیۆ' : 'Play Video')
                        : (isRTL ? 'بینینی کارەکە' : 'View Fullsize')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dynamic Category Marquee Stream ── */}
        <div data-reveal style={{ position: 'relative', width: '100%', margin: '2rem 0 clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {activeTab === 'videos' ? 'Recent Campaign Reels' : 'Continuous Creative Stream'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              Swipe or hover to pause
            </span>
          </div>

          <div
            style={{
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              direction: 'ltr',
              padding: '0.5rem 0',
              borderRadius: '1rem',
            }}
          >
            {/* Fade Gradients on edges */}
            {['left', 'right'].map((side) => (
              <div
                key={side}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  [side]: 0,
                  width: 'clamp(30px, 8vw, 80px)',
                  zIndex: 5,
                  background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, #080C15 0%, transparent 100%)`,
                  pointerEvents: 'none',
                }}
              />
            ))}

            {activeTab === 'videos' ? (
              <div className="video-marquee-track">
                {[...marqueeVideos, ...marqueeVideos].map((id, idx) => (
                  <div
                    key={`v-${idx}`}
                    onClick={() => setActiveVideo(id)}
                    style={{
                      width: isMobile ? 180 : 220,
                      aspectRatio: '9/16',
                      borderRadius: '0.9rem',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      flexShrink: 0,
                      background: '#111827',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04) translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(255, 224, 67, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <img
                      src={getVideoThumb(id)}
                      alt="Reel Preview"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0A0A0C',
                        }}
                      >
                        <Play size={16} fill="#0A0A0C" style={{ marginLeft: 2 }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="design-marquee-track forward">
                {[...marqueeDesigns, ...marqueeDesigns].map((src, idx) => (
                  <div
                    key={`d-${idx}`}
                    onClick={() => setActiveImage(src)}
                    style={{
                      width: isMobile ? 180 : 220,
                      borderRadius: '0.9rem',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      flexShrink: 0,
                      background: '#111827',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04) translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(255, 224, 67, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <img
                      src={src}
                      alt="Portfolio Design"
                      loading="lazy"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── View Full Archive CTA Button ── */}
        <div data-reveal style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => setShowArchive(true)}
            className="btn-ghost"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.18)',
              color: '#FFFFFF',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.4)',
              padding: '0.9rem 2.2rem',
            }}
          >
            <Grid size={15} style={{ opacity: 0.85, flexShrink: 0 }} />
            {t('portfolio.btn_more', 'Explore Full Portfolio Archive (100+ Works)')}
          </button>
        </div>
      </div>

      {/* ── Lightbox Modal for Designs ── */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(3, 8, 20, 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 4vw, 2.5rem)',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setActiveImage(null)}
            style={{
              position: 'absolute',
              top: 'clamp(1rem, 3vw, 2rem)',
              right: 'clamp(1rem, 3vw, 2rem)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '92vw',
              maxHeight: '90vh',
            }}
          >
            <img
              src={activeImage}
              alt="Fullscreen Ad Preview"
              style={{
                maxWidth: '92vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 32px 80px rgba(0, 0, 0, 0.8)',
                display: 'block',
              }}
            />
            {activeImage && activeImage.includes('abdullah') && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
                    color: '#0A0A0C',
                  }}
                >
                  <Play size={26} fill="#0A0A0C" style={{ marginLeft: 3 }} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Video Player Modal ── */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(3, 8, 20, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
          }}
        >
          <button
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'absolute',
              top: 'clamp(1rem, 3vw, 2rem)',
              right: 'clamp(1rem, 3vw, 2rem)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 420,
              aspectRatio: '9/16',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.9)',
              background: '#000000',
            }}
          >
            <iframe
              src={getVideoEmbedUrl(activeVideo)}
              title="Campaign Video Reel"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── Complete Portfolio Archive Modal (100+ Works) ── */}
      {showArchive && (
        <div
          className="modal-scroll"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99998,
            background: 'rgba(8, 12, 21, 0.98)',
            backdropFilter: 'blur(30px)',
            overflowY: 'auto',
            color: '#FFFFFF',
          }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="section-wrap" style={{ padding: 'clamp(2rem, 5vw, 4rem) 1.25rem' }}>
            <div className="modal-header">
              <div>
                <span className="badge" style={{ marginBottom: '0.75rem', background: 'rgba(255,255,255,0.06)', color: '#E2E8F0' }}>
                  {t('portfolio.archive_badge', 'Archive')}
                </span>
                <h2
                  style={{
                    fontFamily: "'Outfit', 'Sarchia Bokan', sans-serif",
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  {t('portfolio.archive_title_p1', 'Explore our portfolio of ')}
                  <span style={{ color: '#FFE043' }}>{t('portfolio.archive_title_highlight', 'Selected Works')}</span>
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  {t('portfolio.archive_subtitle', 'High-ticket performance creatives and brand assets engineered for scale')}
                </p>
              </div>

              <button
                onClick={() => {
                  setShowArchive(false);
                  setVisibleCount(16);
                }}
                className="btn-ghost"
                style={{
                  padding: '0.625rem 1.25rem',
                  flexShrink: 0,
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFFFFF',
                }}
              >
                <X size={16} />
                {t('portfolio.btn_close', 'Close')}
              </button>
            </div>

            {/* Archive Filter Pills */}
            <div style={{ display: 'flex', gap: '0.75rem', margin: '2rem 0', flexWrap: 'wrap' }}>
              <button
                onClick={() => setArchiveFilter('all')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '100px',
                  background: archiveFilter === 'all' ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                  color: archiveFilter === 'all' ? '#0A0A0C' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                All Assets ({designs.length + videoIds.length})
              </button>
              <button
                onClick={() => setArchiveFilter('ads')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '100px',
                  background: archiveFilter === 'ads' ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                  color: archiveFilter === 'ads' ? '#0A0A0C' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Ad Designs ({designs.length})
              </button>
              <button
                onClick={() => setArchiveFilter('videos')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '100px',
                  background: archiveFilter === 'videos' ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                  color: archiveFilter === 'videos' ? '#0A0A0C' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Video Reels ({videoIds.length})
              </button>
            </div>

            {/* Masonry Grid */}
            <div className="masonry-grid">
              {archiveFilter !== 'videos' &&
                designs.slice(0, visibleCount).map((src, i) => (
                  <div key={`arch-d-${i}`} className="masonry-item" onClick={() => setActiveImage(src)}>
                    <img src={src} alt="Ad creative" loading="lazy" />
                    <div className="masonry-overlay">
                      <div className="masonry-btn">
                        <Maximize2 size={18} style={{ color: '#FFFFFF' }} />
                      </div>
                    </div>
                  </div>
                ))}

              {archiveFilter !== 'ads' &&
                videoIds.slice(0, visibleCount / 2).map((id, i) => (
                  <div
                    key={`arch-v-${i}`}
                    className="masonry-item"
                    onClick={() => setActiveVideo(id)}
                    style={{ position: 'relative' }}
                  >
                    <img src={getVideoThumb(id)} alt="Video reel" loading="lazy" />
                    <div className="masonry-overlay" style={{ opacity: 1, background: 'rgba(0,0,0,0.35)' }}>
                      <div className="masonry-btn" style={{ background: 'rgba(255,255,255,0.9)' }}>
                        <Play size={18} fill="#0A0A0C" style={{ color: '#0A0A0C', marginLeft: 2 }} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {visibleCount < designs.length && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 16)}
                  className="btn-ghost"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                    padding: '0.85rem 2.2rem',
                  }}
                >
                  {t('portfolio.btn_load_more', 'Load More')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
