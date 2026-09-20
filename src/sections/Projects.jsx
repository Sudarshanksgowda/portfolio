import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Section from '../components/Section';

const LABELS = {
  all: 'All',
  backend: 'Backend',
  frontend: 'Frontend',
  fullstack: 'Full Stack',
};

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('all');
  const [openProject, setOpenProject] = useState(null);

  // Only offer filters for categories that actually have projects, so the bar
  // stays correct automatically when projects are added or removed.
  const filters = useMemo(() => {
    const present = [...new Set(projects.map((p) => p.category))];
    return ['all', ...present];
  }, [projects]);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  if (!projects?.length) return null;

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Projects"
      lead="What I have built, and what each one taught me."
    >
      {filters.length > 2 && (
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {LABELS[f] ?? f}
            </button>
          ))}
        </div>
      )}

      <div className="projects__grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setOpenProject} />
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </Section>
  );
}
