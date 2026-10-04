import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
)