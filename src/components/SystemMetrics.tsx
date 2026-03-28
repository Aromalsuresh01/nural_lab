import { useState, useEffect } from 'react';
import { Activity, Cpu, Database, Network } from 'lucide-react';

export default function SystemMetrics() {
  const [cpu, setCpu] = useState(14);
  const [ram, setRam] = useState(42);
  const [vram, setVram] = useState(8.4);
  const [latency, setLatency] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(prev => Math.max(5, Math.min(95, prev + (Math.random() * 10 - 5))));
      setRam(prev => Math.max(20, Math.min(80, prev + (Math.random() * 4 - 2))));
      setVram(prev => Math.max(4.0, Math.min(24.0, prev + (Math.random() * 0.4 - 0.2))));
      setLatency(prev => Math.max(20, Math.min(120, prev + (Math.random() * 20 - 10))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed right-6 top-1/3 w-56 bg-[#001B3D]/80 backdrop-blur-md border border-outlineVariant/30 p-4 hidden xl:block z-40 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 mb-4 border-b border-outlineVariant/30 pb-2">
        <Activity size={14} className="text-tertiary animate-pulse" />
        <span className="font-mono text-xs text-outline tracking-wider">SYSTEM_TELEMETRY</span>
      </div>
      
      <div className="space-y-5 font-mono text-[11px]">
        <div>
          <div className="flex justify-between text-outline mb-1.5">
            <span className="flex items-center gap-1.5 uppercase tracking-wide"><Cpu size={12}/> CPU_LOAD</span>
            <span className="text-white">{cpu.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-surfaceContainerHigh h-1.5 overflow-hidden">
            <div className="bg-primary h-full transition-all duration-1000 ease-in-out" style={{width: `${cpu}%`}}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-outline mb-1.5">
            <span className="flex items-center gap-1.5 uppercase tracking-wide"><Database size={12}/> SYS_RAM</span>
            <span className="text-white">{ram.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-surfaceContainerHigh h-1.5 overflow-hidden">
            <div className="bg-secondary h-full transition-all duration-1000 ease-in-out" style={{width: `${ram}%`}}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-outline mb-1.5">
            <span className="flex items-center gap-1.5 uppercase tracking-wide"><Activity size={12}/> GPU_VRAM</span>
            <span className="text-white">{vram.toFixed(1)}GB</span>
          </div>
          <div className="w-full bg-surfaceContainerHigh h-1.5 overflow-hidden">
            <div className="bg-tertiary h-full transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(0,230,57,0.5)]" style={{width: `${(vram/24)*100}%`}}></div>
          </div>
        </div>

        <div>
           <div className="flex justify-between text-outline mb-1.5">
            <span className="flex items-center gap-1.5 uppercase tracking-wide"><Network size={12}/> RAG_LATENCY</span>
            <span className="text-white">{Math.round(latency)}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
