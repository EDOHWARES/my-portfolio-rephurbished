// System Profile & Data Model for Emmanuel Edoh

import bault from "../assets/images/bault_img.png";
import safeRoute from "../assets/images/safeRoute.png";
import inheritx from "../assets/images/inheritx_img.png";
import predifi_img from "../assets/images/predifi.png";
import me from "../assets/images/me.jpeg";

export const PERSONAL_INFO = {
  name: "Emmanuel Edoh",
  handle: "0xedohwarez",
  title: "Software Engineer | Full-Stack & AI Systems",
  location: "Lagos, Nigeria (Available for Global Remote & Contract Roles)",
  email: "edohemmanuel4real@gmail.com",
  github: "https://github.com/EDOHWARES",
  twitter: "https://x.com/0xedohwarez",
  resumeUrl: "https://drive.google.com/file/d/1HRD6SSg5qsPON-FuaWdj-tVFhGlaUqev/view?usp=sharing",
  avatar: me,
  status: "AVAILABLE FOR ENGINEERING & AI EVALUATION ROLES",
  targetPlatforms: [
    { name: "Turing", role: "Software / AI Evaluation Engineer" },
    { name: "Mindrift", role: "AI Tutor / Code Quality Evaluator" },
    { name: "Mercor", role: "Full-Stack / AI Systems Engineer" },
    { name: "micro1", role: "Senior Developer / AI Specialist" },
    { name: "AfterQuery", role: "AI & Model Evaluation Specialist" },
  ]
};

export const CORE_CAPABILITIES = [
  {
    id: "fullstack",
    title: "Full-Stack Systems",
    iconName: "Server",
    summary: "Architecting end-to-end production applications with Node.js, TypeScript, React/Next.js, and relational/document databases.",
    highlights: [
      "High-throughput RESTful & GraphQL microservice APIs",
      "Authentication frameworks (OAuth2, JWT, RBAC)",
      "Database schema optimization (PostgreSQL, MongoDB, Redis caching)",
      "Containerization & CI/CD deployment pipelines (Docker, AWS, Vercel)"
    ]
  },
  {
    id: "ai-eval",
    title: "AI Engineering & Model Evaluation",
    iconName: "BrainCircuit",
    summary: "Rigorously evaluating LLM code generation, model behavior, correctness, and multi-turn technical reasoning.",
    highlights: [
      "LLM code output verification & vulnerability detection",
      "Ground-truth dataset curation & edge-case stress testing",
      "AI coding agent integration (Tool calling, structured outputs, JSON validation)",
      "Prompt red-teaming, hallucination audit & technical accuracy grading"
    ]
  },
  {
    id: "emerging",
    title: "Systems & Web3 Protocols",
    iconName: "Cpu",
    summary: "Developing high-security protocol interfaces, event indexers, and automated blockchain interactions.",
    highlights: [
      "StarkNet & Stellar SDK smart contract integrations",
      "Time-locked vault execution logic & cryptographic key flows",
      "Real-time state synchronization via WebSockets & indexed data",
      "Open-source modular tool contributions (Drips, OnlyDust)"
    ]
  }
];

export const AI_EVALUATION_WORKFLOWS = [
  {
    id: "code-eval",
    title: "Code Generation & Quality Audit",
    description: "Evaluating model-generated JavaScript, TypeScript, Python, and Rust code against strict production standards.",
    aspects: ["Functional Correctness", "Security & Vulnerability Scanning", "Edge-Case Handling", "Algorithmic Efficiency"]
  },
  {
    id: "red-teaming",
    title: "Model Red-Teaming & Stress Testing",
    description: "Constructing multi-turn adversarial prompts to surface hallucinations, logic fallacies, and boundary failures in technical domains.",
    aspects: ["Adversarial Prompting", "Hallucination Auditing", "Context Window Limits", "Instruction Following Compliance"]
  },
  {
    id: "benchmark",
    title: "Ground-Truth Reference Solutions",
    description: "Authoring unambiguous, highly optimized canonical code solutions and unit tests used as evaluation benchmarks.",
    aspects: ["Clean Architecture", "Unit Test Coverage", "Strict Typing & Annotations", "Detailed Technical Explanations"]
  },
  {
    id: "agentic",
    title: "AI Coding Agent Engineering",
    description: "Integrating LLMs into automated development workflows using tool-calling schemas, static analysis, and execution feedback loops.",
    aspects: ["Tool Call Schemas", "Execution Feedback Parsing", "Context Optimization", "Automated Linting & Fixes"]
  }
];

