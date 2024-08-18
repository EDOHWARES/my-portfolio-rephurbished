// Skill Icons 
import { CgWebsite } from "react-icons/cg";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

//Images
import det from '../assets/images/det.png';
import quiz from '../assets/images/quiz.png';
import adii from '../assets/images/adii-commodity.png';
import foodDelivery from '../assets/images/food-delivery.png';

export const SKILLS = [
    {
        title: 'Frontend',
        icon: {frontend: CgWebsite},
        skills: [
            {skill: 'HTML5', percentage: '100%'},
            {skill: 'CSS3 (SASS/SCSS)', percentage: '90%'},
            {skill: 'Javascript', percentage: '95%'},
            {skill: 'React.js', percentage: '90%'},
            {skill: 'TailwindCSS', percentage: '96%'},
            {skill: 'Bootstrap', percentage: '70%'},
        ]
    },
    {
        title: 'Backend',
        icon: {backend: PiSelectionBackgroundFill},
        skills: [
            {skill: 'Node.js', percentage: '90%'},
            {skill: 'Express.js', percentage: '95%'},
            {skill: 'MongoDB', percentage: '70'},
            {skill: 'MySQL', percentage: '80%'},
        ]
    },
    {
        title: 'Tools',
        icon: {tools: FaTools},
        skills: [
            {skill: 'Git & Github', percentage: '85%'},
            {skill: 'Visual Studio Code', percentage: '85%'},
            {skill: 'Responsive Design', percentage: '85%'},
        ]
    },
    {
        title: 'Soft Skills',
        icon: {softSkills: GiSkills},
        skills: [
            {skill: 'Problem-solving', percentage: '85%'},
            {skill: 'Collaboration', percentage: '75%'},
            {skill: 'Attention to Details', percentage: '85%'},
        ]
    },

]

export const WORK_EXPERIENCE = [
    {
        title: 'Junior Frontend Developer at Cheapdotcom',
        date: 'February 2023 - November 2023',
        responsibilities: [
            "Collaborated with a team of Frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in patronage",
            "Introduced and Integrated React.js into the tech stack, improving code maintainability and development  efficiency.",
            "Developed and maintained client websites, ensuring high quality standards and timely project delivery."
        ]
    },
    {
        title: 'Intern Frontend Developer at CollideAfrica',
        date: 'March 2023 - December 2023',
        responsibilities: [
            "Collaborated with a team of developers in building the Collide's LMS(Learning Management System)",
            "Implemented advanced CSS animations and transitions to enhance the overall user experience.",
            "Collaborated with UX/UI designers to translate wireframes and mockups into responisve and interactive web applications",
        ]
    },
    {
        title: 'Zuri Internship(Frontend Developer)',
        date: 'May 2023 - August 2023',
        responsibilities: [
            "Participated in developing a movie-web applications using real-time movie API'S",
            "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
            "Gained hands-on experience with version control systems, specifically Git in a collaborative project.",
        ]
    }
];

export const Projects = [
    {
        title: 'ADii Commodity Trend Platform',
        imageUrl: adii,
        description: 'This is an ongoing project. This website focuses on providing users with prices and trends of commodities across different states in Nigeria. I utilized the MERN-STACK in developing this platform.',
        link: "https://github.com/EDOHWARES/ADii"
    },
    {
        title: 'Food Delivery Platform',
        imageUrl: foodDelivery,
        description: 'This website replicates all the functionality necessary to make food orders, delivery and logistics. It also includes a payment and order management system. I utilized the MERN-STACK in developing this website.'
    },
    {
        title: 'Quiz App',
        imageUrl: quiz,
        description: "This web application built with react.js and tailwindcss provides a seamless UI and hands-on interview quiz for techies to test themselves.",
        link: 'https://edquiz-app.netlify.app/' 
    },
    {
        title: 'Matrix Determinant Calculator',
        imageUrl: det,
        description: "This web application serves as a handy tool  for calculating the determinant of a square matrix seamlessly. High school and college students can utilize this web calculator.",
        link: 'https://edohwares-determinant-calculator.netlify.app/'
    }
]