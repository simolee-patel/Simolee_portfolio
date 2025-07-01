// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import socketIO from './assets/tech_logo/socketIO.png';
import webSocket from './assets/tech_logo/webSocket.png';
import rabbitMQ from './assets/tech_logo/rabbitMQ.png';
import redis from './assets/tech_logo/redis.png';
import electron from './assets/tech_logo/electron.png';
import aws from './assets/tech_logo/aws.png';
import ejs from './assets/tech_logo/ejs.png';
import docker from './assets/tech_logo/docker.png';


// Experience Section Logo's
import capermintLogo from './assets/company_logo/capermintLogo.jfif';

// Education Section Logo's
import rcLogo from './assets/education_logo/rcLogo.png';
import gecLogo from './assets/education_logo/gecLogo.png';


// Project Section Logo's
import laeIamge from './assets/work_logo/laeImage.webp';
import edgeutechImage from './assets/work_logo/edgeutechImage.png';
import ludoFantasy from './assets/work_logo/ludoFantsay.png';
import imageTracker from './assets/work_logo/imageTracker.png';
import rabbitMQProject from './assets/work_logo/rabbitMQ.webp';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'socketIO', logo: socketIO },
      { name: 'web socket', logo: webSocket },
      { name: 'rabbitMQ', logo: rabbitMQ },
      { name: 'redis', logo: redis },
      { name: 'electron', logo: electron },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Aws', logo: aws },
      { name: 'docker', logo: docker },


    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'ejs', logo: ejs },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: capermintLogo,
      role: "Software Engineer",
      company: "Capermint Technologies",
      date: "Jan 2021 - Oct-2024",
      desc: "Software engineer with experience in building dynamic and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in creating responsive UIs, developing RESTful APIs, managing real-time communication with Socket.IO, and optimizing performance in agile environments",
      skills: [
        "Node js",
        "Mongo DB",
        "Socket IO",
        "Web Socket",
        "Redis",
        "JavaScript",
        "Docker",
        "Rect",
        "rabbitMQ",
        "Microservices",
        "Docker",
        "Aws",
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Next Js",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: gecLogo,
      school: "Governmanet Engineering College Gandhinagar",
      date: "July 2018 - July 2021",
      grade: "9.10 CGPA",
      desc:"I completed my Bachelor's degree in Computer Engineering from Government Engineering College, Gandhinagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.Also work on projects that applied theoretical concepts to real-world problems",
      degree: "Bachlor of Computer Engineering",
    },
    {
      id: 1,
      img: rcLogo,
      school: "BSA College, Mathura",
      date: "July 2015 - jan 2018",
      grade: "9.07 CGPA",
      desc: "I completed my Diploma in Computer Engineering from RC Technical College, Ahmedabad.College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Diploma in computer Engineering",
    },

  ];
  
  export const projects = [
    {
      id: 0,
      title: "🏋️ LAE Fitness App (iOS) – Canada",
      description:
        "Worked on this project at Capermint Technologies as a backend developer.Built RESTful APIs, an EJS-based admin panel, and integrated Apple IAP.Deployed services on AWS EC2 using PM2 for performance and reliability.",
      image: laeIamge,
      tags: ["Node js", "MongoDB", "JavaScript", "AWS", "API","In-App Purchase"],
      webapp: "https://apps.apple.com/in/app/lae-fitness-app/id6473902234",
    },
    {
      id: 1,
      title: "🎮 Ludo Fantasy Game (Android) – India",
      description:
        "Developed at Capermint Technologies as part of the real-time gaming team.Implemented multiplayer gameplay with Socket.io and secure wallet APIs.Built admin tools and integrated Cashfree for real-money transactions.",
      image: ludoFantasy,
      tags: ["Node JS", "API", "Socket IO", "Redis", "JavaScript", "Microservices", "PM2", "AWS"],
      webapp:"https://apps.apple.com/in/app/ludo-fantasy/id1610989686",
    },
    {
      id: 2,
      title: "🖥️ Edgeutech 3D Desktop App – Australia",
      description:
        "Created at Capermint Technologies for a 3D model-based desktop solution.Built using Electron and JavaScript with responsive and interactive UI.Handled packaging and deployment for cross-platform desktop delivery.",
      image: edgeutechImage,
      tags: ["Electron", "Javascript", "NPM", "Validation","HTML", "CSS"],
      webapp: "https://edgeutech.com.au/",
    },
    {
      id: 2,
      title: "🔧 Microservices with RabbitMQ & Socket.IO",
      description:
        "Created a proof-of-concept microservices-based architecture showcasing pub-sub messaging using RabbitMQ and real-time data handling with Socket.IO. Focused on service decoupling, message routing, and real-time updates.",
      image: rabbitMQProject,
      tags: ["Node.js", "RabbitMQ", "Socket.IO", "Microservices"],
      github: "https://github.com/simolee-patel/rabbit_mq_all_topics",
    },
        {
      id: 2,
      title: "📍 Real-time Device Tracker",
      description:
        "Built a real-time device location tracking app with live map visualization using Leaflet.js. Backend included session handling with Redis and secure API development, deployed via PM2 on AWS.",
      image: imageTracker,
      tags: [ "Node.js", "Express", "Socket.IO", "Leaflet.js", "Redis"],
      github: "https://github.com/simolee-patel/realtime_device_tracker",
    },


  ];  