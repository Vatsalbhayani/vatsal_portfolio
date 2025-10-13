import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border-l-4 border-primary">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Bachelor of Engineering – Information Technology
                </h3>
                <p className="text-lg text-primary font-semibold mb-3">
                  Sardar Vallabhbhai Patel Institute of Technology
                </p>
                
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-primary" />
                    <span>Anand, Gujarat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-accent" />
                    <span>2021 – 2025</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 glass px-6 py-4 rounded-xl border border-primary/20">
                <FiAward className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CGPA</p>
                  <p className="text-3xl font-bold gradient-text">7.88</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Highlights:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Specialized in Web Development, Database Management, and Software Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Completed multiple live projects during internship and academic coursework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Strong foundation in Data Structures, Algorithms, and System Design</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
