import React, { useState, useEffect } from 'react';
import { X, Phone, Video, MessageCircle, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const WEBHOOK_URL = "https://hook.us1.make.com/YOUR_WEBHOOK_URL_HERE"; // IMPORTANT: Replace with your actual Make/Zapier/Google Webhook URL
const WHATSAPP_NUMBER = "9647700253469";

export default function ScheduleModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Data
  const [method, setMethod] = useState('');
  const [job, setJob] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Generate next 7 days, excluding Fridays (5)
  const [availableDates, setAvailableDates] = useState([]);
  useEffect(() => {
    const dates = [];
    let d = new Date();
    let count = 0;
    while (count < 7) {
      if (d.getDay() !== 5) {
        dates.push(new Date(d));
        count++;
      }
      d.setDate(d.getDate() + 1);
    }
    setAvailableDates(dates);
  }, []);

  const availableTimes = [
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "3:00 PM - 4:00 PM",
    "4:30 PM - 6:00 PM"
  ];

  const handleNext = () => {
    if (step === 1 && !method) return;
    if (step === 2 && (!job || !city || !email)) return;
    setStep(s => s + 1);
  };

  const handlePrev = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = async () => {
    if (!name || !phone) return;
    if (method !== 'Message' && (!selectedDate || !selectedTime)) return;

    setIsSubmitting(true);

    // 1. Generate the unique Event ID exactly when the button is clicked
    const uniqueEventId = 'lead_' + new Date().getTime();

    // 1b. Get Meta Click and Browser IDs from cookies
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return undefined;
    };
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // 2. Package the data for your Google Script
    const payload = {
      name: name,
      phone: phone,
      email: email,
      city: city,
      job: job,
      method: method,
      date: selectedDate ? selectedDate.toLocaleDateString('en-GB') : 'N/A',
      time: selectedTime || 'N/A',
      event_id: uniqueEventId, // The exact same ID for deduplication
      fbp: fbp,
      fbc: fbc
    };

    try {
      // 3. Fire the Browser Pixel (with the ID for deduplication)
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {}, { eventID: uniqueEventId });
      }

      // 4. Send silently to your free Google Apps Script Webhook
      await fetch('https://script.google.com/macros/s/AKfycbwkGPCyipG6YgdEjgqyfHQ4MavIOPlghjsOcje4kkHYxrPS43ocL0bFU5ZfLGB7Cj-ezg/exec', {
        method: 'POST',
        mode: 'no-cors', // Bypasses browser blocking for seamless background posting
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // 4b. Fire the Meta Conversions API (CAPI) event securely via our Vercel Serverless Function
      fetch('/api/capi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(err => console.error("CAPI trigger failed:", err));
      
      // 5. Trigger the WhatsApp redirect as normal or show success
      if (method === 'Message') {
        // Immediate Redirect to WhatsApp for Messages
        const msgText = encodeURIComponent(`پێویستم بە زانیاری زیاترە\nجۆری کارەکەم: ${job}\nشوێن: ${city}`);
        window.location.href = `https://wa.me/9647700253469?text=${msgText}`;
      } else {
        // Show Success Screen for Calls/Meetings (will redirect/notify them via WhatsApp separately per business flow)
        setIsSubmitting(false);
        setIsSuccess(true);
      }
      
    } catch (err) {
      console.error("Submission failed", err);
      // Fallback redirect if fetch fails
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (isSuccess) {
    return (
      <>
        <div className="modal-overlay">
          <div className="modal-content success-content" dir="rtl">
            <button className="modal-close" onClick={onClose}><X size={24} /></button>
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle2 size={80} color="#C5A459" style={{ margin: '0 auto 1.5rem auto' }} />
              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem', fontFamily: "'Noto Naskh Arabic', serif" }}>
                سوپاس پەیوەندییەکەت تۆمارکرا!
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                هەوڵدەدەین لەو کاتەی کە دیاریت کردووە پەیوەندیت پێوە بکەین
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
                پێش پەیوەندییەکە نامەیەکی ئاگادارکردنەوە بۆ بەڕێزت دەنێرین لە واتسئاپ
              </p>
              <button onClick={onClose} className="btn-primary" style={{ marginTop: '2.5rem' }}>
                داخستن
              </button>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .modal-overlay {
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(2,5,10,0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; justify-content: center; align-items: center; padding: 1rem;
          }
          .modal-content {
            background: #0B1120; border: 1px solid rgba(198,164,92,0.2);
            border-radius: 24px; width: 100%; max-width: 700px;
            max-height: 90vh; overflow-y: auto; position: relative;
            box-shadow: 0 32px 80px -20px rgba(0,0,0,0.8);
            display: flex; flex-direction: column;
          }
          .success-content { padding: 4rem 2rem; justify-content: center; align-items: center; }
          .modal-close {
            position: absolute; top: 1.5rem; left: 1.5rem;
            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
            color: #fff; border-radius: 50%; width: 40px; height: 40px;
            display: flex; justify-content: center; align-items: center;
            cursor: pointer; transition: all 0.2s; z-index: 10;
          }
          .modal-close:hover { background: rgba(255,255,255,0.1); transform: scale(1.05); }
        `}} />
      </>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" dir="rtl">
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        
        {/* Progress Bar */}
        <div className="modal-progress">
          <div className="modal-progress-fill" style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        {/* STEP 1: Method */}
        {step === 1 && (
          <div className="step-container animate-fade-in">
            <h2 className="step-title">سڵاو سوپاس بۆ هەڵبژاردنی HBgrow</h2>
            <p className="step-subtitle">تەنها زانیارییەکان وەک خۆی پڕبکەرەوە و لە ڕێی واتسئاپەوە گفتوگۆت لەگەڵ دەکەین لە کەمترین ماوەدا</p>
            
            <h3 className="step-question">حەزت بە کام شێوازی گفتوگۆیە بەڕێزت؟</h3>
            <div className="options-grid">
              <button 
                className={`option-btn ${method === 'Phone' ? 'active' : ''}`}
                onClick={() => setMethod('Phone')}
              >
                <Phone size={28} />
                <span>پەیوەندی تەلەفۆنی</span>
              </button>
              <button 
                className={`option-btn ${method === 'Meeting' ? 'active' : ''}`}
                onClick={() => setMethod('Meeting')}
              >
                <Video size={28} />
                <span>میتینگی ئۆنڵاین</span>
              </button>
              <button 
                className={`option-btn ${method === 'Message' ? 'active' : ''}`}
                onClick={() => setMethod('Message')}
              >
                <MessageCircle size={28} />
                <span>نامە</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Basic Info */}
        {step === 2 && (
          <div className="step-container animate-fade-in">
            <h3 className="step-question">زانیاری زیاتر دەربارەی کارەکەت</h3>
            
            <div className="input-group">
              <label>جۆری کاری بەڕێزت چییە؟</label>
              <input 
                type="text" 
                value={job} 
                onChange={e => setJob(e.target.value)} 
                placeholder="نموونە: بازرگانی جلوبەرگ، عەقارات..."
                className="step-input"
              />
            </div>

            <div className="input-group">
              <label>لە کام شارن بەڕێزتان؟</label>
              <input 
                type="text" 
                value={city} 
                onChange={e => setCity(e.target.value)} 
                placeholder="نموونە: سلێمانی"
                className="step-input"
              />
            </div>

            <div className="input-group">
              <label>ئیمەیڵ</label>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="ئیمەیڵەکەت لێرە بنووسە"
                className="step-input"
                dir="ltr"
                style={{ textAlign: 'right' }}
              />
            </div>
          </div>
        )}

        {/* STEP 3: Final Info & Calendar */}
        {step === 3 && (
          <div className="step-container animate-fade-in">
            <h3 className="step-question">زانیاری کەسی</h3>
            
            <div className="input-grid">
              <div className="input-group">
                <label>ناوی بەڕێزتان</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  placeholder="ناوت لێرە بنووسە"
                  className="step-input"
                />
              </div>

              <div className="input-group">
                <label>ژمارەی واتسئاپی بەڕێزتان</label>
                <input 
                  type="tel" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                  placeholder="0750 123 4567"
                  className="step-input"
                  dir="ltr"
                  style={{ textAlign: 'right' }}
                />
              </div>
            </div>

            {(method === 'Phone' || method === 'Meeting') && (
              <div className="calendar-section" style={{ marginTop: '2.5rem' }}>
                <h3 className="step-question" style={{ fontSize: '1.4rem' }}>چ کاتێک گونجاوە بۆ پەیوەندیکردن بۆ بەڕێزتان؟</h3>
                
                <div className="dates-row">
                  {availableDates.map((d, i) => {
                    const isSelected = selectedDate && d.getTime() === selectedDate.getTime();
                    return (
                      <button 
                        key={i} 
                        className={`date-btn ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedDate(d)}
                      >
                        <div className="date-day">{d.toLocaleDateString('ku-IQ', { weekday: 'short' })}</div>
                        <div className="date-num">{d.getDate()}</div>
                        <div className="date-month">{d.toLocaleDateString('ku-IQ', { month: 'short' })}</div>
                      </button>
                    );
                  })}
                </div>

                {selectedDate && (
                  <div className="times-grid" style={{ marginTop: '1.5rem' }}>
                    {availableTimes.map((time, i) => (
                      <button 
                        key={i} 
                        className={`time-btn ${selectedTime === time ? 'active' : ''}`}
                        onClick={() => setSelectedTime(time)}
                        dir="ltr"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="modal-footer">
          {step > 1 ? (
            <button className="nav-btn prev" onClick={handlePrev}>
              <ArrowRight size={20} /> گەڕانەوە
            </button>
          ) : <div />}

          {step < 3 ? (
            <button 
              className="btn-primary" 
              onClick={handleNext}
              disabled={(step === 1 && !method) || (step === 2 && (!job || !city || !email))}
              style={{ border: 'none', cursor: ((step === 1 && !method) || (step === 2 && (!job || !city || !email))) ? 'not-allowed' : 'pointer', opacity: ((step === 1 && !method) || (step === 2 && (!job || !city || !email))) ? 0.5 : 1 }}
            >
              دواتر <ArrowLeft size={20} style={{ marginLeft: 0, marginRight: '0.5rem' }} />
            </button>
          ) : (
            <button 
              className="btn-primary" 
              onClick={handleSubmit}
              disabled={isSubmitting || !name || !phone || (method !== 'Message' && (!selectedDate || !selectedTime))}
              style={{ border: 'none', cursor: (isSubmitting || !name || !phone || (method !== 'Message' && (!selectedDate || !selectedTime))) ? 'not-allowed' : 'pointer', opacity: (isSubmitting || !name || !phone || (method !== 'Message' && (!selectedDate || !selectedTime))) ? 0.5 : 1 }}
            >
              {isSubmitting ? 'خەریکە...' : 'ناردن'}
            </button>
          )}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .modal-overlay {
          position: fixed; inset: 0; z-index: 10000;
          background: rgba(2,5,10,0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          display: flex; justify-content: center; align-items: flex-end;
          padding: 0;
        }
        @media (min-width: 600px) {
          .modal-overlay { align-items: center; padding: 1rem; }
        }
        .modal-content {
          background: #0B1120; border: 1px solid rgba(198,164,92,0.2);
          border-radius: 24px 24px 0 0; width: 100%; max-width: 700px;
          max-height: 92dvh; overflow-y: auto; position: relative;
          box-shadow: 0 -16px 60px -10px rgba(0,0,0,0.8);
          display: flex; flex-direction: column;
        }
        @media (min-width: 600px) {
          .modal-content { border-radius: 24px; max-height: 90vh; box-shadow: 0 32px 80px -20px rgba(0,0,0,0.8); }
        }
        .success-content { padding: 3rem 1.5rem; justify-content: center; align-items: center; }
        .modal-close {
          position: absolute; top: 1rem; left: 1rem;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: #fff; border-radius: 50%; width: 38px; height: 38px;
          display: flex; justify-content: center; align-items: center;
          cursor: pointer; transition: all 0.2s; z-index: 10; flex-shrink: 0;
        }
        .modal-close:hover { background: rgba(255,255,255,0.1); transform: scale(1.05); }
        .modal-progress {
          height: 4px; background: rgba(255,255,255,0.05); width: 100%;
          border-radius: 24px 24px 0 0; overflow: hidden; flex-shrink: 0;
        }
        .modal-progress-fill {
          height: 100%; background: #C5A459; transition: width 0.4s ease;
        }
        .step-container {
          padding: 1.5rem 1.25rem 1rem;
          flex: 1;
        }
        @media (min-width: 600px) {
          .step-container { padding: 2.5rem 2.5rem 1.5rem; }
        }
        .step-title {
          font-family: 'Noto Naskh Arabic', serif;
          font-size: clamp(1.3rem, 5vw, 2.2rem);
          color: #fff; margin-bottom: 0.5rem; font-weight: 700;
          padding-left: 2.5rem;
          line-height: 1.3;
        }
        .step-subtitle {
          color: rgba(255,255,255,0.6);
          font-size: clamp(0.82rem, 3vw, 1.1rem);
          line-height: 1.7; margin-bottom: 2rem;
        }
        .step-question {
          color: #E8C96A;
          font-size: clamp(0.95rem, 3.5vw, 1.5rem);
          margin-bottom: 1.25rem; font-weight: 600; line-height: 1.4;
        }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        @media (min-width: 480px) {
          .options-grid { gap: 1rem; }
        }
        .option-btn {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 1.25rem 0.75rem; color: #fff; cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
          transition: all 0.3s ease; font-size: clamp(0.78rem, 2.5vw, 0.95rem);
        }
        @media (min-width: 480px) {
          .option-btn { border-radius: 16px; padding: 2rem 1.5rem; font-size: 1rem; }
        }
        .option-btn svg { width: clamp(20px, 5vw, 28px); height: clamp(20px, 5vw, 28px); }
        .option-btn:hover { background: rgba(255,255,255,0.06); border-color: rgba(198,164,92,0.3); }
        .option-btn.active {
          background: rgba(198,164,92,0.1); border-color: #C5A459;
          box-shadow: 0 0 20px rgba(198,164,92,0.15); color: #E8C96A;
        }
        .input-group { margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; }
        .input-group label { color: rgba(255,255,255,0.8); font-size: clamp(0.85rem, 3vw, 1.1rem); }
        .step-input {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
          padding: 0.9rem 1.1rem; border-radius: 12px; color: #fff;
          font-size: clamp(0.9rem, 3vw, 1.1rem);
          font-family: inherit; transition: all 0.3s; width: 100%;
        }
        .step-input::placeholder { color: rgba(255,255,255,0.3); }
        .step-input:focus { outline: none; border-color: #C5A459; background: rgba(255,255,255,0.06); }
        .input-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
        @media (min-width: 520px) {
          .input-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
        }
        
        .dates-row {
          display: flex; gap: 0.6rem; overflow-x: auto; padding-bottom: 0.75rem;
          scrollbar-width: none;
        }
        .dates-row::-webkit-scrollbar { display: none; }
        .date-btn {
          flex: 0 0 64px; height: 88px; border-radius: 14px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7); cursor: pointer;
          display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 0.15rem;
          transition: all 0.2s;
        }
        @media (min-width: 480px) {
          .date-btn { flex: 0 0 80px; height: 100px; }
        }
        .date-btn:hover { background: rgba(255,255,255,0.06); }
        .date-btn.active { background: #C5A459; border-color: #C5A459; color: #111; }
        .date-num { font-size: clamp(1.4rem, 4vw, 1.8rem); font-weight: 800; font-family: monospace; }
        .date-day, .date-month { font-size: clamp(0.7rem, 2.5vw, 0.9rem); }
        
        .times-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem;
        }
        @media (min-width: 480px) {
          .times-grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; }
        }
        .time-btn {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          padding: 0.875rem 0.5rem; border-radius: 12px; color: #fff; cursor: pointer;
          transition: all 0.2s; font-family: monospace; font-size: clamp(0.82rem, 2.5vw, 1.05rem);
          text-align: center;
        }
        .time-btn:hover { border-color: rgba(198,164,92,0.4); }
        .time-btn.active { background: rgba(198,164,92,0.15); border-color: #C5A459; color: #E8C96A; }

        .modal-footer {
          padding: 1rem 1.25rem; border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;
          background: rgba(0,0,0,0.2); flex-shrink: 0;
        }
        @media (min-width: 480px) {
          .modal-footer { padding: 1.25rem 2rem; }
        }
        .nav-btn.prev { 
          display: flex; align-items: center; gap: 0.4rem;
          font-size: clamp(0.85rem, 3vw, 1.1rem);
          cursor: pointer; background: transparent; border: none; transition: all 0.2s;
          color: rgba(255,255,255,0.6); white-space: nowrap; flex-shrink: 0;
        }
        .nav-btn.prev:hover { color: #fff; }
        .nav-btn.prev:disabled { opacity: 0.5; cursor: not-allowed; }

        .animate-fade-in { animation: modalFadeIn 0.4s ease forwards; }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .step-container { padding: 2rem 1.5rem; }
          .modal-footer { padding: 1.25rem 1.5rem; }
          .step-title { font-size: 1.8rem; }
          .input-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
}
