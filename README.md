# Next.js 15 + Tailwind CSS v4 + shadcn/ui - Minimal Login

A modern, ultra-minimal authentication interface built with Next.js 15, Tailwind CSS v4, and shadcn/ui components.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **next-themes** - Dark/light mode with system preference support
- **React Hook Form** - Performant form validation
- **Zod** - Schema validation

## Features

- ✨ Ultra-minimal, modern design
- 🌓 Dark/light mode toggle with persistence
- 📱 Fully responsive layout
- ♿ Accessible (ARIA attributes, keyboard navigation)
- 🎨 High contrast, clean aesthetics
- 🔒 Form validation with user feedback

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Navigate to [http://localhost:3000/login](http://localhost:3000/login) to see the login page.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── login/
│   │   ├── page.tsx        # Login page
│   │   └── login-form.tsx  # Login form component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   ├── mode-toggle.tsx     # Theme toggle component
│   └── theme-provider.tsx  # next-themes wrapper
└── lib/
    └── utils.ts            # Utility functions
```

## Login Page

The login page (`/login`) features:

- Centered card layout
- Email and password inputs with validation
- Remember me checkbox
- Forgot password link (placeholder)
- Theme toggle in top-right corner
- Form submission logs data to console

All UI components are from the shadcn/ui registry, styled with Tailwind CSS utilities.

## Theme System

- Uses `next-themes` for theme management
- Supports light, dark, and system preference
- Theme preference persists in localStorage
- Smooth transitions between themes
- Class-based dark mode strategy

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme.

### Components

All shadcn/ui components are in `components/ui/` and can be customized as needed.

### Validation

Form validation rules are defined in `app/login/login-form.tsx` using Zod schemas.

## License

MIT
