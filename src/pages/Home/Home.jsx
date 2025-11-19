import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ServicesSnapshot from './components/ServicesSnapshot'
import WhyChooseUs from './components/WhyChooseUs'
import CaseStudiesPreview from './components/CaseStudiesPreview'
import ClientTestimonials from './components/ClientTestimonials'
import FinalCTA from './components/FinalCTA'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSnapshot />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <ClientTestimonials />
      <FinalCTA />
    </motion.div>
  )
}

export default Home
