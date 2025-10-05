import { IDesign } from "./design.interface";
import { DesignModel } from "./design.model";

// Get all designs
const getAllDesignsService = async (): Promise<IDesign[]> => {
  return await DesignModel.find();
};

// Get design by ID
const getDesignByIdService = async (id: string): Promise<IDesign | null> => {
  return await DesignModel.findById(id);
};

// Create design
const createDesignService = async (payload: IDesign): Promise<IDesign> => {
  return await DesignModel.create(payload);
};

// Update design
const updateDesignService = async (id: string, payload: Partial<IDesign>): Promise<IDesign | null> => {
  return await DesignModel.findByIdAndUpdate(id, payload, { new: true });
};

// Delete design
const deleteDesignService = async (id: string): Promise<IDesign | null> => {
  return await DesignModel.findByIdAndDelete(id);
};

export const designServices = {
  getAllDesignsService,
  getDesignByIdService,
  createDesignService,
  updateDesignService,
  deleteDesignService,
};
