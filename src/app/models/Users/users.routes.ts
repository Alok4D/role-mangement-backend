import express from "express";
import { userController } from "./users.controller";


const router = express.Router();

// Base URL: /api/users
router.get("/", userController.getAllUsersController);
router.get("/:id", userController.getUserByIdController);
router.post("/", userController.createUserController);
router.put("/:id", userController.updateUserController);
router.delete("/:id", userController.deleteUserController);

export const userRoutes = router;
