# 🚀 Production Deployment Guide

This guide covers the complete process for deploying your Professional Accounting Services template to production environments.

## 📋 Pre-Deployment Checklist

### Required Configuration

- [ ] Copy `.env.example` to `.env.local`
- [ ] Configure all required environment variables
- [ ] Update company information in components
- [ ] Test all contact forms and integrations
- [ ] Verify WhatsApp widget functionality
- [ ] Test responsive design on all devices
- [ ] Run type checking: `npm run type-check`
- [ ] Build successfully: `npm run build`
- [ ] Preview build locally: `npm run preview`

### Environment Variables Setup

#### Required Variables
```env
VITE_COMPANY_NAME=Your Company Name
VITE_COMPANY_EMAIL=contact@yourcompany.com
VITE_COMPANY_PHONE=+1 (555) 123-4567
VITE_WHATSAPP_NUMBER=15551234567
```

#### Optional Variables
```env
VITE_GOOGLE_MAPS_EMBED_URL=your-google-maps-embed-url
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_GTM_ID=GTM-XXXXXXX
VITE_FACEBOOK_URL=https://facebook.com/yourcompany
VITE_TWITTER_URL=https://twitter.com/yourcompany
VITE_LINKEDIN_URL=https://linkedin.com/company/yourcompany
```

## 🌐 Hosting Platforms

### Vercel (Recommended)

#### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/accounting-services-template)

#### Manual Deploy
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Configure: `vercel`
4. Deploy: `vercel --prod`

**Environment Variables:**
- Go to Vercel Dashboard → Project → Settings → Environment Variables
- Add all required variables with `Production` environment selected

### Netlify

#### Git Integration
1. Connect GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

#### Environment Variables
- Go to Site Settings → Environment Variables
- Add all required variables

#### Custom Domain
1. Domain settings → Add custom domain
2. Configure DNS records as shown
3. Enable HTTPS (automatic)

### GitHub Pages

#### Setup
1. Enable GitHub Pages in repository settings
2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_COMPANY_NAME: ${{ secrets.VITE_COMPANY_NAME }}
        VITE_COMPANY_EMAIL: ${{ secrets.VITE_COMPANY_EMAIL }}
        VITE_COMPANY_PHONE: ${{ secrets.VITE_COMPANY_PHONE }}
        VITE_WHATSAPP_NUMBER: ${{ secrets.VITE_WHATSAPP_NUMBER }}
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Traditional Web Hosting

#### File Upload
1. Build: `npm run build`
2. Upload `dist/` contents to web server
3. Configure web server for SPA routing

#### Apache (.htaccess)
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Security Headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache Control
<filesMatch "\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$">
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
</filesMatch>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    
    # Cache Control
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 Domain & SSL Setup

### Custom Domain
1. Purchase domain from registrar
2. Point domain to hosting provider
3. Configure DNS records (A, CNAME)
4. Wait for DNS propagation (24-48 hours)

### SSL Certificate
Most hosting providers offer free SSL certificates:
- **Vercel**: Automatic
- **Netlify**: Automatic
- **Traditional hosting**: Let's Encrypt or provider SSL

## 📊 Analytics & Monitoring

### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID
3. Add to `VITE_GOOGLE_ANALYTICS_ID`
4. Verify tracking in GA4 Real-time reports

### Google Tag Manager (Optional)
1. Create GTM container
2. Get Container ID
3. Add to `VITE_GTM_ID`
4. Configure tags in GTM interface

### Performance Monitoring
- **Vercel**: Built-in analytics
- **Netlify**: Built-in analytics
- **Third-party**: Sentry, LogRocket, etc.

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env.local` to git
- Use platform-specific environment variable settings
- Validate required variables on build

### Content Security Policy (Optional)
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://www.google-analytics.com;
">
```

## 🧪 Testing in Production

### Post-Deployment Tests
1. **Functionality Testing**
   - Contact form submission
   - WhatsApp widget
   - Phone/email links
   - Navigation

2. **Performance Testing**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **SEO Testing**
   - Google Search Console
   - Meta tag validation
   - Structured data testing

4. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

## 🚨 Troubleshooting

### Build Failures
- Check TypeScript errors: `npm run type-check`
- Verify all dependencies: `npm install`
- Clear cache: `rm -rf node_modules dist && npm install`

### Environment Variables Not Loading
- Check variable names start with `VITE_`
- Verify platform environment variable settings
- Restart build after changes

### Form Submissions Not Working
- Verify `VITE_FORM_SUBMIT_URL` configuration
- Check CORS settings on form handler
- Test with browser developer tools

### WhatsApp Widget Issues
- Verify `VITE_WHATSAPP_NUMBER` format (digits only)
- Test URL generation in browser console
- Check mobile vs desktop behavior

## 📞 Support

If you encounter deployment issues:
1. Check this guide first
2. Review hosting platform documentation
3. Test locally with `npm run build && npm run preview`
4. Contact hosting platform support if needed

---

**Need help with customization or advanced deployments?** Consider hiring a developer familiar with React/TypeScript projects.