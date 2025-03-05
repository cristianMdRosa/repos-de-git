document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy3DZWeCR_iHdTsDO3qoXaNuvCuhWjgncaA&s",
        "https://ugb.edu.sv/wp-content/uploads/2023/06/SLIDER3-scaled.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-orFGUybgXYdQDoCw5AwbIq99jt_rzNCxKg&s"
    ];
    
    let currentIndex = 0;
    const imageElement = document.getElementById("image");

    function updateImage() {
        imageElement.src = images[currentIndex];
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    updateImage();
});
