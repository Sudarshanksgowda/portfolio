import Icon from './Icon';

/** One project tile. Clicking anywhere on it opens the detail modal. */
export default function ProjectCard({ project, onOpen }) {
  return (
    <button type="button" className="card project" onClick={() => onOpen(project)}>
      <div className="project__top">
        <span className="project__icon">
          <Icon name={project.category === 'frontend' ? 'layout' : 'server'} size={22} />
        </span>
        <span className="project__meta">
          {project.status && <span className="project__status">{project.status}</span>}
          <span>{project.year}</span>
        </span>
      </div>

      <h3 className="project__title">{project.title}</h3>
      {project.subtitle && <p className="project__subtitle">{project.subtitle}</p>}
      <p className="project__summary">{project.summary}</p>

      <div className="project__badges">
        {project.badges.map((b) => (
          <span key={b} className="chip">{b}</span>
        ))}
      </div>

      <span className="project__more">
        View details <Icon name="arrowRight" size={16} />
      </span>
    </button>
  );
}
