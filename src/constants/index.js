

export const myProjects = [
  {
    title: 'Movie Booking Platform',
    subdesc: ` `,
    // subdesc:
    //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: "https://flimflexmovies.lovestoblog.com/login.php",
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
   
    ],
  },
 
  {
    title: 'Iris Tumor Detector',
    subdesc: ``,
    
    href: "https://iris-tumors-detector.streamlit.app/",
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
   
    ],
  },
  {
    title: 'Veteran Talent Finder',
    subdesc: ``,
    
    href: "https://veteran-talent-finder.streamlit.app/",
    texture: '/textures/project/project1.mp4',
    logo: '/assets/veteranimage.jpg',
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
   
    ],
  },
   {
    
    title: 'Personal Portfolio',
    subdesc: ` `,
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
    title: 'Cocktail Drinks Website',
    subdesc: ``,
    //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: "https://cocktail-drinks-one.vercel.app/",
    texture: '/textures/project/project2.mp4',
    // image:'/assets/project-2.jpg',
    logo: '/assets/project-4.png',
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
          <strong>◦ Model Development:</strong> Built a Convolutional Neural Network (CNN) model for iris tumor detection, achieving a 90%
 accuracy on a dataset of over 3,000 medical images.</p>
        <p>
          <strong>◦ Data Processing & Training:</strong>  Processed over 3,000 images, training the model on 80% of the data, and evaluated
 performance, improving classification accuracy by 10%.</p>
        <p>
          <strong>◦ Team Collaboration:</strong> Worked with a 4-member team to optimize model performance, reducing training time by 25%
 through fine-tuning hyperparameters.</p>
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
          <strong>◦  Python Solutions:</strong>  Engineered Python solutions for 10+ tasks, improving algorithm efficiency and cutting execution
 time by 20%.</p>
        <p>
          <strong>◦ Code Refinement:</strong> Enhanced runtime performance by 15% through logical improvements and maintained code quality
 by following clean coding standards.</p>
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
          <strong>◦ Database Architecture:</strong> Designed and implemented relational databases for a Human Resource Management System
 (HRMS), increasing data processing speed by 30%.
        </p>
        <p>
          <strong>◦  Data Security & Consistency:</strong> Ensured 90% integrity for over 5,000 HR records by applying industry best practices
 and optimizing schema design.
        </p>
      </>
    ),
    icon: '/assets/ws.png',
    animation: 'clapping',
  },
];






