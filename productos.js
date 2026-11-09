export class Productos {
    constructor(nombre, precio,descripcion, stock,imagen,categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = stock;
        this.imagen = imagen;
        this.categoria = categoria;
    }
}

const productoTaza = new Productos("Taza de cerámica blanca", 15000, "Taza de cerámica basica de color blanca", 20, "/Imagenes/tazaceramicablanca.jpeg", "Tazas"); 

const productoTaza2 = new Productos("Taza de cerámica negra", 15000, "Taza de cerámica basica de color negro", 20, "/Imagenes/tazaceramicanegra.jpeg", "Tazas");

const productoTaza3 = new Productos("Taza de cerámica blanca diseño personalizable", 25000, "Taza de cerámica basica de color blanca con diseño personalizable", 20, "/Imagenes/tazaceramicapersonalizable.jpg", "Tazas");

const productoPeluche = new Productos("Oso de peluche con corazón color marrón", 30000, "Oso de peluche marrón con un corazón rojo", 15, "/Imagenes/osopeluchemarron.jpeg", "Peluches");

const productoPeluche2 = new Productos("Oso de peluche con corazón color blanco", 30000, "Oso de peluche blanco con un corazón rojo", 17, "/Imagenes/osopelucheblanco.jpeg", "Peluches");

const productoPeluche3 = new Productos("Oso de peluche con corazón color rosa", 30000, "Oso de peluche rosa con un corazón rojo", 15, "/Imagenes/osopelucherosa.jpeg", "Peluches");

const productoBotella = new Productos("Botella de plastico con diseño", 20000, "Botella de plastico para gym", 25, "/Imagenes/botella-plastico-gym.jpeg", "Botellas");

const productoBotella2 = new Productos("Botella de aluminio con diseño", 25000, "Botella de aluminio con diseño", 23, "/Imagenes/botella-aluminio.jpeg", "Botellas");

const productoBotella3 = new Productos("Botella de vidrio con diseño", 30000, "Botella de vidrio con diseño", 19, "/Imagenes/botella-vidrio.jpeg", "Botellas");

export const productos = [ // array de todos los productos para exportar
    productoTaza,
    productoTaza2,
    productoTaza3,
    productoPeluche,
    productoPeluche2,
    productoPeluche3,
    productoBotella,
    productoBotella2,
    productoBotella3
];