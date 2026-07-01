// src/pages/aboutus.tsx

import { SectionHeader } from '../components/CommonLayouts';

export default function AboutUs() {
  return (
    <div className="space-y-12 w-full animate-fadeIn">
      <SectionHeader 
        tag="Our Ultimate Narrative" 
        title="The Architecture of PEC" 
        subtitle="Refining systemic capacity, personal alignment, and structural transformation across communities."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xs">
          <h3 className="text-xl font-bold text-[#1F4E79] font-serif mb-3">Our Long-Term Vision</h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Empowering people to confidently discover authentic purpose, maximize lifelong potential, and actively achieve pure excellence in every single developmental sphere of human life.
          </p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xs">
          <h3 className="text-xl font-bold text-[#1F4E79] font-serif mb-3">The Mission Mandate</h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            To completely empower people to live purposeful lives of pure excellence that transforms and positively impacts relationships, families, local communities, and enterprise organizations.
          </p>
        </div>
      </div>
    </div>
  );
}