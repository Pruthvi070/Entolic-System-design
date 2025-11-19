import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCode,
  FiCloud,
  FiCpu,
  FiTrendingUp,
  FiZap,
  FiFileText,
  FiCheck,
  FiArrowRight,
  FiLayers,
  FiShield,
  FiSearch,
  FiLock
} from 'react-icons/fi'
import './Services.css'

const Services = () => {
  const [activeService, setActiveService] = useState(null)

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

  const services = [
    {
      id: 1,
      icon: <FiCode />,
      title: 'Software Development',
      shortDesc: 'Custom software solutions tailored to your business needs',
      description: 'We build scalable, robust, and innovative software applications that drive business growth and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      features: [
        'Custom Web Applications',
        'Mobile App Development (iOS & Android)',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Agile Development Methodology'
      ],
      techStack: ['React', 'Node.js', 'Python', 'Java', 'Flutter', 'MongoDB', 'PostgreSQL'],
      processSteps: [
        { step: 'Requirements Analysis', desc: 'Understanding your business needs' },
        { step: 'Design & Architecture', desc: 'Creating scalable solutions' },
        { step: 'Development', desc: 'Building with best practices' },
        { step: 'Testing & QA', desc: 'Ensuring quality delivery' },
        { step: 'Deployment', desc: 'Smooth production rollout' },
        { step: 'Support & Maintenance', desc: 'Ongoing optimization' }
      ]
    },
    {
      id: 2,
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      shortDesc: 'Scalable cloud infrastructure and migration services',
      description: 'Leverage the power of cloud computing with our comprehensive cloud solutions, from migration to optimization.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      features: [
        'Cloud Migration & Strategy',
        'AWS, Azure, Google Cloud Services',
        'Cloud Infrastructure Setup',
        'DevOps & CI/CD Implementation',
        'Cloud Security & Compliance',
        'Cost Optimization & Monitoring'
      ],
      techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      processSteps: [
        { step: 'Cloud Assessment', desc: 'Evaluating current infrastructure' },
        { step: 'Strategy Planning', desc: 'Designing cloud architecture' },
        { step: 'Migration', desc: 'Seamless data transfer' },
        { step: 'Optimization', desc: 'Performance tuning' },
        { step: 'Security Setup', desc: 'Implementing safeguards' },
        { step: 'Monitoring', desc: 'Continuous oversight' }
      ]
    },
    {
      id: 3,
      icon: <FiCpu />,
      title: 'Automation & AI',
      shortDesc: 'Intelligent automation and AI-powered solutions',
      description: 'Transform your business with cutting-edge AI and automation technologies that enhance efficiency and decision-making.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      features: [
        'Process Automation & RPA',
        'Machine Learning Solutions',
        'Natural Language Processing',
        'Computer Vision Applications',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants'
      ],
      techStack: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python', 'Scikit-learn', 'Pandas', 'FastAPI'],
      processSteps: [
        { step: 'Use Case Identification', desc: 'Finding automation opportunities' },
        { step: 'Data Collection', desc: 'Gathering training data' },
        { step: 'Model Development', desc: 'Building AI models' },
        { step: 'Training & Testing', desc: 'Refining accuracy' },
        { step: 'Integration', desc: 'Deploying into systems' },
        { step: 'Continuous Learning', desc: 'Model improvement' }
      ]
    },
    {
      id: 4,
      icon: <FiTrendingUp />,
      title: 'IT Consulting',
      shortDesc: 'Strategic technology consulting for business growth',
      description: 'Expert guidance to align your technology strategy with business objectives and drive digital transformation.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      features: [
        'Technology Strategy & Roadmap',
        'IT Infrastructure Assessment',
        'Digital Transformation Planning',
        'Vendor Selection & Management',
        'Security & Compliance Consulting',
        'Performance Optimization'
      ],
      techStack: ['ITIL', 'TOGAF', 'Agile', 'Scrum', 'SAFe', 'COBIT', 'ISO 27001'],
      processSteps: [
        { step: 'Discovery', desc: 'Understanding business goals' },
        { step: 'Assessment', desc: 'Analyzing current state' },
        { step: 'Strategy Development', desc: 'Creating roadmap' },
        { step: 'Implementation Planning', desc: 'Defining action steps' },
        { step: 'Execution Support', desc: 'Guiding implementation' },
        { step: 'Review & Optimize', desc: 'Measuring success' }
      ]
    },
    {
      id: 5,
      icon: <FiZap />,
      title: 'Digital Transformation',
      shortDesc: 'End-to-end digital transformation services',
      description: 'Modernize your business operations with comprehensive digital transformation strategies and implementation.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
      features: [
        'Business Process Digitization',
        'Legacy System Modernization',
        'Digital Customer Experience',
        'Data-Driven Decision Making',
        'Change Management',
        'Innovation Workshops'
      ],
      techStack: ['Microservices', 'APIs', 'Cloud Native', 'IoT', 'Blockchain', 'Big Data', 'Analytics'],
      processSteps: [
        { step: 'Vision Setting', desc: 'Defining digital goals' },
        { step: 'Current State Analysis', desc: 'Identifying gaps' },
        { step: 'Transformation Roadmap', desc: 'Planning the journey' },
        { step: 'Pilot Projects', desc: 'Testing solutions' },
        { step: 'Full-Scale Rollout', desc: 'Organization-wide deployment' },
        { step: 'Culture Change', desc: 'Embedding new ways' }
      ]
    },
    {
      id: 6,
      icon: <FiFileText />,
      title: 'Handbook to PDF Scanning',
      shortDesc: 'OCR-based document digitization and management',
      description: 'Transform physical handbooks and manuals into searchable, secure, and accessible digital PDF documents.',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop',
      features: [
        'OCR-based Scanning of Manuals & Handbooks',
        'Searchable PDF Output',
        'Document Encryption & Security',
        'Intelligent Indexing & Bookmarking',
        'Metadata Tagging',
        'Cloud Storage Integration'
      ],
      benefits: [
        { icon: <FiLayers />, title: 'Space Saving', desc: 'Eliminate physical storage needs' },
        { icon: <FiSearch />, title: 'Increased Accessibility', desc: 'Find information instantly' },
        { icon: <FiShield />, title: 'Improved Compliance', desc: 'Meet regulatory requirements' },
        { icon: <FiLock />, title: 'Enhanced Security', desc: 'Protect sensitive information' }
      ],
      techStack: ['Tesseract OCR', 'Adobe PDF', 'Python', 'OpenCV', 'AWS S3', 'Elasticsearch'],
      processSteps: [
        { step: 'Document Collection', desc: 'Gathering physical materials' },
        { step: 'High-Quality Scanning', desc: 'Digital capture' },
        { step: 'OCR Processing', desc: 'Text recognition' },
        { step: 'Quality Assurance', desc: 'Accuracy verification' },
        { step: 'Indexing & Tagging', desc: 'Organizing content' },
        { step: 'Secure Delivery', desc: 'Encrypted distribution' }
      ]
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.section
        className="services-hero"
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
            <h1 className="services-hero-title">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="services-hero-subtitle">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="section services-overview">
        <div className="container">
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                onClick={() => setActiveService(service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-short-desc">{service.shortDesc}</p>
                <button className="service-learn-more">
                  Learn More <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section
          key={service.id}
          className={`section service-detail ${service.id % 2 === 0 ? 'service-detail-alt' : ''}`}
          id={`service-${service.id}`}
        >
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="service-detail-header">
                <div className="service-detail-content">
                  <div className="service-detail-icon">{service.icon}</div>
                  <h2 className="service-detail-title">{service.title}</h2>
                  <p className="service-detail-description">{service.description}</p>
                </div>
                {service.image && (
                  <div className="service-detail-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="service-features">
                <h3 className="service-section-title">Key Features</h3>
                <motion.div
                  className="features-grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item"
                      variants={fadeInUp}
                    >
                      <FiCheck className="feature-check" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Benefits (for Handbook service) */}
              {service.benefits && (
                <div className="service-benefits">
                  <h3 className="service-section-title">Benefits</h3>
                  <motion.div
                    className="benefits-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                  >
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="benefit-card"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="benefit-icon">{benefit.icon}</div>
                        <h4 className="benefit-title">{benefit.title}</h4>
                        <p className="benefit-desc">{benefit.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Process Flow */}
              <div className="service-process">
                <h3 className="service-section-title">Our Process</h3>
                <motion.div
                  className="process-flow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {service.processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="process-step"
                      variants={fadeInUp}
                    >
                      <div className="process-number">{index + 1}</div>
                      <div className="process-content">
                        <h4 className="process-step-title">{step.step}</h4>
                        <p className="process-step-desc">{step.desc}</p>
                      </div>
                      {index < service.processSteps.length - 1 && (
                        <div className="process-arrow">
                          <FiArrowRight />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Tech Stack */}
              <div className="service-tech-stack">
                <h3 className="service-section-title">Technology Stack</h3>
                <motion.div
                  className="tech-stack-grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {service.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-badge"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our services can help you achieve your goals
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
