import { useState } from 'react'
import { Nav, Marquee, Orb, Footer, BRAND_URL, X_URL } from '../components/Shared'

// Edit these: this is your proof of work.
const work = [
  { name: 'Aptosroom', logo: '/logos/aptosroom.png', role: 'Branding & Design Lead', d: 'Leads the brand and visual direction across the community.' },
  { name: 'AptosHausa', logo: '/logos/aptoshausa.png', role: 'Community & Creative Lead', d: 'A regional Web3 community bringing Hausa-speaking audiences in West Africa into the Aptos ecosystem.' },
  { name: 'Pact Finance', logo: '/logos/pact.png', role: 'Brand Ambassador', d: 'Represents the protocol and creates content for its community.' },
  { name: 'Shardeum', logo: '/logos/shardeum.png', role: 'Brand Ambassador', d: 'Drives ecosystem awareness and community growth through content creation and community engagement.' },
  { name: 'Cedra', logo: '/logos/cedra.png', role: 'Country Moderator', d: 'Support local community growth, moderates discussions and connects members with the project through engagement and updates.' },
]
const skills = [
  { g: 'Design', i: ['Brand identity', 'Visual systems', 'Social and launch content', 'Campaing and Announcement Flyers'] },
  { g: 'Web3', i: ['Community building', 'Crypto Twitter content', 'Ecosystem Growth'] },
  { g: 'Build', i: ['Trading Tools', 'Telegram/Discord Bot', 'Landing Page'] },
]
const socials = [
  { name: 'Twitter / X', handle: '@0x_mkay', url: 'https://x.com/0x_mkay', icon: '𝕏' },
  { name: 'Instagram', handle: '@mooh_kherleel', url: 'https://instagram.com/mooh_kherleel', icon: 'IG' },
  { name: 'Dribbble', handle: '0xmkay', url: 'https://dribbble.com/0xmkay', icon: 'Dr' },
  { name: 'LinkedIn', handle: 'in/muhammadyusufkhalil', url: 'https://linkedin.com/in/muhammadyusufkhalil', icon: 'in' },
  { name: 'Behance', handle: 'mkay', url: 'https://www.behance.net/muhammadyusuf218', icon: 'Bē' },
]

// Square project logo; falls back to the first letter if the image is missing.
function Sq({ src, name }) {
  const [bad, setBad] = useState(false)
  return bad || !src
    ? <span className="sq sq-fb">{name[0]}</span>
    : <img className="sq" src={src} alt={`${name} logo`} onError={() => setBad(true)} />
}

const ticker = ['Brand design', 'Community', 'Crypto Twitter', 'Web3', 'Africa', 'Building']

export default function Personal() {
  return (
    <div className="page">
      <div className="glow g1" /><div className="glow g2" />
      <Nav
        links={[{ href: '#work', label: 'Work' }, { href: '#skills', label: 'Skills' }, { href: '#connect', label: 'Connect' }, { href: BRAND_URL, label: 'MKAY Labs' }]}
        cta={{ href: X_URL, label: 'Follow ᗰᛕᗩƳ' }}
      />

      <section className="hero">
        <h1>Hi, I'm Mkay.<br /><span className="grad">Creative in Web3.</span></h1>
        <div className="hero-row">
          <div className="stat-stack">
            <div className="glass"><strong>CCO</strong><span>Creative Lead</span></div>
            <div className="glass"><strong>Web3 Creator</strong><span>Web3 Insights & Community</span></div>
          </div>
          <Orb />
          <div className="hero-side">
            <p>I build brands, shape campaigns, and grow communities across Web3, with a focus on West Africa and Hausa-speaking audiences.</p>
            <a className="pill" href={X_URL} target="_blank" rel="noreferrer">Say hello</a>
          </div>
        </div>
      </section>

      <Marquee items={ticker} />

      <section className="wrap" id="work">
        <h2>Proof of work</h2>
        <div className="rows">
          {work.map(w => (
            <article className="row" key={w.name}>
              <div className="who">
                <Sq src={w.logo} name={w.name} />
                <h3>{w.name}<small>{w.role}</small></h3>
              </div>
              <p>{w.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap" id="skills">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map(s => (
            <div className="glass" key={s.g}>
              <h3>{s.g}</h3>
              <ul>{s.i.map(x => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" id="connect">
        <h2>Find me online</h2>
        <div className="links">
          {socials.map(l => (
            <a className="link" key={l.name} href={l.url} target="_blank" rel="noreferrer">
              <span className="ico">{l.icon}</span>
              <span className="link-txt"><strong>{l.name}</strong><small>{l.handle}</small></span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap cta">
        <h2>Need a brand for your project?<br /><span className="grad">Work with MKAY Labs.</span></h2>
        <div className="cta-btns"><a className="pill" href={BRAND_URL}>Visit MKAY Labs</a></div>
      </section>
      <Footer />
    </div>
  )
}
