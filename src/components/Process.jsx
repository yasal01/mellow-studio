import { processSteps } from '../data/content'
import './Process.css'

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-heading">
      <div className="section__inner">
        <header className="process__header">
          <p className="section__eyebrow">How we work</p>
          <h2 id="process-heading" className="section__title">
            A creative process with room to breathe.
          </h2>
          <p className="section__lead">
            Four clear steps — from first conversation to a polished launch — without the mystery.
          </p>
        </header>

        <ol className="process__steps">
          {processSteps.map((step, index) => (
            <li key={step.num} className="process-step">
              {index < processSteps.length - 1 && (
                <span className="process-step__connector" aria-hidden="true" />
              )}
              <span className="process-step__num">{step.num}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
