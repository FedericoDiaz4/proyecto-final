import fs from 'fs';

const err = {error: 'Error al leer el archivo'};

export default class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }

    async crearArchivo() {
        try {
            await fs.promises.writeFile(this.ruta, "[]");
            return true;
        } catch (error) {
            return JSON.parse(err);
        }
    }

    async getDatos() {
        try {
            const datos = await fs.promises.readFile(this.ruta, 'utf-8');
            return JSON.parse(datos);
        } catch (error) {
            return JSON.parse(err);
        }
    }

    async postDatos(datos) {
        try {
            fs.promises.writeFile(this.ruta, JSON.stringify(datos))
            return true;
        } catch (error) {
            return JSON.parse(err);
        }
    }
    
    async existeArchivo() {
        try {
            return fs.existsSync(this.ruta)
        } catch (error) {
            return JSON.parse(err);
        }
    }

    async getById(id) {
        const arr = await this.getDatos();
        try {
            return arr.find(a => a.id == id);    
        } catch (error) {
            return JSON.parse(err);   
        }
    }

}