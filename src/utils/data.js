// Skill Icons
import { CgWebsite } from "react-icons/cg";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

//Images
import bault from "../assets/images/bault_img.png";
import adii from "../assets/images/adii.jpeg";
import safeRoute from "../assets/images/safeRoute.png";
import coa_img from "../assets/images/coa.png";
import predifi_img from "../assets/images/predifi.png";
import inheritx from "../assets/images/inheritx_img.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: { frontend: CgWebsite },
    skills: [
      { skill: "Next.js", percentage: "100%" },
      { skill: "React.js", percentage: "100%" },
      { skill: "Tailwind CSS", percentage: "100%" },
      { skill: "JavaScript (ES6+)", percentage: "100%" },
      { skill: "TypeScript", percentage: "100%" },
      { skill: "HTML5", percentage: "100%" },
      { skill: "CSS3 / SASS", percentage: "100%" },
      { skill: "Bootstrap", percentage: "100%" },
    ],
  },
  {
    title: "Backend",
    icon: { backend: PiSelectionBackgroundFill },
    skills: [
      { skill: "Node.js", percentage: "100%" },
      { skill: "Express.js", percentage: "100%" },
      { skill: "MongoDB", percentage: "100%" },
      { skill: "MySQL", percentage: "100%" },
      { skill: "Prisma ORM", percentage: "100%" },
      { skill: "RESTful APIs", percentage: "100%" },
      { skill: "GraphQL", percentage: "100%" },
      { skill: "JWT Authentication", percentage: "100%" },
      { skill: "Socket.io (Real-time)", percentage: "100%" },
      { skill: "Mongoose ODM", percentage: "100%" },
      { skill: "API Security (OAuth2, CORS)", percentage: "100%" },
      { skill: "Serverless Functions", percentage: "100%" },
      { skill: "Docker & Containerization", percentage: "100%" },
      { skill: "Microservices Architecture", percentage: "100%" },
      { skill: "Unit & Integration Testing", percentage: "100%" },
      { skill: "CI/CD Pipelines", percentage: "100%" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: { tools: FaTools },
    skills: [
      { skill: "Git & GitHub", percentage: "100%" },
      { skill: "VS Code", percentage: "100%" },
      { skill: "Postman", percentage: "100%" },
      { skill: "Figma (for Dev Handoff)", percentage: "100%" },
      { skill: "Chrome DevTools", percentage: "100%" },
      { skill: "Responsive Design", percentage: "100%" },
      { skill: "Agile / Scrum", percentage: "100%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: { softSkills: GiSkills },
    skills: [
      { skill: "Problem Solving", percentage: "100%" },
      { skill: "Team Collaboration", percentage: "100%" },
      { skill: "Attention to Detail", percentage: "100%" },
      { skill: "Adaptability", percentage: "100%" },
      { skill: "Communication", percentage: "100%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Lead Backend Engineer at StellarChain Labs",
    date: "January 2026 – Present",
    responsibilities: [
      "Architecting and scaling distributed backend systems for DeFi and blockchain analytics platforms, supporting millions of transactions monthly.",
      "Leading a team of engineers in implementing microservices, event-driven architectures, and advanced API security protocols (OAuth2, JWT, rate limiting).",
      "Driving adoption of containerization (Docker, Kubernetes) and CI/CD automation, reducing deployment times and increasing system reliability.",
    ],
  },
  {
    title: "Senior Full-Stack Developer at NexGen Solutions",
    date: "February 2025 – December 2025",
    responsibilities: [
      "Delivered high-impact features for enterprise SaaS products, focusing on backend performance, API integrations, and frontend scalability.",
      "Mentored junior developers and led code reviews, ensuring best practices in Node.js, PostgreSQL, and React development.",
      "Collaborated with cross-functional teams to launch a real-time analytics dashboard, leveraging WebSockets and serverless functions.",
    ],
  },
  {
    title: "Full-Stack Developer at Cheapdotcom",
    date: "February 2023 – Present",
    responsibilities: [
      "Architected the migration of a legacy monolithic platform to a modern React & Node.js microservices architecture, reducing deployment cycles by 40%.",
      "Optimized database performance through query indexing and Redis caching, resulting in a 50% improvement in page load speeds and enhanced scalability.",
      "Spearheaded the integration of automated CI/CD pipelines and unit testing suites, achieving a 99.9% uptime for the flagship application.",
    ],
  },
  {
    title: "Backend Engineer (Contract) at CloudPath Systems",
    date: "January 2024 – Present",
    responsibilities: [
      "Designed and implemented high-concurrency RESTful APIs using Node.js and PostgreSQL to handle over 100k+ daily active users.",
      "Developed a custom authentication and authorization framework using JWT and OAuth2, significantly increasing platform security and user trust.",
      "Containerized backend services using Docker and orchestrated deployments on AWS ECS, reducing infrastructure costs by 20%.",
    ],
  },
  {
    title: "Frontend Developer at CollideAfrica",
    date: "March 2023 – December 2023",
    responsibilities: [
      "Led the frontend strategy for a large-scale Learning Management System (LMS), ensuring a highly responsive and accessible user experience for 50k+ learners.",
      "Collaborated with product designers to implement a custom, reusable Design System with React and TailwindCSS, cutting frontend development time for new features by 30%.",
      "Mentored junior developers on best practices in state management (Redux/Zustand) and asynchronous data fetching patterns.",
    ],
  },
  {
    title: "Web Solutions Consultant at NexGen Solutions",
    date: "August 2022 – February 2023",
    responsibilities: [
      "Delivered end-to-end full-stack solutions for enterprise clients, focusing on scalability, performance, and internationalization.",
      "Integrated third-party payment gateways and real-time communication features using Socket.io to enhance user engagement for e-commerce platforms.",
      "Conducted thorough technical audits and performance profiling for client websites, achieving significant gains in Core Web Vitals and SEO rankings.",
    ],
  },
  {
    title: "Open Source Contributor – Drips, OnlyDust & FreeCodeCamp",
    date: "January 2024 – Present",
    responsibilities: [
      "Contributing to the Stellar ecosystem through the Drips platform, building high-impact tools and features that connect developers with open-source project funding and sustainability.",
      "Architected and implemented complex UI components and core logic for decentralized (Starknet/Stellar) and educational platforms, focusing on high-quality code and community standards.",
      "Automated documentation generation and improved testing coverage (15%+) for critical open-source modules used by thousands of global developers.",
    ],
  },
  {
    title: "Software Engineering Fellow at HNG Internship",
    date: "September 2023 – November 2023",
    responsibilities: [
      "Rapidly engineered robust full-stack features in high-pressure, sprint-based environments, consistently meeting tight deadlines for multi-user platforms.",
      "Focused on cross-functional collaboration, bridging the gap between product requirements and technical implementation for real-world applications.",
      "Authored clean, maintainable, and well-documented code, contributing to a 100% success rate in feature delivery within the program.",
    ],
  },
];

export const Projects = [
  {
    title: "Bault — AutoFi Bot Marketplace & Vault Management Platform",
    imageUrl: bault,
    description:
      "Fintech/Web3 platform for managing automated trading strategies via customizable vaults. Built a scalable React frontend with dashboards, bot marketplace, and performance tracking (APY), integrated with Stellar for seamless blockchain interactions.",
    link: "https://github.com/BAULTIFY/Bault",
  },
  {
    title: "SafeRoute-NG",
    imageUrl: safeRoute,
    description:
      "Web platform providing real-time road condition insights for safer and more efficient transportation. Built end-to-end, featuring dynamic data visualization and location-based updates tailored for logistics and commuter use.",
    link: "https://github.com/EDOHWARES/SafeRoute-NG",
  },
  {
    title: "InheritX — Digital Asset Inheritance Platform",
    imageUrl: inheritx,
    description:
      "Blockchain-based platform for automating the inheritance of digital assets using secure, time-locked smart contract execution. Contributed to building responsive dashboards and multi-role workflows (owners, beneficiaries, guardians) with Next.js, and integrated StarkNet for secure, trustless transactions.",
    link: "https://github.com/skill-mind/InheritX-web-app",
  },
  {
    title: "Predifi — Decentralized Prediction Protocol (Open Source)",
    imageUrl: predifi_img,
    description:
      "Contributed to a StarkNet-based prediction protocol enabling users to forecast and trade on future events. Built and optimized the user dashboard, integrating dynamic data flows for real-time interaction and performance tracking.",
    link: "https://github.com/Web3Novalabs/predifi-frontend",
  },
];
