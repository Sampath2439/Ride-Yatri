# Yatri - Ride Hailing Platform

Beautiful UI/UX preserved in clean two-project structure.

## 📁 Project Structure

```
yatri/
├── package.json           # Root workspace management
├── client/                # React Frontend (Standalone)
│   ├── package.json       # All UI dependencies preserved
│   ├── vercel.json        # SPA deployment config
│   ├── App.tsx            # Main app with routing
│   ├── pages/             # Landing, Dashboard, Rides, Support
│   ├── components/        # UI components (Radix + custom)
│   ├── global.css         # Yatri styling (gradients, colors)
│   ├── tailwind.config.ts # Yatri color system
│   └── public/            # Assets
│
└── api/                   # Backend API (Standalone)
    ├── package.json       # Backend dependencies only
    ├── vercel.json        # Serverless functions config
    ├── *.ts              # API endpoints
    ├── server/           # Express server
    └── shared/           # Shared types
```

## 🎨 UI/UX Features Preserved

- **Landing Page**: Premium gradient design with animated Yatri logo
- **Dashboard**: Beautiful cards, user stats, navigation
- **Rides Page**: Driver availability, ratings, booking interface
- **Support**: Customer feedback, safety features, SOS functionality
- **Color System**: Custom Yatri brand colors (royal blue, saffron yellow, teal)
- **Animations**: Framer Motion, CSS transitions, hover effects
- **Components**: Complete Radix UI library with styling

## 🚀 Development

### Start Frontend

```bash
cd client
npm install
npm run dev
```

### Start Backend

```bash
cd api
npm install
npm run dev
```

### Or use workspace commands:

```bash
npm run dev          # Start client
npm run dev:api      # Start API
npm run install:all  # Install both
```

## 📦 Deployment

### Deploy Client to Vercel

```bash
cd client
vercel --prod
```

### Deploy API to Vercel

```bash
cd api
vercel --prod
```

## ✨ Key Features

- **Beautiful Landing**: Gradient backgrounds, animated logo, Google-style CTA
- **Rich Dashboard**: User profile, ride stats, quick actions
- **Driver Management**: Availability tracking, ratings, real-time data
- **Safety First**: Women safety, SOS, rainy season features
- **Modern Stack**: React 18, TypeScript, TailwindCSS, Radix UI
- **Responsive**: Perfect on desktop and mobile

Both projects are standalone and deployable independently while maintaining the exact same beautiful UI/UX experience.
Made by Sampath