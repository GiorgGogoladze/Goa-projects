import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/connectDB.js";
import {User} from "/models/user.models.js"

const PORT = process.env.PORT || 5002;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())


app.post("/api/users", async (req,res) => {
    try {
        const body = req.body
        // const user = User.create(body)
        console.log(req.body)
        res.status(201).json(body)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(PORT, () => {
    connectDB()
  console.log(`Server running on port ${PORT}`);
});
