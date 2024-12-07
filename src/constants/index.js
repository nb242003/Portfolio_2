import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate Information Technology student and aspiring full-stack developer with hands-on experience in developing robust and user-friendly web applications. My expertise lies in front-end technologies like React and Tailwind CSS, as well as back-end systems using Node.js, PHP, MySQL, and MongoDB. With a strong foundation in software development and a focus on scalability, I aim to create innovative solutions that enhance user experiences and drive efficiency.`;

export const ABOUT_TEXT = `I am an enthusiastic and adaptable engineering student with a focus on Information Technology. My journey in development began with a curiosity for problem-solving, and I have since gained practical experience through projects like Hospital Management Systems and Plant Disease Detection using technologies such as React, PHP, MySQL, and deep learning. I thrive in dynamic environments where I can learn, collaborate, and tackle challenges head-on. My goal is to leverage my skills in web development, DBMS, and deep learning to build impactful solutions. Outside of coding, I enjoy playing Kho-Kho, video editing, and exploring new technologies.`;


export const EXPERIENCES = [
  
  {
    year: "2024",
    role: "Frontend Developer",
    company: "Codsoft",
    description: `Designed and developed user interfaces for web applications using HTML,CSS,Javascript and React,Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript","React" ,"mySQL"],
  }
];

export const PROJECTS = [
  {
    title: "Hospital Management System",
    image: project1,
    description:
      "A system to manage hospital operations such as patient records, appointments, inventory, and staff management, with role-based access for enhanced security.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Plant Disease Detection",
    image: project2,
    description:
      "A deep learning-based application for detecting plant diseases early, aiding farmers in taking preventive actions to ensure crop health.",
    technologies: ["Python", "TensorFlow", "Keras", "Flask"],
  },
  {
    title: "Sorting Visualizer",
    image: project3,
    description:
      "An interactive tool that visually demonstrates sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort for educational purposes.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  email: "navabharathi6336@gmail.com"
};
