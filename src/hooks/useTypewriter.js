import { useEffect, useState } from 'react';

/**
 * Types each word out, pauses, deletes it, moves to the next - the hero role
 * animation. Returns the text to show right now.
 */
export default function useTypewriter(words, { typeMs = 90, deleteMs = 45, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) return undefined;

    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === word) {
      delay = holdMs;
    } else if (deleting && text === '') {
      delay = 320;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}
