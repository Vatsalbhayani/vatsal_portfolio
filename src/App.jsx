import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun, FiArrowUp } from 'react-icons/fi'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    // Show scroll to top button when scrolled down
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyPress = (e) => {
      // R = Jump to Resume
      if (e.key === 'r' || e.key === 'R') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          const resumeSection = document.getElementById('resume')
          if (resumeSection) {
            resumeSection.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
      // D = Download PDF
      if (e.key === 'd' || e.key === 'D') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          const downloadBtn = document.getElementById('download-resume-btn')
          if (downloadBtn) {
            downloadBtn.click()
          }
        }
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} />

      {/* Dark Mode Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleDarkMode}
        className="no-print fixed top-6 right-6 z-50 p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
        aria-label="Toggle dark mode"
      >
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiSun className="w-5 h-5 text-accent" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMoon className="w-5 h-5 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Main Content */}
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="no-print fixed bottom-8 right-8 z-40 p-4 rounded-full bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Hint */}
      <div className="no-print fixed bottom-8 left-8 z-40 text-xs text-gray-500 dark:text-gray-600 space-y-1">
        <div>Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">R</kbd> for Resume</div>
        <div>Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">D</kbd> to Download</div>
      </div>

      {/* Footer */}
      <footer className="no-print py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Vatsal Bhayani. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Tailwind CSS & ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default App
