import Icon from '../components/Icon';
import SocialLinks from '../components/SocialLinks';
import useTypewriter from '../hooks/useTypewriter';

/**
 * Landing screen. The terminal card on the right renders the profile as a Java
 * object — a small nod to the stack he actually works in, and it stays in sync
 * with the data file rather than being a static image.
 */
export default function Hero({ profile }) {
  const typed = useTypewriter(profile.roles);

  return (
    <header className="hero" id="home">
      <span className="hero__glow hero__glow--1" aria-hidden="true" />
      <span className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__grid">
        <div>
          <span className="hero__tag">
            <span className="hero__dot" aria-hidden="true" />
            Open to opportunities
          </span>

          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__name">{profile.name}</span>
          </h1>

          <p className="hero__typed" aria-live="polite">
            <b>{typed}</b>
            <span className="hero__caret" aria-hidden="true" />
          </p>

          <p className="hero__desc">{profile.objective}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View my work <Icon name="arrowRight" size={17} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
            {profile.resumeFile && (
              <a
                className="btn btn--ghost"
                href={profile.resumeFile}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="external" size={16} /> Resume
              </a>
            )}
          </div>

          <SocialLinks profile={profile} />
        </div>

        <div className="hero__visual">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot" style={{ background: '#ff5f57' }} />
              <span className="terminal__dot" style={{ background: '#febc2e' }} />
              <span className="terminal__dot" style={{ background: '#28c840' }} />
              <span className="terminal__name">Developer.java</span>
            </div>

            <div className="terminal__body">
              <div className="terminal__line">
                <span className="tk-key">public class</span> <span className="tk-str">Developer</span>{' '}
                <span className="tk-punc">{'{'}</span>
              </div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-key">String</span> name <span className="tk-punc">=</span>{' '}
                <span className="tk-str">&quot;{profile.name}&quot;</span>
                <span className="tk-punc">;</span>
              </div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-key">String</span> role <span className="tk-punc">=</span>{' '}
                <span className="tk-str">&quot;{profile.roles[0]}&quot;</span>
                <span className="tk-punc">;</span>
              </div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-key">String</span> base <span className="tk-punc">=</span>{' '}
                <span className="tk-str">&quot;Bengaluru, India&quot;</span>
                <span className="tk-punc">;</span>
              </div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-key">boolean</span> openToWork <span className="tk-punc">=</span>{' '}
                <span className="tk-num">true</span>
                <span className="tk-punc">;</span>
              </div>
              <div className="terminal__line">&nbsp;</div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-comment">// currently building with</span>
              </div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-key">String[]</span> stack <span className="tk-punc">=</span>{' '}
                <span className="tk-punc">{'{'}</span>
              </div>
              <div className="terminal__line">
                {'    '}
                <span className="tk-str">&quot;Spring Boot&quot;</span>
                <span className="tk-punc">,</span> <span className="tk-str">&quot;MySQL&quot;</span>
                <span className="tk-punc">,</span>
              </div>
              <div className="terminal__line">
                {'    '}
                <span className="tk-str">&quot;React&quot;</span>
                <span className="tk-punc">,</span> <span className="tk-str">&quot;REST APIs&quot;</span>
              </div>
              <div className="terminal__line">
                {'  '}
                <span className="tk-punc">{'};'}</span>
              </div>
              <div className="terminal__line">
                <span className="tk-punc">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
