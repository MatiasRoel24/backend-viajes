import Producto from '../models/Producto.js';

export const getProductos = async(req,res) => {
    try {
        const posts = await Producto.find();
        res.json(posts);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createProducto = async(req,res) => {

    try {
        const {titulo, descripcion, precio} = req.body;
        const newProducto = new Producto({titulo, descripcion, precio});
        await newProducto.save();
        return res.json(newProducto);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};

export const updateProducto = async(req,res) => {
    try {
        const updatedProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.send(updatedProducto);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteProducto = async(req,res) => {
    try {
        console.log(req.params.id);
        const productoRemove = await Producto.findByIdAndDelete(req.params.id);
        if(!productoRemove) return res.sendStatus(404);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }  
};


export const getProducto = async(req,res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if(!producto) return res.sendStatus(404);
        res.json(producto);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }  
};