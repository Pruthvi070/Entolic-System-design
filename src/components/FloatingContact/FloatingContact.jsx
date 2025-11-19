import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend, FiMail, FiPhone } from 'react-icons/fi'
import './FloatingContact.css'

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      // Handle message submission
      console.log('Quick contact submitted:', formData)
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitted(false)
        setIsOpen(false)
      }, 2000)
    }
  }

  return (
    <>
      <motion.button
        className="floating-contact-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-contact-panel"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="panel-header">
              <h3>Quick Contact</h3>
              <p>Send us a message and we'll get back to you within 24 hours!</p>
            </div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="quick-contact-form">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="quick-input"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="quick-input"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows="3"
                  required
                  className="quick-textarea"
                />
                <button type="submit" className="send-btn">
                  <FiSend />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="success-panel">
                <div className="success-icon">✓</div>
                <p>Message sent successfully!</p>
              </div>
            )}

            <div className="panel-footer">
              <a href="mailto:info@entolicsystems.com" className="quick-link">
                <FiMail /> info@entolicsystems.com
              </a>
              <a href="tel:+919765171957" className="quick-link">
                <FiPhone /> +91 9765171957
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingContact
