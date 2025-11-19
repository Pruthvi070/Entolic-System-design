import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiShield, FiClock, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FiAward />,
      title: 'Proven Expertise',
      description: '10+ years of experience delivering cutting-edge technology solutions',
      stat: '500+ Projects'
    },
    {
      icon: <FiShield />,
      title: 'Security First',
      description: 'Enterprise-grade security measures and compliance standards',
      stat: '100% Secure'
    },
    {
      icon: <FiClock />,
      title: 'On-Time Delivery',
      description: 'Consistent track record of delivering projects on schedule',
      stat: '98% On-Time'
    },
    {
      icon: <FiUsers />,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge',
      stat: '50+ Experts'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Scalable Solutions',
      description: 'Future-ready solutions that grow with your business',
      stat: '300% Growth'
    },
    {
      icon: <FiHeart />,
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance services',
      stat: '24/7 Available'
    }
  ]

  return (
    <section className="why-choose-us section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose Entolic Systems?</h2>
          <p className="section-subtitle">
            We combine technical excellence with business acumen to deliver solutions that drive real results
          </p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="reason-icon animate-pulse-glow">
                {reason.icon}
              </div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
                <div className="reason-stat gradient-text">{reason.stat}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="trust-badges"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="badge">
            <div className="badge-icon">🏆</div>
            <div className="badge-text">
              <strong>ISO Certified</strong>
              <span>Quality Management</span>
            </div>
          </div>
          <div className="badge">
            <div className="badge-icon">🔒</div>
            <div className="badge-text">
              <strong>SOC 2 Compliant</strong>
              <span>Security Standards</span>
            </div>
          </div>
          <div className="badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-text">
              <strong>5-Star Rating</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
          <div className="badge">
            <div className="badge-icon">🚀</div>
            <div className="badge-text">
              <strong>Agile Certified</strong>
              <span>Project Management</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
