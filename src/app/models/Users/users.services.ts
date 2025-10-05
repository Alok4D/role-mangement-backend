import { IUser } from "./users.interface";
import { UserModel } from "./users.model";

// Get all users
const getAllUsersService = async () => await UserModel.find();

// Get user by ID
const getUserByIdService = async (id: string) => await UserModel.findById(id);

// Create user
const createUserService = async (payload: IUser) => await UserModel.create(payload);

// Update user
const updateUserService = async (id: string, payload: Partial<IUser>) =>
  await UserModel.findByIdAndUpdate(id, payload, { new: true });

// Delete user
const deleteUserService = async (id: string) => await UserModel.findByIdAndDelete(id);

export const userServices = {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
};
