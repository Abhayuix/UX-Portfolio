import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, Linkedin, Dribbble, Twitter, Layers, PenTool, Bot, Grid, Sparkles, Download, Mail, Phone, Briefcase, GraduationCap, User, ArrowDown, ArrowUp, ChevronLeft } from 'lucide-react';
import { GooglePayCaseStudy } from './GooglePayCaseStudy';
import { SurveyCaseStudy } from './SurveyCaseStudy';
import { FurniEliteCaseStudy } from './FurniEliteCaseStudy';

// --- Types ---

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  details: {
    context: string;
    approach: string;
    impact: { label: string; value: string }[];
    outcome: string;
    images: string[];
  };
  caseStudy?: {
    role: string;
    platform: string;
    tools: string[];
    overview: string;
    challenge: {
      description: string;
      points: string[];
    };
    research: {
      methods: string[];
      insights: string[];
    };
    solution: {
      approach: string;
      decisions: string[];
    };
    designSystem: {
      typography: { name: string; usage: string }[];
      colors: { hex: string; name: string }[];
    };
    impact: {
      description: string;
      metrics: { value: string; label: string }[];
    };
    competitiveAnalysis?: {
      heading: string;
      subtext: string;
      competitors: {
        title: string;
        tag: string;
        rows: { label: string; content: string }[];
        insight: string;
      }[];
      gapVisual: {
        col1: { title: string; desc: string };
        col2: { title: string; desc: string };
        col3: { title: string; desc: string };
      };
    };
  };
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: 'beacon',
    number: '01',
    title: 'Beacon — Case Study',
    category: 'Career Tech',
    year: '2026',
    description: 'Empowering first-generation professionals to break into the hidden job market through AI-powered daily missions, smart message coaching, and professional networking scripts.',
    tags: ['Mobile App', 'AI-Powered', 'Career Development'],
    image: 'https://i.ibb.co/0RLjxzrz/Beacon-TN-1.jpg',
    featured: true,
    details: {
      context: '85% of jobs are filled through connections before they\'re ever posted publicly. First-gen professionals rarely have access to these networks — not because they lack skills, but because nobody taught them how professional networking actually works. Beacon levels the playing field.',
      approach: 'We designed a gamified experience that breaks down networking into small, manageable daily missions. The AI coach provides real-time feedback on outreach messages, making networking feel less daunting and more structured.',
      impact: [
        { label: 'User Confidence', value: '+85%' },
        { label: 'Interviews Landed', value: '3x Avg' },
        { label: 'Active Users', value: '15k+' }
      ],
      outcome: 'Beacon has become a trusted career companion for thousands of students and early-career professionals, demystifying the path to their dream jobs through consistent, guided action.',
      images: [
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop',
        'https://i.ibb.co/0RLjxzrz/Beacon-TN-1.jpg',
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop'
      ]
    },
    caseStudy: {
      role: "Lead Designer",
      platform: "Mobile App",
      tools: ["Figma", "Google Stitch", "Claude"],
      overview: "Beacon is a career networking app designed for first-generation professionals who are locked out of the hidden job market. Most job apps help you apply. Beacon teaches the unwritten rules — who to reach out to, what to say, and why you're being ignored. Three AI-powered features replace guesswork with specific, actionable guidance that acts as a personal career coach.",
      challenge: {
        description: "First-generation professionals face a unique barrier — they're trying to navigate a system nobody in their family has been through before. Research showed users weren't failing because of effort. They were failing because they lacked the insider knowledge their peers inherited.",
        points: [
          "No starting point — opening LinkedIn feels overwhelming with no clear action to take.",
          "Message anxiety — don't know what to say to a stranger without sounding desperate.",
          "Getting ignored — send messages but rarely get replies and don't know why.",
          "Misreading replies — don't know what a response actually means or what to do next."
        ]
      },
      research: {
        methods: ["SURVEY RESEARCH", "PERSONAL EXPERIENCE", "COMPETITIVE ANALYSIS"],
        insights: [
          "82% of first-gen professionals feel paralyzed when trying to reach out to someone senior.",
          "Users don't need generic networking advice — they need specific scripts for specific situations.",
          "Daily accountability is critical — users need to know exactly what to do today, not someday.",
          "Message templates alone aren't enough — users need to understand WHY something works before they'll use it.",
          "The biggest blocker isn't laziness — it's not knowing if what they're doing is even right."
        ]
      },
      solution: {
        approach: "Beacon solves the problem through three AI-powered features that work together as a personal career coach. Instead of overwhelming users with information, each feature targets one specific moment of anxiety and resolves it with a clear, actionable next step.",
        decisions: [
          "Daily Mission Board — Every day Beacon generates 3 specific personalized missions using the Claude API. Not generic advice. Real tasks based on the user's profile, target companies, and what they did yesterday. Missions connect directly to Beacon's features and reset every midnight.",
          "Message Lab — A two-mode AI tool. Mode 1 analyzes outgoing messages before sending and rewrites them. Mode 2 decodes incoming replies and generates the perfect response. One screen, one toggle, covers the full conversation cycle.",
          "The Playbook — A smart script library covering every awkward professional situation. Every template comes with a Truth Statement — a one line belief correction that fixes the wrong assumption stopping the user from reaching out in the first place."
        ]
      },
      designSystem: {
        typography: [
          { name: "Space Grotesk", usage: "Headings, feature names, bold statements, navigation" },
          { name: "Space Mono", usage: "Body text, labels, captions, meta information, descriptions" }
        ],
        colors: [
          { hex: "#0A0A0A", name: "Pure Black" },
          { hex: "#B8FF00", name: "Neon Green" },
          { hex: "#FAFAFA", name: "White" },
          { hex: "#888888", name: "Grey" },
          { hex: "#141414", name: "Dark Grey" },
          { hex: "#1A1A1A", name: "Surface" }
        ]
      },
      impact: {
        description: "The redesign was met with overwhelmingly positive feedback from both new and existing users. Key metrics showed significant improvement within the first month of launch.",
        metrics: [
          { value: "143%", label: "User Growth" },
          { value: "4.8/5", label: "App Store Rating" },
          { value: "-25%", label: "Churn Rate" }
        ]
      },
      competitiveAnalysis: {
        heading: "Where existing solutions fail.",
        subtext: "I audited existing apps through one specific lens — where do they fail Aryan? Not as a general user but as someone anxious, confused, and with no existing network to activate.",
        competitors: [
          {
            title: "LinkedIn",
            tag: "Direct Competitor",
            rows: [
              { label: "ASSUMES", content: "you understand professional networking, what connection requests mean socially, and why maintaining visibility matters." },
              { label: "ANXIETY", content: "feed showing everyone celebrating new jobs, 847 applicants on job posts, writing cold messages to seniors, not knowing if reaching out is appropriate." },
              { label: "IGNORES", content: "teaching the rules, guiding what to say, helping users with zero existing network." }
            ],
            insight: "LinkedIn optimizes for broadcasting and passive scrolling — the opposite of what builds real relationships."
          },
          {
            title: "Glassdoor",
            tag: "Indirect Competitor",
            rows: [
              { label: "ASSUMES", content: "that the community section exists, what to post, how to ask for help professionally." },
              { label: "DOES WELL", content: "anonymous posting reduces fear of judgment, people are more honest when identity is hidden." },
              { label: "IGNORES", content: "structure, guidance, follow up mechanism. It is a notice board with no intelligence behind it." }
            ],
            insight: "People hack Glassdoor into a referral request board because nothing better exists. The need is so strong users force it onto tools not designed for it."
          }
        ],
        gapVisual: {
          col1: { title: "LinkedIn", desc: "Shows you the game but not how to play it." },
          col2: { title: "Glassdoor", desc: "Lets you ask for help but gives no guidance." },
          col3: { title: "Beacon", desc: "Teaches the rules, gives the scripts, guides every next step" }
        }
      }
    }
  },
  {
    id: 'vertex',
    number: '02',
    title: 'Google Pay Redesign',
    category: 'Fintech',
    year: '2024',
    description: 'A comprehensive redesign of the Google Pay app, focusing on improving usability, visual hierarchy, and overall user satisfaction.',
    tags: ['Mobile App', 'UI/UX Redesign', 'Fintech'],
    image: 'https://i.ibb.co/ccQjQ7nv/Thumbnail.jpg',
    details: {
      context: 'Enterprise users were overwhelmed by the sheer volume of data in the legacy system. Finding key performance indicators took too many clicks.',
      approach: 'We implemented a modular widget system allowing users to customize their views. We also introduced a "smart summary" feature powered by AI to highlight anomalies.',
      impact: [
        { label: 'Data Retrieval', value: '3x Faster' },
        { label: 'User Satisfaction', value: '+60%' },
        { label: 'Adoption Rate', value: '85%' }
      ],
      outcome: 'The Google Pay redesign improved transaction speed and overall user satisfaction.',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop'
      ]
    }
  },
  {
    id: 'survey',
    number: '03',
    title: 'Survey Schedule Management Tool',
    category: 'SaaS',
    year: '2024',
    description: 'Simplifying the process of assigning and managing survey tasks for engineers in one centralised platform.',
    tags: ['Web Dashboard', 'UI/UX', 'SaaS'],
    image: 'https://i.ibb.co/DDjbmyy2/Requests-1.jpg',
    details: {
      context: 'The Survey Management Tool is designed to simplify the process of assigning and managing survey tasks for engineers.',
      approach: 'Admins can create survey projects such as physical or wireless surveys, assign engineers, and monitor ongoing progress in one centralised platform ensuring better coordination and efficiency.',
      impact: [
        { label: 'Role', value: 'UI UX Designer' },
        { label: 'Type', value: 'Web Dashboard' },
        { label: 'Platform', value: 'Desktop' }
      ],
      outcome: 'Centralised all survey management tasks in one platform to improve coordination and reduce errors.',
      images: [
        'https://i.ibb.co/DDjbmyy2/Requests-1.jpg'
      ]
    }
  },
  {
    id: 'furnielite',
    number: '04',
    title: 'FurniElite — AR Furniture App',
    category: 'E-commerce',
    year: '2024',
    description: 'An online furniture store app with augmented reality — helping users visualise furniture in their own space before buying.',
    tags: ['Mobile App', 'AR Integration', 'E-commerce'],
    image: 'https://i.ibb.co/zV1wY2Bb/Cover-Behance.jpg',
    details: {
      context: 'The FurniElite app was developed to bridge the gap between online furniture shopping and the physical reality of a user\'s home. By leveraging AR, we reduced the uncertainty that often leads to cart abandonment in the furniture industry.',
      approach: 'We focused on a clean, premium interface that lets the furniture designs shine. The AR placement flow was simplified to just two taps, making advanced technology accessible to everyday shoppers.',
      impact: [
        { label: 'Cart Conversion', value: '+35%' },
        { label: 'Return Rate', value: '-20%' },
        { label: 'User Rating', value: '4.9/5' }
      ],
      outcome: 'FurniElite successfully demonstrated how AR can solve real-world shopping anxieties, resulting in higher user confidence and increased sales.',
      images: [
        'https://i.ibb.co/zV1wY2Bb/Cover-Behance.jpg'
      ]
    }
  }
];

