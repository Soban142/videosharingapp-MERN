import mongoose from "mongoose";
const Schema = mongoose.Schema

const videoSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            required: true
        },
        videoURL: {
            type: String,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        tags: {
            type: [String],
            default: []
        },
        likes: {
            type: [String],
            default: []
        },
        dislikes: {
            type: [String],
            default: []
        },
    },
    { timestamps: true }
);

export default mongoose.model('Video', videoSchema)