import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe, FiDownload, FiEye } from 'react-icons/fi'
import profileImg1 from '../Images/profile_img1.jpg';

const Hero = ({ darkMode }) => {
  const handleDownloadResume = () => {
    // Open the PDF in a new tab for download
    window.open('/pdf/Bhayani_1.2.pdf', '_blank')
  }

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: FiGlobe, label: 'Portfolio', href: '#' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/vatsalbhayani' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vatsal-bhayani' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-lg"
            >
              👋 Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Vatsal <span className="gradient-text">Bhayani</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Software Developer
            </motion.h2>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-400 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Building scalable web apps',
                  2000,
                  'Laravel • Django • React',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'REST APIs & Databases',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                <a href="tel:+918401159071" className="hover:text-primary transition-colors">
                  +91-8401159071
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <a href="mailto:vatsalbhayani48@gmail.com" className="hover:text-primary transition-colors">
                  vatsalbhayani48@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <span>Mumbai, India</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FiDownload />
                Download Resume
              </button>
              <button
                onClick={handleViewProjects}
                className="flex items-center gap-2 px-6 py-3 glass hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
              >
                <FiEye />
                View Projects
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={profileImg1}
                  alt="Vatsal Bhayani - Software Developer"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
