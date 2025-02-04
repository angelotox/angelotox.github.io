document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        '"Conocer nos Hace Libres"',
        '"Knowledge makes us Free"',
        '"La Connaissance nous rend libres"',
        '"La Conoscenza ci rende liberi"',
        '"Scientia nos Liberos"'
    ];

    let index = 0;
    const heroText = document.getElementById("hero-text");

    setInterval(() => {
        heroText.style.opacity = 0; // Suaviza la transición saliente
        setTimeout(() => {
            index = (index + 1) % phrases.length;
            heroText.textContent = phrases[index];
            heroText.style.opacity = 1; // Suaviza la transición entrante
        }, 1000);
    }, 4000); // Cambia cada 4 segundos
});
