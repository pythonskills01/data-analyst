import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav 
          className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/40 border border-white/20' 
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, '#about')}
            className="flex items-center gap-2 font-bold text-slate-900 text-lg tracking-tight"
          >
            <div className="p-1.5 bg-slate-900 text-white rounded-lg">
              <BarChart2 size={18} strokeWidth={2.5} />
            </div>
            DATA ANALYST
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-5 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors shadow-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-4 md:hidden">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 flex flex-col gap-2 mx-2 animate-in slide-in-from-top-4 fade-in">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-2 px-4 py-3 text-center text-base font-semibold bg-slate-900 text-white rounded-xl hover:bg-slate-800"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};