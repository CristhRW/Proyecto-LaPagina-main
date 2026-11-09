// Seleccionamos los elementos del DOM
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

const loginFormContainer = document.getElementById('loginFormContainer');
const registerFormContainer = document.getElementById('registerFormContainer');

const toRegisterLink = document.getElementById('toRegisterLink');
const toLoginLink = document.getElementById('toLoginLink');

// 1. Abrir Modal (Siempre arranca mostrando el Login)
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    loginFormContainer.classList.remove('hidden');
    registerFormContainer.classList.add('hidden');
});

// 2. Cerrar Modal usando la 'X'
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// 3. Cerrar Modal si el usuario hace clic afuera de la caja blanca
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// 4. Cambiar la vista de Login a Registro
toRegisterLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que el enlace intente recargar la página
    loginFormContainer.classList.add('hidden');
    registerFormContainer.classList.remove('hidden');
});

// 5. Cambiar la vista de Registro a Login
toLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerFormContainer.classList.add('hidden');
    loginFormContainer.classList.remove('hidden');
});