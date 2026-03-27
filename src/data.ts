export const profile = {
  name: "Aromal Suresh",
  title: "AI & RAG Engineer",
  subtitle: "RESEARCH_ARCHITECT",
  email: "aromal01suresh@gmail.com",
  phone: "+91 70428 23389",
  location: "West Delhi, India",
  github: "github.com/Aromalsuresh01"
};

export const experience = [
  {
    role: "Research Analyst",
    company: "Ideas91",
    location: "New Delhi",
    achievements: [
      "Led AI-focused research and development initiatives, evaluating emerging tools.",
      "Built and deployed automation workflows using n8n, reducing manual effort.",
      "Conducted data analytics to derive insights supporting technical strategies.",
      "Collaborated cross-functionally with product and engineering teams on AI integration."
    ]
  }
];

export const skills = {
  languages: ["Python", "SQL", "Java", "C"],
  ai: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP / LLMs", "YOLOv8", "RAG Pipelines", "FAISS"],
  frameworks: ["FastAPI", "Streamlit", "n8n Automation", "React", "Node.js"],
  cloud: ["AWS", "Git", "GitHub", "Docker"]
};

export const projects = [
  {
    id: "visionrag",
    name: "VisionRAG",
    tagline: "Multimodal Product Intelligence",
    description: "Robust AI REST API bridging image analysis and document reasoning. Uses YOLOv8 for visual detection and ChromaDB for semantic retrieval, featuring strict prompt injection firewalls.",
    tech: ["YOLOv8", "all-MiniLM-L6-v2", "ChromaDB", "FastAPI", "Python"],
    status: "STABLE",
    github: "Aromalsuresh01/visionRAG"
  },
  {
    id: "tb-detection",
    name: "AI Tuberculosis Detection",
    tagline: "Medical AI Screening",
    description: "Mission-critical medical AI system detecting TB lesions in chest X-rays. Calculates risk scores and assesses severity, leveraging Reinforcement Learning from expert feedback.",
    tech: ["YOLOv8", "Transfer Learning", "RL Module", "Roboflow"],
    status: "RESEARCH",
    github: "Aromalsuresh01/Tuberculosis_AI_DETECTION"
  },
  {
    id: "speculative-rag",
    name: "Speculative Streaming RAG",
    tagline: "Latency-Optimized RAG",
    description: "Eliminates perceived latency through 'Speculative Retrieval'. Streams initial answers before retrieval finishes, with programmatic mid-stream correction via semantic scoring.",
    tech: ["Asyncio", "FastAPI", "Ollama", "Cosine Similarity", "React"],
    status: "STABLE",
    github: "Aromalsuresh01/Speculative_RAG"
  },
  {
    id: "commitment-mcp",
    name: "Commitment-MCP",
    tagline: "Gmail Obligation Tracker",
    description: "Intelligent Model Context Protocol server that automatically extracts, tracks, and manages commitments from Gmail. Normalizes deadlines and checks thread resolution.",
    tech: ["MCP", "Claude-3.5", "Gmail API", "SQLite", "Python"],
    status: "BETA",
    github: "Aromalsuresh01/Commitment-MCP"
  },
  {
    id: "llm-calc",
    name: "LLM Inference Calculator",
    tagline: "Hardware Compute Estimator",
    description: "Fast, client-side web app estimating hardware requirements for local LLMs. Analyzes VRAM across FP16 and GGUF quantization formats for LLaMA 3, Mistral, and more.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
    status: "STABLE",
    github: "Aromalsuresh01/LLM-Inference-Calculator"
  },
  {
    id: "web-seo-ai",
    name: "Web SEO AI",
    tagline: "Visual SEO Intelligence",
    description: "Advanced AI crawler performing deep technical audits. Uses YOLOv8 to visually inspect UI elements. Includes BFS crawler, readability scoring, and fine-tune dataset generation.",
    tech: ["Selenium", "YOLOv8", "NLP", "Python"],
    status: "STABLE",
    github: "Aromalsuresh01/web-seo-ai"
  }
];
