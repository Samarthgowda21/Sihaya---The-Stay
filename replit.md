# Sihaya the Stay - Homestay Website

## Overview

This is a modern full-stack web application for "Sihaya the Stay," a homestay business showcasing a farm-based accommodation with 4 cozy rooms surrounded by coconut and mango trees. The application serves as a marketing website with booking inquiry functionality, featuring a clean, nature-inspired design built with React and TypeScript on the frontend, and Express.js with Node.js on the backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Navigation**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas for type-safe API validation
- **Storage**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **API Design**: RESTful API endpoints for booking inquiries

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema**: Two main entities - users and booking inquiries
- **Migrations**: Managed through Drizzle Kit with migrations stored in `/migrations`
- **Connection**: Uses Neon Database serverless driver for PostgreSQL connectivity

### Authentication and Authorization
- **Current State**: Basic user schema exists but authentication is not implemented
- **Session Management**: Express session handling configured with connect-pg-simple for PostgreSQL session storage
- **Security**: CORS and standard Express security middleware

### Development and Build Process
- **Development Server**: Vite dev server with HMR for frontend, tsx for backend development
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Asset Management**: Static asset serving through Express in production

### Application Features
- **Landing Page**: Multi-section homepage with hero, about, rooms, gallery, location, testimonials, and contact
- **Booking System**: Contact form that submits booking inquiries to the backend
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Image Gallery**: Masonry layout for showcasing homestay photos
- **WhatsApp Integration**: Direct WhatsApp messaging functionality for instant communication

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connectivity
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: CLI for database migrations and schema management

### UI and Styling
- **@radix-ui/***: Collection of headless UI components (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### Form Management and Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod

### State Management and Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React
- **wouter**: Minimalist routing library for React

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: Vite plugin for React support
- **typescript**: Static type checking
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **lucide-react**: Beautiful and consistent icon library
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel component for React