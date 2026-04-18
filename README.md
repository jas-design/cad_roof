# CAD Roof Solutions - Professional Roofing Website

A high-performance, responsive roofing company website built with React, Tailwind CSS, and Framer Motion.

## 🚀 GitHub Actions & Deployment

This project is fully configured for **GitHub Actions** to automate your deployment and code quality checks.

### 1. Automated Deployment
When you push to the `main` or `master` branch, the `Deploy to GitHub Pages` action will:
- Build the project (`npm run build`).
- Create a `404.html` fallback (to support refresh on sub-pages).
- Push the static files to the `gh-pages` branch.

**Troubleshooting "Not Working":**
- **White Screen/404**: I have updated the project specifically for your URL (`/cad_roof/`).
  - **Base Path**: The `vite.config.ts` is now set to `base: '/cad_roof/'`. 
  - **Routing**: the project uses `HashRouter` which ensures that sub-pages like `#/about` load correctly.
- **Permission Denied**: Ensure you have given the GitHub Action "Write Permissions" (Settings > Actions > General > Workflow permissions > Read and write permissions).
- **Settings**: Go to your GitHub Repository **Settings > Pages**. 
  - **Source**: Deploy from a branch.
  - **Branch**: Select `gh-pages` and `/ (root)`.
- **Custom Domain**: If using a custom domain, ensure your `CNAME` is set up in the `public/` folder.

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
