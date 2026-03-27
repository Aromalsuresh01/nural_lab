import { useState, useEffect } from 'react';
import { Terminal, Code2, Network, ArrowRight, Link, Mail, Cpu } from 'lucide-react';
import { profile, experience, skills, projects, education, linguisticProficiency } from './data';

const Typewriter = ({ text, delay = 50, startDelay = 0 }: { text: string, delay?: number, startDelay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, started]);

  return <span>{currentText}<span className="animate-pulse">_</span></span>;
};

function App() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden selection:bg-tertiary selection:text-[#001B3D]">
      {/* Background ambient light */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-hero-gradient">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation / Top Bar */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b-outlineVariant/20 border-t-0 border-l-0 border-r-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary">
            <Terminal size={20} className="text-tertiary" />
            <span className="font-display font-medium tracking-tight">NEURAL_LAB<span className="text-outlineVariant"> // {profile.name.toUpperCase()}</span></span>
          </div>
          <div className="flex items-center gap-6 font-mono text-sm tracking-widest text-outline">
            <span className="hidden sm:inline-block">STATUS: <span className="text-tertiary">ONLINE</span></span>
            <span className="hidden sm:inline-block">PORT: <span className="text-primary">8080</span></span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 min-w-0 pr-4">
              <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 bg-surfaceContainerLow border border-tertiary/30">
                <div className="w-2 h-2 bg-tertiary animate-pulse"></div>
                <span className="font-mono text-xs tracking-wider text-tertiary">SYSTEMS_INITIALIZED</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-6 text-white leading-none break-all">
                {profile.subtitle}
              </h1>
              
              <p className="text-xl md:text-2xl text-primary font-body max-w-2xl mb-10 leading-relaxed border-l-2 border-outlineVariant/30 pl-6">
                I engineer context-aware AI systems, latency-optimized RAG pipelines, and automated intelligence layers that bridge research and production.
              </p>
              
              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-surfaceContainerHigh border border-outlineVariant hover:border-primary transition-colors hover:text-white">
                  <Link size={16} /> GITHUB_REPO
                </a>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-6 py-3 bg-tertiary/10 border border-tertiary/50 text-tertiary hover:bg-tertiary hover:text-[#001B3D] transition-colors shadow-[0_0_15px_rgba(0,230,57,0.15)] hover:shadow-[0_0_25px_rgba(0,230,57,0.4)]">
                  <Mail size={16} /> INIT_CONNECTION
                </a>
              </div>
            </div>

            {/* Terminal Sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="terminal-box h-[400px] flex flex-col box-glow relative overflow-hidden animate-float">
                {/* Decorative Scanline */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent,rgba(0,230,57,0.1),transparent)] h-[20%] w-full animate-scanline z-10"></div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary/50 to-transparent z-20"></div>
                <div className="flex justify-between items-center border-b border-outlineVariant/30 pb-2 mb-4 relative z-20">
                  <span className="text-outline">sys_log.sh</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-outlineVariant rounded-full"></div>
                    <div className="w-2 h-2 bg-outlineVariant rounded-full"></div>
                    <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="space-y-3 text-primary flex-1 opacity-80 overflow-hidden relative z-20 text-sm">
                  {[
                    { text: "> Authenticating user...", color: "text-primary", delay: "0ms" },
                    { text: `> [OK] Identity verified: ${profile.name}`, color: "text-tertiary", delay: "600ms" },
                    { text: "> Loading architecture...", color: "text-primary", delay: "1200ms" },
                    { text: "> [OK] Neural patterns mapped.", color: "text-tertiary", delay: "1800ms" },
                    { text: "> Establishing latency threshold...", color: "text-primary", delay: "2200ms" },
                    { text: "> Target: < 50ms", color: "text-primary", delay: "2600ms" }
                  ].map((line, idx) => (
                    <p key={idx} className={`${line.color} opacity-0 animate-fade-in-up`} style={{ animationDelay: line.delay }}>
                      {line.text}
                    </p>
                  ))}
                  
                  <p className="text-tertiary mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "3200ms" }}>
                    <Typewriter text={`> Awaiting directive...`} delay={40} startDelay={3200} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid / LAB_INDEX */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-outlineVariant/20 pb-6">
            <h2 className="text-3xl font-display font-medium text-white tracking-wide">LAB_INDEX</h2>
            <div className="h-px bg-outlineVariant flex-1 opacity-30"></div>
            <span className="font-mono text-outline text-sm">OBJ_COUNT: {projects.length}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-8 group relative overflow-hidden hover:border-tertiary/40 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(0,230,57,0.1)]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-tertiary/10 transition-colors"></div>
                
                <div className="flex justify-between items-start mb-6 align-top">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs px-2 py-1 border border-outlineVariant/30 text-outline">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-display font-medium text-white group-hover:text-tertiary transition-colors">{project.title}</h3>
                    </div>
                    <p className="font-mono text-xs text-primary/70 tracking-widest uppercase">{project.category}</p>
                  </div>
                  
                  {project.metrics && project.metrics.length > 0 ? (
                     <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-tertiary border border-tertiary/30 px-2 py-1 bg-tertiary/5">
                       <span className="w-1.5 h-1.5 bg-tertiary"></span> {project.metrics[0]}
                     </span>
                  ) : (
                     <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-primary border border-primary/30 px-2 py-1 bg-primary/5">
                       <span className="w-1.5 h-1.5 bg-primary"></span> STABLE
                     </span>
                  )}
                </div>

                <p className="text-sm text-primary/80 leading-relaxed mb-8 h-16 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.technologies.map((t, i) => (
                    <div key={i} className="group/icon relative">
                      {TECH_ICONS[t] ? (
                        <div className="h-8 w-8 flex items-center justify-center grayscale opacity-60 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300 transform group-hover/icon:scale-110">
                          <img 
                            src={TECH_ICONS[t]} 
                            alt={t} 
                            className="max-h-full max-w-full object-contain"
                            title={t}
                          />
                        </div>
                      ) : (
                        <span className="font-mono text-[10px] px-2 py-1 bg-surfaceContainerLow border border-outlineVariant/20 text-outline">
                          {t}
                        </span>
                      )}
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-surfaceContainerHighest text-[10px] font-mono text-white opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 border border-outlineVariant/30">
                        {t}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-outlineVariant/20 pt-4 mt-auto">
                  <a href={`https://github.com/${project.links.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                    VIEW_SOURCE <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Matrix */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-12 border-b border-outlineVariant/20 pb-6">
                <h2 className="text-2xl font-display font-medium text-white tracking-wide">CAPABILITIES_MATRIX</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "AI / ML Architecture", items: skills.ai, icon: <Cpu className="text-tertiary mb-3 opacity-70" /> },
                  { title: "Development / Tooling", items: [...skills.languages, ...skills.frameworks], icon: <Code2 className="text-primary mb-3 opacity-70" /> },
                  { title: "Cloud & Infrastructure", items: skills.cloud, icon: <Network className="text-outline mb-3 opacity-70" /> },
                  { title: "Operational Domains", items: skills.domains, icon: <Network className="text-tertiary mb-3 opacity-30" /> }
                ].map((realm, i) => (
                  <div key={i} className="p-6 border border-outlineVariant/20 bg-surfaceContainerLow/50 relative">
                    {realm.icon}
                    <h4 className="font-mono text-sm tracking-widest text-white mb-4">{realm.title}</h4>
                    <p className="text-sm text-primary/70 leading-relaxed">{realm.items.join(" // ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-12 border-b border-outlineVariant/20 pb-6">
                <h2 className="text-2xl font-display font-medium text-white tracking-wide">FIELD_EXPERIENCE</h2>
              </div>
              
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i} className="pl-6 border-l border-outlineVariant/30 relative">
                    <div className="absolute top-0 -left-1.5 w-3 h-3 bg-surface border border-outlineVariant/80 pointer-events-none"></div>
                    <div className="mb-4">
                      <h3 className="text-xl font-display text-white mb-1">{exp.role}</h3>
                      <div className="font-mono text-xs text-tertiary tracking-widest">
                        {exp.company} <span className="text-outlineVariant">|</span> {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, j) => (
                        <li key={j} className="text-sm text-primary/80 flex items-start gap-3 leading-relaxed">
                          <span className="text-tertiary mt-1 text-xs opacity-60">►</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Education */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-12 border-b border-outlineVariant/20 pb-6">
                <h2 className="text-2xl font-display font-medium text-white tracking-wide">ACADEMIC_LOGS</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="p-6 border border-outlineVariant/20 bg-surfaceContainerLow/30 flex justify-between items-center group hover:border-tertiary/30 transition-colors">
                    <div>
                      <h3 className="text-lg font-display text-white group-hover:text-tertiary transition-colors">{edu.degree}</h3>
                      <p className="font-mono text-xs text-primary/60 tracking-widest uppercase">{edu.institution}</p>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border border-outlineVariant/30 text-outlineVariant group-hover:text-tertiary group-hover:border-tertiary transition-colors">
                      <span className="font-mono text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-12 border-b border-outlineVariant/20 pb-6">
                <h2 className="text-2xl font-display font-medium text-white tracking-wide">LINGUISTIC_STACK</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {linguisticProficiency.map((lang, i) => (
                  <div key={i} className="px-6 py-4 border border-outlineVariant/20 bg-surfaceContainerLow/30 font-mono text-sm tracking-[0.2em] text-primary flex items-center gap-4 hover:border-tertiary transition-colors">
                    <span className="w-2 h-2 bg-tertiary/40"></span> {lang.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-outlineVariant/20 mt-20 bg-surfaceContainerLow">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-outline tracking-widest">
            © {new Date().getFullYear()} AROMAL SURESH // SYNTHETIC_ARCHITECT
          </div>
          <div className="font-mono text-xs text-outline/50">
            SYSTEM_UPTIME: <span className="text-tertiary">99.9%</span>
          </div>
        </div>
      </footer>

      {/* Project Inspector Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-4xl bg-surfaceContainerHigh border border-tertiary/30 shadow-[0_0_50px_rgba(0,230,57,0.15)] overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-outlineVariant/30 flex justify-between items-center bg-surfaceContainerLowest">
              <div className="flex items-center gap-3">
                <Terminal className="text-tertiary" size={18} />
                <span className="font-mono text-sm tracking-widest text-primary">PROJECT_INSPECTOR // {selectedProject.id.toUpperCase()}</span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="text-outline hover:text-white font-mono text-sm px-3 py-1 border border-transparent hover:border-outlineVariant transition-colors cursor-pointer"
              >
                [ESC] CLOSE
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">{selectedProject.title}</h2>
                <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-tertiary/10 border border-tertiary/30">
                  <div className="w-2 h-2 bg-tertiary animate-pulse"></div>
                  <span className="font-mono text-tertiary text-sm tracking-widest uppercase">{selectedProject.category}</span>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl text-primary/90 leading-relaxed font-body border-l-2 border-tertiary/50 pl-6 mb-12">
                  {selectedProject.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-6 bg-surfaceContainerLow border border-outlineVariant/30">
                    <h4 className="font-mono text-sm mb-6 text-white tracking-widest flex items-center gap-2">
                      <Cpu size={16} className="text-tertiary" /> TECHNICAL_STACK
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.technologies.map((t, i) => (
                        <div key={i} className="group/modal-icon relative">
                          {TECH_ICONS[t] ? (
                            <div className="h-10 w-10 flex items-center justify-center grayscale opacity-70 group-hover/modal-icon:grayscale-0 group-hover/modal-icon:opacity-100 transition-all duration-300">
                              <img src={TECH_ICONS[t]} alt={t} className="max-h-full max-w-full object-contain" title={t} />
                            </div>
                          ) : (
                            <span className="font-mono text-xs px-3 py-1.5 bg-surface border border-outlineVariant/30 text-primary">
                              {t}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-surfaceContainerLow border border-outlineVariant/30 flex flex-col justify-center items-start">
                    <h4 className="font-mono text-sm mb-4 text-white tracking-widest">PERFORMANCE_METRICS</h4>
                    <div className="space-y-2 w-full">
                      {selectedProject.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-outlineVariant/10 pb-2">
                          <span className="font-mono text-[10px] text-outline">{m.split(':')[0]}</span>
                          <span className="font-mono text-xs text-tertiary">{m.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="glass-panel p-6 border-l-4 border-l-tertiary">
                    <h4 className="font-mono text-xs text-tertiary mb-2 uppercase tracking-widest">Problem_Space</h4>
                    <p className="text-primary/90 leading-relaxed font-body italic">"{selectedProject.details.problem}"</p>
                  </div>
                  <div className="glass-panel p-6 border-l-4 border-l-primary">
                    <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Architectural_Solution</h4>
                    <p className="text-primary/90 leading-relaxed font-body">{selectedProject.details.solution}</p>
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="pt-8 border-t border-outlineVariant/20 flex justify-end">
                  <a 
                    href={`https://github.com/${selectedProject.links.github}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-3 px-8 py-4 bg-tertiary/10 border border-tertiary/50 text-tertiary hover:bg-tertiary hover:text-[#001B3D] transition-colors shadow-[0_0_15px_rgba(0,230,57,0.15)] hover:shadow-[0_0_25px_rgba(0,230,57,0.4)] cursor-pointer"
                  >
                    <Link size={18} /> ACCESS_REPOSITORY
                  </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
