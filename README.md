# 📝 To-Do App

A simple **To-Do Application** built using the **MERN Stack** that allows users to manage their daily tasks efficiently. Users can create, view, update, and delete tasks after logging in.

---

## 🚀 Features

* User Authentication (Signup & Login)
* JWT-based Authentication
* Create new tasks
* View all tasks
* Update task details
* Delete tasks
* Logout functionality
* Protected routes (only logged-in users can access tasks)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React-Router-Dom
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt

---

## 📂 Project Structure (Basic)

```
To-Do-App/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   |── App.js
│   └── main.jsx
│
└── README.md
```

---

## 🔐 Authentication Flow

1. User signs up or logs in
2. Backend generates a JWT token
3. Token is stored in `localStorage`
4. Token is sent in headers for protected APIs
5. On logout, token is removed from `localStorage`

---

## 📌 API Endpoints (Example)

### Auth Routes

* `POST /api/auth/signup` – Register user
* `POST /api/auth/login` – Login user

### Task Routes (Protected)

* `POST /createtask` – Create task
* `GET /api/gettask` – Get all tasks
* `PUT /api/updatetask/:id` – Update task
* `DELETE /api/deletetask/:id` – Delete task

---

## ▶️ How to Run the Project

### Backend

```bash
npm install
npm start
```

### Frontend

```bash
npm create vite@latest
npm run dev
```

---

## 📦 Environment Variables

Create a `.env` file in backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## 👨‍💻 Author

**smruti ranjan sahoo**
Engineering Student | MERN Stack Developer

---

