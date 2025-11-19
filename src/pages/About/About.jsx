import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiTarget, 
  FiEye, 
  FiAward, 
  FiUsers, 
  FiTrendingUp,
  FiHeart,
  FiZap,
  FiShield
} from 'react-icons/fi'
import './About.css'

const About = () => {
  const [activeLeader, setActiveLeader] = useState(null)

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  // Company values
  const values = [
    {
      icon: <FiZap />,
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.'
    },
    {
      icon: <FiHeart />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through dedication and excellence.'
    },
    {
      icon: <FiShield />,
      title: 'Integrity & Trust',
      description: 'We operate with transparency, honesty, and unwavering commitment to ethical practices.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Continuous Growth',
      description: 'We invest in our team and technology to stay ahead in the ever-evolving digital landscape.'
    }
  ]

  // Leadership team
  const leaders = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
      bio: 'With over 15 years of experience in technology and business strategy, Rajesh leads Entolic Systems with a vision to transform businesses through innovative digital solutions.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces',
      bio: 'Priya brings 12+ years of technical expertise in cloud architecture and AI. She drives our technology roadmap and ensures we deliver world-class solutions.'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces',
      bio: 'Amit oversees all operational aspects with 10+ years of experience in project management and client relations, ensuring seamless delivery and client satisfaction.'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      position: 'Head of Innovation',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces',
      bio: 'Sneha leads our R&D initiatives with expertise in emerging technologies, driving innovation and keeping us at the forefront of digital transformation.'
    }
  ]

  // Milestones
  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Entolic Systems was established with a vision to revolutionize digital transformation.'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful cloud migration project.'
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ professionals and expanded service offerings to include AI/ML solutions.'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Received "Best IT Solutions Provider" award and crossed 50+ successful project deliveries.'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded operations internationally, serving clients across 10+ countries.'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Launched our Innovation Lab focusing on cutting-edge technologies like blockchain and IoT.'
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'Achieved 100+ successful projects and established partnerships with leading technology providers.'
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
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
            <h1 className="about-hero-title">
              About <span className="gradient-text">Entolic Systems</span>
            </h1>
            <p className="about-hero-subtitle">
              Empowering businesses with infinite innovation and cutting-edge technology solutions
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story */}
      <section className="section about-story">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Story</h2>
            <div className="story-content">
              <p className="story-text">
                Founded in 2018, Entolic Systems emerged from a simple yet powerful vision: to bridge the gap 
                between traditional business practices and modern digital solutions. What started as a small team 
                of passionate technologists has grown into a leading IT solutions provider, serving clients across 
                multiple industries and geographies.
              </p>
              <p className="story-text">
                Our journey has been marked by continuous innovation, unwavering commitment to excellence, and a 
                deep understanding of our clients' needs. We don't just build software; we craft digital experiences 
                that transform businesses and drive measurable results.
              </p>
              <p className="story-text">
                Today, Entolic Systems stands as a trusted partner for startups, SMEs, and enterprises seeking to 
                navigate the complexities of digital transformation. Our success is measured not just in projects 
                delivered, but in the lasting impact we create for our clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <motion.div
              className="vision-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="vm-icon">
                <FiEye />
              </div>
              <h3 className="vm-title">Our Vision</h3>
              <motion.p 
                className="vm-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                To be the global leader in innovative technology solutions, empowering businesses 
                worldwide to achieve infinite possibilities through digital transformation.
              </motion.p>
            </motion.div>

            <motion.div
              className="mission-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="vm-icon">
                <FiTarget />
              </div>
              <h3 className="vm-title">Our Mission</h3>
              <motion.p 
                className="vm-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                To deliver exceptional, innovative, and scalable technology solutions that drive 
                business growth, enhance operational efficiency, and create lasting value for our clients.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section leadership-team">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Meet Our Leadership
          </motion.h2>
          <motion.div
            className="leaders-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.id}
                className="leader-card"
                variants={fadeInUp}
                onHoverStart={() => setActiveLeader(leader.id)}
                onHoverEnd={() => setActiveLeader(null)}
                whileHover={{ y: -10 }}
              >
                <div className="leader-image-wrapper">
                  <img src={leader.image} alt={leader.name} className="leader-image" />
                  <motion.div
                    className="leader-bio-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeLeader === leader.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="leader-bio">{leader.bio}</p>
                  </motion.div>
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="section milestone-timeline">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Journey
          </motion.h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section about-stats">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-icon"><FiUsers /></div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-icon"><FiAward /></div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Delivered</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-icon"><FiTrendingUp /></div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Countries Served</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeInUp}>
              <div className="stat-icon"><FiTarget /></div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
