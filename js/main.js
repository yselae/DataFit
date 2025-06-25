document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header-placeholder').innerHTML = data;

            const hamburger = document.querySelector('.hamburger-menu');
            const navMenu = document.querySelector('.nav-menu');

            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('is-active');
                hamburger.classList.toggle('is-active');
                
                const icon = hamburger.querySelector('i');
                if (navMenu.classList.contains('is-active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times'); // Ícono de 'X'
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        })
        .catch(error => console.error('Error al cargar el header:', error));
    
});

function setActiveLink() {
    const currentPagePath = window.location.pathname;

    const navLinks = document.querySelectorAll('.nav-menu a.nav-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (currentPagePath === linkPath) {
            link.classList.add('active');
        }
    });
}