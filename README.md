## TalentVare Frontend

Modern, highly-responsive job search UI built with React + Tailwind CSS, featuring an animated navbar, rich search with dropdown filters, fixed job datasets per section, Redux Toolkit state persistence, animated apply modal, and toast interactions. Designed for production and Vercel-ready.

### Responsive Laptop Preview

<img width="2880" height="3208" alt="localhost_3000_" src="https://github.com/user-attachments/assets/e88303df-6fda-4c20-a73b-0ef6967056f0" />


<img width="1920" height="715" alt="image" src="https://github.com/user-attachments/assets/a49dd1a8-d52d-4e50-8d53-65a575b7219a" />



### Live Demo

( TalentVare Frontend Vercel Live Link ) :  [https://talentvare-web-app.vercel.app/](https://talentvare-web-app.vercel.app/)

## Tech Stack

- **React**: 19.x (CRA 5 runtime)
- **TypeScript**: 4.9
- **Router**: `react-router-dom` 7.x
- **State**: `@reduxjs/toolkit` + `react-redux` with localStorage persistence
- **UI**: Tailwind CSS v4 (CLI) + custom tokens, utilities, and animations
- **Toasts**: `react-toastify`
- **Icons**: Inline SVGs for navbar/search; `react-icons` for bookmark states
- **Avatars**: DiceBear (`@dicebear/core`, `@dicebear/collection`)
- **Build Tools**: CRA scripts, Tailwind CLI, PostCSS, Autoprefixer, `concurrently`

Third‑party services/libraries used in UX:

- **DiceBear Micah** style for deterministic SVG avatars
- **React Toastify** for non-blocking notifications
- **Tailwind animations** defined in `src/tailwind.css` (e.g., `animate-pop`, stroke/tick)

## Features (Technical)

- **Responsive Navbar**
  - Custom breakpoints and typography
  - Logo only on the far left, animated mobile menu, active route styling
  - PNG-based search icon with inline SVG fallback
- **Find Jobs Page**
  - Two-column layout with fixed 50px padding ≥ 1024px
  - Left `ProfileCard` with banner image and DiceBear avatar
  - Right content: search bar, chips, and three jobs sections
- **Search Bar with Modern Dropdowns**


  - <img width="1347" height="676" alt="image" src="https://github.com/user-attachments/assets/87ec4c0a-640a-44d4-9c67-c6c828277028" />
  - Select Location and Job Type menus with smooth open/close, outside-click dismissal
  - Right-edge aligned menus with visible rings; hover interactions; scrollable lists
  - Narrower input + wider Search button for emphasis
- **Jobs Data Model**
  - Fixed, non-random dataset in `src/data/jobs.ts`
  - Three explicit arrays: `FEATURED_JOBS`, `RECOMMENDED_JOBS`, `LATEST_JOBS` (different orders, no randomness)
  - Unique Redux keys per section: `sectionKey-jobId` ensures isolation across sections
- **Job Cards**


  - <img width="1327" height="355" alt="image" src="https://github.com/user-attachments/assets/565d69de-a2fb-4270-afd5-38c08b2888c5" />
  - Bookmark toggle with `react-icons` bookmark states and toast notifications
  - Apply flow: modal with animated check; button becomes “Applied ✓” and disables
- **State & Persistence**
  - Redux slice for `saved` and `applied`
  - LocalStorage subscription for persistence across sessions
- **Animations**


  - <img width="1894" height="832" alt="image" src="https://github.com/user-attachments/assets/bee2b6d4-570b-4887-8f19-1530084ca3ec" />
  - Modal open/close pop, stroke-draw tick, subtle glows
  - Mobile sheet slide, hover/active transitions

## Setup & Usage

### Prerequisites

- Node.js ≥ 18 LTS
- npm ≥ 9

### Install

```bash
npm install
```

### Development

Starts CRA dev server and Tailwind in watch mode via `concurrently`.

```bash
npm start
```

Open `http://localhost:3000`.

### Production Build

Generates Tailwind CSS and a production CRA build in `build/`.

```bash
npm run build
```

### Scripts

- `npm run dev:tw`: Tailwind CLI in watch mode
- `npm run build:tw`: Tailwind CLI build (minified)
- `npm start`: Tailwind watch + CRA dev server
- `npm run build`: Tailwind build + CRA production build
- `npm test`: CRA test runner

## Configuration Notes

- Tailwind CSS v4 is driven via `src/tailwind.css` and CLI. Ensure `_generated.css` is imported in `src/index.tsx` before `index.css`.
- Redux store is configured in `src/store.ts` and provided in `src/index.tsx`.
- Animations are defined in `src/tailwind.css` (`animate-pop`, `animate-check-in`, `animate-stroke`, `animate-slide-down`).

## Deployment (Vercel)

- **Framework Preset**: Create React App
- **Root Directory**: repository root
- **Install Command**: `npm ci` (or `npm install`)
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node Version**: 18 LTS+ (set in Vercel Project Settings → Environment or add an `.nvmrc` with `18`)
- **Environment Variables**: none required

Optional optimizations:

- Enable caching for `node_modules` on Vercel
- Set a custom domain and preview deployments for PRs

## Contributing

- Follow existing code style: meaningful names, early returns, concise comments
- Keep components focused and reusable; prefer prop-driven configuration
- Avoid introducing randomness into fixed datasets

## Acknowledgments

- DiceBear for avatars
- React Toastify for slick toasts
- Tailwind CSS for fast, utility-first styling


