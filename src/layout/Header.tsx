// layout/Header.tsx
import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contactus" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo Identity */}
        <Link to="/" className="flex items-center space-x-3 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1F4E79] to-[#D4AF37] flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs transform group-hover:scale-105 transition-transform">
            P
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-[#1F4E79] block font-serif">PEC</span>
            <span className="text-[9px] uppercase tracking-widest text-slate-500 block -mt-1 font-sans font-semibold">Philosophy of Excellence</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative pb-1 transition-colors ${
                  isActive ? "text-[#1F4E79]" : "text-slate-600 hover:text-[#1F4E79]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Call To Action Hook Button */}
        <div className="hidden md:block">
          <Link 
            to="https://calendly.com/marambijm2015/30min"
            className="bg-[#1F4E79] hover:bg-[#153654] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs"
          >
            BOOK A SESSION
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Mechanism */}
        <button 
          className="md:hidden text-[#1F4E79] p-1 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white border-t border-slate-100 z-40 p-6 flex flex-col space-y-4 shadow-xl transition-all">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left text-base font-semibold py-2 border-b border-slate-50 ${
                  isActive ? "text-[#1F4E79] border-[#D4AF37]" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            to="/contactus"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-[#1F4E79] text-white text-center py-3.5 rounded-xl font-bold tracking-wider text-xs mt-4 block"
          >
            BOOK A SESSION
          </Link>
        </div>
      )}
    </nav>
  );
}