import {Router} from 'express';
import { getProductos,
        createProducto,
        updateProducto,
        deleteProducto,
        getProducto } from "../controllers/producto.controller.js";

import {getDivisas, getDolar, getMexicanoToPeso } from "../controllers/moneda.controller.js";


const router = Router();

//PRODUCTOS

//Me trae los post
router.get('/productos', getProductos)

//Me crea los productos
router.post('/productos', createProducto)

//Actualizar publicacion por ID
router.put('/productos/:id', updateProducto)

//Eliminar una publicacion por ID
router.delete('/productos/:id', deleteProducto)

//Me trae un solo post por ID
router.get('/productos/:id', getProducto)


//MONEDAS

//Obtengo dolar blue
router.get('/dolar',  getDolar)  
//Obtengo cotizacion del pais 
router.get('/divisas', getDivisas)  

//Obtengo el total en pesos
router.get('/peso', getMexicanoToPeso)  

export default router;