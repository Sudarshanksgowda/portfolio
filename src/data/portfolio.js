/* ===========================================================================
 *  PORTFOLIO CONTENT  —  this is the only file you need to edit.
 *
 *  Every section of the site reads from this file. Change a value here, save,
 *  and the page updates. You never have to touch a component.
 *
 *  ADDING A PROJECT
 *    Copy one whole { ... } block inside `projects`, paste it below the others,
 *    change the values, and give it a new `id`. That is the entire process.
 *
 *  HIDING A SECTION
 *    Empty its array (e.g. `certifications: []`) and the section disappears
 *    from both the page and the navigation automatically.
 *
 *  REORDERING
 *    Projects, skills and timeline entries render in the order written here.
 *    Move a block up to move it up the page.
 * ======================================================================== */

export const profile = {
  name: 'Sudarshan K S',
  // Shown under the name, one after another, as a typing animation.
  roles: [
    'Java Full Stack Developer',
    'Backend Developer',
    'Spring Boot Developer',
    'Computer Science Graduate',
  ],
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 63632 14248',
  email: 'sudarshanksg@gmail.com',

  github: 'https://github.com/Sudarshanksgowda',
  linkedin: 'https://www.linkedin.com/in/sudarshan-k-s-',
  leetcode: 'https://leetcode.com/u/hpoHYJFP7Q',

  // Put your CV in /public and name it here, or set to '' to hide the button.
  resumeFile: '',

  // The paragraph under your name in the hero (from your resume objective).
  objective:
    'Motivated Computer Science graduate passionate about building scalable and reliable software systems. Eager to learn new technologies and contribute effectively as part of a team while continuously growing as a developer.',
};

export const about = {
  // Each string is one paragraph. Add or remove paragraphs freely.
  paragraphs: [
    'I am a Computer Science graduate from Presidency University, Bengaluru, focused on backend engineering with Java and the Spring ecosystem. What draws me to the backend is the part of a product nobody sees: the data model, the API contract, the rules that keep a system correct when lots of people use it at once.',
    'During my Java Full Stack internship at ProDhee Technologies I worked on backend and web application development, built an understanding of REST APIs and database management, and spent real time on API testing and debugging — which taught me more about writing defensive code than any tutorial did.',
    'I build across the stack: Spring Boot, Spring Data JPA and MySQL on the server, and HTML, CSS, JavaScript and React on the client. I am looking for a role where I can apply this to real production systems and keep learning from people who have shipped more than I have.',
  ],

  // The small cards beside the bio. Keep these to things you can back up.
  facts: [
    { value: '7.25', label: 'CGPA, B.Tech CSE' },
    { value: '3', label: 'Projects built' },
    { value: '1', label: 'Full stack internship' },
    { value: '2026', label: 'Graduation year' },
  ],
};

/* Skill groups follow the same grouping as the resume, so the two match.
 * Add a group by copying a { ... } block; add a skill by adding to `items`. */
export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'code',
    items: [
      { name: 'Core Java', detail: 'OOPs, Collections, Exception Handling' },
      { name: 'Java 8', detail: 'Streams, Lambda Expressions, Map, Filter, Optional' },
    ],
  },
  {
    title: 'Back-End Development',
    icon: 'server',
    items: [
      { name: 'Spring Boot', detail: 'Spring MVC, Spring Data JPA, RESTful APIs' },
      { name: 'Spring Security', detail: 'JWT, OAuth 2.0' },
      { name: 'J2EE', detail: 'JDBC, Servlets, JSP' },
      { name: 'Hibernate', detail: 'ORM, entity mapping, persistence' },
    ],
  },
  {
    title: 'Front-End & Web',
    icon: 'layout',
    items: [
      { name: 'HTML5 & CSS3', detail: 'Responsive layouts, Flexbox, Grid' },
      { name: 'JavaScript', detail: 'ES6+, DOM manipulation, fetch API' },
      { name: 'React JS', detail: 'Components, hooks, state management' },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    items: [
      { name: 'MySQL', detail: 'Schema design, joins, indexing, transactions' },
    ],
  },
  {
    title: 'Tools & Build',
    icon: 'tool',
    items: [
      { name: 'Maven', detail: 'Dependency and build management' },
      { name: 'Git & GitHub', detail: 'Branching, version control workflows' },
      { name: 'Postman & Swagger', detail: 'API testing and documentation' },
      { name: 'Eclipse, STS, VS Code', detail: 'Day-to-day development environments' },
    ],
  },
  {
    title: 'Cloud & OS',
    icon: 'cloud',
    items: [
      { name: 'AWS', detail: 'EC2 instances' },
      { name: 'Linux', detail: 'Command line, file system, processes' },
    ],
  },
];

