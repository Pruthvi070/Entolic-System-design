import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiFilter,
  FiTrendingUp,
  FiDollarSign,
  FiUsers,
  FiClock,
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiZap,
  FiShield
} from 'react-icons/fi'
import './Portfolio.css'

const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedService, setSelectedService] = useState('All')

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const industries = ['All', 'Startups', 'Enterprises', 'Manufacturing', 'Healthcare', 'Finance']
  const services = ['All', 'Software Development', 'Cloud Solutions', 'Automation & AI', 'IT Consulting', 'Digital Transformation']

  const caseStudies = [
    {
      id: 1,
      title: 'FinTech Mobile Banking Platform',
      client: 'NeoBank Solutions',
      industry: 'Finance',
      service: 'Software Development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      description: 'Built a comprehensive mobile banking platform from scratch, enabling seamless digital banking experience for 200K+ users.',
      challenge: 'Client needed a secure, scalable mobile banking solution to compete with traditional banks while ensuring regulatory compliance.',
      solution: 'Developed a cloud-native mobile app with biometric authentication, real-time transactions, and AI-powered fraud detection.',
      before: {
        label: 'Before',
        metrics: [
          { label: 'Manual Processing', value: '80%' },
          { label: 'Transaction Time', value: '5 min' },
          { label: 'Customer Satisfaction', value: '65%' }
        ]
      },
      after: {
        label: 'After',
        metrics: [
          { label: 'Automated Processing', value: '95%' },
          { label: 'Transaction Time', value: '30 sec' },
          { label: 'Customer Satisfaction', value: '92%' }
        ]
      },
      results: [
        { icon: <FiUsers />, value: '200K+', label: 'Active Users' },
        { icon: <FiDollarSign />, value: '5M+', label: 'Transactions/Month' },
        { icon: <FiTrendingUp />, value: '300%', label: 'User Growth' },
        { icon: <FiClock />, value: '90%', label: 'Time Saved' }
      ],
      technologies: ['React Native', 'Node.js', 'AWS', 'MongoDB', 'Redis', 'TensorFlow'],
      testimonial: {
        text: 'Entolic Systems transformed our vision into reality. The platform exceeded our expectations in every way.',
        author: 'John Smith',
        position: 'CEO, NeoBank Solutions'
      }
    },
    {
      id: 2,
      title: 'Smart Factory IoT Implementation',
      client: 'TechManufacture Inc.',
      industry: 'Manufacturing',
      service: 'Automation & AI',
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&h=500&fit=crop',
      description: 'Deployed IoT sensors and predictive maintenance system across 3 manufacturing plants, reducing downtime by 30%.',
      challenge: 'Frequent equipment failures causing production delays and high maintenance costs.',
      solution: 'Implemented IoT sensors with ML-based predictive maintenance, real-time monitoring dashboard, and automated alerts.',
      before: {
        label: 'Before',
        metrics: [
          { label: 'Equipment Downtime', value: '15%' },
          { label: 'Maintenance Cost', value: '$500K/yr' },
          { label: 'Production Efficiency', value: '70%' }
        ]
      },
      after: {
        label: 'After',
        metrics: [
          { label: 'Equipment Downtime', value: '5%' },
          { label: 'Maintenance Cost', value: '$200K/yr' },
          { label: 'Production Efficiency', value: '95%' }
        ]
      },
      results: [
        { icon: <FiTrendingUp />, value: '30%', label: 'Downtime Reduction' },
        { icon: <FiDollarSign />, value: '$300K', label: 'Annual Savings' },
        { icon: <FiZap />, value: '25%', label: 'Productivity Increase' },
        { icon: <FiTarget />, value: '99.5%', label: 'Prediction Accuracy' }
      ],
      technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Azure IoT', 'Power BI', 'MQTT'],
      testimonial: {
        text: 'The predictive maintenance system has been a game-changer for our operations.',
        author: 'Sarah Johnson',
        position: 'Operations Director, TechManufacture Inc.'
      }
    },
    {
      id: 3,
      title: 'Hospital Management System',
      client: 'MediCare Hospital Group',
      industry: 'Healthcare',
      service: 'Software Development',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop',
      description: 'Comprehensive HMS with integrated EHR, appointment scheduling, and billing for a 500-bed hospital network.',
      challenge: 'Fragmented systems causing inefficiencies, data silos, and poor patient experience.',
      solution: 'Unified HIPAA-compliant platform integrating all hospital operations with patient portal and telemedicine capabilities.',
      before: {
        label: 'Before',
        metrics: [
          { label: 'Patient Wait Time', value: '45 min' },
          { label: 'Admin Time', value: '60%' },
          { label: 'Patient Satisfaction', value: '68%' }
        ]
      },
      after: {
        label: 'After',
        metrics: [
          { label: 'Patient Wait Time', value: '15 min' },
          { label: 'Admin Time', value: '20%' },
          { label: 'Patient Satisfaction', value: '94%' }
        ]
      },
      results: [
        { icon: <FiUsers />, value: '500+', label: 'Beds Managed' },
        { icon: <FiClock />, value: '40%', label: 'Time Saved' },
        { icon: <FiTrendingUp />, value: '94%', label: 'Patient Satisfaction' },
        { icon: <FiCheckCircle />, value: '100%', label: 'HIPAA Compliant' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'HL7/FHIR', 'AWS', 'WebRTC'],
      testimonial: {
        text: 'This system has revolutionized how we deliver patient care. Highly recommended!',
        author: 'Dr. Michael Chen',
        position: 'Chief Medical Officer, MediCare Hospital Group'
      }
    },
    {
      id: 4,
      title: 'E-commerce Platform Launch',
      client: 'ShopNow Retail',
      industry: 'Startups',
      service: 'Software Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      description: 'Built scalable e-commerce platform handling 10K+ daily transactions with AI-powered recommendations.',
      challenge: 'Startup needed to launch quickly with limited budget while ensuring scalability for rapid growth.',
      solution: 'Cloud-native microservices architecture with AI recommendations, payment gateway integration, and real-time inventory.',
      before: {
        label: 'Before',
        metrics: [
          { label: 'Daily Orders', value: '0' },
          { label: 'Conversion Rate', value: 'N/A' },
          { label: 'Revenue', value: '$0' }
        ]
      },
      after: {
        label: 'After',
        metrics: [
          { label: 'Daily Orders', value: '10K+' },
          { label: 'Conversion Rate', value: '4.5%' },
          { label: 'Revenue', value: '$2M/mo' }
        ]
      },
      results: [
        { icon: <FiUsers />, value: '50K+', label: 'Active Users' },
        { icon: <FiDollarSign />, value: '10K+', label: 'Daily Transactions' },
        { icon: <FiTrendingUp />, value: '99.9%', label: 'Uptime' },
        { icon: <FiZap />, value: '40%', label: 'Cost Reduction' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS', 'Elasticsearch'],
      testimonial: {
        text: 'They delivered our MVP in just 3 months. The platform scales beautifully!',
        author: 'Emily Rodriguez',
        position: 'Founder & CEO, ShopNow Retail'
      }
    },
    {
      id: 5,
      title: 'Enterprise Cloud Migration',
      client: 'GlobalCorp Industries',
      industry: 'Enterprises',
      service: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop',
      description: 'Migrated legacy on-premise infrastructure to AWS cloud with zero downtime for 500+ store retail chain.',
      challenge: 'Aging infrastructure causing high costs, poor performance, and inability to scale during peak seasons.',
      solution: 'Phased migration to AWS with containerization, auto-scaling, and disaster recovery implementation.',
      before: {
        label: 'Before',
        metrics: [
          { label: 'Infrastructure Cost', value: '$800K/yr' },
          { label: 'Deployment Time', value: '2 weeks' },
          { label: 'System Downtime', value: '5%' }
        ]
      },
      after: {
        label: 'After',
        metrics: [
          { label: 'Infrastructure Cost', value: '$350K/yr' },
          { label: 'Deployment Time', value: '1 hour' },
          { label: 'System Downtime', value: '0.1%' }
        ]
      },
      results: [
        { icon: <FiDollarSign />, value: '$450K', label: 'Annual Savings' },
        { icon: <FiTrendingUp />, value: '60%', label: 'Performance Boost' },
        { icon: <FiCheckCircle />, value: 'Zero', label: 'Downtime Migration' },
        { icon: <FiZap />, value: '95%', label: 'Faster Deployments' }
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CloudWatch'],
      testimonial: {
        text: 'The migration was flawless. We are now more agile and cost-efficient than ever.',
        author: 'Robert Williams',
        position: 'CTO, GlobalCorp Industries'
      }
    },
    {
      id: 6,
      title: 'AI-Powered Fraud Detection',
      client: 'SecurePayments Ltd.',
      industry: 'Finance',
      service: 'Automation & AI',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
      description: 'Developed ML-based fraud detection system reducing false positives by 60% while catching 99.8% of fraud attempts.',
      challenge: 'High false positive rate causing customer frustration and revenue loss from blocked legitimate transactions.',
      solution: 'Deep learning model analyzing transaction patterns in real-time with adaptive learning and risk scoring.',
      before: {
        label: 'Before',
        metrics: [
          { label: 'False Positives', value: '25%' },
          { label: 'Fraud Detection', value: '85%' },
          { label: 'Manual Review', value: '40%' }
        ]
      },
      after: {
        label: 'After',
        metrics: [
          { label: 'False Positives', value: '10%' },
          { label: 'Fraud Detection', value: '99.8%' },
          { label: 'Manual Review', value: '5%' }
        ]
      },
      results: [
        { icon: <FiShield />, value: '99.8%', label: 'Fraud Detection' },
        { icon: <FiDollarSign />, value: '$2M', label: 'Fraud Prevented' },
        { icon: <FiTrendingUp />, value: '60%', label: 'Fewer False Positives' },
        { icon: <FiZap />, value: '<100ms', label: 'Response Time' }
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'Apache Kafka', 'Redis', 'PostgreSQL'],
      testimonial: {
        text: 'This AI system has saved us millions while improving customer experience significantly.',
        author: 'David Lee',
        position: 'Head of Security, SecurePayments Ltd.'
      }
    }
  ]

  // Filter case studies
  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'All' || study.industry === selectedIndustry
    const serviceMatch = selectedService === 'All' || study.service === selectedService
    return industryMatch && serviceMatch
  })

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <motion.section
        className="portfolio-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="portfolio-hero-title">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="portfolio-hero-subtitle">
              Real results from real clients. Explore our success stories and transformative solutions.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters Section */}
      <section className="section filters-section">
        <div className="container">
          <motion.div
            className="filters-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="filter-group">
              <div className="filter-label">
                <FiFilter /> Filter by Industry:
              </div>
              <div className="filter-buttons">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    className={`filter-btn ${selectedIndustry === industry ? 'active' : ''}`}
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-label">
                <FiFilter /> Filter by Service:
              </div>
              <div className="filter-buttons">
                {services.map((service) => (
                  <button
                    key={service}
                    className={`filter-btn ${selectedService === service ? 'active' : ''}`}
                    onClick={() => setSelectedService(service)}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="results-count">
            Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section case-studies-section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedIndustry}-${selectedService}`}
              className="case-studies-grid"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              {filteredCaseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  className="case-study-card"
                  variants={fadeInUp}
                  layout
                >
                  {/* Card Image */}
                  <div className="case-study-image">
                    <img src={study.image} alt={study.title} />
                    <div className="case-study-overlay">
                      <span className="industry-badge">{study.industry}</span>
                      <span className="service-badge">{study.service}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="case-study-content">
                    <h3 className="case-study-title">{study.title}</h3>
                    <p className="case-study-client">Client: {study.client}</p>
                    <p className="case-study-description">{study.description}</p>

                    {/* Challenge & Solution */}
                    <div className="challenge-solution">
                      <div className="cs-item">
                        <h4>Challenge</h4>
                        <p>{study.challenge}</p>
                      </div>
                      <div className="cs-item">
                        <h4>Solution</h4>
                        <p>{study.solution}</p>
                      </div>
                    </div>

                    {/* Before/After Comparison */}
                    <div className="before-after">
                      <div className="ba-column before">
                        <h4>{study.before.label}</h4>
                        {study.before.metrics.map((metric, idx) => (
                          <div key={idx} className="ba-metric">
                            <span className="ba-label">{metric.label}</span>
                            <span className="ba-value">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ba-arrow">
                        <FiArrowRight />
                      </div>
                      <div className="ba-column after">
                        <h4>{study.after.label}</h4>
                        {study.after.metrics.map((metric, idx) => (
                          <div key={idx} className="ba-metric">
                            <span className="ba-label">{metric.label}</span>
                            <span className="ba-value success">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results KPIs */}
                    <div className="results-kpis">
                      <h4>Key Results</h4>
                      <div className="kpis-grid">
                        {study.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            className="kpi-item"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: 'spring' }}
                          >
                            <div className="kpi-icon">{result.icon}</div>
                            <div className="kpi-value">{result.value}</div>
                            <div className="kpi-label">{result.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="technologies">
                      <h4>Technologies Used</h4>
                      <div className="tech-tags">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="testimonial">
                      <p className="testimonial-text">"{study.testimonial.text}"</p>
                      <div className="testimonial-author">
                        <strong>{study.testimonial.author}</strong>
                        <span>{study.testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No case studies found matching your filters. Try adjusting your selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section portfolio-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="cta-title">Ready to Create Your Success Story?</h2>
            <p className="cta-description">
              Let's discuss how we can help you achieve similar results
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
