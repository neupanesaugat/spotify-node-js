import mongoose from "mongoose";

//? create schema(rule)

const songsSchema = new mongoose.Schema({
  name: String,
  artist: String,
  lyrics: String,
  genre: String,
});

//? create collection(table)

const Songs = mongoose.model("Songs", songsSchema);

export default Songs;
