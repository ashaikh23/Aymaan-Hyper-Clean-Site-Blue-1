module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Aymaan Shaikh',
    // Main Site Title
    title: `Aymaan Shaikh | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `I eat Potatos`,
    // Optional: Twitter account handle
    author: `@ashaikh23`,
    // Optional: Github account URL
    github: `https://github.com/ashaikh23`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/aymaan-shaikh/`,
    // Content of the About Me section
    about: `I fbsdjbajkdjasdbjsbd`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      
      {
    name: 'Fidelity Investments',
    description: 'Incoming Full Stack Engineering Intern, Jun 2023 - Aug 2023',
    link: ''
  },
  {
    name: 'Fidelity Investments',
    description: 'Full Stack Engineering Intern, Jun 2022 - Aug 2022',
    link: '',
    details: [
      '- Developed and maintained RESTful APIs for two financial applications, including a 529 Savings Plan Finance Application and a Full Stack Employee Management Application (CRUD API).',
      '- Validated user credentials for account security and ensured data integrity through extensive testing with Postman.',
      '- Collaborated with a team of developers to create a Full Stack Employee Management Application, which included frontend development with AngularJS, NodeJS, and HTML / CSS, as well as backend development with TypeScript, Spring Boot, and MySQL.',
      '- Implemented version control using Git and Bitbucket to manage codebase and streamline collaboration with team members.'
    ]
  },
  {
    name: 'Popcloset App (Startup)',
    description: 'iOS Software Developer Intern, Oct 2021 - Present',
    link: '',
    details: [
      '- Developed an in-app messaging system and various app services using SwiftUI to create designs that matched wireframes and worked with all screen sizes.',
      '- Worked closely with the CEO, CTO, and Lead Developers to ensure the app met business and user needs. Utilized communication and problem-solving skills to identify and resolve issues throughout the development process.',
      '- Collaborated with a team of senior developers and executives to create a business and marketing plan for a new app. Conducted research and utilized Firebase and Swift to set up and manage the software environment, ensuring seamless integration with various APIs.'
    ]
  },
  {
    name: 'Massachusetts Institute of Technology',
    description: 'AI Fellowship, May 2022 - Apr 2023',
    link: '',
    details: [
      '- Articulated the complete data science life cycle end-to-end, built datasets suitable for ML applications.',
      '- Applied industry-relevant ML tools and libraries and learned core ML algorithms to develop intuition on trade-offs between different algorithmic choices.',
      '- Selected ML model evaluation metrics and hyper-parameters for testing and ran model selection to choose the best model among candidates, and investigated how deep learning functions in ML.',
      '- Understood advanced ML models and navigated design decisions and constraints; trained and adapted neural networks.'
    ]
  },
  {
    name: 'Susquehanna International Group (SIG)',
    description: 'Software Developer Sophomore Discovery Day, Mar 2023',
    link: ''
  },
  {
    name: 'MIT-IBM Watson AI Lab',
    description: 'Undergraduate Machine Learning Researcher (laboratory of Mikhail Yurochkin, Ph.D.), Aug 2022 - Dec 2022',
    link: '',
    details: [
      '- Implemented inFairness, a PyTorch package developed by IBM, to conduct a demonstration of fairness on a real dataset, comparing the effectiveness of different fairness interventions and fair metric learning techniques.',
      '- Utilized Google Colab to collaboratively execute Python code and employed the Folktables dataset, pre-filtered to include individuals above age 16 who reported working, for our prediction tasks relating to income, sex, race, and gender.',
      '- Developed a pipeline for Algorithmic Fairness, where we selected an individual fairness metric, audited the trained ML model for fairness violations, post-processed the trained model to improve fairness, and trained a fair model using the modified dataset. Trained two models and analyzed their accuracy, concluding that fair models resulted in a lower balanced accuracy than standard
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
