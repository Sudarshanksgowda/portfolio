import Icon from '../components/Icon';
import Section from '../components/Section';

/** Skill groups, mirroring how the resume groups them so the two always agree. */
export default function Skills({ skillGroups }) {
  if (!skillGroups?.length) return null;

  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Technical skills"
      lead="The tools I reach for, grouped the way I actually think about them."
    >
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="card skill-group">
            <div className="skill-group__head">
              <span className="skill-group__icon">
                <Icon name={group.icon} size={20} />
              </span>
              <h3 className="skill-group__title">{group.title}</h3>
            </div>

            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item.name} className="skill-item">
                  <span className="skill-item__name">{item.name}</span>
                  <span className="skill-item__detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
