import SafeImage from './SafeImage'
import BrowserFrame from './BrowserFrame'
import { projects } from '../data/content'
import './Work.css'

export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-heading">
      <div className="section__inner">
        <header className="work__header">
          <div>
            <p className="section__eyebrow">Selected work</p>
            <h2 id="work-heading" className="section__title">
              Concept projects with personality.
            </h2>
          </div>
          <p className="section__lead work__lead">
            Six fictional studio concepts — each with its own visual world, crafted to show
            how we think about branding, digital, and campaign storytelling.
          </p>
        </header>

        <ul className="work__grid">
          {projects.map((project) => (
            <li key={project.id} className={`work__item work__item--${project.size}`}>
              <article className="work-card">
                <div className="work-card__media">
                  {project.visual === 'browser' ? (
                    <BrowserFrame
                      title="nova.digital / concept"
                      caption="Studio concept UI"
                    />
                  ) : (
                    <SafeImage
                      src={project.image}
                      alt={project.alt}
                      className="work-card__img"
                      loading="eager"
                    />
                  )}
                  <span className="work-card__tag">{project.tag}</span>
                </div>
                <div className="work-card__meta">
                  <span className="work-card__category">{project.category}</span>
                  <h3 className="work-card__title">{project.title}</h3>
                  <p className="work-card__blurb">{project.description}</p>
                  <a href="#contact" className="work-card__cta">
                    Explore this concept
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
