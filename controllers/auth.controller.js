import { response } from "express";
import Usuario from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import { generarJWT } from "../helpers/generar-jwt.js";

export const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {

        //148 - Login de usuario
        const usuario = await Usuario.findOne({correo})
        if(!usuario){
            return res.status(400).json({
                msg: "El correo que ingreso no existe"
            })
        }

        if(!usuario.estado){
            return res.status(400).json({
                msg: "Usuario - estado = false"
            })
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            })
        }

       const token = await generarJWT( usuario.id );
    
        res.json({
            usuario,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}