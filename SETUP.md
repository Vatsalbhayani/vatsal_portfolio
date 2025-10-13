# 🚀 Quick Setup Guide

Follow these steps to get your portfolio website running:

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- jsPDF & html2canvas (PDF export)

## Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open automatically at `http://localhost:3000`

## Step 3: Customize Your Content

### 📝 Update Personal Information

1. **Hero Section** - Open `src/components/Hero.jsx`
   - Line 15-17: Update GitHub and LinkedIn URLs
   - Line 53-73: Update contact information

2. **About Section** - Open `src/components/About.jsx`
   - Line 61-75: Update your bio

3. **Projects** - Open `src/components/Projects.jsx`
   - Line 11-77: Add/edit your projects

4. **Skills** - Open `src/components/Skills.jsx`
   - Line 13-76: Update skill levels and categories

5. **Resume** - Open `src/components/Resume.jsx`
   - Update all sections with your information
   - Replace `/public/pdf/Bhayani_1.2.pdf` with your resume

6. **Contact** - Open `src/components/Contact.jsx`
   - Line 41-61: Update contact information
   - Line 63-73: Update social media links

### 🎨 Customize Colors

Edit `tailwind.config.js`:
- Primary color: Line 10 (currently #0ea5a4 - teal)
- Accent color: Line 15 (currently #f59e0b - yellow)

### 🖼️ Update Images

Your images are already in `/public/Images/`:
- Profile photo 1: `WhatsApp Image 2025-04-15 at 13.29.30_9a3248a8.jpg`
- Profile photo 2: `WhatsApp Image 2025-10-08 at 14.17.21_098cdcec.jpg`

To use different images:
1. Add new images to `/public/Images/`
2. Update image paths in components

## Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Step 5: Deploy

You can deploy the `dist` folder to:
- **Vercel** - `npm i -g vercel && vercel`
- **Netlify** - Drag & drop `dist` folder to netlify.com
- **GitHub Pages** - Push to GitHub and enable Pages
- **Any static hosting** - Upload `dist` folder contents

## 🎯 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth scroll animations
✅ Typing effect in hero section
✅ Interactive skill bars
✅ Expandable project cards
✅ Resume PDF download
✅ Print-friendly resume
✅ Contact form (mailto)
✅ Keyboard shortcuts (R = Resume, D = Download)
✅ SEO optimized
✅ Accessible (ARIA labels)

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
Make sure you're using Node.js v16 or higher:
```bash
node --version
```

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Contact: vatsalbhayani48@gmail.com

---

**Happy coding! 🎉**
