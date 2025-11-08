# 🏢 Professional Accounting & Taxation Services Template

A modern, responsive website template for **accounting and taxation services** - designed for professional service firms providing comprehensive financial solutions for individuals and businesses.

![Project Overview](./public/overview.png)

## ✨ Live Demo
[View Live Demo](https://your-demo-url.com) | [Documentation](https://your-docs-url.com)

## 🎯 Production Ready Features

✅ **Fully Responsive Design** - Works perfectly on all devices  
✅ **TypeScript Support** - Type-safe development with comprehensive types  
✅ **Production Build Optimization** - Optimized bundle splitting and compression  
✅ **Environment Configuration** - Secure environment variable management  
✅ **SEO Optimized** - Meta tags, structured data, and performance optimization  
✅ **Accessibility Compliant** - WCAG guidelines followed throughout  
✅ **Contact Form Integration** - Ready for backend integration  
✅ **WhatsApp Widget** - Direct customer communication  
✅ **Professional Animations** - Smooth, performance-optimized transitions

## 🏢 About This Template

This template is perfect for accounting firms that specialize in:
- **Income Tax Filing** - Expert preparation and filing of individual and corporate tax returns
- **GST Registration & Filing** - Seamless GST compliance and return filing
- **Business Accounting** - Comprehensive bookkeeping and financial record maintenance
- **Company Formation** - End-to-end business registration and incorporation services
- **Financial Consulting** - Strategic financial planning and advisory services
- **Payroll Management** - Efficient and accurate payroll processing

## 🚀 Technology Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework (configured)
- **Responsive Design** - Mobile-first approach

## 📋 Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd accounting-services-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Edit .env.local with your actual values
   nano .env.local  # or use your preferred editor
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website

### Environment Variables

The following environment variables can be configured in `.env.local`:

```env
# Required Configuration
VITE_COMPANY_NAME=Your Company Name
VITE_COMPANY_EMAIL=contact@yourcompany.com
VITE_COMPANY_PHONE=+1 (555) 123-4567
VITE_WHATSAPP_NUMBER=15551234567

# Optional Configuration
VITE_GOOGLE_MAPS_EMBED_URL=your-google-maps-embed-url
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

See `.env.example` for complete configuration options.

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean` | Clean build artifacts |

### Development Workflow

```bash
# Development
npm run dev              # Start dev server

# Pre-deployment checks
npm run type-check       # Check TypeScript types
npm run build           # Build for production
npm run preview         # Test production build locally
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About us section
│   ├── Contact.tsx      # Contact form and info
│   ├── Footer.tsx       # Website footer
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing section
│   ├── Services.tsx     # Services showcase
│   ├── Testimonials.tsx # Client testimonials
│   ├── WhatsAppWidget.tsx # WhatsApp integration
│   └── icons/           # Icon components
│       ├── ContactIcons.tsx
│       └── ServiceIcons.tsx
├── App.tsx              # Main app component
├── index.tsx            # App entry point
├── types.ts             # TypeScript type definitions
└── ...
```

## 🎨 Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **WhatsApp Integration** - Direct contact via WhatsApp widget
- **Service Showcase** - Comprehensive display of accounting services
- **Contact Forms** - Easy client inquiry submission
- **Performance Optimized** - Fast loading with Vite build optimization

## 🌐 Production Deployment

### Build for Production
```bash
# Clean previous builds
npm run clean

# Type check
npm run type-check

# Create production build
npm run build
```

The optimized build files will be generated in the `dist/` directory.

### Hosting Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables in Netlify dashboard

#### Traditional Web Hosting
1. Upload contents of `dist/` directory to your web server
2. Configure web server to serve `index.html` for all routes (SPA routing)
3. Enable HTTPS and configure proper caching headers

### Environment Variables for Production
Set these in your hosting platform:
- `VITE_COMPANY_NAME`
- `VITE_COMPANY_EMAIL`
- `VITE_COMPANY_PHONE`
- `VITE_WHATSAPP_NUMBER`
- `VITE_GOOGLE_ANALYTICS_ID` (optional)

## 🔧 Customization

### Styling
- Tailwind CSS classes are used throughout the components
- Custom styles can be added in component files or global CSS
- Color scheme uses navy and gold theme

### Content Updates
- Company information: Edit `components/About.tsx`
- Services: Modify `components/Services.tsx`
- Contact details: Update `components/Contact.tsx`
- Testimonials: Add/edit in `components/Testimonials.tsx`

## 📱 Contact Integration

The website includes:
- Contact form for client inquiries
- WhatsApp widget for instant communication
- Phone and email contact information
- Office address and location

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is a template that can be customized for your accounting business.

## 📞 Support

For technical support or questions about the website:
- Contact the development team
- Report issues via GitHub Issues (if applicable)

## 📁 Additional Documentation

- 📖 [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Complete production deployment instructions
- 🔧 [Environment Configuration](./.env.example) - Environment variables template
- 🚀 [Production Checklist](#production-ready-features) - Ensure everything is ready for launch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support & Contact

For technical support, customization requests, or questions:

- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub Issues: [Report issues](https://github.com/yourusername/accounting-services-template/issues)

---

**Professional Accounting Services Template** - *Empowering businesses with modern web presence*
