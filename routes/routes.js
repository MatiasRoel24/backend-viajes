import {Router} from 'express';
import { check } from 'express-validator';

import { usuariosGet, 
        usuariosPatch, 
        usuariosPost, 
        usuariosPut,
        usuariosDetelete } from '../controllers/usuario.controller.js';
import { getProductos,
        createProducto,
        updateProducto,
        deleteProducto,
        getProducto } from "../controllers/producto.controller.js";
import {getDivisas,
        getDolar,
        getMexicanoToPeso } from "../controllers/moneda.controller.js";
import { login } from '../controllers/auth.controller.js';

import { validarCampos } from '../middlewares/validar-campos.js';
import { emailExiste, esRoleValido, existeUsuarioPorId } from '../helpers/db-validator.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import { esAdminRole } from '../middlewares/validar-roles.js';

const router = Router();

//USUARIOS
router.get('/usuarios', usuariosGet)
router.put('/usuarios/:id',[
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom(esRoleValido),
        validarCampos
    ], usuariosPut)
router.post('/usuarios',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio y mas de 6 letras').isLength({ min: 6 }),
        check('correo', 'El correo no es valido').isEmail(),
        check('correo').custom( emailExiste ),
        check('rol').custom(esRoleValido),
        validarCampos
    ], usuariosPost)
router.delete('/usuarios/:id',[
        validarJWT,
        esAdminRole,
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
    ], usuariosDetelete)
router.patch('/usuarios', usuariosPatch)

//LOGIN
router.post('/auth/login',[
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'La contrasenia es obligatoria').not().isEmpty(),//.exists().isLength({ min: 6 })
        validarCampos
], login)

//PRODUCTOS
router.get('/productos', getProductos)
router.post('/productos', createProducto)
router.put('/productos/:id', updateProducto)
router.delete('/productos/:id', deleteProducto)
router.get('/productos/:id', getProducto)


//MONEDAS
router.get('/dolar',  getDolar)  
router.get('/divisas', getDivisas)  
router.get('/peso', getMexicanoToPeso)  

export default router;