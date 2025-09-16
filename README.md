# React Training Task 03

## Overview
This Vite-bootstrapped exercise explores a compact React component tree built around stateful counters and reusable greetings. `App.jsx` orchestrates two independent counters, showcases automatic ticking with `setTimeout`, and logs render cycles for learning purposes. The `Hello` component derives a birth year from props, illustrating derived values inside JSX. Supporting `Display` and `Button` components keep rendering and event handlers tidy.

## Features
- Live counter that increments every second via `useState` and `setTimeout`
- Buttons to increment, reset, and decrement counters with shared callbacks
- Reusable greeting card calculating an estimated birth year from props
- Console logging that exposes render timing for debugging practice

## Tech Stack
- React 19 with functional components and hooks
- ReactDOM 19 using `createRoot` entry point in `main.jsx`
- Vite build tooling with ES module imports and JSX syntax
- JavaScript (ES2020+) utilities for time and math helpers

## Getting Started
1. `cd 03-tehtava`
2. `npm install`
3. `npm run dev` to start the local server
4. Open the shown localhost URL to interact with the counters

## Project Structure
- `src/App.jsx` – main component with counters, greetings, and reusable button/display helpers
- `src/main.jsx` – React 18/19 style entry point mounting `App` with `createRoot`
- `public/` & `vite.config.js` – Vite defaults for dev server and bundling

## Next Steps
Experiment with additional buttons, swap `setTimeout` for `setInterval`, or connect the counters to external data to expand the learning exercise.
