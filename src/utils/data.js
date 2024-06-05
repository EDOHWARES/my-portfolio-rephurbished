// Skill Icons 
import { CgWebsite } from "react-icons/cg";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

export const SKILLS = [
    {
        title: 'Frontend',
        icon: {frontend: CgWebsite},
        skills: [
            {skill: 'HTML5', percentage: '80%'},
            {skill: 'CSS3 (Sass/SCSS)', percentage: '90%'},
            {skill: 'Javascript', percentage: '75%'},
            {skill: 'React.js', percentage: '80%'},
            {skill: 'TailwindCSS', percentage: '90%'},
            {skill: 'Bootstrap', percentage: '70%'},
        ]
    },
    {
        title: 'Backend',
        icon: {backend: PiSelectionBackgroundFill},
        skills: [
            {skill: 'Node.js', percentage: '50%'},
            {skill: 'Express.js', percentage: '65%'},
            {skill: 'MySQL', percentage: '50%'},
        ]
    },
    {
        title: 'Tools',
        icon: {tools: FaTools},
        skills: [
            {skill: 'Git & Github', percentage: '85%'},
            {skill: 'Visual Studio Code', percentage: '75%'},
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
        date: 'January 2022 - December 2022',
        responsibility: [
            "Led a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in patronage",
            "Implemented advanced CSS animations and transitions to enhance the overall user experience.",
            "Collaborated with UX/UI designers to translate wireframes and mockups into responisve and interactive web applications",
            "Introduced and Integrated React.js into the tech stack, improving code maintainability and development  efficiency."
        ]
    },
    {
        
    }
]