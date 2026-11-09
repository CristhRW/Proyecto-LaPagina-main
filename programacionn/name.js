import Usuario from "./usuario.js";
import Datos from "./datos.js";

let usuarioslogeado= null;

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn_iniciarSesion = document.querySelector("#btn_iniciarSesion");

btn_iniciarSesion.addEventListener("click",btn_iniciarSesion) () 

function iniciarSesion(){
    usuarios.find(
        user => {
            if(user.username === username.value && user.password === password.value) {
                usuarioslogeado = user;
                user.logeado.iniciarSesion()
                localStorage.setItem("nombreUsuario", user.username);   
                localStorage.setItem("rolUsuario", user.rol);
                localStorage.setItem("idUsuario", user.idUser);
                window.location = "../inicio.html";

        
            }
        }
    );
} {