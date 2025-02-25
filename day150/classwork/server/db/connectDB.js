import mongoose from "mongoose"
export default async function connectDB() {
    try{
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log("server mining on goa ")
    }catch (error) {
        console.log(error.message)
    }
}