export const PROJECTS = [
  {
    id: "bault",
    title: "Bault — AutoFi Bot Marketplace & Vault Platform",
    category: "Full-Stack & Web3",
    tag: "Fintech / DeFi",
    imageUrl: bault,
    summary: "Automated yield trading strategy platform featuring bot marketplace and dynamic vault management.",
    problem: "Managing automated trading strategies across decentralized protocols requires real-time analytics, user auth, and sub-second vault status visualization without relying on centralized bottlenecks.",
    solution: "Engineered a React & Node.js web application integrated with Stellar blockchain SDKs, delivering dynamic APY tracking, automated vault execution, and real-time bot transaction metrics.",
    keyChallenges: [
      "Optimized real-time state synchronization between blockchain nodes and frontend visualizer.",
      "Implemented secure wallet connection flows and transaction payload verification.",
      "Designed a responsive dashboard architecture capable of rendering complex yield curves."
    ],
    techStack: ["React.js", "Node.js", "Stellar SDK", "Tailwind CSS", "REST API", "JavaScript ES6+"],
    link: "https://github.com/BAULTIFY/Bault",
    featured: true
  },
  {
    id: "saferoute",
    title: "SafeRoute-NG — Real-Time Logistics Incident Alert Platform",
    category: "AI & Systems",
    tag: "Systems / Geospatial",
    imageUrl: safeRoute,
    summary: "Logistics intelligence web platform delivering real-time road safety and condition insights for transit routes.",
    problem: "Commuters and logistics managers lack unified, real-time spatial awareness of road hazards, security risks, and transit obstructions.",
    solution: "Architected an end-to-end full-stack geospatial platform with location-based reporting, real-time alert updates, and interactive mapping dashboards.",
    keyChallenges: [
      "Handled spatial query processing with high concurrency and low latency.",
      "Implemented user reporting submission validation and data sanitization routines.",
      "Optimized map render performance across mobile viewports."
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "React.js", "Leaflet/Maps API", "Tailwind CSS"],
    link: "https://github.com/EDOHWARES/SafeRoute-NG",
    featured: true
  },
  {
    id: "inheritx",
    title: "InheritX — Digital Asset Inheritance Protocol",
    category: "Full-Stack & Web3",
    tag: "Security / Smart Contracts",
    imageUrl: inheritx,
    summary: "Blockchain-based platform for automated digital asset inheritance via time-locked smart contracts.",
    problem: "Traditional asset transfer mechanisms are centralized, fragile, and fail to ensure private, trustless automated succession of digital assets.",
    solution: "Developed multi-role workflow dashboards (owners, beneficiaries, guardians) using Next.js, connecting seamlessly to StarkNet smart contract execution triggers.",
    keyChallenges: [
      "Engineered multi-party authorization states and guardian approval workflows.",
      "Built resilient client-side decryption key handling and time-lock countdown visualization.",
      "Optimized Next.js Server Side Rendering for low-latency initial asset loads."
    ],
    techStack: ["Next.js", "TypeScript", "StarkNet", "Cairo", "Tailwind CSS", "Web3.js"],
    link: "https://github.com/skill-mind/InheritX-web-app",
    featured: true
  },
  {
    id: "predifi",
    title: "Predifi Protocol — Decentralized Prediction Market Analytics",
    category: "Full-Stack & Web3",
    tag: "Analytics / Protocol",
    imageUrl: predifi_img,
    summary: "StarkNet prediction protocol dashboard enabling user forecasting and real-time trade execution visualization.",
    problem: "Complex event-based prediction markets often suffer from cluttered interfaces, high telemetry latency, and opaque odds calculation.",
    solution: "Contributed frontend architecture and dynamic data indexing layers to present real-time probability charts, trade history, and portfolio balances.",
    keyChallenges: [
      "Designed dynamic data polling and GraphQL event indexing integration.",
      "Built modular component primitives for high-frequency price change re-renders."
    ],
    techStack: ["React.js", "TypeScript", "StarkNet", "GraphQL", "Tailwind CSS"],
    link: "https://github.com/Web3Novalabs/predifi-frontend",
    featured: true
  },
  {
    id: "evalforge",
    title: "EvalForge — Automated Model Evaluation & Benchmarking Harness",
    category: "AI & Systems",
    tag: "AI Engineering / Benchmarking",
    imageUrl: null, // Custom generated modern SVG graphic in UI
    summary: "Automated evaluation framework for testing LLM code generation, prompt adherence, and static code correctness.",
    problem: "Evaluating code generation models manually is prone to subjectiveness and fails to catch edge-case logic bugs or security oversights.",
    solution: "Built a CLI & dashboard harness that executes generated code samples in isolated sandboxes, running AST analysis, automated linter checks, and test suite verification.",
    keyChallenges: [
      "Constructed isolated execution pipelines with strict timeout and resource bounds.",
      "Implemented fine-grained scoring metrics based on test pass rates, lint warnings, and token efficiency."
    ],
    techStack: ["TypeScript", "Node.js", "Python", "LLM APIs", "Docker", "Jest"],
    link: "https://github.com/EDOHWARES",
    featured: true
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Lead Backend Engineer",
    company: "StellarChain Labs",
    period: "January 2026 – Present",
    type: "Full-time / Remote",
    summary: "Architecting and scaling distributed backend microservices for blockchain analytics and transaction processing platforms.",
    contributions: [
      "Designed event-driven backend microservices in Node.js & TypeScript supporting high-concurrency API requests.",
      "Implemented security architecture standards including OAuth2, JWT authentication, rate limiting, and CORS guards.",
      "Containerized microservices with Docker and automated deployment pipelines, increasing deployment reliability."
    ],
    tech: ["Node.js", "TypeScript", "Docker", "PostgreSQL", "OAuth2", "Redis", "CI/CD"]
  },
  {
    role: "Senior Full-Stack Developer",
    company: "NexGen Solutions",
    period: "February 2025 – December 2025",
    type: "Full-time / Remote",
    summary: "Delivered backend microservices, real-time dashboard interfaces, and performance optimizations for enterprise SaaS applications.",
    contributions: [
      "Built low-latency real-time telemetry dashboards leveraging WebSockets, serverless endpoints, and React.",
      "Optimized SQL query performance in PostgreSQL and led code reviews for Node.js and React codebases.",
      "Mentored junior engineers on REST API design, state management, and strict TypeScript patterns."
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "WebSockets", "TypeScript", "Tailwind CSS"]
  },
  {
    role: "Full-Stack Developer",
    company: "Cheapdotcom",
    period: "February 2023 – Present",
    type: "Contract",
    summary: "Architected monolith-to-microservices migration and performance overhaul for core web platforms.",
    contributions: [
      "Spearheaded legacy codebase migration to modular React & Node.js services, improving deployment cycle speed by 40%.",
      "Implemented Redis caching layers and database indexing, achieving a 50% improvement in page load speeds.",
      "Integrated CI/CD testing workflows achieving near 100% operational uptime for flagship services."
    ],
    tech: ["React.js", "Node.js", "Redis", "MongoDB", "Express", "Docker"]
  },
  {
    role: "Backend Engineer (Contract)",
    company: "CloudPath Systems",
    period: "January 2024 – Present",
    type: "Contract",
    summary: "Engineered high-concurrency RESTful APIs and cloud backend infrastructure.",
    contributions: [
      "Developed custom REST API endpoints handling over 100k+ daily requests with tight response time SLAs.",
      "Implemented custom authorization middleware with JWT tokens and granular role-based access control (RBAC).",
      "Orchestrated backend application containers on AWS ECS, optimizing cloud infrastructure resource efficiency."
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "AWS ECS", "Docker", "JWT"]
  },
  {
    role: "Open Source Contributor",
    company: "Drips, OnlyDust & FreeCodeCamp",
    period: "January 2024 – Present",
    type: "Open Source",
    summary: "Building open-source tools, developer funding utilities, and modular UI components in global ecosystems.",
    contributions: [
      "Contributed UI components and state logic for developer funding platforms operating on Stellar and StarkNet.",
      "Automated documentation generation and increased test coverage across critical open-source modules.",
      "Reviewed community pull requests for code formatting, type safety, and architectural consistency."
    ],
    tech: ["React", "TypeScript", "Stellar", "StarkNet", "Git", "Jest"]
  },
  {
    role: "Frontend Developer",
    company: "CollideAfrica",
    period: "March 2023 – December 2023",
    type: "Contract",
    summary: "Directed frontend strategy for a large-scale Learning Management System (LMS) serving 50k+ learners.",
    contributions: [
      "Created a reusable custom React + Tailwind CSS Design System, speeding up new feature development cycles by 30%.",
      "Ensured strict WCAG accessibility compliance and mobile responsiveness across all core user flows."
    ],
    tech: ["React.js", "Tailwind CSS", "Redux", "REST APIs", "Accessibility (a11y)"]
  }
];

