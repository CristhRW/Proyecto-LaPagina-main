import usuarios from './usuarios.js';
import usuario from './datos.js';

let new usuario1 = usuario("juanperez", "password123", "jefe");

let new usuario2 = usuario("mariaGomez", "password456", "jefe");

let usuario3 = usuario("carlosLopez", "password789", "empleado");

let new usuario4 = usuario("anaMartinez", "password321", "empleado");

export usuarios = [
  usuairio1,
  usuario2,
  usuario3,
  usuario4
];

export empleados = [
    new empleado("Juan", "Perez", "12345", "Gerente", 1500000, usuario1),
    new empleado("Maria", "Gomez", "67890", "Asistente", 800000, usuario2),
    new empleado("Carlos", "Lopez", "54321", "Supervisor", 1200000, usuario3),
    new empleado("Ana", "Martinez", "98765", "Analista", 1000000, usuario4)
]