// js/new-routine-script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.routine-form-container');
    if (!form) return;

    // --- ELEMENTOS DEL DOM ---
    const pageTitle = document.querySelector('.section-header h1');
    const objectiveContainer = form.querySelector('[data-objective]').parentElement;
    const intensityContainer = form.querySelector('[data-intensity]').parentElement;
    const createButton = form.querySelector('.btn-create');

    // --- DETECTAR MODO (CREAR vs. EDITAR) ---
    const params = new URLSearchParams(window.location.search);
    const editId = params.get('editId');
    const isEditMode = !!editId; 
    let routineToEdit = null;

    // --- LÓGICA DE SELECCIÓN DE BOTONES ---
    objectiveContainer.addEventListener('click', (event) => handleSelection(event, objectiveContainer));
    intensityContainer.addEventListener('click', (event) => handleSelection(event, intensityContainer));
    
    function handleSelection(event, container) {
        const clickedButton = event.target.closest('.option-pill');
        if (!clickedButton) return;
        container.querySelectorAll('.option-pill').forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');
    }

    // --- SI ESTAMOS EN MODO EDICIÓN, PRE-CARGAMOS LOS DATOS ---
    if (isEditMode) {
        routineToEdit = getRoutineById(editId);
        if (routineToEdit) {
            // Cambiar textos de la página
            pageTitle.textContent = 'EDITAR RUTINA';
            createButton.textContent = 'GUARDAR CAMBIOS';

            // Pre-seleccionar los botones correctos
            preselectButton(objectiveContainer, routineToEdit.objective);
            preselectButton(intensityContainer, routineToEdit.intensity);
        }
    }

    function preselectButton(container, text) {
        container.querySelectorAll('.option-pill').forEach(btn => {
            if (btn.textContent === text) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // --- LÓGICA DEL BOTÓN PRINCIPAL (CREAR o GUARDAR CAMBIOS) ---
    createButton.addEventListener('click', () => {
        const selectedObjective = objectiveContainer.querySelector('.option-pill.active');
        const selectedIntensity = intensityContainer.querySelector('.option-pill.active');

        if (!selectedObjective || !selectedIntensity) {
            alert('Por favor, selecciona un objetivo y un nivel de intensidad.');
            return;
        }

        const template = ROUTINE_TEMPLATES.find(t => 
            t.objective === selectedObjective.textContent && 
            t.intensity === selectedIntensity.textContent
        );

        if (!template) {
            alert('Lo sentimos, no hay una rutina predeterminada para esa combinación.');
            return;
        }

        if (isEditMode) {
            // --- ACCIÓN DE ACTUALIZAR ---
            const updatedRoutine = {
                ...template, 
                id: editId,  
                name: template.name 
            };
            updateRoutine(updatedRoutine);
            alert('¡Rutina actualizada con éxito!');
            window.location.href = `detalle-rutina.html?id=${editId}`; 
        } else {
            // --- ACCIÓN DE CREAR ---
            const newRoutine = {
                ...template,
                id: 'routine_' + Date.now(),
            };
            addRoutine(newRoutine);
            alert(`¡Se ha añadido la rutina "${newRoutine.name}" a tu lista!`);
            window.location.href = 'rutinas.html';
        }
    });
});