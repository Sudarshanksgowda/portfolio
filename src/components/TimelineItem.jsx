import Icon from './Icon';

export default function TimelineItem({ item }) {
  return (
    <div className="tl-item">
      <span className="tl-item__dot">
        <Icon name={item.type === 'education' ? 'education' : 'work'} size={13} />
      </span>
      <span className="tl-item__period">{item.period}</span>
      <h3 className="tl-item__title">{item.title}</h3>
      <p className="tl-item__org">{item.org}</p>
      {item.points?.length > 0 && (
        <ul className="tl-item__points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
