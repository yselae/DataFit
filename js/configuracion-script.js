// js/configuracion-script.js

document.addEventListener('DOMContentLoaded', () => {
    const SETTINGS_KEY = 'datafit_user_settings';

    // --- Elementos del DOM ---
    const form = document.getElementById('settings-form');
    const notificationsToggle = document.getElementById('notifications-enabled');
    const motivationToggle = document.getElementById('include-motivation');
    const emojisToggle = document.getElementById('include-emojis');
    const subOptionsContainer = document.getElementById('notification-sub-options');
    const logoutButton = document.getElementById('logout-button');

    // --- CARGAR PREFERENCIAS GUARDADAS ---
    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
        
        if (savedSettings) {
            notificationsToggle.checked = savedSettings.notificationsEnabled;
            motivationToggle.checked = savedSettings.includeMotivation;
            emojisToggle.checked = savedSettings.includeEmojis;
        }
        toggleSubOptions();
    }

    // --- GUARDAR PREFERENCIAS ---
    function saveSettings() {
        const currentSettings = {
            notificationsEnabled: notificationsToggle.checked,
            includeMotivation: motivationToggle.checked,
            includeEmojis: emojisToggle.checked,
        };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(currentSettings));
        alert('¡Preferencias guardadas!');
    }

    // --- MANEJAR LA INTERACTIVIDAD ---
    function toggleSubOptions() {
        if (notificationsToggle.checked) {
            subOptionsContainer.classList.remove('is-disabled');
        } else {
            subOptionsContainer.classList.add('is-disabled');
        }
    }

    notificationsToggle.addEventListener('change', toggleSubOptions);

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        saveSettings();
    });

    logoutButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
            localStorage.removeItem('datafit_routines');
            localStorage.removeItem(SETTINGS_KEY);
            window.location.href = 'index.html';
        }
    });

    loadSettings();
});