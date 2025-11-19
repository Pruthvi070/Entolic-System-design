import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px', minHeight: '100vh' }}
    >
      <div className="container">
        <div className="section">
          <h1 className="section-title">Our Portfolio</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--light-gray)', maxWidth: '600px', margin: '0 auto' }}>
            Explore our successful projects and case studies across various industries.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
