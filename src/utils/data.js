// Skill Icons
import { CgWebsite } from "react-icons/cg";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

//Images
import det from "../assets/images/det.png";
import quiz from "../assets/images/quiz.png";
import foodDelivery from "../assets/images/food-delivery.png";
import adii from "../assets/images/adii.jpeg";
import eliteFood from "../assets/images/elite-food.png";
import safeRoute from "../assets/images/safeRoute.png";
import blogie from "../assets/images/blogie.png";
import coa_img from "../assets/images/coa.png";
import flipnet_img from "../assets/images/flipnet.png";
import budgetChain_img from "../assets/images/bugetChain.png";
import predifi_img from "../assets/images/predifi.png";

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
    title: "Full-Stack Web Developer at Cheapdotcom",
    date: "February 2023 – Present",
    responsibilities: [
      "Led the redesign of the company's flagship platform, increasing user engagement and boosting client acquisition by 30%.",
      "Integrated React.js into the existing tech stack, enhancing code modularity and reducing feature rollout time by 25%.",
      "Maintained and optimized multiple client websites, ensuring top-tier performance, accessibility, and SEO standards.",
    ],
  },
  {
    title: "Frontend Developer at CollideAfrica",
    date: "March 2023 – December 2023",
    responsibilities: [
      "Built and shipped key features for Collide’s Learning Management System (LMS) alongside a cross-functional team.",
      "Implemented responsive UI components using React and TailwindCSS, ensuring mobile-friendly interfaces.",
      "Collaborated with product designers to transform Figma mockups into dynamic, interactive pages using modern JavaScript and CSS animation techniques.",
    ],
  },
  {
    title: "Frontend Developer Intern at Zuri Training Program",
    date: "May 2023 – August 2023",
    responsibilities: [
      "Contributed to the development of a movie discovery web app using real-time APIs and React.js.",
      "Optimized frontend performance and reduced load time by 15% through lazy loading and efficient component structure.",
      "Worked in an agile environment with Git and GitHub for collaborative version control and issue tracking.",
    ],
  },
  {
    title: "Frontend Developer at HNG Internship (Remote)",
    date: "September 2023 – November 2023",
    responsibilities: [
      "Worked on real-world web applications in sprints, collaborating with backend engineers and product designers.",
      "Built reusable React components and wrote clean, testable code under tight deadlines.",
      "Participated in code reviews and daily stand-ups, enhancing team communication and code quality.",
    ],
  },
  {
    title: "Open Source Contributor – FreeCodeCamp",
    date: "January 2024 – Present",
    responsibilities: [
      "Contributed bug fixes and UI improvements to FreeCodeCamp's open-source curriculum platform.",
      "Reviewed and submitted pull requests, following community contribution guidelines and Git best practices.",
      "Actively engaged in the community forum, helping learners debug frontend issues and understand React fundamentals.",
    ],
  },
  {
    title: "Open Source Contributor – OnlyDust",
    date: "April 2024 – Present",
    responsibilities: [
      "Contributed to web3-related open source projects through the OnlyDust platform, focusing on frontend enhancements and bug fixes.",
      "Collaborated with global contributors and project maintainers in async workflows using GitHub and community tools.",
      "Engaged in technical discussions, issue triaging, and reviewing contributions to ensure high code quality and consistency.",
    ],
  },
];

export const Projects = [
  {
    title: "FlipNet (Open Source Contribution)",
    imageUrl: flipnet_img,
    description:
      "FlipNet is a next-generation prediction market on Starknet, where players stake tokens to forecast event outcomes. Contribution: Implemented the landing page using modern responsive design techniques.",
    link: "https://github.com/Web3Novalabs/FlipNet",
  },
  {
    title: "ADii Commodity Trend Platform",
    imageUrl: adii,
    description:
      "ADii is a platform that provides users with real-time commodity prices and trend analysis across different Nigerian states. Contribution: Developed the full platform using the MERN stack.",
    link: "https://github.com/EDOHWARES/ADii",
  },
  {
    title: "Citizen of Arcanis (Open Source Contribution)",
    imageUrl: coa_img,
    description:
      "Citizen of Arcanis is an immersive on-chain MMORPG set in a cyberpunk universe, blending factions, economies, and player choices. Contribution: Enhanced visuals and user experience for faction interactions.",
    link: "https://github.com/SunsetLabs-Game/COA-Website",
  },
  {
    title: "BudgetChain (Open Source Contribution)",
    imageUrl: budgetChain_img,
    description:
      "BudgetChain is an AI-powered treasury management system on StarkNet for DAOs to manage and optimize resources. Contribution: Built a scalable and functional demo page for the web app.",
    link: "https://github.com/BudgetChain/BudgetChain-Frontend",
  },
  {
    title: "SafeRoute-NG",
    imageUrl: safeRoute,
    description:
      "SafeRoute-NG is a web app offering real-time insights into road conditions, built to enhance safety for transporters, logistics companies, and passengers. Contribution: Led the full-stack development of the platform.",
    link: "https://github.com/EDOHWARES/SafeRoute-NG",
  },
  {
    title: "Predifi (Open Source Contribution)",
    imageUrl: predifi_img,
    description:
      "Predifi is a decentralized outcome prediction protocol on StarkNet, allowing users to bet on future events securely and transparently. Contribution: Built the user dashboard interface and handled data integration.",
    link: "https://github.com/Web3Novalabs/predifi-frontend",
  },
];
