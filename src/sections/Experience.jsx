import Icon from '../components/Icon';
import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';

export default function Experience({ timeline, certifications }) {
  if (!timeline?.length && !certifications?.length) return null;

  return (
    <Section
      id="experience"
      eyebrow="Background"
      title="Experience & education"
    >
      {timeline?.length > 0 && (
        <div className="timeline">
          {timeline.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      )}

      {certifications?.length > 0 && (
        <>
          <h3 style={{ margin: '48px 0 20px', fontSize: '1.1rem' }}>Certifications</h3>
          <div className="certs">
            {certifications.map((c) => (
              <article key={c.title} className="card cert">
                <span className="cert__icon">
                  <Icon name="award" size={24} />
                </span>
                <h4 className="cert__title">{c.title}</h4>
                <p className="cert__issuer">{c.issuer}</p>
                <p className="cert__desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
