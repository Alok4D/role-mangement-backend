import { model, Schema } from "mongoose";
import { ComplexityLevel, DesignStatus, IDesign } from "./design.interface";

const designSchema = new Schema<IDesign>(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    previewImage: { type: String, required: true },
    designerName: { type: String, required: true, trim: true },
    usedTools: { type: [String], default: [] },
    effectsUsed: { type: [String], default: [] },
    price: { type: Number, required: true, min: 0 },
    process: { type: String, required: true },
    complexityLevel: { type: String, enum: Object.values(ComplexityLevel), required: true },
    tags: { type: [String], default: [] },
    status: { type: String, enum: Object.values(DesignStatus), default: DesignStatus.ACTIVE },
    likesCount: { type: Number, default: 0, min: 0 },
    downloadsCount: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

export const DesignModel = model<IDesign>("Design", designSchema);
