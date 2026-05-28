const estilo = document.createElement('style');
estilo.textContent = `
    .animacion-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .animacion-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(estilo);

const elementosAAnimar = document.querySelectorAll('.tarjeta-producto, .beneficio-item, .info-ubicacion');

elementosAAnimar.forEach(elemento => {
    elemento.classList.add('animacion-scroll');
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementosAAnimar.forEach(elemento => {
    observador.observe(elemento);
});