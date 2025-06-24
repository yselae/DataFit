// js/routine-detail-script.js
// Este script se encarga de la página de detalle de una rutina.

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const routineId = params.get('id');

    // --- BUSCAR LA RUTINA Y MANEJAR ERRORES ---
    if (!routineId) {
        alert('No se especificó una rutina. Redirigiendo a la lista de rutinas.');
        window.location.href = 'rutinas.html';
        return; 
    }

    const routine = getRoutineById(routineId);

    if (!routine) {
        alert('No se encontró la rutina solicitada. Puede que haya sido eliminada.');
        window.location.href = 'rutinas.html';
        return;
    }

    // --- POBLAR LA PÁGINA CON LOS DATOS DE LA RUTINA ---
    document.querySelector('.section-header h1').textContent = routine.name;
    document.querySelector('.routine-summary').textContent = routine.description;

    // --- GENERAR LA LISTA DE EJERCICIOS DINÁMICAMENTE ---
    const exerciseListEl = document.querySelector('.exercise-list');
    exerciseListEl.innerHTML = ''; 

    if (routine.exercises && routine.exercises.length > 0) {
        routine.exercises.forEach(exercise => {
            const exerciseItem = document.createElement('li');
            exerciseItem.classList.add('exercise-item');

            exerciseItem.innerHTML = `
                <div class="exercise-info">
                    <span class="exercise-name">${exercise.name}</span>
                    <small class="exercise-recommendation">${exercise.recommendations}</small>
                </div>
                <div class="exercise-sets">
                    <span class="exercise-series-reps">${exercise.series} x ${exercise.reps}</span>
                    <small class="exercise-rest">Descanso: ${exercise.rest}</small>
                </div>
                <div class="exercise-status">
                    <input type="checkbox" class="exercise-checkbox" aria-label="Marcar como completado">
                </div>
            `;
            exerciseListEl.appendChild(exerciseItem);
        });
    } else {
        exerciseListEl.innerHTML = '<li class="exercise-item-empty">Esta rutina aún no tiene ejercicios definidos.</li>';
    }

    // --- AÑADIR FUNCIONALIDAD A LOS BOTONES DE ACCIÓN (EDITAR Y ELIMINAR) ---
    const deleteButton = document.querySelector('button[title="Eliminar Rutina"]');
    const editButton = document.querySelector('button[title="Editar Rutina"]');

    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            if (confirm(`¿Estás seguro de que quieres eliminar la rutina "${routine.name}"? Esta acción no se puede deshacer.`)) {
                deleteRoutine(routineId);
                alert('Rutina eliminada con éxito.');
                window.location.href = 'rutinas.html';
            }
        });
    }

    if (editButton) {
        editButton.addEventListener('click', () => {
            window.location.href = `nueva-rutina.html?editId=${routineId}`;
        });
    }
});