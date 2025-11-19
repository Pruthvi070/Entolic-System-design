import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi'
import './CaseStudiesPreview.css'

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'RetailTech Solutions',
      industry: 'E-Commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Modern React-based platform with AI recommendations',
      results: [
        { icon: <FiTrendingUp />, metric: '65%', label: 'Increase in Conversions' },
        { icon: <FiUsers />, metric: '2.5x', label: 'User Engagement' },
        { icon: <FiDollarSign />, metric: '$2M+', label: 'Additional Revenue' }
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=650&h=400',
      tags: ['React', 'Node.js', 'AI/ML', 'Cloud']
    },
    {
      title: 'Healthcare Management System',
      client: 'MedCare Hospital Group',
      industry: 'Healthcare',
      challenge: 'Manual processes causing delays in patient care',
      solution: 'Integrated digital platform with automated workflows',
      results: [
        { icon: <FiTrendingUp />, metric: '80%', label: 'Faster Processing' },
        { icon: <FiUsers />, metric: '95%', label: 'Staff Satisfaction' },
        { icon: <FiDollarSign />, metric: '40%', label: 'Cost Reduction' }
      ],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=650&h=400',
      tags: ['Healthcare', 'Automation', 'Security', 'Compliance']
    },
    {
      title: 'Manufacturing IoT Solution',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime costing $50K per hour',
      solution: 'IoT sensors with predictive maintenance AI',
      results: [
        { icon: <FiTrendingUp />, metric: '90%', label: 'Downtime Reduction' },
        { icon: <FiUsers />, metric: '99.8%', label: 'System Uptime' },
        { icon: <FiDollarSign />, metric: '$5M+', label: 'Annual Savings' }
      ],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=650&h=400',
      tags: ['IoT', 'AI/ML', 'Predictive Analytics', 'Industry 4.0']
    }
  ]

  return (
    <section className="case-studies-preview section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Real results from real clients - see how we've transformed businesses across industries
          </p>
        </motion.div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="case-study-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
                <div className="case-study-overlay">
                  <div className="case-study-tags">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="case-study-content">
                <div className="case-study-header">
                  <span className="industry-badge">{study.industry}</span>
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="client-name">{study.client}</p>
                </div>

                <div className="case-study-details">
                  <div className="challenge-solution">
                    <div className="challenge">
                      <strong>Challenge:</strong>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="solution">
                      <strong>Solution:</strong>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  <div className="results">
                    <strong>Results:</strong>
                    <div className="results-grid">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="result-item">
                          <div className="result-icon">{result.icon}</div>
                          <div className="result-metric gradient-text">{result.metric}</div>
                          <div className="result-label">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/portfolio" className="case-study-link">
                  View Full Case Study
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="case-studies-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio" className="btn btn-primary">
            View All Case Studies
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
