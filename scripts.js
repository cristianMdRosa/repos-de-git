document.addEventListener('DOMContentLoaded', function() {
    // Evento para cambiar la descripción al cambiar la imagen en el carrusel
    const carousel = document.getElementById('carouselExampleCaptions');
    const descriptionBox = document.getElementById('descripcion');

    const descriptions = [
        'Descripción de la imagen 1.',
        'Descripción de la imagen 2.',
        'Descripción de la imagen 3.'
    ];

    carousel.addEventListener('slid.bs.carousel', function (event) {
        const activeItem = event.relatedTarget;
        const index = [...activeItem.parentElement.children].indexOf(activeItem);
        descriptionBox.innerHTML = descriptions[index];
    });
});