# Sudarshan K S — Portfolio

Personal portfolio built with **React 18 + Vite**, plain **HTML, CSS and JavaScript**.
No UI framework, no CSS library, no backend.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5174
```

```bash
npm run build    # production files into dist/
npm run preview  # check the built version before deploying
```

---

## How to change anything

**Everything you will ever want to edit lives in one file: `src/data/portfolio.js`.**

Open it, change a value, save. The page updates instantly while `npm run dev` is
running. You never need to touch a component.

### Add a project

Open `src/data/portfolio.js`, find the `projects` array, copy one whole block,
paste it below the others and change the values:

```js
{
  id: 'my-new-project',          // unique, no spaces
  title: 'My New Project',
  subtitle: 'One line about it',
  role: 'Backend Developer',
  year: '2026',
  status: '',                    // 'Ongoing' shows an amber badge; '' hides it
  category: 'backend',           // 'backend' | 'frontend' | 'fullstack'
  summary: 'One or two sentences shown on the card.',
  highlights: [
    'A thing it does.',
    'Another thing it does.',
  ],
  tech: ['Java', 'Spring Boot', 'MySQL'],   // full list, shown in the popup
  badges: ['Spring Boot', 'MySQL'],         // 2-4 chips on the card
  github: 'https://github.com/...',         // '' hides the button
  live: '',                                 // '' hides the button
},
```

The filter buttons update themselves — add a `frontend` project and a "Frontend"
filter appears automatically.

### Other common edits

| I want to...              | Where                                                    |
|---------------------------|----------------------------------------------------------|
| Change my name, email, phone, links | `profile` at the top                           |
| Change the rotating job titles      | `profile.roles`                                |
| Rewrite the About text              | `about.paragraphs` (one string per paragraph)  |
| Change the four stat cards          | `about.facts`                                  |
| Add or remove a skill               | `skillGroups` → the relevant group's `items`   |
| Add a job or degree                 | `timeline`                                     |
| Remove the certifications section   | set `certifications: []`                       |
| Add a resume download button        | put the PDF in `public/`, set `profile.resumeFile: '/my-cv.pdf'` |
| Change the accent colour            | `--accent-1` / `--accent-2` in `src/styles/global.css` |

Any section whose array is empty disappears from the page **and** the navigation.

---

## Project structure

```
src/
├── data/portfolio.js      ← all content lives here
├── App.jsx                page composition
├── main.jsx               entry point
├── styles/global.css      design tokens + all styling
├── hooks/
│   ├── useTheme.js        dark/light, remembered per visitor
│   ├── useTypewriter.js   the rotating job title
│   ├── useReveal.js       fade sections in on scroll
│   └── useScrollSpy.js    highlights the current nav link
├── components/
│   ├── Navbar, Footer, ScrollToTop
│   ├── Section            shared section wrapper
│   ├── ProjectCard, ProjectModal
│   ├── TimelineItem, SocialLinks
│   └── Icon.jsx           every SVG icon, in one file
└── sections/
    Hero, About, Skills, Projects, Experience, Contact
```

The split is deliberate: **components decide how things look, the data file
decides what they say.** That is why adding a project never means editing JSX.

---

## Features

- Dark and light theme, remembered between visits, defaulting to the visitor's
  system preference
- Typewriter effect on the job title
- Scroll-spy navigation and fade-in sections
- Project filtering by category, with a detail popup (closes on Escape or a
  click outside)
- Contact form that opens the visitor's email client with the message pre-filled
  — it genuinely works on a static host with no backend
- Responsive from 1440px down to 375px
- Respects `prefers-reduced-motion`

---

## Deploying

The build output is a plain static site, so anything that serves files works.

**GitHub Pages**

```bash
npm run build
```

Push the `dist/` folder to a `gh-pages` branch, or point Pages at it.
`base: './'` is already set in `vite.config.js`, so it works from a repository
subfolder without further configuration.

**Netlify / Vercel** — connect the repository and use:

- Build command: `npm run build`
- Publish directory: `dist`

---

## Notes

- `_legacy-vanilla/` holds the previous HTML/CSS/JS version of this site, kept as
  a backup. Delete it whenever you are happy with the new one.
- `avatar.jpg` sits in the project root and is **not** used by the site — the hero
  shows the `Developer.java` card instead. It is out of `public/` so the 547 KB
  does not ship with every deploy. To use it instead, move it into a `public/`
  folder and add `<img src="/avatar.jpg" />` to `src/sections/Hero.jsx`.
- The GitHub, LinkedIn and LeetCode URLs in `portfolio.js` were carried over from
  the old site — **check they are right before publishing**, they were not in the
  resume PDFs.
- Project `github` links currently point at the profile root. Replace them with
  the actual repository URLs.
- The certifications are not on either resume. They are included because they
  look real and add value; delete them from `portfolio.js` if you would rather
  the site matched the resume exactly.
