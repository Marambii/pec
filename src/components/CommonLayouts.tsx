// components/CommonLayouts.tsx
import React from 'react';
import { type Program } from '../types';

// Unifies the top headings across pages
export const SectionHeader: React.FC<{ tag: string; title: string; subtitle?: string; centered?: boolean }> = ({
  tag,
  title,
  subtitle,
  centered = true
}) => (
  <div className={`space-y-3 mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold block">{tag}</span>
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F4E79] tracking-tight">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-xl mx-auto font-light text-sm">{subtitle}</p>}
  </div>
);

// Standard Program Display Card
export const ProgramCard: React.FC<{ prog: Program; onLearnMore: () => void }> = ({ prog, onLearnMore }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
    <div className="h-48 overflow-hidden relative">
      <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#1F4E79] uppercase tracking-widest">
        {prog.category}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-grow space-y-4">
      <h3 className="text-lg font-bold font-serif text-[#1F4E79] line-clamp-1">{prog.title}</h3>
      <p className="text-slate-600 text-xs font-light line-clamp-3 leading-relaxed">{prog.description}</p>
      <div className="pt-2 border-t border-slate-50 mt-auto flex justify-between items-center text-xs text-slate-500">
        <span>👥 {prog.duration} Course</span>
        <button onClick={onLearnMore} className="text-[#D4AF37] font-bold tracking-wider hover:underline">LEARN MORE</button>
      </div>
    </div>
  </div>
);

// Modular Call To Action Banner placed at the bottom of pages
export const CallToActionBanner: React.FC<{ onAction: () => void }> = ({ onAction }) => (
  <section className="py-16 bg-white px-6">
    <div className="max-w-5xl mx-auto bg-gradient-to-tr from-[#1F4E79] to-[#2c6fa8] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Begin Your Turning Point?</h2>
      <p className="text-slate-200 font-light max-w-xl mx-auto text-sm md:text-base mb-8">
        Step intentionally into healing, true structural framework alignment, and destiny fulfillment.
      </p>
      <button onClick={onAction} className="bg-[#D4AF37] hover:bg-[#c19e2e] text-white font-bold px-8 py-3.5 rounded-full text-xs tracking-widest transition-all shadow-md">
        BOOK A COACHING SESSION
      </button>
    </div>
  </section>
);