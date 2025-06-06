# TRVE E-Learning Platform

This project provides a modular React + TypeScript application built with Vite and styled using Tailwind CSS. It also includes a minimal Electron setup for packaging the site as a desktop application.

## Development Setup

1. **Install dependencies**
   Install Node.js (v18 or later) and run:
   ```bash
   npm install
   ```
2. **Start the development environment**
   ```bash
   npm run dev
   ```
   This will launch the Vite dev server and Electron simultaneously.

3. **Build for production**
   ```bash
   npm run build
   ```
   The production files are output to the `dist` directory.

4. **Run Electron with the built files**
   ```bash
   npm start
   ```

## Project Structure

- `index.html` – HTML entry used by Vite.
- `src/` – React source code written in TypeScript.
  - `main.tsx` – Application bootstrap.
  - `App.tsx` – Root component.
  - `LegacyLessons.tsx` – Injects the original lesson HTML content.
  - `components/` – Reusable React components.
- `electron/` – Electron main process code.
- `tailwind.config.cjs` and `postcss.config.cjs` – Tailwind CSS configuration.
- `vite.config.ts` – Vite configuration.
- `tsconfig.json` – TypeScript configuration.

## Styling

Tailwind CSS provides a futuristic dark theme. Feel free to extend the Tailwind configuration to match your desired look and feel.
