import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required:true,
        //Trim: Saca los espacios
        trim:true
    },
    descripcion: {
        type: String,
        required:true,
        trim:true
    },
    precio:{
        type: Number
    }
});

export default mongoose.model('Producto', productoSchema)