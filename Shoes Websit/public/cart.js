// JavaScript for handling promo code, removing items, etc.

const promoCodeInput = document.querySelector('.promo-code input');
const applyPromoButton = document.querySelector('.promo-code button');
const cartItems = document.querySelectorAll('.cart-item');

applyPromoButton.addEventListener('click', () => {
    const promoCode = promoCodeInput.value;
    // Implement logic to apply the promo code (e.g., update the total price)
});

cartItems.forEach(item => {
    const removeButton = item.querySelector('.remove-item');
    removeButton.addEventListener('click', () => {
        // Implement logic to remove the item from the cart (e.g., update the total price)
    });
});