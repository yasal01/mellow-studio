import SafeImage from './SafeImage'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="section__inner about__inner">
        <div className="about__visual">
          <figure className="about__figure about__figure--main">
            <SafeImage
              src="/assets/about-studio.jpg"
              alt="Bright modern studio interior with natural light and open desks"
              className="about__img"
            />
          </figure>
          <figure className="about__figure about__figure--accent">
            <SafeImage
              src="/assets/about-desk.jpg"
              alt="Open-plan creative office with desks and warm daylight"
              className="about__img"
            />
          </figure>
          <div className="about__badge" aria-hidden="true">
            <span>Independent</span>
            <strong>Creative studio</strong>
          </div>
        </div>

        <div className="about__copy">
          <p className="section__eyebrow">About the studio</p>
          <h2 id="about-heading" className="about__title">
            Soft edges.
            <span>Thoughtful ideas.</span>
          </h2>
          <p className="about__text">
            Mellow Studio is an independent creative studio that combines thoughtful design,
            digital development, and playful ideas. We care about atmosphere as much as
            outcomes — building brands and digital experiences that feel human, clear, and
            quietly distinctive.
          </p>
          <p className="about__text">
            Whether we are shaping an identity, designing a website, or directing a
            campaign, we keep collaboration close, visuals intentional, and the process
            refreshingly straightforward.
          </p>
          <ul className="about__values">
            <li>
              <strong>Design with feeling</strong>
              <span>Visual systems that feel as good as they look.</span>
            </li>
            <li>
              <strong>Digital with care</strong>
              <span>Interfaces built for clarity, speed, and delight.</span>
            </li>
            <li>
              <strong>Stories that stick</strong>
              <span>Campaigns with personality and a point of view.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
