import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { Project, ScrollReveal, OptimizedImage } from './App';

const GooglePayFloatingIndex = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'problem', label: 'PROBLEM STATEMENT' },
    { id: 'solution', label: 'SOLUTION' },
    { id: 'design-system', label: 'DESIGN SYSTEM' },
    { id: 'before-after', label: 'BEFORE AND AFTER' },
    { id: 'results', label: 'RESULTS' },
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
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[59] bg-[#0c1220] border border-white/10 border-r-0 py-4 px-1 rounded-l-md transition-transform duration-300 ease-in-out cursor-pointer hidden lg:flex flex-col items-center justify-center gap-2 ${
          isVisible ? 'translate-x-full' : 'translate-x-0'
        }`}
        onMouseEnter={() => {
          isVisibleRef.current = true;
          setIsVisible(true);
        }}
      >
        <ChevronLeft size={14} className="text-[#6B7280] animate-bounce-left" />
        <span className="font-mono text-[10px] uppercase text-[#6B7280] tracking-widest [writing-mode:vertical-rl] rotate-180">
          INDEX
        </span>
      </div>

      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[60] bg-[#0c1220] border-l border-white/10 p-6 pr-5 transition-transform duration-300 ease-in-out hidden lg:block ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="font-mono text-[10px] uppercase text-[#0742A0] tracking-widest mb-2">
          INDEX
        </div>
        <div className="w-full h-px bg-[#0742A0] mb-4 opacity-50"></div>
        <ul className="space-y-3">
          {sections.map(({ id, label }) => (
            <li key={id} className="flex items-center">
              <div
                className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors ${
                  activeSection === id ? 'bg-[#0742A0]' : 'bg-transparent'
                }`}
              ></div>
              <button
                onClick={() => scrollToSection(id)}
                className={`font-mono text-[10px] uppercase tracking-[0.2em] text-left transition-colors ${
                  activeSection === id ? 'text-[#0742A0]' : 'text-[#6B7280] hover:text-[#0742A0]'
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

export const GooglePayCaseStudy = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('theme-google-pay');
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('theme-google-pay');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center font-sans text-[#FAFAFA] selection:bg-[#B3CEFD] selection:text-[#050810]">
      <GooglePayFloatingIndex />
      <div 
        className="absolute inset-0 bg-[#050810]/95 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      <div id="case-study-container" className="relative w-full h-full bg-[#050810] overflow-y-auto animate-slide-up shadow-2xl">
        {/* Subtle blue noise texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 fill=%22%230742A0%22/%3E%3C/svg%3E")' }}></div>

        {/* Custom cursor glow */}
        <div className="fixed top-1/2 left-1/2 w-[400px] h-[400px] bg-[#0742A0]/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[#0c1220]/50 border border-white/10 hover:bg-[#0c1220] transition-colors interactive text-white backdrop-blur-md"
        >
          <X size={24} />
        </button>

        {/* HERO SECTION */}
        <div className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-16 pt-24 pb-12">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <ScrollReveal>
              <div className="font-mono text-sm text-[#0742A0] uppercase tracking-widest mb-6">
                REDESIGN — FINTECH — 2024
              </div>
              <h1 className="font-space-grotesk font-extrabold text-5xl sm:text-7xl md:text-[8rem] text-[#FAFAFA] mb-8 leading-[0.9] tracking-tight">
                GOOGLE PAY<br/>UI REDESIGN
              </h1>
              <p className="font-mono text-lg sm:text-xl text-[#6B7280] max-w-2xl mb-16">
                Redesigning user experience for seamless digital payments.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Role", value: "UX Designer" },
                  { label: "Expertise", value: "UX/UI Design" },
                  { label: "Year", value: "2024" },
                  { label: "Tools", value: "Figma" }
                ].map((meta, i) => (
                  <div key={i} className="bg-[#0c1220] border border-white/10 p-6 rounded-lg">
                    <span className="block font-mono text-[#6B7280] text-xs uppercase tracking-wider mb-2">{meta.label}</span>
                    <span className="font-space-grotesk text-lg text-[#FAFAFA]">{meta.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-24 space-y-32 relative z-10">
          
          {/* OVERVIEW SECTION */}
          <section id="overview" className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest sticky top-24">Overview</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-100">
                <h2 className="font-space-grotesk text-4xl sm:text-5xl text-[#FAFAFA] mb-8">What needed to change.</h2>
                <p className="font-mono text-lg text-[#6B7280] leading-relaxed">
                  Google Pay is a widely used digital payment platform offering the convenience of making payments transferring money and managing transactions all in one place. The primary goal of this redesign was to analyse the existing user experience and identify opportunities for improvement leading to a redesign that enhances usability and overall user satisfaction.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* PROBLEM STATEMENT SECTION */}
          <section id="problem" className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest sticky top-24">Problem Statement</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-100">
                <h2 className="font-space-grotesk text-4xl sm:text-5xl text-[#FAFAFA] mb-12">Four issues holding Google Pay back.</h2>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "Complex Navigation", desc: "Users often find it challenging to navigate through different sections of the app especially when searching for specific payment options or features." },
                    { num: "02", title: "Overcrowded Interface", desc: "The app interface appears cluttered with too many options on the home screen leading to confusion." },
                    { num: "03", title: "Positioning of Important Features", desc: "Key features like UPI ID and Check Balance are not optimally positioned making it challenging for users to quickly access them." },
                    { num: "04", title: "Misleading Instructions", desc: "Users frequently encounter confusing or misleading instructions during transactions and app interactions." }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0c1220] border border-white/10 p-8 rounded-lg flex flex-col sm:flex-row gap-6 items-start">
                      <div className="font-space-grotesk font-bold text-4xl text-[#0742A0] shrink-0">{item.num}</div>
                      <div>
                        <h4 className="font-space-grotesk text-2xl text-[#FAFAFA] mb-3">{item.title}</h4>
                        <p className="font-mono text-[#6B7280] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* SOLUTION SECTION */}
          <section id="solution" className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest sticky top-24">Solution</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-100">
                <h2 className="font-space-grotesk text-4xl sm:text-5xl text-[#FAFAFA] mb-12">Three decisions that changed everything.</h2>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "Simplified Navigation", desc: "Modified the navigation model and bottom navigation bar to ease access to all payment modes." },
                    { num: "02", title: "Consistent Visual Design", desc: "A cohesive color scheme and typography aligning with Google Material Design principles making the interface feel clean and trustworthy." },
                    { num: "03", title: "Repositioned Important Features", desc: "Identified that UPI ID and Check Balance were not prominently placed and repositioned them to the top area where users naturally look first." }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0c1220] border border-white/10 p-8 rounded-lg flex flex-col sm:flex-row gap-6 items-start">
                      <div className="font-space-grotesk font-bold text-4xl text-[#0742A0] shrink-0">{item.num}</div>
                      <div>
                        <h4 className="font-space-grotesk text-2xl text-[#FAFAFA] mb-3">{item.title}</h4>
                        <p className="font-mono text-[#6B7280] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* DESIGN SYSTEM SECTION */}
          <section id="design-system" className="pt-12">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest mb-8">Typography</h3>
                  <div className="bg-[#0c1220] border border-white/10 p-8 rounded-lg space-y-8">
                    <div className="border-b border-white/10 pb-6">
                      <div className="font-sans text-4xl mb-2">Aa</div>
                      <div className="font-sans font-semibold text-xl text-[#FAFAFA]">SF Pro</div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="font-sans font-semibold text-[20px] text-[#FAFAFA] mb-1">Semi Bold 20-22px</div>
                        <div className="font-mono text-sm text-[#6B7280]">Used for headings</div>
                      </div>
                      <div>
                        <div className="font-sans font-medium text-[18px] text-[#FAFAFA] mb-1">Medium 18-20px</div>
                        <div className="font-mono text-sm text-[#6B7280]">Used for labels</div>
                      </div>
                      <div>
                        <div className="font-sans font-normal text-[14px] text-[#FAFAFA] mb-1">Regular 14-16px</div>
                        <div className="font-mono text-sm text-[#6B7280]">Used for body text</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest mb-8">Color Palette</h3>
                  <div className="bg-[#0c1220] border border-white/10 p-8 rounded-lg space-y-4">
                    {[
                      { hex: "#FFFFFF", name: "White" },
                      { hex: "#1C1C1C", name: "Dark" },
                      { hex: "#141414", name: "Surface" },
                      { hex: "#B3CEFD", name: "Light Blue" },
                      { hex: "#0742A0", name: "Google Blue" }
                    ].map((color, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded shadow-sm border border-white/10" style={{ backgroundColor: color.hex }} />
                        <div>
                          <div className="font-mono text-[#FAFAFA] uppercase">{color.hex}</div>
                          <div className="font-mono text-sm text-[#6B7280]">{color.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest mb-8">Tools</h3>
                  <div className="bg-[#0c1220] border border-white/10 p-8 rounded-lg">
                    <div className="font-space-grotesk text-2xl text-[#FAFAFA] mb-2">Figma</div>
                    <div className="font-mono text-[#6B7280]">For UI design and prototyping.</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* BEFORE AND AFTER SECTION */}
          <section id="before-after" className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest sticky top-24">Before / After</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-100">
                <h2 className="font-space-grotesk text-4xl sm:text-5xl text-[#FAFAFA] mb-4">Original vs Redesign.</h2>
                <p className="font-mono text-lg text-[#6B7280] mb-12">Four key screens redesigned showing the original Google Pay design alongside the improved version.</p>
                
                <div className="space-y-16">
                  {[
                    {
                      title: "HOME SCREEN",
                      originalImg: "https://i.ibb.co/fVjb09Zq/hs-gpay-old.jpg",
                      redesignImg: "https://i.ibb.co/FLdQ6qN1/Home-Screen-gpay.jpg",
                      annotations: [
                        { top: "25%", left: "94%", text: "Adjusted position of QR Code reader." },
                        { top: "38%", left: "90%", text: "Modern carousel." },
                        { top: "48%", left: "90%", text: "Added titles and divided elements into sections for better navigation." },
                        { top: "58%", left: "90%", text: "Check Balance is now easily accessible." },
                        { top: "75%", left: "90%", text: "Copy UPI ID easily." }
                      ]
                    },
                    {
                      title: "PROFILE SCREEN",
                      originalImg: "https://i.ibb.co/Kpft9KR6/Profile-gpay.jpg",
                      redesignImg: "https://i.ibb.co/DPcDZYtD/Profile-gpay-new.jpg",
                      annotations: [
                        { top: "30%", left: "90%", text: "Neat design." },
                        { top: "38%", left: "90%", text: "Made Rewards earned element more visible." },
                        { top: "45%", left: "10%", text: "Instructions are more clear (previously it was misleading)." },
                        { top: "45%", left: "90%", text: "Swapped arrow for chevron." },
                        { top: "70%", left: "90%", text: "Add icon instead of text." }
                      ]
                    },
                    {
                      title: "TRANSACTION SCREEN",
                      originalImg: "https://i.ibb.co/B9Tj1q7/Body.png",
                      redesignImg: "https://i.ibb.co/fGH7TVYr/Transaction-details-new.jpg",
                      annotations: [
                        { top: "50%", left: "50%", text: "The Amount is now more prominent visually." },
                        { top: "60%", left: "50%", text: "Added transaction time." },
                        { top: "70%", left: "50%", text: "Simple and clear indication." },
                        { top: "90%", left: "50%", text: "Switch the position of Request and Pay to right hand side for better accessibility." }
                      ]
                    },
                    {
                      title: "SETTINGS SCREEN",
                      originalImg: "https://i.ibb.co/xq5kgxPv/sett-old.jpg",
                      redesignImg: "https://i.ibb.co/ksPtc26H/Settings-new.png",
                      annotations: [
                        { top: "50%", left: "50%", text: "Added option to change app theme (There is no option in the original app)" }
                      ]
                    }
                  ].map((screen, i) => (
                    <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      <div className="lg:col-span-4 flex flex-col justify-center">
                        <h4 className="font-mono text-[#0742A0] uppercase tracking-widest mb-6">{screen.title}</h4>
                        <ul className="space-y-6">
                          {screen.annotations.map((annotation, j) => (
                            <li key={j} className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0742A0]/20 text-[#0742A0] flex items-center justify-center font-mono text-xs font-bold mt-0.5">
                                {j + 1}
                              </div>
                              <p className="font-mono text-sm text-[#6B7280] leading-relaxed">
                                {annotation.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-8">
                        <div className="flex flex-col gap-3 border-t-2 border-red-500 pt-4">
                          <div className="font-mono text-xs text-center text-[#6B7280] mb-2">ORIGINAL DESIGN</div>
                          <div className="relative w-full aspect-[9/19.5] bg-[#0c1220] border-[8px] border-[#1C1C1C] rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center text-[#6B7280] font-mono text-sm overflow-hidden shadow-2xl">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1C1C1C] rounded-b-xl z-10"></div>
                            {/* Content Area */}
                            <div className="w-full h-full border border-white/10 border-dashed overflow-y-auto scrollbar-hide relative">
                              {screen.originalImg ? (
                                <div className="w-full relative">
                                  <OptimizedImage src={screen.originalImg} alt={`${screen.title} Original`} className="w-full h-auto block" />
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">Image</div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 border-t-2 border-[#0742A0] pt-4">
                          <div className="font-mono text-xs text-center text-[#6B7280] mb-2">MY REDESIGN</div>
                          <div className="relative w-full aspect-[9/19.5] bg-[#0c1220] border-[8px] border-[#1C1C1C] rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center text-[#6B7280] font-mono text-sm overflow-hidden shadow-2xl">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1C1C1C] rounded-b-xl z-10"></div>
                            {/* Content Area */}
                            <div className="w-full h-full border border-white/10 overflow-y-auto scrollbar-hide relative">
                              {screen.redesignImg ? (
                                <div className="w-full relative">
                                  <OptimizedImage src={screen.redesignImg} alt={`${screen.title} Redesign`} className="w-full h-auto block" />
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">Image</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* RESULTS SECTION */}
          <section id="results" className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-[#0742A0] uppercase tracking-widest sticky top-24">Results</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-100">
                <h2 className="font-space-grotesk text-4xl sm:text-5xl text-[#FAFAFA] mb-4">Outcomes of the redesign.</h2>
                <p className="font-mono text-lg text-[#6B7280] mb-12">Here are the outcomes and achievements that can be reached if we change according to my redesign.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { num: "01", title: "Increased User Satisfaction", desc: "Redesign would have indicated a significant improvement in user satisfaction particularly regarding efficient use of key navigations." },
                    { num: "02", title: "Reduced Transaction Time", desc: "The streamlined layout and accessible features lead to faster transaction times reducing user frustration." },
                    { num: "03", title: "Enhanced Visual Appeal", desc: "The updated interface provides a cleaner more modern look that better aligns with Google's design language and identity." }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0c1220] border border-white/10 p-8 rounded-lg flex flex-col gap-4">
                      <div className="font-space-grotesk font-bold text-5xl text-[#0742A0]">{item.num}</div>
                      <h4 className="font-space-grotesk text-xl text-[#FAFAFA]">{item.title}</h4>
                      <p className="font-mono text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* THANK YOU SECTION */}
          <section id="thank-you" className="py-24 text-center border-t border-white/10">
            <ScrollReveal>
              <h2 className="font-space-grotesk font-extrabold text-5xl sm:text-7xl text-[#FAFAFA] mb-6">Thank you for reading.</h2>
              <p className="font-mono text-[#6B7280] mb-12">Google Pay UI Redesign by Abhay Batham</p>
              
              <div className="w-[60px] h-px bg-[#0742A0] mx-auto mb-12"></div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button onClick={onClose} className="font-mono text-sm text-[#0742A0] uppercase tracking-widest hover:text-[#B3CEFD] transition-colors">
                  VIEW PORTFOLIO
                </button>
                <a href="mailto:abhaydesigner999@gmail.com" className="font-mono text-sm text-[#6B7280] uppercase tracking-widest hover:text-[#FAFAFA] transition-colors">
                  GET IN TOUCH
                </a>
              </div>
            </ScrollReveal>
          </section>
        </div>

        {/* FOOTER */}
        <div className="w-full border-t border-white/10 bg-[#050810] py-6 px-6 sm:px-16 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <button onClick={onClose} className="font-mono text-xs text-[#6B7280] hover:text-[#FAFAFA] transition-colors flex items-center gap-2">
              <ChevronLeft size={14} /> Back to Portfolio
            </button>
            <div className="font-mono text-xs text-[#0742A0] tracking-widest uppercase">
              GOOGLE PAY REDESIGN
            </div>
            <div className="font-mono text-xs text-[#6B7280]">
              Abhay Batham
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
