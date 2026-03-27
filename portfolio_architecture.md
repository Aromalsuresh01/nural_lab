# Neural Lab Portfolio - Architecture & Features Map

This document serves as a semantic map for future AI agents to quickly understand the structure, features, and styling logic of the Neural Lab portfolio application built for Aromal Suresh.

## 📁 Core Codebase Structure
- `src/App.tsx`: The primary React Application. Contains all the UI sections, logic, and animation timings.
- `src/data.ts`: The centralized Content Management file. All text, projects, skills, and links MUST be pulled from here.
- `src/index.css`: The styling engine. Powered by **Tailwind CSS v4**. Contains global theme variables, generic animations (`float`, `scanline`), and custom utility classes like `.glass-panel` and `.terminal-box`.

---

## 🧩 UI Sections & Components

### 1. Global Interface Layout
- **Atmosphere**: Uses fixed radial blurs (`bg-hero-gradient`) to simulate ambient light bleed in a dark "research facility" environment.
- **Header**: Fixed, blurred sticky bar displaying the system label (`NEURAL_LAB // AROMAL SURESH`) and simulated network status.
- **Footer**: Displays dynamic copyright year and the fixed `SYSTEM_UPTIME` metric.

### 2. Hero Section 
- **Typography Matrix**: The primary title uses dynamic width parameters (`break-all`) to guarantee zero overflow for large words like `RESEARCH_ARCHITECT`.
- **Command Directives (Buttons)**: 
  - `GITHUB_REPO`: Box-border styled outbound link.
  - `INIT_CONNECTION`: Highly saturated, glowing "mail-to" link using tertiary green (`#00E639`).
- **Terminal Simulator (`.terminal-box`)**: 
  - Simulates a system login script (`sys_log.sh`).
  - **Animations**: The card itself hovers (`animate-float`). A CRT pass scans downward (`animate-scanline`). Internally, text logs stagger fade-in (`animate-fade-in-up`), wrapping up with a React-based `<Typewriter>` component.

### 3. Project Index (LAB_INDEX)
- **Data Iteration**: Maps directly from the `projects` array in `data.ts`.
- **Project Cards**: 
  - Standardized `.glass-panel` design with `group-hover` reactive glows.
  - Displays strict categorization: numerical index, tagline, and real-time development status badges (`STABLE`, `PROTO`, `PROD`).
  - Feature tags (e.g., `PyTorch`, `Vite`) are looped individually below the description.
  - **Click Event**: Updates `selectedProject` state to trigger the modal.

### 4. Capabilities Matrix & Experience Timeline
- **Capabilities Matrix**: Renders a 3-part grid pulling from `skills.ai`, `skills.languages/frameworks`, and `skills.cloud`. Differentiated by unique icon injections.
- **Field Experience**: A vertical timeline traversing the `experience` array. Shows Role, Corporation, and bulleted achievements (`►`).

### 5. Project Inspector Modal
- **State Mechanics**: A React overlay triggered when `selectedProject` is not null. Blocks background page scroll while active.
- **User Flow**: High-contrast overlay that can be dismissed by clicking the background shadow or the explicit `[ESC]` button.
- **Content**: Displays an un-truncated, deep-dive architectural view of the project, including its current network status and a massive action button to reach the repository.

---

## 🎨 Design System (Google Stitch Standard)
- **Motive**: Cold, calculating, high-fidelity engineering aesthetic.
- **Color Palette**:
  - `Background`: Deep Abyss `#0b1326`
  - `Primary Text`: Soft Ice `#b1c7f2`
  - `Accent / Success`: Logic Green `#00E639` (Tertiary)
- **Font Stack**: 
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Data / Labels: `Space Mono`
- **Golden Rule**: Absolutely **NO ROUNDED CORNERS**. `border-radius: 0` is strictly enforced globally to mimic hardware interface design.

---

## 🤖 Future Agent Directives
If you are an agent reading this to understand how to update the portfolio:
1. **Content Edits**: Do not touch `App.tsx`. Edit strings, add new projects, or modify tags directly in `src/data.ts`.
2. **New UI Components**: Always wrap new visual elements in the `.glass-panel` class for consistency. Use Space Mono for any labels or small text elements.
3. **Animations**: Leverage native CSS variables inside `index.css` via the `@theme` directive if you need to create entirely new animation behaviors.
