import { SectionHeader } from '../components/CommonLayouts';

export default function ContactUs() {
  return (
    <div className="w-full animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5 space-y-4">
          <SectionHeader 
            tag="Connect Intentionally" 
            title="Initiate Your Restorative Journey" 
            centered={false} 
          />
          <p className="text-slate-600 font-light text-sm leading-relaxed">
            Have questions regarding our signature frameworks, long-term institutional partnerships, or customized family restoration retreats?[cite: 1] Our team is here to assist you.
          </p>
          <div className="text-xs text-slate-500 font-mono space-y-1 pt-2">
            <div>📍 HQ Suites: Nairobi, Kenya</div>
            <div>🕒 Hours: Mon - Fri (08:00 AM - 05:00 PM)</div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xs">
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Full Legal Name" className="w-full p-3 rounded-xl text-xs bg-[#F4F7F9] border-none focus:ring-1 focus:ring-[#1F4E79]" />
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-xl text-xs bg-[#F4F7F9] border-none focus:ring-1 focus:ring-[#1F4E79]" />
            <textarea placeholder="Outline your current goals or wounds..." rows={4} className="w-full p-3 rounded-xl text-xs bg-[#F4F7F9] border-none focus:ring-1 focus:ring-[#1F4E79]"></textarea>
            <button className="w-full bg-[#1F4E79] hover:bg-[#153654] text-white font-bold py-3.5 text-xs rounded-xl tracking-widest transition-colors">
              SUBMIT REGISTER
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}