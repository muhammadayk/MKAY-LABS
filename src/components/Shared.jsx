const prod = window.location.hostname.endsWith('mkaylabs.xyz')
export const PERSONAL_URL = prod ? 'https://mkay.mkaylabs.xyz' : '/?site=mkay'
export const BRAND_URL = prod ? 'https://mkaylabs.xyz' : '/'
export const X_URL = 'https://x.com/0x_mkay'

export function Nav({ links, cta }) {
  return (
    <header className="nav">
      <a className="logo" href="/">MKAY<i /></a>
      <nav>{links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}</nav>
      <a className="pill pill-sm" href={cta.href}>{cta.label}</a>
    </header>
  )
}

export function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="band" aria-hidden="true">
      <div className="track">
        {row.map((t, i) => <span key={i}>{t}<b>✦</b></span>)}
      </div>
    </div>
  )
}

export function Orb() {
  return (
    <div className="orb" aria-hidden="true">
      <div className="orb-core" />
      <div className="ring r1" /><div className="ring r2" /><div className="ring r3" />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} MKAY Labs</span>
      <a href={X_URL} target="_blank" rel="noreferrer">@0x_mkay on X</a>
    </footer>
  )
}
