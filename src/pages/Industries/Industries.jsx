import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiZap,
  FiTrendingUp,
  FiSettings,
  FiActivity,
  FiDollarSign,
  FiCheck,
  FiArrowRight,
  FiTarget,
  FiShield,
  FiClock,
  FiUsers,
  FiBarChart
} from 'react-icons/fi'
import './Industries.css'

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(null)

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

  const industries = [
    {
      id: 1,
      icon: <FiZap />,
      name: 'Startups',
      tagline: 'Accelerate Your Growth Journey',
      description: 'Empowering startups with scalable technology solutions that drive rapid growth and market success.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      challenges: [
        {
          title: 'Limited Budget & Resources',
          solution: 'Cost-effective MVP development and cloud solutions that scale with your growth'
        },
        {
          title: 'Time to Market Pressure',
          solution: 'Agile development methodology ensuring rapid deployment and iteration'
        },
        {
          title: 'Technology Stack Selection',
          solution: 'Expert guidance on choosing the right tech stack for long-term success'
        },
        {
          title: 'Scalability Concerns',
          solution: 'Cloud-native architecture designed to handle exponential growth'
        }
      ],
      solutions: [
        'MVP Development & Prototyping',
        'Cloud Infrastructure Setup',
        'Mobile App Development',
        'DevOps & CI/CD Implementation',
        'Technical Consulting',
        'Growth Analytics Integration'
      ],
      caseStudies: [
        {
          title: 'FinTech Startup Launch',
          description: 'Helped a fintech startup launch their MVP in 3 months, securing $2M in seed funding',
          results: ['3-month MVP delivery', '50K+ users in 6 months', '$2M funding secured']
        },
        {
          title: 'E-commerce Platform',
          description: 'Built scalable e-commerce platform handling 10K+ daily transactions',
          results: ['10K+ daily transactions', '99.9% uptime', '40% cost reduction']
        }
      ],
      stats: [
        { icon: <FiTarget />, value: '50+', label: 'Startups Launched' },
        { icon: <FiClock />, value: '3-6', label: 'Months to Market' },
        { icon: <FiTrendingUp />, value: '300%', label: 'Avg Growth Rate' }
      ]
    },
    {
      id: 2,
      icon: <FiTrendingUp />,
      name: 'Enterprises',
      tagline: 'Transform at Enterprise Scale',
      description: 'Delivering enterprise-grade solutions that modernize operations and drive digital transformation.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      challenges: [
        {
          title: 'Legacy System Modernization',
          solution: 'Phased migration strategy with zero downtime and minimal disruption'
        },
        {
          title: 'Complex Integration Requirements',
          solution: 'Robust API architecture connecting disparate systems seamlessly'
        },
        {
          title: 'Security & Compliance',
          solution: 'Enterprise-grade security with ISO, SOC2, and industry-specific compliance'
        },
        {
          title: 'Change Management',
          solution: 'Comprehensive training and support for smooth organizational adoption'
        }
      ],
      solutions: [
        'Legacy System Modernization',
        'Enterprise Application Development',
        'System Integration & APIs',
        'Data Migration & Management',
        'Security & Compliance Solutions',
        'Enterprise Cloud Migration'
      ],
      caseStudies: [
        {
          title: 'Global Retail Chain Transformation',
          description: 'Modernized inventory management system for 500+ stores across 15 countries',
          results: ['500+ stores connected', '60% efficiency gain', '$5M annual savings']
        },
        {
          title: 'Banking System Upgrade',
          description: 'Migrated core banking system to cloud with zero downtime',
          results: ['Zero downtime migration', '10M+ transactions/day', 'SOC2 compliant']
        }
      ],
      stats: [
        { icon: <FiUsers />, value: '100+', label: 'Enterprise Clients' },
        { icon: <FiShield />, value: '100%', label: 'Security Compliance' },
        { icon: <FiBarChart />, value: '45%', label: 'Avg Cost Reduction' }
      ]
    },
    {
      id: 3,
      icon: <FiSettings />,
      name: 'Manufacturing',
      tagline: 'Industry 4.0 Solutions',
      description: 'Revolutionizing manufacturing with IoT, automation, and smart factory solutions.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      challenges: [
        {
          title: 'Production Inefficiencies',
          solution: 'IoT-enabled real-time monitoring and predictive maintenance systems'
        },
        {
          title: 'Supply Chain Visibility',
          solution: 'End-to-end supply chain tracking with AI-powered analytics'
        },
        {
          title: 'Quality Control Issues',
          solution: 'Computer vision and AI for automated quality inspection'
        },
        {
          title: 'Equipment Downtime',
          solution: 'Predictive maintenance using machine learning algorithms'
        }
      ],
      solutions: [
        'IoT & Smart Factory Solutions',
        'Manufacturing Execution Systems (MES)',
        'Predictive Maintenance',
        'Supply Chain Management',
        'Quality Control Automation',
        'Production Analytics & BI'
      ],
      caseStudies: [
        {
          title: 'Smart Factory Implementation',
          description: 'Deployed IoT sensors across 3 manufacturing plants for real-time monitoring',
          results: ['30% downtime reduction', '25% productivity increase', 'ROI in 18 months']
        },
        {
          title: 'Quality Control Automation',
          description: 'AI-powered visual inspection system reducing defects by 40%',
          results: ['40% defect reduction', '99.5% accuracy', '50% faster inspection']
        }
      ],
      stats: [
        { icon: <FiSettings />, value: '25+', label: 'Manufacturing Clients' },
        { icon: <FiTrendingUp />, value: '35%', label: 'Efficiency Gain' },
        { icon: <FiClock />, value: '30%', label: 'Downtime Reduction' }
      ]
    },
    {
      id: 4,
      icon: <FiActivity />,
      name: 'Healthcare',
      tagline: 'Digital Health Innovation',
      description: 'Transforming healthcare delivery with secure, compliant, and patient-centric solutions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      challenges: [
        {
          title: 'Patient Data Security',
          solution: 'HIPAA-compliant systems with end-to-end encryption and access controls'
        },
        {
          title: 'Interoperability Issues',
          solution: 'HL7/FHIR standards implementation for seamless data exchange'
        },
        {
          title: 'Appointment Management',
          solution: 'Intelligent scheduling systems with automated reminders and follow-ups'
        },
        {
          title: 'Telemedicine Adoption',
          solution: 'Secure video consultation platforms with integrated EHR systems'
        }
      ],
      solutions: [
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'Patient Portal Development',
        'Healthcare Analytics & BI',
        'Medical Imaging Solutions',
        'HIPAA Compliance & Security'
      ],
      caseStudies: [
        {
          title: 'Hospital Management System',
          description: 'Comprehensive HMS for 500-bed hospital with integrated EHR and billing',
          results: ['500+ beds managed', '40% admin time saved', 'HIPAA compliant']
        },
        {
          title: 'Telemedicine Platform',
          description: 'Built secure telemedicine platform serving 50K+ patients',
          results: ['50K+ patients served', '10K+ consultations/month', '98% satisfaction']
        }
      ],
      stats: [
        { icon: <FiActivity />, value: '30+', label: 'Healthcare Projects' },
        { icon: <FiShield />, value: '100%', label: 'HIPAA Compliant' },
        { icon: <FiUsers />, value: '1M+', label: 'Patients Served' }
      ]
    },
    {
      id: 5,
      icon: <FiDollarSign />,
      name: 'Finance',
      tagline: 'Secure Financial Technology',
      description: 'Building secure, scalable, and compliant financial technology solutions for the digital age.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      challenges: [
        {
          title: 'Regulatory Compliance',
          solution: 'Built-in compliance frameworks for PCI-DSS, SOX, and regional regulations'
        },
        {
          title: 'Fraud Detection',
          solution: 'AI-powered fraud detection systems with real-time monitoring'
        },
        {
          title: 'Transaction Security',
          solution: 'Multi-layer security with encryption, tokenization, and biometric auth'
        },
        {
          title: 'Legacy System Integration',
          solution: 'Secure API gateways connecting modern apps with core banking systems'
        }
      ],
      solutions: [
        'Digital Banking Platforms',
        'Payment Gateway Integration',
        'Fraud Detection Systems',
        'Wealth Management Solutions',
        'Blockchain & Cryptocurrency',
        'Financial Analytics & Reporting'
      ],
      caseStudies: [
        {
          title: 'Digital Banking Platform',
          description: 'Launched mobile banking app with 200K+ active users',
          results: ['200K+ active users', '5M+ transactions/month', 'PCI-DSS certified']
        },
        {
          title: 'Fraud Detection System',
          description: 'AI-powered fraud detection reducing false positives by 60%',
          results: ['60% fewer false positives', '99.8% accuracy', '$2M fraud prevented']
        }
      ],
      stats: [
        { icon: <FiDollarSign />, value: '40+', label: 'Finance Projects' },
        { icon: <FiShield />, value: '100%', label: 'PCI-DSS Compliant' },
        { icon: <FiBarChart />, value: '$50M+', label: 'Transactions Processed' }
      ]
    }
  ]

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <motion.section
        className="industries-hero"
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
            <h1 className="industries-hero-title">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="industries-hero-subtitle">
              Delivering tailored technology solutions across diverse industries with deep domain expertise
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Overview */}
      <section className="section industries-overview">
        <div className="container">
          <motion.div
            className="industries-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                className="industry-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                onClick={() => setActiveIndustry(industry.id)}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-tagline">{industry.tagline}</p>
                <button className="industry-explore">
                  Explore <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry) => (
        <section
          key={industry.id}
          className={`section industry-detail ${industry.id % 2 === 0 ? 'industry-detail-alt' : ''}`}
          id={`industry-${industry.id}`}
        >
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              {/* Header */}
              <div className="industry-detail-header">
                <div className="industry-detail-content">
                  <div className="industry-detail-icon">{industry.icon}</div>
                  <h2 className="industry-detail-title">{industry.name}</h2>
                  <p className="industry-detail-tagline">{industry.tagline}</p>
                  <p className="industry-detail-description">{industry.description}</p>
                </div>
                <div className="industry-detail-image">
                  <img src={industry.image} alt={industry.name} />
                </div>
              </div>

              {/* Stats */}
              <motion.div
                className="industry-stats"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                {industry.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="industry-stat-card"
                    variants={fadeInUp}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Challenges & Solutions */}
              <div className="challenges-solutions">
                <h3 className="section-subtitle">Challenges & Our Solutions</h3>
                <motion.div
                  className="challenges-grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {industry.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="challenge-card"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="challenge-header">
                        <div className="challenge-number">{index + 1}</div>
                        <h4 className="challenge-title">{challenge.title}</h4>
                      </div>
                      <div className="challenge-solution">
                        <FiCheck className="solution-check" />
                        <p className="solution-text">{challenge.solution}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Solutions Offered */}
              <div className="solutions-offered">
                <h3 className="section-subtitle">Solutions We Offer</h3>
                <motion.div
                  className="solutions-grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {industry.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      className="solution-item"
                      variants={fadeInUp}
                      whileHover={{ x: 10 }}
                    >
                      <FiCheck className="solution-icon" />
                      <span>{solution}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Case Studies */}
              <div className="case-studies">
                <h3 className="section-subtitle">Success Stories</h3>
                <motion.div
                  className="case-studies-grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {industry.caseStudies.map((caseStudy, index) => (
                    <motion.div
                      key={index}
                      className="case-study-card"
                      variants={fadeInUp}
                      whileHover={{ y: -10 }}
                    >
                      <h4 className="case-study-title">{caseStudy.title}</h4>
                      <p className="case-study-description">{caseStudy.description}</p>
                      <div className="case-study-results">
                        <h5 className="results-title">Key Results:</h5>
                        <ul className="results-list">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx}>
                              <FiCheck /> {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section industries-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="cta-title">Ready to Transform Your Industry?</h2>
            <p className="cta-description">
              Let's discuss how our industry-specific solutions can drive your business forward
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries
