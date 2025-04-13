import mongoose from "mongoose"

const postSchema = new mongoose.Schema( {
    title: String,
    comments: [String],
    autor: String,
    img: String,
},
    {
        timestamps: True,
    }

)

export const PostModel =  mongoose.model("posts", postSchema)