import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: { type: String, required: true }, //Clrek user ID
    receiverId: { type: String, required: true }, // Clrek user Id
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model("message", messageSchema);
