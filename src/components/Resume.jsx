import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload, FiPrinter, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const Resume = ({ darkMode }) => {
  const ref = useRef(null)
  const resumeRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownloadPDF = async () => {
    // Open the existing PDF
    window.open('/pdf/Bhayani_1.2.pdf', '_blank')
  }

  const handlePrint = () => {
    window.print()
  }

  const handleGeneratePDF = async () => {
    const element = resumeRef.current
    if (!element) return

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: darkMode ? '#1a202c' : '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 0

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('Vatsal_Bhayani_Resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <section id="resume" ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 no-print">
            <button
              id="download-resume-btn"
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FiDownload />
              Download PDF
            </button>
            <button
              onClick={handleGeneratePDF}
              className="flex items-center gap-2 px-6 py-3 glass hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
            >
              <FiDownload />
              Generate from Page
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 glass hover:bg-accent/10 rounded-lg font-semibold transition-all duration-300"
            >
              <FiPrinter />
              Print Resume
            </button>
          </div>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 print-section"
        >
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-2 border-primary">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              VATSAL BHAYANI
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-4">
              Full Stack Developer
            </h2>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                <span>+91-8401159071</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <span>vatsalbhayani48@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FiGithub className="text-primary" />
                <span>github.com/vatsalbhayani</span>
              </div>
              <div className="flex items-center gap-2">
                <FiLinkedin className="text-primary" />
                <span>linkedin.com/in/vatsal-bhayani</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded"></span>
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Proactive and versatile Full Stack Developer with 1 year of experience designing, developing, 
              and maintaining scalable web applications. Skilled in PHP (Laravel), Python (Django), JavaScript, 
              MySQL, and REST APIs. Hands-on experience building live projects (AMC system, CRM, Ticketing, Library) 
              with clean architecture (MVC/MVT), responsive UI, and automation.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded"></span>
              EDUCATION
            </h3>
            <div className="ml-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    Bachelor of Engineering – Information Technology
                  </h4>
                  <p className="text-primary font-semibold">
                    Sardar Vallabhbhai Patel Institute of Technology
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Anand, Gujarat</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800 dark:text-white">CGPA: 7.88</p>
                  <p className="text-gray-600 dark:text-gray-400">2021 – 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded"></span>
              WORK EXPERIENCE
            </h3>
            <div className="ml-4">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                      Full Stack Development Intern
                    </h4>
                    <p className="text-primary font-semibold">Mukesoft Company</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Feb 2025 – Aug 2025</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Developed web applications using Laravel and Django frameworks with MySQL integration</li>
                  <li>Implemented AJAX-based CRUD operations and role-based authentication systems</li>
                  <li>Built REST APIs for seamless frontend-backend communication</li>
                  <li>Collaborated on debugging, testing, and deployment of Apni AMC and MukeCRM projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded"></span>
              KEY PROJECTS
            </h3>
            <div className="ml-4 space-y-4">
              {/* Project 1 */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  Apni AMC – Service Management System
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Technologies:</span> PHP, Laravel, MySQL, AJAX, JavaScript, Bootstrap
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Built role-based AMC system with admin and client panels</li>
                  <li>Integrated Paytm & Razorpay payment gateways</li>
                  <li>Implemented AI-based task suggestions for technician allocation</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  MukeCRM – Task Management System
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Technologies:</span> PHP, Laravel, MySQL, AJAX, JavaScript, Bootstrap
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Developed CRM with lead management and subscription billing</li>
                  <li>Created task assignment system with role-based authentication</li>
                  <li>Optimized database queries for improved scalability</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  Client Support Ticketing System
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Technologies:</span> Python, Django, SQLite, AJAX, HTML, CSS, JavaScript
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Built secure ticketing platform with AJAX submission</li>
                  <li>Implemented modular Django models with proper relationships</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded"></span>
              TECHNICAL SKILLS
            </h3>
            <div className="ml-4 grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-white">Languages:</span> Python, PHP, Java, C, JavaScript, HTML, CSS, SQL
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-white">Frameworks:</span> Django, Laravel, CodeIgniter, Bootstrap, jQuery
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-white">Databases:</span> SQLite, MySQL
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-white">Tools:</span> Git, AJAX, REST API, VS Code, Postman
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-white">AI Tools:</span> GitHub Copilot, ChatGPT, Windsurf, Warp
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-white">Concepts:</span> MVC, CRUD, Authentication, Session Management
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
