<p align="center">
	<picture>
		<source srcset="/assets/logo-light.svg" media="(prefers-color-scheme: dark)" width="300"/>
		<source srcset="/assets/logo-dark.svg" media="(prefers-color-scheme: light)" width="300"/>
		<img src="/assets/logo-dark.svg" alt="Crustly" width="300"/>
	</picture>
</p>

# Crustly <!-- omit in toc -->

> Pizza, simplified. A minimalist React SPA for frictionless pizza ordering and order tracking.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-18.2-61dafb?logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.6-764abc?logo=redux)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6.30-ca4245?logo=reactrouter)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)

[Live Demo](https://crustly.vercel.app/)

## Table of Contents <!-- omit in toc -->

- [🔍 Overview](#-overview)
- [💡 Why This Project?](#-why-this-project)
- [✨ Key Features](#-key-features)
- [🏗️ Tech Stack \& Architecture](#️-tech-stack--architecture)
- [📁 Project Structure](#-project-structure)
- [🙏 Acknowledgements](#-acknowledgements)

## 🔍 Overview

**What It Is:** Crustly is a streamlined pizza-ordering SPA focused on one thing: getting from menu browsing to placed order with minimal friction. Users can add pizzas, adjust quantities, set order priority, autofill delivery address via geolocation, and track an order later using its ID.

**Why It Matters:** Many food-ordering experiences feel overloaded with account walls and unnecessary steps. Crustly explores a cleaner guest-first flow using modern React Router data APIs and Redux Toolkit state management, while keeping the UI calm, readable, and fast.

This project demonstrates:

- **Route-Level Data Workflows:** React Router `loader`/`action` patterns for pre-render fetches and form-driven mutations.
- **Predictable Global State:** Redux Toolkit slices for cart and user state, including async geolocation + reverse-geocoding with `createAsyncThunk`.
- **Frictionless Checkout UX:** Guest checkout, simple validation, optional priority fee, and payment-on-delivery model (no in-app auth/payments).

## 💡 Why This Project?

I built Crustly to practice and solidify modern React architecture patterns in a real, end-to-end user flow: route data loading, mutation handling, global state orchestration, and external API integration. Instead of building a feature-heavy product, I intentionally focused on a narrow but complete domain - ordering pizza fast.

Another goal was to improve UX discipline: remove unnecessary visual noise, keep interactions direct, and design around user intent (browse → add → checkout → track). The project treats simplicity as a feature, not as a lack of features.

**What I Learned:**

- **React Router Data APIs in Practice:** Using `loader`/`action` and `useFetcher` creates a clean separation between read and write flows while reducing imperative fetch boilerplate.
- **State Ownership Boundaries:** Keeping transient form state local and shared commerce state in Redux makes cart/order behavior predictable and easier to scale.
- **Async UX with Real Constraints:** Geolocation and reverse geocoding require careful loading/error states to avoid blocking checkout.
- **Minimal UI Systems Still Need Structure:** A small component set plus Tailwind tokens can produce a cohesive, maintainable interface.

## ✨ Key Features

- **Dynamic Menu Loading:** Menu items are fetched from an external restaurant API and rendered as interactive product cards with sold-out handling.
- **Full Cart Workflow:** Add, increment/decrement, remove, clear cart, and persistent price/quantity summaries through Redux selectors.
- **Guest Checkout:** Place an order with name, phone, and address, no account required.
- **Geolocation Address Autofill:** One-click "Get position" populates address using browser geolocation + reverse-geocoding API.
- **Order Priority Upgrade:** Optional priority flag (+20% fee) at order creation or post-creation via PATCH update.
- **Order Tracking by ID:** Search any existing order and view status, ETA, and itemized totals.
- **Route-Aware Loading UX:** Global navigation loader overlay and route-level error boundaries for fetch/mutation failures.

## 🏗️ Tech Stack & Architecture

This project uses a frontend-only architecture backed by two external HTTP APIs (restaurant data + geocoding).

### Frontend <!-- omit in toc -->

- **React 18:** Component-driven UI for menu, cart, checkout, and order tracking.
- **React Router 6.30:** Data routing with `createBrowserRouter`, `loader`, `action`, and `useFetcher`.
- **Redux Toolkit + React Redux:** Centralized cart/user state with memo-friendly selectors and async thunks.
- **Tailwind CSS:** Tokenized minimalist styling with custom theme extensions (`primary`, `cream`, `shadow-elegant`).
- **Vite:** Fast local development and production builds.

### External APIs <!-- omit in toc -->

- **Restaurant API:**
    - `GET /menu`
    - `GET /order/:id`
    - `POST /order`
    - `PATCH /order/:id`
- **Geocoding API:**
    - `GET ?latitude=<lat>&longitude=<lng>`

### Architecture Overview <!-- omit from toc -->

```text
┌─────────────────────────────────────────────────────────────┐
│                    CRUSTLY (React SPA)                      │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ UI + State Layer                                      │  │
│  │ • Route views (home, menu, cart, order)               │  │
│  │ • Redux slices (user, cart)                           │  │
│  │ • Router data APIs (loaders/actions/fetcher)          │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
													 │
													 │ HTTP/REST
													 ▼
			┌───────────────────────────────────────────────┐
			│            External Service APIs              │
			│  • Restaurant API (menu + orders)             │
			│  • Reverse Geocoding API (address lookup)     │
			└───────────────────────────────────────────────┘
```

**Key Architectural Decisions:**

- **Router-First Data Fetching:** Read/write side effects live in route `loader`/`action` modules instead of scattered component effects.
- **Redux for Commerce State:** Cart and user identity/location are globally available and derived through selectors for stable UI updates.
- **Async Geolocation via Thunk:** Address retrieval encapsulates browser location + API lookup with explicit pending/fulfilled/rejected states.
- **Small, Reusable UI Surface:** Shared components reduce duplication and keep visual consistency across all flows.

**Data Flow:**

1. User enters name and navigates to menu.
2. Menu route loader fetches pizzas before render.
3. Cart interactions update Redux state and computed totals.
4. Checkout action validates phone, submits order, and clears cart on success.
5. Order page loader fetches order details by ID; optional priority update issues PATCH.
6. Geolocation thunk can prefill delivery address during checkout.

## 📁 Project Structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
		├── App.jsx                   # Router definitions + loaders/actions wiring
		├── main.jsx                  # App bootstrap + Redux provider
		├── index.css                 # Tailwind layers + shared classes
		├── store.js                  # Redux store configuration
		├── features/
		│   ├── cart/                 # Cart UI and slice logic
		│   ├── menu/                 # Menu UI + route loader
		│   ├── order/                # Create/view/update/search order flows
		│   └── user/                 # Username and geolocation address state
		├── services/
		│   ├── apiRestaurant.js      # Restaurant menu/order API client
		│   └── apiGeocoding.js       # Reverse-geocoding API client
		├── ui/                       # Layout and reusable UI components
		├── utils/
		│   └── helpers.js            # Currency/date/time helper utilities
		└── assets/                   # Static assets used by app UI
```

## 🙏 Acknowledgements

- **React + React Router ecosystem:** For robust primitives that make route-based data workflows clean and composable.
- **Redux Toolkit:** For pragmatic, low-boilerplate state management that keeps cart/order state predictable.
- **Tailwind CSS + Vite:** For fast iteration with a lightweight and maintainable frontend toolchain.
- **Open-source API providers:** For the restaurant and geocoding endpoints that power menu/order/address functionality.

---

<p align="center">
	Made with ❤️ and hunger by <a href="https://github.com/MrEttore">Ettore Marangon</a>
</p>

<p align="center">
	<sub>⭐ If you found this project helpful, consider giving it a star!</sub>
</p>
