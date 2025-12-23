// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☾';
    } else {
        themeToggle.textContent = '☀';
    }
});