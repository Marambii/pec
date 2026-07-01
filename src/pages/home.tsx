// pages/home.tsx
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader, ProgramCard, CallToActionBanner } from '../components/CommonLayouts';
import { PROGRAMS_DATA, TESTIMONIALS_DATA } from '../mockdata';

export default function Home() {
  const navigate = useNavigate();
  const [activePillar, setActivePillar] = useState(0);
  const CALENDLY_LINK = "https://calendly.com/marambijm2015/30min";

  // --- 4 P's Core Framework Matrix ---
  const pillars = [
    { label: "Person", question: "Who am I?", desc: "Unlocking raw structural identity by identifying the patterns of childhood without projecting blame onto parents, culture, or your environment[cite: 1]." },
    { label: "Purpose", question: "Why am I here?", desc: "Discovering your core identity and unique alignment to unlock your life story as your greatest asset[cite: 1]." },
    { label: "Process", question: "How do I grow?", desc: "Submitting to an intentional refining journey focused on emotional regulation protocols and step-by-step accountability[cite: 1]." },
    { label: "Prize", question: "What impact will I make?", desc: "Reaching deep structural societal influence, systemic worth, and building a generational legacy that reaches far beyond yourself[cite: 1]." }
  ];

  // --- Smooth Stat Counter Hook ---
  const [metrics, setMetrics] = useState({ homes: 0, leaders: 0, satisfaction: 0 });
  useEffect(() => {
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setMetrics({
        homes: Math.round((180 / steps) * currentStep),
        leaders: Math.round((450 / steps) * currentStep),
        satisfaction: Math.round((100 / steps) * currentStep)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setMetrics({ homes: 180, leaders: 450, satisfaction: 100 });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-24 animate-fadeIn">
      
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-xs text-xs font-bold tracking-widest text-[#1F4E79] uppercase border border-slate-100">
            ✨ Welcome to the Coaching Ecosystem[cite: 1]
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1F4E79] leading-tight">
            Polishing Lives for <br />
            <span className="text-[#D4AF37] relative inline-block">Purpose & Excellence[cite: 1]</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Helping individuals, families, and leaders discover deep identity, heal completely from structural life wounds, and step boldly into sustainable legacy[cite: 1].
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1F4E79] text-white hover:bg-[#153654] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest shadow-md transition-all uppercase text-center"
            >
              Book a Session
            </a>
            <button 
              onClick={() => navigate('/programs')} 
              className="bg-white text-[#1F4E79] border border-slate-200 hover:border-[#1F4E79] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest transition-all shadow-xs uppercase"
            >
              Explore Programs
            </button>
          </div>
        </div>

        {/* Framing Image Block */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm h-[440px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80" 
              alt="Authentic African Family Harmony" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E79]/40 via-transparent to-transparent" />
          </div>
          
          {/* Floating Accent Badge */}
          <div className="absolute top-12 -left-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md border border-slate-100 transform -rotate-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase block">Lifestyle[cite: 1]</span>
            <span className="text-xs font-bold text-[#1F4E79]">Identity & Growth[cite: 1]</span>
          </div>
        </div>
      </section>

      {/* 2. METRICS COUNTER MATRIX */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        {[
          { count: `${metrics.homes}+`, title: "Homes Restored", note: "Practical steps to rebuild trust[cite: 1]." },
          { count: `${metrics.leaders}+`, title: "Leaders Aligned", note: "Refining people for significance[cite: 1]." },
          { count: `${metrics.satisfaction}%`, title: "Restoration Rate", note: "True structural transformation[cite: 1]." }
        ].map((metric, i) => (
          <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl text-center shadow-xs">
            <span className="block text-3xl font-bold font-mono text-[#1F4E79] mb-1">{metric.count}</span>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">{metric.title}</h4>
            <p className="text-slate-500 text-[11px] font-light leading-relaxed">{metric.note}</p>
          </div>
        ))}
      </section>

      {/* 3. INTERACTIVE 4 P's CARD GRID */}
      <section className="w-full">
        <SectionHeader 
          tag="The Core Teachings" 
          title="The 4 P’s Pillars Strategy" 
          subtitle="The structure and teachings revolve around five pillars that create a complete transformational model[cite: 1]."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Menu Select Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {pillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl font-serif text-sm font-bold transition-all whitespace-nowrap lg:whitespace-normal border ${
                  activePillar === idx 
                    ? 'bg-[#1F4E79] text-white border-[#1F4E79] shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-100'
                }`}
              >
                {pillar.label}
              </button>
            ))}
          </div>

          {/* Core Panel Card */}
          <div className="lg:col-span-8 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xs flex flex-col justify-center min-h-[220px]">
            <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-1">
              {pillars[activePillar].label} Matrix
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#1F4E79] mb-4">
              {pillars[activePillar].question}[cite: 1]
            </h3>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              {pillars[activePillar].desc}
            </p>
          </div>
        </div>
      </section>

      {/* 4. EMOTIONAL REGULATION CARD */}
      <section className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 text-center max-w-5xl mx-auto w-full">
        <span className="text-[#1F4E79] uppercase tracking-widest text-xs font-bold block mb-2">
          Daily Transformative Protocol[cite: 1]
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1F4E79] mb-10">
          Our Emotional Regulation Methodology[cite: 1]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: 'STOP', act: 'Pause immediately before reacting blindly[cite: 1].' },
            { step: 'THINK', act: 'Evaluate honestly what you are feeling beneath the wound[cite: 1].' },
            { step: 'RESPOND', act: 'Speak calmly, transparently, and constructively[cite: 1].' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#F4F7F9] p-6 rounded-xl border border-slate-50">
              <span className="block text-2xl font-serif font-bold text-[#D4AF37] mb-2">{item.step}</span>
              <p className="text-slate-600 text-xs font-light leading-relaxed">{item.act}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CURATED PROGRAMS SLOTS */}
      <section className="w-full">
        <SectionHeader 
          tag="Tailored Frameworks[cite: 1]" 
          title="Signature Ecosystem Programs[cite: 1]" 
          subtitle="Deliberate tracks built for complete transformational alignment and identity discovery[cite: 1]." 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS_DATA.slice(0, 3).map((prog) => (
            <ProgramCard key={prog.id} prog={prog} onLearnMore={() => navigate('/programs')} />
          ))}
        </div>
      </section>

      {/* 6. SINGLE TRUST TESTIMONIAL VIEW */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-xs relative text-center">
          <span className="absolute top-4 left-6 text-7xl font-serif text-[#D4AF37]/20 select-none">“</span>
          <p className="text-base md:text-lg text-slate-600 font-light italic relative z-10 leading-relaxed mb-6">
            "{TESTIMONIALS_DATA[0].quote}"[cite: 1]
          </p>
          <div className="flex items-center justify-center space-x-3">
            <img 
              src={TESTIMONIALS_DATA[0].image} 
              alt="Client Portrait" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#D4AF37]" 
            />
            <div className="text-left">
              <h4 className="text-xs font-bold text-[#1F4E79]">{TESTIMONIALS_DATA[0].name}[cite: 1]</h4>
              <p className="text-[10px] text-slate-400 font-light">{TESTIMONIALS_DATA[0].role} &bull; {TESTIMONIALS_DATA[0].location}[cite: 1]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION INTERFACE */}
      <CallToActionBanner onAction={() => window.open(CALENDLY_LINK, '_blank', 'noopener,noreferrer')} />

    </div>
  );
}