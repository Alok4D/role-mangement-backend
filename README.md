# API Documentation

## 📄 Project Description

This project includes APIs for **Users**, **Designs**, **Categories**, **Pricing Plans**, **Purchases**, and **Reviews**, built with **Node.js**, **Express**, **MongoDB**, and **TypeScript**.
It provides **CRUD operations** for each module. You can test all endpoints directly in **Postman** using your local server.

---

## ⚡ Features

* Create, Read, Update, Delete Users
* Create, Read, Update, Delete Designs
* Create, Read, Update, Delete Categories
* Create, Read, Update, Delete Pricing Plans
* Create, Read, Update, Delete Purchases
* Create, Read, Update, Delete Reviews
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
MONGO_URI=mongodb://localhost:27017/mydb
PORT=4000
```

4. Run the server:

```bash
npm run dev
```

Server will start at `http://localhost:4000`.

---

## 🌐 API Endpoints (Postman-ready)

### Users

**Base URL:** `http://localhost:4000/api/users`

| Method | Endpoint | Description       | Postman Example URL                   |
| ------ | -------- | ----------------- | ------------------------------------- |
| GET    | `/`      | Get all users     | `http://localhost:4000/api/users`     |
| GET    | `/:id`   | Get user by ID    | `http://localhost:4000/api/users/123` |
| POST   | `/`      | Create a new user | `http://localhost:4000/api/users`     |
| PUT    | `/:id`   | Update user by ID | `http://localhost:4000/api/users/123` |
| DELETE | `/:id`   | Delete user by ID | `http://localhost:4000/api/users/123` |

### Designs

**Base URL:** `http://localhost:4000/api/design`

| Method | Endpoint | Description         | Postman Example URL                    |
| ------ | -------- | ------------------- | -------------------------------------- |
| GET    | `/`      | Get all designs     | `http://localhost:4000/api/design`     |
| GET    | `/:id`   | Get design by ID    | `http://localhost:4000/api/design/123` |
| POST   | `/`      | Create a new design | `http://localhost:4000/api/design`     |
| PUT    | `/:id`   | Update design by ID | `http://localhost:4000/api/design/123` |
| DELETE | `/:id`   | Delete design by ID | `http://localhost:4000/api/design/123` |

### Categories

**Base URL:** `http://localhost:4000/api/categories`

| Method | Endpoint | Description           | Postman Example URL                        |
| ------ | -------- | --------------------- | ------------------------------------------ |
| GET    | `/`      | Get all categories    | `http://localhost:4000/api/categories`     |
| GET    | `/:id`   | Get category by ID    | `http://localhost:4000/api/categories/123` |
| POST   | `/`      | Create a new category | `http://localhost:4000/api/categories`     |
| PUT    | `/:id`   | Update category by ID | `http://localhost:4000/api/categories/123` |
| DELETE | `/:id`   | Delete category by ID | `http://localhost:4000/api/categories/123` |

### Pricing Plans

**Base URL:** `http://localhost:4000/api/pricing`

| Method | Endpoint | Description               | Postman Example URL                     |
| ------ | -------- | ------------------------- | --------------------------------------- |
| GET    | `/`      | Get all pricing plans     | `http://localhost:4000/api/pricing`     |
| GET    | `/:id`   | Get pricing plan by ID    | `http://localhost:4000/api/pricing/123` |
| POST   | `/`      | Create a new pricing plan | `http://localhost:4000/api/pricing`     |
| PUT    | `/:id`   | Update pricing plan by ID | `http://localhost:4000/api/pricing/123` |
| DELETE | `/:id`   | Delete pricing plan by ID | `http://localhost:4000/api/pricing/123` |

### Purchases

**Base URL:** `http://localhost:4000/api/purchases`

| Method | Endpoint | Description           | Postman Example URL                       |
| ------ | -------- | --------------------- | ----------------------------------------- |
| GET    | `/`      | Get all purchases     | `http://localhost:4000/api/purchases`     |
| GET    | `/:id`   | Get purchase by ID    | `http://localhost:4000/api/purchases/123` |
| POST   | `/`      | Create a new purchase | `http://localhost:4000/api/purchases`     |
| PUT    | `/:id`   | Update purchase by ID | `http://localhost:4000/api/purchases/123` |
| DELETE | `/:id`   | Delete purchase by ID | `http://localhost:4000/api/purchases/123` |

### Reviews

**Base URL:** `http://localhost:4000/api/reviews`

| Method | Endpoint | Description         | Postman Example URL                     |
| ------ | -------- | ------------------- | --------------------------------------- |
| GET    | `/`      | Get all reviews     | `http://localhost:4000/api/reviews`     |
| GET    | `/:id`   | Get review by ID    | `http://localhost:4000/api/reviews/123` |
| POST   | `/`      | Create a new review | `http://localhost:4000/api/reviews`     |
| PUT    | `/:id`   | Update review by ID | `http://localhost:4000/api/reviews/123` |
| DELETE | `/:id`   | Delete review by ID | `http://localhost:4000/api/reviews/123` |

---

## 📬 Postman Collection

1. Open Postman → Import → Select `API.postman_collection.json`.
2. Set **BASE_URL** to `http://localhost:4000`.
3. All endpoints are ready to test locally.
4. Make sure to use `raw` → `JSON` for POST & PUT requests.

---

## 🔒 Security (Optional)

* Password hashing using bcrypt before saving user.
* Roles can be used for access control (`admin` vs `customer`).
* Authentication can be added for other modules as needed.

---

