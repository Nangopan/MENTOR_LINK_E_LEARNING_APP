import mongoose from "mongoose"
import {MONGODB_URI} from "../utils/constants"

export async function connectDB():Promise<void>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("Mongo Atlas Connected")
    }
    catch(error){
        console.log("MongoDB connection error:",error)
    }
} 