import Brand from './pages/Brand'
import Personal from './pages/Personal'

// mkay.mkaylabs.xyz -> personal page, everything else -> brand page.
// Locally, add ?site=mkay to preview the personal page.
const { hostname, pathname, search } = window.location
const isPersonal =
  hostname.startsWith('mkay.') || new URLSearchParams(search).get('site') === 'mkay'

// The old site had an /about page: send old links to the personal page.
if (!isPersonal && pathname.replace(/\/$/, '') === '/about') {
  window.location.replace(
    hostname.endsWith('mkaylabs.xyz') ? 'https://mkay.mkaylabs.xyz' : '/?site=mkay',
  )
}

export default function App() {
  return isPersonal ? <Personal /> : <Brand />
}
