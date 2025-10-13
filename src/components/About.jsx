import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiDatabase, FiServer, FiZap } from 'react-icons/fi'
import profileImg2 from '../images/profile_img2.jpg';

const About = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: FiCode,
      title: '1+ Year Experience',
      description: 'Building scalable web applications'
    },
    {
      icon: FiServer,
      title: 'Full Stack',
      description: 'Laravel, Django, React expertise'
    },
    {
      icon: FiDatabase,
      title: 'Database Design',
      description: 'MySQL, SQLite optimization'
    },
    {
      icon: FiZap,
      title: 'REST APIs',
      description: 'Clean architecture & integration'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImg2}
                alt="Vatsal Bhayani"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Full Stack Developer
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Proactive and versatile <span className="text-primary font-semibold">Full Stack Developer</span> with 
              <span className="text-accent font-semibold"> 1 year of experience</span> designing, developing, and 
              maintaining scalable web applications.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Skilled in <span className="font-semibold">PHP (Laravel)</span>, 
              <span className="font-semibold"> Python (Django)</span>, 
              <span className="font-semibold"> JavaScript</span>, 
              <span className="font-semibold"> MySQL</span>, and 
              <span className="font-semibold"> REST APIs</span>.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hands-on experience building live projects including AMC systems, CRM platforms, 
              ticketing solutions, and library management with clean architecture (MVC/MVT), 
              responsive UI, and automation.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
