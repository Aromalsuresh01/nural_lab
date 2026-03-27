# Technical Project Portfolio
**Consolidated AI, RAG, and Vision System Documentation**

---

# Commitment-MCP
**Model Context Protocol Server for Gmail Obligation Tracking**

## 🚀 Overview
Commitment-MCP is an intelligent server that automatically extracts, tracks, and manages commitments directly from your Gmail account. It solves the "lost in email" problem by identifying tasks you owe others and tasks others owe you.

## ✨ Key Features
- **Automated Extraction**: Uses Claude-3.5-Sonnet to identify commitments in natural language.
- **Bi-directional Tracking**: Monitors both inbound and outbound obligations.
- **Deadline Normalization**: Converts relative phrases (e.g., "by EOD Friday") into concrete timestamps.
- **Resolution Detection**: Checks thread history to see if a commitment was fulfilled.

## 🛠 Tech Stack
- **Languages**: Python 3.10+
- **Integrations**: Gmail API, Anthropic Claude API
- **Architecture**: Model Context Protocol (MCP), SQLite

## 🎨 Design Mapping
- **Stitch Screen**: Referenced in the "Developer Tools & Utilities" section of the main portfolio.
- **Aesthetic**: Technical, grid-based data layouts with "Logic Green" success indicators.

---
*GitHub: [Aromalsuresh01/Commitment-MCP](https://github.com/Aromalsuresh01/Commitment-MCP)*

---

# LLM Inference Calculator
**Model Hardware Requirement Estimator**

## 🚀 Overview
A fast, client-side web application designed to estimate hardware requirements for running Large Language Models (LLMs) locally. It helps users calculate VRAM, system RAM, and disk space for popular models like LLaMA 3 and Mistral.

## ✨ Key Features
- **Pre-configured Models**: Includes LLaMA 3, Mistral, Mixtral, Phi-3, Gemma, and more.
- **Quantization Support**: Analyzes memory impact across FP16, INT8, and GGUF formats.
- **Hardware Recommendations**: Suggests specific GPUs (RTX 3060, 4090, A100) and full PC/Server builds.
- **Privacy First**: All calculations are performed entirely on the client-side.

## 🛠 Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 🎨 Design Mapping
- **Stitch Screen**: *Hero: Neural Architect Home* and dedicated utility page.
- **Aesthetic**: High-contrast, brutalist technical layout with sharp 0px borders.

---
*GitHub: [Aromalsuresh01/LLM-Inference-Calculator](https://github.com/Aromalsuresh01/LLM-Inference-Calculator)*

---

# Speculative Streaming RAG
**Latency-Optimized Concurrent RAG Pipeline**

## 🚀 Overview
A full-stack RAG system that eliminates perceived latency through "Speculative Retrieval." It starts generating an answer before document retrieval finishes, performing a mid-stream correction if the grounded context contradicts the speculative draft.

## ✨ Key Features
- **Instant Generation**: Starts streaming within 1-2 seconds.
- **Mid-stream Correction**: Visual strike-through animation for speculative text when grounded data arrives.
- **Concurrent Tracks**: Parallelizes retrieval and generation tasks using `asyncio`.
- **Semantic Scoring**: Uses cosine similarity to determine if a speculative draft is accurate.

## 🛠 Tech Stack
- **Backend**: Python 3.11+, FastAPI, Ollama
- **UI**: React with WebSocket/SSE coordination
- **Logic**: Asyncio, Embeddings, Cosine Similarity

## 🎨 Design Mapping
- **Stitch Screen**: *Ultimate Neural Lab Vision (Animated)* and *Hero: AI Research Hero*.
- **Aesthetic**: "Glass-morphism" cards with interactive terminal-style feedback.

---
*GitHub: [Aromalsuresh01/Speculative_RAG](https://github.com/Aromalsuresh01/Speculative_RAG)*

---

# Glass-Box-RAG
**Real-Time RAG Latency Visualizer**

## 🚀 Overview
A transparency tool that transforms the RAG "black box" into a "glass box." It visualizes the internal stages of a RAG pipeline, tracking per-stage latency and token streaming in real-time.

## ✨ Key Features
- **Parallel Retrieval**: Simultaneously executes FAISS (dense) and BM25 (lexical) searches.
- **Observability Dashboard**: Real-time visualization of document retrieval, reranking, and generation timing.
- **Streaming Tokens**: High-speed token delivery directly to the UI via WebSockets.
- **Hybrid Search**: Combines semantic and keyword-based retrieval for higher accuracy.

## 🛠 Tech Stack
- **Backend**: FastAPI, Asyncio, FAISS, BM25
- **Frontend**: React-based dashboard
- **Networking**: WebSockets for real-time telemetry

## 🎨 Design Mapping
- **Stitch Screen**: *Animated Stack & Experience Log* and *Terminal & Contact Hub*.
- **Aesthetic**: Cyber-technical aesthetic with "Logic Green" pulses and architectural wiring diagrams.

---
*GitHub: [Aromalsuresh01/Glass-Box-RAG](https://github.com/Aromalsuresh01/Glass-Box-RAG)*

---

# Mini Streaming RAG App
**Local-First, Blazing-Fast RAG Pipeline**

## 🚀 Overview
A lightweight, full-stack RAG application optimized for speed and local execution. It uses local embeddings and an in-memory vector database to eliminate network latency, providing a near-instant response experience.

## ✨ Key Features
- **In-Memory Vector Search**: Uses FAISS for microsecond similarity lookups.
- **Local Embeddings**: Runs `all-MiniLM-L6-v2` entirely on the CPU (no external API calls).
- **SSE Streaming**: Server-Sent Events pipe tokens to the browser as they are generated.
- **Zero-Overhead Frontend**: Built with Vanilla JS to minimize browser rendering time.

## 🛠 Tech Stack
- **Backend**: FastAPI, Python 3.11+
- **Vector DB**: FAISS
- **Embeddings**: sentence-transformers (local)
- **Frontend**: Vanilla HTML/CSS/JS

## 🎨 Design Mapping
- **Stitch Screen**: *Aromal Suresh - Portfolio Details* (technical core components).
- **Aesthetic**: Minimalist, high-performance "Lab Output" style.

---
*GitHub: [Aromalsuresh01/Mini_Streaming_RAG_App](https://github.com/Aromalsuresh01/Mini_Streaming_RAG_App)*

---

# VisionRAG
**Secure Multimodal Product Intelligence System**

## 🚀 Overview
VisionRAG is a robust AI REST API that bridges the gap between image analysis and document-based reasoning. It uses YOLOv8 for visual object detection and ChromaDB for semantic retrieval, allowing users to ask complex questions based on both visual and textual evidence.

## ✨ Key Features
- **Multimodal Fusion**: Combines YOLOv8 image inference with ChromaDB vector context.
- **Security Firewall**: Features a strict prompt injection firewall and input sanitization context layer.
- **Image Validation**: Uses PIL-based byte verification to prevent extension spoofing.
- **Async Architecture**: High-throughput processing with Uvicorn and FastAPI.

## 🛠 Tech Stack
- **AI Models**: YOLOv8, all-MiniLM-L6-v2 (embeddings), Gemma 3 (LLM)
- **Database**: ChromaDB (local)
- **Backend**: FastAPI, Python 3.10+
- **Security**: Prompt Injection Filtering, HTML/Script stripping

## 🎨 Design Mapping
- **Stitch Screen**: *Hero: AI Research Hero* and vision-centric deep-dive slides.
- **Aesthetic**: Technical medical/industrial dashboard with high-fidelity grid layouts.

---
*GitHub: [Aromalsuresh01/visionRAG](https://github.com/Aromalsuresh01/visionRAG)*

---

# AI Tuberculosis Detection
**Automated TB Screening & Severity Assessment**

## 🚀 Overview
A mission-critical medical AI system designed to detect Tuberculosis (TB) lesions in chest X-rays. It moves beyond simple detection by calculating clinical risk scores, assessing severity, and generating structured medical reports for expert review.

## ✨ Key Features
- **YOLOv8 Detection**: Precise localization of TB lesions in chest X-rays.
- **Clinical Risk Scoring**: 0–100 score based on lesion count, area, and density.
- **Human-in-the-loop ML**: Improves classification accuracy over time using Reinforcement Learning from expert feedback.
- **Structured Reporting**: Generates industry-standard JSON medical reports automatically.

## 🛠 Tech Stack
- **Vision Model**: YOLOv8 (Transfer Learning from COCO)
- **RL Framework**: Custom Reinforcement Learning update module
- **Data Management**: Roboflow-compatible pipeline
- **Reporting**: JSON, Python-based report generator

## 🎨 Design Mapping
- **Stitch Screen**: Referenced as a core research project in the *Ultimate Neural Lab Vision*.
- **Aesthetic**: Clean, sterile, and professional medical interface with "Logic Green" highlights.

---
*GitHub: [Aromalsuresh01/Tuberculosis_AI_DETECTION](https://github.com/Aromalsuresh01/Tuberculosis_AI_DETECTION)*

---

# Car Damage Detection
**Production-Ready Visual Insurance Audit System**

## 🚀 Overview
An end-to-end computer vision pipeline for detecting vehicle damage. This system enables rapid insurance assessment by automatically identifying scratches, dents, broken glass, and bumper damage using high-accuracy deep learning models.

## ✨ Key Features
- **Multi-Class Detection**: Scratch, Dent, Broken Glass, Bumper Damage.
- **Real-Time Visualization**: Integrated Streamlit dashboard for interactive image uploads and result overlays.
- **Batch Processing**: Supports inference on large image/video sets via specialized CLI scripts.
- **Deployment Ready**: Fully containerized for easy scaling on cloud platforms.

## 🛠 Tech Stack
- **Architecture**: Ultralytics YOLOv8
- **UI**: Streamlit
- **Data Pipeline**: Custom relative-path directory structure, data.yaml
- **Environment**: Python 3.9+

## 🎨 Design Mapping
- **Stitch Screen**: *Hero: AI Research Hero* (Featured Case Study).
- **Aesthetic**: Industrial-focused, high-contrast visual display.

---
*GitHub: [Aromalsuresh01/car_damage_detection](https://github.com/Aromalsuresh01/car_damage_detection)*

---

# Web SEO AI
**Automated Technical & Content SEO Intelligence Crawler**

## 🚀 Overview
An advanced AI crawler that performs deep technical and visual audits of websites. It goes beyond text-based crawling by using YOLOv8 to visually inspect UI elements and identify design-based SEO issues.

## ✨ Key Features
- **Visual UI Inspection**: Uses YOLOv8 to detect navigation bars, hero sections, and buttons for structural audits.
- **Comprehensive Analysis**: Technical SEO scoring (0-100), CMS detection, and Tech Stack identification.
- **Finetune Generator**: Automatically creates JSONL datasets for training custom LLMs on SEO domain knowledge.
- **JS Fallback**: Selenium-driven crawling for modern SPA and JavaScript-heavy websites.

## 🛠 Tech Stack
- **Crawler**: BFS-based with Selenium fallback
- **Vision**: YOLOv8 (PyTorch)
- **Language Models**: Readability scoring (Flesch), Tech Stack detection signatures
- **Data**: Auto-generated fine-tuning datasets (JSONL)

## 🎨 Design Mapping
- **Stitch Screen**: *Terminal & Contact Hub* (Backend automation showcase).
- **Aesthetic**: Data-dense terminal style with high-fidelity telemetry visualizations.

---
*GitHub: [Aromalsuresh01/web-seo-ai](https://github.com/Aromalsuresh01/web-seo-ai)*

---

# Indian Document OCR
**Region-Specific Document Extraction System**

## 🚀 Overview
A specialized computer vision pipeline tailored for identifying and extracting data from Indian statutory documents. It handles complex document types like Aadhaar and PAN cards with high precision using a multi-stage detection and OCR workflow.

## ✨ Key Features
- **Two-Stage Detection**: Uses YOLO to locate document regions followed by specialized preprocessing for OCR optimization.
- **Regex-Driven Parsing**: Intelligent extraction of structured fields (Aadhaar number, DOB, PAN) using strict pattern matching.
- **Multi-Engine OCR**: Supports both EasyOCR (accuracy) and pytesseract (speed) depending on requirements.
- **Image Preprocessing**: Custom noise reduction and thresholding filters to handle varying scan quality.

## 🛠 Tech Stack
- **Detection**: YOLO (Region/Class identification)
- **OCR Engine**: EasyOCR, pytesseract
- **Processing**: OpenCV, PIL, Gaussian Blur, Binaural thresholding
- **Parsing**: Advanced Regular Expressions

## 🎨 Design Mapping
- **Stitch Screen**: Integrated into the "Developer Tools & Utilities" section of the main portfolio.
- **Aesthetic**: Clean, structured data tables with high-contrast document overlays.

---
*GitHub: [Aromalsuresh01/indian-document-ocr](https://github.com/Aromalsuresh01/indian-document-ocr)*
