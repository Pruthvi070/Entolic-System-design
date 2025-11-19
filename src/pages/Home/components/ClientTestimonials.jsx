import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import './ClientTestimonials.css'

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Entolic Systems transformed our entire digital infrastructure. Their expertise in cloud solutions and automation helped us reduce operational costs by 40% while improving system reliability.',
      project: 'Cloud Migration & Automation'
    },
    {
      name: 'Michael Chen',
      position: 'CEO',
      company: 'InnovateCorp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The team at Entolic Systems delivered beyond our expectations. Their AI-powered solution increased our productivity by 60% and gave us a significant competitive advantage in the market.',
      project: 'AI Integration & Process Automation'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director',
      company: 'HealthTech Innovations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Working with Entolic Systems was a game-changer for our healthcare platform. Their attention to security and compliance requirements was exceptional, and the results speak for themselves.',
      project: 'Healthcare Management System'
    },
    {
      name: 'David Park',
      position: 'VP of Technology',
      company: 'Manufacturing Plus',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The IoT solution implemented by Entolic Systems revolutionized our manufacturing process. We achieved 90% reduction in downtime and saved millions in operational costs.',
      project: 'IoT & Predictive Maintenance'
    },
    {
      name: 'Lisa Thompson',
      position: 'Digital Transformation Lead',
      company: 'RetailMax Group',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Entolic Systems guided us through a complete digital transformation. Their strategic approach and technical expertise helped us modernize our entire retail operation successfully.',
      project: 'Digital Transformation'
    }
  ]

  const clientLogos = [
    { name: 'Stripe', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=60&fit=crop&q=80' },
    { name: 'Shopify', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&h=60&fit=crop&q=80' },
    { name: 'Slack', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=150&h=60&fit=crop&q=80' },
    { name: 'Airbnb', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=60&fit=crop&q=80' },
    { name: 'Netflix', logo: 'https://images.unsplash.com/photo-1574267432644-f610f5b7e93c?w=150&h=60&fit=crop&q=80' },
    { name: 'Spotify', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=150&h=60&fit=crop&q=80' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="client-testimonials section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="testimonials-container">
          <button className="nav-btn prev-btn" onClick={prevTestimonial}>
            <FiChevronLeft />
          </button>

          <div className="testimonials-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="star filled" />
                    ))}
                  </div>
                  
                  <blockquote className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="project-tag">
                    {testimonials[currentIndex].project}
                  </div>
                </div>

                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-position">{testimonials[currentIndex].position}</p>
                    <p className="author-company">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="nav-btn next-btn" onClick={nextTestimonial}>
            <FiChevronRight />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <motion.div
          className="client-logos"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="logos-title">Trusted by Industry Leaders</h3>
          <div className="logos-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="logo-item">
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientTestimonials
