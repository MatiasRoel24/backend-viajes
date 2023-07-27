import {response, request} from 'express'
//DEPENDENCIA DE ENCRIPTADO
import bcryptjs from 'bcryptjs'
//MODELO DE USUARIO
import Usuario from '../models/Usuario.js';
import { generarJWT } from "../helpers/generar-jwt.js";

//PETICION GET - LOGICA
export const usuariosGet = async(req = request, res = response) =>{

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
        total,
        usuarios
    })
};

//PETICION POST - LOGICA
export const usuariosPost = async(req = request, res = response) =>{
    
    const { nombre, correo, password, rol} = req.body;
    const usuario = new Usuario( {nombre, correo, password, rol} );

    //Encriptar la contra
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    const token = await generarJWT( usuario.id );

    //Guardar en base de datos
    await usuario.save();

    res.json({
        usuario,
        token
    })
};

//PETICION PUT - LOGICA
export const usuariosPut = async(req, res = response) =>{

    const { id } = req.params;
    const { _id, password, google, correo, ...resto} = req.body;

    if( password ){
        //Encriptar la contra
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate(id , resto);


    res.json(usuario)
};

//PETICION PATCH - LOGICA
export const usuariosPatch = (req = request, res = response) =>{

    res.json({
        msg: 'patch API - controlador'
    })
};

//PETICION DELETE - LOGICA
export const usuariosDetelete = async(req = request, res = response) =>{

    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate( id, {estado:false} );    
    res.json( usuario )
};
