# CAD Roof Solutions - Professional Roofing Website

A high-performance, responsive roofing company website built with React, Tailwind CSS, and Framer Motion.

## 🚀 GitHub Actions & Deployment

This project is fully configured for **GitHub Actions** to automate your deployment and code quality checks.

### 1. Automated Deployment
When you push to the `main` branch, the `Deploy to GitHub Pages` action (`.github/workflows/deploy.yml`) will:
- Build the project (`npm run build`).
- Push the static files to the `gh-pages` branch.
- **Tip**: Go to your GitHub Repository Settings > Pages and ensure the source is set to the `gh-pages` branch.

### 2. Code Quality Check
Every push and pull request is automatically verified by the `Code Quality Check` action (`.github/workflows/verify.yml`). It runs:
- `npm run lint` (TypeScript type checking).

### 3. Manual Local Deployment
If you prefer to deploy manually from your computer:
- Run `npm run deploy` (requires `gh-pages` npm package, which is already installed).
- Or use the included script: `./deploy.sh`

## 🛠️ Development

### Setup
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## 🎨 Design System
- **Typography**: Inter (Sans-serif) with bold headings and tight tracking.
- **Colors**: 
  - Primary (Orange): `#FF7F28`
  - Secondary (Deep Blue): `#3D409A`
- **Animations**: Powered by `framer-motion` for smooth, high-impact interactions.