// --- Components ---

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      {children}
    </div>
  );
};

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  objectPosition = "center"
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  priority?: boolean;
  objectPosition?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <div 
        className={`absolute inset-0 bg-stone-800 animate-pulse z-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} 
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`relative z-10 ${className} transition-all duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          objectPosition,
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
        referrerPolicy="no-referrer"
      />
    </>
  );
};

const FloatingLogos = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const logos = [
    {
      id: 'figma',
      name: 'Figma',
      component: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57" className="w-3/5 h-3/5 drop-shadow-md">
          <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"/>
          <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"/>
          <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z"/>
          <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"/>
          <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"/>
        </svg>
      ),
      position: 'top-[15%] left-[10%] md:top-[28%] md:right-[22%] md:left-auto',
      animation: 'animate-[float-slow_6s_ease-in-out_infinite]',
      parallaxFactor: 20,
      delay: '0s'
    },
    {
      id: 'claude',
      name: 'Claude',
      component: (
        <svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-3/5 drop-shadow-md">
          <g id="g314">
            <path id="path147" fill="#d97757" stroke="none" d="M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z"/>
          </g>
        </svg>
      ),
      position: 'top-[20%] right-[10%] md:top-[40%] md:right-[12%]',
      animation: 'animate-[float-medium_5s_ease-in-out_infinite]',
      parallaxFactor: -15,
      delay: '1s'
    },
    {
      id: 'uxpilot',
      name: 'UX Pilot',
      component: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3/5 h-3/5 drop-shadow-md">
          <defs>
            <clipPath id="clippath">
              <rect fill="none" x="28.5" y="217.95" width="455" height="76.1"/>
            </clipPath>
          </defs>
          <g clipPath="url(#clippath)">
            <rect fill="#2f2f37" x="270.25" y="221.35" width="19.11" height="70.11"/>
            <path fill="#2f2f37" d="M70.11,264.58c0,2.1-.49,4.05-1.46,5.83-.97,1.62-2.27,3.08-4.05,4.05-1.62.97-3.56,1.46-5.83,1.46-2.1,0-4.05-.49-5.83-1.46-1.62-.97-3.08-2.27-4.05-4.05-.97-1.78-1.46-3.72-1.46-5.83v-43.23h-18.94v45.01c0,5.34,1.3,10.04,3.72,13.93,2.59,3.89,6.15,6.96,10.69,9.07,4.53,2.1,9.88,3.08,15.87,3.08s11.33-.97,15.87-3.08c4.53-2.1,8.1-5.18,10.69-9.07,2.59-3.89,3.89-8.58,3.89-13.93v-45.01h-19.11v43.23Z"/>
            <path fill="#2f2f37" d="M250.98,224.43c-3.89-2.1-8.42-3.08-13.6-3.08h-30.28v70.11h18.94v-20.89h10.52c5.34,0,10.04-.97,14.09-2.91,4.05-1.94,7.12-4.86,9.39-8.42,2.27-3.72,3.4-8.1,3.4-13.12s-1.13-9.39-3.24-13.12c-2.27-3.72-5.34-6.64-9.23-8.58ZM242.07,251.3c-.81,1.46-2.1,2.59-3.72,3.4s-3.56,1.13-5.67,1.13h-6.64v-19.27h6.64c2.27,0,4.21.32,5.67,1.13,1.62.81,2.75,1.78,3.72,3.24.81,1.46,1.3,3.08,1.3,5.18,0,1.94-.32,3.72-1.3,5.18Z"/>
            <polygon fill="#2f2f37" points="422.46 221.35 422.46 236.73 443.51 236.73 443.51 291.46 462.29 291.46 462.29 236.73 483.34 236.73 483.34 221.35 422.46 221.35"/>
            <path fill="#2f2f37" d="M401.89,224.43c-5.18-2.75-10.85-4.21-17.33-4.21s-12.14,1.46-17.33,4.21-9.23,6.8-12.31,12.14c-3.08,5.34-4.53,11.98-4.53,19.75s1.46,14.25,4.53,19.75c3.08,5.34,7.12,9.39,12.31,12.14,5.18,2.75,11.01,4.21,17.33,4.21s12.14-1.3,17.33-4.05,9.23-6.8,12.31-12.14c3.08-5.34,4.53-11.98,4.53-19.75s-1.46-14.41-4.53-19.75c-2.91-5.51-7.12-9.55-12.31-12.31ZM397.52,267.01c-1.13,2.91-2.75,5.02-4.86,6.64-2.1,1.46-4.86,2.27-7.93,2.27s-5.83-.81-7.93-2.27c-2.1-1.46-3.72-3.72-4.86-6.64-1.13-2.91-1.62-6.48-1.62-10.69s.49-7.77,1.62-10.69c1.13-2.91,2.75-5.02,4.86-6.64,2.1-1.46,4.86-2.27,7.93-2.27s5.83.81,7.93,2.27c2.1,1.46,3.72,3.72,4.86,6.64,1.13,2.91,1.62,6.48,1.62,10.69s-.49,7.77-1.62,10.69Z"/>
            <polygon fill="#2f2f37" points="317.53 221.35 298.42 221.35 298.42 291.46 345.87 291.46 345.87 276.08 317.53 276.08 317.53 221.35"/>
            <path fill="#3f20fb" d="M250.98,224.43c-3.89-2.1-8.42-3.08-13.6-3.08h-30.28v70.11h18.94v-20.89h10.52c5.34,0,10.04-.97,14.09-2.91,4.05-1.94,7.12-4.86,9.39-8.42,2.27-3.72,3.4-8.1,3.4-13.12s-1.13-9.39-3.24-13.12c-2.27-3.72-5.34-6.64-9.23-8.58ZM242.07,251.3c-.81,1.46-2.1,2.59-3.72,3.4s-3.56,1.13-5.67,1.13h-6.64v-19.27h6.64c2.27,0,4.21.32,5.67,1.13,1.62.81,2.75,1.78,3.72,3.24.81,1.46,1.3,3.08,1.3,5.18,0,1.94-.32,3.72-1.3,5.18Z"/>
            <path fill="#3f20fb" d="M70.11,264.58c0,2.1-.49,4.05-1.46,5.83-.97,1.62-2.27,3.08-4.05,4.05-1.62.97-3.56,1.46-5.83,1.46-2.1,0-4.05-.49-5.83-1.46-1.62-.97-3.08-2.27-4.05-4.05-.97-1.78-1.46-3.72-1.46-5.83v-43.23h-18.94v45.01c0,5.34,1.3,10.04,3.72,13.93,2.59,3.89,6.15,6.96,10.69,9.07,4.53,2.1,9.88,3.08,15.87,3.08s11.33-.97,15.87-3.08c4.53-2.1,8.1-5.18,10.69-9.07,2.59-3.89,3.89-8.58,3.89-13.93v-45.01h-19.11v43.23Z"/>
            <rect fill="#3f20fb" x="270.25" y="221.35" width="19.11" height="70.11"/>
            <polygon fill="#3f20fb" points="422.46 221.35 422.46 236.73 443.51 236.73 443.51 291.46 462.29 291.46 462.29 236.73 483.34 236.73 483.34 221.35 422.46 221.35"/>
            <polygon fill="#3f20fb" points="317.53 221.35 298.42 221.35 298.42 291.46 345.87 291.46 345.87 276.08 317.53 276.08 317.53 221.35"/>
            <path fill="#3f20fb" d="M401.89,224.43c-5.18-2.75-10.85-4.21-17.33-4.21s-12.14,1.46-17.33,4.21-9.23,6.8-12.31,12.14c-3.08,5.34-4.53,11.98-4.53,19.75s1.46,14.25,4.53,19.75c3.08,5.34,7.12,9.39,12.31,12.14,5.18,2.75,11.01,4.21,17.33,4.21s12.14-1.3,17.33-4.05,9.23-6.8,12.31-12.14c3.08-5.34,4.53-11.98,4.53-19.75s-1.46-14.41-4.53-19.75c-2.91-5.51-7.12-9.55-12.31-12.31ZM397.52,267.01c-1.13,2.91-2.75,5.02-4.86,6.64-2.1,1.46-4.86,2.27-7.93,2.27s-5.83-.81-7.93-2.27c-2.1-1.46-3.72-3.72-4.86-6.64-1.13-2.91-1.62-6.48-1.62-10.69s.49-7.77,1.62-10.69c1.13-2.91,2.75-5.02,4.86-6.64,2.1-1.46,4.86-2.27,7.93-2.27s5.83.81,7.93,2.27c2.1,1.46,3.72,3.72,4.86,6.64,1.13,2.91,1.62,6.48,1.62,10.69s-.49,7.77-1.62,10.69Z"/>
            <path fill="#77e7ff" d="M155.77,219.73c6.64-4.86,15.22,2.43,11.66,9.72l-13.12,20.4c-1.3,2.59-.97,5.83.65,8.1l16.35,17.97c4.86,6.64-2.43,15.22-9.72,11.66l-20.4-12.95c-2.59-1.3-5.83-.97-8.1.65l-17.97,16.35c-6.64,4.86-15.22-2.43-11.66-9.72l13.12-20.4c1.3-2.59.97-5.83-.65-8.1l-16.35-18.14c-4.86-6.64,2.43-15.22,9.72-11.66l20.4,13.12c2.59,1.3,5.83.97,8.1-.65l17.97-16.35Z"/>
            <path fill="#b377ff" d="M161.92,223.94c7.45-3.56,14.57,5.18,9.72,11.66l-16.52,17.81c-1.78,2.27-2.1,5.51-.81,8.1l12.95,20.56c3.56,7.45-5.18,14.57-11.66,9.72l-17.81-16.52c-2.27-1.78-5.51-2.1-8.1-.81l-20.56,12.95c-7.45,3.56-14.57-5.18-9.72-11.66l16.52-17.81c1.78-2.27,2.1-5.51.81-8.1l-12.95-20.56c-3.56-7.45,5.18-14.57,11.66-9.72l17.81,16.52c2.27,1.78,5.51,2.1,8.1.81l20.56-12.95Z"/>
            <path fill="#3f20fb" d="M158.85,221.51c6.96-4.21,15.06,3.72,10.69,10.69l-13.76,19.27c-1.46,2.43-1.46,5.67,0,8.1l13.76,19.27c4.21,6.96-3.72,15.06-10.69,10.69l-19.27-13.76c-2.43-1.46-5.67-1.46-8.1,0l-19.27,13.76c-7.12,4.53-15.06-3.56-10.85-10.52l13.76-19.27c1.46-2.43,1.46-5.67,0-8.1l-13.76-19.27c-4.21-6.96,3.72-15.06,10.69-10.69l19.27,13.76c2.43,1.46,5.67,1.46,8.1,0l19.43-13.93Z"/>
          </g>
        </svg>
      ),
      position: 'top-[30%] left-[15%] md:bottom-[32%] md:right-[18%] md:left-auto md:top-auto',
      animation: 'animate-[float-fast_7s_ease-in-out_infinite]',
      parallaxFactor: 25,
      delay: '2s'
    },
    {
      id: 'aistudio',
      name: 'Google AI Studio',
      component: (
        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-3/5 drop-shadow-md">
          <g clipPath="url(#clip0_32_2)">
            <mask id="mask0_32_2" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
              <path d="M0 0H512V512H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_32_2)">
              <path fillRule="evenodd" clipRule="evenodd" d="M211.648 89.515H134.997C119.696 89.5153 105.022 95.5922 94.2004 106.41C83.3791 117.227 77.2968 131.899 77.291 147.2V389.589C77.291 404.894 83.3707 419.572 94.1926 430.394C105.015 441.216 119.692 447.296 134.997 447.296H377.408C392.713 447.296 407.391 441.216 418.213 430.394C429.035 419.572 435.115 404.894 435.115 389.589V288.128L469.739 264.384V389.611C469.734 414.097 460.004 437.579 442.69 454.893C425.376 472.207 401.894 481.936 377.408 481.941H134.997C110.511 481.936 87.0295 472.207 69.7154 454.893C52.4012 437.578 42.672 414.097 42.667 389.611V147.221C42.6645 135.094 45.0507 123.086 49.6894 111.881C54.3281 100.677 61.1284 90.4961 69.702 81.92C78.276 73.3441 88.4554 66.5413 99.6588 61.9C110.862 57.2587 122.87 54.8699 134.997 54.87H231.957L211.648 89.515Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M380.16 0C383.253 0 385.877 2.219 386.539 5.248C392.597 33.4144 406.674 59.2269 427.072 79.573C447.422 99.9826 473.242 114.067 501.419 120.128C504.448 120.789 506.667 123.413 506.667 126.528C506.648 128.027 506.118 129.475 505.163 130.631C504.209 131.787 502.888 132.583 501.419 132.885C473.25 138.95 447.437 153.034 427.093 173.44C406.418 194.05 392.237 220.269 386.304 248.853C386.016 250.275 385.249 251.555 384.131 252.48C383.013 253.404 381.611 253.916 380.16 253.931C378.709 253.916 377.308 253.404 376.189 252.48C375.071 251.555 374.304 250.275 374.016 248.853C368.083 220.269 353.902 194.05 333.227 173.44C312.617 152.764 286.398 138.583 257.813 132.651C256.392 132.362 255.112 131.595 254.188 130.477C253.264 129.359 252.752 127.957 252.736 126.507C252.736 123.52 254.869 120.96 257.813 120.363C286.398 114.43 312.617 100.249 333.227 79.573C353.632 59.2286 367.716 33.4162 373.781 5.248C374.084 3.77572 374.882 2.45174 376.043 1.49677C377.204 0.541796 378.657 0.01352 380.16 0Z" fill="white"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_32_2">
              <rect width="512" height="512" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      position: 'top-[35%] right-[15%] md:top-[54%] md:right-[28%]',
      animation: 'animate-[float-slow_8s_ease-in-out_infinite]',
      parallaxFactor: -10,
      delay: '0.5s'
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 logo-container overflow-visible">
      {logos.map((logo) => {
        const rotateX = -mousePos.y * 20; 
        const rotateY = mousePos.x * 20;
        
        return (
          <div
            key={logo.id}
            className={`absolute ${logo.position} pointer-events-auto`}
            style={{
              transform: `translate(${mousePos.x * logo.parallaxFactor}px, ${mousePos.y * logo.parallaxFactor}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Floating Animation Wrapper */}
            <div className={logo.animation} style={{ animationDelay: logo.delay }}>
              {/* 3D Tilt Wrapper */}
              <div 
                style={{ 
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                {/* Glass Card */}
                <div 
                  className="glass-logo"
                  aria-label={logo.name}
                >
                  {logo.component}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let mouseX = -100;
    let mouseY = -100;

    const updatePosition = () => {
      if (cursor && glow) {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        glow.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Start the animation loop
    requestRef.current = requestAnimationFrame(updatePosition);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .interactive')) {
        cursor.classList.add('hovered');
        glow.classList.add('hovered');
      } else {
        cursor.classList.remove('hovered');
        glow.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow hidden md:block" style={{ left: 0, top: 0 }} />
      <div ref={cursorRef} className="custom-cursor hidden md:block" style={{ left: 0, top: 0 }} />
    </>
  );
};

export const ScrollReveal: React.FC<{ children: React.ReactNode, className?: string, delay?: string }> = ({ children, className = '', delay = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-on-scroll ${delay} ${className}`}>
      {children}
    </div>
  );
};

const FloatingIndex = ({ hasCompetitiveAnalysis }: { hasCompetitiveAnalysis: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'challenge', label: 'CHALLENGE' },
    { id: 'research', label: 'RESEARCH' },
    ...(hasCompetitiveAnalysis ? [{ id: 'competitive-analysis', label: 'COMPETITIVE ANALYSIS' }] : []),
    { id: 'solution', label: 'SOLUTION' },
    { id: 'before-and-after', label: 'BEFORE AND AFTER' },
    { id: 'ai-architecture', label: 'AI ARCHITECTURE' },
    { id: 'design-system', label: 'DESIGN SYSTEM' },
    { id: 'user-flow', label: 'USER FLOW' },
    { id: 'feature-spotlight', label: 'FEATURE SPOTLIGHT' },
    { id: 'all-screens', label: 'ALL SCREENS' },
    { id: 'thank-you', label: 'THANK YOU' },
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
  }, [hasCompetitiveAnalysis]);

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
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[59] bg-[#0A0A0A] border border-white/10 border-r-0 py-4 px-1 rounded-l-md transition-transform duration-300 ease-in-out cursor-pointer hidden lg:flex flex-col items-center justify-center gap-2 ${
          isVisible ? 'translate-x-full' : 'translate-x-0'
        }`}
        onMouseEnter={() => {
          isVisibleRef.current = true;
          setIsVisible(true);
        }}
      >
        <ChevronLeft size={14} className="text-[#555] animate-bounce-left" />
        <span className="font-mono text-[10px] uppercase text-[#555] tracking-widest [writing-mode:vertical-rl] rotate-180">
          INDEX
        </span>
      </div>

      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-[60] bg-[#0A0A0A] border-l border-white/10 p-6 pr-5 transition-transform duration-300 ease-in-out hidden lg:block ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="font-mono text-[10px] uppercase text-[#B8FF00] tracking-widest mb-2">
          INDEX
        </div>
        <div className="w-full h-px bg-[#B8FF00] mb-4 opacity-50"></div>
        <ul className="space-y-3">
          {sections.map(({ id, label }) => (
            <li key={id} className="flex items-center">
              <div
                className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors ${
                  activeSection === id ? 'bg-[#B8FF00]' : 'bg-transparent'
                }`}
              ></div>
              <button
                onClick={() => scrollToSection(id)}
                className={`font-mono text-[10px] uppercase tracking-[0.2em] text-left transition-colors ${
                  activeSection === id ? 'text-[#B8FF00]' : 'text-[#555] hover:text-[#B8FF00]'
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

const Modal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  if (project.id === 'vertex') {
    return <GooglePayCaseStudy project={project} onClose={onClose} />;
  }
  if (project.id === 'survey') {
    return <SurveyCaseStudy project={project} onClose={onClose} />;
  }
  if (project.id === 'furnielite') {
    return <FurniEliteCaseStudy project={project} onClose={onClose} />;
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Dummy data for the detailed case study structure
  const defaultCaseStudy: NonNullable<Project['caseStudy']> = {
    role: "Lead Designer",
    platform: "Mobile App",
    tools: ["Figma", "Adobe XD", "Protopie"],
    overview: "This project aimed to redefine the user experience by simplifying complex workflows and introducing a more intuitive interface. The goal was to increase user engagement and reduce the learning curve for new users.",
    challenge: {
      description: "Users were struggling with the complexity of the previous interface, leading to high drop-off rates during onboarding.",
      points: [
        "High cognitive load due to cluttered UI",
        "Inconsistent navigation patterns",
        "Lack of clear feedback for user actions",
        "Slow performance on mobile devices"
      ]
    },
    research: {
      methods: ["User Interviews", "Competitor Analysis", "Usability Testing", "Heatmap Analysis"],
      insights: [
        "Users prefer a minimalist aesthetic with clear calls to action",
        "Navigation needs to be accessible within one thumb reach",
        "Dark mode is a highly requested feature",
        "Onboarding needs to be more interactive and less text-heavy"
      ]
    },
    solution: {
      approach: "We adopted a mobile-first approach, focusing on the core tasks that users perform most frequently. By stripping away non-essential elements, we created a focused and efficient experience.",
      decisions: [
        "Implemented a bottom navigation bar for easy access",
        "Used a card-based layout to group related information",
        "Introduced micro-interactions to provide delightful feedback",
        "Optimized assets for faster load times"
      ]
    },
    designSystem: {
      typography: [
        { name: "Cormorant Garamond", usage: "Headings" },
        { name: "Manrope", usage: "Body Text" }
      ],
      colors: [
        { hex: "#0c0a09", name: "Stone 950" },
        { hex: "#fafaf9", name: "Stone 50" },
        { hex: "#00796B", name: "Teal 700" },
        { hex: "#292524", name: "Stone 800" }
      ]
    },
    impact: {
      description: "The redesign was met with overwhelmingly positive feedback from both new and existing users. Key metrics showed significant improvement within the first month of launch.",
      metrics: [
        { value: "143%", label: "User Growth" },
        { value: "4.8/5", label: "App Store Rating" },
        { value: "-25%", label: "Churn Rate" }
      ]
    }
  };

  const caseStudy = project.caseStudy || defaultCaseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <FloatingIndex hasCompetitiveAnalysis={!!caseStudy.competitiveAnalysis} />
      <div 
        className="absolute inset-0 bg-stone-950/95 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      <div id="case-study-container" className="relative w-full h-full bg-stone-950 overflow-y-auto animate-slide-up shadow-2xl">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-stone-900/50 border border-stone-700 hover:bg-stone-800 transition-colors interactive text-white backdrop-blur-md"
        >
          <X size={24} />
        </button>

        {/* HEADER SECTION */}
        <div className="relative w-full h-[60vh] sm:h-[80vh]">
          <div className="absolute inset-0 bg-stone-950/40 z-10" />
          <OptimizedImage 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-16 z-20 bg-gradient-to-t from-stone-950 to-transparent">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <div className="font-mono text-sm text-teal-500 uppercase tracking-widest mb-4">
                  {project.number} — {project.category}
                </div>
                <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-light text-stone-50 mb-12 leading-none">
                  {project.title}
                </h1>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-800 pt-8">
                  <div>
                    <span className="block text-stone-500 text-xs uppercase tracking-wider mb-2">Year</span>
                    <span className="font-serif text-xl text-stone-200">{project.year}</span>
                  </div>
                  <div>
                    <span className="block text-stone-500 text-xs uppercase tracking-wider mb-2">Role</span>
                    <span className="font-serif text-xl text-stone-200">{caseStudy.role}</span>
                  </div>
                  <div>
                    <span className="block text-stone-500 text-xs uppercase tracking-wider mb-2">Platform</span>
                    <span className="font-serif text-xl text-stone-200">{caseStudy.platform}</span>
                  </div>
                  <div>
                    <span className="block text-stone-500 text-xs uppercase tracking-wider mb-2">Tools</span>
                    <span className="font-serif text-xl text-stone-200">{caseStudy.tools.join(", ")}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-24 space-y-24">
          
          {/* OVERVIEW SECTION */}
          <section id="overview" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">Overview</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-200">
                <p className="text-xl sm:text-2xl font-light text-stone-300 leading-relaxed">
                  {caseStudy.overview}
                </p>
                <p className="text-lg text-stone-400 leading-relaxed mt-6">
                  {project.details.context}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* CHALLENGE SECTION */}
          <section id="challenge" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">Challenge</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-200">
                <p className="text-lg text-stone-300 leading-relaxed mb-8">
                  {caseStudy.challenge.description}
                </p>
                <ul className="space-y-4">
                  {caseStudy.challenge.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-stone-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-700 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </section>

          {/* RESEARCH SECTION */}
          <section id="research" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">Research</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-serif text-2xl text-stone-200 mb-6">Methods</h4>
                    <ul className="space-y-3">
                      {caseStudy.research.methods.map((method, i) => (
                        <li key={i} className="font-mono text-sm text-stone-400 uppercase tracking-wider border border-stone-800 px-4 py-2 rounded-full inline-block mr-2 mb-2">
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-stone-200 mb-6">Key Insights</h4>
                    <ul className="space-y-4">
                      {caseStudy.research.insights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-4 text-stone-400">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-700 flex-shrink-0" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* COMPETITIVE ANALYSIS SECTION */}
          {caseStudy.competitiveAnalysis && (
            <section id="competitive-analysis" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
              <div className="md:col-span-4">
                <ScrollReveal>
                  <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">Competitive Analysis</h3>
                </ScrollReveal>
              </div>
              <div className="md:col-span-8">
                <ScrollReveal delay="delay-200">
                  <h4 className="font-serif text-3xl text-stone-200 mb-4">{caseStudy.competitiveAnalysis.heading}</h4>
                  <p className="text-lg text-stone-400 leading-relaxed mb-12">
                    {caseStudy.competitiveAnalysis.subtext}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {caseStudy.competitiveAnalysis.competitors.map((competitor, i) => (
                      <div key={i} className="bg-stone-900 border border-stone-800 rounded-xl p-6 flex flex-col h-full">
                        <div className="mb-6">
                          <h5 className="font-serif text-2xl text-stone-200 mb-1">{competitor.title}</h5>
                          <span className="inline-block px-3 py-1 bg-stone-800 text-stone-400 text-xs uppercase tracking-wider rounded-full">
                            {competitor.tag}
                          </span>
                        </div>
                        
                        <div className="space-y-4 mb-8 flex-grow">
                          {competitor.rows.map((row, j) => (
                            <div key={j}>
                              <span className="block text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">{row.label}</span>
                              <p className="text-sm text-stone-300 leading-relaxed">{row.content}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-stone-950/50 border border-stone-800/50 p-4 rounded-lg mt-auto">
                          <p className="text-xs text-stone-400 italic">
                            <span className="font-bold text-stone-300 not-italic mr-1">Insight:</span>
                            {competitor.insight}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gap Visual */}
                  <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center text-center">
                    <div className="md:col-span-2 bg-stone-900 border border-stone-800 p-6 rounded-xl h-full flex flex-col justify-center">
                      <h6 className="font-serif text-xl text-stone-300 mb-2">{caseStudy.competitiveAnalysis.gapVisual.col1.title}</h6>
                      <p className="text-sm text-stone-500">{caseStudy.competitiveAnalysis.gapVisual.col1.desc}</p>
                    </div>
                    
                    <div className="hidden md:flex justify-center text-stone-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                    
                    <div className="md:col-span-2 bg-stone-900 border border-stone-800 p-6 rounded-xl h-full flex flex-col justify-center">
                      <h6 className="font-serif text-xl text-stone-300 mb-2">{caseStudy.competitiveAnalysis.gapVisual.col2.title}</h6>
                      <p className="text-sm text-stone-500">{caseStudy.competitiveAnalysis.gapVisual.col2.desc}</p>
                    </div>
                    
                    <div className="hidden md:flex justify-center text-stone-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="9" x2="19" y2="9"></line><line x1="5" y1="15" x2="19" y2="15"></line></svg>
                    </div>
                    
                    <div className="md:col-span-2 bg-stone-900 border border-[#B8FF00] p-6 rounded-xl h-full flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#B8FF00]/5 z-0"></div>
                      <h6 className="font-serif text-xl text-[#B8FF00] mb-2 relative z-10">{caseStudy.competitiveAnalysis.gapVisual.col3.title}</h6>
                      <p className="text-sm text-stone-300 relative z-10">{caseStudy.competitiveAnalysis.gapVisual.col3.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          )}

          {/* USER FLOW SECTION */}
          <section id="user-flow" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">User Flow</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-200">
                <p className="text-lg text-stone-300 leading-relaxed mb-8">
                  Three core user flows were mapped before any screens were designed. These served as low-fidelity wireframes — in a brutalist design system the layout and structure is the wireframe.
                </p>
                
                <div className="space-y-8">
                  {/* FLOW 01 */}
                  <div className="bg-[#141414] border border-white p-10 overflow-x-auto">
                    <span className="text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-12 block">FLOW 01 — FIRST TIME USER JOURNEY</span>
                    <div className="flex items-center min-w-max">
                      {/* Step */}
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">DOWNLOAD APP</div>
                      {/* Arrow */}
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">SPLASH SCREENS</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">HOOK SCREEN</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">SIGN UP</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      {/* Diamond */}
                      <div className="relative">
                        <div className="w-20 h-20 border border-[#B8FF00] rotate-45 flex items-center justify-center bg-[#141414] shrink-0 mx-2">
                          <div className="-rotate-45 text-center text-[10px] text-white font-mono leading-tight">EMAIL<br/>VERIFIED?</div>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#B8FF00] font-mono text-[10px] uppercase">NO</div>
                      </div>
                      
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative">
                        <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 text-[#B8FF00] font-mono text-[10px] uppercase">YES</div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div>
                      </div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">PROFILE SETUP</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">PERSONALIZED INSIGHT</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">HOME SCREEN</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">TAP MISSION 01</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">REDIRECTED TO FEATURE</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      {/* Diamond */}
                      <div className="relative">
                        <div className="w-20 h-20 border border-[#B8FF00] rotate-45 flex items-center justify-center bg-[#141414] shrink-0 mx-2">
                          <div className="-rotate-45 text-center text-[10px] text-white font-mono leading-tight">MISSION<br/>COMPLETED?</div>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#B8FF00] font-mono text-[10px] uppercase">NO</div>
                      </div>
                      
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative">
                        <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 text-[#B8FF00] font-mono text-[10px] uppercase">YES</div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div>
                      </div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">MARK DONE</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">END</div>
                    </div>
                  </div>

                  {/* FLOW 02 */}
                  <div className="bg-[#141414] border border-white p-10 overflow-x-auto">
                    <span className="text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-12 block">FLOW 02 — MESSAGE LAB</span>
                    <div className="flex items-center min-w-max">
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">OPEN MESSAGE LAB</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="w-20 h-20 border border-[#B8FF00] rotate-45 flex items-center justify-center bg-[#141414] shrink-0 mx-2">
                        <div className="-rotate-45 text-center text-[10px] text-white font-mono leading-tight">SELECT<br/>MODE</div>
                      </div>
                      
                      {/* Split Paths */}
                      <div className="flex flex-col gap-8 ml-4">
                        {/* Top Path */}
                        <div className="flex items-center">
                          <div className="h-px bg-[#B8FF00] w-8 mr-2 relative">
                             <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-px bg-[#B8FF00] rotate-[-45deg] origin-right"></div>
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div>
                          </div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">ANALYZE MY MESSAGE: FILL CONTEXT FIELDS</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">PASTE MESSAGE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">TAP ANALYZE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">LOADING</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">VIEW ANALYSIS</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="w-20 h-20 border border-[#B8FF00] rotate-45 flex items-center justify-center bg-[#141414] shrink-0 mx-2">
                            <div className="-rotate-45 text-center text-[10px] text-white font-mono leading-tight">COPY OR<br/>RUN AGAIN</div>
                          </div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">COPY MESSAGE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">RETURN TO HOME</div>
                        </div>
                        
                        {/* Bottom Path */}
                        <div className="flex items-center">
                          <div className="h-px bg-[#B8FF00] w-8 mr-2 relative">
                             <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-px bg-[#B8FF00] rotate-[45deg] origin-right"></div>
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div>
                          </div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">DECODE THEIR REPLY: FILL 3 FIELDS</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">TAP DECODE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">LOADING</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">VIEW ANALYSIS</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">COPY NEXT MESSAGE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">RETURN TO HOME</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FLOW 03 */}
                  <div className="bg-[#141414] border border-white p-10 overflow-x-auto">
                    <span className="text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-12 block">FLOW 03 — THE PLAYBOOK</span>
                    <div className="flex items-center min-w-max">
                      <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">OPEN PLAYBOOK</div>
                      <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                      
                      <div className="w-20 h-20 border border-[#B8FF00] rotate-45 flex items-center justify-center bg-[#141414] shrink-0 mx-2">
                        <div className="-rotate-45 text-center text-[10px] text-white font-mono leading-tight">COMMON OR<br/>CUSTOM</div>
                      </div>
                      
                      {/* Split Paths */}
                      <div className="flex flex-col gap-8 ml-4">
                        {/* Top Path */}
                        <div className="flex items-center">
                          <div className="h-px bg-[#B8FF00] w-8 mr-2 relative">
                             <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-px bg-[#B8FF00] rotate-[-45deg] origin-right"></div>
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div>
                          </div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">COMMON SITUATION: SELECT CARD</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">TRUTH STATEMENT</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">TAP GOT IT</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">VIEW TEMPLATE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="w-20 h-20 border border-[#B8FF00] rotate-45 flex items-center justify-center bg-[#141414] shrink-0 mx-2">
                            <div className="-rotate-45 text-center text-[10px] text-white font-mono leading-tight">USE AS IS<br/>OR AI</div>
                          </div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">COPY MESSAGE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">RETURN TO HOME</div>
                        </div>
                        
                        {/* Bottom Path */}
                        <div className="flex items-center">
                          <div className="h-px bg-[#B8FF00] w-8 mr-2 relative">
                             <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-px bg-[#B8FF00] rotate-[45deg] origin-right"></div>
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div>
                          </div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">CUSTOM SITUATION: DESCRIBE SITUATION</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">AI GENERATES TRUTH AND TEMPLATE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">VIEW TEMPLATE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">COPY MESSAGE</div>
                          <div className="h-px bg-[#B8FF00] w-8 mx-2 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[6px] border-l-[#B8FF00]"></div></div>
                          <div className="border border-white px-3 py-2 text-white font-mono text-[10px] uppercase bg-[#141414] shrink-0">RETURN TO HOME</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* SOLUTION SECTION */}
          <section id="solution" className="space-y-16 border-b border-stone-900 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <ScrollReveal>
                  <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">Solution</h3>
                </ScrollReveal>
              </div>
              <div className="md:col-span-8">
                <ScrollReveal delay="delay-200">
                  <p className="text-lg text-stone-300 leading-relaxed mb-8">
                    {caseStudy.solution.approach}
                  </p>
                  <ul className="space-y-4 mb-12">
                    {caseStudy.solution.decisions.map((decision, i) => (
                      <li key={i} className="flex items-start gap-4 text-stone-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-700 flex-shrink-0" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.details.images.concat([project.image]).slice(0, 3).map((img, idx) => (
                <ScrollReveal key={idx} delay={`delay-${idx * 100 + 200}`}>
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-stone-900 relative group">
                    <OptimizedImage 
                      src={img} 
                      alt="Detail" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* BEFORE / AFTER SECTION */}
          <section id="before-and-after" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">BEFORE / AFTER</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-200">
                <h4 className="font-serif text-3xl text-stone-200 mb-4">The difference Beacon makes.</h4>
                <p className="text-lg text-stone-400 leading-relaxed mb-12">
                  The same user. The same goal. Two completely different outcomes based on one thing — knowing what to say.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Left Card - Before */}
                  <div className="bg-[#141414] border-l-[3px] border-l-red-500 p-8 rounded-r-lg">
                    <div className="mb-6">
                      <span className="block text-red-500 font-mono text-xs uppercase tracking-widest mb-2">BEFORE BEACON</span>
                      <span className="block text-stone-500 text-xs">Aryan's actual message before using Beacon</span>
                    </div>
                    
                    <div className="mb-8">
                      <p className="font-mono italic text-stone-300 text-sm leading-relaxed">
                        "Hello mam/sir, I am Abhay, UX designer with 8 months experience. Looking for fresher role. Do you have any opportunities for me?"
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                        <p className="text-xs text-stone-400">Leading with what you need before giving them any reason to care.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                        <p className="text-xs text-stone-400">Puts all the work on a complete stranger.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                        <p className="text-xs text-stone-400">Most common first-gen networking mistake.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Card - After */}
                  <div className="bg-[#141414] border-l-[3px] border-l-[#B8FF00] p-8 rounded-r-lg">
                    <div className="mb-6">
                      <span className="block text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-2">AFTER BEACON</span>
                      <span className="block text-stone-500 text-xs">Rewritten by Message Lab in under 10 seconds</span>
                    </div>
                    
                    <div className="mb-8">
                      <p className="font-mono italic text-stone-300 text-sm leading-relaxed">
                        "Hi [Name], I've been following your work at Razorpay — really impressive. I'm a UI UX designer with 8 months experience trying to break into fintech. Would you be open to a 15 minute chat? I have specific questions about your journey."
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-1.5 shrink-0"></div>
                        <p className="text-xs text-stone-400">Opens with genuine specific interest in their work.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-1.5 shrink-0"></div>
                        <p className="text-xs text-stone-400">Makes a low pressure specific ask.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-1.5 shrink-0"></div>
                        <p className="text-xs text-stone-400">Under 100 words — easy to read and reply to.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="font-mono text-xs text-stone-500">Same person. Same goal. One message gets ignored. One gets a reply</p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* AI ARCHITECTURE SECTION */}
          <section id="ai-architecture" className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-900 pb-24">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h3 className="font-mono text-sm text-stone-500 uppercase tracking-widest sticky top-24">AI ARCHITECTURE</h3>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              <ScrollReveal delay="delay-200">
                <h4 className="font-serif text-3xl text-stone-200 mb-4">How the AI actually works.</h4>
                <p className="text-lg text-stone-400 leading-relaxed mb-12">
                  Beacon doesn't use fake AI. Every interaction is powered by the Claude API with a structured prompt architecture built from the user's onboarding data.
                </p>

                <div className="space-y-12 mb-16 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-px bg-stone-800 z-0 hidden md:block"></div>

                  {/* Step 01 */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-[40px_1fr] gap-6">
                    <div className="w-10 h-10 bg-[#141414] border border-[#B8FF00] text-[#B8FF00] font-mono text-xs flex items-center justify-center shrink-0">01</div>
                    <div>
                      <h5 className="font-serif text-xl text-stone-200 mb-2">System Prompt</h5>
                      <p className="text-stone-400 text-sm mb-4">A fixed instruction set that runs behind every interaction. Defines Beacon's AI personality — honest, specific, warm, first-gen aware.</p>
                      <div className="bg-[#141414] border border-stone-800 p-4 rounded font-mono text-[10px] text-stone-500 leading-relaxed">
                        SYSTEM: You are Beacon's career coach. You specialize in helping first generation professionals navigate professional networking. Always be honest specific and warm. Never give generic advice.
                      </div>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-[40px_1fr] gap-6">
                    <div className="w-10 h-10 bg-[#141414] border border-[#B8FF00] text-[#B8FF00] font-mono text-xs flex items-center justify-center shrink-0">02</div>
                    <div>
                      <h5 className="font-serif text-xl text-stone-200 mb-2">User Context Injected Automatically</h5>
                      <p className="text-stone-400 text-sm mb-4">The 8 onboarding questions feed directly into every AI call. This is why we asked those specific questions — they power everything.</p>
                      <div className="bg-[#141414] border border-stone-800 p-4 rounded font-mono text-[10px] text-stone-500 leading-relaxed">
                        CONTEXT: Name: Aryan — Role: UI UX Designer — Industry: Tech — Experience: Less than 1 year — Status: Fresher — Challenge: Reaches out but gets ignored — Dream Companies: Razorpay Swiggy Cred.
                      </div>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-[40px_1fr] gap-6">
                    <div className="w-10 h-10 bg-[#141414] border border-[#B8FF00] text-[#B8FF00] font-mono text-xs flex items-center justify-center shrink-0">03</div>
                    <div>
                      <h5 className="font-serif text-xl text-stone-200 mb-2">Message Context and User Draft</h5>
                      <p className="text-stone-400 text-sm mb-4">Who they are messaging, what they want, and the actual message they wrote.</p>
                      <div className="bg-[#141414] border border-stone-800 p-4 rounded font-mono text-[10px] text-stone-500 leading-relaxed">
                        MESSAGING: Senior Designer at Razorpay — Goal: Referral — MESSAGE: Hello mam/sir I am Aryan 8 months experience do you have any opportunities for me.
                      </div>
                    </div>
                  </div>

                  {/* Step 04 */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-[40px_1fr] gap-6">
                    <div className="w-10 h-10 bg-[#141414] border border-[#B8FF00] text-[#B8FF00] font-mono text-xs flex items-center justify-center shrink-0">04</div>
                    <div>
                      <h5 className="font-serif text-xl text-stone-200 mb-2">Structured AI Output</h5>
                      <p className="text-stone-400 text-sm mb-4">Claude returns three specific sections that map directly to Beacon's UI. The output format never changes — making the UI predictable and trustworthy.</p>
                      <div className="bg-[#141414] border border-stone-800 p-4 rounded font-mono text-[10px] text-stone-500 leading-relaxed">
                        THE PROBLEM: Leading with what you need before giving them any reason to care. WHY IT HAPPENS: Asking for opportunities before building connection is the most common first-gen mistake. BETTER VERSION: Hi Name I have been following your work at Razorpay. Would you be open to a 15 minute chat.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlight Card */}
                <div className="bg-[#141414] border-l-[3px] border-l-[#B8FF00] p-6 rounded-r-lg">
                  <p className="text-stone-300 text-sm">
                    <span className="text-[#B8FF00] font-bold mr-2">Why Beacon beats going to Claude directly —</span>
                    Claude has no memory of who Aryan is. Beacon injects his full profile automatically every time. Same underlying intelligence. Completely different product
                  </p>
                </div>

              </ScrollReveal>
            </div>
          </section>

          {/* DESIGN SYSTEM SECTION */}
          <section id="design-system" className="border-b border-stone-900 pb-24">
            <ScrollReveal className="mb-12">
              <h3 className="font-serif text-4xl text-stone-200 mb-2">Design System</h3>
              <p className="text-stone-500">The visual foundation of the project</p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ScrollReveal delay="delay-100">
                <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-6 border-b border-stone-800 pb-2">Typography</h4>
                <div className="space-y-6">
                  {caseStudy.designSystem.typography.map((font, i) => (
                    <div key={i}>
                      <div className="text-3xl text-stone-200 mb-1" style={{ fontFamily: font.name.includes('Mono') ? 'monospace' : 'sans-serif' }}>
                        Aa
                      </div>
                      <div className="text-stone-300 font-medium">{font.name}</div>
                      <div className="text-stone-500 text-sm">{font.usage}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay="delay-200">
                <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-6 border-b border-stone-800 pb-2">Color Palette</h4>
                <div className="space-y-4">
                  {caseStudy.designSystem.colors.map((color, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-stone-800 shadow-sm" style={{ backgroundColor: color.hex }} />
                      <div>
                        <div className="text-stone-300 font-mono uppercase">{color.hex}</div>
                        <div className="text-stone-500 text-sm">{color.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay="delay-300">
                <h4 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-6 border-b border-stone-800 pb-2">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-stone-300">
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* KEY SCREENS SECTION */}
          <section id="key-screens" className="border-b border-stone-900 pb-24">
            <ScrollReveal className="mb-12">
              <h3 className="font-serif text-4xl text-stone-200 mb-2">Key Screens</h3>
              <p className="text-stone-500">High-fidelity mockups of the core flow</p>
            </ScrollReveal>

            {/* Feature Spotlight Rows */}
            <div id="feature-spotlight" className="space-y-24 mb-24">
              {/* ROW 1 */}
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px] border-b border-white/5 pb-24">
                  {/* Left: Phone Mockup */}
                  <div className="flex justify-center">
                    <div className="w-[300px] h-[600px] bg-[#0A0A0A] border border-white/15 rounded-[24px] relative shadow-2xl overflow-hidden group">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl border-b border-l border-r border-white/10 z-30 pointer-events-none"></div>
                      <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden relative z-10">
                        <OptimizedImage 
                          src="https://i.ibb.co/p6TcGB0m/Beacon-Home-Updated-Navigation.png" 
                          alt="Daily Mission Board" 
                          className="w-full h-auto"
                        />
                      </div>
                      {/* Scroll Hint */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-0">
                         <div className="w-1 h-12 rounded-full bg-white/20 overflow-hidden">
                            <div className="w-full h-1/2 bg-white/50 animate-bounce"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                  {/* Right: Text */}
                  <div>
                    <span className="text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-4 block">FEATURE 01 — DAILY MISSION BOARD</span>
                    <h4 className="font-sans font-extrabold text-4xl md:text-5xl text-stone-200 mb-6 leading-tight">Know exactly what to do today.</h4>
                    <p className="font-mono text-stone-400 text-sm leading-relaxed">
                      Aryan used to open LinkedIn every morning and freeze. Too many options no clear action same outcome every day. The Mission Board fixes this. Every morning Beacon generates 3 specific tasks — not generic tips, real actions based on his profile, target companies, and what he did yesterday. One mission at a time. No overwhelm. No guesswork.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* ROW 2 */}
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px] border-b border-white/5 pb-24">
                  {/* Left: Text */}
                  <div className="order-2 md:order-1">
                    <span className="text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-4 block">FEATURE 02 — MESSAGE LAB</span>
                    <h4 className="font-sans font-extrabold text-4xl md:text-5xl text-stone-200 mb-6 leading-tight">Send messages that actually get replies.</h4>
                    <p className="font-mono text-stone-400 text-sm leading-relaxed">
                      Aryan was messaging hundreds of people and hearing nothing back. He didn't know why. Message Lab shows him exactly why — and fixes it before he hits send. Two modes in one screen. Analyze your outgoing message and get an honest diagnosis plus a better version. Or paste a reply you received and find out what it actually means and what to say next.
                    </p>
                  </div>
                  {/* Right: Phone Mockup */}
                  <div className="flex justify-center order-1 md:order-2">
                    <div className="w-[300px] h-[600px] bg-[#0A0A0A] border border-white/15 rounded-[24px] relative shadow-2xl overflow-hidden group">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl border-b border-l border-r border-white/10 z-30 pointer-events-none"></div>
                      <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden relative z-10">
                        <OptimizedImage 
                          src="https://i.ibb.co/v6Ljx56q/Message-Lab.png" 
                          alt="Message Lab" 
                          className="w-full h-auto"
                        />
                      </div>
                      {/* Scroll Hint */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-0">
                         <div className="w-1 h-12 rounded-full bg-white/20 overflow-hidden">
                            <div className="w-full h-1/2 bg-white/50 animate-bounce"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ROW 3 */}
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px] border-b border-white/5 pb-24">
                  {/* Left: Phone Mockup */}
                  <div className="flex justify-center">
                    <div className="w-[300px] h-[600px] bg-[#0A0A0A] border border-white/15 rounded-[24px] relative shadow-2xl overflow-hidden group">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl border-b border-l border-r border-white/10 z-30 pointer-events-none"></div>
                      <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden relative z-10">
                        <OptimizedImage 
                          src="https://i.ibb.co/3y7MkTsL/The-Playbook.png" 
                          alt="The Playbook" 
                          className="w-full h-auto"
                        />
                      </div>
                      {/* Scroll Hint */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-0">
                         <div className="w-1 h-12 rounded-full bg-white/20 overflow-hidden">
                            <div className="w-full h-1/2 bg-white/50 animate-bounce"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                  {/* Right: Text */}
                  <div>
                    <span className="text-[#B8FF00] font-mono text-xs uppercase tracking-widest mb-4 block">FEATURE 03 — THE PLAYBOOK</span>
                    <h4 className="font-sans font-extrabold text-4xl md:text-5xl text-stone-200 mb-6 leading-tight">The scripts nobody gave you.</h4>
                    <p className="font-mono text-stone-400 text-sm leading-relaxed">
                      Following up after sending your resume is not unprofessional. Asking for 15 minutes is not bothering someone. Aryan didn't know this — so he stayed silent and lost opportunities. The Playbook covers every awkward professional situation with a ready to use script. But before showing the script it shows a Truth Statement — one line that corrects the wrong belief stopping him from reaching out in the first place.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div id="all-screens" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "https://i.ibb.co/C33CH2hq/splash-3.png", label: "Splash Screen 1" },
                { src: "https://i.ibb.co/5ghfBSt3/splash-2.png", label: "Splash Screen 2" },
                { src: "https://i.ibb.co/Qvjf9mtf/splash-1.png", label: "Splash Screen 3" },
                { src: "https://i.ibb.co/MxdnHG4k/Welcome-screen.png", label: "Welcome Screen" },
                { src: "https://i.ibb.co/4vFYkZb/Beacon-Sign-Up.png", label: "Sign Up" },
                { src: "https://i.ibb.co/Kxc5yzrc/Beacon-Sign-In-Perfected-Apple-Logo.png", label: "Sign In" },
                { src: "https://i.ibb.co/fdPz1jVP/Profile-Setup-Step-1.png", label: "Profile Setup 1" },
                { src: "https://i.ibb.co/4ZbB759c/Profile-Setup-Step-2-Optimized.png", label: "Profile Setup 2" },
                { src: "https://i.ibb.co/fYmV5vT2/Profile-Setup-Step-3-Consistent-Button.png", label: "Profile Setup 3" },
                { src: "https://i.ibb.co/8nP0m29Y/Profile-Setup-Step-4-Updated-CTA.png", label: "Profile Setup 4" },
                { src: "https://i.ibb.co/pvxGqqZN/Profile-Setup-Step-5-Updated-CTA.png", label: "Personalized Insight Screen" },
                { src: "https://i.ibb.co/p6TcGB0m/Beacon-Home-Updated-Navigation.png", label: "Home Screen" },
                { src: "https://i.ibb.co/60NxGWmk/Message-Lab-Analyze.png", label: "Message Lab - Mode 1 ( Analyze my message )" },
                { src: "https://i.ibb.co/M52z9C2V/Message-Lab-Decode.png", label: "Message Lab - Mode 2 ( Decode their message )" },
                { src: "https://i.ibb.co/ccnhmVbj/Message-Lab-Analyzed-result.png", label: "Message Lab - Mode 1 (Result)" },
                { src: "https://i.ibb.co/CKzLqcRw/Message-Lab-Decode-result.png", label: "Message Lab - Mode 2 (Result)" },
                { src: "https://i.ibb.co/JjjbFmNr/The-Playbook.png", label: "The Playbook" },
                { src: "https://i.ibb.co/5h0qYfDV/Truth-Statement.png", label: "Truth Statement" },
                { src: "https://i.ibb.co/1tZXXJCL/Your-Script.png", label: "The Script" },
                { src: "https://i.ibb.co/G1kqXQN/Beacon-Profile-Screen.png", label: "Profile Screen" },
              ].map((screen, i) => (
                <ScrollReveal key={i} delay={`delay-${i * 100}`}>
                  <div className="flex flex-col items-center group">
                    <div className="w-[300px] h-[600px] bg-[#0A0A0A] border border-white/15 rounded-[24px] relative shadow-2xl overflow-hidden mb-6">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl border-b border-l border-r border-white/10 z-30 pointer-events-none"></div>
                      <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden relative z-10">
                        <OptimizedImage 
                          src={screen.src} 
                          alt={screen.label} 
                          className="w-full h-auto" 
                        />
                      </div>
                      {/* Scroll Hint */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-0">
                         <div className="w-1 h-12 rounded-full bg-white/20 overflow-hidden">
                            <div className="w-full h-1/2 bg-white/50 animate-bounce"></div>
                         </div>
                      </div>
                    </div>
                    <div className="text-center font-mono text-xs text-stone-500 uppercase tracking-widest">{screen.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

        </div>
        
        {/* FINAL CLOSING SECTION */}
        <section id="thank-you" className="w-full py-32 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-space-grotesk font-[800] text-4xl sm:text-6xl text-white mb-6">Thank you for reading.</h2>
          <p className="font-space-mono text-sm text-stone-400 mb-12">This case study was designed and documented by Abhay Batham.</p>
          <div className="w-[60px] h-[1px] bg-[#00FF00] mb-12"></div>
          <div className="flex items-center justify-center gap-8 font-space-mono text-sm uppercase">
            <button onClick={onClose} className="text-[#00FF00] hover:opacity-80 transition-opacity">VIEW PORTFOLIO</button>
            <a href="#contact" onClick={(e) => { onClose(); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="text-stone-500 hover:text-stone-300 transition-colors">GET IN TOUCH</a>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-stone-800 py-12 bg-stone-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-16 flex justify-between items-center">
            <button onClick={onClose} className="text-stone-500 hover:text-stone-300 transition-colors font-mono text-sm uppercase tracking-widest">
              ← Back to Projects
            </button>
            <button
              onClick={() => document.getElementById('case-study-container')?.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-all interactive"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <div className="text-stone-600 font-mono text-xs uppercase tracking-widest">
              © 2024 Abhay Batham
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 py-4 sm:py-6 flex justify-between items-center bg-stone-950/70 backdrop-blur-md text-stone-50 border-b border-stone-800/30">
      <a href="#home" className="font-serif text-xl sm:text-2xl tracking-tight interactive">AB</a>
      <div className="flex gap-4 sm:gap-12">
        <a href="#work" className="font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:text-stone-400 transition-colors interactive hover-underline">Work</a>
        <a href="#about" className="font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:text-stone-400 transition-colors interactive hover-underline">About</a>
        <a href="#resume" className="font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:text-stone-400 transition-colors interactive hover-underline">Resume</a>
        <a href="#contact" className="font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:text-stone-400 transition-colors interactive hover-underline">Contact</a>
      </div>
    </nav>
  );
};

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-stone-950 text-stone-50 selection:bg-stone-50 selection:text-stone-950">
      
      <div className="opacity-100">
        <div className="grain-overlay" />
        <CustomCursor />
        <Navbar />

        {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-[100dvh] w-full flex flex-col justify-end pt-32 pb-12 sm:pb-24 px-6 sm:px-12 overflow-hidden border-b border-stone-900">
        {/* Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-between px-6 sm:px-12 opacity-10">
          <div className="w-px h-full bg-stone-50" />
          <div className="w-px h-full bg-stone-50" />
          <div className="w-px h-full bg-stone-50" />
          <div className="w-px h-full bg-stone-50" />
          <div className="w-px h-full bg-stone-50" />
        </div>

        {/* 3D Floating Logos */}
        <div className="hidden md:block">
          <FloatingLogos />
        </div>

        <div 
          className="relative z-10 max-w-7xl mx-auto w-full"
          style={{
            transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
            transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          
          <ScrollReveal delay="delay-300">
            <h1 className="font-serif text-5xl xs:text-6xl sm:text-[8rem] leading-[0.9] font-light tracking-tight -ml-[0.05em] mb-4 sm:mb-6">
              Abhay<br/>Batham
            </h1>
            <p className="font-mono text-xs sm:text-base uppercase tracking-[0.15em] text-stone-400 mb-8 sm:mb-12">
              UX Designer
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <ScrollReveal delay="delay-500" className="w-full md:max-w-xl">
              <p className="text-lg sm:text-2xl font-light text-stone-400 leading-relaxed">
                UX Designer with a focus on research and an AI-integrated workflow. Designing mobile applications, web dashboards, and digital products that use both user research and the latest artificial intelligence technology to help you transition from user feedback to UI/UX faster.
              </p>
            </ScrollReveal>

            <ScrollReveal delay="delay-700">
              <div className="animate-bounce text-stone-600">
                <ArrowUpRight className="rotate-[135deg]" size={32} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h2 className="font-serif text-5xl sm:text-6xl mb-8">Approach</h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                I design at the intersection of research, UX, and AI. My process starts with understanding real people and real problems. Then I use AI as a tool to move faster, prototype smarter, and build products that feel genuinely intelligent. I don't use AI to skip the thinking. I use it to sharpen it.
              </p>
              <p className="text-stone-400 text-lg leading-relaxed">
                I integrate AI into every stage of my workflow. From generating and iterating on screens with tools like Google Stitch to designing the prompt architecture and user experience around AI features. Research drives every decision. AI accelerates the execution.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal delay="delay-200" className="bg-stone-900/50 border border-stone-800 p-8 rounded-lg hover:bg-stone-900 transition-colors">
              <h3 className="font-serif text-2xl mb-4 text-stone-200">Expertise</h3>
              <ul className="space-y-2 font-mono text-sm text-stone-400 uppercase tracking-wider">
                <li>User Interface Design</li>
                <li>User Experience Research</li>
                <li>Research</li>
                <li>Design Systems</li>
                <li>Prototyping</li>
              </ul>
            </ScrollReveal>
            
            <ScrollReveal delay="delay-300" className="bg-stone-900/50 border border-stone-800 p-8 rounded-lg hover:bg-stone-900 transition-colors">
              <h3 className="font-serif text-2xl mb-4 text-stone-200">Tools</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-stone-400 group">
                  <Layers size={18} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-wider">Figma</span>
                </li>
                <li className="flex items-center gap-3 text-stone-400 group">
                  <PenTool size={18} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-wider">Adobe Creative Suite</span>
                </li>
                <li className="flex items-center gap-3 text-stone-400 group">
                  <Bot size={18} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-wider">Claude</span>
                </li>
                <li className="flex items-center gap-3 text-stone-400 group">
                  <Grid size={18} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-wider">Google Stitch</span>
                </li>
                <li className="flex items-center gap-3 text-stone-400 group">
                  <Sparkles size={18} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
                  <span className="font-mono text-sm uppercase tracking-wider">UX Pilot</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- RESUME SECTION --- */}
      <section id="resume" className="py-24 sm:py-40 px-6 sm:px-12 border-t border-stone-900 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-serif text-5xl sm:text-7xl">Experience</h2>
              <Magnetic>
                <a 
                  href="/resume.pdf" 
                  download="Abhay_Batham_Resume.pdf"
                  className="group flex items-center gap-3 px-6 py-3 border border-stone-800 rounded-full hover:bg-stone-900 transition-colors interactive"
                >
                  <Download size={18} className="text-stone-400 group-hover:text-stone-200 transition-colors" />
                  <span className="font-mono text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-200">Download Resume</span>
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column - Summary & Contact */}
            <div className="lg:col-span-4 space-y-12">
              <ScrollReveal delay="delay-100">
                <div className="mb-8">
                  <h3 className="font-serif text-3xl mb-2 text-stone-200">Abhay Batham</h3>
                  <p className="font-mono text-sm text-stone-500 uppercase tracking-wider mb-6">UI/UX Designer • 8 Months Exp</p>
                  <p className="text-stone-400 leading-relaxed text-lg">
                    Creative and detail-oriented UI/UX Designer with hands-on experience designing intuitive and user-centered interfaces. Passionate about solving real user problems.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:abhaydesigner999@gmail.com" className="flex items-center gap-3 text-stone-400 hover:text-stone-200 transition-colors group interactive">
                    <Mail size={18} className="text-stone-600 group-hover:text-stone-400" />
                    <span className="text-sm">abhaydesigner999@gmail.com</span>
                  </a>
                  <a href="tel:+919770362089" className="flex items-center gap-3 text-stone-400 hover:text-stone-200 transition-colors group interactive">
                    <Phone size={18} className="text-stone-600 group-hover:text-stone-400" />
                    <span className="text-sm">+91 9770362089</span>
                  </a>
                  <div className="flex gap-4 pt-2">
                    <Magnetic>
                      <a href="https://www.linkedin.com/in/abhay-batham-8728882a5/" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-800 rounded-full hover:bg-stone-900 hover:border-stone-700 transition-colors interactive group">
                        <Linkedin size={18} className="text-stone-500 group-hover:text-stone-300" />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a href="https://www.behance.net/abhaybatham1" target="_blank" rel="noopener noreferrer" className="p-2 border border-stone-800 rounded-full hover:bg-stone-900 hover:border-stone-700 transition-colors interactive group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640" fill="currentColor" className="text-stone-500 group-hover:text-stone-300">
                          <path d="M185.577 119.517c18.862 0 35.847 1.642 51.331 5.008 15.52 3.236 28.63 8.752 39.757 16.24 10.996 7.512 19.476 17.516 25.748 29.989 6 12.354 9 27.862 9 46.229 0 19.878-4.476 36.355-13.512 49.63-9.118 13.24-22.358 24-40.122 32.516 24.236 6.993 42.118 19.24 54.118 36.627 11.989 17.516 17.753 38.504 17.753 63.225 0 19.996-3.886 37.11-11.469 51.615-7.748 14.634-18.248 26.492-31.11 35.634-12.993 9.236-27.993 15.992-44.753 20.363-16.642 4.346-33.756 6.626-51.45 6.626H0V119.553l185.601.012-.023-.048zm232.042 31.76h159.616v38.883l-159.616-.012v-38.883.012zm35.469 293.448c11.764 11.469 28.63 17.233 50.646 17.233 15.745 0 29.516-4.016 40.867-12.012 11.35-7.996 18.248-16.465 20.882-25.229l68.965.012c-11.126 34.347-27.874 58.749-50.859 73.5-22.642 14.753-50.35 22.241-82.5 22.241-22.524 0-42.627-3.65-60.757-10.772-18.119-7.24-33.237-17.35-45.993-30.638-12.366-13.24-22.11-28.984-28.996-47.493-6.756-18.354-10.229-38.752-10.229-60.744 0-21.367 3.52-41.245 10.477-59.623 7.122-18.52 16.878-34.359 29.87-47.753 12.98-13.382 28.229-24 46.24-31.748 17.883-7.76 37.631-11.646 59.505-11.646 24.107 0 45.225 4.642 63.356 14.126 18 9.355 32.87 21.993 44.492 37.749 11.646 15.768 19.878 33.874 25.004 54.107 5.126 20.232 6.875 41.35 5.469 63.508H433.706c0 22.359 7.512 43.76 19.358 55.1l.024.082zm89.871-149.707c-9.236-10.24-25.122-15.874-44.233-15.874-12.52 0-22.866 2.114-31.11 6.366-8.115 4.229-14.752 9.473-19.878 15.745-4.997 6.248-8.516 13.004-10.465 20.102-1.996 6.874-3.236 13.24-3.65 18.756l127.502-.012c-1.878-19.984-8.752-34.736-18.118-45.106l-.047.023zm-368.662-16.524c15.355 0 28.099-3.65 38.091-11.008 9.992-7.24 14.752-19.24 14.752-35.752 0-9.106-1.63-16.76-4.878-22.642-3.354-5.87-7.76-10.512-13.37-13.748-5.516-3.355-11.74-5.646-19.099-6.886-7.122-1.358-14.634-1.984-22.24-1.984H86.576v91.973h87.745l-.024.047zm4.748 167.59c8.528 0 16.642-.757 24.213-2.528 7.748-1.748 14.634-4.359 20.363-8.35 5.752-3.887 10.641-8.989 14.114-15.745 3.52-6.638 5.126-15.118 5.126-25.477 0-20.232-5.764-34.748-17.114-43.512-11.351-8.646-26.47-12.874-45.214-12.874H86.552V445.93l92.493-.012v.165z"/>
                        </svg>
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay="delay-200">
                <div className="pt-8 border-t border-stone-900">
                  <h4 className="font-serif text-xl mb-6 text-stone-300">Skills</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="block font-mono text-xs text-stone-600 uppercase tracking-widest mb-3">Design Tools</span>
                      <div className="flex flex-wrap gap-2">
                        {['Figma', 'Adobe XD', 'Adobe Photoshop', 'Illustrator', 'Google Stitch'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-stone-900/50 border border-stone-800 rounded-full text-xs text-stone-400 hover:border-stone-700 transition-colors cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block font-mono text-xs text-stone-600 uppercase tracking-widest mb-3">UX Methods</span>
                      <div className="flex flex-wrap gap-2">
                        {['User Research', 'Usability Testing', 'Wireframing', 'Prototyping', 'User Flows'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-stone-900/50 border border-stone-800 rounded-full text-xs text-stone-400 hover:border-stone-700 transition-colors cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block font-mono text-xs text-stone-600 uppercase tracking-widest mb-3">AI Workflows</span>
                      <div className="flex flex-wrap gap-2">
                        {['Claude API', 'Prompt Engineering', 'AI-assisted Design', 'Rapid Iteration'].map(skill => (
                          <span key={skill} className="px-3 py-1 bg-stone-900/50 border border-stone-800 rounded-full text-xs text-stone-400 hover:border-stone-700 transition-colors cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Experience */}
              <ScrollReveal delay="delay-200">
                <div className="flex items-center gap-4 mb-8">
                  <Briefcase size={24} className="text-stone-600" />
                  <h3 className="font-serif text-3xl text-stone-200">Work Experience</h3>
                </div>

                <div className="relative border-l border-stone-800 ml-3 pl-8 md:pl-12 space-y-12">
                  <div className="relative group">
                    <div className="absolute -left-[37px] md:-left-[53px] top-2 w-4 h-4 rounded-full bg-stone-900 border border-stone-700 group-hover:bg-stone-800 group-hover:border-stone-500 transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h4 className="font-serif text-xl text-stone-200">UI/UX Designer</h4>
                      <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">2026</span>
                    </div>
                    <div className="text-stone-400 mb-4 font-medium">Euron <span className="text-stone-600">•</span> Remote</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-400 leading-relaxed marker:text-stone-600">
                      <li>Designed user interfaces and layouts for web products using AI-assisted design tools.</li>
                      <li>Used AI tools to accelerate ideation, layout generation, and design iterations.</li>
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[37px] md:-left-[53px] top-2 w-4 h-4 rounded-full bg-stone-900 border border-stone-700 group-hover:bg-stone-800 group-hover:border-stone-500 transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h4 className="font-serif text-xl text-stone-200">UI/UX Design Intern</h4>
                      <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">Jun 2024 - Oct 2024</span>
                    </div>
                    <div className="text-stone-400 mb-4 font-medium">Kalpas Innovation Pvt. Ltd. <span className="text-stone-600">•</span> Remote</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-400 leading-relaxed marker:text-stone-600">
                      <li>Worked on a web-based schedule management SaaS platform, focusing on improving usability and visual consistency.</li>
                      <li>Designed user flows, wireframes, and interactive prototypes to enhance task organization.</li>
                      <li>Collaborated with developers to ensure seamless implementation of UI components.</li>
                    </ul>
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[37px] md:-left-[53px] top-2 w-4 h-4 rounded-full bg-stone-900 border border-stone-700 group-hover:bg-stone-800 group-hover:border-stone-500 transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h4 className="font-serif text-xl text-stone-200">UI/UX Design Intern</h4>
                      <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">Apr 2024 - Jun 2024</span>
                    </div>
                    <div className="text-stone-400 mb-4 font-medium">Zidio Development <span className="text-stone-600">•</span> Remote</div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-stone-400 leading-relaxed marker:text-stone-600">
                      <li>Worked on two mobile app projects, designing intuitive user interfaces and interactive prototypes.</li>
                      <li>Collaborated with developers to ensure seamless integration of design features.</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Key Projects */}
              <ScrollReveal delay="delay-250">
                <div className="flex items-center gap-4 mb-8">
                  <Layers size={24} className="text-stone-600" />
                  <h3 className="font-serif text-3xl text-stone-200">Key Projects</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Beacon — AI Career Networking App', 'Schedule Management Tool (SaaS)', 'FurniElite (AR Furniture App)', 'Google Pay App Redesign'].map((proj, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-stone-800 rounded-lg bg-stone-900/30">
                      <div className="w-2 h-2 rounded-full bg-stone-500" />
                      <span className="text-stone-300 font-medium">{proj}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Education */}
              <ScrollReveal delay="delay-300">
                <div className="flex items-center gap-4 mb-8">
                  <GraduationCap size={24} className="text-stone-600" />
                  <h3 className="font-serif text-3xl text-stone-200">Education</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border border-stone-800 rounded-lg bg-stone-900/30 hover:bg-stone-900/50 transition-colors group">
                    <div className="font-mono text-xs text-stone-500 uppercase tracking-wider mb-2">2023 - 2024</div>
                    <h4 className="font-serif text-lg text-stone-200 mb-1 group-hover:text-white transition-colors">UI/UX Design Certification</h4>
                    <div className="text-stone-400 text-sm">Mantra Institute, Ujjain</div>
                  </div>
                  
                  <div className="p-6 border border-stone-800 rounded-lg bg-stone-900/30 hover:bg-stone-900/50 transition-colors group">
                    <div className="font-mono text-xs text-stone-500 uppercase tracking-wider mb-2">2021 - 2023</div>
                    <h4 className="font-serif text-lg text-stone-200 mb-1 group-hover:text-white transition-colors">Bachelor of Commerce</h4>
                    <div className="text-stone-400 text-sm">Vikram University, Ujjain</div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="work" className="py-24 sm:py-40 px-6 sm:px-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-24">
            <h2 className="font-serif text-5xl sm:text-7xl mb-6">Selected Works</h2>
            <p className="text-stone-400 text-lg max-w-xl">A collection of projects that define my approach to digital product design.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-fr">
            {PROJECTS.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                className={`group relative bg-stone-900/50 border border-stone-800/50 hover:border-stone-700 overflow-hidden cursor-pointer interactive transition-colors duration-500 ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div onClick={() => setActiveProject(project)} className="h-full flex flex-col">
                  <div className={`relative overflow-hidden w-full bg-stone-900 ${project.featured ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500 z-20" />
                    <OptimizedImage 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      objectPosition={project.id === 'beacon' ? 'top' : 'center'}
                    />
                  </div>
                  
                  <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-xs text-stone-500 border border-stone-800 px-3 py-1 rounded-full">
                          {project.number}
                        </span>
                        <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
                          {project.category} — {project.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-4xl sm:text-5xl mb-6 group-hover:text-stone-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-stone-400 max-w-xl mb-8 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono text-stone-500 border border-stone-800 px-3 py-1 bg-stone-950/30 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="px-5 py-2 rounded-full border border-stone-700 text-stone-300 text-sm font-medium group-hover:bg-stone-800 group-hover:border-stone-600 group-hover:text-white transition-all flex items-center gap-2 w-fit">
                        View Project <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 sm:py-40 px-6 sm:px-12 border-t border-stone-900 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <h2 className="font-serif text-[12vw] sm:text-[8rem] leading-[0.9] mb-24">
              Let's Create<br />Something Great
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal delay="delay-200">
              <p className="text-xl text-stone-400 max-w-md leading-relaxed">
                I'm currently available for freelance projects and open to full-time opportunities. If you have a project in mind or just want to say hello, get in touch.
              </p>
            </ScrollReveal>

            <div className="space-y-12">
              <ScrollReveal delay="delay-300">
                <a href="mailto:abhaydesigner999@gmail.com" className="block font-serif text-3xl sm:text-5xl hover:text-stone-400 transition-colors interactive">
                  abhaydesigner999@gmail.com
                </a>
              </ScrollReveal>

              <ScrollReveal delay="delay-400">
                <div className="flex gap-8">
                  <a href="https://www.linkedin.com/in/abhay-batham-8728882a5/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-50 transition-colors interactive">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.behance.net/abhaybatham1" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-50 transition-colors interactive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640" fill="currentColor">
                      <path d="M185.577 119.517c18.862 0 35.847 1.642 51.331 5.008 15.52 3.236 28.63 8.752 39.757 16.24 10.996 7.512 19.476 17.516 25.748 29.989 6 12.354 9 27.862 9 46.229 0 19.878-4.476 36.355-13.512 49.63-9.118 13.24-22.358 24-40.122 32.516 24.236 6.993 42.118 19.24 54.118 36.627 11.989 17.516 17.753 38.504 17.753 63.225 0 19.996-3.886 37.11-11.469 51.615-7.748 14.634-18.248 26.492-31.11 35.634-12.993 9.236-27.993 15.992-44.753 20.363-16.642 4.346-33.756 6.626-51.45 6.626H0V119.553l185.601.012-.023-.048zm232.042 31.76h159.616v38.883l-159.616-.012v-38.883.012zm35.469 293.448c11.764 11.469 28.63 17.233 50.646 17.233 15.745 0 29.516-4.016 40.867-12.012 11.35-7.996 18.248-16.465 20.882-25.229l68.965.012c-11.126 34.347-27.874 58.749-50.859 73.5-22.642 14.753-50.35 22.241-82.5 22.241-22.524 0-42.627-3.65-60.757-10.772-18.119-7.24-33.237-17.35-45.993-30.638-12.366-13.24-22.11-28.984-28.996-47.493-6.756-18.354-10.229-38.752-10.229-60.744 0-21.367 3.52-41.245 10.477-59.623 7.122-18.52 16.878-34.359 29.87-47.753 12.98-13.382 28.229-24 46.24-31.748 17.883-7.76 37.631-11.646 59.505-11.646 24.107 0 45.225 4.642 63.356 14.126 18 9.355 32.87 21.993 44.492 37.749 11.646 15.768 19.878 33.874 25.004 54.107 5.126 20.232 6.875 41.35 5.469 63.508H433.706c0 22.359 7.512 43.76 19.358 55.1l.024.082zm89.871-149.707c-9.236-10.24-25.122-15.874-44.233-15.874-12.52 0-22.866 2.114-31.11 6.366-8.115 4.229-14.752 9.473-19.878 15.745-4.997 6.248-8.516 13.004-10.465 20.102-1.996 6.874-3.236 13.24-3.65 18.756l127.502-.012c-1.878-19.984-8.752-34.736-18.118-45.106l-.047.023zm-368.662-16.524c15.355 0 28.099-3.65 38.091-11.008 9.992-7.24 14.752-19.24 14.752-35.752 0-9.106-1.63-16.76-4.878-22.642-3.354-5.87-7.76-10.512-13.37-13.748-5.516-3.355-11.74-5.646-19.099-6.886-7.122-1.358-14.634-1.984-22.24-1.984H86.576v91.973h87.745l-.024.047zm4.748 167.59c8.528 0 16.642-.757 24.213-2.528 7.748-1.748 14.634-4.359 20.363-8.35 5.752-3.887 10.641-8.989 14.114-15.745 3.52-6.638 5.126-15.118 5.126-25.477 0-20.232-5.764-34.748-17.114-43.512-11.351-8.646-26.47-12.874-45.214-12.874H86.552V445.93l92.493-.012v.165z"/>
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="mt-40 text-center font-mono text-xs text-stone-600 uppercase tracking-widest">
            © 2026 Abhay Batham — Portfolio
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
      </div>
    </div>
  );
}
