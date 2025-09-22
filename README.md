# 🍕 Crustly — Pizza, simplified

Crustly is a minimalist React + Vite web app for ordering pizza—fast. It showcases modern React Router data APIs, Redux Toolkit for state, and a clean, neutral UI built with Tailwind. No accounts, no fuss: just your name, address, and hot pizza on the way.

## 🎨 Design System (Minimalism)

- Neutral-first palette (ink on white), accents used sparingly
- Generous whitespace, subtle dividers (zinc-200), soft elevation
- Calm typography (Inter/system), consistent rhythm and spacing
- Clear focus states, accessible contrasts
- Taglines:
  - Primary: “Pizza, simplified.”
  - Short/tab: “Hot, Fast, Simple”

### Logos

- Icon: `public/crustly-logo.svg` (pizza slice cut-out forming a “C”)
- Lockup: `public/crustly-logo-lockup.svg` (icon + wordmark)

Usage:

```html
<img src="/crustly-logo.svg" alt="Crustly" />
<img src="/crustly-logo-lockup.svg" alt="Crustly" />
```

Tips:

- SVGs use `currentColor`. Set `color: #111827` on light backgrounds, or `#fff` on dark.
- Keep generous whitespace around the mark (≥ 1/3 of icon size).

---

## 🚀 Tech Stack

- **React** (with [Vite](https://vitejs.dev/)) – Blazing-fast build tool and modern React development  
- **React Router v6.10+** – Utilizes `createBrowserRouter` for advanced data loading  
- **Redux Toolkit** – For global state management with `createAsyncThunk` for async logic  
- **Tailwind CSS** – Utility-first CSS for fast and responsive UI styling  
- **Geolocation API** – To fetch the user's current address  

## 📦 Features

- **Dynamic Menu** – Fetches real-time pizza menu via API  
- **Cart System** – Add and manage multiple pizzas before checkout  
- **Guest Checkout** – No login required, just name, address, and phone  
- **Geolocation Support** – Autodetect user address for convenience  
- **Order Tracking** – Unique order ID to check order status anytime  
- **Priority Orders** – Option to prioritize an order for an extra 20% fee  
- **Payment on Delivery** – No in-app payments, just good ol’ doorstep delivery  

## 🔗 Live Demo

Try it out here: **[crustly.netlify.app](https://crustly.netlify.app)**

## 🏗️ Architecture Notes

- **Data Loading**: React Router’s `createBrowserRouter` enables route-level data fetching and loaders for a cleaner data flow.  
- **Redux Toolkit**: `createAsyncThunk` is used for async operations like retrieving geolocation data.  
- **Local State**: Managed globally via Redux for cart items and user details.  
- **Tailwind**: Ensures fast prototyping and consistent styling across components.  

## 🧪 Future Enhancements

- [ ] Add toast notifications for order events  
- [ ] Store past orders in local storage  
- [ ] Dark mode support  
- [ ] Better accessibility and keyboard navigation  

## ⚙️ Setup

Create an `.env.local` file with your API endpoint:

```bash
VITE_RESTAURANT_API_URL=https://your-api.example.com
```

Run locally:

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## 👨‍🍳 Author

Built with love (and hunger) by **Ettore** 🫶🏻
