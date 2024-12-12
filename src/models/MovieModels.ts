import mongoose, { Schema } from "mongoose" 

const MovieModels = mongoose.model("Movies", new Schema({
    title: {type: String},
    rating: { type: Number },
    description: { type: String },
    stars: { type: Array },
    poster: { type: String }
}, {
    timestamps: true
}))

export default MovieModels