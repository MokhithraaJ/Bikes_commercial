document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Card flip functionality
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.card-inner').style.transform = 
                card.querySelector('.card-inner').style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });

    // Shopping Cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const model = button.getAttribute('data-model');
            const price = parseInt(button.getAttribute('data-price'));
            addToCart(model, price);
            updateCartDisplay();
        });
    });

    function addToCart(model, price) {
        cart.push({model, price});
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.model} - $${item.price}`;
            cartItems.appendChild(itemElement);
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total}`;
    }
});
