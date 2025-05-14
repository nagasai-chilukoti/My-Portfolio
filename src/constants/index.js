

export const myProjects = [
  {
    title: 'Personal Portfolio',
    subdesc: `Developed a responsive and visually appealing personal portfolio website using React.js and JavaScript to showcase my projects, skills, and experience. Integrated reusable components, social media links, and a dynamic project section for scalability.`,
    // subdesc:
    //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: "https://my-portfolio-sable-three-52.vercel.app/",
    texture: '/textures/project/project2.mp4',
    // image:'/assets/project-2.jpg',
    logo: '/assets/project3.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'js',
        path: 'assets/js.svg',
      },
    
    ],
  },
 
  {
    title: 'Iris Tumor Detection Model',
    subdesc: 'As part of this project, we developed a model using Convolutional Neural Networks (CNN) to detect tumors in the iris (the colored part of the eye).',
    
    href: "https://iristumordetection.streamlit.app/",
    texture: '/textures/project/project1.mp4',
    logo: '/assets/iris.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      // {
      //   id: 2,
      //   name: 'TailwindCSS',
      //   path: 'assets/tailwindcss.png',
      // },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/js.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'Movie Ticket Booking Platform',
    subdesc: 'Created a web application for movie ticket reservations. Implemented features for movie selection, showtimes, and ticket booking.',
    // subdesc:
    //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: "https://ticket-booking-ochre.vercel.app/",
    texture: '/textures/project/project2.mp4',
    // image:'/assets/project-2.jpg',
    logo: '/assets/project-2.jpg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/js.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/css.png',
      },
      // {
      //   id: 3,
      //   name: 'TypeScript',
      //   path: '/assets/typescript.png',
      // },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Infosys Springboard',
    pos: 'Project Intern',
    duration: 'Oct 2024 - Dec 2024',
    title: (
      <>
        <p>
          <strong>◦ Model Development:</strong> Developed a Convolutional Neural Network (CNN) model for iris tumor detection using medical image datasets.
        </p>
        <p>
          <strong>◦ Data Processing & Training:</strong> Preprocessed and prepared image data, trained the model, and evaluated performance for accurate classification.
        </p>
      </>
    ),
    icon: '/assets/isf.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Codsoft',
    pos: 'Python Developer Intern',
    duration: 'June 2024 - July 2024',
    title: (
      <>
        <p>
          <strong>◦ Python Development:</strong> Developed efficient Python solutions for a variety of tasks, implementing optimized algorithms and best coding practices.
        </p>
        <p>
          <strong>◦ Code Optimization:</strong> Improved code performance and maintainability by refining logic and ensuring adherence to clean coding standards.
        </p>
      </>
    ),
    icon: '/assets/cs.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Web Samrat Technologies',
    pos: 'Student Trainee',
    duration: 'July 2022 - Jan 2023',
    title: (
      <>
        <p>
          <strong>◦ Backend Data Architect:</strong> Engineered and structured relational databases for a web-based Human Resource Management System (HRMS), aligning with performance and scalability standards.
        </p>
        <p>
          <strong>◦ Data Integrity & Best Practices:</strong> Applied database design best practices to ensure referential integrity, consistency, and secure storage of HR records.
        </p>
      </>
    ),
    icon: '/assets/ws.png',
    animation: 'clapping',
  },
];


