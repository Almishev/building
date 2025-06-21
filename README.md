# UrbanBuild - Construction Company Website

A modern, responsive website for a construction company built with Next.js and Tailwind CSS.

## 🚀 Deployment to GitHub Pages

This project is configured for static export and can be deployed to GitHub Pages.

### Prerequisites

- GitHub account
- Node.js 18+ installed

### Steps to Deploy

1. **Create a new repository on GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[repository-name].git
   git push -u origin main
   ```

2. **Update the homepage URL**
   - Edit `package.json` and replace the `homepage` field with your actual GitHub Pages URL:
   ```json
   "homepage": "https://[your-username].github.io/[repository-name]"
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "GitHub Actions"

4. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Every push to the `main` branch will trigger a new deployment
   - Your site will be available at: `https://[your-username].github.io/[repository-name]`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

### Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `public/assets/` - Static assets (images, logos)
- `lib/` - Utility functions

### Technologies Used

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- Radix UI Components

## 📝 License

This project is private and proprietary.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
