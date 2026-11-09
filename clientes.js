export const clientes = []; // creo un array vacio de clientes para almacenarlos

export class Cliente{ // creo la clase cliente con un id auto incremental
    static idCliente = 0;
    #id;
    #nombre;
    #apellido;
    #email;

    constructor(nombre,apellido,email){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#id = ++Cliente.idCliente;
    }

    get id(){
        return this.#id
    }
    get nombre(){
        return this.#nombre;
    }
    get apellido(){
        return this.#apellido;
    }
    get email(){
        return this.#email;
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    set apellido(nuevoApellido){
        this.#apellido = nuevoApellido;
    }
    set email(nuevoEmail){
        this.#email = nuevoEmail;
    }
}

export function cargarClientes(nombre,apellido,email){ // creo la función para cargar clientes
    const nuevoCliente = new Cliente(nombre,apellido,email);
    clientes.push(nuevoCliente);

    return nuevoCliente;
}

export function mostrarClientes(){ // función para ver el listado completo de clientes
    return clientes;
}

export function buscarClientes(){ // función para buscar clientes por el ids
const clienteEncontrado = clientes.find((id) => {
    return Cliente.id === id;
});
return clienteEncontrado;
};

