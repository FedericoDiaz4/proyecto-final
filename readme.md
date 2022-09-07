Explicacion de EndPoints.

Router Productos:

GET --> localhost:8080/api/productos --> Devuelve todos los productos creados en array.

GET --> localhost:8080/api/productos/:id --> Devuelve el articulo con el ID elegido, si no existe devuelve json de error.

POST --> localhost:8080/api/productos --> Funcionalidad solo de ADMIN, si no es admin rechaza desde el middleware. Recibo los datos del producto en el body y lo agrega, si lo agrega bien devuelve el prod creado, sino devuelve json de error.

PUT --> localhost:8080/api/productos/:id --> Funcionalidad solo de ADMIN, si no es admin rechaza desde el middleware. Chequea que el producto pasado por parametro exista desde middleware, si no existe rechaza. Recibe ID de producto a editar en parametros y datos nuevos del producto en body. Si existe el producto, edita y devuelve producto editado. 

DELETE --> localhost:8080/api/productos/:id --> Funcionalidad solo de ADMIN, si no es admin rechaza desde el middleware. Chequea que el producto pasado por parametro exista desde middleware, si no existe rechaza. Recibe ID de producto a borrar en parametros. Si existe el producto, lo borra y devuelve producto borrado.

---------------------------------------------------------

Router Carrito.

POST --> localhost:8080/api/carritos --> Post con Body vacio. Crea un carrito nuevo, le asigna ID y devuelve el mismo.

DELETE --> localhost:8080/api/carritos/:id --> Chequea que el carrito pasado por parametro exista desde middleware, si no existe rechaza. Recibe ID de carrito a borrar en parametros. Si existe el carrito, lo borra y devuelve carrito borrado.

GET --> localhost:8080/api/carritos/:id/productos --> Chequea que el carrito pasado por parametro exista desde middleware, si no existe rechaza. Recibe ID de carrito por parametros y devuelve los productos que haya en el carrito.

POST --> localhost:8080/api/carritos/:id/productos --> Chequea que el carrito pasado por parametro exista desde middleware, si no existe rechaza. Recibo ID de carrito por parametros, también recibo idProducto desde el body, agrega al carrito recibido por ID el producto del id pasado por el body.

DELETE --> localhost:8080/api/carritos/:id/productos/:id_prod --> Chequea que el carrito pasado por parametro exista desde middleware, si no existe rechaza. Recibo ID de carrito y ID de producto a eliminar por parametros. Chequea que el producto exista en el carrito, si existe lo elimina. Devuelve producto eliminado.


---------------------------------------------------------

Ejemplo de funcionalidad, siguiendo estos pasos se chequean todos los endpoints.
Todo probado y funcionando desde POSTMAN.

1) POST --> localhost:8080/api/productos --> Creo producto 1.

body:

{

    "nombre": "Producto 1",
    "descripcion": "Descripcion 1",
    "codigo": "1",
    "url" : "url1",
    "precio": 100,
    "stock": 10
    
}

2) POST --> localhost:8080/api/productos --> Creo producto 2.

body:

{

    "nombre": "Producto 2",
    "descripcion": "Descripcion 2",
    "codigo": "2",
    "url" : "url2",
    "precio": 200,
    "stock": 20
    
}

3) GET --> localhost:8080/api/productos --> Obtengo lista de todos los productos

4) PUT --> localhost:8080/api/productos/1 --> Edito producto 1.

body:

{

    "nombre": "Producto 1",
    "descripcion": "Descripcion 1",
    "codigo": "1",
    "url" : "url1",
    "precio": 300,
    "stock": 30
    
}

5) GET --> localhost:8080/api/productos/1 --> Obtengo producto editado.

6) POST --> localhost:8080/api/carritos --> Creo un carrito.

6) POST --> localhost:8080/api/carritos/1/productos --> Agrego articulo 1 a carrito.

body:

{

    "idProducto": 1
    
}

7) POST --> localhost:8080/api/carritos/1/productos --> Agrego articulo 2 a carrito.

body:

{

    "idProducto": 2
    
}

8) GET --> localhost:8080/api/carritos/1/productos --> Obtengo el carrito con los dos productos.

9) DELETE --> localhost:8080/api/carritos/1/productos/2 --> Elimino el segundo producto del carrito.

10) GET --> localhost:8080/api/carritos/1/productos --> Obtengo el carrito con un solo producto.

11) DELETE --> localhost:8080/api/carritos/1 --> Borro el producto que quedo en el carrito 1 y despues borro el carrito.

12) DELETE --> localhost:8080/api/productos/2 --> Borro el segundo producto.
