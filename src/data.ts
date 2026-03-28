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
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "React 18": "https://cdn.simpleicons.org/react/61DAFB",
  "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
  "Python": "https://cdn.simpleicons.org/python/3776AB",
  "Ollama": "https://cdn.simpleicons.org/ollama/FFFFFF",
  "Asyncio": "https://cdn.simpleicons.org/python/FFD43B",
  "YOLOv8": "https://cdn.simpleicons.org/ultralytics/111F68",
  "OpenCV": "https://cdn.simpleicons.org/opencv/5C3EE8",
  "PyTorch": "https://cdn.simpleicons.org/pytorch/EE4C2C",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Vite": "https://cdn.simpleicons.org/vite/646CFF",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "Streamlit": "https://cdn.simpleicons.org/streamlit/FF4B4B",
  "Selenium": "https://cdn.simpleicons.org/selenium/43B02A",
  "Cosine Similarity": "https://img.shields.io/badge/Math-Cosine_Sim-blue?style=flat-square",
  "FAISS": "https://img.shields.io/badge/Meta-FAISS-0668E1?style=flat-square&logo=meta",
  "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
  "ChromaDB": "https://img.shields.io/badge/Vector-ChromaDB-FF6F61?style=flat-square",
  "all-MiniLM-L6-v2": "https://img.shields.io/badge/HF-MiniLM-FFD21E?style=flat-square&logo=huggingface",
  "Transfer Learning": "https://img.shields.io/badge/AI-Transfer_Learning-8A2BE2?style=flat-square",
  "RL Module": "https://img.shields.io/badge/AI-RL_Module-FF6347?style=flat-square",
  "Roboflow": "https://cdn.simpleicons.org/roboflow/6706CE",
  "MCP": "https://img.shields.io/badge/Protocol-MCP-FF8C00?style=flat-square",
  "Claude-3.5": "https://cdn.simpleicons.org/anthropic/191919",
  "Gmail API": "https://cdn.simpleicons.org/gmail/EA4335",
  "SQLite": "https://cdn.simpleicons.org/sqlite/003B57",
  "NLP": "https://img.shields.io/badge/AI-NLP-32CD32?style=flat-square"
};

