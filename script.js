let cart = [];
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);
        cart.push({
            name,
            price
        });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price} ₽`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = `${total} ₽`;
    cartCount.textContent = cart.length;
}