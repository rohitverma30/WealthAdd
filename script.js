document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart");
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let itemCount = 0;

    // Function to add an item to the cart
    function addToCart() {
        itemCount++;
        cartCount.textContent = itemCount;
    }

    // Add a click event listener to each "Add to Cart" button
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", addToCart);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Your code here

    // Function to update the cart display
    function updateCart() {
        const cartCount = cartItems.length;
        document.getElementById('cart-count').innerText = cartCount.toString();

        // Display cart items in the modal
        const cartItemsList = document.getElementById('cart-items-list');
        cartItemsList.innerHTML = '';
        cartItems.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(listItem);
        });
    }

    // Cart icon click event handler to open the modal
    const cartIcon = document.getElementById('cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            updateCart(); // Update the cart before opening the modal
            const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
            cartModal.show();
        });
    }
});
