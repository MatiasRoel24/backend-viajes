import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:[true, 'El nombre es obligatorio'],
        trim:true
    },
    correo: {
        type: String,
        required:[true, 'El correo es obligatorio'],
        unique:true
    },
    password:{
        type: String,
        required:[true, 'La contraseña es obligatoria'],
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: true,
        enum:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{    
        type: Boolean,
        default: false
    }
});

UsuarioSchema.methods.toJSON = function(){
    const { __v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default mongoose.model('Usuario', UsuarioSchema)