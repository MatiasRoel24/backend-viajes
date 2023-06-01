import { response } from "express";

export const esAdminRole = (req,res = response, next) => {

    const {nombre,rol} = req.usuario;

    if(!req.usuario){
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        })
    }

    if(rol !== 'ADMIN_ROLE'){
        res.status(401).json({
            msg: `${nombre} no es administrador - No puede hacer esto`
        })
    }


    next()
}