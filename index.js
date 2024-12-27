// Highlight active navbar link based on the current URL
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname; // Get the current page's path
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        // Check if the link's href matches the current path
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

function showModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal on clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
};

let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Auto slide change every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 7000);

// Initialize the first slide
showSlide(currentSlide);

