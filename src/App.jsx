import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import useTheme from './hooks/useTheme';
import useReveal from './hooks/useReveal';

import {
  profile,
  about,
  skillGroups,
  projects,
  timeline,
  certifications,
  navLinks,
} from './data/portfolio';

/**
 * Page composition.
 *
 * Every section is handed its slice of the data file and nothing else, so the
 * content and the markup stay separate: to change what the site says, edit
 * src/data/portfolio.js and leave these components alone.
 */
export default function App() {
  const [theme, toggleTheme] = useTheme();
  useReveal();

  return (
    <>
      <Navbar
        name={profile.name}
        navLinks={navLinks}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero profile={profile} />
        <About about={about} />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Experience timeline={timeline} certifications={certifications} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
      <ScrollToTop />
    </>
  );
}
