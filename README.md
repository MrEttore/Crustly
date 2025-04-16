# 🍕 Crustly – Order Pizza with a Crunch

Crustly is a modern React + Vite web app that allows users to easily order delicious pizzas online. Built to explore advanced React Router features and best practices in state management with Redux Toolkit, Crustly offers a seamless ordering experience without the need for user accounts.

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

Try it out here: **[crustly.netlify.app](https://your-crustly-url.netlify.app)**  

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

## 👨‍🍳 Author

Built with love (and hunger) by **Ettore** 🫶🏻
