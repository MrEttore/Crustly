 <div align="center">
  <picture>
    <source srcset="/assets/logo-light.svg" media="(prefers-color-scheme: dark)" width="400" style="transform:translateX(60px);"/>
    <source srcset="/assets/logo-dark.svg" media="(prefers-color-scheme: light)" width="400" style="transform:translateX(60px);"/>
    <img src="/assets/logo-dark.svg" alt="Crustly" width="400"/>
  </picture>
</div>

<br/>

# Crustly <!-- omit in toc -->

Pizza, simplified. A minimalist SPA to browse a pizza menu, build a cart, and place or track an order without accounts or friction.

[Live Demo](https://crustly.netlify.app/)

## Table of Contents <!-- omit in toc -->

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Environment Variables](#environment-variables)
    - [Installation](#installation)
    - [Run Locally](#run-locally)
- [API Reference](#api-reference)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## Overview

Crustly is a focused SPA that showcases a clean user flow for ordering pizza with modern React patterns. It emphasizes a calm, neutral UI (Tailwind), route‑level data APIs (React Router loaders/actions), and predictable state (Redux Toolkit). Users can add pizzas to a cart, set priority, auto‑fill their address via geolocation, place an order, and later look it up by ID.

Highlights

- Minimalist, accessible UI with Tailwind (neutral-first palette, generous whitespace)
- Route-level data loading and mutations with React Router loaders/actions
- Global state with Redux Toolkit, including async thunks for geolocation
- Netlify deployment
- No auth or payments: fast guest checkout and delivery on arrival

## Tech Stack

- Language: JavaScript (ES Modules)
- Frontend: React 18 + Vite 4
- Routing: React Router v6.30+
- State: Redux Toolkit + React Redux
- Styling: Tailwind CSS
- Build Tool: Vite
- Lint/Format: ESLint, Prettier
- Hosting: Netlify (SPA redirect configured)

## Features

- Dynamic menu fetched from an open-source restaurant API
- Cart system with quantity updates and removal
- Guest checkout with name, address, and phone
- Geolocation-based address auto-fill
- Order tracking via unique order ID
- Priority orders with +20% fee option
- Payment on delivery (no in-app payments)

## Project Structure

```text
.
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
├─ public/
│  └─ netlify.toml           # SPA redirect for Netlify
└─ src/
	├─ App.jsx                # Routes, loaders/actions wiring
	├─ main.jsx               # React root + Redux provider
	├─ index.css              # Tailwind entry
	├─ store.js               # Redux store
	├─ features/
	│   ├─ cart/               # Cart UI + slice
	│   ├─ menu/               # Menu UI + data loader
	│   └─ order/              # Create, view, update order
	├─ services/
	│   ├─ apiRestaurant.js    # Menu/Order API client
	│   └─ apiGeocoding.js     # Reverse geocoding client
	├─ ui/                    # Layout, common components
	└─ utils/                 # Helpers
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Environment Variables

Create a `.env` (or `.env.local`) at the project root and provide the required variables.

```bash
VITE_RESTAURANT_API_URL=https://react-fast-pizza-api.jonas.io/api
VITE_GEOLOCATION_API_URL=https://api.bigdatacloud.net/data/reverse-geocode-client
```

Notes

- These variables are browser-exposed at build time (Vite uses the `VITE_` prefix for client envs).
- Netlify deploys as an SPA; `public/netlify.toml` already configures the catch-all redirect to `index.html`.

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/MrEttore/Crustly.git
cd Crustly
npm install
```

### Run Locally

```sh
# Start dev server
npm run dev

# Build production assets
npm run build

# Preview the production build locally
npm run preview
```

## API Reference

This frontend consumes two external services configured via environment variables.

Restaurant API (base: `VITE_RESTAURANT_API_URL`)

- GET /menu — fetch menu items
- GET /order/:id — fetch order by ID
- POST /order — create new order
- PATCH /order/:id — update existing order

Geocoding API (base: `VITE_GEOLOCATION_API_URL`)

- GET ?latitude=<lat>&longitude=<lng> — reverse geocode to address

> Endpoints are expected to return JSON; see `src/services/apiRestaurant.js` and `src/services/apiGeocoding.js` for exact usage.

## License

No license has been specified yet. All rights reserved. If you want to use or distribute this project, please contact me.

## Acknowledgements

- Built with React, React Router, Redux Toolkit, Tailwind, and Vite
- Deployed on Netlify
-

## Author

Built with love (and hunger) by **Ettore** 👨‍🍳
