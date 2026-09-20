import { useEffect, useRef } from 'react';
import Icon from './Icon';

/**
 * Project detail popup.
 *
 * Closes on Escape and on a click outside the panel, locks background scrolling
 * while open, and moves focus to the panel so keyboard users land inside it.
 */
export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal" onClick={onClose} role="presentation">
      <div
        className="modal__panel"
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={18} />
        </button>

        <h3 className="modal__title">{project.title}</h3>
        <p className="modal__subtitle">
          {project.role}
          {project.year ? ` · ${project.year}` : ''}
          {project.status ? ` · ${project.status}` : ''}
        </p>

        <div className="modal__section">
          <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem' }}>{project.summary}</p>
        </div>

        {project.highlights?.length > 0 && (
          <div className="modal__section">
            <p className="modal__label">What it does</p>
            <ul className="modal__list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tech?.length > 0 && (
          <div className="modal__section">
            <p className="modal__label">Technologies and tools</p>
            <div className="modal__chips">
              {project.tech.map((t) => (
                <span key={t} className="chip chip--plain">{t}</span>
              ))}
            </div>
          </div>
        )}

        {(project.github || project.live) && (
          <div className="modal__actions">
            {project.github && (
              <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer noopener">
                <Icon name="github" size={17} /> View code
              </a>
            )}
            {project.live && (
              <a className="btn btn--primary" href={project.live} target="_blank" rel="noreferrer noopener">
                <Icon name="external" size={17} /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
