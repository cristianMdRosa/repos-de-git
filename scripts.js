document.addEventListener('DOMContentLoaded', function() {
    // Evento para cambiar la descripción al cambiar la imagen en el carrusel
    const carousel = document.getElementById('carouselExampleCaptions');
    const descriptionBox = document.querySelector('.mt-3 p'); // El cuadro de descripción debajo del carrusel

    carousel.addEventListener('slide.bs.carousel', function (event) {
        const activeItemIndex = event.to; // Obtiene el índice de la imagen activa después de cambiar
        const descriptions = [
            'Descripción de la imagen 1.',
            'Descripción de la imagen 2.',
            'Descripción de la imagen 3.'
        ];

        // Actualiza el texto de la descripción según la imagen activa
        descriptionBox.innerHTML = descriptions[activeItemIndex];
    });

    // Evento para redirigir a otra página cuando se haga clic en el botón
    const redirectButton = document.querySelector('.btn.btn-primary'); // El botón con la clase "btn btn-primary"

    redirectButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        window.location.href = "otra_pagina.html"; // Redirige a la nueva página
    });
});
