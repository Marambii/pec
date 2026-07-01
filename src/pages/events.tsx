// pages/events.tsx
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../components/CommonLayouts';
import { EVENTS_DATA } from '../mockdata';

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12 w-full animate-fadeIn">
      <SectionHeader 
        tag="Gatherings of Influence" 
        title="Upcoming Transformational Turning Points" 
        subtitle="Immersive environments designed to spark identity recovery, systemic training, and deep personal calibration."
      />

      <div className="space-y-8 max-w-4xl mx-auto">
        {EVENTS_DATA.map((evt) => (
          <div key={evt.id} className="bg-white rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 p-4 items-center border border-slate-100 shadow-xs">
            <div className="md:col-span-4 h-40 rounded-xl overflow-hidden">
              <img src={evt.image} alt={evt.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-8 p-4 space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#1F4E79]">{evt.title}</h3>
              <p className="text-slate-600 text-xs font-light">{evt.description}</p>
              <div className="text-[11px] text-slate-400 font-mono">📅 {evt.date} | 📍 {evt.location}</div>
              <button 
                onClick={() => navigate('/contactus')} 
                className="bg-[#1F4E79] hover:bg-[#153654] text-white text-xs font-bold px-4 py-2 rounded-lg mt-2 transition-colors"
              >
                Register Pass
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}