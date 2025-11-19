import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-animation">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title orbitron">
              <span className="gradient-text">Innovating</span> The{' '}
              <span className="gradient-text">Infinite</span>
            </h1>
            
            <p className="hero-subtitle">
              Transforming businesses through cutting-edge technology solutions, 
              cloud innovation, and digital transformation strategies that drive 
              sustainable growth and competitive advantage.
            </p>
            
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Started
                <FiArrowRight />
              </Link>
              
              <button className="btn btn-secondary">
                <FiPlay />
                Watch Demo
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number gradient-text">500+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="tech-showcase">
              <div className="tech-circle animate-float">
                <div className="tech-icon">AI</div>
              </div>
              <div className="tech-circle animate-float" style={{ animationDelay: '1s' }}>
                <div className="tech-icon">Cloud</div>
              </div>
              <div className="tech-circle animate-float" style={{ animationDelay: '2s' }}>
                <div className="tech-icon">IoT</div>
              </div>
              <div className="tech-circle animate-float" style={{ animationDelay: '3s' }}>
                <div className="tech-icon">ML</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
