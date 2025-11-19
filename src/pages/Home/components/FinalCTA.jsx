import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi'
import './FinalCTA.css'

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="cta-background">
        <div className="cta-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`cta-shape cta-shape-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title orbitron">
            Let's Build the <span className="gradient-text">Future</span> Together
          </h2>
          
          <p className="cta-subtitle">
            Ready to transform your business with cutting-edge technology? 
            Our team of experts is here to turn your vision into reality.
          </p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <div className="feature-icon">🚀</div>
              <div className="feature-text">
                <strong>Fast Implementation</strong>
                <span>Get started in just 2 weeks</span>
              </div>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">💡</div>
              <div className="feature-text">
                <strong>Free Consultation</strong>
                <span>Strategic planning session included</span>
              </div>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">🛡️</div>
              <div className="feature-text">
                <strong>Risk-Free Trial</strong>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project
              <FiArrowRight />
            </Link>
            
            <div className="cta-contact-options">
              <a href="tel:+919765171957" className="contact-option">
                <FiPhone />
                <span>+91 9765171957</span>
              </a>
              <a href="mailto:info@entolicsystems.com" className="contact-option">
                <FiMail />
                <span>info@entolicsystems.com</span>
              </a>
            </div>
          </div>
          
          <div className="cta-guarantee">
            <div className="guarantee-badge">
              <span className="guarantee-icon">✓</span>
              <div className="guarantee-text">
                <strong>100% Satisfaction Guaranteed</strong>
                <span>We're committed to your success</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
