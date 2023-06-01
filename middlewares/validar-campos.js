import {validationResult} from 'express-validator'
//VALIDAMOS QUE EXISTAN LOS CAMPOS A TRAVES DE EXPRESS-VALIDATOR
export const validarCampos = ( req, res, next ) => {
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next();
} 

