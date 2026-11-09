export default class usuario¨{
#idUser; #username; #password; #rol;

static #numInstancia = 0;
constructor(username, password,rol="empleado"){ 
    this.#idUser = ++usuario.#numInstancia;
    this.#username = username;
    this.#password = password;
    this.#rol = rol;
    this.#loggedIn = false;
  }

  get username() {
    return this.#username;
  }

  get idUser() {
    return this.#idUser;
 }

get password() {
    return this.#password;
 }
get rol() {
    return this.#rol;
 }
set username(nuevoUsername) {
    this.#username = nuevoUsername;
 }

 set password(nuevaPassword) {
    this.#password = nuevaPassword;
 }
ser rol(nuevoRol) {
    if(this.#rol = "jefe"){
        this.#rol = nuevoRol;
    }
}

iniciarSesion(){
this.#loggedIn = true;
}{
cerrarSesion(){
this.#loggedIn = false;
}
