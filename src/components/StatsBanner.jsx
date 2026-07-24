import { useState, useEffect, useCallback } from 'react';
import { DollarSign, Users, TrendingUp, MessageCircle, Eye, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { icon: <DollarSign size={18} />, val: '$20,000+', label: 'زیاتر لە $٢٠,٠٠٠ خەرجدەکرێت ساڵانە لە کەمپەینەکانماندا بۆ کڕیارەکانمان.' },
  { icon: <Users size={18} />,      val: '35M+ Views', label: 'گەیشتن بە زۆرترین خەڵک و بەدەستهێنانی کڕیاری ڕاستەقینە بە کەمترین تێچوو.' },
  { icon: <TrendingUp size={18} />, val: 'ROI ئاست بەرز', label: 'ستراتیژی سپۆنسەری دروست بۆ گەڕاندنەوەی بەرزترین قازانج.' },
];

const adResults = [
  { img: 'https://i.imgur.com/W5OXMYW.png', messages: '17,820', impressions: '10,204,568' },
  { img: 'https://i.imgur.com/VvmJH1K.png', messages: '6,677', impressions: '2,139,824' },
  { img: 'https://i.imgur.com/jk8QLtZ.png', messages: '2,826', impressions: '741,792' },
  { img: 'https://i.imgur.com/NINVVAW.png', messages: '2,593', impressions: '1,358,495' },
  { img: 'https://i.imgur.com/8Y7jqz6.png', messages: '1,853', impressions: '367,874' },
];

