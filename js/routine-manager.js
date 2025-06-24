// js/routine-manager.js

const ROUTINES_STORAGE_KEY = 'datafit_routines';

/**
 * Obtiene todas las rutinas desde localStorage.
 * @returns {Array} Un array de objetos de rutina.
 */
function getRoutines() {
    const routines = localStorage.getItem(ROUTINES_STORAGE_KEY);
    // Si no hay nada guardado, devuelve un array vacío para evitar errores.
    return routines ? JSON.parse(routines) : [];
}

/**
 * Guarda un array completo de rutinas en localStorage.
 * @param {Array} routines El array completo de rutinas para guardar.
 */
function saveRoutines(routines) {
    localStorage.setItem(ROUTINES_STORAGE_KEY, JSON.stringify(routines));
}

/**
 * Añade una nueva rutina a la lista existente.
 * @param {object} newRoutine El nuevo objeto de rutina que se va a añadir.
 */
function addRoutine(newRoutine) {
    const routines = getRoutines();
    routines.push(newRoutine);
    saveRoutines(routines);
}

/**
 * Elimina una rutina de la lista buscando por su ID.
 * @param {string} routineId El ID de la rutina a eliminar.
 */
function deleteRoutine(routineId) {
    let routines = getRoutines();
    // 'filter' crea un nuevo array con todas las rutinas excepto la que coincide con el ID.
    routines = routines.filter(routine => routine.id !== routineId);
    saveRoutines(routines);
}

/**
 * Actualiza una rutina existente en la lista.
 * @param {object} updatedRoutine El objeto de rutina con los datos actualizados (debe tener el mismo ID).
 */
function updateRoutine(updatedRoutine) {
    let routines = getRoutines();
    // Encuentra el índice de la rutina que queremos actualizar.
    const routineIndex = routines.findIndex(routine => routine.id === updatedRoutine.id);
    // Si la encuentra (el índice no es -1), la reemplaza con la nueva versión.
    if (routineIndex !== -1) {
        routines[routineIndex] = updatedRoutine;
        saveRoutines(routines);
    }
}

/**
 * Obtiene una única rutina de la lista buscando por su ID.
 * @param {string} routineId El ID de la rutina a buscar.
 * @returns {object|null} El objeto de rutina encontrado, o null si no existe.
 */
function getRoutineById(routineId) {
    const routines = getRoutines();
    return routines.find(routine => routine.id === routineId) || null;
}