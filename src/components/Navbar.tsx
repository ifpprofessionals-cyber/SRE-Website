import React, { useState, useEffect } from 'react';
import { ShieldCheck, PhoneCall, Menu, X, ChevronRight, Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import sreLogo from '../assets/sre-logo-transparent.png';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user is scrolled past top
      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY <= 80) {
        // Always show near the very top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling down -> collapse/hide header
        setIsVisible(false);
        setMobileMenuOpen(false); // also close mobile menu if open
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
        // Scrolling up -> reveal/expand header
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      // Section tracking for active tab indicator
      const sections = ['home', 'about', 'credibility', 'courses', 'verify-trainer', 'resources', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Credibility', href: '#credibility', id: 'credibility' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Alumni', href: '#testimonials', id: 'testimonials' },
    { label: 'Labs Tour', href: '#virtual-tour', id: 'virtual-tour' },
    { label: 'Jobs', href: '#job-board', id: 'job-board' },
    { label: 'Resources', href: '#resources', id: 'resources' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out will-change-transform ${
        isVisible ? 'translate-y-0 shadow-2xl' : '-translate-y-full'
      }`}
    >
      {/* Top Academic Trust Bar */}
      <div className="bg-[#04070e] text-slate-300 border-b border-slate-800 text-xs py-1.5 px-4 sm:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              SRE Fitness Sciences & Biomechanics Institute
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Govt. Recognized Skill Council Partner</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium">
              <PhoneCall className="w-3.5 h-3.5 text-red-500" />
              Admissions: +91 (022) 4890-5500
            </span>
            <a
              href="#verify-trainer"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('verify-trainer');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Verify Trainer
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation with Official SRE Logo & Theme Toggle */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#070b16]/95 backdrop-blur-md shadow-2xl border-b border-slate-800/90 py-2.5'
              : 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200 py-2.5'
            : theme === 'dark'
              ? 'bg-[#070b16]/85 backdrop-blur-sm border-b border-slate-800/50 py-3.5'
              : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Official Logo Display */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
              <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200/90 flex items-center justify-center transition-transform group-hover:scale-105 duration-300 flex-shrink-0">
                <img
                  src={sreLogo}
                  alt="SRE Fitness Academy Logo"
                  className="h-7 sm:h-8 w-auto object-contain block"
                  loading="eager"
                />
              </div>
              <div className="hidden sm:flex flex-col justify-center flex-shrink-0 leading-tight">
                <span className={`text-sm sm:text-base font-black tracking-wider font-heading leading-none ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  SRE <span className="text-[#ef3838]">FITNESS</span>
                </span>
                <span className="text-xs sm:text-sm font-black tracking-wider text-[#2575dc] font-heading mt-0.5 leading-none">
                  ACADEMY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-white bg-slate-800 shadow-inner'
                          : 'text-slate-950 bg-slate-200/90 shadow-sm'
                        : theme === 'dark'
                          ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gradient-to-r from-[#ef3838] to-[#2575dc] rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Action CTAs + Theme Toggle */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Light / Dark Mode Toggle Switcher */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-700 text-amber-400'
                    : 'bg-slate-100 border-slate-300 text-blue-700'
                }`}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle Light/Dark Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600 hover:-rotate-12 transition-transform" />
                )}
              </button>

              <a
                href="#verify-trainer"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('verify-trainer');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-3d-blue inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl tracking-wide shadow-md whitespace-nowrap flex-shrink-0 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                <span>Verify Trainer</span>
              </a>
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('courses');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-3d-red inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black text-white rounded-xl tracking-wide shadow-md whitespace-nowrap flex-shrink-0 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-white flex-shrink-0" />
                <span>Enroll in Batch</span>
                <ChevronRight className="w-3.5 h-3.5 text-white flex-shrink-0" />
              </a>
            </div>

            {/* Mobile Hamburger + Theme Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-700 text-amber-400'
                    : 'bg-slate-100 border-slate-300 text-blue-700'
                }`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden px-4 pt-3 pb-6 mt-3 space-y-2 border-b animate-fadeIn ${
            theme === 'dark'
              ? 'bg-[#090e1c] border-slate-800'
              : 'bg-white border-slate-200 shadow-xl'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  activeSection === link.id
                    ? theme === 'dark'
                      ? 'text-blue-400 bg-slate-800'
                      : 'text-blue-700 bg-blue-50'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className={`pt-3 border-t flex flex-col gap-2 ${
              theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <a
                href="#verify-trainer"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const target = document.getElementById('verify-trainer');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg border cursor-pointer ${
                  theme === 'dark'
                    ? 'text-slate-200 bg-slate-900 border-slate-700'
                    : 'text-slate-800 bg-slate-100 border-slate-300'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Verify Trainer
              </a>
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const target = document.getElementById('courses');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-3d-red flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-xl shadow-md cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-white" />
                <span>Enroll in Batch</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
