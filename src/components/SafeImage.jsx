import { useState } from 'react'

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23EDE4FF'/%3E%3Cstop offset='.5' stop-color='%23FCE8EE'/%3E%3Cstop offset='1' stop-color='%23E8F3FC'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E"

export default function SafeImage({
  src,
  alt,
  className = '',
  style,
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <img
      src={failed ? FALLBACK : src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
