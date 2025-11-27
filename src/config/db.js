import mongoose from "mongoose";

const mongoDB_URL = process.env.MONGODB_URL

if(!mongoDB_URL){
    throw new Error("mongoDb connection noy available")
}