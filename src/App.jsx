import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Industries from './pages/Industries/Industries'
import Portfolio from './pages/Portfolio/Portfolio'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import FloatingContact from './components/FloatingContact/FloatingContact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </div>
  )
}

export default App
