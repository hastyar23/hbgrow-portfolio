import { useState, useRef, useEffect, useId } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  MessageCircle, 
  DollarSign, 
  ShieldCheck, 
  Play, 
  Sparkles, 
  Activity, 
  ArrowUpRight,
  Sliders,
  CheckCircle2,
  Users,
  Film
} from 'lucide-react';
import { useSchedule } from '../ScheduleContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function HeroMockup() {
  const { openSchedule } = useSchedule();
  const { i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ku') || i18n.language?.startsWith('ar');

  // Interactive Tab State
  const [activeTab, setActiveTab] = useState(0); // 0: Telemetry, 1: Creative, 2: Simulator

  // 3D Perspective Tilt on Desktop
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Chart Hover Point
  const [hoveredPoint, setHoveredPoint] = useState(5); // default to last day (peak)

  // Growth Simulator State
  const [simBudget, setSimBudget] = useState(1500);

  // Live Inquiries Feed Simulation
  const [leadTick, setLeadTick] = useState(0);

  // Gradient IDs to avoid SVG conflicts
  const chartGradientId = useId();

  const liveLeads = [
    {
      name: isRTL ? 'کلینیکی د. زانا بۆ پزیشکی و جوانکاری' : 'Dr. Zana Medical & Aesthetic Center',
      city: isRTL ? 'هەولێر' : 'Erbil',
      msg: isRTL ? 'داواکاری نۆرە بۆ نەشتەرگەری جوانکاری...' : 'VIP Booking Request for Aesthetic Procedure...',
      val: '$3,800',
      time: isRTL ? 'پێش ٢ چرکە' : '2s ago',
      badge: 'High-Ticket Lead'
    },
    {
      name: isRTL ? 'کۆمپانیای پەیوەندی و بیناسازی پریستیژ' : 'Prestige Luxury Developments',
      city: isRTL ? 'سلێمانی' : 'Sulaymaniyah',
      msg: isRTL ? 'پرسیار لەسەر نرخی کڕینی ڤێلای نیشتەجێبوون...' : 'Buyer Inquiry: Premium Villa Residence...',
      val: '$14,500',
      time: isRTL ? 'پێش ٤٥ چرکە' : '45s ago',
      badge: 'Investor'
    },
    {
      name: isRTL ? 'ناوەندی ئۆتۆمبێلی لوکس' : 'Boutique Luxury Automotive',
      city: isRTL ? 'دهۆک' : 'Duhok',
      msg: isRTL ? 'داواکاری حجزکردنی ئۆتۆمبێلی ٢٠٢٦...' : 'Pre-order Allocation Request 2026...',
      val: '$6,200',
      time: isRTL ? 'پێش ٢ خولەک' : '2m ago',
      badge: 'Buyer'
    },
    {
      name: isRTL ? 'براندی زێڕ و خشڵی ئەڵماس' : 'Haute Joaillerie & Diamond Gallery',
      city: isRTL ? 'بەغداد' : 'Baghdad',
      msg: isRTL ? 'داواکاری کڕینی تەرمی خشڵی تایبەت...' : 'Private Suite Appointment Request...',
      val: '$8,900',
      time: isRTL ? 'پێش ٥ خولەک' : '5m ago',
      badge: 'VIP Client'
    }
  ];

  // Rotate simulated leads every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setLeadTick(prev => (prev + 1) % liveLeads.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [liveLeads.length]);

  // Handle 3D perspective mouse movement
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    setTilt({ rotateX, rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  // Chart data points (30-day verified campaign progress)
  const chartPoints = [
    { day: 'D1', spend: '$380', msgs: 112, roas: '3.4x', x: 20, y: 130 },
    { day: 'D5', spend: '$1,450', msgs: 480, roas: '4.1x', x: 80, y: 110 },
    { day: 'D10', spend: '$3,800', msgs: 1290, roas: '4.6x', x: 140, y: 85 },
    { day: 'D16', spend: '$7,900', msgs: 2750, roas: '4.9x', x: 200, y: 60 },
    { day: 'D22', spend: '$13,200', msgs: 4810, roas: '5.1x', x: 260, y: 38 },
    { day: 'D30', spend: '$18,450', msgs: 6677, roas: '5.2x', x: 320, y: 18 },
  ];

  // Simulator dynamic values
  const simReach = (simBudget * 82).toLocaleString();
  const simMsgs = Math.round(simBudget / 0.31).toLocaleString();
  const simVal = (simBudget * 5.2).toLocaleString();

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto mt-6 px-2 sm:px-4"
      style={{ perspective: '1200px' }}
    >
      {/* ── Orbiting Floating Satellites (Luxury Glass Gliders) ── */}
      {/* Satellite 1: Top Floating Badge */}
      <div 
        className={`hidden lg:flex items-center gap-2.5 absolute -top-5 ${isRTL ? '-right-4 text-right' : '-left-4 text-left'} z-20 px-3.5 py-2.5 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.08] shadow-[0_12px_32px_-4px_rgba(3,20,43,0.12)] transition-transform duration-500 hover:scale-105 pointer-events-auto`}
        style={{ animation: 'float-y 6s ease-in-out infinite' }}
      >
        <div className="w-8 h-8 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0 text-[#25D366]">
          <WhatsAppIcon size={16} />
        </div>
        <div>
          <div className={`flex items-center gap-1.5 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <span className="font-mono text-xs font-extrabold text-[#0A0A0C]" dir="ltr">+6,677</span>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/60" dir="ltr">+48.2%</span>
          </div>
          <p className="text-[10px] font-medium text-[#64748B] leading-tight">
            {isRTL ? 'نامەی ڕاستەوخۆ بەرهەمهاتوو' : 'Verified Direct Inquiries'}
          </p>
        </div>
      </div>

      {/* Satellite 2: Bottom Floating Badge */}
      <div 
        className={`hidden lg:flex items-center gap-2.5 absolute -bottom-5 ${isRTL ? '-left-4 text-left' : '-right-4 text-right'} z-20 px-3.5 py-2.5 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[0.08] shadow-[0_12px_32px_-4px_rgba(3,20,43,0.12)] transition-transform duration-500 hover:scale-105 pointer-events-auto`}
        style={{ animation: 'float-y 7s ease-in-out infinite reverse' }}
      >
        <div className="w-8 h-8 rounded-xl bg-[#03142B]/10 border border-[#03142B]/20 flex items-center justify-center flex-shrink-0 text-[#03142B]">
          <ShieldCheck size={16} />
        </div>
        <div>
          <div className={`flex items-center gap-1.5 ${isRTL ? 'justify-start' : 'justify-end'}`}>
            <span className="text-[10px] font-bold text-[#0B3275] bg-[#03142B]/5 px-1.5 py-0.2 rounded-full border border-[#03142B]/10">TOP 1% CAPI</span>
            <span className="font-mono text-xs font-extrabold text-[#0A0A0C]" dir="ltr">$0.31 / Msg</span>
          </div>
          <p className="text-[10px] font-medium text-[#64748B] leading-tight">
            {isRTL ? 'تێچووی کەمترین نامە لە عێراق' : 'Audited Meta Cost Per Lead'}
          </p>
        </div>
      </div>

      {/* ── Main Mockup Terminal Window ── */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered 
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.01, 1.01, 1.01)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_60px_-15px_rgba(3,20,43,0.10),0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden text-left"
        dir="ltr"
      >
        {/* Dynamic Specular Light Glare (Desktop only) */}
        <div 
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-inherit"
          style={{
            background: `radial-gradient(circle 500px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.7), transparent 60%)`,
            opacity: glare.opacity,
          }}
        />

        {/* ── Studio Header Bar ── */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 border-b border-black/[0.06] bg-[#FAFAFA]/90 backdrop-blur-md select-none">
          {/* Traffic Dots */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
          </div>

          {/* Central Telemetry Badge / URL Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-xs text-[11px] sm:text-xs font-mono font-medium text-[#52525B]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#0A0A0C] font-semibold">hbgrow.terminal</span>
            <span className="hidden sm:inline text-black/20">|</span>
            <span className="hidden sm:inline text-[#64748B]">
              {isRTL ? 'ڕاپۆرتی گەشەکردنی براند' : 'live-growth-engine • v2.6'}
            </span>
          </div>

          {/* Right Status Indicator */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="hidden xs:inline">{isRTL ? 'چالاکە' : 'ACTIVE'}</span>
          </div>
        </div>

        {/* ── Interactive Navigation Tabs ── */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 pt-3.5 pb-2 bg-white border-b border-black/[0.05] overflow-x-auto scrollbar-none gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[
              { 
                idx: 0, 
                icon: Activity, 
                labelEn: 'Live Campaign Telemetry', 
                labelKu: 'ڕاپۆرتی ڕیکلام و فرۆش' 
              },
              { 
                idx: 1, 
                icon: Film, 
                labelEn: 'Viral Creative Engine', 
                labelKu: 'بەرهەمی ڤیدیۆ و دیزاین' 
              },
              { 
                idx: 2, 
                icon: Sliders, 
                labelEn: 'Growth ROI Simulator', 
                labelKu: 'کالکۆلێتەری گەشەکردن' 
              },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.idx;
              return (
                <button
                  key={tab.idx}
                  onClick={() => setActiveTab(tab.idx)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] text-white shadow-sm shadow-[#020C1B]/20 scale-[1.02]'
                      : 'bg-black/[0.03] text-[#52525B] hover:text-[#0A0A0C] hover:bg-black/[0.06]'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-[#64748B]'} />
                  <span>{isRTL ? tab.labelKu : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-[#71717A]">
            <ShieldCheck size={13} className="text-[#0B3275]" />
            <span>Audited Meta Partner</span>
          </div>
        </div>

        {/* ── Tab Content Area ── */}
        <div className="p-3.5 sm:p-6 bg-gradient-to-b from-white to-[#FAFAFA]">

          {/* ══════════════════════════════════════════════════════════
              TAB 0: Live Campaign Telemetry (Audited Performance)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 0 && (
            <div className="space-y-4 sm:space-y-5 animate-fade-in" dir={isRTL ? 'rtl' : 'ltr'}>
              {/* Telemetry Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                {/* Metric 1 */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs">
                  <div className="flex items-center justify-between text-[#64748B] text-xs mb-1 font-medium">
                    <span>{isRTL ? 'بودجەی بەڕێوەبراو' : 'Ad Spend Managed'}</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/50">+24.8%</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#0A0A0C]">
                    $18,450.00
                  </div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">
                    {isRTL ? 'لە کۆتا کەمپەینی بەردەوام' : 'Across 4 High-Ticket Campaigns'}
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs">
                  <div className="flex items-center justify-between text-[#64748B] text-xs mb-1 font-medium">
                    <span>{isRTL ? 'نامەی بەرهەمهاتوو' : 'Direct Inquiries'}</span>
                    <span className="text-[10px] font-semibold text-[#0B3275] bg-[#03142B]/5 px-1.5 py-0.2 rounded border border-[#03142B]/10">$0.31 / Lead</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#0A0A0C]">
                    6,677 msgs
                  </div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">
                    {isRTL ? 'نامەی حەقیقی بۆ کڕین' : 'High-Intent WhatsApp & Messenger'}
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs">
                  <div className="flex items-center justify-between text-[#64748B] text-xs mb-1 font-medium">
                    <span>{isRTL ? 'ڕێژەی گەڕانەوەی داهات' : 'Audited ROAS'}</span>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200/50">TOP TIER</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#0A0A0C]">
                    5.2x Return
                  </div>
                  <div className="text-[11px] text-[#71717A] mt-0.5">
                    {isRTL ? 'پشتڕاستکراوە لە بانک و فرۆش' : 'Verified Business Revenue'}
                  </div>
                </div>
              </div>

              {/* Interactive Performance Chart & Live Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
                {/* Left (8 Cols): Interactive SVG Chart */}
                <div className="lg:col-span-7 p-3.5 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0C]">
                        {isRTL ? 'هێڵی کاتیی گەشەکردنی کەمپەین (٣٠ ڕۆژ)' : '30-Day Verified Growth Velocity'}
                      </h4>
                      <p className="text-[11px] text-[#71717A]">
                        {isRTL ? 'دەستنیشانی خاڵەکان بکە بۆ بینینی ئامار' : 'Hover over data points to inspect spikes'}
                      </p>
                    </div>

                    {/* Active Point Hover Box */}
                    <div className="text-right px-2.5 py-1 rounded-lg bg-[#FAFAFA] border border-black/[0.06]">
                      <div className="text-[10px] text-[#71717A] uppercase font-mono">
                        {chartPoints[hoveredPoint].day} Report
                      </div>
                      <div className="text-xs font-mono font-bold text-[#0A0A0C]">
                        {chartPoints[hoveredPoint].msgs.toLocaleString()} msgs • {chartPoints[hoveredPoint].spend}
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="relative w-full h-36 sm:h-44 pt-2">
                    <svg viewBox="0 0 340 150" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id={chartGradientId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0B3275" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#020C1B" stopOpacity="0.00" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="15" y1="30" x2="330" y2="30" stroke="rgba(0,0,0,0.05)" strokeDasharray="3 3" />
                      <line x1="15" y1="70" x2="330" y2="70" stroke="rgba(0,0,0,0.05)" strokeDasharray="3 3" />
                      <line x1="15" y1="110" x2="330" y2="110" stroke="rgba(0,0,0,0.05)" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M 20 130 Q 60 115 80 110 T 140 85 T 200 60 T 260 38 T 320 18 L 320 145 L 20 145 Z"
                        fill={`url(#${chartGradientId})`}
                      />

                      {/* Stroke Line */}
                      <path
                        d="M 20 130 Q 60 115 80 110 T 140 85 T 200 60 T 260 38 T 320 18"
                        fill="none"
                        stroke="#03142B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Interactive Data Points */}
                      {chartPoints.map((pt, i) => {
                        const isHover = hoveredPoint === i;
                        return (
                          <g 
                            key={pt.day}
                            onMouseEnter={() => setHoveredPoint(i)}
                            className="cursor-pointer transition-all"
                          >
                            {/* Hitbox */}
                            <circle cx={pt.x} cy={pt.y} r="14" fill="transparent" />

                            {/* Outer Glow on hover */}
                            {isHover && (
                              <circle 
                                cx={pt.x} 
                                cy={pt.y} 
                                r="8" 
                                fill="none" 
                                stroke="#0B3275" 
                                strokeWidth="2" 
                                opacity="0.6"
                              />
                            )}

                            {/* Center Point */}
                            <circle 
                              cx={pt.x} 
                              cy={pt.y} 
                              r={isHover ? '5' : '3.5'} 
                              fill={isHover ? '#0B3275' : '#03142B'} 
                              stroke="#FFFFFF" 
                              strokeWidth="2"
                              className="transition-all duration-200"
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* X-axis labels */}
                    <div className="flex justify-between px-2 pt-1 text-[10px] font-mono text-[#71717A]">
                      <span>Day 01</span>
                      <span>Day 10</span>
                      <span>Day 20</span>
                      <span className="font-bold text-[#0A0A0C]">Day 30 (Peak)</span>
                    </div>
                  </div>
                </div>

                {/* Right (5 Cols): Live Incoming Inquiries Stream */}
                <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A0A0C]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>{isRTL ? 'جووڵەی نامەی ڕاستەوخۆ' : 'Live Inquiries Stream'}</span>
                    </div>
                    <span className="text-[10px] font-mono font-medium text-[#71717A]">Meta CAPI Feed</span>
                  </div>

                  {/* Active Simulated Lead Card */}
                  <div className="p-3 rounded-lg bg-[#FAFAFA] border border-black/[0.06] transition-all">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#0A0A0C] truncate max-w-[170px]">
                        {liveLeads[leadTick].name}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded">
                        {liveLeads[leadTick].city}
                      </span>
                    </div>
                    <p className="text-xs text-[#52525B] line-clamp-2 italic mb-2 leading-relaxed">
                      "{liveLeads[leadTick].msg}"
                    </p>
                    <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-black/[0.05] font-mono">
                      <span className="text-[#64748B]">{liveLeads[leadTick].time}</span>
                      <span className="font-extrabold text-[#0B3275]">{liveLeads[leadTick].val} Pipeline</span>
                    </div>
                  </div>

                  {/* Fast Action CTA inside Mockup */}
                  <div className="pt-3">
                    <button
                      onClick={openSchedule}
                      className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] text-white text-xs sm:text-sm font-bold shadow-xs hover:opacity-95 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon size={14} />
                      <span>{isRTL ? 'دەستپێکردنی ڕیکلام بۆ بزنسەکەم' : 'Launch Growth Sprint With HBgrow'}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 1: Viral Creative Engine (High-Impact Content)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 1 && (
            <div className="space-y-4 animate-fade-in" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Reel Card Showcase */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0A0A0C]">
                      {isRTL ? 'ڤیدیۆی ڤایرۆڵ و ڕاکێشانی کڕیار' : 'Commercial Reel Architecture'}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200/50">
                      94.2% RETENTION
                    </span>
                  </div>

                  {/* Mock Visual Reel Player Box */}
                  <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-black/90 group">
                    <img 
                      src="https://i.ytimg.com/vi/p0aFJdaP7pM/maxresdefault.jpg"
                      alt="Reel Showcase"
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={18} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Telemetry Overlay */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                      <span>245.8K Views</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Viral Score: 98/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#71717A] mt-2.5">
                    <span>{isRTL ? 'سیناریۆ + وێنەگرتن + مۆنتاژی تەواو' : 'Engineered for instant high-ticket conversions'}</span>
                    <span className="font-bold text-[#0A0A0C]">+420 Leads</span>
                  </div>
                </div>

                {/* Creative Formula Blueprint */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-black/[0.07] shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0C] mb-1">
                      {isRTL ? 'فۆرمولای دیزاینی فرۆشی بەرز' : 'High-Converting Creative Formula'}
                    </h4>
                    <p className="text-[11px] text-[#71717A] mb-3">
                      {isRTL ? 'ستایلێکی کلاسیک و ئاست بەرز بۆ ڕاکێشانی کڕیاری دەوڵەمەند' : 'Engineered specifically for Kurdish high-ticket decision-makers'}
                    </p>

                    {/* 3 Formula Steps */}
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-black/[0.05] flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-[#020C1B] text-white flex items-center justify-center text-[10px] font-mono font-bold">01</div>
                        <div>
                          <div className="text-xs font-bold text-[#0A0A0C]">{isRTL ? 'سەرنجڕاکێشانی چرکە سەرەتاییەکان (Hook)' : '0-3s Visual Pattern Interrupt'}</div>
                          <div className="text-[10px] text-[#71717A]">{isRTL ? 'ڕاگرتنی پەنجەی بینەر لەسەر شاشە' : 'Eliminates scroll fatigue instantly'}</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-black/[0.05] flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-[#041E42] text-white flex items-center justify-center text-[10px] font-mono font-bold">02</div>
                        <div>
                          <div className="text-xs font-bold text-[#0A0A0C]">{isRTL ? 'کوالیتی و سەنگی براند (High Status)' : 'Luxury Visual Positioning'}</div>
                          <div className="text-[10px] text-[#71717A]">{isRTL ? 'متمانەی دەستبەجێ بەبێ هەرزانکردنی نرخ' : 'Justifies high retainer & pricing'}</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-black/[0.05] flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-[#0A2E66] text-white flex items-center justify-center text-[10px] font-mono font-bold">03</div>
                        <div>
                          <div className="text-xs font-bold text-[#0A0A0C]">{isRTL ? 'داواکاری ڕاستەوخۆ (WhatsApp Funnel)' : 'Direct-to-WhatsApp Funnel'}</div>
                          <div className="text-[10px] text-[#71717A]">{isRTL ? 'گۆڕینی بینەر بۆ کڕیاری ئامادەبوو' : 'Zero friction conversion into booked sales'}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <a
                      href="#portfolio"
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white border border-black/[0.12] text-[#0A0A0C] hover:border-[#03142B] text-xs font-bold transition-all shadow-xs text-center"
                    >
                      <Sparkles size={14} className="text-[#0B3275]" />
                      <span>{isRTL ? 'بینینی هەموو کارەکان لە پۆرتفۆلیۆ' : 'Explore All 50+ Creative Assets'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 2: Growth ROI Simulator (Interactive Calculator)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 2 && (
            <div className="space-y-4 animate-fade-in" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-black/[0.07] shadow-xs">
                {/* Slider Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A0A0C]">
                      {isRTL ? 'بودجەی ڕیکلامی مانگانەت دیاریبکە' : 'Select Your Target Monthly Ad Budget'}
                    </h4>
                    <p className="text-[11px] text-[#71717A]">
                      {isRTL ? 'سەیربکە چی ڕوودەدات کاتێک بودجەکەت لەلایەن ئێمەوە بەڕێوەدەبرێت' : 'Real-time forecast based on audited Kurdish market conversion data'}
                    </p>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-[#03142B]/5 border border-[#03142B]/10 font-mono text-base sm:text-lg font-extrabold text-[#03142B] self-start sm:self-auto" dir="ltr">
                    ${simBudget.toLocaleString()} / mo
                  </div>
                </div>

                {/* Range Slider */}
                <div className="mb-6 px-1" dir="ltr">
                  <input
                    type="range"
                    min="400"
                    max="8000"
                    step="200"
                    value={simBudget}
                    onChange={(e) => setSimBudget(Number(e.target.value))}
                    className="w-full h-2 bg-black/[0.08] rounded-lg appearance-none cursor-pointer accent-[#03142B]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#71717A] mt-1.5">
                    <span>$400 (Starter)</span>
                    <span>$2,500 (Scale)</span>
                    <span>$5,000 (Dominance)</span>
                    <span>$8,000+ (Market Leader)</span>
                  </div>
                </div>

                {/* Projected Deliverables Output Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-black/[0.06]">
                  <div className="p-3 rounded-lg bg-[#FAFAFA] border border-black/[0.05]">
                    <div className="text-[11px] text-[#71717A] mb-1">
                      {isRTL ? 'گەیشتن بە کڕیاری دیاریکراو' : 'Target Audience Reached'}
                    </div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-[#0A0A0C]">
                      ~{simReach}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">High-affinity buyers</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FAFAFA] border border-black/[0.05]">
                    <div className="text-[11px] text-[#71717A] mb-1">
                      {isRTL ? 'نامەی ڕاستەوخۆ لە کڕیار' : 'Projected Inquiries'}
                    </div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-[#0B3275]">
                      ~{simMsgs} leads
                    </div>
                    <div className="text-[10px] text-[#64748B] font-semibold mt-0.5">@ $0.31 avg CPA</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FAFAFA] border border-black/[0.05]">
                    <div className="text-[11px] text-[#71717A] mb-1">
                      {isRTL ? 'داهاتی پێشبینیکراو (Pipeline)' : 'Projected Value'}
                    </div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-[#0A0A0C]">
                      ${simVal}+
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">5.2x ROAS Multiplier</div>
                  </div>
                </div>

                {/* Direct Action CTA */}
                <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-[#52525B]">
                    {isRTL 
                      ? 'ئەم ژمارانە بەپێی ئەنجامەکانی کۆتا ٣ مانگی کڕیارەکانمان تەئکید کراوەتەوە.' 
                      : 'Figures calibrated against audited Meta Ad accounts across Erbil and Sulaymaniyah.'
                    }
                  </div>
                  <button
                    onClick={openSchedule}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#020C1B] via-[#041E42] to-[#0A2E66] text-white text-xs sm:text-sm font-bold shadow-xs hover:opacity-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {isRTL ? 'دەستنیشانکردنی کات بۆ ئەم بودجەیە' : 'Lock In This Growth Capacity'}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── Terminal Bottom Status Bar ── */}
        <div className="px-3.5 sm:px-6 py-2 bg-[#FAFAFA] border-t border-black/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#71717A]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[#0A0A0C] font-semibold">Meta Pixel & CAPI 100% Synced</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Kurdistan & Iraq Ad Operations</span>
            <span className="text-[#0A0A0C] font-bold">HBgrow Agency</span>
          </div>
        </div>
      </div>
    </div>
  );
}
