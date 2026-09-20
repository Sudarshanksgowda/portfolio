import SocialLinks from './SocialLinks';

export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} {profile.name} &middot; Built with React and Vite
        </p>
        <SocialLinks profile={profile} size={18} />
      </div>
    </footer>
  );
}
