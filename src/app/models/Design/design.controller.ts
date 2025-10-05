import { Request, Response } from "express";
import { designServices } from "./design.services";

// GET all designs
const getAllDesignsController = async (req: Request, res: Response) => {
  try {
    const designs = await designServices.getAllDesignsService();
    res.status(200).json({ success: true, data: designs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

// GET single design
const getDesignByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ success: false, message: "Design ID is required" });
    }

    const design = await designServices.getDesignByIdService(id);
    if (!design) {
      return res.status(404).json({ success: false, message: "Design not found" });
    }

    res.status(200).json({ success: true, data: design });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch design", error });
  }
};

// CREATE design
const createDesignController = async (req: Request, res: Response) => {
  try {
    const design = await designServices.createDesignService(req.body);
    res.status(201).json({ success: true, data: design });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create design", error });
  }
};

// UPDATE design
const updateDesignController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ success: false, message: "Design ID is required" });
    }

    const design = await designServices.updateDesignService(id, req.body);
    if (!design) {
      return res.status(404).json({ success: false, message: "Design not found" });
    }

    res.status(200).json({ success: true, data: design });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update design", error });
  }
};

// DELETE design
const deleteDesignController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ success: false, message: "Design ID is required" });
    }

    const design = await designServices.deleteDesignService(id);
    if (!design) {
      return res.status(404).json({ success: false, message: "Design not found" });
    }

    res.status(200).json({ success: true, message: "Design deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete design", error });
  }
};

export const designController = {
  getAllDesignsController,
  getDesignByIdController,
  createDesignController,
  updateDesignController,
  deleteDesignController,
};
