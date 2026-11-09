import { productos } from "./productos.js";

export function buscarProductos(nombre){ // función de busqueda de productos, recuperando su nombre 
    const resultado = productos.filter((producto) => {
        return producto.nombre.toLowerCase().includes(nombre,toLowerCase());
    });
    return resultado;
}