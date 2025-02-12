import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.file.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please upload all files" });
    }
    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });

    //if song belogs to an album, update the album's songs array
    await song.save();
    if (albumId) {
      await Album.findByAndUpdate(albumId, {
        $push: { songs: song._id },
      });
    }
    res.status(201).json(song);

    // if (!title || !artist || !albumId || !duration) {
    // }
  } catch (error) {
    console.log("Error in createSong", error);
    next(error);
  }
};
