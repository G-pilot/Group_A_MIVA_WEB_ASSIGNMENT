// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemElement = button.closest('.item');
            const itemId = itemElement.getAttribute('data-id');
            const itemName = itemElement.querySelector('h2').textContent;
            const itemPrice = parseFloat(itemElement.querySelector('p').textContent.replace('Price: $', ''));

            // Add item to cart
            cartItems.push({ id: itemId, name: itemName, price: itemPrice });
            updateCart();
        });
    });

    function updateCart() {
        // Clear the current cart items
        cartItemsElement.innerHTML = '';

        // Add each item to the cart display
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });

        // Update total price
        totalPriceElement.textContent = total.toFixed(2);
    }
});