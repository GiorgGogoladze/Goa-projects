const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("."));

let songs = [];

app.get("/api/songs", (req, res) => res.json(songs));

app.post("/api/songs", (req, res) => {
  const newSong = { id: Date.now(), ...req.body };
  songs.push(newSong);
  res.json(newSong);
});

app.delete("/api/songs/:id", (req, res) => {
  songs = songs.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("http://localhost:3000"));
