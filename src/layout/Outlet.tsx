// layout/Outlet.tsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface OutletProps {
  children: React.ReactNode;
}

export default function Outlet({ children }: OutletProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F9] text-slate-800 antialiased selection:bg-[#D4AF37] selection:text-white">
      {/* Sticky Header stays fixed */}
      <Header isScrolled={isScrolled} />
      
      {/* 
        The Content Engine:
        - pt-28 ensures every single page starts EXACTLY at the same line below the navbar.
        - pb-16 to pb-24 establishes uniform bottom breathing room before meeting the dark footer.
        - min-h-[calc(100vh-280px)] prevents the layout from pulling up on short content pages.
      */}
      <main className="flex-grow pt-28 pb-20 px-6 max-w-7xl mx-auto w-full min-h-[calc(100vh-320px)] box-border">
        {children}
      </main>

      <Footer />
    </div>
  );
}