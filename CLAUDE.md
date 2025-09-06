# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (Vite dev server with hot reload)
- **Build for production**: `npm run build` (Vite build process)
- **Lint code**: `npm run lint` (ESLint with React plugins, max 0 warnings)
- **Preview production build**: `npm run preview` (Vite preview server)

## Project Architecture

This is a React-based personal homepage built with Vite as the build tool. The application uses React Router for client-side routing.

### Core Structure
- **Entry point**: `src/main.jsx` - Sets up React with StrictMode and BrowserRouter
- **Main app**: `src/App.jsx` - Defines routes for Home (/), Projects (/projects), and Log (/log) pages
- **Pages**: Located in `src/pages/` with corresponding CSS files
  - `Home.jsx` - Landing page with hero section, TypeWriter component, and navigation buttons
  - `Projects.jsx` - Portfolio showcase with project cards and dropdown interactions
  - `Log.jsx` - Blog/log section
- **Components**: Located in `src/components/` with paired CSS files
  - `Navigation.jsx` - Main navigation with active state handling
  - `Footer.jsx` - Site footer
  - `ProjectCard.jsx` - Individual project display cards with tech badges
  - `TypeWriter.jsx` - Animated text typing effect
  - `AnimatedBackground.jsx` - Background animation component
  - `Loading.jsx` - Loading state component
  - `Badge.jsx` - Technology tag badges

### Key Patterns
- Each component has a corresponding CSS file with the same name
- Global styles in `src/styles/index.css`
- Projects data is hardcoded in `Projects.jsx` as an array with metadata (id, name, description, tech stack, links)
- Responsive design with mobile-first approach
- Uses React Router's Link component for navigation
- State management with useState for dropdown interactions

### Technology Stack
- **Frontend**: React 18, React Router DOM 7
- **Build Tool**: Vite 5
- **Linting**: ESLint with React-specific plugins
- **Styling**: Plain CSS with CSS modules pattern