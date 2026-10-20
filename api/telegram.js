// Vercel serverless function: reads the public t.me page for the channel and
// returns its name, photo, description and subscriber count as JSON.
// The site calls this at /api/telegram (CORS blocks reading t.me from the browser).
const CHANNEL = 'MKAY_HQ'

const decode = (s) =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .trim()

export default async function handler(req, res) {
  try {
    const r = await fetch(`https://t.me/${CHANNEL}`, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; MKAYLabs/1.0)' },
    })
    if (!r.ok) throw new Error(`t.me responded ${r.status}`)
    const html = await r.text()

    const pick = (re) => {
      const m = html.match(re)
      return m ? decode(m[1]) : null
    }
    const title =
      pick(/<div class="tgme_page_title"[^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>/) ||
      pick(/<meta property="og:title" content="([^"]*)"/)
    const description = pick(/<meta property="og:description" content="([^"]*)"/)
    let photo = pick(/<meta property="og:image" content="([^"]*)"/)
    if (photo && photo.includes('telegram.org/img')) photo = null // default logo, no custom photo
    const extra = pick(/<div class="tgme_page_extra">([\s\S]*?)<\/div>/)
    const subscribers =
      extra && /subscribers|members/i.test(extra)
        ? parseInt(extra.replace(/[^\d]/g, ''), 10) || null
        : null

    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600')
    res.status(200).json({ title, description, photo, subscribers })
  } catch (e) {
    res.status(502).json({ error: String(e.message || e) })
  }
}
