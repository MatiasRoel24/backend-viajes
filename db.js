import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";


export async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Base de datos online");
    } catch (error) {
        console.log(error);
        console.log("No se puede conectar a la base de datos online");
    }
}

