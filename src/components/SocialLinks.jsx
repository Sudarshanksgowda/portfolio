import Icon from './Icon';

/**
 * GitHub / LinkedIn / LeetCode row. Any link left empty in the data file is
 * skipped, so removing a profile is one edit.
 */
export default function SocialLinks({ profile, size = 20 }) {
  const links = [
    { href: profile.github, icon: 'github', label: 'GitHub' },
    { href: profile.linkedin, icon: 'linkedin', label: 'LinkedIn' },
    { href: profile.leetcode, icon: 'leetcode', label: 'LeetCode' },
  ].filter((l) => l.href);

  return (
    <div className="hero__socials">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="social"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={l.label}
          title={l.label}
        >
          <Icon name={l.icon} size={size} />
        </a>
      ))}
    </div>
  );
}
