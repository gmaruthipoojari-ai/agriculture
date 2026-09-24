console.log("JavaScript is connected!");

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.getAttribute("data-target"));

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if (count < target) {

            count += increment;

            counter.textContent = Math.ceil(count);

            setTimeout(updateCounter, 20);

        } else {

            counter.textContent = target;

        }

    };

    updateCounter();

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();s

    alert("Thank you! Your message has been received. 🌾");

    contactForm.reset();

});
// ===========================
// MOBILE NAVBAR
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});