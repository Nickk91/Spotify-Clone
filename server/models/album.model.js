import mongoose from "mongoose";

const albumSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: String,
      required: true,
    },
    fieldName: { type: String, required: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "song" }],
  },
  { timestamps: true }
);

export const Album = mongoose.model("album", albumSchema);
