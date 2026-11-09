const products = [
  { id: 1, name: "Taza Ilustrada", price: 4500, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300" },
  { id: 2, name: "Caja Sorpresa Gourmet", price: 12800, img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300" },
  { id: 3, name: "Vela Aromática Soja", price: 3200, img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300" },
  { id: 4, name: "Set Cuaderno & Lapicera", price: 6900, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300" }
];

let cart = JSON.parse(localStorage.getItem('giftShopCart')) || [];

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toLocaleString()}</p>
      <button class="add-btn" onclick="addToCart(${p.id})">Agregar al Carrito</button>
    </div>
  `).join('');
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  saveAndRender();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
  }
  saveAndRender();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('giftShopCart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countBadge = document.getElementById("cartCount");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  if (countBadge) countBadge.textContent = totalCount;
  if (totalEl) totalEl.textContent = `$${totalPrice.toLocaleString()}`;

  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
  }

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-msg">El carrito está vacío</p>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <li class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">$${item.price.toLocaleString()} x ${item.qty}</div>
      </div>
      <div>
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
        <span style="margin: 0 6px; font-weight: 600;">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    </li>
  `).join('');
}

function sendWhatsAppOrder() {
  if (cart.length === 0) return;

  const phone = "5492991234567"; // Reemplazá con tu número
  let message = "Hola! Quiero realizar un pedido en la regalería:\n\n";

  cart.forEach(item => {
    message += `• ${item.name} x${item.qty} - $${(item.price * item.qty).toLocaleString()}\n`;
  });

  const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  message += `\n*Total: $${total.toLocaleString()}*`;

  const encodedUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
});