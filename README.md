# Pulse Marketing

A modern React marketing dashboard built with Vite, Bun, Material UI, and Recharts.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Framework**: [React 19](https://react.dev/) with TypeScript
- **UI Library**: [Material UI (MUI)](https://mui.com/) - React component library
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library

## Prerequisites

- [Bun](https://bun.sh/) v1.2+ installed

## Getting Started

### Install Dependencies

```bash
bun install
```

### Run Development Server

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Lint Code

```bash
bun run lint
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   bun add -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure the build

## Project Structure

```
pulse-marketing/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point with MUI ThemeProvider
│   └── index.css        # Global styles
├── public/              # Static assets
├── vercel.json          # Vercel SPA routing config
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## License

MIT
