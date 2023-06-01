import Role from '../models/Role.js'
import Usuario from '../models/Usuario.js'

//VALIDACION DEL ROL
export const esRoleValido = async( rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ){
        throw new Error(`El rol ${ rol } no esta registrado en la base de datos`)
    }
}

//VALIDACION DE EXISTENCIA DE MAIL
export const emailExiste = async( correo = '') =>{
    //Verificar si el correo existe
    const existeEmail = await Usuario.findOne( {correo} );
    if( existeEmail ) {
        throw new Error(`El correo ${correo} ya esta registrado`)
    }
}

//VALIDACIONES DE EXISTENCIA DE USUARIO
export const existeUsuarioPorId = async( id ) =>{
    //Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if( !existeUsuario ) {
        throw new Error(`El id: ${id} no existe`)
    }
}
