import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ArrowRight } from 'lucide-react';
import { Project, ScrollReveal, OptimizedImage } from './App';

const FurniEliteFloatingIndex = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'design-system', label: 'DESIGN SYSTEM' },
    { id: 'key-screens', label: 'KEY SCREENS' },
  ];

  const isVisibleRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = isVisibleRef.current ? 350 : 60;
      if (e.clientX > window.innerWidth - threshold) {
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          setIsVisible(true);
        }
      } else {
        if (isVisibleRef.current) {
          isVisibleRef.current = false;
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    setTimeout(() => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const container = document.getElementById('case-study-container');
    if (element && container) {
      const topPos = element.getBoundingClientRect().top + container.scrollTop - container.getBoundingClientRect().top;
      container.scrollTo({ top: topPos, behavior: 'smooth' });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[59] bg-[#111714] border border-white/10 border-r-0 py-4 px-1 rounded-l-md transition-transform duration-300 ease-in-out cursor-pointer hidden lg:flex flex-col items-center justify-center gap-2 ${
          isVisible ? 'translate-x-full' : 'translate-x-0'
        }`}
        onMouseEnter={() => {
          isVisibleRef.current = true;
          setIsVisible(true);
        }}
      >
        <ChevronLeft size={14} className="text-[#00795B] animate-bounce-left" />
        <span className="font-['Poppins'] text-[10px] uppercase text-[#00795B] tracking-widest [writing-mode:vertical-rl] rotate-180 font-semibold">
          INDEX
        </span>
      </div>

      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[60] bg-[#111714] border-l border-white/10 p-6 pr-5 transition-transform duration-300 ease-in-out hidden lg:block ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="font-['Poppins'] text-[10px] uppercase text-[#00795B] tracking-widest mb-2 font-bold">
          INDEX
        </div>
        <div className="w-full h-px bg-[#00795B] mb-4 opacity-50"></div>
        <ul className="space-y-3">
          {sections.map(({ id, label }) => (
            <li key={id} className="flex items-center">
              <div
                className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors ${
                  activeSection === id ? 'bg-[#00795B]' : 'bg-transparent'
                }`}
              ></div>
              <button
                onClick={() => scrollToSection(id)}
                className={`font-['Poppins'] text-[10px] uppercase tracking-[0.2em] text-left transition-colors font-medium ${
                  activeSection === id ? 'text-[#00795B]' : 'text-[#6B7280] hover:text-[#00795B]'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const FurniEliteCaseStudy = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('theme-furnielite');
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('theme-furnielite');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-[#0A0F0D] font-['Poppins']">
      <FurniEliteFloatingIndex />
      
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div 
        className="absolute inset-0 bg-[#0A0F0D]/90 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      <div id="case-study-container" className="relative w-full h-full bg-[#0A0F0D] overflow-y-auto shadow-2xl scrollbar-hide">
        {/* Back Button */}
        <div className="fixed top-8 left-8 z-[60]">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 font-['Poppins'] text-xs uppercase tracking-widest text-[#00795B] hover:text-[#B2DFDB] transition-colors interactive bg-[#111714]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/5"
          >
            <ChevronLeft size={16} />
            Back to Portfolio
          </button>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 z-[60] p-2 rounded-full bg-[#111714]/80 border border-white/5 hover:bg-[#00795B]/20 transition-colors interactive text-white backdrop-blur-md"
        >
          <X size={20} />
        </button>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 pt-32 pb-24 relative z-10 text-white">
          
          {/* HERO */}
          <div className="mb-32">
            <ScrollReveal>
              <div className="font-['Poppins'] text-[#00795B] text-sm font-semibold uppercase tracking-widest mb-6">
                INTERNSHIP PROJECT — MOBILE APP — 2024
              </div>
              <h1 className="font-['Poppins'] text-6xl sm:text-8xl md:text-[100px] font-extrabold leading-[0.9] tracking-tighter mb-8 text-white">
                FURNIELITE
              </h1>
              <p className="font-['Poppins'] text-[#6B7280] text-lg sm:text-xl max-w-3xl leading-relaxed mb-16">
                An online furniture store app with augmented reality — helping users visualise furniture in their own space before buying.
              </p>
            </ScrollReveal>

            <ScrollReveal delay="delay-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Role', value: 'UI UX Designer' },
                  { label: 'Type', value: 'Mobile App iOS' },
                  { label: 'Tools', value: 'Figma' },
                  { label: 'Font', value: 'Poppins' }
                ].map((meta, i) => (
                  <div key={i} className="bg-[#111714] border border-white/5 p-6 rounded-xl">
                    <div className="font-['Poppins'] text-[#00795B] text-xs font-bold uppercase tracking-widest mb-2">{meta.label}</div>
                    <div className="font-['Poppins'] text-white text-sm font-medium">{meta.value}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* OVERVIEW */}
          <section id="overview" className="mb-32 pt-16">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                  <h2 className="font-['Poppins'] text-[#00795B] text-sm font-bold uppercase tracking-widest sticky top-32">
                    OVERVIEW
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-['Poppins'] text-3xl sm:text-4xl font-bold mb-6 text-white">
                    What is FurniElite?
                  </h3>
                  <p className="font-['Poppins'] text-[#6B7280] text-base leading-relaxed">
                    The furniture app allows users to explore a wide range of furniture items and visualise them in their own space using augmented reality. It provides a seamless experience for browsing selecting and placing furniture virtually in real time helping users make informed choices for their home decor.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* DESIGN SYSTEM */}
          <section id="design-system" className="mb-32 pt-16">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                  <h2 className="font-['Poppins'] text-[#00795B] text-sm font-bold uppercase tracking-widest sticky top-32">
                    DESIGN SYSTEM
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                    {/* Typography */}
                    <div>
                      <h4 className="font-['Poppins'] text-[#00795B] text-xs font-bold uppercase tracking-widest mb-8">TYPOGRAPHY</h4>
                      <div className="mb-4">
                        <div className="font-['Poppins'] text-4xl font-extrabold text-white mb-2">Poppins</div>
                        <div className="font-['Poppins'] text-[#6B7280] text-sm leading-relaxed">
                          Poppins used for all headings and body text throughout the app.
                        </div>
                      </div>
                    </div>

                    {/* Color Palette */}
                    <div className="sm:col-span-1">
                      <h4 className="font-['Poppins'] text-[#00795B] text-xs font-bold uppercase tracking-widest mb-8">COLOR PALETTE</h4>
                      <div className="space-y-4">
                        {[
                          { hex: '#00795B', name: 'Teal Green' },
                          { hex: '#009688', name: 'Medium Aquamarine' },
                          { hex: '#B2DFDB', name: 'Light Cyan' },
                          { hex: '#FFFFFF', name: 'White Smoke' }
                        ].map((color, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg shrink-0 border border-white/10" style={{ backgroundColor: color.hex }}></div>
                            <div>
                              <div className="font-['Poppins'] text-white text-xs font-bold">{color.hex}</div>
                              <div className="font-['Poppins'] text-[#6B7280] text-[10px] uppercase tracking-wider">{color.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* My Role */}
                    <div>
                      <h4 className="font-['Poppins'] text-[#00795B] text-xs font-bold uppercase tracking-widest mb-8">MY ROLE</h4>
                      <div className="bg-[#111714] border border-white/5 p-6 rounded-xl">
                        <div className="font-['Poppins'] text-white text-sm font-bold mb-2">UI UX Designer intern</div>
                        <p className="font-['Poppins'] text-[#6B7280] text-xs leading-relaxed">
                          Designed end to end mobile app screens covering full shopping experience from onboarding to AR furniture placement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* KEY SCREENS */}
          <section id="key-screens" className="mb-32 pt-16">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                  <h2 className="font-['Poppins'] text-[#00795B] text-sm font-bold uppercase tracking-widest sticky top-32">
                    KEY SCREENS
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-['Poppins'] text-3xl sm:text-4xl font-bold mb-6 text-white">
                    The designed experience.
                  </h3>
                  <p className="font-['Poppins'] text-[#6B7280] text-base leading-relaxed mb-16">
                    Complete screen documentation covering the full furniture shopping journey including AR visualisation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">
                    {[
                      { name: 'HOME SCREEN', img: 'https://i.ibb.co/V029QMDx/Home-Screen-fr.jpg' },
                      { name: 'PRODUCT DETAIL', img: 'https://i.ibb.co/mCLdDdKF/Products-Detail-Page.jpg' },
                      { name: 'AR VIEW', img: 'https://i.ibb.co/pvf5T4b8/AR-View-Positioning.jpg' }
                    ].map((screen, i) => (
                      <div key={i} className="flex flex-col gap-4">
                        <div className="aspect-[9/19.5] bg-[#111714] border-[6px] border-[#1A1F1C] rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1A1F1C] rounded-b-xl z-20"></div>
                          
                          <div className="absolute inset-0 overflow-hidden">
                            <OptimizedImage 
                              src={screen.img} 
                              alt={screen.name} 
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          
                          {/* Subtle Inner Shadow/Glow */}
                          <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
                        </div>
                        <div className="font-['Poppins'] text-[#00795B] text-[10px] font-bold uppercase tracking-widest text-center">
                          {screen.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <a 
                      href="https://www.behance.net/gallery/210250113/FurniElite-Online-Furniture-Store-App"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-8 py-4 border border-[#00795B] text-[#00795B] font-['Poppins'] font-bold text-sm uppercase tracking-widest hover:bg-[#00795B] hover:text-[#0A0F0D] transition-all duration-300 interactive rounded-full"
                    >
                      VIEW FULL CASE STUDY ON BEHANCE
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* THANK YOU */}
          <section className="py-32 border-t border-white/5 text-center">
            <ScrollReveal>
              <h2 className="font-['Poppins'] text-5xl sm:text-7xl font-extrabold text-white mb-4">
                Thank you for reading.
              </h2>
              <p className="font-['Poppins'] text-[#6B7280] text-sm mb-12">
                FurniElite — Internship Project by Abhay Batham
              </p>
              
              <div className="w-[60px] h-px bg-[#00795B] mx-auto mb-12"></div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button 
                  onClick={onClose}
                  className="font-['Poppins'] text-sm text-[#00795B] font-bold uppercase tracking-widest hover:text-[#B2DFDB] transition-colors interactive"
                >
                  VIEW PORTFOLIO
                </button>
                <a 
                  href="mailto:abhaydesigner999@gmail.com"
                  className="font-['Poppins'] text-sm text-[#6B7280] font-bold uppercase tracking-widest hover:text-white transition-colors interactive"
                >
                  GET IN TOUCH
                </a>
              </div>
            </ScrollReveal>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="w-full bg-[#111714] border-t border-white/5 py-8 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              onClick={onClose}
              className="font-['Poppins'] text-[#6B7280] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors interactive"
            >
              Back to Portfolio
            </button>
            <div className="font-['Poppins'] text-[#00795B] text-[10px] font-bold uppercase tracking-widest text-center">
              FURNIELITE
            </div>
            <div className="font-['Poppins'] text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">
              Abhay Batham — 4th Project
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};
