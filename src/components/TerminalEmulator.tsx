import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { profile, experience, skills, projects, education, linguisticProficiency } from '../data';
import MarioGame from './MarioGame';
import FlappyGame from './FlappyGame';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'system' | 'ascii';
  content: string;
}

const ASCII_BANNER = `
 ███╗   ██╗███████╗██╗   ██╗██████╗  █████╗ ██╗         ██╗      █████╗ ██████╗ 
 ████╗  ██║██╔════╝██║   ██║██╔══██╗██╔══██╗██║         ██║     ██╔══██╗██╔══██╗
 ██╔██╗ ██║█████╗  ██║   ██║██████╔╝███████║██║         ██║     ███████║██████╔╝
 ██║╚██╗██║██╔══╝  ██║   ██║██╔══██╗██╔══██║██║         ██║     ██╔══██║██╔══██╗
 ██║ ╚████║███████╗╚██████╔╝██║  ██║██║  ██║███████╗    ███████╗██║  ██║██████╔╝
 ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═════╝ 
`;

const HELP_TEXT = `
  [AVAILABLE_COMMANDS]

  help          Display this help menu
  about         Show researcher profile
  ask <query>   Query the Neural RAG Agent
  skills        List technical competencies
  projects      List all research projects
  cat <id>      Inspect a specific project
  contact       Display communication channels
  education     Show academic credentials
  languages     List linguistic proficiency
  resume        Download dossier (PDF)
  clear         Clear terminal buffer`;

function processCommand(input: string): TerminalLine[] {
  const trimmed = input.trim().toLowerCase();
  const parts = trimmed.split(/\s+/);
  const cmd = parts[0];
  const arg = parts.slice(1).join(' ');

  if (!cmd) return [];

  switch (cmd) {
    case 'help':
      return [{ type: 'output', content: HELP_TEXT }];

    case 'about':
      return [
        { type: 'output', content: `\n  [RESEARCHER_PROFILE]\n` },
        { type: 'output', content: `  Name:     ${profile.name}` },
        { type: 'output', content: `  Title:    ${profile.title}` },
        { type: 'output', content: `  Role:     ${profile.subtitle}` },
        { type: 'output', content: `  Location: ${profile.location}\n` },
      ];

    case 'skills': {
      const lines: TerminalLine[] = [
        { type: 'output', content: '\n  [TECHNICAL_COMPETENCIES]\n' },
      ];
      const categories: [string, string[]][] = [
        ['LANGUAGES', skills.languages],
        ['AI/ML', skills.ai],
        ['FRAMEWORKS', skills.frameworks],
        ['CLOUD/DEVOPS', skills.cloud],
        ['DOMAINS', skills.domains],
      ];
      for (const [cat, items] of categories) {
        lines.push({ type: 'output', content: `  ├── ${cat}` });
        items.forEach((item, i) => {
          const prefix = i === items.length - 1 ? '└──' : '├──';
          lines.push({ type: 'output', content: `  │   ${prefix} ${item}` });
        });
      }
      lines.push({ type: 'output', content: '' });
      return lines;
    }

    case 'projects': {
      const lines: TerminalLine[] = [
        { type: 'output', content: '\n  [PROJECT_REGISTRY]\n' },
        { type: 'output', content: '  ID                  TITLE                         CATEGORY' },
        { type: 'output', content: '  ─────────────────── ───────────────────────────── ──────────────────' },
      ];
      for (const p of projects) {
        lines.push({
          type: 'output',
          content: `  ${p.id.padEnd(20)} ${p.title.padEnd(30)} ${p.category}`,
        });
      }
      lines.push({ type: 'output', content: '\n  Use "cat <id>" to inspect a project.\n' });
      return lines;
    }

    case 'cat': {
      if (!arg) return [{ type: 'error', content: '  ERROR: Usage: cat <project_id>' }];
      const project = projects.find(p => p.id.toLowerCase() === arg.toLowerCase());
      if (!project) {
        return [{ type: 'error', content: `  ERROR: Project "${arg}" not found. Use "projects" to list available IDs.` }];
      }
      return [
        { type: 'output', content: `\n  ┌─── PROJECT_DOSSIER: ${project.title.toUpperCase()} ───` },
        { type: 'output', content: `  │` },
        { type: 'output', content: `  │  Category:     ${project.category}` },
        { type: 'output', content: `  │  Description:  ${project.description}` },
        { type: 'output', content: `  │` },
        { type: 'output', content: `  │  [TECH_STACK]` },
        ...project.technologies.map(t => ({ type: 'output' as const, content: `  │    • ${t}` })),
        { type: 'output', content: `  │` },
        { type: 'output', content: `  │  [METRICS]` },
        ...project.metrics.map(m => ({ type: 'output' as const, content: `  │    ▸ ${m}` })),
        { type: 'output', content: `  │` },
        { type: 'output', content: `  │  [PROBLEM]  ${project.details.problem}` },
        { type: 'output', content: `  │  [SOLUTION] ${project.details.solution}` },
        { type: 'output', content: `  │` },
        { type: 'output', content: `  │  GitHub: https://github.com/${project.links.github}` },
        { type: 'output', content: `  └────────────────────────────────────────\n` },
      ];
    }

    case 'contact':
      return [
        { type: 'output', content: '\n  [COMMUNICATION_CHANNELS]\n' },
        { type: 'output', content: `  ✉  Email:    ${profile.email}` },
        { type: 'output', content: `  ☎  Phone:    ${profile.phone}` },
        { type: 'output', content: `  ⌂  GitHub:   ${profile.github}` },
        { type: 'output', content: `  ◉  Location: ${profile.location}\n` },
      ];

    case 'education':
      return [
        { type: 'output', content: '\n  [ACADEMIC_CREDENTIALS]\n' },
        ...education.map(e => ({
          type: 'output' as const,
          content: `  ▸ ${e.degree}\n    └─ ${e.institution}`,
        })),
        { type: 'output', content: '' },
      ];

    case 'languages':
      return [
        { type: 'output', content: '\n  [LINGUISTIC_PROFICIENCY]\n' },
        ...linguisticProficiency.map(l => ({ type: 'output' as const, content: `  ▸ ${l}` })),
        { type: 'output', content: '' },
      ];

    case 'experience': {
      const lines: TerminalLine[] = [
        { type: 'output', content: '\n  [WORK_EXPERIENCE]\n' },
      ];
      for (const exp of experience) {
        lines.push({ type: 'output', content: `  ▸ ${exp.role} @ ${exp.company} — ${exp.location}` });
        exp.achievements.forEach(a => {
          lines.push({ type: 'output', content: `    • ${a}` });
        });
      }
      lines.push({ type: 'output', content: '' });
      return lines;
    }

    case 'resume':
      // Trigger download
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Aromal_Suresh_Resume.pdf';
      link.click();
      return [{ type: 'system', content: '  ⬇ Initiating DOSSIER download... resume.pdf' }];

    case 'clear':
      return []; // handled specially in component

    default:
      return [
        { type: 'error', content: `  Command not found: "${cmd}". Type "help" for available commands.` },
      ];
  }
}

