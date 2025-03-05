document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    updateCarousel();
});
/*hola