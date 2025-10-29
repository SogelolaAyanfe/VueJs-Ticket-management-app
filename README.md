# Vue.js Ticket Management System

A modern ticket management web application built with Vue 3, JavaScript, and Vite. Features secure authentication, full CRUD operations, and real-time dashboard statistics.

**Live Demo:** https://vuejs-ticket-management-app.netlify.app/

## Features

- **Authentication:** Secure signup/login with bcrypt password hashing
- **Ticket CRUD:** Create, read, update, and delete tickets with status tracking
- **Dashboard:** Real-time statistics for total, open, in-progress, and resolved tickets
- **Responsive UI:** Modern card-based design with smooth animations

## Tech Stack

Vue 3 • TypeScript • Vite • Vue Router • Pinia/localStorage • bcryptjs

## Quick Start

```bash
# Clone repository
git clone https://github.com/SogelolaAyanfe/VueJs-Ticket-management-app/.git
cd vue-ticket-manager

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Vue components
├── modules/             # Business logic (auth, ticket-manager)
├── views/              # Page components
└── assets/             # CSS & static files
```

## Usage

1. **Sign Up** - Create account (password min. 10 characters)
1. **Login** - Access your dashboard
1. **Dashboard** - View ticket statistics
1. **Manage Tickets** - Create, edit, or delete tickets

## Deployment

Deployed on Netlify. To deploy your own:

1. Push code to GitHub
1. Connect repo to Netlify
1. Build command: `npm run build`
1. Publish directory: `dist`

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue Official Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

