# Sangki Kim's Personal Portfolio

A modern, professional personal portfolio website for Sangki Kim, built with React, Tailwind CSS, and deployed on GitHub Pages.

## 🎯 About

This portfolio showcases Sangki Kim's professional experience, education, skills, and publications. The website is designed with a modern minimalism aesthetic, featuring:

- **Professional Design**: Deep Navy primary color with Warm Cream background and Teal accents
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Smooth Navigation**: Seamless navigation with smooth scroll effects
- **Modern Typography**: Merriweather serif for headings and Poppins sans-serif for body text

## 📋 Sections

- **About**: Professional introduction and background
- **Experience**: Career history and professional roles
- **Education**: Academic qualifications and certifications
- **Skills**: Technical and professional competencies
- **Publications**: Books, articles, and notable contributions

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Hosting**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/ksangki/ksangki-portfolio.git
cd ksangki-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The development server will start at `http://localhost:3000`

### Building

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📦 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Builds the project on every push to the `main` branch
2. Deploys the built files to GitHub Pages
3. Makes the site available at `https://ksangki.github.io/ksangki-portfolio/`

### Manual Deployment

To manually deploy the site:

```bash
# Build the project
pnpm run build

# Deploy using gh-pages
npm install -g gh-pages
gh-pages -d dist/public
```

## 📁 Project Structure

```
ksangki-portfolio/
├── client/
│   ├── public/           # Static assets (favicon, etc.)
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable UI components
│   │   ├── contexts/     # React contexts
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utility functions
│   │   ├── App.tsx       # Main app component
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── package.json
└── README.md
```

## 🎨 Design Philosophy

The portfolio follows a **Modern Minimalism with Professional Elegance** design philosophy:

- **Color Palette**: Deep Navy (#1F3A5F) + Warm Cream (#FFF8F0) + Teal (#17A2A2)
- **Typography**: Merriweather (serif) for headings, Poppins (sans-serif) for body
- **Spacing**: Generous whitespace for a premium feel
- **Interactions**: Smooth transitions and subtle hover effects

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

For inquiries, please visit the portfolio website or contact through the provided links.

---

**Last Updated**: March 14, 2026
