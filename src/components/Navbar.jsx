import { useEffect, useState } from 'react';
import Icon from './Icon';
import useScrollSpy from '../hooks/useScrollSpy';

/** Sticky header: logo, section links with scroll-spy, theme toggle, mobile drawer. */
export default function Navbar({ name, navLinks, theme, onToggleTheme }) {
  const [stuck, setStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const renderLink = (link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      className={`nav__link ${active === link.id ? 'is-active' : ''}`}
      onClick={() => setDrawerOpen(false)}
    >
      {link.label}
    </a>
  );

  return (
    <>
      <nav className={`nav ${stuck ? 'is-stuck' : ''}`}>
        <div className="container nav__inner">
          <a href="#home" className="nav__logo">
            <span className="nav__mark">{initials}</span>
            <span>{name}</span>
          </a>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.id}>{renderLink(link)}</li>
            ))}
          </ul>

          <div className="nav__actions">
            <button
              type="button"
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
            </button>

            <button
              type="button"
              className="icon-btn nav__burger"
              onClick={() => setDrawerOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={drawerOpen}
            >
              <Icon name={drawerOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav__drawer ${drawerOpen ? 'is-open' : ''}`}>
        {navLinks.map(renderLink)}
      </div>
    </>
  );
}
