import mongoose, { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; namme: string };
  organizer: {
    _id: string;
    firstName: string;
    lastNmae: string;
  };
}

const EventShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: mongoose.Types.ObjectId, ref: "Catgory" },
  organizer: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventShema);

export default Event;
