/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sri Kailashnathan",
  title: "Hi all, I'm Sri Kailashnathan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs / Java / Springboot   and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xxZa8_12daMD2hG4BYUe7eGQhpDc7jLn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kailashtvn200o",
  linkedin: "https://www.linkedin.com/in/sri-kailashnathan-senthilnathan-4b41a4189//",
  gmail: "kailashtvn2000@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },


    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kpr Institute of Engineering and Technology",
      logo: require("./assets/images/schoollogo.png"),
      subHeader: "Bachelor Of Engineering",
      duration: "June 2018 - May 2022",

      desc: "Computer Science and Engineering",
      Location: "Coimbatore",

    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Thooni",
      companylogo: require("./assets/images/thoonilogo.ico"),
      date: "June 2023 – March 2024",
      desc: "At Thooni, I have been responsible for developing and maintaining scalable web applications using modern technologies and 3D tech stack.",
      descBullets: [
        "Frontend Development (React.js): Building responsive, user-friendly interfaces using React.js. I have implemented key UI components and integrated third-party libraries to enhance user experiences, optimizing performance and maintaining code quality with best practices.",
        "3D Technology Integration (Sketchfab): Implementing 3D model viewing and customization features using Sketchfab. Worked on embedding interactive 3D models for customers to visualize and customize products in real time, enhancing the overall user experience."
      ]
    },
    {
      role: "Software Engineer",
      company: "Fabriplay",
      companylogo: require("./assets/images/fablogo.png"),
      date: "March 2024 – present",
      desc: "As a Backend Developer at Fabriplay, I focused on building and maintaining the core backend infrastructure of the platform, enabling robust and scalable solutions for boutique management and customer relationship management.",
      descBullets: [
        "API Development (Spring Boot): Designed and developed RESTful APIs using Spring Boot for various platform services, including order management, billing, and customer data handling. Ensured secure and efficient data flow between frontend and backend systems.",

        "Database Management (Postgres): Implemented and optimized database schemas and queries for efficient data storage and retrieval, ensuring high availability and performance in a large-scale environment.",
        "Payment Integration: Integrated external payment gateways (Razorpay) into the system, enabling secure and seamless payment processing for boutique orders."
      ]
    },
  
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/thoonilogo.ico"),
      projectName: "Thooni",
      projectDesc: "Thooni is an innovative e-commerce platform focused on the fashion and apparel industry. It allows users to browse, customize, and purchase a wide range of clothing items, offering an immersive shopping experience through 3D customization tools. By integrating advanced technologies like real-time 3D visualization. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://thooni.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fablogo.png"),
      projectName: "fabriplay",
      projectDesc: "Fabriplay is a comprehensive boutique management tool designed to streamline and automate key operations for fashion boutiques. It offers features like order tracking, employee scheduling, inventory management, and customer relationship management (CRM). Fabriplay simplifies the day-to-day running of boutiques by providing tools to assign orders to employees, manage inventory in real time, and ensure timely delivery of customized clothing. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://fabriplay.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@kailashtvn2000/react-js-vs-next-js-which-one-is-easier-for-developers-a2974db7d250",
      title: "React.js vs. Next.js",
      description:
        "React.js vs. Next.js: Which One is Easier for Developers?"
    },
    {
      url: "https://medium.com/@kailashtvn2000/intel-vs-apple-silicon-how-apples-m1-and-m2-chips-are-revolutionizing-performance-1eed7d5a18ff",
      title: "Intel vs. Apple Silicon",
      description:
        "Intel vs. Apple Silicon: How Apple’s M1 and M2 Chips are Revolutionizing Performance."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9629798904",
  email_address: "kailashtvn@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,

  bigProjects,

  blogSection,
  openSource,

  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
