# 🌤 Weather App

Weather application built with **React + TypeScript + Redux Toolkit + RTK Query**.

The app allows users to:

- Search weather by city
- Automatically detect location via Geolocation API
- Store search history
- Manage favorite cities
- View weather history separately

---

## 🚀 Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **Vite**
- **CSS Modules**
- **WeatherAPI.com**

---

## ✨ Features

- 🔍 Search weather by city name
- 📍 Geolocation-based weather detection (one-time)
- ⭐ Add / remove favorite cities
- 🕒 Search history with timestamps
- 🔁 Clear history without affecting favorites
- ⚡ Optimized API calls via RTK Query cache
- 🧠 Clean architecture with feature-based structure

---

## 🧩 Architecture Overview

- **Redux Toolkit slices** manage application state:
  - `city` — current city or coordinates
  - `history` — search history & favorites
  - `ui` — view mode (main / history)
- **RTK Query** handles all API requests and caching
- **Custom hooks** isolate side effects (e.g. geolocation, query resolution)
- **Presentational & container components** are clearly separated

---

## 🗂 Project Structure

```txt
src/
 ├─ app/            # Redux store & typed hooks
 ├─ components/     # UI components
 ├─ features/       # Redux slices
 ├─ hooks/          # Custom hooks
 ├─ pages/          # App pages
 ├─ services/       # RTK Query API
 ├─ helpers/        # Utility functions
 ├─ types/          # Type definitions
```