export const education = [
  {
    degree: "Master of Computer Applications (AI & Data Science)",
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

export interface LabReport {
  id: string;
  title: string;
  date: string;
  classification: string;
  tags: string[];
  abstract: string;
  readTime: string;
  relatedProject?: string;
  sections: { heading: string; content: string }[];
}

export const labReports: LabReport[] = [
  {
    id: "speculative-retrieval",
    title: "Speculative Retrieval: Beating RAG Latency with Parallel Execution",
    date: "2025-12-15",
    classification: "RESEARCH",
    tags: ["RAG", "Asyncio", "Latency Optimization", "LLM"],
    abstract: "Standard RAG pipelines suffer from sequential bottlenecks — retrieve, then generate. This report documents a speculative execution approach that begins LLM generation before retrieval completes, achieving a 60% reduction in time-to-first-token.",
    readTime: "6 min",
    relatedProject: "Speculative Streaming RAG",
    sections: [
      {
        heading: "The Latency Problem",
        content: "In conventional RAG architectures, the retrieval step blocks generation entirely. Users stare at a loading spinner for 200-500ms while the vector database returns relevant chunks. Only after retrieval completes does the LLM begin generating tokens. This sequential dependency creates perceived latency that degrades user experience, especially in conversational interfaces where responsiveness is critical."
      },
      {
        heading: "Speculative Execution Model",
        content: "Inspired by CPU branch prediction, our approach speculatively begins LLM generation using the query alone, while retrieval runs in parallel. The system uses Python's asyncio to manage both coroutines concurrently. A semantic similarity scorer continuously evaluates whether the speculative output aligns with retrieved context. If divergence exceeds a threshold (cosine similarity < 0.72), the stream triggers a mid-course correction — seamlessly splicing retrieved context into the ongoing generation."
      },
      {
        heading: "Results & Trade-offs",
        content: "TTFT dropped from ~120ms to 45ms — a 62.5% improvement. The correction rate averaged 23% of queries, meaning 77% of speculative generations were contextually accurate without intervention. The primary trade-off is increased compute: dual LLM calls occur during corrections. However, the perceptual latency gain far outweighs the marginal cost, particularly for interactive applications."
      }
    ]
  },
  {
    id: "yolov8-medical",
    title: "Transfer Learning YOLOv8 for Medical Imaging: Lessons from TB Detection",
    date: "2025-11-03",
    classification: "CASE_STUDY",
    tags: ["YOLOv8", "Medical AI", "Transfer Learning", "Computer Vision"],
    abstract: "Adapting a general-purpose object detection model for medical lesion detection is non-trivial. This report covers the architectural decisions, data augmentation strategies, and RL-based feedback loops that achieved 98.2% sensitivity on TB X-ray classification.",
    readTime: "8 min",
    relatedProject: "AI Tuberculosis Detection",
    sections: [
      {
        heading: "Why YOLOv8 for Medical Imaging?",
        content: "Medical imaging traditionally favors classification-focused architectures (ResNet, EfficientNet). However, TB lesion detection requires both localization and classification — identifying where the lesion is and what type it represents. YOLOv8's anchor-free detection head and efficient backbone make it surprisingly well-suited for this task, especially after transfer learning from COCO-pretrained weights."
      },
      {
        heading: "Data Pipeline & Augmentation",
        content: "Working with medical data presents unique challenges: limited dataset size (~2,400 annotated X-rays from Roboflow), class imbalance (healthy >> TB-positive), and strict annotation quality requirements. Our augmentation pipeline included histogram equalization, elastic deformation (to simulate anatomical variation), and mosaic augmentation at 50% probability. Critically, we avoided geometric augmentations that could flip anatomical orientation — a common mistake that degrades medical model accuracy."
      },
      {
        heading: "RL-Based Expert Feedback Loop",
        content: "The system incorporates a reinforcement learning module that adjusts detection confidence thresholds based on expert radiologist feedback. When a doctor flags a false negative, the RL agent reduces the confidence threshold for similar lesion patterns, effectively making the model more cautious for edge cases. This closed-loop refinement improved sensitivity from 94.1% to 98.2% over three iteration cycles."
      }
    ]
  },
  {
    id: "mcp-gmail-intelligence",
    title: "Building MCP Servers for Gmail Intelligence: Architecture Deep-Dive",
    date: "2026-01-22",
    classification: "TECHNICAL",
    tags: ["MCP", "Claude 3.5", "Gmail API", "SQLite", "Agentic AI"],
    abstract: "Model Context Protocol enables LLMs to interact with external tools through a standardized interface. This report documents the architecture of an MCP server that transforms Gmail into an intelligent commitment tracking system, extracting deadlines and obligations from email threads.",
    readTime: "7 min",
    relatedProject: "Commitment-MCP",
    sections: [
      {
        heading: "MCP Architecture Overview",
        content: "The Model Context Protocol defines a client-server paradigm where the LLM (Claude 3.5) acts as the client, and our custom server exposes tools for Gmail interaction. The server implements three core tools: `search_emails` (query Gmail with natural language), `extract_commitments` (parse obligations from threads), and `check_deadlines` (reconcile commitments against dates). Each tool returns structured JSON that Claude uses for reasoning."
      },
      {
        heading: "Commitment Extraction Pipeline",
        content: "Email threads are parsed using a multi-stage NLP pipeline. First, we segment threads into individual messages and strip signatures/forwards. Then, obligation-bearing sentences are identified using pattern matching (\"I will\", \"Please ensure\", \"by [date]\") combined with Claude's semantic understanding. Deadlines are normalized using dateparser, handling relative dates (\"next Friday\"), ambiguous formats, and timezone-aware timestamps. Results are persisted in SQLite with FTS5 indexing for fast full-text search."
      },
      {
        heading: "State Management & Resolution Tracking",
        content: "The SQLite backend maintains a state machine for each commitment: PENDING → IN_PROGRESS → COMPLETED/OVERDUE. The system monitors subsequent emails in the same thread to detect implicit resolution (e.g., \"Done, deployed to production\" resolves a deployment commitment). This heuristic-based resolution achieves 91% extraction success rate, with the remaining 9% typically involving ambiguous or conditional commitments."
      }
    ]
  }
];
