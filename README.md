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

**Sample JSON for POST / PUT:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "customer",
  "status": "active"
}
```


### Designs

**Base URL:** `http://localhost:4000/api/design`

| Method | Endpoint | Description         | Postman Example URL                    |
| ------ | -------- | ------------------- | -------------------------------------- |
| GET    | `/`      | Get all designs     | `http://localhost:4000/api/design`     |
| GET    | `/:id`   | Get design by ID    | `http://localhost:4000/api/design/123` |
| POST   | `/`      | Create a new design | `http://localhost:4000/api/design`     |
| PUT    | `/:id`   | Update design by ID | `http://localhost:4000/api/design/123` |
| DELETE | `/:id`   | Delete design by ID | `http://localhost:4000/api/design/123` |

**Sample JSON for POST / PUT:**

```json
{
  "title": "Modern Website UI",
  "category": "Graphics Design",
  "description": "A modern and responsive UI design for e-commerce websites.",
  "previewImage": "https://example.com/images/modern-ui.png",
  "designerName": "Jane Doe",
  "usedTools": ["Figma", "Adobe Photoshop", "Illustrator"],
  "effectsUsed": ["Shadow", "Gradient", "Blur"],
  "price": 49.99,
  "process": "Initial wireframe -> Prototype -> Final design",
  "complexityLevel": "Intermediate",
  "tags": ["UI", "Web", "Responsive", "E-commerce"],
  "status": "Active",
  "likesCount": 15,
  "downloadsCount": 5
}
```

### Categories

**Base URL:** `http://localhost:4000/api/categories`

| Method | Endpoint | Description           | Postman Example URL                        |
| ------ | -------- | --------------------- | ------------------------------------------ |
| GET    | `/`      | Get all categories    | `http://localhost:4000/api/categories`     |
| GET    | `/:id`   | Get category by ID    | `http://localhost:4000/api/categories/123` |
| POST   | `/`      | Create a new category | `http://localhost:4000/api/categories`     |
| PUT    | `/:id`   | Update category by ID | `http://localhost:4000/api/categories/123` |
| DELETE | `/:id`   | Delete category by ID | `http://localhost:4000/api/categories/123` |

**Sample JSON for POST / PUT:**

```json
{
  "name": "Web Design",
  "description": "All types of graphic design resources including logos, banners, and illustrations.",
  "image": "https://example.com/images/graphic-design.png"
}
```

### Pricing Plans

**Base URL:** `http://localhost:4000/api/pricing`

| Method | Endpoint | Description               | Postman Example URL                     |
| ------ | -------- | ------------------------- | --------------------------------------- |
| GET    | `/`      | Get all pricing plans     | `http://localhost:4000/api/pricing`     |
| GET    | `/:id`   | Get pricing plan by ID    | `http://localhost:4000/api/pricing/123` |
| POST   | `/`      | Create a new pricing plan | `http://localhost:4000/api/pricing`     |
| PUT    | `/:id`   | Update pricing plan by ID | `http://localhost:4000/api/pricing/123` |
| DELETE | `/:id`   | Delete pricing plan by ID | `http://localhost:4000/api/pricing/123` |

**Sample JSON for POST / PUT:**

```json
{
  "name": "Premium Plan",
  "price": 49.99,
  "features": [
    "Unlimited designs",
    "High-resolution downloads",
    "Priority support",
    "Access to premium templates"
  ],
  "duration": "1 month"
}
```

### Purchases

**Base URL:** `http://localhost:4000/api/purchases`

| Method | Endpoint | Description           | Postman Example URL                       |
| ------ | -------- | --------------------- | ----------------------------------------- |
| GET    | `/`      | Get all purchases     | `http://localhost:4000/api/purchases`     |
| GET    | `/:id`   | Get purchase by ID    | `http://localhost:4000/api/purchases/123` |
| POST   | `/`      | Create a new purchase | `http://localhost:4000/api/purchases`     |
| PUT    | `/:id`   | Update purchase by ID | `http://localhost:4000/api/purchases/123` |
| DELETE | `/:id`   | Delete purchase by ID | `http://localhost:4000/api/purchases/123` |

**Sample JSON for POST / PUT:**

```json
{
  "customer": "650b1f3e4f1c2a00123abcd2",
  "design": "650b1f3e4f1c2a00123abcd2",
  "selectedPricingPlan": "650b1f3e4f1c2a00123abcd3",
  "paymentStatus": "Pending",
  "purchaseDate": "2025-10-05T14:30:00.000Z"
}
```

### Reviews

**Base URL:** `http://localhost:4000/api/reviews`

| Method | Endpoint | Description         | Postman Example URL                     |
| ------ | -------- | ------------------- | --------------------------------------- |
| GET    | `/`      | Get all reviews     | `http://localhost:4000/api/reviews`     |
| GET    | `/:id`   | Get review by ID    | `http://localhost:4000/api/reviews/123` |
| POST   | `/`      | Create a new review | `http://localhost:4000/api/reviews`     |
| PUT    | `/:id`   | Update review by ID | `http://localhost:4000/api/reviews/123` |
| DELETE | `/:id`   | Delete review by ID | `http://localhost:4000/api/reviews/123` |

**Sample JSON for POST / PUT:**

```json
{
  "reviewer": "650a12345abcde1234567880",
  "design": "650b23456bcdef2345678901",
  "rating": 5,
  "comment": "Amazing design! Very professional and clean."
}
```

---

## 📬 Postman Collection

1. Open Postman → Import → Select `API.postman_collection.json`.
2. Set **BASE_URL** to `http://localhost:4000`.
3. All endpoints are ready to test locally.
4. Make sure to use `raw` → `JSON` for POST & PUT requests.

---