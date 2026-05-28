# Lark.io - Fresh Graduate Developer Portfolio

A modern, professional portfolio website designed to showcase the skills and potential of a fresh graduate developer to hiring teams. Built with Next.js, TypeScript, and Tailwind CSS, **optimized for GitHub Pages deployment**.

## 🚀 Features

- **Modern Design**: Clean, professional layout inspired by top developer portfolios
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Engaging animations using Framer Motion
- **GitHub Pages Ready**: Static export for perfect GitHub Pages hosting
- **SEO Ready**: Proper meta tags and structured content
- **Contact Integration**: Direct email links for potential employers
- **Project Showcase**: Beautiful project cards highlighting technical skills

## 🎯 Target Audience

This portfolio is specifically designed to address the concerns hiring teams might have about fresh graduates by:

- Showcasing technical skills with concrete project examples
- Demonstrating problem-solving abilities
- Highlighting learning potential and adaptability
- Providing evidence of professional-quality work
- Addressing common hiring hesitations about experience levels

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Deployment**: Optimized for GitHub Pages (static export)

## 📁 Project Structure

```
lark.io/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/             # Reusable React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Project portfolio
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer section
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration (static export)
├── package.json           # Dependencies and scripts
└── DEPLOYMENT.md          # GitHub Pages deployment guide
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- GitHub account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd lark.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for GitHub Pages

```bash
npm run export
```

This creates a `out/` folder with static files ready for GitHub Pages.

## 🌐 Deployment

### GitHub Pages (Recommended)

This portfolio is specifically optimized for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step instructions.

**Quick deployment:**
1. Run `npm run export`
2. Create repository: `yourusername.github.io`
3. Upload `out/` folder contents
4. Enable GitHub Pages in settings

Your portfolio will be live at: `https://yourusername.github.io`

### Other Platforms

The static export also works with:
- Netlify
- Vercel
- Any static hosting service

## 🎨 Customization

### Personal Information

Update the following files with your information:
- `components/Hero.tsx` - Your name and headline
- `components/About.tsx` - Your personal story and value proposition
- `components/Skills.tsx` - Your technical skills and learning areas
- `components/Projects.tsx` - Your actual projects and descriptions
- `components/Contact.tsx` - Your contact information and social links

### Styling

- Modify `tailwind.config.js` for custom colors and animations
- Update `app/globals.css` for custom CSS classes
- Adjust component styling in individual component files

### Projects

Replace the placeholder projects in `components/Projects.tsx` with your actual projects:
- Update project titles, descriptions, and tech stacks
- Add real project images (replace placeholder divs)
- Update project links to point to live demos or GitHub repositories

## 🌟 Key Sections

### Hero Section
- Eye-catching headline positioning you as a valuable fresh graduate
- Clear value proposition
- Call-to-action buttons

### About Section
- Addresses common hiring concerns about fresh graduates
- Highlights your unique advantages
- Personal promise to potential employers

### Skills Section
- Visual skill level indicators
- Currently learning areas
- Learning philosophy

### Projects Section
- Professional project showcase
- Tech stack demonstrations
- Links to live demos and code

### Contact Section
- Direct email integration
- Why hire you section
- Availability and preferences

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## 🔧 Development

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Add navigation links if needed

### Styling Changes
- Use Tailwind CSS classes for most styling
- Add custom CSS in `app/globals.css` for complex styles
- Modify `tailwind.config.js` for theme customization

### Animation Modifications
- Update Framer Motion animations in individual components
- Modify animation timing and effects as needed

## 📈 Performance

- Optimized with Next.js 14 static export
- Efficient component rendering
- Smooth animations with Framer Motion
- Fast loading static files
- Perfect for GitHub Pages hosting

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Suggest improvements or bug fixes
- Share your customized version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Built with Next.js and Tailwind CSS
- Icons from Heroicons and custom SVG designs
- Optimized for GitHub Pages deployment

---

**Built with ❤️ for fresh graduates who are ready to impress hiring teams!**

**Ready to deploy? Check out [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub Pages instructions!** 🚀
