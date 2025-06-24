// js/routines-list-script.js
// Este script lee las rutinas guardadas en localStorage y las muestra en la página rutinas.html

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el contenedor principal donde se insertarán las tarjetas
    const routinesContent = document.querySelector('.routines-content');
    const addButton = document.querySelector('.add-routine-button');

    // Si no encontramos los elementos necesarios, detenemos el script para evitar errores.
    if (!routinesContent || !addButton) {
        console.error("No se encontraron los elementos necesarios en la página de rutinas.");
        return;
    }

    // Obtenemos todas las rutinas guardadas usando nuestra función de routine-manager.js
    const routines = getRoutines();

    // Limpiamos cualquier tarjeta estática que pueda existir para no duplicar contenido
    routinesContent.querySelectorAll('.routine-card-link').forEach(card => card.remove());

    if (routines.length === 0) {
        // Si no hay rutinas, mostramos un mensaje amigable al usuario
        const noRoutinesMessage = document.createElement('p');
        noRoutinesMessage.textContent = 'Aún no has generado ninguna rutina. ¡Crea una nueva para empezar!';
        noRoutinesMessage.style.textAlign = 'center';
        noRoutinesMessage.style.padding = '2rem';
        noRoutinesMessage.style.fontSize = '1.2rem';
        // Insertamos el mensaje antes del botón de "añadir"
        addButton.insertAdjacentElement('beforebegin', noRoutinesMessage);
    } else {
        // Si hay rutinas, iteramos sobre cada una para crear su tarjeta HTML
        routines.forEach(routine => {
            // Creamos el HTML para la tarjeta de la rutina actual
            const routineCardHTML = `
                <a href="detalle-rutina.html?id=${routine.id}" class="routine-card-link">
                    <article class="routine-card">
                        <div class="routine-card__details">
                            <h2 class="routine-card__title">${routine.name}</h2>

                            <p class="routine-card__description">${routine.description}</p>
                            
                            <div class="routine-card__footer">
                                <span class="btn btn--danger">ver más</span>
                            </div>
                        </div>
                        <div class="routine-card__image-container">
                            <img src="assets/img/TrenSuperior.png" alt="Imagen de rutina">
                        </div>
                    </article>
                </a>
            `;
            // Insertamos la nueva tarjeta justo antes del botón de "Añadir Rutina"
            addButton.insertAdjacentHTML('beforebegin', routineCardHTML);
        });
    }
});