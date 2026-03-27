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
  cloud: ["AWS", "Git", "GitHub", "Docker"],
  domains: ["Data Analytics", "Research & Product Analysis", "Intelligent Automation"]
};

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  techIcons?: Record<string, string>; // Mapping of tech name to icon URL
  metrics: string[];
  links: {
    github: string;
    demo?: string;
  };
  details: {
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
  };
}

export const TECH_ICONS: Record<string, string> = {
  "React": "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "React 18": "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "FastAPI": "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
  "Python": "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  "Ollama": "https://raw.githubusercontent.com/ollama/ollama/main/docs/assets/ollama.png",
  "Asyncio": "https://raw.githubusercontent.com/python-trio/trio/master/logo/trio.svg", 
  "YOLOv8": "https://raw.githubusercontent.com/ultralytics/assets/main/logos/logo-yolov8.png",
  "OpenCV": "https://cdn.worldvectorlogo.com/logos/opencv.svg",
  "PyTorch": "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg",
  "Tailwind CSS": "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  "Vite": "https://cdn.worldvectorlogo.com/logos/vitejs.svg",
  "TypeScript": "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "MongoDB": "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  "Docker": "https://cdn.worldvectorlogo.com/logos/docker.svg",
  "Streamlit": "https://cdn.worldvectorlogo.com/logos/streamlit.svg",
  "Selenium": "https://cdn.worldvectorlogo.com/logos/selenium-1.svg",
  "Cosine Similarity": "https://www.svgrepo.com/show/443621/math-symbols.svg",
  "FAISS": "https://raw.githubusercontent.com/facebookresearch/faiss/main/docs/img/faiss_logo.png",
  "LangChain": "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png",
  "ChromaDB": "https://www.trychroma.com/logos/chroma-logo.svg",
  "all-MiniLM-L6-v2": "https://img.shields.io/badge/SentenceTransformers-all--MiniLM--L6--v2-blue",
  "Transfer Learning": "https://img.shields.io/badge/Concept-Transfer%20Learning-lightgrey",
  "RL Module": "https://img.shields.io/badge/Concept-Reinforcement%20Learning-lightgrey",
  "Roboflow": "https://cdn.worldvectorlogo.com/logos/roboflow.svg",
  "MCP": "https://img.shields.io/badge/Protocol-MCP-orange",
  "Claude-3.5": "https://img.shields.io/badge/LLM-Claude%203.5-blueviolet",
  "Gmail API": "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg",
  "SQLite": "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
  "NLP": "https://img.shields.io/badge/Concept-NLP-green"
};

export const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "JIMS Rohini Sec 3"
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Singhania University"
  }
];

export const linguisticProficiency = ["English", "Hindi", "Malayalam"];

