const userButton = document.getElementById("userButton");
const userMenu = document.getElementById("userMenu");
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");

// Abrir y cerrar el menú del usuario
userButton.addEventListener("click", () => {
    const isHidden = userMenu.classList.toggle("hidden");
    userButton.setAttribute("aria-expanded", String(!isHidden));
});

// Abrir el modal de registro
document.getElementById("openRegister").addEventListener("click", () => {
    userMenu.classList.add("hidden");
    userButton.setAttribute("aria-expanded", "false");
    registerModal.classList.remove("hidden");
});

// Abrir el modal de inicio de sesión
document.getElementById("openLogin").addEventListener("click", () => {
    userMenu.classList.add("hidden");
    userButton.setAttribute("aria-expanded", "false");
    loginModal.classList.remove("hidden");
});

// Cerrar modales con sus botones X
document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById(button.dataset.close).classList.add("hidden");
    });
});

// Cerrar al hacer clic en el fondo oscuro
[registerModal, loginModal].forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        registerModal.classList.add("hidden");
        loginModal.classList.add("hidden");
        userMenu.classList.add("hidden");
        userButton.setAttribute("aria-expanded", "false");
    }
});

// --- VALIDACIÓN DEL FORMULARIO DE REGISTRO ---
document.getElementById("registerForm").addEventListener("submit", event => {
    event.preventDefault(); // Detiene el envío automático

    const password = document.getElementById("RegistroPassword").value;
    const confirmPassword = document.getElementById("RegistroPasswordConfirm");

    // Comparamos si las contraseñas no son iguales
    if (password !== confirmPassword.value) {
        // Mostramos el error nativo del navegador en el segundo campo
        confirmPassword.setCustomValidity("Las contraseñas no coinciden. Por favor, verifica.");
        confirmPassword.reportValidity(); 
    } else {
        // Si coinciden, limpiamos errores anteriores
        confirmPassword.setCustomValidity("");
        
        // El formulario se envía de manera silenciosa en consola
        console.log("Formulario enviado con éxito."); 

        // Se cierra el modal directamente sin ventanas molestas de alerta
        registerModal.classList.add("hidden");
        
        // Limpiamos los campos del formulario para la próxima vez
        event.target.reset();
    }
});

// Al escribir de nuevo en el campo, quitamos la alerta para permitir reintentar
document.getElementById("RegistroPasswordConfirm").addEventListener("input", event => {
    event.target.setCustomValidity("");
});

// --- FORMULARIO DE INICIO DE SESIÓN ---
document.getElementById("inicioSesionForm").addEventListener("submit", event => {
    event.preventDefault();
    console.log("Inicio de sesión enviado con éxito.");
    loginModal.classList.add("hidden");
    event.target.reset();
});