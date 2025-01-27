
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const message = document.getElementById('reviewer-message').value;
    
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
    `;
    
    document.getElementById('reviews-list').appendChild(review);
    
    // Clear the form
    document.getElementById('review-form').reset();
});

function addToCart() {
    const cartCount = document.getElementById('cart-count');
    let count = parseInt(cartCount.textContent, 10);
    cartCount.textContent = count + 1;
}
