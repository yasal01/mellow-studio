import './Footer.css'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://www.behance.net', label: 'Behance' },
  { href: 'https://dribbble.com', label: 'Dribbble' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__logo" aria-label="Mellow Studio home">
            <span className="footer__mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="footer__wordmark">
              Mellow<span>Studio</span>
            </span>
          </a>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="footer__social">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Mellow Studio. Crafted with soft edges &amp; strong ideas.</p>
          <a href="mailto:hello@mellowstudio.studio">hello@mellowstudio.studio</a>
        </div>
      </div>
    </footer>
  )
}