export const TECH_STACK = {
  languages: [
    { name: "TypeScript", icon: "Code2", description: "Strict typing, generics, interfaces, Node & React" },
    { name: "JavaScript (ES6+)", icon: "FileCode", description: "Async/await, functional programming, DOM/Node runtimes" },
    { name: "Python", icon: "Terminal", description: "Model evaluation scripts, benchmarking, data processing" },
    { name: "SQL", icon: "Database", description: "Relational queries, index optimization, PostgreSQL & MySQL" },
    { name: "HTML5 / CSS3", icon: "Layout", description: "Semantic markup, responsive layouts, modern CSS" }
  ],
  frontend: [
    { name: "React 18", icon: "Layers", description: "Hooks, Context, Custom hooks, Concurrent features" },
    { name: "Next.js", icon: "Globe", description: "App Router, SSR, ISR, Server Components, API routes" },
    { name: "Tailwind CSS", icon: "Palette", description: "Utility-first design systems, custom themes, dark modes" },
    { name: "State Management", icon: "Cpu", description: "Redux Toolkit, Zustand, React Query / TanStack" },
    { name: "WebSockets", icon: "Radio", description: "Real-time client synchronization & streaming events" }
  ],
  backend: [
    { name: "Node.js", icon: "Server", description: "Event loop architecture, stream handling, REST & GraphQL" },
    { name: "Express.js", icon: "Network", description: "Middleware chains, authentication, API rate limiting" },
    { name: "PostgreSQL", icon: "Database", description: "Complex joins, indexing, transactions, Prisma ORM" },
    { name: "MongoDB", icon: "Database", description: "Document schemas, aggregations, Mongoose ODM" },
    { name: "Redis", icon: "Zap", description: "In-memory caching, session storage, rate limit counters" },
    { name: "Auth & Security", icon: "ShieldCheck", description: "JWT, OAuth2, bcrypt, CORS, input sanitization" }
  ],
  aiAndEval: [
    { name: "LLM Evaluation", icon: "BrainCircuit", description: "Code correctness, security audit, response grading" },
    { name: "Model Red-Teaming", icon: "Flame", description: "Adversarial prompting, hallucination testing" },
    { name: "Benchmark Curation", icon: "CheckSquare", description: "Ground-truth canonical code & unit test suites" },
    { name: "AI Coding Agents", icon: "Bot", description: "Tool-calling schemas, structured JSON validation" },
    { name: "Prompt Design", icon: "Sparkles", description: "Multi-turn system prompts, context window management" }
  ],
  devopsAndTools: [
    { name: "Git & GitHub", icon: "GitBranch", description: "Branching strategies, PR code reviews, Actions" },
    { name: "Docker", icon: "Container", description: "Multi-stage containerization & local dev compose" },
    { name: "Linux / Bash", icon: "Terminal", description: "Shell scripting, server environment configuration" },
    { name: "AWS & Vercel", icon: "Cloud", description: "ECS deployment, serverless functions, edge routing" },
    { name: "Postman & Insomnia", icon: "Send", description: "API testing, spec documentation, collection mocks" }
  ]
};

export const ABOUT_TEXT = {
  headline: "Engineering robust software systems with modern AI capabilities.",
  paragraph1: "I am a software engineer focused on building high-performance full-stack applications, scalable backend microservices, and reliable technical systems. Over the past 3+ years, I have engineered production solutions across fintech platforms, real-time spatial awareness applications, and decentralized smart contract interfaces.",
  paragraph2: "As AI tools and large language models reshape software development, my work extends into AI-assisted engineering and LLM model evaluation. I evaluate model code output, design rigorous benchmark datasets, perform red-teaming against hallucinations, and build automated evaluation harnesses for platforms demanding precise technical reasoning.",
  paragraph3: "Whether architecting a Node.js/TypeScript backend API, building complex React/Next.js interfaces, or evaluating model performance on advanced engineering tasks for platforms like Turing, Mindrift, Mercor, micro1, and AfterQuery, I prioritize technical clarity, system reliability, and clean execution."
};
