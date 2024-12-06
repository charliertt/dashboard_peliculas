document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('ul.navbar-nav'); // El contenedor que tiene todos los enlaces

    navContainer.addEventListener('click', (event) => {
        const link = event.target.closest('.nav-link'); // Asegúrate de que el clic proviene de un enlace

        if (link) {
            event.preventDefault(); // Evita la navegación completa

            const targetHref = link.getAttribute('href'); // Obtén el href del enlace

            if (targetHref && targetHref !== '#') {
                loadContent(targetHref); // Llama a la función para cargar el contenido
            }
        }
    });
});

function loadContent(url) {
    console.log(`Cargando contenido desde: ${url}`);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector('.main-content').innerHTML = data
            
            if($('#myTable').length){
                $('#myTable').DataTable();
            }; // Actualiza el contenido dinámico
        })
        .catch(error => console.error('Error cargando contenido:', error));
}
