# Jaydev's Portfolio Website

A modern, high-end personal portfolio website with smooth animations, dark theme, and premium UI/UX design.

## 🚀 Features

- **Single-page scrolling layout** with smooth transitions
- **Dark theme** with accent highlight colors (cyan, purple, amber)
- **Fully responsive** design for mobile, tablet, and desktop
- **Smooth scroll animations** triggered on viewport entry
- **Loading animation** for premium feel
- **Interactive hover effects** on all cards and buttons
- **Clean, minimal design** with professional typography
- **SEO-friendly** with proper meta tags

## 📁 Project Structure

```
jaydev-portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with animations
├── script.js           # Interactive features and animations
└── README.md           # Documentation
```

## 🎨 Sections Included

1. **Hero Section** - Full-screen intro with animated text and gradient background
2. **About Me** - Personal introduction with card-based layout
3. **Skills** - Categorized skill cards with hover effects
4. **Projects** - Grid-based project showcase with tech stack tags
5. **Achievements** - Recognition and accomplishments display
6. **Contact** - Contact form with social media links
7. **Footer** - Professional footer with copyright

## 🛠️ Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Name & Tagline** (Line 35-45):
```html
<span class="line name-highlight">Your Name</span>
<span class="tagline-item">Your Title 1</span>
<span class="tagline-item">Your Title 2</span>
```

2. **About Section** (Line 60-70):
   - Update the about text with your personal story

3. **Skills** (Line 80-130):
   - Modify skill categories and items to match your expertise

4. **Projects** (Line 140-220):
   - Replace project titles, descriptions, and tech stacks
   - Add your own project details

5. **Achievements** (Line 230-270):
   - Update with your own achievements and recognitions

6. **Social Links** (Line 300-320):
   - Replace placeholder URLs with your actual profiles:
     - Email: `mailto:your.email@example.com`
     - GitHub: `https://github.com/yourusername`
     - LinkedIn: `https://linkedin.com/in/yourusername`

### Customize Colors

**In `styles.css` (Lines 2-12):**

```css
:root {
    --primary-color: #00d4ff;      /* Main accent color */
    --secondary-color: #7c3aed;    /* Secondary accent */
    --accent-color: #f59e0b;       /* Highlight color */
    --bg-dark: #0a0a0a;            /* Background */
    --bg-card: #1a1a1a;            /* Card background */
}
```

### Add Project Images

Replace the gradient backgrounds in project cards with actual images:

```css
.project-image {
    background-image: url('path/to/your/image.jpg');
    background-size: cover;
    background-position: center;
}
```

## 🚀 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be instantly deployed

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize images**: Use WebP format and compress images
2. **Lazy loading**: Add `loading="lazy"` to images
3. **Minify files**: Use tools like UglifyJS and CSSNano for production
4. **CDN**: Host static assets on a CDN for faster loading

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add project detail modals
- [ ] Integrate with backend for contact form
- [ ] Add testimonials section
- [ ] Implement multi-language support
- [ ] Add analytics tracking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, reach out via the contact form on the website.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
