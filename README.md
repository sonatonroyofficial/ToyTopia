🧸 ToyTopia – A Local Kids Toy Store Platform

ToyTopia is a vibrant, user-friendly online marketplace for kids’ toys, designed to help families discover toys from local sellers. Users can browse toys, view detailed information, leave feedback, and access protected pages through secure authentication.

🚀 Live Demo

🔗 Live URL: https://melodic-pika-2ff74e.netlify.app/
🔗 GitHub Repository: https://github.com/sonatonroyofficial/ToyTopia

🎯 Project Purpose

The goal of this project is to create a playful, engaging, and secure single-page application (SPA) where users can explore locally-sold toys, authenticate themselves, and enjoy a smooth browsing experience across all devices.

🧩 Key Features
🔐 Authentication

Email & Password Login

Google Sign-in

Registration with password validation:

At least one uppercase letter

At least one lowercase letter

Minimum length of 6 characters

Forgot Password (redirects users to Gmail)

Profile Update using Firebase updateProfile

🧭 Pages & Routing

Home Page

Toy Details Page (Protected)

My Profile (Protected)

Extra Protected Route

404 Error Page

Dynamic Title for every page

Persisting user state after page reload

🏠 Home Page Sections

🎞 Slider (Swiper / Daisy UI)

⭐ Popular Toys (6+ JSON items)

🎁 Two Additional Custom Sections

🧸 Toy Details Page (Protected)

Displays complete toy information

Includes a Try Now form (Name + Email)

On submit → shows a success message (no database required)

💾 JSON Data

Custom JSON data is created, and images are hosted on imgbb/postimages.
Each toy object includes:

toyId, toyName, sellerName, sellerEmail

price, rating, availableQuantity

description, pictureURL, subCategory

🧱 Layout Design

Responsive Navbar with active route indicators

User image appears when logged in

Login / Logout button

Footer with social media and legal links

Fully responsive (mobile, tablet, desktop)

🎨 UI / UX

Bright, playful UI for children’s toy theme

Smooth animations (AOS / Swiper)

Clean, modern layout with consistent design

🛠 Technologies Used
Frontend

React

React Router

Tailwind CSS

DaisyUI

Swiper.js / AOS

Backend

Firebase Authentication

Additional Libraries

SweetAlert / React-Toastify

React Helmet (Dynamic Title)

⚙️ Environment Variables

Create a .env.local file and add your Firebase configuration:

VITE_apiKey=YOUR_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_SENDER_ID
VITE_appId=YOUR_APP_ID

📦 Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/sonatonroyofficial/ToyTopia

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Add your Firebase keys to .env.local

4️⃣ Start the Development Server
npm run dev

📌 Project Structure (Sample)
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── auth/
 ├── hooks/
 ├── data/
 ├── App.jsx
 └── main.jsx

🧪 Assignment Requirement Checklist

 Navbar & Footer

 Custom JSON Data + Hosted Images

 Home Page (Slider + Popular Toys + Extra Sections)

 Toy Details Page (Protected)

 Login, Register & Google Login

 Password Validation

 Forgot Password Feature

 Editable User Profile (updateProfile)

 Additional Private Route

 Dynamic Titles

 404 Page

 10+ Meaningful GitHub Commits

 Fully Responsive






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
