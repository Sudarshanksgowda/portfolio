import { useState } from 'react';
import Icon from '../components/Icon';
import Section from '../components/Section';

/**
 * Contact details plus a message form.
 *
 * The form opens the visitor's own mail client with everything pre-filled
 * (a `mailto:` link) rather than posting to a server. It genuinely works on a
 * static host with no backend and no third-party service — unlike a form that
 * looks like it sends and quietly does nothing.
 *
 * To switch to a real submission later, sign up with a form service such as
 * Formspree and replace the body of `handleSubmit` with a fetch() to their URL.
 */
export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell me your name';
    if (!form.email.trim()) next.email = 'An email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'That does not look like a valid email';
    if (!form.message.trim()) next.message = 'Please write a message';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n--\n${form.name.trim()}\n${form.email.trim()}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const rows = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: 'phone',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    { icon: 'pin', label: 'Location', value: profile.location, href: null },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's talk"
      lead="Looking for a Java full stack or backend developer? I'd like to hear from you."
    >
      <div className="contact__grid">
        <div className="contact__list">
          {rows.map((row) => {
            const inner = (
              <>
                <span className="contact-row__icon">
                  <Icon name={row.icon} size={18} />
                </span>
                <span>
                  <span className="contact-row__label">{row.label}</span>
                  <span className="contact-row__value">{row.value}</span>
                </span>
              </>
            );

            return row.href ? (
              <a key={row.label} className="card contact-row" href={row.href}>
                {inner}
              </a>
            ) : (
              <div key={row.label} className="card contact-row">
                {inner}
              </div>
            );
          })}
        </div>

        <form className="card form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="field__label" htmlFor="cf-name">Your name</label>
            <input
              id="cf-name"
              name="name"
              className="field__input"
              value={form.name}
              onChange={update}
              placeholder="Jane Recruiter"
            />
            {errors.name && <span className="field__error">{errors.name}</span>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="cf-email">Email address</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              className="field__input"
              value={form.email}
              onChange={update}
              placeholder="jane@company.com"
            />
            {errors.email && <span className="field__error">{errors.email}</span>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              name="subject"
              className="field__input"
              value={form.subject}
              onChange={update}
              placeholder="Java Developer role"
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              className="field__input field__input--area"
              value={form.message}
              onChange={update}
              placeholder="Tell me about the role or project..."
            />
            {errors.message && <span className="field__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn--primary">
            <Icon name="mail" size={17} /> Send message
          </button>

          <p className="form__note">
            This opens your email app with the message ready to send.
          </p>
        </form>
      </div>
    </Section>
  );
}
