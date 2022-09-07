import Producto from '../classes/producto.js';
import Contenedor from './contenedor.js';

const archivoProductos = new Contenedor('./productos.txt');

if (! await archivoProductos.existeArchivo()) {
    archivoProductos.crearArchivo();
}

export const getProductos = async () => await archivoProductos.getDatos();

export const getProducto = async (id) => await archivoProductos.getById(id);

export const addProducto = async (data) => {
    const productos = await getProductos();
    const {nombre, descripcion, codigo, url, precio, stock} = data;
    const prod = new Producto(productos.length +1, nombre, descripcion, codigo, url, precio, stock);
    productos.push(prod);
    archivoProductos.postDatos(productos);
    return prod;
};

export const editProducto = async (id, datos) => {
    const productos = await getProductos();
    const prod = productos.find(p=> p.id == id);
    prod.nombre = datos.nombre;
    prod.descripcion = datos.descripcion;
    prod.codigo = datos.codigo;
    prod.url = datos.url;
    prod.precio = datos.precio;
    prod.stock = datos.stock;
    productos[productos.indexOf(p=> p.id == id)] = prod;
    archivoProductos.postDatos(productos);
    return prod;
}

export const deleteProducto = async (id) => {
    const productos = await getProductos();
    const prod = productos.find(p => p.id == id);
    productos.splice(productos.indexOf(prod), 1);
    archivoProductos.postDatos(productos);
    return prod;
}