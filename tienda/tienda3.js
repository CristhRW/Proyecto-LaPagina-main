// Productos inspirados en la gráfica de la marca
const products = [
    { id: 1, name: 'Caja «Un abrazo para vos»', price: 34900, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd34?q=80&w=400' },
    { id: 2, name: 'Taza Nube de Cerámica', price: 18900, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400' },
    { id: 3, name: 'Vela Jardín Tranquilo', price: 16500, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=400' },
    { id: 4, name: 'Cuaderno de Tapa de Lino', price: 14000, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400' }
];

let cart = [];

// Formateador de moneda en ARS
const formatARS = (num) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(num);

// Renderizar tarjetas de la tienda
const renderStore = () => {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="product-card h-100 pb-3">
                <div class="card-img-wrapper">
                    <img src="${p.image}" class="product-img" alt="${p.name}">
                </div>
                <div class="px-3 pt-2">
                    <h6 class="fw-bold mb-1">${p.name}</h6>
                    <p class="text-muted small mb-3">${formatARS(p.price)} ARS</p>
                    <button class="btn btn-outline-violet btn-sm w-100 rounded-pill" onclick="agregarAlCarrito(${p.id})">
                        Agregar al carrito +
                    </button>
                </div>
            </div>
        </div>
    `).join('');
};

// Agregar al carrito
const agregarAlCarrito = (id) => {
    const prod = products.find(p => p.id === id);
    const enCarrito = cart.find(item => item.id === id);

    if (enCarrito) {
        enCarrito.quantity++;
    } else {
        cart.push({ ...prod, quantity: 1 });
    }
    actualizarCarritoUI();
};

// Modificar cantidad (+ / -)
const cambiarCantidad = (id, delta) => {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }
    actualizarCarritoUI();
};

// Eliminar un producto
const quitarDelCarrito = (id) => {
    cart = cart.filter(p => p.id !== id);
    actualizarCarritoUI();
};

// Vaciar carrito entero
const vaciarCarrito = () => {
    cart = [];
    actualizarCarritoUI();
};

// Actualizar vista del carrito
const actualizarCarritoUI = () => {
    const container = document.getElementById('cart-items');
    const counter = document.getElementById('cart-counter');
    const totalEl = document.getElementById('cart-total');

    // Contador en el badge
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    counter.textContent = totalCount;

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-muted my-5">Tu carrito está vacío 🌸</p>`;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                <img src="${item.image}" class="rounded-3" style="width: 48px; height: 48px; object-fit: cover;">
                <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0 small fw-bold">${item.name}</h6>
                    <small class="text-muted">${formatARS(item.price)}</small>
                    <div class="d-flex align-items-center gap-2 mt-1">
                        <button class="btn btn-sm btn-light py-0 px-2 border" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                        <span class="small fw-bold">${item.quantity}</span>
                        <button class="btn btn-sm btn-light py-0 px-2 border" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="text-end ms-2">
                    <span class="fw-bold small d-block mb-1">${formatARS(item.price * item.quantity)}</span>
                    <button class="btn btn-link text-danger p-0 small" onclick="quitarDelCarrito(${item.id})"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        `).join('');
    }

    // Precio total
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalEl.textContent = `${formatARS(total)} ARS`;
};

// Proceso de compra
const realizarCompra = () => {
    if (cart.length === 0) {
        alert("Agregá al menos un producto antes de comprar.");
        return;
    }

    // Cerrar offcanvas
    const offcanvasEl = document.getElementById('cartOffcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    bsOffcanvas.hide();

    // Mostrar modal
    const modalEl = document.getElementById('successModal');
    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();

    // Resetear carrito
    cart = [];
    actualizarCarritoUI();
};

// Inicio
document.addEventListener('DOMContentLoaded', () => {
    renderStore();
    actualizarCarritoUI();
});