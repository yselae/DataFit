document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ANIMACIÓN DEL ANILLO DE PROGRESO ---
    const ringBar = document.getElementById('progress-ring-bar');
    const daysText = document.getElementById('progress-days');

    function animateProgressRing(daysCompleted, goalDays) {
        if (!ringBar || !daysText) return;

        const radius = ringBar.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const progress = Math.min(daysCompleted / goalDays, 1);
        const offset = circumference * (1 - progress);

        ringBar.style.strokeDasharray = circumference;
        ringBar.style.strokeDashoffset = offset;

        let start = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / daysCompleted));
        const timer = setInterval(() => {
            start++;
            daysText.textContent = start;
            if (start >= daysCompleted) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    animateProgressRing(40, 60);

    // --- 2. CARGAR HISTORIAL DE RUTINAS ---
    const historyListContainer = document.getElementById('history-list');
    const routines = getRoutines();

    if (historyListContainer) {
        historyListContainer.innerHTML = '';
        if (routines.length > 0) {
            routines.forEach(routine => {
                const historyItem = document.createElement('div');
                historyItem.classList.add('history-item');
                historyItem.innerHTML = `
                    <strong>${routine.name}</strong>
                    <p>Completado el: ${new Date().toLocaleDateString('es-ES')}</p>
                `;
                historyListContainer.appendChild(historyItem);
            });
        } else {
            historyListContainer.innerHTML = '<p>Tu historial de rutinas está vacío.</p>';
        }
    }

    // --- 3. DATOS DE ESTADÍSTICAS (EJEMPLO) ---
    const statsBarsContainer = document.querySelector('.stats-bars-container');
    if (statsBarsContainer) {
        statsBarsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Rutina 1</span>
                <div class="stat-bar-wrapper">
                    <div class="stat-bar stat-bar--dark" style="width: 45%;"></div>
                    <div class="stat-bar stat-bar--light" style="width: 90%;"></div>
                </div>
                <span class="stat-completion">9 de 20 completados</span>
            </div>
            `;
    }

    // --- 4. DATOS DE COMPARACIÓN ENTRE SEMANAS (EJEMPLO) ---
    const comparisonChart = document.querySelector('.comparison-chart');
    if (comparisonChart) {
        comparisonChart.innerHTML = `
            <div class="chart-item">
                <span>Rutina 1</span>
                <div class="chart-column">
                    <div class="chart-bar chart-bar--dark" style="width: 30%;"></div>
                    <div class="chart-bar chart-bar--light" style="width: 70%;"></div>
                </div>
            </div>
            `;
    }
});