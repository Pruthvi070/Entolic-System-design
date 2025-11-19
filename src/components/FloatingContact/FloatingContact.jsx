import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import './FloatingContact.css'

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message submission
      console.log('Message sent:', message)
      setMessage('')
      setIsOpen(false)
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
              <p>Send us a message and we'll get back to you!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                rows="4"
                required
              />
              <button type="submit" className="send-btn">
                <FiSend />
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingContact
