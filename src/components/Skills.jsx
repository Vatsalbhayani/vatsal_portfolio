import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiCode, FiDatabase, FiTool, FiCpu, FiCloud, FiUsers } from 'react-icons/fi'

const Skills = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedBars, setAnimatedBars] = useState(false)

  useEffect(() => {
    if (isInView && !animatedBars) {
      setAnimatedBars(true)
    }
  }, [isInView, animatedBars])

  const skillCategories = [
    {
      icon: FiCode,
      title: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      icon: FiDatabase,
      title: 'Frameworks & Libraries',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'Laravel', level: 90 },
        { name: 'CodeIgniter', level: 75 },
        { name: 'Bootstrap', level: 85 },
        { name: 'jQuery', level: 80 },
        { name: 'React', level: 75 }
      ]
    },
    {
      icon: FiDatabase,
      title: 'Databases',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'SQLite', level: 85 },
        { name: 'Database Design', level: 85 },
        { name: 'Query Optimization', level: 80 }
      ]
    },
    {
      icon: FiTool,
      title: 'Tools & Technologies',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'REST API', level: 90 },
        { name: 'AJAX', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 }
      ]
    },
    {
      icon: FiCpu,
      title: 'AI Tools & Concepts',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'GitHub Copilot', level: 80 },
        { name: 'ChatGPT', level: 85 },
        { name: 'Windsurf', level: 75 },
        { name: 'Prompt Engineering', level: 80 },
        { name: 'AI Model Integration', level: 70 }
      ]
    },
    {
      icon: FiCloud,
      title: 'Core Concepts',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'MVC Architecture', level: 90 },
        { name: 'CRUD Operations', level: 95 },
        { name: 'Authentication', level: 90 },
        { name: 'Session Management', level: 85 },
        { name: 'AWS Basics', level: 65 }
      ]
    }
  ]

  const softSkills = [
    'Problem Solving',
    'Self-learning',
    'Presentation',
    'Adaptability',
    'Team Collaboration',
    'Time Management',
    'Critical Thinking',
    'Communication'
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700`}>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={animatedBars ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
              <FiUsers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Soft Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-xl text-center hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/30"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
