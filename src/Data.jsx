import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';
import skillsImg10 from './assets/bootstrap-logo.svg';
import skillsImg6 from './assets/java-logo.svg';
import skillsImg7 from './assets/python-logo.svg';
import skillsImg8 from './assets/spring-boot.svg';
import skillsImg9 from './assets/django.svg';
import skillsImg12 from './assets/my-sql-logo.svg';
import skillsImg11 from './assets/aws-logo.svg';
import skillsImg13 from './assets/mariadb-logo.svg';
import skillsImg14 from './assets/mongodb.svg';
import skillsImg15 from './assets/postman-logo.svg';
import skillsImg16 from './assets/vs-code-logo.svg';
import skillsImg17 from './assets/intellij-logo.svg';
import skillsImg18 from './assets/pychan-logo.svg';

import projectImg5 from './assets/project-5.jpg';

import project1 from './assets/my-project-1.png';
import project2 from './assets/my-project-2.png';
import project3 from './assets/my-project-3.png';
import project4 from './assets/my-project-4.png';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Projects',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/projects',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'FIRST NAME : ',
    description: 'Gouthaman',
  },
  {
    title: 'LAST NAME : ',
    description: 'M',
  },
  {
    title: 'QUALIFICATION : ',
    description: 'BE - BME',
  },
  {
    title: 'CGPA : ',
    description: ' 7.77 / 10',
  },
  {
    title: 'OCCUPTION : ',
    description: 'Full Stack Java Developer & AWS Cloud Engineer',
  },
  {
    title: 'ADDRESS : ',
    description: 'Chennai, Tamil Nadu, India',
  },
  {
    title: 'PHONE : ',
    description: '+91 9500693300',
  },
  {
    title: 'EMAIL : ',
    description: 'gouthamangoutham7@gmail.com',
  },
  {
    title: 'OTHERS : ',
    description: 'LinkedIn',
  },
  {
    title: 'LANGUAGE : ',
    description: 'English, Tamil, Telugu',
  },
];

export const stats = [
  {
    no: '3',
    title: 'Certificates <br /> Completed',
    link: 'View',
  },

  {
    no: '1',
    title: 'Internship <br /> (3 Months)',
    link: 'View',
    links: '#resume',
  },

  {
    no: '5+',
    title: 'Completed <br /> Projects',
    link: 'View',
    links: '/projects',
  },

  {
    no: '10+',
    title: 'Technical <br /> Skills',
    link: 'View',
    links: '#skills',
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'frontend',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'Bootstrap',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Java',
    level: 'Advanced',
    category: 'backend',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Python',
    level: 'Advanced',
    category: 'backend',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Spring-Boot',
    level: 'Intermediate',
    category: 'backend',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'DJango',
    level: 'basic',
    category: 'backend',
  },

  {
    id: 11,
    img: skillsImg11,
    title: 'AWS Cloud',
    level: 'Intermediate',
    category: 'ad',
  },

  {
    id: 12,
    img: skillsImg12,
    title: 'MY SQL',
    level: 'Intermediate',
    category: 'ad',
  },

  {
    id: 13,
    img: skillsImg13,
    title: 'Maria DB',
    level: 'Intermediate',
    category: 'ad',
  },

  {
    id: 14,
    img: skillsImg14,
    title: 'Mongo DB',
    level: 'Basic',
    category: 'ad',
  },

  {
    id: 15,
    img: skillsImg15,
    title: 'Postman',
    level: 'Testing',
    category: 'tool',
  },

  {
    id: 16,
    img: skillsImg16,
    title: 'VS Code',
    level: 'Editer',
    category: 'tool',
  },

  {
    id: 17,
    img: skillsImg17,
    title: 'Intellij IDEA',
    level: 'IDE',
    category: 'tool',
  },

  {
    id: 18,
    img: skillsImg18,
    title: 'Pycham IDEA',
    level: 'IDE',
    category: 'tool',
  },

];

export const resume = [
  {
    id: 1,
    category: 'INTERNSHIP',
    icon: <RiBriefcase4Fill />,
    year: 'Jun / 2025 - Aug / 2025',
    title: 'ROLE: <span> Java Full-Stack Developer </span>',
    loc: 'i5 Technology <span> - Chennai </span>',
    date: 'INTERNSHIP : <span> 3 Months</span>',
    desc: 'DESCRIPTION : <span> Hands-on experience in developing full-stack web applications using Java, Spring Boot, MySQL, React, HTML, CSS, and JavaScript. Focused on creating scalable, efficient, and user-friendly solutions with clean coding practices and modern development standards.</span>',
  },

  {
    id: 2,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2020 - 2024',
    title: 'Bachelor Degree <span> BE - Bio Medical Engineering </span>',
    loc: 'SJIT Cologe <span> - Anna University </span>',
    date: 'CGPA : <span> 7.77 / 10</span>',
    desc: 'DESCRIPTION :<span> Gained strong interdisciplinary knowledge in engineering and medical sciences, with expertise in medical instrumentation and biomedical signal processing. Applied analytical skills to develop technology-driven healthcare solutions. </span>',
  }
];

export const projects = [
  {
    id: 1,
    img: project1,
    title: 'Coffee Times !',
    description:
      'A modern coffee shop website designed with HTML, CSS, and JavaScript, showcasing premium coffee products with smooth effects and responsive design.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    tag: 'Front - End',
    link: 'https://gouthaman-10.github.io/Coffee-Time-/',
  },

  {
    id: 2,
    img: project3,
    title: 'Titans Gym',
    description:
      'A modern coffee shop website designed with HTML, CSS, and JavaScript, showcasing premium coffee products with smooth effects and responsive design.',
    skills: [skillsImg1, skillsImg2, skillsImg10, skillsImg3],
    tag: 'Front - End',
    link: 'https://gouthaman-10.github.io/Coffee-Time-/',
  },

  {
    id: 3,
    img: project2,
    title: 'Course Registration',
    description:
      'A robust backend system built with Spring Boot and MySQL that efficiently manages student registration and course enrollment through RESTful APIs.',
    skills: [skillsImg6, skillsImg8, skillsImg12],
    tag: 'Back - End',
    link: 'https://github.com/Gouthaman-10/Course-Registration-System',
  },

  {
    id: 4,
    img: project4,
    title: 'Book Repository',
    description:
      'Powerful and scalable backend built using Spring Boot and MySQL with advanced JWT authentication for seamless and secure book management.',
    skills: [skillsImg6, skillsImg8, skillsImg12],
    tag: 'Back - End',
    link: 'https://github.com/Gouthaman-10/bookrepository',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Construction Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  }
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
