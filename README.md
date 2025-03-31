# Ayush Anand's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Interactive Timeline**: Showcase experience in a visually engaging format
- **Project Gallery**: Categorized and filterable project cards
- **Contact Form**: Email integration using EmailJS
- **Responsive Design**: Mobile-first approach with elegant animations
- **Dark/Light Mode**: Theme toggle with system preference detection

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Vercel (Recommended)

1. Set up environment variables in Vercel:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`

2. Deploy directly from GitHub to Vercel.

### Required Environment Variables

```
EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here
```

## License

MIT
