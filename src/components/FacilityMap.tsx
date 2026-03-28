import { useState, useEffect } from 'react';
import { Network, Database, Layers, BookOpen, Terminal, Code2 } from 'lucide-react';

const SECTIONS = [
  { id: 'main-frame', label: 'MAIN_FRAME', icon: Terminal },
  { id: 'matrix', label: 'MATRIX', icon: Layers },
  { id: 'archive', label: 'ARCHIVE', icon: Database },
  { id: 'reports', label: 'REPORTS', icon: BookOpen },
  { id: 'intel', label: 'INTEL', icon: Code2 },
  { id: 'academy', label: 'ACADEMY', icon: Network },
];

export default function FacilityMap() {
  const [activeSection, setActiveSection] = useState('main-frame');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 w-48 bg-[#001B3D]/90 backdrop-blur-md border border-tertiary/20 p-4 hidden lg:block z-40 shadow-[0_0_30px_rgba(0,0,0,0.8)] facility-map-container before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,230,57,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,230,57,0.03)_1px,transparent_1px)] before:bg-[size:10px_10px] before:pointer-events-none">
      <div className="flex items-center gap-2 mb-6 border-b border-tertiary/30 pb-2 relative">
        <div className="w-1.5 h-1.5 bg-tertiary animate-ping absolute left-0" style={{ animationDuration: '3s' }}></div>
        <div className="w-1.5 h-1.5 bg-tertiary absolute left-0"></div>
        <span className="font-mono text-[10px] text-tertiary tracking-widest pl-4 uppercase">FACILITY_MAP</span>
      </div>

      <div className="space-y-4 relative">
        {/* Connecting Line */}
        <div className="absolute left-[9px] top-4 bottom-4 w-px bg-outlineVariant/30 -z-10"></div>

        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const Icon = section.icon;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(section.id, e)}
              className={`flex items-center gap-3 group transition-all duration-300 ${
                isActive ? 'opacity-100 translate-x-1' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div className={`w-5 h-5 flex items-center justify-center border transition-colors ${
                isActive ? 'border-tertiary bg-tertiary/20 text-tertiary' : 'border-outlineVariant/50 bg-[#060e20] text-outline'
              }`}>
                <Icon size={10} />
              </div>
              <span className={`font-mono text-[10px] tracking-wider transition-colors ${
                isActive ? 'text-tertiary font-bold text-glow' : 'text-outline group-hover:text-primary'
              }`}>
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
