import { Nav, Marquee, Orb, Footer, PERSONAL_URL, X_URL } from '../components/Shared'

const services = [
  { t: 'Brand identity', d: 'Logos, color and type systems for protocols, communities and creators who need to look like they will still be here next year.', tags: ['Logo', 'Visual system', 'Guidelines'] },
  { t: 'Community and social design', d: 'Launch visuals, banners and content kits that make a Web3 community feel organised and easy to join.', tags: ['Launch kits', 'CT content', 'Campaigns'] },
  { t: 'Web presence', d: 'Fast, minimal landing pages built in React so your brand and your site match from day one.', tags: ['Landing pages', 'Portfolio', 'React'] },
]
const ticker = ['Brand identity', 'Community design', 'Launch visuals', 'Web3 websites', 'Content systems']
const stats = [{ n: '3', l: 'Web3 teams served' }, { n: '1', l: 'community founded' }, { n: 'EN + HA', l: 'English and Hausa' }]

export default function Brand() {
  return (
    <div className="page">
      <div className="glow g1" /><div className="glow g2" />
      <Nav
        links={[{ href: '#services', label: 'Services' }, { href: PERSONAL_URL, label: 'About Mkay' }]}
        cta={{ href: X_URL, label: 'Get in touch' }}
      />

      <section className="hero">
        <h1>Brand design for<br /><span className="grad">Web3 teams.</span></h1>
        <div className="hero-row">
          <div className="stat-stack">
            {stats.map(s => <div className="glass" key={s.l}><strong>{s.n}</strong><span>{s.l}</span></div>)}
          </div>
          <Orb />
          <div className="hero-side">
            <p>MKAY Labs shapes how protocols, DAOs and communities look, sound and show up online.</p>
            <a className="pill" href={X_URL} target="_blank" rel="noreferrer">Start a project</a>
          </div>
        </div>
      </section>

      <Marquee items={ticker} />

      <section className="wrap" id="services">
        <h2>What we make</h2>
        <div className="rows">
          {services.map(s => (
            <article className="row" key={s.t}>
              <h3>{s.t}</h3>
              <div><p>{s.d}</p><ul>{s.tags.map(t => <li key={t}>{t}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap cta">
        <h2>Launching something?<br /><span className="grad">Let's make it look the part.</span></h2>
        <div className="cta-btns">
          <a className="pill" href={X_URL} target="_blank" rel="noreferrer">Message on X</a>
          <a className="pill ghost" href={PERSONAL_URL}>See Mkay's work</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
