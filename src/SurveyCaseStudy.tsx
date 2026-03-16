import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ArrowRight } from 'lucide-react';
import { Project, ScrollReveal, OptimizedImage } from './App';

const SurveyFloatingIndex = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'primary-users', label: 'PRIMARY USERS' },
    { id: 'project-scope', label: 'PROJECT SCOPE' },
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
    const container = document.getElementById('survey-case-study-container');
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
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[59] bg-[#161B2E] border border-white/10 border-r-0 py-4 px-1 rounded-l-md transition-transform duration-300 ease-in-out cursor-pointer hidden lg:flex flex-col items-center justify-center gap-2 ${
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
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[60] bg-[#161B2E] border-l border-white/10 p-6 pr-5 transition-transform duration-300 ease-in-out hidden lg:block ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="font-mono text-[10px] uppercase text-[#4F6AF5] tracking-widest mb-2">
          INDEX
        </div>
        <div className="w-full h-px bg-[#4F6AF5] mb-4 opacity-50"></div>
        <ul className="space-y-3">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`font-mono text-[11px] uppercase tracking-wider cursor-pointer transition-colors ${
                activeSection === id ? 'text-[#FAFAFA]' : 'text-[#6B7280] hover:text-[#E8EDFF]'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeSection === id ? 'bg-[#4F6AF5] scale-100' : 'bg-transparent scale-0'
                  }`}
                />
                {label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const SurveyCaseStudy = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    document.body.classList.add('theme-survey');
    return () => {
      document.body.classList.remove('theme-survey');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-[#0F1117] text-[#FAFAFA] font-sans selection:bg-[#4F6AF5] selection:text-white">
      
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />

      <SurveyFloatingIndex />
      
      <div id="survey-case-study-container" className="relative w-full h-full overflow-y-auto animate-slide-up z-10">
        
        {/* Fixed Nav */}
        <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-[#FAFAFA] font-mono text-sm uppercase tracking-widest hover:text-[#4F6AF5] transition-colors interactive"
          >
            <ChevronLeft size={16} />
            Back to Portfolio
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 pt-32 pb-24">
          
          {/* HERO */}
          <div className="mb-32">
            <div className="font-mono text-[#4F6AF5] text-sm uppercase tracking-widest mb-6">
              UI UX — WEB DASHBOARD — 2024
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl md:text-[80px] font-extrabold leading-[1.1] tracking-tight mb-8">
              SURVEY SCHEDULE<br/>MANAGEMENT TOOL
            </h1>
            <p className="font-mono text-[#6B7280] text-lg sm:text-xl max-w-3xl leading-relaxed mb-16">
              Simplifying the process of assigning and managing survey tasks for engineers in one centralised platform.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Role', value: 'UI UX Designer' },
                { label: 'Type', value: 'Web Dashboard' },
                { label: 'Platform', value: 'Desktop' },
                { label: 'Tools', value: 'Figma' }
              ].map((meta, i) => (
                <div key={i} className="bg-[#161B2E] border border-white/5 p-6 rounded-lg">
                  <div className="font-mono text-[#6B7280] text-xs uppercase tracking-widest mb-2">{meta.label}</div>
                  <div className="font-mono text-[#FAFAFA] text-sm">{meta.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* OVERVIEW */}
          <section id="overview" className="mb-32 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="font-mono text-[#4F6AF5] text-sm uppercase tracking-widest sticky top-32">
                  OVERVIEW
                </h2>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-6 text-[#FAFAFA]">
                  One platform. Total control.
                </h3>
                <p className="font-mono text-[#6B7280] text-base leading-relaxed">
                  The Survey Management Tool is designed to simplify the process of assigning and managing survey tasks for engineers. Admins can create survey projects such as physical or wireless surveys, assign engineers, and monitor ongoing progress in one centralised platform ensuring better coordination and efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* PRIMARY USERS */}
          <section id="primary-users" className="mb-32 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="font-mono text-[#4F6AF5] text-sm uppercase tracking-widest sticky top-32">
                  PRIMARY USERS
                </h2>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-10 text-[#FAFAFA]">
                  Designed for three distinct roles.
                </h3>
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Admins and Organizers', desc: 'Who create projects assign engineers and monitor ongoing survey progress.' },
                    { num: '02', title: 'Engineers', desc: 'Who receive assigned surveys like physical or wireless and perform on-site tasks efficiently.' },
                    { num: '03', title: 'Users', desc: 'Who initiate survey requests and review project status or reports shared by the admin.' }
                  ].map((user, i) => (
                    <div key={i} className="bg-[#161B2E] border border-white/5 p-8 rounded-lg flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                      <div className="font-['Space_Grotesk'] text-[#4F6AF5] text-4xl font-bold leading-none">
                        {user.num}
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#FAFAFA] mb-2">{user.title}</h4>
                        <p className="font-mono text-[#6B7280] text-sm leading-relaxed">{user.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PROJECT SCOPE */}
          <section id="project-scope" className="mb-32 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="font-mono text-[#4F6AF5] text-sm uppercase tracking-widest sticky top-32">
                  PROJECT SCOPE
                </h2>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-10 text-[#FAFAFA]">
                  What this tool needed to do.
                </h3>
                <div className="space-y-6">
                  {[
                    'Create and manage different types of survey projects including physical and wireless.',
                    'Assign engineers to specific survey tasks efficiently.',
                    'Monitor the progress of ongoing surveys in real time.',
                    'Generate reports and updates for clients or project owners.',
                    'Centralise all survey management tasks in one platform to improve coordination and reduce errors.',
                    'Ensure scalability to handle multiple projects simultaneously.'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <ArrowRight className="text-[#4F6AF5] shrink-0 mt-1" size={18} />
                      <p className="font-mono text-[#6B7280] text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* KEY SCREENS */}
          <section id="key-screens" className="mb-32 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12">
              <div className="md:col-span-4">
                <h2 className="font-mono text-[#4F6AF5] text-sm uppercase tracking-widest sticky top-32">
                  KEY SCREENS
                </h2>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold mb-4 text-[#FAFAFA]">
                  The designed experience.
                </h3>
                <p className="font-mono text-[#6B7280] text-base leading-relaxed">
                  Web dashboard screens covering the full survey management workflow.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/DDjbmyy2/Requests-1.jpg" 
                  alt="Dashboard Overview Screen" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/4Z04WG1w/Requests-acknow.jpg" 
                  alt="Requests Acknowledged Screen" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/4nMsX7Jy/Create-Req.png" 
                  alt="Create Request Screen" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/DD1xsgNN/Requests-de.png" 
                  alt="Request Details Screen" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/7Jq2V7Gy/Month.png" 
                  alt="Calendar Month View" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/hFdZyyVB/Week.png" 
                  alt="Calendar Week View" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/yndn6xLN/Day.png" 
                  alt="Calendar Day View" 
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B2E] shadow-2xl mb-12 relative">
                <OptimizedImage 
                  src="https://i.ibb.co/jvYfFmKR/Year.png" 
                  alt="Calendar Year View" 
                  className="w-full h-auto"
                />
              </div>

            </div>
          </section>

          {/* THANK YOU */}
          <section className="py-32 border-t border-white/5 text-center">
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-extrabold text-[#FAFAFA] mb-4">
              Thank you for reading.
            </h2>
            <p className="font-mono text-[#6B7280] text-sm mb-12">
              Survey Schedule Management Tool by Abhay Batham
            </p>
            
            <div className="w-[60px] h-px bg-[#4F6AF5] mx-auto mb-12"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button 
                onClick={onClose}
                className="font-mono text-[#4F6AF5] text-sm uppercase tracking-widest hover:text-[#E8EDFF] transition-colors interactive"
              >
                VIEW PORTFOLIO
              </button>
              <a 
                href="mailto:abhaydesigner999@gmail.com"
                className="font-mono text-[#6B7280] text-sm uppercase tracking-widest hover:text-[#FAFAFA] transition-colors interactive"
              >
                GET IN TOUCH
              </a>
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="w-full bg-[#161B2E] border-t border-white/5 py-8 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              onClick={onClose}
              className="font-mono text-[#6B7280] text-xs uppercase tracking-widest hover:text-[#FAFAFA] transition-colors interactive"
            >
              Back to Portfolio
            </button>
            <div className="font-mono text-[#4F6AF5] text-xs uppercase tracking-widest text-center">
              SURVEY SCHEDULE MANAGEMENT TOOL
            </div>
            <div className="font-mono text-[#6B7280] text-xs uppercase tracking-widest">
              Abhay Batham
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};
