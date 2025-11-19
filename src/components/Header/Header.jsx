import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { toggleTheme } from '../../store/slices/themeSlice'
import { toggleMenu, closeMenu } from '../../store/slices/uiSlice'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { isDark } = useSelector((state) => state.theme)
  const { isMenuOpen } = useSelector((state) => state.ui)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  const handleMenuClick = () => {
    dispatch(closeMenu())
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
        
          <Link to="/" className="logo" onClick={handleMenuClick}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/entolic-logo.png" alt="Entolic Logo" style={{ height: '50px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a2e' }}>Entolic Systems</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '500', color: '#ff6b35' }}>Infinite Innovation</span>
              </div>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => dispatch(toggleTheme())}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            
            <button
              className="menu-toggle"
              onClick={() => dispatch(toggleMenu())}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
