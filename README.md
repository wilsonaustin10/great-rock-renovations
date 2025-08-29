# Great Rock Renovations

A professional construction and renovation services website built with Next.js 15, TypeScript, and Tailwind CSS, mirroring the design of builditatx.com.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Features

- **Modern Design**: Clean, professional layout mirroring builditatx.com
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Interactive Components**:
  - Sticky navigation with mobile menu
  - Portfolio gallery with lightbox
  - Testimonials carousel
  - Contact form with validation
  - Smooth scroll animations

## 📁 Project Structure

```
great-rock-renovations/
├── app/
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # Navigation header
│   │   └── Footer.tsx  # Site footer
│   └── sections/
│       ├── Hero.tsx         # Hero/landing section
│       ├── Services.tsx     # Services grid
│       ├── About.tsx        # About/trust section
│       ├── Portfolio.tsx    # Project gallery
│       ├── Testimonials.tsx # Customer reviews
│       └── Contact.tsx      # Contact form & info
└── public/
    └── images/         # Image assets
```

## 🎨 Customization

### Company Information
Update company details in:
- `components/layout/Header.tsx` - Phone number and navigation
- `components/layout/Footer.tsx` - Contact info and social links
- `components/sections/Contact.tsx` - Contact details and map
- `app/layout.tsx` - SEO metadata

### Colors
Edit the color scheme in `tailwind.config.ts`:
- Primary colors (blue by default)
- Gray scale
- Custom animations

### Services
Modify services in `components/sections/Services.tsx`

### Portfolio
Update project examples in `components/sections/Portfolio.tsx`

### Testimonials
Edit customer reviews in `components/sections/Testimonials.tsx`

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🚀 Deployment

This project is ready to deploy on Vercel:

```bash
npm run build
```

Or deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

© 2024 Great Rock Renovations. All rights reserved.
