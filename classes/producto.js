class Producto {
    constructor(id, nombre, descripcion, codigo, url, precio, stock) {
        this.id = id,
        this.timestamp = Date.now(),
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.url = url,
        this.precio = precio,
        this.stock = stock
    }
}

export default Producto;