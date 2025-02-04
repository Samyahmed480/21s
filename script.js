let cart = [];

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} x ${item.quantity} = ${item.price * item.quantity} ريال`;
        cartItems.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = `المجموع: ${total} ريال`;
}

function checkout() {
    if (cart.length === 0) {
        alert('السلة فارغة');
        return;
    }
    alert('تم إتمام الطلب بنجاح!');
    cart = [];
    updateCartDisplay();
}
