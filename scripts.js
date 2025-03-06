document.addEventListener('DOMContentLoaded', function() {
    // Evento para cambiar la descripción al cambiar la imagen en el carrusel
    const carousel = document.getElementById('carouselExampleCaptions');
    const descriptionBox = document.getElementById('descripcion');

    const descriptions = [
        'El premio de la Academia de Artes y Ciencias Cinematográficas (en inglés: Academy Awards), conocido popularmente como premio Óscar,1​ es una distinción anual concedida por la academia de las Artes y las Ciencias Cinematográficas (en inglés: Academy of Motion Picture Arts and Sciences; acrónimo: AMPAS)2​ en reconocimiento a la excelencia y activismo social de los profesionales de la industria cinematográfica que incluye actores, directores y escritores, ampliamente considerada el máximo honor en el cine.',
        'En Anora, Baker experimentó con el arquetipo de Cenicienta, pero los detalles en su guion y el duro desarrollo de la historia la dotan de una crudeza muy especial que juega con el romance, el drama y una agudísima comedia.',
        'Adrien Brody era el gran favorito en la categoría Mejor actor y logró llevarse el trofeo gracias a su rol en “El brutalista”, la ambiciosa cinta dirigida por Brady Corbet.'
    ];

    carousel.addEventListener('slid.bs.carousel', function (event) {
        const activeItem = event.relatedTarget;
        const index = [...activeItem.parentElement.children].indexOf(activeItem);
        descriptionBox.innerHTML = descriptions[index];
    });
});