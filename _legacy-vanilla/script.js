document.addEventListener('DOMContentLoaded', () => {

  // =======================================================
  // 1. Initial State & Portfolio Data Schema
  // =======================================================

  const defaultPortfolioData = {
    profile: {
      name: "Sudarshan K S",
      title: "Java Full Stack Developer",
      tagline: "👋 Welcome to my portfolio",
      subtitles: ["Java Full Stack Developer", "Backend Engineer", "Spring Boot Enthusiast", "Computer Science Student"],
      phone: "+91 63632 14248",
      email: "sudarshanksg@gmail.com",
      github: "https://github.com/sudarshanksg",
      linkedin: "https://linkedin.com/in/sudarshanksg",
      leetcode: "https://leetcode.com/u/sudarshanksg",
      objective: "Motivated Computer Science undergraduate passionate about building scalable and reliable software systems. Eager to learn new technologies and contribute effectively as part of a team while continuously growing as a developer. Looking for an opportunity to apply academic knowledge to real-world projects and gain practical industry experience.",
      avatar: "avatar.jpg"
    },
    about: {
      bio: "I am a dedicated and goal-oriented Computer Science undergraduate at <span class=\"highlight\">Presidency University, Bengaluru</span>. My tech journey began with a strong interest in understanding how secure, enterprise-level digital ecosystems function. This directed me towards backend engineering and Java technologies.<br><br>Currently, as a <span class=\"highlight\">Java Full Stack Intern at ProDhee Technologies Pvt Ltd</span>, I am reinforcing my core java knowledge, practicing clean system architectures, and learning to write performant web services using Spring Boot and relational database design.<br><br>Beyond code, I love taking initiative—acting as a cultural activities lead for Karnataka Rajyotsava with the Rotaract Club, collaborating on group projects, and solving analytical puzzles.",
      stats: [
        { number: "2+", label: "Enterprise Projects" },
        { number: "7.25", label: "CGPA (Engineering)" },
        { number: "100+", label: "LeetCode Solved" },
        { number: "2", label: "Professional Certs" }
      ]
    },
    skills: [
      { name: "Java", category: "languages", level: "Advanced", desc: "Strong core java, OOP principles, multi-threading, J2EE components, Servlets, JSP, JDBC, and collections API.", tags: ["OOP", "Java SE", "J2EE"] },
      { name: "Spring Boot", category: "frameworks", level: "Intermediate", desc: "Building REST APIs, dependency injection, JPA/Hibernate integration, application configurations, and architecture.", tags: ["REST APIs", "Spring MVC", "Spring Data JPA"] },
      { name: "SQL & MySQL", category: "languages", level: "Advanced", desc: "Designing relational databases, normalization, complex joins, indexing, query optimization, and transaction handling.", tags: ["DML/DDL", "Indexing", "Relational Design"] },
      { name: "React JS", category: "frameworks", level: "Basics", desc: "Understanding component hierarchies, state management (hooks like useState, useEffect), and responsive layouts.", tags: ["Hooks", "Components", "Virtual DOM"] },
      { name: "HTML, CSS & JS", category: "languages", level: "Intermediate", desc: "Creating responsive layouts, CSS transformations, Flexbox/Grid, and DOM manipulation using JavaScript.", tags: ["ES6+", "CSS Grid", "DOM Manipulation"] },
      { name: "Postman, Git & IDEs", category: "frameworks", level: "Intermediate", desc: "Testing REST APIs, version control workflows, repository management, and utilizing IntelliJ IDEA shortcuts.", tags: ["Git", "Postman", "IntelliJ"] },
      { name: "OOP & SDLC", category: "concepts", level: "Strong", desc: "Solid principles, polymorphism, encapsulation, inheritance, Agile methodologies, Scrum practices, and version control workflows.", tags: ["OOP", "Agile", "SOLID"] },
      { name: "OSI Model & Networks", category: "concepts", level: "Basics", desc: "Understanding networking layers, IP addressing, HTTP/HTTPS protocols, TCP/IP handshakes, and DNS operations.", tags: ["HTTP", "OSI Layers", "TCP/IP"] }
    ],
    projects: [
      {
        id: "project-springboot-ems",
        title: "Employee Management System",
        category: "springboot",
        tech: ["Spring Boot", "JPA", "MySQL"],
        shortDesc: "An enterprise REST API built using Spring Boot. Implements modular package architecture, validation handling, custom database indexing, and integration with MySQL.",
        longDesc: "This backend application exposes safe REST APIs for employee management operations (create records, fetch details, update configurations, and trigger status updates). The application follows a professional layered package architecture.",
        highlights: [
          "<strong>Exception Handling:</strong> Implements custom global exceptions via <code>@ControllerAdvice</code> returning structured JSON responses.",
          "<strong>Data Validation:</strong> Utilizes Hibernate Validator (<code>@NotNull</code>, <code>@Size</code>, <code>@Email</code>) to sanitize input payloads before DB persisting.",
          "<strong>Performance:</strong> Database schema structure includes composite indexing on high-frequency columns (e.g. employee email lookup)."
        ],
        techDetails: ["Spring Boot 3.x", "Spring Data JPA", "MySQL", "Lombok", "Postman API Testing", "Maven", "JUnit"],
        github: "https://github.com/sudarshanksg/employee-management-springboot",
        live: ""
      },
      {
        id: "project-j2ee-ems",
        title: "Employee Records System",
        category: "j2ee",
        tech: ["J2EE / JDBC", "Servlets & JSP", "MySQL"],
        shortDesc: "An MVC-based web application built with Servlets and JSP. Integrates security practices for login session validation, direct CRUD data retrieval, and schema normalization.",
        longDesc: "An MVC enterprise web portal featuring secure login sessions, user authentication, profile dashboard management, and structured database records management. Built using pure J2EE components.",
        highlights: [
          "<strong>MVC Pattern:</strong> Clear separation of concerns where Servlets manage user requests, coordinate business objects, and forward dynamic responses via JSPs.",
          "<strong>Relational Normalization:</strong> Database schema normalized to 3NF to eliminate record duplication, coupled with JDBC PreparedStatement queries to prevent SQL Injection.",
          "<strong>Session Authentication:</strong> Active user login sessions validated on every protected dashboard servlet via custom HTTP Filters."
        ],
        techDetails: ["Java J2EE", "Java Servlets", "JSP (JavaServer Pages)", "JDBC API", "MySQL DB", "Apache Tomcat"],
        github: "https://github.com/sudarshanksg/employee-management-j2ee",
        live: ""
      }
    ],
    experience: [
      {
        date: "Jan 2026 - Present",
        title: "Java Full Stack Intern",
        company: "ProDhee Technologies Pvt Ltd",
        details: [
          "Underwent structured training in Core Java syntax, OOP inheritance patterns, and basic MVC web development configurations.",
          "Gained hands-on exposure to REST API endpoints, relational schema design, database queries, and unit tests using Spring Boot and JUnit."
        ]
      },
      {
        date: "2022 - 2026",
        title: "B.Tech in Computer Science & Engineering",
        company: "Presidency University, Bengaluru",
        details: [
          "Acquired foundational knowledge in object-oriented programming, data structures, algorithms, SQL queries, and software engineering.",
          "Maintaining a CGPA of 7.25. Active participator in technical coding labs and local hackathons."
        ]
      },
      {
        date: "2020 - 2022",
        title: "Pre-University (PU)",
        company: "Vagdevi PU College",
        details: [
          "Completed Pre-University education focusing on Physics, Chemistry, Mathematics, and Computer Science.",
          "Graduated with a cumulative score of 84.83%."
        ]
      },
      {
        date: "2019 - 2020",
        title: "High School",
        company: "Vagdevi English Medium High School",
        details: [
          "Acquired primary education with focus on general sciences and mathematical foundations.",
          "Completed with a percentage score of 86.8%."
        ]
      }
    ],
    certifications: [
      {
        title: "Google Cybersecurity Foundations Certificate",
        issuer: "Google Career Certificates",
        desc: "Covers basic security configurations, network communication models, threat identification, and vulnerability management."
      },
      {
        title: "Java Full Stack Development Training",
        issuer: "ProDhee Technologies Pvt Ltd",
        desc: "Comprehensive training on J2EE MVC architectures, database operations, testing practices, and Maven configurations."
      }
    ]
  };

  let portfolioData = {};
  let isEditMode = false;

  // =======================================================
  // 2. Data Loading Coordinator
  // =======================================================

  async function initializeData() {
    // 1. Check local storage
    const cachedData = localStorage.getItem('portfolio_data_v1');
    if (cachedData) {
      try {
        portfolioData = JSON.parse(cachedData);
        // Migration check: Ensure avatar is configured for existing caches
        if (portfolioData.profile && !portfolioData.profile.avatar) {
          portfolioData.profile.avatar = "avatar.jpg";
          localStorage.setItem('portfolio_data_v1', JSON.stringify(portfolioData));
        }
        console.log("Loaded portfolio data from localStorage Cache.");
        renderAll();
        return;
      } catch (e) {
        console.error("Error parsing localStorage cache, falling back to server files.", e);
      }
    }

    // 2. Try fetching static configuration JSON
    try {
      const response = await fetch('portfolio-data.json');
      if (response.ok) {
        portfolioData = await response.json();
        console.log("Loaded portfolio data from portfolio-data.json file.");
        localStorage.setItem('portfolio_data_v1', JSON.stringify(portfolioData));
        renderAll();
        return;
      }
    } catch (err) {
      console.log("CORS block or portfolio-data.json not found. Falling back to built-in default resume data.");
    }

    // 3. Fallback to default
    portfolioData = JSON.parse(JSON.stringify(defaultPortfolioData));
    localStorage.setItem('portfolio_data_v1', JSON.stringify(portfolioData));
    renderAll();
  }

  // =======================================================
  // 3. Dynamic Rendering Engine
  // =======================================================

  function renderAll() {
    renderHero();
    renderAbout();
    renderSkillsFilters();
    renderSkillsGrid();
    renderProjectsFilters();
    renderProjectsGrid();
    renderTimeline();
    renderCertifications();
    renderContactInfo();
    setupEditableListeners();
    updateAestheticStates();
  }

  function renderHero() {
    document.getElementById('profile-name').innerHTML = portfolioData.profile.name;
    document.getElementById('profile-objective').innerHTML = portfolioData.profile.objective;
    document.getElementById('hero-welcome-tag').innerHTML = portfolioData.profile.tagline || "👋 Welcome to my portfolio";
    document.getElementById('footer-logo-text').innerHTML = portfolioData.profile.name;

    // Render avatar image or SVG fallback
    const avatarContainer = document.getElementById('avatar-container');
    if (avatarContainer) {
      if (portfolioData.profile.avatar) {
        avatarContainer.innerHTML = `<img src="${portfolioData.profile.avatar}" alt="${portfolioData.profile.name}" class="avatar-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; border: 3px solid var(--accent-primary); box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);">`;
      } else {
        avatarContainer.innerHTML = `
          <svg class="avatar-svg" viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
              <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--accent-primary)" />
                <stop offset="100%" stop-color="var(--accent-secondary)" />
              </linearGradient>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(34, 211, 238, 0.2)" />
                <stop offset="100%" stop-color="rgba(99, 102, 241, 0.05)" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="85" fill="none" stroke="url(#avatarGrad)" stroke-width="1.5" stroke-dasharray="6 6" />
            <circle cx="100" cy="100" r="75" fill="rgba(15, 23, 42, 0.4)" />
            <text x="45" y="60" fill="var(--accent-secondary)" opacity="0.35" font-family="monospace" font-size="8">&lt;code&gt;</text>
            <text x="125" y="75" fill="var(--accent-primary)" opacity="0.35" font-family="monospace" font-size="8">{...}</text>
            <text x="40" y="140" fill="var(--text-muted)" opacity="0.2" font-family="monospace" font-size="7">Java.run()</text>
            <path d="M60 115 L140 115 L150 155 L50 155 Z" fill="url(#screenGrad)" opacity="0.6"/>
            <path d="M100 70 A 22 22 0 0 1 122 92 A 22 22 0 0 1 100 114 A 22 22 0 0 1 78 92 A 22 22 0 0 1 100 70 Z" fill="url(#avatarGrad)" />
            <path d="M86 88 h10 M104 88 h10 M96 88 a4 4 0 1 1-8 0 M114 88 a4 4 0 1 1-8 0 M96 88 h8" stroke="#ffffff" stroke-width="1.5" fill="none"/>
            <path d="M62 155 c0-15 12-25 28-28 l10 8 l10-8 c16 3 28 13 28 28 Z" fill="url(#avatarGrad)" />
            <rect x="70" y="140" width="60" height="28" rx="2" fill="var(--bg-secondary)" stroke="var(--border-color)" stroke-width="1.5" />
            <rect x="75" y="144" width="50" height="2" rx="1" fill="var(--accent-secondary)" />
            <rect x="75" y="150" width="30" height="2" rx="1" fill="var(--accent-primary)" />
            <rect x="75" y="156" width="40" height="2" rx="1" fill="var(--text-muted)" />
          </svg>
        `;
      }
    }

    // Render social icons
    const socialsContainer = document.getElementById('profile-social-links');
    socialsContainer.innerHTML = '';
    
    const github = portfolioData.profile.github;
    const linkedin = portfolioData.profile.linkedin;
    const leetcode = portfolioData.profile.leetcode;

    if (github) {
      socialsContainer.innerHTML += `
        <a href="${github}" target="_blank" class="social-icon" aria-label="GitHub Profile" id="profile-github-link">
          <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>`;
    }
    if (linkedin) {
      socialsContainer.innerHTML += `
        <a href="${linkedin}" target="_blank" class="social-icon" aria-label="LinkedIn Profile" id="profile-linkedin-link">
          <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>`;
    }
    if (leetcode) {
      socialsContainer.innerHTML += `
        <a href="${leetcode}" target="_blank" class="social-icon" aria-label="LeetCode Profile" id="profile-leetcode-link">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M13.483 0a1.39 1.39 0 0 0-.961.411l-9.12 9.117a3.486 3.486 0 0 0 0 4.928l5.249 5.249a3.486 3.486 0 0 0 4.928 0l9.12-9.117a1.39 1.39 0 0 0 0-1.966L15.483.411A1.39 1.39 0 0 0 13.483 0zm-.92 2.293L19.467 9.2l-3.32 3.32-6.904-6.903 3.32-3.324zm-4.73 4.732l6.903 6.903-3.32 3.324L4.53 10.347l3.32-3.322zm-2.028 4.729l4.522 4.522a1.396 1.396 0 0 1 0 1.973 1.396 1.396 0 0 1-1.973 0l-4.522-4.522a1.396 1.396 0 0 1 0-1.973 1.396 1.396 0 0 1 1.973 0z" fill="currentColor"/>
          </svg>
        </a>`;
    }

    if (isEditMode) {
      // Show placeholder helper links
      socialsContainer.innerHTML += `
        <button class="btn-edit-links btn-admin-only" id="btn-edit-socials-inputs" title="Edit Profile Details & Links">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg>
          <span>Edit Links</span>
        </button>
      `;
      document.getElementById('btn-edit-socials-inputs').addEventListener('click', openProfileLinksModal);
    }
  }

  function renderAbout() {
    document.getElementById('profile-about-bio').innerHTML = portfolioData.about.bio;
    const statsContainer = document.getElementById('profile-stats-grid');
    statsContainer.innerHTML = '';
    
    portfolioData.about.stats.forEach((stat, index) => {
      statsContainer.innerHTML += `
        <div class="stat-card" data-stat-index="${index}">
          <div class="stat-number" ${isEditMode ? 'contenteditable="true"' : ''} data-field="number">${stat.number}</div>
          <div class="stat-label" ${isEditMode ? 'contenteditable="true"' : ''} data-field="label">${stat.label}</div>
        </div>
      `;
    });
  }

  function renderSkillsFilters() {
    const filterContainer = document.getElementById('skills-filter-container');
    filterContainer.innerHTML = `
      <button class="filter-btn active" data-skill-filter="all">All Skills</button>
      <button class="filter-btn" data-skill-filter="languages">Languages</button>
      <button class="filter-btn" data-skill-filter="frameworks">Frameworks & Tools</button>
      <button class="filter-btn" data-skill-filter="concepts">Core Concepts</button>
    `;
    
    // Bind click events
    const filterBtns = filterContainer.querySelectorAll('[data-skill-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-skill-filter');
        filterSkillCards(filterVal);
      });
    });
  }

  function renderSkillsGrid() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';

    portfolioData.skills.forEach((skill, index) => {
      let tagsHTML = '';
      if (skill.tags) {
        skill.tags.forEach(tag => {
          tagsHTML += `<span class="skill-tag">${tag}</span>`;
        });
      }

      // Default category SVG icons
      let iconSVG = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';
      if (skill.category === 'languages') {
        iconSVG = '<svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-8h2v8h-2zm1-9.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm6.5 9.25c-1.381 0-2.5-1.119-2.5-2.5v-5.5h2v5.5c0 .276.224.5.5.5s.5-.224.5-.5v-5.5h2v5.5c0 1.381-1.119 2.5-2.5 2.5z"/></svg>';
      } else if (skill.category === 'concepts') {
        iconSVG = '<svg viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L18.66 19H5.34L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>';
      }

      skillsGrid.innerHTML += `
        <div class="skill-card" data-skill-cat="${skill.category}" data-skill-index="${index}">
          ${isEditMode ? `
            <div class="card-admin-actions btn-admin-only">
              <button class="btn-card-edit" onclick="window.editSkill(${index})" title="Edit Skill"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg></button>
              <button class="btn-card-delete" onclick="window.deleteSkill(${index})" title="Delete Skill"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
            </div>
          ` : ''}
          <div class="skill-icon-header">
            <div class="skill-icon-wrapper">${iconSVG}</div>
            <span class="skill-level-tag">${skill.level}</span>
          </div>
          <h3>${skill.name}</h3>
          <p>${skill.desc}</p>
          <div class="skill-tags">${tagsHTML}</div>
        </div>
      `;
    });
  }

  function filterSkillCards(filterValue) {
    const cards = document.querySelectorAll('#skills-grid .skill-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-skill-cat');
      if (filterValue === 'all' || cat === filterValue) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  function renderProjectsFilters() {
    const filterContainer = document.getElementById('projects-filter-container');
    filterContainer.innerHTML = `
      <button class="filter-btn active" data-project-filter="all">All</button>
      <button class="filter-btn" data-project-filter="springboot">Spring Boot</button>
      <button class="filter-btn" data-project-filter="j2ee">J2EE / MVC</button>
    `;

    const filterBtns = filterContainer.querySelectorAll('[data-project-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-project-filter');
        filterProjectCards(filterVal);
      });
    });
  }

  function renderProjectsGrid() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    portfolioData.projects.forEach((proj, index) => {
      let badgesHTML = '';
      if (proj.tech) {
        proj.tech.forEach(t => {
          badgesHTML += `<span class="project-badge">${t}</span>`;
        });
      }

      // Dynamic backgrounds for projects
      let svgArt = `
        <svg class="bg-art" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="var(--accent-primary)" stroke-width="1.5" stroke-dasharray="8 8"/>
          <polygon points="100,30 160,140 40,140" stroke="var(--accent-secondary)" stroke-width="1.5" />
        </svg>`;
      if (index % 2 === 1) {
        svgArt = `
          <svg class="bg-art" viewBox="0 0 200 200" fill="none">
            <rect x="30" y="30" width="140" height="140" rx="10" stroke="var(--accent-secondary)" stroke-width="1.5" stroke-dasharray="5 5"/>
            <circle cx="100" cy="100" r="50" stroke="var(--accent-primary)" stroke-width="1.5"/>
          </svg>`;
      }

      projectsGrid.innerHTML += `
        <div class="project-card" data-project-cat="${proj.category}" data-project-index="${index}">
          ${isEditMode ? `
            <div class="card-admin-actions btn-admin-only">
              <button class="btn-card-edit" onclick="window.editProject('${proj.id}')" title="Edit Project"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg></button>
              <button class="btn-card-delete" onclick="window.deleteProject('${proj.id}')" title="Delete Project"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
            </div>
          ` : ''}
          <div class="project-banner">
            ${svgArt}
            <div class="project-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
          </div>
          <div class="project-body">
            <div class="project-tech">${badgesHTML}</div>
            <h3>${proj.title}</h3>
            <p>${proj.shortDesc}</p>
            <div class="project-links">
              <a class="project-btn open-modal-btn" onclick="window.showProjectDetails('${proj.id}')" id="btn-details-${proj.id}">
                <span>View Details</span>
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
              </a>
              ${proj.github ? `
                <a href="${proj.github}" target="_blank" class="project-btn">
                  <span>GitHub</span>
                  <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });
  }

  function filterProjectCards(filterValue) {
    const cards = document.querySelectorAll('#projects-grid .project-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-project-cat');
      if (filterValue === 'all' || cat === filterValue) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  function renderTimeline() {
    const timelineList = document.getElementById('timeline-list');
    timelineList.innerHTML = '';

    portfolioData.experience.forEach((event, index) => {
      let bulletsHTML = '';
      if (event.details) {
        event.details.forEach(detail => {
          bulletsHTML += `<li>${detail}</li>`;
        });
      }

      timelineList.innerHTML += `
        <div class="timeline-item" data-timeline-index="${index}">
          <div class="timeline-node"></div>
          <div class="timeline-content">
            ${isEditMode ? `
              <div class="card-admin-actions btn-admin-only">
                <button class="btn-card-edit" onclick="window.editTimeline(${index})" title="Edit Event"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg></button>
                <button class="btn-card-delete" onclick="window.deleteTimeline(${index})" title="Delete Event"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
              </div>
            ` : ''}
            <div class="timeline-date">${event.date}</div>
            <h3>${event.title}</h3>
            <div class="timeline-subtitle">${event.company}</div>
            <ul class="timeline-details">${bulletsHTML}</ul>
          </div>
        </div>
      `;
    });

    // Reobserve timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (typeof timelineObserver !== 'undefined') {
      timelineItems.forEach(item => timelineObserver.observe(item));
    }
  }

  function renderCertifications() {
    const certsGrid = document.getElementById('certifications-grid');
    certsGrid.innerHTML = '';

    if (!portfolioData.certifications) {
      portfolioData.certifications = [];
    }

    portfolioData.certifications.forEach((cert, index) => {
      certsGrid.innerHTML += `
        <div class="cert-card" data-cert-index="${index}">
          ${isEditMode ? `
            <div class="card-admin-actions btn-admin-only">
              <button class="btn-card-edit" onclick="window.editCert(${index})" title="Edit Credential"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg></button>
              <button class="btn-card-delete" onclick="window.deleteCert(${index})" title="Delete Credential"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
            </div>
          ` : ''}
          <div class="cert-icon">
            <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
          </div>
          <div class="cert-info">
            <h3>${cert.title}</h3>
            <span class="cert-issuer">${cert.issuer}</span>
            <p>${cert.desc}</p>
          </div>
        </div>
      `;
    });
  }

  function renderContactInfo() {
    const phoneLink = document.getElementById('contact-phone-link');
    const emailLink = document.getElementById('contact-email-link');
    const phoneText = document.getElementById('contact-phone-text');
    const emailText = document.getElementById('contact-email-text');

    if (portfolioData.profile.phone) {
      phoneLink.href = `tel:${portfolioData.profile.phone.replace(/\s+/g, '')}`;
      phoneText.innerText = portfolioData.profile.phone;
      phoneLink.style.display = 'flex';
    } else {
      phoneLink.style.display = 'none';
    }

    if (portfolioData.profile.email) {
      emailLink.href = `mailto:${portfolioData.profile.email}`;
      emailText.innerText = portfolioData.profile.email;
      emailLink.style.display = 'flex';
    } else {
      emailLink.style.display = 'none';
    }
  }

  // =======================================================
  // 4. Modal Project Details Content Builder
  // =======================================================

  window.showProjectDetails = function(projectId) {
    const proj = portfolioData.projects.find(p => p.id === projectId);
    if (!proj) return;

    const modalBody = document.getElementById('project-modal-body-content');
    
    let highlightsHTML = '';
    if (proj.highlights) {
      proj.highlights.forEach(h => {
        highlightsHTML += `<li>${h}</li>`;
      });
    }

    let techDetailsHTML = '';
    if (proj.techDetails) {
      proj.techDetails.forEach(t => {
        techDetailsHTML += `<span class="skill-tag">${t}</span>`;
      });
    }

    modalBody.innerHTML = `
      <div class="modal-header">
        <h2>${proj.title}</h2>
        <span class="project-badge" style="align-self: flex-start; margin-top: 0.5rem;">${proj.category.toUpperCase()} Project</span>
      </div>
      <div class="modal-body">
        <p>${proj.longDesc || proj.shortDesc}</p>
        
        ${highlightsHTML ? `
          <h4>Core System Highlights</h4>
          <ul class="modal-highlights">${highlightsHTML}</ul>
        ` : ''}
        
        ${techDetailsHTML ? `
          <h4>Tech Stack Details</h4>
          <div class="modal-tech-list">${techDetailsHTML}</div>
        ` : ''}
        
        <div class="modal-links" style="margin-top: 2rem; display: flex; gap: 1rem;">
          ${proj.github ? `<a href="${proj.github}" target="_blank" class="btn btn-primary">View on GitHub</a>` : ''}
          ${proj.live ? `<a href="${proj.live}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ''}
        </div>
      </div>
    `;

    const modal = document.getElementById('project-details-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close dynamic details modal
  const detailsModal = document.getElementById('project-details-modal');
  const detailsClose = document.getElementById('project-modal-close');
  const detailsOverlay = document.getElementById('project-modal-overlay');

  if (detailsClose) {
    detailsClose.addEventListener('click', () => {
      detailsModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  if (detailsOverlay) {
    detailsOverlay.addEventListener('click', () => {
      detailsModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // =======================================================
  // 5. In-Place Editing Content Listeners
  // =======================================================

  function setupEditableListeners() {
    // 1. Text elements in Hero & Bio
    const editables = [
      { id: 'profile-name', path: 'profile.name' },
      { id: 'profile-objective', path: 'profile.objective' },
      { id: 'profile-about-bio', path: 'about.bio' },
      { id: 'hero-welcome-tag', path: 'profile.tagline' }
    ];

    editables.forEach(item => {
      const el = document.getElementById(item.id);
      if (!el) return;
      
      if (isEditMode) {
        el.setAttribute('contenteditable', 'true');
        el.classList.add('editing-active');
        
        // Save on losing focus
        el.addEventListener('blur', () => {
          setNestedValue(portfolioData, item.path, el.innerHTML.trim());
          saveDataLocally(false); // Silent auto-save
        });
      } else {
        el.removeAttribute('contenteditable');
        el.classList.remove('editing-active');
      }
    });

    // 2. Stats cards editing bindings
    if (isEditMode) {
      const statsGrid = document.getElementById('profile-stats-grid');
      const numberEls = statsGrid.querySelectorAll('[data-field="number"]');
      const labelEls = statsGrid.querySelectorAll('[data-field="label"]');

      numberEls.forEach((el, index) => {
        el.addEventListener('blur', () => {
          portfolioData.about.stats[index].number = el.innerText.trim();
          saveDataLocally(false);
        });
      });

      labelEls.forEach((el, index) => {
        el.addEventListener('blur', () => {
          portfolioData.about.stats[index].label = el.innerText.trim();
          saveDataLocally(false);
        });
      });
    }
  }

  function setNestedValue(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
  }

  // =======================================================
  // 6. Admin Panel / Editor UI Management
  // =======================================================

  const adminModeToggle = document.getElementById('admin-mode-toggle');
  const adminPanel = document.getElementById('admin-panel');
  const btnCloseAdmin = document.getElementById('btn-close-admin');
  const btnSaveData = document.getElementById('btn-save-data');
  const btnResetData = document.getElementById('btn-reset-data');
  const btnExportData = document.getElementById('btn-export-data');
  const btnImportTrigger = document.getElementById('btn-import-trigger');
  const importFileInput = document.getElementById('import-file-input');

  // Toggle Edit Mode on click
  if (adminModeToggle) {
    adminModeToggle.addEventListener('click', () => {
      isEditMode = !isEditMode;
      toggleEditorModeState();
    });
  }

  if (btnCloseAdmin) {
    btnCloseAdmin.addEventListener('click', () => {
      isEditMode = false;
      toggleEditorModeState();
    });
  }

  function toggleEditorModeState() {
    if (isEditMode) {
      adminPanel.classList.add('active');
      adminModeToggle.classList.add('active');
      document.body.classList.add('editor-active');
      showToast("Entered Portfolio Live Editor Mode!", "success");
    } else {
      adminPanel.classList.remove('active');
      adminModeToggle.classList.remove('active');
      document.body.classList.remove('editor-active');
      showToast("Exited Editor Mode.", "info");
    }
    // Re-render UI components to display/hide edit triggers
    renderAll();
  }

  // Save changes explicitly button
  if (btnSaveData) {
    btnSaveData.addEventListener('click', () => {
      saveDataLocally(true);
    });
  }

  function saveDataLocally(showFeedback) {
    try {
      localStorage.setItem('portfolio_data_v1', JSON.stringify(portfolioData));
      if (showFeedback) {
        showToast("All changes saved to browser memory!", "success");
      }
    } catch (e) {
      showToast("Error saving to browser storage.", "error");
    }
  }

  // Export JSON file config
  if (btnExportData) {
    btnExportData.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "portfolio-data.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("Exported configuration database successfully!", "success");
    });
  }

  // Import JSON file config
  if (btnImportTrigger) {
    btnImportTrigger.addEventListener('click', () => {
      importFileInput.click();
    });
  }

  if (importFileInput) {
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const parsed = JSON.parse(evt.target.result);
          
          // Basic validations
          if (parsed.profile && parsed.skills && parsed.projects) {
            portfolioData = parsed;
            localStorage.setItem('portfolio_data_v1', JSON.stringify(portfolioData));
            showToast("Imported new data configurations successfully!", "success");
            renderAll();
          } else {
            showToast("Invalid JSON schema configuration format.", "error");
          }
        } catch (err) {
          showToast("Failed to parse JSON file.", "error");
        }
      };
      reader.readAsText(file);
      // Reset input
      importFileInput.value = '';
    });
  }

  // Reset original defaults
  if (btnResetData) {
    btnResetData.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset all portfolio information back to your original resume defaults? This will overwrite your active edits.")) {
        portfolioData = JSON.parse(JSON.stringify(defaultPortfolioData));
        localStorage.setItem('portfolio_data_v1', JSON.stringify(portfolioData));
        showToast("Restored original resume configurations.", "info");
        renderAll();
      }
    });
  }

  // =======================================================
  // 7. Modals: Skill Forms Actions
  // =======================================================

  const skillModal = document.getElementById('skill-editor-modal');
  const btnAddSkillTrigger = document.getElementById('btn-add-skill-trigger');
  const btnCloseSkillModal = document.getElementById('btn-close-skill-modal');
  const skillForm = document.getElementById('skill-form');

  if (btnAddSkillTrigger) {
    btnAddSkillTrigger.addEventListener('click', () => {
      document.getElementById('skill-modal-title').innerText = "Add New Skill";
      skillForm.reset();
      document.getElementById('edit-skill-index').value = '';
      skillModal.classList.add('active');
    });
  }

  if (btnCloseSkillModal) {
    btnCloseSkillModal.addEventListener('click', () => {
      skillModal.classList.remove('active');
    });
  }

  window.editSkill = function(index) {
    const s = portfolioData.skills[index];
    if (!s) return;

    document.getElementById('skill-modal-title').innerText = "Edit Skill Detail";
    document.getElementById('edit-skill-index').value = index;
    document.getElementById('skill-name-input').value = s.name;
    document.getElementById('skill-category-input').value = s.category;
    document.getElementById('skill-level-input').value = s.level;
    document.getElementById('skill-desc-input').value = s.desc;
    document.getElementById('skill-tags-input').value = s.tags ? s.tags.join(', ') : '';

    skillModal.classList.add('active');
  };

  window.deleteSkill = function(index) {
    if (confirm(`Delete skill "${portfolioData.skills[index].name}"?`)) {
      portfolioData.skills.splice(index, 1);
      saveDataLocally(false);
      renderAll();
      showToast("Skill deleted successfully.", "info");
    }
  };

  if (skillForm) {
    skillForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('skill-name-input').value.trim();
      const category = document.getElementById('skill-category-input').value;
      const level = document.getElementById('skill-level-input').value;
      const desc = document.getElementById('skill-desc-input').value.trim();
      const tagsStr = document.getElementById('skill-tags-input').value.trim();
      const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(t => t.length > 0) : [];
      
      const editIndex = document.getElementById('edit-skill-index').value;

      const newSkill = { name, category, level, desc, tags };

      if (editIndex !== '') {
        // Edit existing
        portfolioData.skills[parseInt(editIndex)] = newSkill;
        showToast("Skill details updated!", "success");
      } else {
        // Add new
        portfolioData.skills.push(newSkill);
        showToast("New skill card added!", "success");
      }

      saveDataLocally(false);
      skillModal.classList.remove('active');
      renderAll();
    });
  }

  // =======================================================
  // 8. Modals: Project Forms Actions
  // =======================================================

  const projectModal = document.getElementById('project-editor-modal');
  const btnAddProjTrigger = document.getElementById('btn-add-project-trigger');
  const btnCloseProjModal = document.getElementById('btn-close-project-modal');
  const projectForm = document.getElementById('project-form');

  if (btnAddProjTrigger) {
    btnAddProjTrigger.addEventListener('click', () => {
      document.getElementById('project-modal-title').innerText = "Add New Project";
      projectForm.reset();
      document.getElementById('edit-project-id').value = '';
      projectModal.classList.add('active');
    });
  }

  if (btnCloseProjModal) {
    btnCloseProjModal.addEventListener('click', () => {
      projectModal.classList.remove('active');
    });
  }

  window.editProject = function(projId) {
    const p = portfolioData.projects.find(proj => proj.id === projId);
    if (!p) return;

    document.getElementById('project-modal-title').innerText = "Edit Project Showcase";
    document.getElementById('edit-project-id').value = p.id;
    document.getElementById('project-title-input').value = p.title;
    document.getElementById('project-category-input').value = p.category;
    document.getElementById('project-tech-badges').value = p.tech.join(', ');
    document.getElementById('project-short-desc').value = p.shortDesc;
    document.getElementById('project-long-desc').value = p.longDesc || '';
    document.getElementById('project-highlights').value = p.highlights ? p.highlights.join('\n') : '';
    document.getElementById('project-tech-details').value = p.techDetails ? p.techDetails.join(', ') : '';
    document.getElementById('project-github-input').value = p.github || '';
    document.getElementById('project-live-input').value = p.live || '';

    projectModal.classList.add('active');
  };

  window.deleteProject = function(projId) {
    const index = portfolioData.projects.findIndex(p => p.id === projId);
    if (index !== -1) {
      if (confirm(`Delete project "${portfolioData.projects[index].title}"?`)) {
        portfolioData.projects.splice(index, 1);
        saveDataLocally(false);
        renderAll();
        showToast("Project removed.", "info");
      }
    }
  };

  if (projectForm) {
    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('project-title-input').value.trim();
      const category = document.getElementById('project-category-input').value;
      const techStr = document.getElementById('project-tech-badges').value.trim();
      const tech = techStr.split(',').map(t => t.trim()).filter(t => t.length > 0);
      const shortDesc = document.getElementById('project-short-desc').value.trim();
      const longDesc = document.getElementById('project-long-desc').value.trim();
      const highlightsStr = document.getElementById('project-highlights').value.trim();
      const highlights = highlightsStr ? highlightsStr.split('\n').map(h => h.trim()).filter(h => h.length > 0) : [];
      const techDetailsStr = document.getElementById('project-tech-details').value.trim();
      const techDetails = techDetailsStr.split(',').map(t => t.trim()).filter(t => t.length > 0);
      const github = document.getElementById('project-github-input').value.trim();
      const live = document.getElementById('project-live-input').value.trim();

      const editId = document.getElementById('edit-project-id').value;

      const newProject = {
        id: editId || `project-${Date.now()}`,
        title, category, tech, shortDesc, longDesc, highlights, techDetails, github, live
      };

      if (editId) {
        // Edit existing
        const idx = portfolioData.projects.findIndex(p => p.id === editId);
        if (idx !== -1) {
          portfolioData.projects[idx] = newProject;
          showToast("Project card updated!", "success");
        }
      } else {
        // Add new
        portfolioData.projects.push(newProject);
        showToast("New project showcase published!", "success");
      }

      saveDataLocally(false);
      projectModal.classList.remove('active');
      renderAll();
    });
  }

  // =======================================================
  // 9. Modals: Timeline Forms Actions
  // =======================================================

  const timelineModal = document.getElementById('timeline-editor-modal');
  const btnAddTimelineTrigger = document.getElementById('btn-add-timeline-trigger');
  const btnCloseTimelineModal = document.getElementById('btn-close-timeline-modal');
  const timelineForm = document.getElementById('timeline-form');

  if (btnAddTimelineTrigger) {
    btnAddTimelineTrigger.addEventListener('click', () => {
      document.getElementById('timeline-modal-title').innerText = "Add Timeline Event";
      timelineForm.reset();
      document.getElementById('edit-timeline-index').value = '';
      timelineModal.classList.add('active');
    });
  }

  if (btnCloseTimelineModal) {
    btnCloseTimelineModal.addEventListener('click', () => {
      timelineModal.classList.remove('active');
    });
  }

  window.editTimeline = function(index) {
    const e = portfolioData.experience[index];
    if (!e) return;

    document.getElementById('timeline-modal-title').innerText = "Edit Timeline Event";
    document.getElementById('edit-timeline-index').value = index;
    document.getElementById('timeline-date-input').value = e.date;
    document.getElementById('timeline-title-input').value = e.title;
    document.getElementById('timeline-company-input').value = e.company;
    document.getElementById('timeline-details-input').value = e.details ? e.details.join('\n') : '';

    timelineModal.classList.add('active');
  };

  window.deleteTimeline = function(index) {
    if (confirm(`Delete event "${portfolioData.experience[index].title}"?`)) {
      portfolioData.experience.splice(index, 1);
      saveDataLocally(false);
      renderAll();
      showToast("Timeline event deleted.", "info");
    }
  };

  if (timelineForm) {
    timelineForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const date = document.getElementById('timeline-date-input').value.trim();
      const title = document.getElementById('timeline-title-input').value.trim();
      const company = document.getElementById('timeline-company-input').value.trim();
      const detailsStr = document.getElementById('timeline-details-input').value.trim();
      const details = detailsStr ? detailsStr.split('\n').map(d => d.trim()).filter(d => d.length > 0) : [];
      
      const editIndex = document.getElementById('edit-timeline-index').value;

      const newEvent = { date, title, company, details };

      if (editIndex !== '') {
        portfolioData.experience[parseInt(editIndex)] = newEvent;
        showToast("Timeline details updated!", "success");
      } else {
        portfolioData.experience.push(newEvent);
        showToast("New timeline event added!", "success");
      }

      saveDataLocally(false);
      timelineModal.classList.remove('active');
      renderAll();
    });
  }

  // =======================================================
  // 10. Modals: Certification Forms Actions
  // =======================================================

  const certModal = document.getElementById('cert-editor-modal');
  const btnAddCertTrigger = document.getElementById('btn-add-cert-trigger');
  const btnCloseCertModal = document.getElementById('btn-close-cert-modal');
  const certForm = document.getElementById('cert-form');

  if (btnAddCertTrigger) {
    btnAddCertTrigger.addEventListener('click', () => {
      document.getElementById('cert-modal-title').innerText = "Add Certification";
      certForm.reset();
      document.getElementById('edit-cert-index').value = '';
      certModal.classList.add('active');
    });
  }

  if (btnCloseCertModal) {
    btnCloseCertModal.addEventListener('click', () => {
      certModal.classList.remove('active');
    });
  }

  window.editCert = function(index) {
    const c = portfolioData.certifications[index];
    if (!c) return;

    document.getElementById('cert-modal-title').innerText = "Edit Certification";
    document.getElementById('edit-cert-index').value = index;
    document.getElementById('cert-title-input').value = c.title;
    document.getElementById('cert-issuer-input').value = c.issuer;
    document.getElementById('cert-desc-input').value = c.desc;

    certModal.classList.add('active');
  };

  window.deleteCert = function(index) {
    if (confirm(`Delete credential "${portfolioData.certifications[index].title}"?`)) {
      portfolioData.certifications.splice(index, 1);
      saveDataLocally(false);
      renderAll();
      showToast("Certification deleted.", "info");
    }
  };

  if (certForm) {
    certForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('cert-title-input').value.trim();
      const issuer = document.getElementById('cert-issuer-input').value.trim();
      const desc = document.getElementById('cert-desc-input').value.trim();
      
      const editIndex = document.getElementById('edit-cert-index').value;

      const newCert = { title, issuer, desc };

      if (editIndex !== '') {
        portfolioData.certifications[parseInt(editIndex)] = newCert;
        showToast("Credential details updated!", "success");
      } else {
        portfolioData.certifications.push(newCert);
        showToast("New certification card created!", "success");
      }

      saveDataLocally(false);
      certModal.classList.remove('active');
      renderAll();
    });
  }

  // =======================================================
  // 11. Modal: Social Links Form (Profile Details Popup)
  // =======================================================

  function openProfileLinksModal() {
    // Dynamically insert a temporary edit links modal
    let linkModalEl = document.getElementById('profile-links-editor-modal');
    if (!linkModalEl) {
      const modalHTML = `
        <div class="modal admin-modal" id="profile-links-editor-modal">
          <div class="modal-overlay" onclick="document.getElementById('profile-links-editor-modal').classList.remove('active')"></div>
          <div class="modal-container">
            <button class="modal-close" onclick="document.getElementById('profile-links-editor-modal').classList.remove('active')">✕</button>
            <div class="modal-content">
              <h2>Edit Profile Links & Details</h2>
              <form class="admin-form" id="profile-links-form">
                <div class="form-group">
                  <input type="text" id="profile-title-input" class="form-input" placeholder=" " required>
                  <label for="profile-title-input" class="form-label">Professional Role</label>
                </div>
                <div class="form-group">
                  <input type="text" id="profile-tagline-input" class="form-input" placeholder=" " required>
                  <label for="profile-tagline-input" class="form-label">Hero Welcome Tagline</label>
                </div>
                <div class="form-group">
                  <input type="text" id="profile-avatar-input" class="form-input" placeholder=" ">
                  <label for="profile-avatar-input" class="form-label">Avatar Image Path (e.g. avatar.jpg)</label>
                </div>
                <div class="form-group">
                  <input type="url" id="link-github-input" class="form-input" placeholder=" ">
                  <label for="link-github-input" class="form-label">GitHub URL</label>
                </div>
                <div class="form-group">
                  <input type="url" id="link-linkedin-input" class="form-input" placeholder=" ">
                  <label for="link-linkedin-input" class="form-label">LinkedIn URL</label>
                </div>
                <div class="form-group">
                  <input type="url" id="link-leetcode-input" class="form-input" placeholder=" ">
                  <label for="link-leetcode-input" class="form-label">LeetCode URL</label>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <input type="text" id="link-phone-input" class="form-input" placeholder=" ">
                    <label for="link-phone-input" class="form-label">Contact Phone</label>
                  </div>
                  <div class="form-group">
                    <input type="email" id="link-email-input" class="form-input" placeholder=" ">
                    <label for="link-email-input" class="form-label">Contact Email</label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Save Profile Info</button>
              </form>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      linkModalEl = document.getElementById('profile-links-editor-modal');
    }

    // Load values
    document.getElementById('profile-title-input').value = portfolioData.profile.title || '';
    document.getElementById('profile-tagline-input').value = portfolioData.profile.tagline || '';
    document.getElementById('profile-avatar-input').value = portfolioData.profile.avatar || '';
    document.getElementById('link-github-input').value = portfolioData.profile.github || '';
    document.getElementById('link-linkedin-input').value = portfolioData.profile.linkedin || '';
    document.getElementById('link-leetcode-input').value = portfolioData.profile.leetcode || '';
    document.getElementById('link-phone-input').value = portfolioData.profile.phone || '';
    document.getElementById('link-email-input').value = portfolioData.profile.email || '';

    const form = document.getElementById('profile-links-form');
    form.onsubmit = function(e) {
      e.preventDefault();
      portfolioData.profile.title = document.getElementById('profile-title-input').value.trim();
      portfolioData.profile.tagline = document.getElementById('profile-tagline-input').value.trim();
      portfolioData.profile.avatar = document.getElementById('profile-avatar-input').value.trim();
      portfolioData.profile.github = document.getElementById('link-github-input').value.trim();
      portfolioData.profile.linkedin = document.getElementById('link-linkedin-input').value.trim();
      portfolioData.profile.leetcode = document.getElementById('link-leetcode-input').value.trim();
      portfolioData.profile.phone = document.getElementById('link-phone-input').value.trim();
      portfolioData.profile.email = document.getElementById('link-email-input').value.trim();

      // Update subtitle typing array
      if (portfolioData.profile.title) {
        portfolioData.profile.subtitles = [
          portfolioData.profile.title,
          "Backend Engineer",
          "Spring Boot Enthusiast",
          "Computer Science Student"
        ];
      }

      saveDataLocally(false);
      linkModalEl.classList.remove('active');
      renderAll();
      showToast("Profile links and configurations updated!", "success");
    };

    linkModalEl.classList.add('active');
  }

  // =======================================================
  // 12. Helper: Toast Notifications
  // =======================================================

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    else if (type === 'error') icon = '❌';
    else if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('active'), 10);

    // Remove toast
    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // =======================================================
  // 13. Aesthetic Adjustments, Theme, Typing, & Reveal
  // =======================================================

  // A. Dark/Light Theme
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // B. Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // C. Typing text animation
  const typedTextSpan = document.getElementById('typed-text');
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    const subtitleArray = portfolioData.profile?.subtitles || defaultPortfolioData.profile.subtitles;
    if (!subtitleArray.length) return;

    if (charIndex < subtitleArray[textArrayIndex].length) {
      typedTextSpan.textContent += subtitleArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    const subtitleArray = portfolioData.profile?.subtitles || defaultPortfolioData.profile.subtitles;
    if (charIndex > 0) {
      typedTextSpan.textContent = subtitleArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= subtitleArray.length) textArrayIndex = 0;
      setTimeout(type, typingSpeed + 1100);
    }
  }

  setTimeout(type, newTextDelay + 250);

  // D. Scroll reveals & timeline observers
  const reveals = document.querySelectorAll('.reveal');
  const timelineGlow = document.getElementById('timeline-glow');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        updateTimelineGlow();
      }
    });
  }, {
    threshold: 0.5
  });

  function updateTimelineGlow() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (!timelineItems.length || !timelineGlow) return;
    
    let activeCount = 0;
    timelineItems.forEach(item => {
      if (item.classList.contains('active')) {
        activeCount++;
      }
    });
    
    const percentage = ((activeCount - 0.5) / timelineItems.length) * 100;
    timelineGlow.style.height = `${Math.min(Math.max(percentage, 0), 100)}%`;
  }

  function updateAestheticStates() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      timelineObserver.observe(item);
    });
    updateTimelineGlow();
  }

  // E. Recruiter contact form submission mock
  const contactForm = document.getElementById('recruiter-contact-form');
  const statusMsg = document.getElementById('form-status-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email-input').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      statusMsg.className = 'form-status';
      statusMsg.textContent = 'Sending message...';

      if (!name || !email || !subject || !message) {
        statusMsg.className = 'form-status error';
        statusMsg.textContent = 'Please fill out all required fields.';
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusMsg.className = 'form-status error';
        statusMsg.textContent = 'Please enter a valid email address.';
        return;
      }

      setTimeout(() => {
        statusMsg.className = 'form-status success';
        statusMsg.textContent = `Thank you, ${name}! Your inquiry was received. Sudarshan will contact you at ${email} shortly.`;
        contactForm.reset();

        setTimeout(() => {
          statusMsg.textContent = '';
          statusMsg.className = 'form-status';
        }, 6000);
      }, 1200);
    });
  }

  // =======================================================
  // 14. Kickstart Initialization
  // =======================================================

  initializeData();

});
