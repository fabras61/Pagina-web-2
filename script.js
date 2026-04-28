let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(product, price) {
  cart.push({ product, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  alert(product + " agregado al carrito");
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  let total = 0;

  if (cartItems) {
    cartItems.innerHTML = "";

    cart.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = item.product + " - $" + item.price;

      cartItems.appendChild(li);

      total += item.price;
    });
  }

  if (cartTotal) {
    cartTotal.textContent = total;
  }

  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function clearCart() {
  cart = [];

  localStorage.removeItem("cart");

  updateCart();
}

function buyWhatsApp() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let message = "Hola, quiero comprar:%0A%0A";

  let total = 0;

  cart.forEach((item) => {
    message += item.product + " - $" + item.price + "%0A";
    total += item.price;
  });

  message += "%0ATotal: $" + total;

  const phone = "549xxxxxxxxxx";

  const url = "https://wa.me/" + phone + "?text=" + message;

  window.open(url, "_blank");
}
