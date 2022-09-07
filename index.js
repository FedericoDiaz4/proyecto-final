import express from 'express';
import routerProductos from './routers/routerProductos.js';
import routerCarritos from './routers/routerCarritos.js';

const app = express();

app.use('/api/productos', routerProductos);
app.use('/api/carritos', routerCarritos);
app.get('*', (req, res) => {
    res.json({error: -1, descripcion: `Ruta: ${req.originalUrl} en metodo ${req.method} no existe.`});
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>{
    console.log(`Servidor levantado y escuchando en ${server.address().port}`);
})

server.on("error", error => console.log(`Error al conectar: ${error}`));