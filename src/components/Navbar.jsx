import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={closeMenu} aria-label="Mellow Studio home">
          <span className="nav__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="nav__wordmark">
            Mellow<span>Studio</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta btn btn--primary">
          Say hello
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__drawer ${open ? 'nav__drawer--open' : ''}`}
        hidden={!open}
      >
        <nav className="nav__drawer-links" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary" onClick={closeMenu}>
            Say hello
          </a>
        </nav>
      </div>
    </header>
  )
}
