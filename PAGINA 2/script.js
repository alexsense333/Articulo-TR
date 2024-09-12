document.getElementById('openButton').addEventListener('click', function () {
    const nikeUrl = 'https://universidadeuropea.com/blog/preparacion-fisica-futbol/';
    const adidasUrl = 'https://es.pornhub.com/';

    // Abre la primera URL en una nueva pestaña
    const nikeWindow = window.open(nikeUrl, '_blank');

    // Después de 3 segundos, redirige a la segunda URL en la misma pestaña
    setTimeout(() => {
        if (nikeWindow) {
            nikeWindow.location.href = adidasUrl;
        }
    }, 7000); // 6000 ms = 3 segundos
});
