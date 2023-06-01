import mongoose from 'mongoose'
//MODELAMOS EL ROL
const RoleSchema = new mongoose.Schema({
    rol:{
        type: String,
        required: [true, 'El rol es obligario']
        }
});


export default mongoose.model('Role', RoleSchema)