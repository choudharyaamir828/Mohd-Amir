import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";


export const HERO_CONTENT = `Hi, My name is Mohd Amir I am a software  Developer . Currently I am in 7th semester , I have honed my skills in front-end technologies like Html,CSS and Tailwind CSS, as well as back-end technologies like Python,Django, MySQL, PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer, I have worked with a variety of technologies, including Python, MySQL, PostgreSQL,c++. My journey in  development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  
  {
    year: "April 2024 - July 2024",
    role: "Virtual Internship",
    company: "EduSkills & Google for Developer",
    description: `This program provided me valuable hands-on experience in the field fo Artificial Intelligence and Machine Learing. During this Intership I have made a project Diabetes Predection Model using Machine Learing.`,
    technologies: ["HTML", "CSS", "Machine Learning", "Python"],
  },
  {
    year: "july 2023 - August 2023",
    role: "Machine Learning Intern",
    company: "Freecodecamp",
    description: `During the Internship I have made 2 Project Wine Classification and Iris Flowers Classification using the power of Machine Learning Algorithms.`,
    technologies: ["Python", "Machine Learning", "Pandas","Numpy","Matplotlib"],
  },
  
];

export const PROJECTS = [
  {
    title: "Diabetes prediction",
    image: project1,
    description:
      "this project is a web-based application that predicts the lilelihood of diabetes using machine Learning this website is built using python for backend rpcessing, integrated with a machine learning model.",
    technologies: ["HTML", "CSS", "python", "Machine Learning","Flask" ,"Render"],
    link: "https://diabetesprediction-ml.onrender.com/",
  },
  {
    title: "Plant Identifier",
    image: project3,
    description:
      "PlantWise is an AI-powered plant identification and care application that enables users to easily identify plants through image uploads and receive detailed insights on plant species. Designed to support plant enthusiasts, gardeners, and hobbyists, the app provides comprehensive information on plant characteristics, growing conditions, care tips, pest control methods, and more.",
    technologies: [ "CSS", "React", "Tailwind css","Next.js","Google Generative AI","Git","Render"],
    link:"https://plantwise-nii2.onrender.com"
  },
  
  {
    title: "Razorpay clone",
    image: project2,
    description:
      "This project is a fully responsive clone of Razorpay, designed to replicate the appearance of the popular payment gateway's website. the clone is bulit using html, css and Tailwind css.",
    technologies: ["HTML", "CSS","Tailwind CSS"],

  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind css","javascript"],
    link:"mohd-amir-3btx4fa8v-choudharyaamir828s-projects.vercel.app"
  },
 
  


];

export const CONTACT = {
  address: "Ludhiana, Puniab",
  phoneNo: "7302605506 ",
  email: "choudharyaamir828@gmail.com",
};