export const projects: Project[] = [
  {
    id: "visionrag",
    title: "VisionRAG",
    category: "AI_RESEARCH",
    description: "Robust AI REST API bridging image analysis and document reasoning. Uses YOLOv8 for visual detection and ChromaDB for semantic retrieval, featuring strict prompt injection firewalls.",
    technologies: ["YOLOv8", "all-MiniLM-L6-v2", "ChromaDB", "FastAPI", "Python"],
    metrics: ["LATENCY: < 120ms", "ACCURACY: 94%"],
    links: {
      github: "Aromalsuresh01/visionRAG"
    },
    details: {
      problem: "Image-to-text reasoning gap in standard RAG.",
      solution: "YOLOv8-based object detection combined with vector retrieval.",
      architecture: "Python/FastAPI backbone with ChromaDB vector store.",
      features: ["Visual Element Detection", "Semantic Search", "Prompt Injection Firewall"]
    }
  },
  {
    id: "tb-detection",
    title: "AI Tuberculosis Detection",
    category: "MEDICAL_AI",
    description: "Mission-critical medical AI system detecting TB lesions in chest X-rays. Calculates risk scores and assesses severity, leveraging Reinforcement Learning from expert feedback.",
    technologies: ["YOLOv8", "Transfer Learning", "RL Module", "Roboflow"],
    metrics: ["SENSITIVITY: 98.2%", "F1_SCORE: 0.96"],
    links: {
      github: "Aromalsuresh01/Tuberculosis_AI_DETECTION"
    },
    details: {
      problem: "Late detection of TB in rural areas.",
      solution: "automated X-ray analysis with RL-based refinement.",
      architecture: "YOLOv8 architecture for lesion localization.",
      features: ["Lesion Segmentation", "Risk Assessment", "Expert Feedback Loop"]
    }
  },
  {
    id: "speculative-rag",
    title: "Speculative Streaming RAG",
    category: "LLM_SYSTEMS",
    description: "Eliminates perceived latency through 'Speculative Retrieval'. Streams initial answers before retrieval finishes, with programmatic mid-stream correction via semantic scoring.",
    technologies: ["Asyncio", "FastAPI", "Ollama", "Cosine Similarity", "React"],
    metrics: ["TTFT: 45ms", "LATENCY_REDUCTION: 60%"],
    links: {
      github: "Aromalsuresh01/Speculative_RAG"
    },
    details: {
      problem: "High latency in standard RAG streaming.",
      solution: "Speculative execution of LLM generation with parallel retrieval.",
      architecture: "Full-stack Asyncio integration.",
      features: ["Low Latency Streaming", "Mid-stream Correction", "Semantic Scoring"]
    }
  },
  {
    id: "commitment-mcp",
    title: "Commitment-MCP",
    category: "INTELLIGENT_AGENTS",
    description: "Intelligent Model Context Protocol server that automatically extracts, tracks, and manages commitments from Gmail. Normalizes deadlines and checks thread resolution.",
    technologies: ["MCP", "Claude-3.5", "Gmail API", "SQLite", "Python"],
    metrics: ["EXTRACTION_SUCCESS: 91%", "RECALL: High"],
    links: {
      github: "Aromalsuresh01/Commitment-MCP"
    },
    details: {
      problem: "Fragmented professional commitments in email threads.",
      solution: "MCP-based agentic extractor and tracker.",
      architecture: "SQLite-backed state management for Claude 3.5.",
      features: ["Deadline Normalization", "Gmail Integration", "Status Tracking"]
    }
  },
  {
    id: "llm-calc",
    title: "LLM Inference Calculator",
    category: "COMPUTE_TOOLS",
    description: "Fast, client-side web app estimating hardware requirements for local LLMs. Analyzes VRAM across FP16 and GGUF quantization formats for LLaMA 3, Mistral, and more.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    metrics: ["ACCURACY: 99.9%", "SPEED: Instant"],
    links: {
      github: "Aromalsuresh01/LLM-Inference-Calculator"
    },
    details: {
      problem: "Uncertainty in home-lab hardware scaling.",
      solution: "Precise VRAM/RAM math for various quantization levels.",
      architecture: "Client-only React implementation.",
      features: ["VRAM Estimation", "Quantization Comparison", "Hardware Recommender"]
    }
  },
  {
    id: "web-seo-ai",
    title: "Web SEO AI",
    category: "VISUAL_INTELLIGENCE",
    description: "Advanced AI crawler performing deep technical audits. Uses YOLOv8 to visually inspect UI elements. Includes BFS crawler, readability scoring, and fine-tune dataset generation.",
    technologies: ["Selenium", "YOLOv8", "NLP", "Python"],
    metrics: ["AUDIT_DEPTH: High", "VISUAL_ACCURACY: 89%"],
    links: {
      github: "Aromalsuresh01/web-seo-ai"
    },
    details: {
      problem: "Missing visual context in traditional SEO crawlers.",
      solution: "YOLOv8-powered UI inspection during crawl.",
      architecture: "Python BFS crawler with Selenium orchestration.",
      features: ["Visual UI Audits", "BFS Crawling", "Readability Analysis"]
    }
  }
];
