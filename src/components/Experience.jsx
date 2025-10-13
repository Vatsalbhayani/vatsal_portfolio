import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'

const Experience = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const responsibilities = [
    'Developed and maintained web applications using Laravel and Django frameworks',
    'Worked on Apni AMC and MukeCRM projects with MySQL database integration',
    'Implemented AJAX-based CRUD operations for real-time data handling',
    'Built authentication systems with role-based access control',
    'Integrated REST APIs for seamless frontend-backend communication',
    'Collaborated with team on debugging, testing, and deployment processes',
    'Optimized database queries for improved application performance',
    'Created responsive UI components using Bootstrap and JavaScript'
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-gray-900 dark:border-gray-900 z-10"></div>

            {/* Content Card */}
            <div className="ml-8 md:ml-0 md:w-[calc(50%-2rem)] md:ml-auto glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-l-4 border-primary">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <FiBriefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    Full Stack Development Intern
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-3">
                    Mukesoft Company
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-accent" />
                      <span>February 2025 – August 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-primary" />
                      <span>6 months</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Django', 'MySQL', 'REST APIs', 'AJAX', 'JavaScript', 'Bootstrap'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Key Responsibilities:</h4>
                <div className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <FiCheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects Worked On */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Projects Delivered:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="glass p-4 rounded-lg">
                    <h5 className="font-semibold text-primary mb-1">Apni AMC</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Service Management System</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h5 className="font-semibold text-primary mb-1">MukeCRM</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Task Management Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
