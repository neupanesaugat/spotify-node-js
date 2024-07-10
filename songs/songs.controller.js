import express from "express";
import Songs from "./songs.model.js";
import mongoose from "mongoose";

const router = express.Router();

//? Adding a new song:
router.post("/songs/add", async (req, res) => {
  // extract new song from req.body
  const newSong = req.body;

  // create that on the database
  await Songs.create(newSong);

  // send res
  return res.status(200).send({ message: "New song added successfully..." });
});

//? Get song list:
router.get("/songs/list", async (req, res) => {
  const songs = await Songs.find();
  return res.status(200).send({ message: "success", songsList: songs });
});

//? Get song list by id:
router.get("/songs/detail/:id", async (req, res) => {
  // extract song id from request.params
  const songsId = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(songsId);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid Id!" });
  }

  // find song using song id
  const song = await Songs.findOne({ _id: songsId });
  console.log(song);

  // if not song, throw error
  if (!song) {
    return res.status(404).send({ message: "Song not found!" });
  }

  //send res
  return res.status(200).send({ message: "success", songDetail: song });
});

export default router;
