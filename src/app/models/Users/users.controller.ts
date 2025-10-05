import { Request, Response } from "express";
import { userServices } from "./users.services";


// Get all users
const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersService();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// Get user by ID
const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await userServices.getUserByIdService(req.params.id as string);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch user" });
  }
};

// Create user
const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await userServices.createUserService(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

// Update user
const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await userServices.updateUserService(req.params.id as string, req.body);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
};

// Delete user
const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await userServices.deleteUserService(req.params.id as string);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};

export const userController = {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
};