/* ---------------------------------------------------------------------------
 *  PROJECTS
 *
 *  To add one: copy a block, paste it, change the values, give it a new `id`.
 *
 *    id         unique string, used internally — no spaces
 *    title      shown on the card
 *    role       your role on the project
 *    year       shown on the card
 *    category   groups the filter buttons: 'backend' | 'frontend' | 'fullstack'
 *    summary    one or two sentences, shown on the card
 *    highlights bullet points, shown in the popup
 *    tech       full stack list, shown in the popup
 *    badges     the 3-4 chips on the card (keep it short)
 *    github     repo URL, or '' to hide the button
 *    live       demo URL, or '' to hide the button
 * ------------------------------------------------------------------------- */
export const projects = [
  {
    id: 'ecommerce-microservices',
    title: 'E-Commerce Management System',
    subtitle: 'Microservices Architecture',
    role: 'Backend Developer',
    year: '2026',
    status: 'Ongoing',
    category: 'backend',
    summary:
      'A backend-driven system for online retail operations, split into dedicated User and Product microservices so each can be developed and deployed independently.',
    highlights: [
      'Built separate User and Product services to support modular, independent functionality.',
      'Implemented RESTful APIs for user and product management with full CRUD operations.',
      'Used Spring Data JPA and Hibernate for persistence, backed by MySQL.',
      'Followed a layered architecture with Controller, Service and Repository layers.',
      'Tested and validated every endpoint with Postman.',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'MySQL',
      'Postman',
      'Git',
      'GitHub',
    ],
    badges: ['Spring Boot', 'Microservices', 'MySQL'],
    github: 'https://github.com/Sudarshanksgowda/MicroserviceEcomm',
    live: '',
  },
  {
    id: 'crypto-price-tracker',
    title: 'Cryptocurrency Price Tracker',
    subtitle: 'Live market data dashboard',
    role: 'Frontend Developer',
    year: '2026',
    status: '',
    category: 'frontend',
    summary:
      'A responsive web app that pulls live cryptocurrency prices and market information from a public API and presents them in a clean, mobile-friendly dashboard.',
    highlights: [
      'Integrated a cryptocurrency API to fetch and display real-time market data.',
      'Built reusable React components so each part of the dashboard stays independent.',
      'Used React Hooks for state management and dynamic data rendering.',
      'Designed a responsive interface that works across desktop, tablet and phone.',
    ],
    tech: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Cryptocurrency API', 'Git', 'GitHub'],
    badges: ['React', 'REST API', 'Responsive'],
    github: 'https://github.com/Sudarshanksgowda/CryptoCoinTracking',
    live: '',
  },
  {
    id: 'employee-management-j2ee',
    title: 'Employee Management System',
    subtitle: 'J2EE web application',
    role: 'Developer',
    year: '2026',
    status: '',
    category: 'fullstack',
    summary:
      'A web application for employee record management and administrative operations, built on the classic J2EE stack with Servlets, JSP and JDBC.',
    highlights: [
      'Implemented employee registration and login authentication.',
      'Built profile management and full CRUD operations over employee records.',
      'Integrated MySQL for persistent storage and retrieval.',
      'Designed a straightforward interface with JSP and Servlets over JDBC.',
    ],
    tech: ['Java', 'J2EE', 'JDBC', 'Servlets', 'JSP', 'MySQL', 'HTML', 'CSS', 'Git', 'GitHub'],
    badges: ['J2EE', 'Servlets & JSP', 'MySQL'],
    github: 'https://github.com/Sudarshanksgowda/User-Managment-J2EE',
    live: '',
  },
];

/* Experience and education share one timeline. `type` picks the icon. */
export const timeline = [
  {
    type: 'work',
    period: 'Internship',
    title: 'Java Full Stack Intern',
    org: 'ProDhee Technologies Pvt Ltd',
    points: [
      'Gained hands-on experience in backend development and web application development.',
      'Developed an understanding of REST APIs, database management and software development practices.',
      'Performed API testing and debugging to identify and resolve application issues.',
    ],
  },
  {
    type: 'education',
    period: 'Graduated 2026',
    title: 'B.Tech, Computer Science and Engineering',
    org: 'Presidency University, Bengaluru',
    points: ['CGPA: 7.25'],
  },
];

/* Not on your resume — delete the entries or set this to [] to hide the
 * section entirely. Kept here because they are real credentials worth showing. */
export const certifications = [
  {
    title: 'Google Cybersecurity Foundations',
    issuer: 'Google Career Certificates',
    desc: 'Security configurations, network communication models, threat identification and vulnerability management.',
  },
  {
    title: 'Java Full Stack Development Training',
    issuer: 'ProDhee Technologies Pvt Ltd',
    desc: 'J2EE MVC architecture, database operations, testing practices and Maven configuration.',
  },
];

/* Navigation. Remove a line to drop it from the menu; `id` must match the
 * section id rendered in App.jsx. */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
