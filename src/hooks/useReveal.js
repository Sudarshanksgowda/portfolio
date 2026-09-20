import { useEffect } from 'react';

/**
 * Fades sections in as they scroll into view.
 *
 * Runs once and watches every .reveal element on the page. Elements are
 * unobserved after they appear, so scrolling back up does not re-trigger them.
 */
export default function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');

    // Without IntersectionObserver, just show everything rather than hiding it.
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    // Only now is it safe for the CSS to hide sections: this class is what
    // switches the hidden state on, so a JS failure leaves the page readable.
    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-reveal');
    };
  }, []);
}
