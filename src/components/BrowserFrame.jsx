import './BrowserFrame.css'

/**
 * Studio-built concept UI shown inside a clean browser chrome.
 * Used for website design portfolio cards — not a real client product.
 */
export default function BrowserFrame({ title = 'nova.digital', caption }) {
  return (
    <div className="browser-frame" role="img" aria-label={caption || `Concept website preview for ${title}`}>
      <div className="browser-frame__chrome">
        <span className="browser-frame__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-frame__url">{title}</span>
      </div>
      <div className="browser-frame__viewport">
        <div className="nova-ui">
          <header className="nova-ui__nav">
            <span className="nova-ui__logo">NOVA</span>
            <span className="nova-ui__links" aria-hidden="true">
              <em />
              <em />
              <em />
            </span>
          </header>
          <div className="nova-ui__hero">
            <p className="nova-ui__eyebrow">Product platform</p>
            <h4 className="nova-ui__title">Clarity for modern teams</h4>
            <p className="nova-ui__body">A calm digital product experience in blue and violet.</p>
            <span className="nova-ui__cta" aria-hidden="true">Get started</span>
          </div>
          <div className="nova-ui__cards" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {caption ? <p className="browser-frame__caption">{caption}</p> : null}
    </div>
  )
}
