<<<<<<< HEAD
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
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
// JavaScript for Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid phone number with country code (e.g., +61XXXXXXXXXX)!");
        return;
    }

    alert("Thank you for contacting us! Your message has been sent.");
    contactForm.reset();
});

// Helper function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone number with country code
function validatePhoneNumber(phone) {
    // Regular expression to match phone numbers with a country code
    const phoneRegex = /^\+\d{1,3}\d{6,14}$/;
    return phoneRegex.test(phone);
}


=======
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
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
// JavaScript for Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid phone number with country code (e.g., +61XXXXXXXXXX)!");
        return;
    }

    alert("Thank you for contacting us! Your message has been sent.");
    contactForm.reset();
});

// Helper function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone number with country code
function validatePhoneNumber(phone) {
    // Regular expression to match phone numbers with a country code
    const phoneRegex = /^\+\d{1,3}\d{6,14}$/;
    return phoneRegex.test(phone);
}


>>>>>>> 2c4f7359e2abdbbb90df452e46d985adb680280e
