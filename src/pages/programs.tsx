// pages/programs.tsx
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader, ProgramCard } from '../components/CommonLayouts';
import { PROGRAMS_DATA } from '../mockdata';

export default function Programs() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Relationships', 'Family', 'Leadership'];

  return (
    <div className="space-y-12 w-full animate-fadeIn">
      <SectionHeader 
        tag="Curated Classrooms" 
        title="Ecosystem Portfolios" 
        subtitle="Deliberate frameworks designed for personal, relational, and cross-functional leadership advancement."
      />
      
      <div className="flex justify-center gap-2">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)} 
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              filter === cat ? 'bg-[#1F4E79] text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROGRAMS_DATA.filter(p => filter === 'All' || p.category === filter).map(prog => (
          <ProgramCard key={prog.id} prog={prog} onLearnMore={() => navigate('/contactus')} />
        ))}
      </div>
    </div>
  );
}