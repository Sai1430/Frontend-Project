// Add any JavaScript functionality here

// Example: Display a confirmation message when adding a product to the cart
const addToCartButtons = document.querySelectorAll('.btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('h3').textContent;
        alert(`Added ${productName} to the cart!`);
    });
});

// Example: Implement a simple image slider for the hero section
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;
const heroImage = document.querySelector('#hero img');

function changeImage() {
    heroImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    changeImage();
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    changeImage();
}

// Example: Automatically switch images every 3 seconds
setInterval(nextImage, 3000);
