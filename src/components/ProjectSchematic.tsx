import { Network, Cpu, Database, ArrowRight, Server } from 'lucide-react';

interface SchematicProps {
  details: {
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
  };
}

export default function ProjectSchematic({ details }: SchematicProps) {
  return (
    <div className="relative w-full border border-outlineVariant/30 bg-[#060e20] p-6 font-mono overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 230, 57, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 230, 57, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8 border-b border-outlineVariant/30 pb-3">
          <Server className="text-tertiary" size={16} />
          <span className="text-xs tracking-widest text-outline uppercase shadow-sm">
            SYSTEM_ARCHITECTURE_TOPOLOGY
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 relative">
          
          {/* Animated SVG connecting line (Desktop only) */}
          <svg className="absolute top-1/2 left-[150px] right-[150px] h-2 -translate-y-1/2 hidden md:block z-0 pointer-events-none" style={{ width: 'calc(100% - 300px)' }}>
            <line x1="0" y1="4" x2="100%" y2="4" stroke="rgba(0,230,57,0.2)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="0" y1="4" x2="100%" y2="4" stroke="#00E639" strokeWidth="2" strokeDasharray="4 4" className="animate-[scanline_2s_linear_infinite]" />
          </svg>

          {/* Node 1: Input / Problem */}
          <div className="bg-surfaceContainerLow border border-primary/20 p-4 w-full md:w-[150px] flex shrink-0 flex-col items-center justify-center text-center relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-tertiary opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-tertiary opacity-50"></div>
            <Network size={24} className="text-primary mb-3 opacity-80" />
            <h5 className="text-[10px] text-tertiary tracking-widest mb-2">INPUT_LAYER</h5>
            <p className="text-[9px] text-primary/70 leading-relaxed line-clamp-4">
              {details.problem}
            </p>
          </div>

          <div className="flex items-center justify-center md:hidden text-tertiary/50">
            <ArrowRight size={16} className="rotate-90" />
          </div>

          {/* Node 2: Processing / Architecture */}
          <div className="bg-surfaceContainerHigh border border-tertiary/40 p-5 w-full md:w-[220px] flex shrink-0 flex-col items-center justify-center text-center relative z-10 shadow-[0_0_20px_rgba(0,230,57,0.1)]">
             <div className="absolute -top-1 -left-1 -right-1 h-1 bg-tertiary/50 hazard-stripes"></div>
            <Cpu size={28} className="text-tertiary mb-3 animate-pulse" />
            <h5 className="text-[10px] text-white tracking-widest mb-2 font-bold text-glow">PROCESSING_CORE</h5>
            <p className="text-[9px] text-outline leading-loose mb-3">
              {details.architecture}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
               {details.features.slice(0,2).map((feat, i) => (
                 <span key={i} className="text-[8px] bg-tertiary/10 text-tertiary px-1.5 py-0.5 border border-tertiary/30">
                   [{feat}]
                 </span>
               ))}
            </div>
          </div>

          <div className="flex items-center justify-center md:hidden text-tertiary/50">
            <ArrowRight size={16} className="rotate-90" />
          </div>

          {/* Node 3: Output / Solution */}
          <div className="bg-surfaceContainerLow border border-primary/20 p-4 w-full md:w-[150px] flex shrink-0 flex-col items-center justify-center text-center relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
             <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary opacity-50"></div>
            <Database size={24} className="text-primary mb-3 opacity-80" />
            <h5 className="text-[10px] text-tertiary tracking-widest mb-2">OUTPUT_STATE</h5>
            <p className="text-[9px] text-primary/70 leading-relaxed line-clamp-4">
              {details.solution}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