export default function TerminalEmulator() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'ascii', content: ASCII_BANNER },
    { type: 'system', content: '  Neural Lab Terminal v2.0 — [RAG Agent Online]' },
    { type: 'system', content: '  Type "help" for system commands, or simply ask a question (e.g., "what is VisionRAG?").\n' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeGame, setActiveGame] = useState<'mario' | 'flappy' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [lines]);

  const handleSubmit = async () => {
    const command = input.trim();
    if (!command) return;

    const newHistory = [command, ...history.slice(0, 49)];
    setHistory(newHistory);
    setHistoryIndex(-1);

    if (command.toLowerCase() === 'clear') {
      setLines([]);
      setInput('');
      return;
    }

    if (command.toLowerCase() === 'mario') {
      setActiveGame('mario');
      setInput('');
      return;
    }

    if (command.toLowerCase() === 'flappy') {
      setActiveGame('flappy');
      setInput('');
      return;
    }

    const inputLine: TerminalLine = { type: 'input', content: `  visitor@neural-lab:~$ ${command}` };
    setLines(prev => [...prev, inputLine]);
    setInput('');

    const cmd = command.toLowerCase().split(/\s+/)[0];
    const arg = command.split(/\s+/).slice(1).join(' ');

    const validCommands = ['help', 'about', 'skills', 'projects', 'cat', 'contact', 'education', 'languages', 'experience', 'resume', 'clear'];
    const isSentence = command.trim().includes(' ');
    const isAskCommand = cmd === 'ask';
    
    const isAskQuery = isAskCommand || (!validCommands.includes(cmd) && isSentence);
    const queryArg = isAskCommand ? arg : command;

    if (isAskQuery) {
      if (!queryArg) {
        setLines(prev => [...prev, { type: 'error', content: '  ERROR: Usage: ask <query>' }]);
        return;
      }

      setLines(prev => [...prev, { type: 'system', content: '  [SYSTEM] Initializing Neural RAG Agent...' }]);
      await new Promise(r => setTimeout(r, 600));

      setLines(prev => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = { type: 'system', content: '  [SYSTEM] Searching vector space (ChromaDB) for context matches...' };
        return newLines;
      });
      await new Promise(r => setTimeout(r, 800));

      setLines(prev => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = { type: 'system', content: '  [SYSTEM] Context retrieved. Generating response...\n' };
        return newLines;
      });
      await new Promise(r => setTimeout(r, 500));

      let response = '';
      const q = queryArg.toLowerCase();
      
      if (q.includes('yolo') || q.includes('vision') || q.includes('image')) {
        response = 'I engineered VisionRAG, integrating YOLOv8 for precise object detection with Retrieval-Augmented Generation. It uses local embeddings (SentenceTransformers) and ChromaDB to enable complex image+text querying.';
      } else if (q.includes('seo') || q.includes('web') || q.includes('crawler')) {
        response = 'My Web SEO AI project is a production-ready crawler. It scores technical SEO and uses YOLOv8 to visually evaluate UI components, exporting structured datasets (JSONL) for LLM fine-tuning.';
      } else if (q.includes('hardware') || q.includes('calculator') || q.includes('inference')) {
        response = 'I developed an LLM Inference Calculator in React/TypeScript. It maps model parameters and quantization types to actual hardware requirements (VRAM/RAM) and provides specific PC build recommendations.';
      } else if (q.includes('tuberculosis') || q.includes('tb') || q.includes('medical') || q.includes('x-ray')) {
        response = 'For medical AI, I built a Tuberculosis Detection model using transfer learning on chest X-rays. I optimized the inference pipeline to ensure it could run efficiently on low-power edge medical devices.';
      } else if (q.includes('experience') || q.includes('job') || q.includes('work') || q.includes('ideas91')) {
        response = 'I am currently a Research Analyst at Ideas91 (Aug 2024 - Present), leading AI research, building n8n automation pipelines, and integrating LLM-based solutions into enterprise workflows.';
      } else if (q.includes('education') || q.includes('degree') || q.includes('mca') || q.includes('bca')) {
        response = 'I hold a Master of Computer Applications (AI & Data Science) from JIMS Rohini, and a Bachelor of Computer Applications from Singhania University.';
      } else if (q.includes('who are you') || q.includes('about') || q.includes('aromal')) {
        response = 'I am Aromal Suresh, an AI & RAG Engineer based in West Delhi. I specialize in latency-optimized RAG pipelines, autonomous agents, and computer vision.';
      } else if (q.includes('mcp') || q.includes('commit')) {
        response = 'I built the Commitment-MCP, an AI email tracking system that parses inbox data with strict JSON extraction criteria. It logs actionable requests and commitments made via email into a SQLite database with deterministic constraints.';
      } else {
        response = 'My simulated context window doesn\'t have a specific answer for that. Try asking about my experience with "YOLOv8", "RAG", "SEO", "Medical AI", or my "work history".';
      }

      setLines(prev => [...prev, { type: 'output', content: `  [AI_AGENT] ` }]);
      
      const words = response.split(' ');
      for (let i = 0; i < words.length; i++) {
          await new Promise(r => setTimeout(r, 45));
          setLines(prev => {
            const newLines = [...prev];
            newLines[newLines.length - 1] = { 
              type: 'output', 
              content: `  [AI_AGENT] ${words.slice(0, i + 1).join(' ')}`
            };
            return newLines;
          });
      }
      setLines(prev => [...prev, { type: 'output', content: '' }]);
      return;
    }

    // Process all other standard synchronous commands
    const outputLines = processCommand(command);
    setLines(prev => [...prev, ...outputLines]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-tertiary animate-pulse"></div>
        <h2 className="font-mono text-sm tracking-[0.3em] text-outline uppercase">
          Interactive_Terminal <span className="text-tertiary">[RAG_ENABLED]</span>
        </h2>
      </div>

      <div
        className="relative bg-[#060e20] border border-outlineVariant/30 overflow-hidden cursor-text"
        onClick={focusInput}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-surfaceContainerLow border-b border-outlineVariant/20">
          <div className="w-2.5 h-2.5 bg-red-500/70"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500/70"></div>
          <div className="w-2.5 h-2.5 bg-tertiary/70"></div>
          <span className="ml-3 font-mono text-[10px] text-outline tracking-widest">
            neural-lab — visitor@research-node-01
          </span>
        </div>

        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,230,57,0.1) 1px, rgba(0,230,57,0.1) 2px)',
          }}
        />

        {/* Terminal Output */}
        <div
          ref={scrollRef}
          className="h-[400px] overflow-y-auto font-mono text-xs leading-relaxed scrollbar-thin"
        >
          {activeGame === 'mario' ? (
            <MarioGame onExit={() => setActiveGame(null)} />
          ) : activeGame === 'flappy' ? (
            <FlappyGame onExit={() => setActiveGame(null)} />
          ) : (
            <div className="p-4">
              {lines.map((line, i) => (
                <div key={i} className={`${
                  line.type === 'ascii' ? 'text-tertiary/60 text-[9px] leading-none whitespace-pre' :
                  line.type === 'input' ? 'text-tertiary whitespace-pre-wrap' :
                  line.type === 'error' ? 'text-red-400 whitespace-pre-wrap' :
                  line.type === 'system' ? 'text-primary/60 italic whitespace-pre-wrap' :
                  'text-primary/90 whitespace-pre'
                }`}>
                  {line.content}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center text-tertiary mt-1">
                <span className="whitespace-pre">  visitor@neural-lab:~$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-tertiary font-mono text-xs caret-tertiary"
                  spellCheck={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
