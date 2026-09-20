/**
 * Wrapper every page section uses, so headings, spacing and the scroll-reveal
 * animation stay identical everywhere.
 */
export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`section reveal ${className}`}>
      <div className="container">
        {(eyebrow || title) && (
          <header className="section__head">
            {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
            {title && <h2 className="section__title">{title}</h2>}
            {lead && <p className="section__lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
