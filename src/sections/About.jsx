import Section from '../components/Section';

export default function About({ about }) {
  return (
    <Section id="about" eyebrow="Introduction" title="About me">
      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <div className="facts">
          {about.facts.map((f) => (
            <div key={f.label} className="card fact">
              <span className="fact__value">{f.value}</span>
              <span className="fact__label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
