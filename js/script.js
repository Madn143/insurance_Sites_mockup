document.addEventListener("DOMContentLoaded", function () {
    // Dropdown Menu
    const menuBtn = document.querySelector(".menu-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuBtn.addEventListener("click", function () {
        dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

    // FAQ Slider
    const slides = document.querySelectorAll(".faq-slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});
