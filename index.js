// JavaScript for Toggle Menu
const navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


// Select the navbar element
const navbar = document.querySelector('.navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Check the vertical scroll position
    if (window.scrollY > 50) {
        // Add the 'scrolled' class to the navbar
        navbar.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        navbar.classList.remove('scrolled');
    }
});