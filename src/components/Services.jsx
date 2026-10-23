import SafeImage from './SafeImage'
import { services } from '../data/content'
import './Services.css'

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <div className="section__inner">
        <header className="services__header">
          <p className="section__eyebrow">What we do</p>
          <h2 id="services-heading" className="section__title">
            Creative craft with room to grow.
          </h2>
          <p className="section__lead">
            Four focused offerings — designed to help brands look refined, feel warm, and
            move with intention across every touchpoint.
          </p>
        </header>

        <ul className="services__grid">
          {services.map((service) => (
            <li key={service.id}>
              <article className={`service-card service-card--${service.id}`}>
                <div className="service-card__media">
                  <SafeImage
                    src={service.image}
                    alt={service.alt}
                    className="service-card__img"
                  />
                  <span className="service-card__label">{service.label}</span>
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <a href="#contact" className="service-card__link">
                    Talk about this
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
