document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    function animateProgress(daysCompleted, goalDays) {
        const circle = document.getElementById('progress-circle-bar');
        const numberEl = document.getElementById('progress-number');

        if (!circle || !numberEl) return;

        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const progress = daysCompleted / goalDays;
        const offset = circumference * (1 - progress);

        // Animar el círculo
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 300); 

        let start = 0;
        const duration = 1500; 
        const stepTime = Math.abs(Math.floor(duration / daysCompleted));

        const timer = setInterval(() => {
            start += 1;
            numberEl.textContent = start;
            if (start === daysCompleted) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    const progressSection = document.querySelector('.progress-card');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress(40, 60);
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (progressSection) {
        progressObserver.observe(progressSection);
    }

});