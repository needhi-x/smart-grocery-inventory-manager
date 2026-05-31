# 🥦 Smart Grocery List & Inventory Manager

A Full Stack MERN (MongoDB, Express, React, Node.js) project that helps users manage grocery inventory, track stock levels, set expiry alerts, generate shopping lists, and visualize inventory analytics.

---

## 🚀 Live Features

- 🔐 User Authentication (Register/Login with JWT)
- 🛒 Add / Update / Delete Grocery Items
- 📦 Inventory Quantity Management
- ⚠ Low Stock Alerts
- ⏳ Expiry Date Tracking
- 🔍 Search & Category Filtering
- 📊 Inventory Analytics Dashboard (Charts)
- 📄 Download Shopping List (PDF)
- 🎨 Modern Responsive UI (Gradient Dashboard)

---

## 🧠 Problem Statement

Managing groceries manually often leads to:
- Overbuying items
- Forgetting expired products
- Poor stock tracking
- Wastage of food and money

This app solves these problems using a smart digital inventory system.

---

## 💡 Solution

The Smart Grocery Manager allows users to:
- Track all grocery items in real-time
- Get alerts for low stock & expiry
- Generate shopping lists automatically
- Visualize inventory using charts

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- Chart.js
- React Router DOM
- CSS (Inline + Gradients)

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Tools:
- Postman (API Testing)
- MongoDB Compass
- Git & GitHub

---

## 🏗️ Project Architecture
Frontend (React)
↓
Axios API Calls
↓
Backend (Express + Node.js)
↓
MongoDB Database


---

## 📁 Folder Structure
Smart-Grocery-Inventory-Manager/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ └── Dashboard.js
│ │ ├── components/
│ │ │ └── Navbar.js
│ │ └── services/
│ │ └── api.js
│ └── package.json
│
├── server/ # Node Backend
│ ├── models/
│ │ ├── User.js
│ │ └── Item.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── itemRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── server.js
│ └── package.json
│
├── .gitignore
├── .env.example
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/smart-grocery-inventory-manager.git
cd smart-grocery-inventory-manager
```
### 2️⃣ Backend Setup
```
cd server
npm install
```
Create .env file:

MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_secret_here
PORT=5000

Run backend:
```
node server.js
```
### 3️⃣ Frontend Setup
```
cd client
npm install
npm start
```
### 🔗 API Endpoints
Auth Routes:
POST /api/auth/register → Register user
POST /api/auth/login → Login user
Item Routes:
GET /api/items → Get all items
POST /api/items → Add item
PUT /api/items/:id → Update item
DELETE /api/items/:id → Delete item
GET /api/items/alerts → Low stock / expiry alerts

---
## 📊 Features in Action
Dashboard Includes:
- Total Inventory Count
- Low Stock Alerts
- Expiry Notifications
- Stock Level Chart
- Category-wise grouping

---
## 🎯 Future Enhancements
- 📱 Mobile App version (React Native)
- ☁ Cloud deployment (Render / Vercel)
- 🤖 AI-based shopping suggestions
- 📦 Barcode scanning integration
- 👥 Multi-user family accounts

---
## 🧑‍💻 Learning Outcomes
- Full Stack MERN development
- JWT Authentication system
- REST API development
- MongoDB database design
- React state management
- Real-world inventory logic
- GitHub project workflow

---
## 👨‍💻 Author

Nidhi Apotikar
