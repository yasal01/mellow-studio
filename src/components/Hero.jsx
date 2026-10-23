import SafeImage from './SafeImage'
import './Hero.css'

const floatingCards = [
  {
    id: 'branding',
    label: 'Branding',
    title: 'Printed identity',
    image: '/assets/hero-brand.jpg',
    alt: 'Stack of blank white business cards photographed on a soft grey surface',
    tone: 'pink',
    rotate: -7,
  },
  {
    id: 'web',
    label: 'Web Design',
    title: 'Wireframes & craft',
    image: '/assets/hero-web.jpg',
    alt: 'Hand-drawn website wireframes in a sketchbook with a blue pen',
    tone: 'lavender',
    rotate: 6,
  },
  {
    id: 'campaign',
    label: 'Campaigns',
    title: 'Fashion direction',
    image: '/assets/hero-campaign.jpg',
    alt: 'Grey velvet hangers on a black clothing rail against a white wall',
    tone: 'sky',
    rotate: -4,
  },
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />
      <div className="hero__glow hero__glow--c" aria-hidden="true" />
      <div className="hero__shape hero__shape--blob" aria-hidden="true" />
      <div className="hero__shape hero__shape--ring" aria-hidden="true" />
      <div className="hero__shape hero__shape--dot" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__brand">Mellow Studio</p>
          <h1 id="hero-heading" className="hero__title">
            <span className="hero__title-line">Creative ideas,</span>
            <span className="hero__title-line hero__title-accent">digital experiences,</span>
            <span className="hero__title-line">beautifully made.</span>
          </h1>
          <p className="hero__intro">
            Mellow Studio is an independent creative studio crafting brand identities,
            websites, and campaigns that feel warm, intentional, and quietly memorable.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View selected work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Start a project
            </a>
          </div>
          <ul className="hero__chips" aria-label="Focus areas">
            <li>Brand identity</li>
            <li>Web design</li>
            <li>Campaigns</li>
          </ul>
        </div>

        <div className="hero__stage">
          {floatingCards.map((card, index) => (
            <article
              key={card.id}
              className={`float-card float-card--${card.tone} float-card--${index + 1}`}
              style={{ '--card-rotate': `${card.rotate}deg` }}
            >
              <div className="float-card__media">
                <SafeImage
                  src={card.image}
                  alt={card.alt}
                  className="float-card__img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <p className="float-card__label">{card.label}</p>
              <h2 className="float-card__title">{card.title}</h2>
            </article>
          ))}
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span>Explore</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
