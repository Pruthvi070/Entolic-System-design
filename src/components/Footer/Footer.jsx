import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <img src="/entolic-logo.png" alt="Entolic Logo" style={{ height: '50px', width: 'auto' }} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffffff' }}>Entolic Systems</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: '500', color: '#ff6b35' }}>Infinite Innovation</span>
                </div>
              </div>
            </div>
            <p className="footer-description">
              Transforming businesses through innovative technology solutions, 
              cloud services, and digital transformation strategies.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Software Development</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">Automation & AI</Link></li>
              <li><Link to="/services">IT Consulting</Link></li>
              <li><Link to="/services">Digital Transformation</Link></li>
              <li><Link to="/services">Handbook to PDF Scanning</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Industries</h3>
            <ul className="footer-links">
              <li><Link to="/industries">Startups</Link></li>
              <li><Link to="/industries">Enterprises</Link></li>
              <li><Link to="/industries">Manufacturing</Link></li>
              <li><Link to="/industries">Healthcare</Link></li>
              <li><Link to="/industries">Finance</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin />
                <div>
                  <p>Office No. 313, City Center Building,</p>
                  <p>Rajiv Gandhi Infotech Park,</p>
                  <p>Hinjewadi Phase 1, Pune, MH,</p>
                  <p>India - 411057</p>
                </div>
              </div>
              <div className="contact-item">
                <FiPhone />
                <a href="tel:+919765171957">+91 9765171957</a>
              </div>
              <div className="contact-item">
                <FiMail />
                <a href="mailto:info@entolicsystems.com">info@entolicsystems.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Entolic Systems. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
