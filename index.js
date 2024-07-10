import express from "express";
import connectDB from "./connect.db.js";
import customRoutes from "./songs/songs.controller.js";

const app = express();

//? to make app understand json
app.use(express.json());

//? db connection
connectDB();

//? register routes
app.use(customRoutes);

//? network port and server

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
