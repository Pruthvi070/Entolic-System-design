import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCode, FiCloud, FiCpu, FiUsers, FiTrendingUp, FiFileText } from 'react-icons/fi'
import './ServicesSnapshot.css'

const ServicesSnapshot = () => {
  const services = [
    {
      icon: <FiCode />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with modern technologies.',
      features: ['Web Applications', 'Mobile Apps', 'API Development']
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.',
      features: ['AWS/Azure', 'Cloud Migration', 'DevOps']
    },
    {
      icon: <FiCpu />,
      title: 'Automation & AI',
      description: 'Intelligent automation solutions powered by artificial intelligence and machine learning.',
      features: ['Process Automation', 'AI Integration', 'ML Models']
    },
    {
      icon: <FiUsers />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and processes.',
      features: ['Strategy Planning', 'Tech Audit', 'Implementation']
    },
    {
      icon: <FiTrendingUp />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations.',
      features: ['Process Digitization', 'Legacy Modernization', 'Change Management']
    },
    {
      icon: <FiFileText />,
      title: 'Handbook to PDF Scanning',
      description: 'OCR-based scanning of manuals and handbooks with searchable, secure PDF output.',
      features: ['OCR Technology', 'Searchable PDFs', 'Secure Encryption']
    }
  ]

  return (
    <section className="services-snapshot section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card card glow-effect"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to="/services" className="service-link">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSnapshot
