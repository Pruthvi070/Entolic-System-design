import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiTag,
  FiArrowRight,
  FiSearch,
  FiMail,
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiMessageCircle,
  FiTrendingUp
} from 'react-icons/fi'
import './Blog.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

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

  const categories = ['All', 'AI & Machine Learning', 'SaaS', 'Automation', 'Cloud Computing', 'Digital Transformation']

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore how artificial intelligence is reshaping business operations and what trends will dominate the landscape in the coming year.',
      content: 'Artificial Intelligence continues to revolutionize how businesses operate...',
      author: 'Rajesh Kumar',
      authorRole: 'CEO & AI Strategist',
      date: '2024-11-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      tags: ['AI', 'Machine Learning', 'Business Strategy', 'Innovation'],
      views: 1250,
      comments: 24
    },
    {
      id: 2,
      title: 'SaaS Architecture Best Practices for Scalable Applications',
      excerpt: 'Learn the essential architectural patterns and best practices for building scalable, secure, and maintainable SaaS applications.',
      content: 'Building a successful SaaS application requires careful planning...',
      author: 'Priya Sharma',
      authorRole: 'CTO & Cloud Architect',
      date: '2024-11-12',
      readTime: '10 min read',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      tags: ['SaaS', 'Cloud Architecture', 'Scalability', 'Best Practices'],
      views: 980,
      comments: 18
    },
    {
      id: 3,
      title: 'Automation Revolution: How RPA is Transforming Industries',
      excerpt: 'Discover how Robotic Process Automation is driving efficiency and reducing costs across various industries.',
      content: 'Robotic Process Automation (RPA) has emerged as a game-changer...',
      author: 'Amit Patel',
      authorRole: 'Head of Operations',
      date: '2024-11-10',
      readTime: '7 min read',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
      tags: ['RPA', 'Automation', 'Digital Transformation', 'Efficiency'],
      views: 1450,
      comments: 32
    },
    {
      id: 4,
      title: 'Cloud Migration Strategy: A Complete Guide for Enterprises',
      excerpt: 'A comprehensive guide to planning and executing a successful cloud migration for enterprise organizations.',
      content: 'Cloud migration is no longer optional for enterprises...',
      author: 'Sneha Reddy',
      authorRole: 'Head of Innovation',
      date: '2024-11-08',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'Enterprise'],
      views: 2100,
      comments: 45
    },
    {
      id: 5,
      title: 'Machine Learning in Production: Lessons from Real Projects',
      excerpt: 'Real-world insights and lessons learned from deploying machine learning models in production environments.',
      content: 'Deploying ML models to production comes with unique challenges...',
      author: 'Priya Sharma',
      authorRole: 'CTO & Cloud Architect',
      date: '2024-11-05',
      readTime: '9 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop',
      tags: ['Machine Learning', 'MLOps', 'Production', 'Best Practices'],
      views: 1680,
      comments: 28
    },
    {
      id: 6,
      title: 'Digital Transformation: Beyond Technology',
      excerpt: 'Understanding that successful digital transformation is about people, processes, and culture - not just technology.',
      content: 'Digital transformation is often misunderstood as purely technological...',
      author: 'Rajesh Kumar',
      authorRole: 'CEO & AI Strategist',
      date: '2024-11-02',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
      tags: ['Digital Transformation', 'Change Management', 'Culture', 'Strategy'],
      views: 1920,
      comments: 36
    },
    {
      id: 7,
      title: 'The Rise of Low-Code/No-Code Platforms in Enterprise',
      excerpt: 'How low-code and no-code platforms are democratizing software development and accelerating digital initiatives.',
      content: 'Low-code and no-code platforms are changing the development landscape...',
      author: 'Amit Patel',
      authorRole: 'Head of Operations',
      date: '2024-10-30',
      readTime: '8 min read',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['Low-Code', 'No-Code', 'Development', 'Enterprise'],
      views: 1340,
      comments: 22
    },
    {
      id: 8,
      title: 'AI-Powered Automation: The Next Frontier',
      excerpt: 'Combining AI with automation to create intelligent systems that learn and adapt over time.',
      content: 'The convergence of AI and automation is creating unprecedented opportunities...',
      author: 'Sneha Reddy',
      authorRole: 'Head of Innovation',
      date: '2024-10-28',
      readTime: '10 min read',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
      tags: ['AI', 'Automation', 'Intelligent Systems', 'Innovation'],
      views: 1780,
      comments: 31
    }
  ]

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory
    const searchMatch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 3000)
    }
  }

  const handleShare = (platform, post) => {
    const url = `https://entolicsystems.com/blog/${post.id}`
    const text = post.title
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <motion.section
        className="blog-hero"
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
            <h1 className="blog-hero-title">
              Insights & <span className="gradient-text">Innovations</span>
            </h1>
            <p className="blog-hero-subtitle">
              Stay updated with the latest trends in AI, SaaS, automation, and digital transformation
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <section className="section search-filter-section">
        <div className="container">
          <motion.div
            className="search-filter-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Search Bar */}
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="results-count">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section blog-posts-section">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${searchQuery}`}
                  className="blog-posts-grid"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={staggerContainer}
                >
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      className="blog-post-card"
                      variants={fadeInUp}
                      whileHover={{ y: -10 }}
                      layout
                    >
                      {/* Post Image */}
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                        <div className="post-category-badge">{post.category}</div>
                      </div>

                      {/* Post Content */}
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="meta-item">
                            <FiCalendar /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="meta-item">
                            <FiClock /> {post.readTime}
                          </span>
                        </div>

                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-excerpt">{post.excerpt}</p>

                        {/* Tags */}
                        <div className="post-tags">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="post-tag">
                              <FiTag /> {tag}
                            </span>
                          ))}
                        </div>

                        {/* Author & Stats */}
                        <div className="post-footer">
                          <div className="post-author">
                            <FiUser className="author-icon" />
                            <div className="author-info">
                              <strong>{post.author}</strong>
                              <span>{post.authorRole}</span>
                            </div>
                          </div>

                          <div className="post-stats">
                            <span className="stat-item">
                              <FiTrendingUp /> {post.views}
                            </span>
                            <span className="stat-item">
                              <FiMessageCircle /> {post.comments}
                            </span>
                          </div>
                        </div>

                        {/* Share Buttons */}
                        <div className="post-share">
                          <span className="share-label">
                            <FiShare2 /> Share:
                          </span>
                          <div className="share-buttons">
                            <button
                              className="share-btn twitter"
                              onClick={() => handleShare('twitter', post)}
                              aria-label="Share on Twitter"
                            >
                              <FiTwitter />
                            </button>
                            <button
                              className="share-btn linkedin"
                              onClick={() => handleShare('linkedin', post)}
                              aria-label="Share on LinkedIn"
                            >
                              <FiLinkedin />
                            </button>
                            <button
                              className="share-btn facebook"
                              onClick={() => handleShare('facebook', post)}
                              aria-label="Share on Facebook"
                            >
                              <FiFacebook />
                            </button>
                          </div>
                        </div>

                        <motion.button
                          className="read-more-btn"
                          whileHover={{ x: 5 }}
                        >
                          Read More <FiArrowRight />
                        </motion.button>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <motion.div
                  className="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p>No articles found matching your search. Try different keywords or categories.</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Newsletter Signup */}
              <motion.div
                className="sidebar-widget newsletter-widget"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3 className="widget-title">
                  <FiMail /> Subscribe to Our Newsletter
                </h3>
                <p className="widget-description">
                  Get the latest insights delivered directly to your inbox
                </p>
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
                {subscribed && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Successfully subscribed!
                  </motion.div>
                )}
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                className="sidebar-widget popular-posts-widget"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3 className="widget-title">
                  <FiTrendingUp /> Popular Posts
                </h3>
                <div className="popular-posts-list">
                  {blogPosts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 4)
                    .map((post) => (
                      <div key={post.id} className="popular-post-item">
                        <div className="popular-post-image">
                          <img src={post.image} alt={post.title} />
                        </div>
                        <div className="popular-post-info">
                          <h4 className="popular-post-title">{post.title}</h4>
                          <div className="popular-post-meta">
                            <FiCalendar /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                className="sidebar-widget categories-widget"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3 className="widget-title">Categories</h3>
                <div className="categories-list">
                  {categories.filter(cat => cat !== 'All').map((category) => {
                    const count = blogPosts.filter(post => post.category === category).length
                    return (
                      <button
                        key={category}
                        className="category-item"
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span>{category}</span>
                        <span className="category-count">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
