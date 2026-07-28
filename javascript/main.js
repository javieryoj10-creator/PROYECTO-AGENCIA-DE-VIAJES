/* ==========================================
    NEXOVIAJES - ANIMACIÓN BIDIRECCIONAL (SUBIR / BAJAR)
   ========================================== */

/*document.addEventListener('DOMContentLoaded', () => {
    
    const opcionesObservador = {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.1
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            const elemento = entrada.target;
            const retardo = parseInt(elemento.dataset.delay, 10) || 0;

            if (entrada.isIntersecting) {
                // Al entrar en pantalla: aplica la visibilidad con su retardo
                setTimeout(() => {
                    elemento.classList.add('visible');
                }, retardo);
            } else {
                // Al salir de pantalla: remueve la clase para que pueda re-animarse
                elemento.classList.remove('visible');
            }
        });
    }, opcionesObservador);

    const elementosAnimables = document.querySelectorAll('.revelar-scroll');
    elementosAnimables.forEach(elemento => observador.observe(elemento));
});*/