export default function StatsBanner() {
  const { openSchedule } = useSchedule();
  const [activeImage, setActiveImage] = useState(null);

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [timerKey, setTimerKey] = useState(0);

  const goToSlide = useCallback((index, dir = 'next') => {
    setDirection(dir);
    setCurrentIndex(index);
    setTimerKey(prev => prev + 1);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex === adResults.length - 1 ? 0 : currentIndex + 1, 'next');
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex === 0 ? adResults.length - 1 : currentIndex - 1, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, timerKey]);

  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide(); // Swipe left goes next in RTL
    if (distance < -minSwipeDistance) prevSlide(); // Swipe right goes prev in RTL
  };

  return (
    <section id="stats" style={{ padding: 'clamp(4rem, 10vw, 7rem) 0' }}>
      <div className="section-wrap">

        <div className="hairline" style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)', opacity: 0.5 }} />

        <p data-reveal style={{
          fontFamily: "'Noto Kufi Arabic', sans-serif",
          fontSize: '0.58rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(203,213,225,0.45)',
          marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700,
        }}>
          داتای بەشێک لە سپۆنسەرەکانمان
        </p>

        {/* Stats Grid — single col on mobile */}
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1rem',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
          }}
        >
          {stats.map(({ icon, val, label }, i) => (
            <div key={i} className="glass-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ color: 'rgba(197,164,89,0.5)' }}>{icon}</div>
              <div className="stat-val">{val}</div>
              <p style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: '0.82rem', color: 'rgba(203,213,225,0.6)',
                lineHeight: 1.9, fontWeight: 300,
              }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Data Proof Images */}
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem',
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          {[
            "https://cdn.gamma.app/z58zerd9qvdtd4t/3c5a1b1747304b498c03e9e441e24714/original/kk.png",
            "https://cdn.gamma.app/z58zerd9qvdtd4t/0b1c76837bf5417c9842a9e861094bbb/original/ads.png",
          ].map((src, i) => (
            <div key={i} className="glass-card" style={{ borderRadius: '1rem', overflow: 'hidden', padding: 0 }}>
              <img src={src} alt={`Sponsor Data Proof ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="hairline" style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)', opacity: 0.5 }} />

        {/* Ad Results Advanced Slider */}
        <div data-reveal style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
             <h3 style={{
                fontFamily: "'Noto Naskh Arabic', serif",
                fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
                fontWeight: 700, color: '#ffffff', margin: 0
             }}>
               ئەنجامی بەشێک لە کەمپەینەکانمان لەسەر <span className="text-gold">مێتا</span>
             </h3>
             {/* Desktop Navigation Arrows */}
             <div className="slider-nav-arrows" style={{ display: 'flex', gap: '0.75rem', direction: 'ltr' }}>
               <button onClick={prevSlide} className="slider-btn">
                 <ChevronLeft size={20} />
               </button>
               <button onClick={nextSlide} className="slider-btn">
                 <ChevronRight size={20} />
               </button>
             </div>
          </div>

          <div 
            className="slider-container"
            style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndHandler}
          >
            {/* The Animated Card */}
            <div 
              key={`${currentIndex}-${timerKey}`} 
              className={`slider-card animate-${direction}`}
              dir="rtl"
              style={{
                background: 'linear-gradient(145deg, rgba(10, 25, 47, 0.7) 0%, rgba(10, 25, 47, 0.3) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(198,164,92,0.2)',
                boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.5)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex', 
                flexDirection: 'row',
                position: 'relative',
              }}
            >
              {/* Progress Bar */}
              <div 
                key={`progress-${timerKey}`}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: 'rgba(198,164,92,0.1)',
                  zIndex: 10,
                }}
              >
                <div style={{
                  height: '100%', width: '100%',
                  background: 'linear-gradient(90deg, rgba(198,164,92,0.8), rgba(248,227,155,1))',
                  transformOrigin: 'right',
                  animation: 'progress-fill 5s linear forwards',
                }} />
              </div>

              {/* Image Section */}
              <div className="slider-image-col" style={{ 
                flex: '1 1 50%', 
                padding: '1.5rem', 
                paddingTop: '2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(2,5,10,0.3)',
                cursor: 'pointer',
              }} onClick={() => setActiveImage(adResults[currentIndex].img)}>
                <img src={adResults[currentIndex].img} style={{ 
                  width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain', 
                  display: 'block', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'transform 0.4s ease',
                }} 
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                alt="Ad Result" loading="lazy" />
              </div>

              {/* Data Section */}
              <div className="slider-data-col" style={{ 
                flex: '1 1 50%', 
                padding: '3rem 2.5rem', 
                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem',
                position: 'relative',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(241,245,249,0.7)', marginBottom: '0.5rem' }}>
                    <MessageCircle size={22} color="#C5A459" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>ڕێژەی نامە</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px' }}>
                    {adResults[currentIndex].messages}
                  </div>
                </div>
                
                <div style={{ height: '1px', background: 'rgba(241,245,249,0.08)', width: '100%' }} />
                
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(241,245,249,0.7)', marginBottom: '0.5rem' }}>
                    <Eye size={22} color="#C5A459" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>ڕێژەی بینین</span>
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px' }}>
                    {adResults[currentIndex].impressions}
                  </div>
                </div>
                
                {/* Counter */}
                <div style={{
                  position: 'absolute', bottom: '1.5rem', left: '2rem',
                  fontFamily: 'monospace', fontSize: '1rem', color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '2px', fontWeight: 600, direction: 'ltr'
                }}>
                  {String(currentIndex + 1).padStart(2, '0')} / {String(adResults.length).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Dots and Mobile Arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem', direction: 'ltr' }}>
              <button onClick={prevSlide} className="slider-btn mobile-only-arrows" style={{ width: 36, height: 36 }}>
                 <ChevronLeft size={16} />
              </button>
               
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {adResults.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx, idx > currentIndex ? 'next' : 'prev')}
                    style={{
                      height: '8px',
                      width: currentIndex === idx ? '24px' : '8px',
                      borderRadius: '4px',
                      background: currentIndex === idx ? '#C5A459' : 'rgba(255,255,255,0.2)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      padding: 0, border: 'none', cursor: 'pointer'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button onClick={nextSlide} className="slider-btn mobile-only-arrows" style={{ width: 36, height: 36 }}>
                 <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slide-in-next {
              from { opacity: 0; transform: translateX(-40px) scale(0.98); }
              to { opacity: 1; transform: translateX(0) scale(1); }
            }
            @keyframes slide-in-prev {
              from { opacity: 0; transform: translateX(40px) scale(0.98); }
              to { opacity: 1; transform: translateX(0) scale(1); }
            }
            @keyframes progress-fill {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
            
            .animate-next { animation: slide-in-next 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
            .animate-prev { animation: slide-in-prev 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
            
            .slider-btn {
              background: rgba(255,255,255,0.05);
              border: 1px solid rgba(255,255,255,0.1);
              color: white;
              width: 44px; height: 44px;
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .slider-btn:hover {
              background: rgba(198,164,92,0.2);
              border-color: rgba(198,164,92,0.5);
              color: #C5A459;
            }
            
            .mobile-only-arrows { display: none !important; }

            @media (max-width: 768px) {
              .slider-card {
                flex-direction: column !important;
              }
              /* On mobile: image sits on TOP (natural column order), data below */
              .slider-image-col {
                order: -1;
                flex: 0 0 auto !important;
                max-height: 260px;
                padding: 1rem !important;
                padding-top: 2rem !important;
              }
              .slider-image-col img {
                max-height: 220px !important;
              }
              .slider-data-col {
                padding: 1.5rem 1.25rem 2.5rem !important;
                gap: 1.25rem !important;
              }
              .slider-data-col > div > div:last-child { font-size: 1.75rem !important; }
              .slider-nav-arrows { display: none !important; } 
              .mobile-only-arrows { display: flex !important; }
            }
          `}} />
        </div>

        <div className="hairline" style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)', opacity: 0.5 }} />

        {/* CTA */}
        <div data-reveal style={{ textAlign: 'center' }}>
          <h3 style={{
            fontFamily: "'Noto Naskh Arabic', serif",
            fontSize: 'clamp(1.3rem, 3.5vw, 2.3rem)',
            fontWeight: 700, lineHeight: 1.3,
            color: '#ffffff', marginBottom: '1.75rem',
          }}>
            دەتەوێت براندەکەت{' '}
            <span className="text-gold">لێرە بێت؟</span>
          </h3>
          <button
            onClick={openSchedule}
            className="btn-primary"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            <WhatsAppIcon size={18} style={{ flexShrink: 0 }} />
            با دەستپێبکەین
          </button>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {activeImage && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(2,5,10,0.95)', backdropFilter: 'blur(24px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
          }}
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={e => { e.stopPropagation(); setActiveImage(null); }}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#ffffff', borderRadius: '50%', width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10,
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >
            <X size={20} />
          </button>
          <div
            style={{
              maxWidth: '1200px', width: '100%', maxHeight: '90vh',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={activeImage} 
              alt="Expanded Ad Result" 
              style={{ 
                maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', 
                borderRadius: '12px', boxShadow: '0 32px 80px -12px rgba(0,0,0,0.9)'
              }} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
