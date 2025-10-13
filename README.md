# Vatsal Bhayani - Portfolio Website

A modern, responsive single-page portfolio website built with **React** and **Tailwind CSS**, showcasing my work as a Full Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.1-cyan) ![Vite](https://img.shields.io/badge/Vite-5.1.0-purple)

## 🎯 Features

- ✨ **Modern Design** - Clean developer-style UI with glassmorphism effects
- 🎨 **Custom Theme** - Teal (#0ea5a4) and warm yellow (#f59e0b) accent colors
- 🌓 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Framer Motion for fluid transitions
- 🎭 **Typing Effect** - Dynamic hero section with typing animation
- 📄 **Resume Export** - Download PDF or print directly from the page
- ⌨️ **Keyboard Shortcuts** - Quick navigation (R for Resume, D for Download)
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - ARIA labels and alt tags throughout

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio_vatsal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio_vatsal/
├── public/
│   ├── Images/              # Profile images
│   └── pdf/                 # Resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with typing effect
│   │   ├── About.jsx        # About me section
│   │   ├── Education.jsx    # Education details
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── Skills.jsx       # Technical skills with progress bars
│   │   ├── Resume.jsx       # Resume with PDF export
│   │   └── Contact.jsx      # Contact form and info
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update name, title, tagline
   - Change contact information
   - Update social media links

2. **About Section** (`src/components/About.jsx`)
   - Modify bio and professional summary
   - Update profile images

3. **Education** (`src/components/Education.jsx`)
   - Add/edit educational qualifications

4. **Experience** (`src/components/Experience.jsx`)
   - Update work experience and internships

5. **Projects** (`src/components/Projects.jsx`)
   - Add your projects with descriptions and tech stack

6. **Skills** (`src/components/Skills.jsx`)
   - Modify skill categories and proficiency levels

7. **Resume** (`src/components/Resume.jsx`)
   - Update resume content
   - Replace PDF in `/public/pdf/` folder

8. **Contact** (`src/components/Contact.jsx`)
   - Update contact information and social links

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#0ea5a4',  // Your primary color
    dark: '#0d8f8e',
    light: '#10b5b4'
  },
  accent: {
    DEFAULT: '#f59e0b',  // Your accent color
    dark: '#d97706',
    light: '#fbbf24'
  }
}
```

### Add/Replace Images

1. Place images in `/public/Images/` folder
2. Update image paths in components:
   ```jsx
   <img src="/Images/your-image.jpg" alt="Description" />
   ```

## ⌨️ Keyboard Shortcuts

- **R** - Jump to Resume section
- **D** - Download Resume PDF

## 🛠️ Technologies Used

### Frontend
- **React 18.2** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing effect

### PDF Generation
- **jsPDF** - PDF generation
- **html2canvas** - HTML to canvas conversion

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vatsal Bhayani**
- Email: vatsalbhayani48@gmail.com
- Phone: +91-8401159071
- Location: Mumbai, India
- GitHub: [@vatsalbhayani](https://github.com/vatsalbhayani)
- LinkedIn: [Vatsal Bhayani](https://linkedin.com/in/vatsal-bhayani)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons
- Fonts from Google Fonts (Inter)

## 📝 Notes

- The contact form uses `mailto:` links. For production, consider integrating a backend service like EmailJS, Formspree, or your own API.
- Update the GitHub and LinkedIn URLs with your actual profile links.
- Replace placeholder images with your professional photos.
- Keep your resume PDF updated in the `/public/pdf/` folder.

---

**Built with ❤️ using React and Tailwind CSS**
