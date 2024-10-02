// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show alert message on page load
window.onload = function () {
    console.log("Welcome to Virat's Math Website!");
};

// Dynamic display of articles in the console
const articles = [
    'Understanding Motives',
    'An Introduction to Homological Algebra',
    'The Role of Stacks in Algebraic Geometry'
];

articles.forEach((article, index) => {
    console.log(`Article ${index + 1}: ${article}`);
});
