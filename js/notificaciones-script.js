// js/notificaciones-script.js

document.addEventListener('DOMContentLoaded', () => {

    // DATOS
    let notificationsData = [
        { id: 1, type: 'success', icon: 'fa-trophy', text: '¡Felicitaciones! Has cumplido 3 días seguidos tu rutina, ¡tu progreso será imparable!', time: 'hace 15 minutos', isRead: false },
        { id: 2, type: 'info', icon: 'fa-chart-pie', text: 'Tu progreso se nota: completaste el 80% de tu rutina este mes. ¡Sigue así!', time: 'hace 2 horas', isRead: false },
        { id: 3, type: 'warning', icon: 'fa-utensils', text: 'Hora de comer saludable. Recuerda que las pequeñas decisiones suman grandes logros.', time: 'ayer', isRead: true },
        { id: 4, type: 'info', icon: 'fa-calendar-check', text: 'Tu próxima rutina "Día de Empuje (Push)" está programada para mañana.', time: 'hace 1 día', isRead: false },
    ];

    const listContainer = document.querySelector('.notifications-list');
    const markAllButton = document.querySelector('.btn-mark-all');

    // RENDERIZAR
    function renderNotifications() {
        listContainer.innerHTML = ''; 

        if (notificationsData.length === 0) {
            listContainer.innerHTML = '<p class="empty-state-message">No tienes notificaciones nuevas.</p>';
            markAllButton.style.display = 'none'; 
            return;
        }

        markAllButton.style.display = 'block';

        notificationsData.forEach(notification => {
            const item = document.createElement('article');
            item.classList.add('notification-item', notification.type);
            if (notification.isRead) {
                item.classList.add('read');
            }
            item.dataset.id = notification.id;

            item.innerHTML = `
                <i class="fas ${notification.icon} notification-icon"></i>
                <div class="notification-content">
                    <p class="notification-text">${notification.text}</p>
                    <small class="notification-time">${notification.time}</small>
                </div>
                <button class="notification-close-btn" title="Cerrar">&times;</button>
            `;
            listContainer.appendChild(item);
        });
    }

    // BOTONES
    
    markAllButton.addEventListener('click', () => {
        notificationsData.forEach(n => n.isRead = true);
        renderNotifications(); 
    });

    listContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('notification-close-btn')) {
            const notificationItem = event.target.closest('.notification-item');
            const notificationId = parseInt(notificationItem.dataset.id);
            notificationsData = notificationsData.filter(n => n.id !== notificationId);
            
            renderNotifications();
        }
    });
    renderNotifications();
});