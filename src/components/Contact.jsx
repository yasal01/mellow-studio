import { useState } from 'react'
import './Contact.css'

const services = [
  'Brand Identity',
  'Website Development',
  'Social Media & Content',
  'Creative Campaigns',
  'Not sure yet',
]

const initial = {
  name: '',
  email: '',
  service: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name should be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.service) {
    errors.service = 'Please select a service.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please share a short project note.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'A little more detail helps — at least 20 characters.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setStatus('ready')
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="section__inner">
        <div className="contact__panel">
          <div className="contact__shapes" aria-hidden="true">
            <span className="contact__orb contact__orb--1" />
            <span className="contact__orb contact__orb--2" />
            <span className="contact__orb contact__orb--3" />
          </div>

          <div className="contact__layout">
            <div className="contact__intro">
              <p className="section__eyebrow contact__eyebrow">Let&apos;s collaborate</p>
              <h2 id="contact-heading" className="contact__title">
                Have a project that deserves a little magic?
              </h2>
              <p className="contact__text">
                Tell us about your brand, your timeline, and the feeling you want people to
                walk away with. We&apos;d love to hear it.
              </p>
              <a
                href="mailto:hello@mellowstudio.studio?subject=Project%20inquiry"
                className="contact__email"
              >
                hello@mellowstudio.studio
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="contact-form__error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="contact-form__error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="contact-form__error" role="alert">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Project note</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Share a little about your project, goals, or timeline..."
                />
                {errors.message && (
                  <p id="message-error" className="contact-form__error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn--primary contact-form__submit">
                Send inquiry
              </button>

              {status === 'error' && (
                <p className="contact-form__status contact-form__status--error" role="alert">
                  Please fix the highlighted fields and try again.
                </p>
              )}

              {status === 'ready' && (
                <div className="contact-form__status contact-form__status--ready" role="status">
                  <p>
                    Looks good — your inquiry is ready. This demo site does not have a
                    backend submission service configured yet.
                  </p>
                  <p>
                    Please email{' '}
                    <a href="mailto:hello@mellowstudio.studio?subject=Project%20inquiry">
                      hello@mellowstudio.studio
                    </a>{' '}
                    directly, or connect a form service (Formspree, Netlify Forms, etc.) to
                    enable sending from this page.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
