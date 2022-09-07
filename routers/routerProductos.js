import express from 'express';
import { getProducto, getProductos, addProducto, editProducto, deleteProducto } from '../controllers/productos.js';

const routerProductos = express.Router();
const admin = true;

routerProductos.use(express.json());
routerProductos.use(express.urlencoded( {extended: true} ));


//Middlewares
const esAdmin = (req, res, next) => {
    if (admin) {
        next();
    } else {
        res.json({error: -1, descripcion: `Ruta: ${req.originalUrl} en metodo ${req.method} solo disponible para admin.`})
    }
}

const existeProducto = async (req,res,next) => {
    const prod = await getProducto(req.params.id);
    if (prod !== undefined) {
        next();
    } else {
        res.json({error: 'Producto no encontrado'});
    }
}
//

//Endpoints
routerProductos.get('/', async (req,res) => {
    res.json(await getProductos());
});

routerProductos.get('/:id', existeProducto ,async (req,res) => {
    const prod = await getProducto(req.params.id);
    res.json(prod);
})

routerProductos.post('/', esAdmin, async (req,res) => {
    res.json(await addProducto(req.body));
})

routerProductos.put('/:id', esAdmin, existeProducto, async (req, res) => {
    res.json(await editProducto(req.params.id, req.body));
})

routerProductos.delete('/:id', esAdmin, existeProducto, async (req, res) => {
    res.json(await deleteProducto(req.params.id));
});
//

export default routerProductos;