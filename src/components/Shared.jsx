import { useEffect, useState } from 'react'

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

export const TG_URL = 'https://t.me/MKAY_HQ'

const TG_FALLBACK = {
  title: 'MKAY HQ',
  description: 'Opportunities, gigs, alpha, airdrops, job openings and other updates.',
  photo: null,
  subscribers: null,
}
const compact = (n) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)

// Embedded channel card. Pulls live name, photo and subscriber count from
// /api/telegram (see api/telegram.js); falls back to static text if that fails.
export function TGCard() {
  const [d, setD] = useState(TG_FALLBACK)
  const [live, setLive] = useState(false)
  const [badImg, setBadImg] = useState(false)

  useEffect(() => {
    let off = false
    fetch('/api/telegram')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j) => {
        if (off || !j.title) return
        setD({ title: j.title, description: j.description || TG_FALLBACK.description, photo: j.photo, subscribers: j.subscribers })
        setLive(true)
      })
      .catch(() => {})
    return () => { off = true }
  }, [])

  return (
    <a className="tgcard" href={TG_URL} target="_blank" rel="noreferrer">
      <div className="tgc-av">
        {d.photo && !badImg
          ? <img src={d.photo} alt="" referrerPolicy="no-referrer" onError={() => setBadImg(true)} />
          : <span>{d.title[0]}</span>}
      </div>
      <div className="tgc-body">
        <div className="tgc-name"><strong>{d.title}</strong><em>Telegram channel</em></div>
        {d.subscribers ? <div className="tgc-subs"><i className={live ? 'dot live' : 'dot'} />{compact(d.subscribers)} subscribers</div> : null}
        <p>{d.description}</p>
      </div>
      <span className="tgc-btn">Join channel ↗</span>
    </a>
  )
}
