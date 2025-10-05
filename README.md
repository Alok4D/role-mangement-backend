# User Management API

## 📄 Project Description

This is a **User Management API** built with **Node.js**, **Express**, **MongoDB**, and **TypeScript**.
It provides **CRUD operations** for users with role and status management.
You can test all endpoints directly in **Postman** using your local server.

---

## ⚡ Features

* Create, Read, Update, Delete Users
* User Roles: `admin`, `customer`
* User Status: `active`, `blocked`, `suspended`
* Fully TypeScript typed
* Postman collection ready for local testing

---

## 🛠 Technologies Used

* Node.js & Express.js
* MongoDB & Mongoose
* TypeScript
* Postman (for API testing)

---

## 📂 Project Structure

```
project/
├── src/
│   ├── modules/
│   │   └── user/
│   │       ├── user.model.ts
│   │       ├── user.controller.ts
│   │       ├── user.routes.ts
│   │       └── user.services.ts
│   └── app.ts
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd project
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/userdb
PORT=4000
```

4. Run the server:

```bash
npm run dev
```

Server will start at `http://localhost:4000`.

---

## 🌐 API Endpoints (Postman-ready)

**Base URL:** `http://localhost:4000/api/users`

| Method | Endpoint | Description       | Controller Function     |
| ------ | -------- | ----------------- | ----------------------- |
| GET    | `/`      | Get all users     | `getAllUsersController` |
| GET    | `/:id`   | Get user by ID    | `getUserByIdController` |
| POST   | `/`      | Create a new user | `createUserController`  |
| PUT    | `/:id`   | Update user by ID | `updateUserController`  |
| DELETE | `/:id`   | Delete user by ID | `deleteUserController`  |

> 💡 Tip: All controller function names exactly match your router setup.

---

## 📝 Request Body Examples

**POST `/api/users`**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer",
  "status": "active"
}
```

**PUT `/api/users/:id`**

```json
{
  "name": "John Smith",
  "status": "blocked"
}
```

> 💡 Tip: In Postman, use `raw` → `JSON` in the request body for POST & PUT.

---

## 💾 Response Example

**GET `/api/users`**

```json
{
  "success": true,
  "data": [
    {
      "_id": "650a12345abcde1234567890",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "customer",
      "status": "active",
      "createdAt": "2025-10-05T12:34:56.789Z",
      "updatedAt": "2025-10-05T12:34:56.789Z"
    }
  ]
}
```

---

## 📦 Database Schema

**Users Collection**

| Field     | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| _id       | ObjectId | Auto-generated ID                |
| name      | String   | User's full name                 |
| email     | String   | Unique email address             |
| password  | String   | Hashed password                  |
| role      | String   | `admin` or `customer`            |
| status    | String   | `active`, `blocked`, `suspended` |
| createdAt | Date     | Auto-generated timestamp         |
| updatedAt | Date     | Auto-generated timestamp         |

**Diagram Example:**

```
┌─────────┐
│  Users  │
├─────────┤
│ _id     │
│ name    │
│ email   │
│ password│
│ role    │
│ status  │
│ createdAt │
│ updatedAt │
└─────────┘
```

*(Optional: Use dbdiagram.io or draw.io to make a proper ER diagram and include as PNG.)*

---

## 📬 Postman Collection

1. Open Postman → Import → Select `UserAPI.postman_collection.json`.
2. Set **BASE_URL** to `http://localhost:4000`.
3. All endpoints are ready to test locally.
4. Make sure to use `raw` → `JSON` for POST & PUT requests.

---

## 🔒 Security (Optional)

* Password hashing using bcrypt before saving user.
* Roles can be used for access control (`admin` vs `customer`).

---
