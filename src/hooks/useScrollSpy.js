import { useEffect, useState } from 'react';

/**
 * Tells the navbar which section is currently on screen, so the matching link
 * can be highlighted. Picks the last section whose top has passed the nav bar.
 */
export default function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}
