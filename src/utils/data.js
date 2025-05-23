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
      { skill: "NextJs", percentage: "100%" },
      { skill: "React.js", percentage: "100%" },
      { skill: "TailwindCSS", percentage: "100%" },
      { skill: "Javascript", percentage: "100%" },
      { skill: "Typescript", percentage: "100%" },
      { skill: "HTML5", percentage: "100%" },
      { skill: "CSS3 (SASS/SCSS)", percentage: "100%" },
      { skill: "Bootstrap", percentage: "100%" },
    ],
  },
  {
    title: "Backend",
    icon: { backend: PiSelectionBackgroundFill },
    skills: [
      { skill: "Node.js", percentage: "100%" },
      { skill: "Express.js", percentage: "100%" },
      { skill: "MongoDB", percentage: "100" },
      { skill: "MySQL", percentage: "100%" },
    ],
  },
  {
    title: "Tools",
    icon: { tools: FaTools },
    skills: [
      { skill: "Git & Github", percentage: "100%" },
      { skill: "Visual Studio Code", percentage: "100%" },
      { skill: "Responsive Design", percentage: "100%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: { softSkills: GiSkills },
    skills: [
      { skill: "Problem-solving", percentage: "100%" },
      { skill: "Collaboration", percentage: "100%" },
      { skill: "Attention to Details", percentage: "100%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Full-Stack Web Developer at Cheapdotcom",
    date: "February 2023 - till date",
    responsibilities: [
      "Collaborated with a team of web developers in the redesign of the company's flagship product, resulting in a 30% increase in patronage",
      "Introduced and Integrated React.js into the tech stack, improving code maintainability and development  efficiency.",
      "Developed and maintained client websites, ensuring high quality standards and timely project delivery.",
    ],
  },
  {
    title: "Intern Frontend Developer at CollideAfrica",
    date: "March 2023 - December 2023",
    responsibilities: [
      "Collaborated with a team of developers in building the Collide's LMS(Learning Management System)",
      "Implemented advanced CSS animations and transitions to enhance the overall user experience.",
      "Collaborated with UX/UI designers to translate wireframes and mockups into responisve and interactive web applications",
    ],
  },
  {
    title: "Zuri Internship(Frontend Developer)",
    date: "May 2023 - August 2023",
    responsibilities: [
      "Participated in developing a movie-web applications using real-time movie API'S",
      "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
      "Gained hands-on experience with version control systems, specifically Git in a collaborative project.",
    ],
  },
];

export const Projects = [
  {
    title: "FlipNet(Open Source Contribution)",
    imageUrl: flipnet_img,
    description:
      "FlipNet is the next-generation prediction market on Starknet where players stake tokens to forecast event outcomes. Contribution details: Implemented FlipNet landing page.",
    link: "https://github.com/Web3Novalabs/FlipNet",
  },
  {
    title: "ADii Commodity Trend Platform",
    imageUrl: adii,
    description:
      "This website focuses on providing users with prices and trends of commodities across different states in Nigeria. I utilized the MERN-STACK in developing this platform.",
    link: "https://github.com/EDOHWARES/ADii",
  },
  {
    title: "Citizen of Arcanis(Open Source Contribution)",
    imageUrl: coa_img,
    description:
      "An immersive on-chain multiplayer MMORPG set in a vibrant cyberpunk universe. Players assume the role of Citizens-reborn warriors navigating a world rich with rival factions, intricate economies, and impactful decisions. \n\n Contribution details: I helped improved the faction visuals",
    link: "https://github.com/SunsetLabs-Game/COA-Website",
  },
  {
    title: "BudgetChain(Open Source Contribution)",
    imageUrl: budgetChain_img,
    description:
      "An AI-powered treasury management system built on StarkNet designed to revolutionize how DAOs manage, allocate, and optimize their financial resources. Contribution details: I helped build a scalable and comprehensive demo working page of the web app.",
    link: "https://github.com/BudgetChain/BudgetChain-Frontend",
  },
  {
    title: "SafeRoute-NG",
    imageUrl: safeRoute,
    description:
      "SafeRoute-NG is a web solution designed to provide real-time data on road conditions. It aims to enhance communication and data flow for transporters, logistics companies. passengers and all road users..",
    link: "https://github.com/EDOHWARES/SafeRoute-NG",
  },
  {
    title: "Predifi",
    imageUrl: predifi_img,
    description:
      "a decentralized outcome prediction protocol built on StartkNet that enables users to wager on future events in a secure, transparent, and trustless manner. Contribution detials: I helped build the user's dashboard.",
    link: "https://github.com/Web3Novalabs/predifi-frontend",
  },
];
