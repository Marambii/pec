// layout/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111A24] text-slate-400 pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        
        {/* Brand Mission Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1F4E79] to-[#D4AF37] flex items-center justify-center text-white font-serif font-bold text-sm">
              P
            </div>
            <span className="text-lg font-serif font-bold text-white tracking-tight">Philosophy of Excellence (PEC)</span>
          </div>
          <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md">
            PEC exists to restore, rebuild, and reconnect from wounds to restoration[cite: 1]. We equip individuals into a healthier, renewed future where root causes are established and connection is nurtured[cite: 1].
          </p>
          <div className="pt-2 border-l-2 border-[#D4AF37] pl-3">
            <p className="text-xs italic text-slate-300 font-serif">"Reach for the star within you."[cite: 1]</p>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block mt-0.5 font-bold font-sans">Official Motto[cite: 1]</span>
          </div>
        </div>

        {/* Quick Program Links */}
        <div className="md:col-span-3 space-y-3 text-xs">
          <h4 className="text-white uppercase font-bold tracking-wider text-[11px] font-sans">Core Index</h4>
          <ul className="space-y-2 font-light">
            <li><Link to="/" className="hover:text-white transition-colors">Ecosystem Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-white transition-colors">Our Narrative Story</Link></li>
            <li><Link to="/programs" className="hover:text-white transition-colors">Signature Coaching</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Summit Turning Points</Link></li>
            <li><Link to="/contactus" className="hover:text-white transition-colors">Contact Registry</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription Component */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-white uppercase font-bold tracking-wider text-[11px]">The Journal Dispatch</h4>
          <p className="text-xs font-light text-slate-400">
            Subscribe to receive insights on emotional regulation, childhood pattern mapping, and marriage updates[cite: 1].
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="your.email@domain.com" 
              className="bg-slate-900 border border-slate-800 text-xs text-slate-300 p-3 rounded-l-xl focus:outline-none focus:border-[#1F4E79] w-full"
              required 
            />
            <button 
              type="submit" 
              className="bg-[#D4AF37] hover:bg-[#c19e2e] text-white text-xs font-bold px-4 rounded-r-xl uppercase tracking-wider transition-all"
            >
              JOIN
            </button>
          </form>
        </div>

      </div>

      {/* Footer Meta Credits */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[11px] font-light text-slate-500 gap-4">
        <div>
          &copy; {currentYear} Philosophy of Excellence (PEC)[cite: 1]. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Alignment</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Safeguards</span>
        </div>
      </div>
    </footer>
  );
}