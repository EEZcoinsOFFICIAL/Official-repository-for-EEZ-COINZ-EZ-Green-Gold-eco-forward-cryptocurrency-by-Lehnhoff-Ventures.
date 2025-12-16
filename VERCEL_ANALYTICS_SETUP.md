# Vercel Web Analytics Setup Guide

This project has been configured with Vercel Web Analytics to track visitor behavior and page performance metrics.

## What's Included

This Next.js 14+ application includes Vercel Web Analytics integration following the official Vercel documentation.

### Package Installation

The `@vercel/analytics` package has been added to the project dependencies in `package.json`:

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.4.0"
  }
}
```

### Analytics Component Integration

The Analytics component has been integrated into the root layout file (`app/layout.tsx`):

```typescript
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ... */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## How to Enable Analytics

To fully enable Vercel Web Analytics:

### 1. Verify You Have a Vercel Account
- Visit [vercel.com/signup](https://vercel.com/signup) if you need to create one

### 2. Enable Analytics in Vercel Dashboard
- Go to your [Vercel Dashboard](https://vercel.com/dashboard)
- Select your project
- Click the **Analytics** tab
- Click **Enable** to activate Web Analytics

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### 3. Deploy to Vercel

Once enabled in the dashboard, deploy the project:

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Deploy the project
vercel deploy
```

Alternatively, if you've connected your Git repository to Vercel, simply push changes to your main branch:

```bash
git push origin main
```

### 4. View Your Analytics

After deployment and receiving visitors:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. After a few days of visitor traffic, you'll see data appear

> **💡 Tip:** To verify the analytics script is working, open your browser's Network tab and look for a fetch request to `/_vercel/insights/view` when visiting any page.

## Framework Support

This project uses **Next.js 14+** with the App Router (modern approach). The `@vercel/analytics/next` import provides seamless integration including:

- Automatic route tracking
- Web performance metrics
- Visitor analytics

## Additional Features

### Custom Events (Pro/Enterprise Plans)

If you're on a Pro or Enterprise Vercel plan, you can track custom events like button clicks, form submissions, or purchases. See the [custom events documentation](/docs/analytics/custom-events) for more information.

### Data Filtering

You can filter and analyze your analytics data. See the [filtering guide](/docs/analytics/filtering) for details.

## Architecture Overview

The Analytics component works by:

1. **Script Injection**: The component automatically injects the Vercel insights tracking script
2. **Request Tracking**: It tracks all navigation and fetch/XHR requests to `/_vercel/insights/view`
3. **Data Collection**: Anonymous data about visitors and page views is collected
4. **Privacy Compliance**: All data collection adheres to Vercel's privacy standards

## Build Configuration

This project is configured with:

- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **ESLint**: Code quality checks
- **Vercel Analytics**: Web performance monitoring

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Notes

- The @vercel/analytics package is lightweight and has minimal performance impact
- No sensitive data is collected or stored
- Analytics data is completely anonymous
- The tracking script works across all modern browsers

## Learn More

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Privacy and Compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Troubleshooting Guide](https://vercel.com/docs/analytics/troubleshooting)
