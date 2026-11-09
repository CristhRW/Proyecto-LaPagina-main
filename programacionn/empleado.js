export default class empleado{
    #idEmpleado; #nombre; #legajo; #apellido; #puesto; #sueldo; #usuario;
    
    static numInstancia = 0;
    constructor(nombre, apellido, legajo, puesto, sueldo, usuario) {
        this.#nombre = nombre;
        this.#legajo = "Emp-00"+empleado.numInstancia++;
        this.#apellido = apellido;
        this.#puesto = puesto;
        this.#sueldo = sueldo;
        this.#usuario = usuario;
    }

    get sueldo() {
        return this.#sueldo;
}
 get nombre() {
        return this.#nombre;
}
 get apellido() {
        return this.#apellido;
}
 get puesto() {
        return this.#puesto;
}
 get legajo() {
        return this.#legajo;
}
 get idUsuario() {
        return this.#usuario;
}
 get UsernameUsuario() {
        return this.#usuario;
}

set puesto(nuevoPuesto) {
        this.#puesto = nuevoPuesto;
}
set sueldo(incremento) {
    if(incremento > 0){
        this.#sueldo+=incremento;
    }
}

let miEmpleado = new empleado("Juan", "Perez", "12345", "Gerente", 1500000, new usuario("juanperez", "password123", "jefe"));;