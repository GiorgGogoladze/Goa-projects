import express from "express";
import cors from "cors"

const app = express()
app.use(cors())

const USER = {
    id: "John Wick",
    email: "example@gmail.com",
    age: "52"
}

app.get("/api/user", (req, res) => {
    try{
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

const PORT = 5000
app.listen(PORT, () => {
    console.log("Serve is chilling at https://localhost:${PORT}")
})