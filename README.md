# React Stateful vs Stateless Components Demo

This project demonstrates the difference between **stateful** and **stateless** components in React using a practical Task Manager application.

## Project Description

This educational project showcases two key React component patterns:

- **Stateful Component (TaskManager)**: Uses the `useState` hook to manage application state including tasks list and input values. Handles all business logic like adding, deleting, and toggling tasks.

- **Stateless Component (TaskList)**: A pure presentational component that receives data via props and focuses solely on rendering the UI. It contains no internal state management.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Task statistics (total, completed, pending)
- ✅ Dark mode support
- ✅ Responsive design

## How to Run

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Demo
🚀 Live Demo: [https://hillel-full-stack-react-stateful-stateless.vercel.app](https://hillel-full-stack-react-stateful-stateless.vercel.app)

## Tech Stack

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
