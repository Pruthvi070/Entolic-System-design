import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiClock,
  FiLinkedin,
  FiTwitter,
  FiFacebook
} from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit it
      console.log('Form submitted:', formData)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setSubmitted(false)
      }, 3000)
    } else {
      setErrors(newErrors)
    }
  }

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: [
        'Office No. 313, City Center Building,',
        'Rajiv Gandhi Infotech Park,',
        'Hinjewadi Phase 1, Pune, MH,',
        'India - 411057'
      ]
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+91 9765171957'],
      link: 'tel:+919765171957'
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['info@entolicsystems.com'],
      link: 'mailto:info@entolicsystems.com'
    },
    {
      icon: <FiClock />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
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
            <h1 className="contact-hero-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero-subtitle">
              Have a project in mind? Let's discuss how we can help you achieve your goals
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="section contact-info-section">
        <div className="container">
          <motion.div
            className="contact-info-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3 className="info-title">{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    info.link && idx === 0 ? (
                      <a key={idx} href={info.link} className="info-link">
                        {detail}
                      </a>
                    ) : (
                      <p key={idx}>{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-description">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FiUser /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <FiMail /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <FiPhone /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FiMessageSquare /> Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FiMessageSquare /> Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us about your project..."
                    rows="6"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend /> Send Message
                </motion.button>

                {submitted && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="contact-map-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="section-title">Find Us Here</h2>
              
              {/* Google Map Embed */}
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8658718487595!2d73.72692631489795!3d18.590909987382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb9c4f8c8c8d%3A0x8e4f8c8c8c8c8c8c!2sRajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Entolic Systems Location"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3 className="social-title">Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                  <a href="#" className="social-link twitter" aria-label="Twitter">
                    <FiTwitter />
                  </a>
                  <a href="#" className="social-link facebook" aria-label="Facebook">
                    <FiFacebook />
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="quick-info">
                <h3 className="quick-info-title">Why Choose Us?</h3>
                <ul className="quick-info-list">
                  <li>✓ 100+ Successful Projects Delivered</li>
                  <li>✓ 50+ Expert Team Members</li>
                  <li>✓ 24/7 Customer Support</li>
                  <li>✓ Agile Development Methodology</li>
                  <li>✓ Competitive Pricing</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">What is your typical project timeline?</h3>
                <p className="faq-answer">
                  Project timelines vary based on complexity. A typical web application takes 3-6 months, 
                  while enterprise solutions may take 6-12 months. We provide detailed timelines during consultation.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do you provide post-launch support?</h3>
                <p className="faq-answer">
                  Yes! We offer comprehensive post-launch support including maintenance, updates, bug fixes, 
                  and feature enhancements. Support packages are customized to your needs.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What technologies do you specialize in?</h3>
                <p className="faq-answer">
                  We specialize in modern tech stacks including React, Node.js, Python, AWS, Azure, 
                  AI/ML frameworks, and more. We choose the best technology for your specific requirements.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How do you ensure project quality?</h3>
                <p className="faq-answer">
                  We follow agile methodology with regular sprints, code reviews, automated testing, 
                  and continuous integration. Quality assurance is integrated throughout the development process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
