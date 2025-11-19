import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
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
          <h1 className="section-title">Blog & Insights</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--light-gray)', maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with the latest trends in technology, AI, and digital transformation.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Blog
