import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/db";

dotenv.config()
const app= express();
app.use(cors())

const USER = {
    name : "Davit",
    surname : "Grdzelishvili",
    age: 20,
    email:"fake@gmail.com"
}

app.get("/api/user", (req,res) => {
    try {
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
