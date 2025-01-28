import express from "express";
import cors from "cors";
import movies from "./data.json" assert { type: "json" };

const app = express();
app.use(cors());

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
