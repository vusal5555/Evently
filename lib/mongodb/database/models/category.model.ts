import { Document } from "mongodb";
import mongoose, { models, model } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.User || model("Category", categorySchema);

export default Category;
