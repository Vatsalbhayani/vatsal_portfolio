import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiCode, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Projects = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Apni AMC',
      subtitle: 'Service Management System',
      description: 'Comprehensive web-based AMC system for technician task allocation and contract tracking with role-based access control.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'AJAX', 'JavaScript', 'Bootstrap'],
      features: [
        'Role-based access for admin and client panels',
        'Technician management and task allocation system',
        'Quotation generation and contract tracking',
        'AI-based task suggestions for optimal assignment',
        'Integrated Paytm & Razorpay payment gateways',
        'Real-time notifications and status updates',
        'Comprehensive reporting and analytics dashboard'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'MukeCRM',
      subtitle: 'Company Task Management System',
      description: 'Advanced CRM platform for daily/weekly task assignment, lead management, and subscription billing with role-based authentication.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'AJAX', 'JavaScript', 'Bootstrap'],
      features: [
        'Daily and weekly task assignment with priority levels',
        'Lead management with conversion tracking',
        'Subscription billing and payment processing',
        'Task tracking with progress monitoring',
        'Role-based authentication and permissions',
        'Optimized database queries for scalability',
        'Email notifications and reminders',
        'Custom reporting and data export'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Client Support Ticketing System',
      subtitle: 'Secure Ticket Management Platform',
      description: 'Django-based ticketing system with AJAX submission, modular architecture, and comprehensive validation for efficient client support.',
      technologies: ['Python', 'Django', 'SQLite', 'AJAX', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'AJAX-powered ticket submission without page reload',
        'Modular Django models with proper relationships',
        'Comprehensive form validation and error handling',
        'Ticket status tracking and priority management',
        'User authentication and session management',
        'Admin dashboard for ticket management',
        'Email notifications for ticket updates',
        'Search and filter functionality'
      ],
      color: 'from-green-500 to-teal-500'
    }
  ]

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FiCode className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-white/90 font-medium mb-3">{project.subtitle}</p>
                    <p className="text-white/80">{project.description}</p>
                  </div>
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors ml-4"
                    aria-label="Toggle project details"
                  >
                    {expandedProject === project.id ? (
                      <FiChevronUp className="w-6 h-6" />
                    ) : (
                      <FiChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-gray-800 dark:text-white rounded-lg text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Features */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProject === project.id ? 'auto' : 0,
                    opacity: expandedProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={expandedProject === project.id ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <FiExternalLink className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* View Details Button */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="mt-4 text-primary hover:text-primary-dark font-semibold flex items-center gap-2 transition-colors"
                >
                  {expandedProject === project.id ? 'Show Less' : 'View Details'}
                  {expandedProject === project.id ? (
                    <FiChevronUp className="w-4 h-4" />
                  ) : (
                    <FiChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
