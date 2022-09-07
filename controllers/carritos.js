import Carrito from '../classes/carrito.js';
import Contenedor from './contenedor.js';
import { getProducto } from './productos.js';

const archivoCarrito = new Contenedor('./carritos.txt');

if (! await archivoCarrito.existeArchivo()) {
    archivoCarrito.crearArchivo();
}

const getCarritos = async () => await archivoCarrito.getDatos();

export const getCarrito = async (id) => await archivoCarrito.getById(id);

export const addCarrito = async () => {
    const carritos = await getCarritos();
    const carrito = new Carrito(carritos.length + 1, []);
    carritos.push(carrito);
    archivoCarrito.postDatos(carritos);
    return carrito.id;
}

export const deleteCarrito = async (id) => {
    const carritos = await getCarritos();
    const carrito = await getCarrito(id);
    carrito.productos = [];
    carritos.splice(carritos.indexOf(carrito), 1);
    archivoCarrito.postDatos(carritos);
    return carrito;
}

export const getProductosEnCarrito = async (id) => {
    const carrito = await getCarrito(id);
    return carrito.productos;
}

export const addProductoACarrito = async (idCarrito, idProducto) => {
    const carritos = await getCarritos();
    const carrito = await getCarrito(idCarrito);
    const prod = await getProducto(idProducto);
    if (prod === undefined) {
        return {error: 'Producto no encontrado'};
    }
    carritos[carritos.findIndex(c=> c.id == idCarrito)].productos.push(prod);
    archivoCarrito.postDatos(carritos);
    return carrito;
}

export const deleteProductoDeCarrito = async (idCarrito, idProducto) => {
    const carritos = await getCarritos();
    const carrito = await getCarrito(idCarrito);
    const prod = carrito.productos.find(p => p.id == idProducto);
    if (prod === undefined) {
        return {error: 'Producto no encontrado en el carrito'};
    }
    const prodEliminado = carrito.productos.splice(carrito.productos.indexOf(prod), 1);
    carritos[carritos.findIndex(c=>c.id ==idCarrito)] = carrito;
    archivoCarrito.postDatos(carritos);
    return prodEliminado;
}