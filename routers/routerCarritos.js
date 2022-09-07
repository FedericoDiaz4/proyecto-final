import express from 'express';
import {getCarrito ,addCarrito, addProductoACarrito, deleteCarrito, deleteProductoDeCarrito, getProductosEnCarrito } from '../controllers/carritos.js';

const routerCarritos = express.Router();

routerCarritos.use(express.json());
routerCarritos.use(express.urlencoded( {extended: true} ));

//Middlewares
const existeCarrito = async (req, res, next) => {
    const carrito = await getCarrito(req.params.id);
    if (carrito !== undefined) {
        next();
    } else {
        res.json({error: 'Carrito no encontrado'});
    }
}

//Endpoints
routerCarritos.post('/', async (req,res) => {
    res.json(await addCarrito());
});

routerCarritos.delete('/:id', existeCarrito, async (req,res) => {
    res.json(await deleteCarrito(req.params.id));
});

routerCarritos.get('/:id/productos', existeCarrito, async (req, res) => {
    res.json(await getProductosEnCarrito(req.params.id));
});

routerCarritos.post('/:id/productos', existeCarrito, async (req, res) => {
    res.json(await addProductoACarrito(req.params.id, req.body.idProducto));
});

routerCarritos.delete('/:id/productos/:id_prod', existeCarrito, async (req,res) => {
    res.json(await deleteProductoDeCarrito(req.params.id, req.params.id_prod));
});

export default routerCarritos;